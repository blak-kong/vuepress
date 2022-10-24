(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{238:function(t,s,a){"use strict";a.r(s);var n=a(6),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("ES6 标准新增了一种新的函数：Arrow Function（箭头函数）。")]),t._v(" "),s("h2",{attrs:{id:"箭头函数如何使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#箭头函数如何使用"}},[t._v("#")]),t._v(" 箭头函数如何使用？")]),t._v(" "),s("p",[s("strong",[t._v("箭头函数只能定义匿名函数，不能用于定义构造函数和普通函数。")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("  a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// error")]),t._v("\n")])])]),s("h2",{attrs:{id:"箭头函数注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#箭头函数注意事项"}},[t._v("#")]),t._v(" 箭头函数注意事项")]),t._v(" "),s("p",[t._v("因为箭头函数没有 prototype，所以箭头函数本身没有 this，只会绑定当前环境上下文。")]),t._v(" "),s("ul",[s("li",[t._v("当一条语句返回对象字面量，需要加括号，或者直接写成多条语句的 return 形式")]),t._v(" "),s("li",[t._v("箭头函数的 this 指向定义时所在的外层第一个普通函数。")]),t._v(" "),s("li",[t._v("箭头函数的 this 指向普通函数时,它的 argumens 继承于该普通函数")]),t._v(" "),s("li",[t._v("使用 new 调用箭头函数会报错，因为箭头函数没有 constructor")]),t._v(" "),s("li",[t._v("被继承的普通函数的 this 指向改变，箭头函数的 this 指向会跟着改变")]),t._v(" "),s("li",[t._v("不能直接修改箭头函数的 this 指向")]),t._v(" "),s("li",[t._v("当箭头函数外层没有普通函数，严格模式和非严格模式下它的 this 都会指向 window(全局对象)")]),t._v(" "),s("li",[t._v("箭头函数不支持重命名函数参数，普通函数的函数参数支持重命名")])]),t._v(" "),s("blockquote",[s("p",[t._v("普通函数的函数参数支持重命名，后面出现的会覆盖前面的")])]),t._v(" "),s("h2",{attrs:{id:"箭头函数的-arguments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#箭头函数的-arguments"}},[t._v("#")]),t._v(" 箭头函数的 arguments")]),t._v(" "),s("p",[t._v("当箭头函数的 this 指向全局，使用 arguments 会报未声明的错误")]),t._v(" "),s("p",[s("strong",[t._v("箭头函数的 this 指向普通函数时,它的 argumens 继承于该普通函数")])]),t._v(" "),s("h3",{attrs:{id:"rest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rest"}},[t._v("#")]),t._v(" rest")]),t._v(" "),s("p",[t._v("rest 参数（...扩展符）是 ES6 的 API，用于获取函数不定数量的参数数组，这个 API 是用来替代 arguments 的")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("first"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("abc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("first"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" abc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1 [2, 3, 4]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"rest-注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rest-注意事项"}},[t._v("#")]),t._v(" rest 注意事项")]),t._v(" "),s("ul",[s("li",[t._v("rest 必须是函数的最后一位参数。")]),t._v(" "),s("li",[t._v("函数的 length 属性，不包括 rest 参数。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);