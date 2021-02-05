# less-t2
文档补全中...


引用css
```javascript
import "less-t2/dist"
```

```pug
    //pading-top:1em;
    .pt10
    
    //padding-top:1.5em; padding-left:1.5em;
    .ph15
    
    
    //display:flex; flex-direction:column;
    .flex.column
    
    //...
```

引用less
```less
@import "node_modules/dist/src/less";
```


```less
    .center;
    
    //pading-left:50%; padding-right:50%;
    ._ph(50%);

```

#文档


工具类大致分为m,p,size,color系列以及其他零散的小工具class

###p系列用来设置目标元素盒模型的padding

.p10工具类对应的规则为

```css
.p10{padding:1em}

/*支持import*/
.p10-i{padding:1em !important}
```
以下为p系列的class列表

规则名称 | 规则内容 | 说明 | 举例
---|:---|:--- | :---
p* | padding | - | \<div class="pl10"></div>
pl* | padding-left | - | 
pt* | padding-top | |
pr* | padding-right  | |
pb* | padding-bottom | |
ph* | padding-left, padding-right | 设置水平方向padding |\<div class="ph10"></div>
pv* | padding-top, padding-bottom | 设置垂直方向padding | -
p-auto | padding:auto | 设置padding为auto
pl-auto | padding-left:auto | 设置左padding为auto | -


### m系列设置margin

规则名称 | 规则内容 | 说明 | 举例
---|:---|:--- | :---
m* | margin | - | \<div class="ml10"></div>
ml* | margin-left | - | 
mt* | margin-top | |
mr* | margin-right  | |
mb* | margin-bottom | |
mh* | margin-left, margin-right | 设置水平方向margin |\<div class="mh10"></div>
mv* | margin-top, margin-bottom | 设置垂直方向margin | -
m-auto | margin:auto | 设置margin为auto
ml-auto | margin-left:auto | 设置左margin为auto | -

### size系列设置大小

规则名称 | 规则内容 | 说明 | 举例
---|:---|:--- | :---
w* | width | 设置目标width | -
h* | height | 设置目标height | -
fz* | font-size | - | -
lh* | height,line-height | - | -
ti* | text-indent | - | -
