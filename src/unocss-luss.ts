type IDic =  {[key:string]:string}

// 媒体查询--
const breakPoints = [640, 768, 1024, 1280, 1536, 1920];
const mediaQueryDic:IDic = {
    "xs": `(max-width: ${breakPoints[0]}px)`,
    "sm": `(min-width: ${breakPoints[0]}px) and (max-width: ${breakPoints[1]}px)`,
    "md": `(min-width: ${breakPoints[1]}px) and (max-width: ${breakPoints[2]}px)`,
    "lg": `(min-width: ${breakPoints[2]}px) and (max-width: ${breakPoints[3]}px)`,
    "xl": `(min-width: ${breakPoints[3]}px) and (max-width: ${breakPoints[4]}px)`,
    "2xl": `(min-width: ${breakPoints[4]}px) and (max-width: ${breakPoints[5]}px)`,
    "3xl": `(min-width: ${breakPoints[5]}px)`,
}

// 伪类
const preonduDic:IDic = {
    "ho": "$selector$:hover",
    "be": "$selector$::before",
    "af": "$selector$::after",
    "son": "$selector$ > *",
    "deep-son": "$selector$ *",
}

// 媒体查询和伪类
const mediaQueryAndPreonduList = Object.keys({
    ...mediaQueryDic,
    ...preonduDic,
});


const boxModeDic:IDic = {
    m: "margin",
    p: "padding",
    b: "border",
    o: "outline",
};

const directBaseDic:IDic = {
    t: "top",
    r: "right",
    b: "bottom",
    l: "left",
}

const directPlusDic:IDic = {
    ...directBaseDic,
    h: "left,right",
    x: "left,right",
    v: "top,bottom",
    y: "top,bottom",
}

const sizeValueDic:IDic = {
    ...directBaseDic,
    w: "width",
    h: "height",
    s: "width,height",
    lh: "line-height",
    lhh: "line-height, height",
    f: "font-size",
    fz: "font-size",
}

const unitDic:IDic = {
    x: "px",
    px: "px",
    p: "%",
    e: "em",
    r: "rem",
    "vh": "vh",
    "vw": "vw",
}

// const unitList = "xp".split("");
const unitList = Object.keys(unitDic);
const boxModelKeyList = Object.keys(boxModeDic)
const directionKeyList = Object.keys(directPlusDic)

// 媒体查询和伪类正则
const mediaQueryAndPreonduReg = `(?:(${mediaQueryAndPreonduList.join("|")})_)?`

// 数字和单位的正则
const numberAndUnitRegString =
    `((\\d+(-\\d+)?)|a)` +
    `(${unitList.join("|")})?` +
    "(i)?"
;

const keys = Object.keys;
const valueParser = function (value: string, isNega: boolean = false) {
    if (value == "a" || value == "auto") {
        return "auto";
    }
    if (/^0/.test(value)) {
        value = value.replace(/^0/, "0.");
    }
    value = value.replace(/-/, ".");
    const ratio = isNega ? -1 : 1;
    value = parseFloat(value) * ratio + "";
    return value;
}


const beforeRuleOutput = (conf:any, matched:any, originRet:any) => {
    let { rawSelector, currentSelector, variantHandlers, theme } = conf
    let {prefix} = matched;

    // 媒体查询
    const mqCondiString = mediaQueryDic[prefix] || "";

    // 伪类
    const preonduString = preonduDic[prefix] || "";

    // 媒体查询
    if(mqCondiString) {
        // const selector = e(rawSelector);
        const selector = rawSelector;
        const rulePropString =  Object.keys(originRet).reduce((result, key)=>{
            return result + `${key}:${originRet[key]};`;
        }, "");
        const ruleString = `html ${selector}{${rulePropString}}`;
        const fullString = `@media ${mqCondiString}{${ruleString}}`
        return fullString;
    }

    // 伪类
    else if(preonduString){
        const selector = rawSelector;

        const ruleName = "html " + preonduString.replace(/\$selector\$/, selector);
        const rulePropString = Object.keys(originRet).reduce((result, key) => {
            return result + `${key}:${originRet[key]};`;
        }, "");
        const ruleString = `${ruleName}{${rulePropString}}`;
        return ruleString;
    }

    // 正常规则
    else{
        return originRet;
    }
}

const boxRuleReg = new RegExp(
    "^"
    + mediaQueryAndPreonduReg
    + "(-)?"
    + `(${boxModelKeyList.join("|")})`
    + `(${directionKeyList.join("|")})?`
    + numberAndUnitRegString
    + "$"
)

