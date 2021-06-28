# 引用:

ease部分的内容来自qivhou的仓库
https://github.com/qivhou/easing.less

以及raphaelameaume的
https://github.com/raphaelameaume/gsap-easings-css



#文档

工具类大致分为m,p,size,color系列以及其他零散的小工具class

###p系列用来设置目标元素盒模型的padding

.p10工具类对应的规则为

```css
.p10{padding:1em}

/*支持import*/
.p10-i{padding:1em !important}
```
### p系列,padding的相关设置

规则名称 | 规则内容 | 说明 | 举例
---|:---|:--- | :---
p*  | padding | - | \<div class="pl10"></div>
pl* | padding-left | - | 
pt* | padding-top | |
pr* | padding-right  | |
pb* | padding-bottom | |
ph* | padding-left, padding-right | 设置水平方向padding |\<div class="ph10"></div>
pv* | padding-top, padding-bottom | 设置垂直方向padding | -

预设值

- 600
- 580
- 560
- 550
- 540
- 520
- 510
- 500
- 480
- 460
- 450
- 440
- 420
- 400
- 390
- 380
- 360
- 350
- 340
- 330
- 320
- 300
- 280
- 270
- 260
- 250
- 240
- 220
- 210
- 200
- 190
- 180
- 170
- 160
- 150
- 140
- 130
- 120
- 110
- 100
- 90
- 80
- 70
- 60
- 51
- 50
- 48
- 45
- 42
- 40
- 39
- 36
- 33
- 30
- 27
- 25
- 24
- 22
- 21
- 20
- 18
- 15
- 14
- 13
- 12
- 11
- 10
- 095
- 09
- 085
- 08
- 075
- 06
- 05
- 03
- 025
- 0125
- 00

<hr/>

### m系列,margin相关设置

规则名称 | 规则内容 | 说明 | 举例
---|:---|:--- | :---
m* | margin | - | \<div class="pl10"></div>
ml* | margin-left | - |
mt* | margin-top | |
mr* | margin-right  | |
mb* | margin-bottom | |
mh* | margin-left, margin-right | 设置水平方向margin |\<div class="mh10"></div>
mv* | margin-top, margin-bottom | 设置垂直方向margin | -
m-auto | margin:auto | 设置padding为auto
ml-auto | margin-left:auto | 设置左padding为auto | -
mt-auto | - | - |-
mr-auto | - | - |-
mb-auto | - | - |-

数值同上
<hr/>

### size系列字体大小、行高缩进、宽度、高度

规则名称 | 规则内容 | 说明 | 举例
---|:---|:--- | :---
w* | width | 设置目标width | -
h* | height | 设置目标height | -
fz* | font-size | - | -
lh* | height,line-height | - | -
ti* | text-indent | 设置block元素的首行缩进 | -

数值通同上

---

### 以为px单位规则
规则 | 加重 | 说明
:---|---|---
h1px | h1px-i |
w1px | w1px-i |
bl1px | - |
bt1px | - |
brpx | - |
bb1px | - |
b1px | - | border-width:1px

0 1 2 3 4 5





### 百分比单位
规则 | 加重 | 说明
:---|--- | ---
w00p|w00p-i|width:0%;
w15p|w15p-i|width:15%
w33d33|w33d33-i|width:33.33%
...|...|...
w100p|w100p-i|width:100%

可用值

- 100
- 95
- 90
- 85
- 80
- 75
- 70
- 65
- 60
- 55
- 50
- 45
- 40
- 35
- 30
- 25
- 20
- 15
- 10
- 5
- 0

### vw/vh单位
规则 | 加重 | 说明
:---|--- | ---
vw10 | vw10-i | width:10vw
vh10 | vh10-i | width:10vh

可用值

- 100
- 90
- 80
- 75
- 66d66
- 50
- 36
- 35
- 33d33
- 30
- 25
- 20
- 12d5
- 10
- 0

### 透明度设置


规则 | 加重 | hover
:---|---|---
op00|op00-i|op00-hover
op00d5 | - | -
op01 | - | -
op01d5 ||
...|...|...
op09d5 | - | -
op10 |op10-i|op10-hover

可用值

- 00
- 00d5
- 01
- 01d5
- 02
- 02d5
- 03
- 03d5
- 04
- 04d5
- 05
- 05d5
- 06
- 06d5
- 07
- 07d5
- 08
- 08d5
- 09
- 09d5
- 10

---

### 缩放scale

规则 | 加重 | hover
:---|---|---
scale00 |scale00-i | scale00-hover
scale00d5 | - | -
sacle01 | - | -
scale01d5 ||
...|...|...
scale09d5 | - | -
scale10 |scale10-i|op10-hover

可用值

- 00
- 03
- 06
- 09
- 12
- 15
- 18
- 21
- 24
- 27
- 30
- 33
- 36
- 00
- 02
- 04
- 06
- 08
- 10
- 12
- 14
- 16
- 18
- 20
- 05
- 05d5
- 06
- 06d5
- 07
- 07d5
- 08
- 08d5
- 09
- 09d5
- 10
- 10d5
- 11
- 11d5
- 12
- 12d5
- 13
- 13d5
- 14
- 14d5
- 15


### 颜色相关
规则 | 加重 | hover | hover加重 | 说明
:---|---|---|---| ---
cl-red|cl-red-i|cl-red-hover | cl-red-hover | color:#f44336
bg-red|cl-red-i|cl-red-hover | cl-red-hover | background-color:#f44336
bd-red|cl-red-i|cl-red-hover | cl-red-hover | border-color:#f44336

<img src="http://ww1.sinaimg.cn/large/90a6ba12ly1gng4dzta0lj20rv0hfgol.jpg"/>

颜色可用值请参考meterial design colors
https://www.materialui.co/colors 首字母用小写




### flex相关

- .flex
- .flex.inline flex-inline
- .flex.inline.fix 修复0.14em误差
- .flex.column flex-direction：column;
- .jc-start
- .jc-center
- .jc-end
- .jc-between
- .between 同上
- .jc-around
- .around 同上


- .ai-start
- .ai-center
- .ai-end
- .ai-stretch

  
- .ac-start
- .ac-center
- .ac-end
- .ac-between
- .ac-around
- .ac-stretch


- .wrap
- .wrap-rev
- .wrap-no
- .wrap-in
- .wrap-un


- .as-start
- .as-center
- .as-end
- .as-stretch

- .fx1
- .fx2
- .fx3
- .fx4
- .fx5


### 字体相关

- .ff-yh
- .ff-st
- .ff-xst
- .ff-ht
- .ff-zh


### 无法分类
- .txcut 字符串截取
- .noselect 不可选
- .fillin
- .clear
- .center 内容居中
- .fs-reset 重置内部元素字体大小为1rem，自身为0
- .cp
- .tr,text-align,right;
- .tc,text-align,center;
- .tl,text-align,left;
- .pa,position,absolute;
- .pr,position,relative;
- .ps,position,static;
- .db, display,block;
- .di, display, inline;
- .dib,display,inline-block;
- .cp,cursor,pointer;
- .cd,cursor,default;
- .bbox, box-sizing, border-box;
- .cbox, box-sizing, content-box;
- .wnw, white-space, nowrap;
- .wnn, white-space, normal;
- .hide, display, none;
- .bg-coveride, background-size, cover;
- .background-size, background-size, contain;
- .fit-cover, object-fit, cover;
- .fit-contain, object-fit, contain;
- .ts-late-x--50p, transform, translateX(-50%);
- .ts-late-y--50p, transform, translateY(-50%);
- .b-solid
- .b-dotted
- .b-dashed
- .b-double


