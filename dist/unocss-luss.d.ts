declare const boxRule: [RegExp, Function];
declare const sizeRule: (RegExp | ((gp: string[], conf: any) => any))[];
declare const colorRule: (RegExp | ((gp: string[], conf: any) => any))[];
/**
 * 解析pug中的unocss定义
 * @param pugImporter {}  即import("pug")
 */
declare const extractorPugFactory: (pugImporter: Promise<any>) => () => {
    name: string;
    order: number;
    extract(ctx: any): Promise<undefined>;
};
declare const rules: ([RegExp, Function] | (RegExp | ((gp: string[], conf: any) => any))[])[];
export { sizeRule, boxRule, colorRule, rules, extractorPugFactory, };
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