const boxRule: [RegExp, Function] = [
    boxRuleReg,
    (gp:string[], conf:any) => {
        let [, prefix, nega, prop, dire, value, , , unit = "e", important = false] = gp;
        let { rawSelector, currentSelector, variantHandlers, theme } = conf
        important = important ? " !important" : "";
        const _prop = boxModeDic[prop]
        let _dires = directPlusDic[dire]
        let _unit = unitDic[unit]
        let keys: string[] = [];

        // outline模式下没有方向之别
        if("o"==prop) {
            _dires = "";
        }

        // 处理有方向的和没有方向的情况
        if(_dires) {
            _dires.split(",").forEach((_dire:string) => {
                keys.push(_prop + "-" + _dire);
            })
        }else{
            keys.push(_prop);
        }

        //处理border和outline的情况
        if (["b", "o"].indexOf(prop) >= 0) {
            keys = keys.map(s => s + "-width");
        }

        let _value = value;
        _value = valueParser(_value, !!nega);
        const ret = keys.reduce((result:IDic, key) => {
            let ret;
            if (_value == "auto") {
                ret = _value + important;
            }else{
                ret = _value + _unit + important;
            }
            result[key] = ret;
            return result;
        }, {});
        return beforeRuleOutput(conf, {prefix}, ret);
    }
];

const sizeRule = [
    new RegExp(
        "^"
        + mediaQueryAndPreonduReg
        + "(-)?"
        + `(${keys(sizeValueDic).join("|")})`
        + numberAndUnitRegString
        + "$"
    ),
    (gp:string[], conf:any) => {
        let [, prefix, nega, prop, value, , , unit = "e", important = false] = gp;
        important = important ? " !important" : "";
        const _prop = sizeValueDic[prop]
        let keys: string[] = _prop.split(",");
        let _value = valueParser(value, !!nega);
        if (_value != "auto") {
            _value = _value + unitDic[unit] + important;
        }else{
            _value = _value + important;
        }
        const ret = keys.reduce((result:IDic, key) => {
            result[key] = _value;
            return result;
        }, {});
        return beforeRuleOutput(conf, {prefix}, ret);
    }
]

// 颜色相关
const colorDic:IDic = {
    "co": "color",
    "cl": "color",
    "bg": "background-color",
    "bc": "border-color",
}

const colorRuleRgString = `^${mediaQueryAndPreonduReg}(${Object.keys(colorDic).join("|")})-([\\w\\d#]+)(i)?$`;
const colorRule = [
    new RegExp(colorRuleRgString),
    (gp:string[], conf:any) => {
        let [, prefix, type, value, important = false] = gp;
        const {colors} = conf.theme;

        const [__, color, index = "DEFAULT"] = value.match(/([a-zA-Z]+)(\d+)?/) as any[];

        let colorValue = "";
        const colorSeries = colors[color]
        if (colorSeries) {
            colorValue = colorSeries[index] || "";
        }
        if (!colorValue) {
            return "";
        }

        if (important) {
            colorValue += " !important";
        }

        const colorProp = colorDic[type];
        const ret = {[colorProp]: colorValue};
        return beforeRuleOutput(conf, {prefix}, ret);
    }
]

const regexVueTemplate = /<template.*?lang=['"]pug['"][^>]*?>\r?\n([\s\S]*?\n)<\/template>/gm;

/**
 * 解析pug中的unocss定义
 * @param pugImporter {}  即import("pug")
 */
const extractorPugFactory = function(pugImporter:Promise<any>){
    return function extractorPug() {
        async function compile(code:string, id:string) {

            //@ts-ignore
            const Pug = await pugImporter;
            try {
                return Pug.compile(code, {filename: id})();
            } catch {
            }
        }
        return {
            name: "pug",
            order: -1,
            async extract(ctx:any) {
                if (!ctx.id)
                    return;
                if (ctx.id.match(/\.pug$/) || ctx.id.match(/\?vue&type=template/)) {
                    try {
                        ctx.code = await compile(ctx.code, ctx.id) || ctx.code;
                    } catch {
                    }
                } else if (ctx.id.match(/\.vue$/)) {
                    const matches = Array.from(ctx.code.matchAll(regexVueTemplate)) as string[];
                    let tail = "";
                    for (const match of matches) {
                        if (match && match[1]) {
                            tail += `\n${await compile(match[1], ctx.id)}`;
                        }
                    }
                    if (tail) {
                        ctx.code = `${ctx.code}\n\n${tail}`;
                    }
                }
                return void 0;
            }
        };
    }
}

const rules = [sizeRule, boxRule, colorRule];

export {
    sizeRule,
    boxRule,
    colorRule,
    rules,
    extractorPugFactory,
}

/**
import {rules, extractorPugFactory} from "luss/dist/unocss-luss";
const extractorPug = extractorPugFactory(import("pug"));
import {extractorSplit, presetUno} from 'unocss'
Unocss({
    extractors: [
        extractorPug(),
        extractorSplit,
    ],
    rules: [
        boxRule, sizeRule,
    ],
})
 */
