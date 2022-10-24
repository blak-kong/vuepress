(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{220:function(t,e,a){"use strict";a.r(e);var v=a(6),_=Object(v.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"_4-转义字符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-转义字符"}},[t._v("#")]),t._v(" 4. 转义字符")]),t._v(" "),e("p",[t._v("HTML 中<，>，&等有特殊含义（<，>，用于链接签，&用于转义），"),e("strong",[t._v("不能直接使用")]),t._v("。这些符号是不显示在我们最终看到的网页里的，那如果我们希望"),e("strong",[t._v("在网页中")]),t._v("显示这些符号，就该用到"),e("strong",[t._v("转义字符")]),t._v("。")]),t._v(" "),e("p",[e("strong",[t._v("转义字符")]),t._v("（Escape Sequence）也称字符实体(Character Entity)。在 HTML 中，定义转义字符串的原因有两个：")]),t._v(" "),e("p",[t._v("第一个原因是像“<”和“>”这类符号已经用来表示 HTML 标签，因此就不能直接当作文本中的符号来使用。为了在 HTML 文档中使用这些符号，就需要定义它的转义字符串。当解释程序遇到这类字符串时就把它解释为真实的字符。在输入转义字符串时，要"),e("strong",[t._v("严格遵守字母大小写")]),t._v("的规则。")]),t._v(" "),e("p",[t._v("第二个原因是，有些字符在 ASCII 字符集中没有定义，因此需要"),e("strong",[t._v("使用转义字符串来表示")]),t._v("。")]),t._v(" "),e("h3",{attrs:{id:"_4-1-在页面中显示空格"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-在页面中显示空格"}},[t._v("#")]),t._v(" 4.1 在页面中显示空格")]),t._v(" "),e("p",[t._v("我们先来看一段"),e("code",[t._v("HTML")]),t._v("代码：")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("我中间 希望有空格"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("p",[t._v("虽然在编程时，我们在文字中间加了很多的空格，但是打开页面发现文字还是完整的在一行上，若是想要在页面中显示空格，你可以使用"),e("code",[t._v("&nbsp;")]),t._v("来表示一个空格：")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("我中间"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("nbsp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("希望有空格"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),e("p",[e("strong",[t._v("通常情况下，HTML 会自动截去多余的空格。不管你加多少空格，都被看做一个空格。")])]),t._v(" "),e("h3",{attrs:{id:"_4-2-常用的字符实体"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-常用的字符实体"}},[t._v("#")]),t._v(" 4.2 常用的字符实体")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("显示")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("实体名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("实体编号")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("半方大的空白")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("&ensp;")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("&#8194;")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("全方大的空白")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("&emsp;")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("&#8195;")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("不断行的空白格")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("&nbsp;")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("&#160;")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("<")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("小于")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("&lt;")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("&#60;")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v(">")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("大于")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("&gt;")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("&#62;")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("&")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("&符号")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("&amp;")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("&#38;")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v('"')]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("双引号")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("&quot;")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("&#34;")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("©")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("版权")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("&copy;")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("&#169;")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("®")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("已注册商标")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("&reg;")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("&#174;")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("?")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("商标（美国）")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("?")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("&#8482;")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("×")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("乘号")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("&times;")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("&#215;")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("÷")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("除号")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("&divide;")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("&#247;")])])])])]),t._v(" "),e("h3",{attrs:{id:"_4-3-常用的转义符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-常用的转义符"}},[t._v("#")]),t._v(" 4.3 常用的转义符")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("转义序列")]),t._v(" "),e("th",[t._v("字符")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("\\b")]),t._v(" "),e("td",[t._v("退格")])]),t._v(" "),e("tr",[e("td",[t._v("\\f")]),t._v(" "),e("td",[t._v("走纸换页")])]),t._v(" "),e("tr",[e("td",[t._v("\\n")]),t._v(" "),e("td",[t._v("换行")])]),t._v(" "),e("tr",[e("td",[t._v("\\r")]),t._v(" "),e("td",[t._v("回车")])]),t._v(" "),e("tr",[e("td",[t._v("\\t")]),t._v(" "),e("td",[t._v("横向跳格 (Ctrl-I)")])]),t._v(" "),e("tr",[e("td",[t._v("'")]),t._v(" "),e("td",[t._v("单引号")])]),t._v(" "),e("tr",[e("td",[t._v('"')]),t._v(" "),e("td",[t._v("双引号")])]),t._v(" "),e("tr",[e("td",[t._v("\\")]),t._v(" "),e("td",[t._v("反斜杠")])])])]),t._v(" "),e("p",[t._v("编程的时候要注意特殊字符的问题，很多运行时出现的问题都是因为特殊字符的出现而引起的。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("注意，由于反斜杠本身用作转义符，因此不能直接在脚本中键入一个反斜杠。如果要产生一个反斜杠，必须一起键入两个反斜杠 (\\)。")])])])}),[],!1,null,null,null);e.default=_.exports}}]);