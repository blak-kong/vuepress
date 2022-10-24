(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{221:function(e,a,t){"use strict";t.r(a);var s=t(6),n=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"es9"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es9"}},[e._v("#")]),e._v(" ES9")]),e._v(" "),a("h3",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),a("p",[e._v("该篇文章主要是介绍了ES9新加的一些特性。")]),e._v(" "),a("h3",{attrs:{id:"_1-异步迭代"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-异步迭代"}},[e._v("#")]),e._v(" 1. 异步迭代")]),e._v(" "),a("p",[e._v("在"),a("code",[e._v("async/await")]),e._v("的某些时刻，你可能尝试在同步循环中调用异步函数。例如：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("async function process(array) {\n  for (let i of array) {\n    await doSomething(i);\n  }\n}\n复制代码\n")])])]),a("p",[e._v("这段代码不会正常运行，下面这段同样也不会：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("async function process(array) {\n  array.forEach(async i => {\n    await doSomething(i);\n  });\n}\n复制代码\n")])])]),a("p",[e._v("这段代码中，循环本身依旧保持同步，并在在内部异步函数之前全部调用完成。")]),e._v(" "),a("p",[e._v("ES2018引入异步迭代器（asynchronous iterators），这就像常规迭代器，除了"),a("code",[e._v("next()")]),e._v("方法返回一个Promise。因此"),a("code",[e._v("await")]),e._v("可以和"),a("code",[e._v("for...of")]),e._v("循环一起使用，以串行的方式运行异步操作。例如：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("async function process(array) {\n  for await (let i of array) {\n    doSomething(i);\n  }\n}\n")])])]),a("h3",{attrs:{id:"_2-promise-finally"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-promise-finally"}},[e._v("#")]),e._v(" 2. Promise.finally()")]),e._v(" "),a("p",[e._v("在ES6中，一个"),a("code",[e._v("Promise")]),e._v("链要么成功进入最后一个"),a("code",[e._v("then()")]),e._v("要么失败触发"),a("code",[e._v("catch()")]),e._v("。而实际中，我们可能需要无论"),a("code",[e._v("Promise")]),e._v("无论成功还是失败，都运行相同的代码。例如清除，删除回话，关闭数据库连接等操作。")]),e._v(" "),a("p",[e._v("ES9中，允许使用"),a("code",[e._v("finally()")]),e._v("来指定最终的逻辑。")]),e._v(" "),a("p",[e._v("如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("        let count = () => {\n            return new Promise((resolve, reject) => {\n                setTimeout(() => {\n                    resolve(100)\n                }, 1000);\n            })\n        }\n        let list = () => {\n            return new Promise((resolve, reject) => {\n                setTimeout(() => {\n                    resolve([1, 2, 3])\n                }, 1000);\n            })\n        }\n\n        let getList = async () => {\n            let c = await count()\n            console.log('async')\n            let l = await list()\n            return { count: c, list: l }\n        }\n        console.time('start');\n        getList().then(res => {\n            console.log(res)\n        })\n        .catch(err => {\n            console.timeEnd('start')\n            console.log(err)\n        })\n        .finally(() => {\n            console.log('finally')\n        }) \n        \n        //执行结果\n        async\n        {count: 100, list: [1, 2, 3]}\n        finally\n")])])]),a("h3",{attrs:{id:"_3-rest-spread-属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-rest-spread-属性"}},[e._v("#")]),e._v(" 3. Rest/Spread 属性")]),e._v(" "),a("h4",{attrs:{id:"_3-1-es6中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-es6中"}},[e._v("#")]),e._v(" 3.1 ES6中(...)")]),e._v(" "),a("p",[e._v("在ES6中引入了三点"),a("code",[e._v("...")]),e._v("，作用主要是"),a("code",[e._v("Rest参数和扩展运算符")]),e._v(":")]),e._v(" "),a("p",[e._v("作用对象仅用于数组")]),e._v(" "),a("p",[e._v("1.将一个未知数量的参数表示一个数组:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("restParam(1, 2, 3, 4, 5);\n\nfunction restParam(p1, p2, ...p3) {\n  // p1 = 1\n  // p2 = 2\n  // p3 = [3, 4, 5]\n}\n")])])]),a("p",[e._v("2.扩展运算符：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const values = [99, 100, -1, 48, 16];\nconsole.log( Math.max(...values) ); // 100\n")])])]),a("h4",{attrs:{id:"_3-2-es9中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-es9中"}},[e._v("#")]),e._v(" 3.2 ES9中(...)")]),e._v(" "),a("p",[e._v("在ES9中为对象提供了像数组一样的Rest参数和展开运算符。")]),e._v(" "),a("blockquote",[a("p",[e._v("Rest参数用法")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("        var obj = {\n            a: 1,\n            b: 2,\n            c: 3\n        }\n        const { a, ...param } = obj;\n        console.log(a)     //1\n        console.log(param) //{b: 2, c: 3}\n        \n")])])]),a("blockquote",[a("p",[e._v("Spread用法，用于收集所有的剩余参数：")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("        var obj = {\n            a: 1,\n            b: 2,\n            c: 3\n        }\n\t\tfunction foo({a, ...param}) {\n            console.log(a);\n            console.log(param)\n        }\n")])])]),a("p",[e._v("跟数组一样，Rest参数只能在声明的结尾处使用。此外，它只适用于每个对象的顶层，如果对象中嵌套对象则无法适用。")]),e._v(" "),a("blockquote",[a("p",[e._v("扩展运算符可以在其他对象内使用")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const obj1 = { a: 1, b: 2, c: 3 };\nconst obj2 = { ...obj1, z: 26 };\n// obj2 is { a: 1, b: 2, c: 3, z: 26 }\n")])])]),a("h4",{attrs:{id:"_3-3-spread的使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-spread的使用场景"}},[e._v("#")]),e._v(" 3.3 Spread的使用场景")]),e._v(" "),a("blockquote",[a("p",[e._v("1.浅拷贝")]),e._v(" "),a("p",[e._v("可以利用(...)来进行一个对象的拷贝，但是这种拷贝只能拷贝对象的可枚举自有属性。")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("        var obj = {\n            name: 'LinDaiDai',\n            looks: 'handsome',\n            foo() {\n                console.log('old');\n            },\n            set setLooks(newVal) {\n                this.looks = newVal\n            },\n            get getName() {\n                console.log(this.name)\n            }\n        }\n\n        var cloneObj = {...obj};\n        cloneObj.foo = function() {\n            console.log('new')\n        };\n        console.log(obj)     \n        // { name: 'LinDaiDai',looks: 'handsome', foo: f foo(), get getName:f getName(), set setLooks: f setLooks(newVal)}\n        console.log(cloneObj)\n        // { name: 'LinDaiDai',looks: 'handsome', foo: f foo(), getName: undefined, setLooks: undefined }\n        obj.foo()\n        // old\n        cloneObj.foo()\n        // new \n")])])]),a("p",[e._v("如上所示，定义了一个对象"),a("code",[e._v("obj")]),e._v(" 并使用"),a("code",[e._v("(...)")]),e._v("进行对象的拷贝，修改对象内的函数"),a("code",[e._v("foo()")]),e._v("，并不会影响原有的对象，但是原有对象的"),a("code",[e._v("setter")]),e._v("和"),a("code",[e._v("getter")]),e._v("却不能拷贝过去。")]),e._v(" "),a("blockquote",[a("p",[e._v("2.合并俩个对象")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const merged = {...obj1, ...obj2};\n//同：\nconst merged = Object.assign({}, obj1, obj2);\n")])])]),a("h3",{attrs:{id:"_4-正则表达式命名捕获组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-正则表达式命名捕获组"}},[e._v("#")]),e._v(" 4. 正则表达式命名捕获组")]),e._v(" "),a("h4",{attrs:{id:"_4-1-基本用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-基本用法"}},[e._v("#")]),e._v(" 4.1 基本用法")]),e._v(" "),a("p",[a("code",[e._v("Javascript")]),e._v("正则表达式中使用"),a("code",[e._v("exec()")]),e._v("匹配能够返回一个对象，一个包含匹配字符串的类数组。")]),e._v(" "),a("p",[e._v("如下面案例中的匹配日期格式：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//正则表达式命名捕获组\n        const reDate = /(\\d{4})-(\\d{2})-(\\d{2})/,\n              match = reDate.exec('2018-08-06');\n        console.log(match);\n        // [2018-08-06, 2018, 08, 06]\n        \n        // 这样就可以直接用索引来获取年月日：\n        match[1] // 2018\n        match[2] // 08\n        match[3] // 06\n")])])]),a("p",[e._v("返回一个数组，数组第0项为与正则表达式相匹配的文本，第 1 个元素是与 RegExpObject 的第 1 个子表达式相匹配的文本（如果有的话），第 2 个元素是与 RegExpObject 的第 2 个子表达式相匹配的文本（如果有的话），以此类推。")]),e._v(" "),a("p",[e._v("上面的案例，若是改变正则表达式的结构就有可能改变匹配对象的索引。")]),e._v(" "),a("p",[e._v("如进行如下修改：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//正则表达式命名捕获组\n        const reDate = /(\\d{2})-(\\d{2})-(\\d{4})/,\n              match = reDate.exec('2018-08-06');\n        console.log(match);\n        // [2018-08-06, 08, 06, 2018]\n        \n        // 但此时年月日的索引就改变了\n        match[3] // 2018\n        match[1] // 08\n        match[2] // 06\n")])])]),a("p",[a("strong",[e._v("可以看到上面写法的弊端，因此在ES9中允许命名捕获组使用符号"),a("code",[e._v("?<name>")]),e._v(",如下：")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("        const reDate = /(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/,\n              match = reDate.exec('2018-08-06')\n        console.log(match);\n        // [2018-08-06, 08, 06, 2018, groups: {day: 06, month: 08, year: 2018}]\n        \n        //此时可以使用groups对象来获取年月日\n        match.groups.year // 2018\n        match.groups.month // 08\n        match.groups.day  // 06\n")])])]),a("p",[e._v("命名捕获组的写法相当于是把每个匹配到的捕获组都定义了一个名字，然后存储到返回值的"),a("code",[e._v("groups")]),e._v("属性中。")]),e._v(" "),a("h4",{attrs:{id:"_4-2-结合replace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-结合replace"}},[e._v("#")]),e._v(" 4.2 结合"),a("code",[e._v("replace()")])]),e._v(" "),a("p",[e._v("命名捕获也可以使用在"),a("code",[e._v("replace()")]),e._v("方法中。例如将日期转换为美国的 MM-DD-YYYY 格式：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const reDate = /(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/,\n      d = '2018-08-06'\n      USADate = d.replace(reDate, '$<month>-$<day>-$<year>');\nconsole.log(USADate);\n// 08-06-2018\n")])])]),a("p",[e._v("还可以将中文名的姓和名调换：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const reName = /(?<sur>[a-zA-Z]+)-(?<name>[a-zA-Z]+)/;\n      Chinese = 'Lin-DaiDai',\n      USA = Chinese.replace(reName, '$<name>-$<sur>');\nconsole.log(USA);\n// DaiDai-Lin\n")])])]),a("h3",{attrs:{id:"_5-正则表达式反向断言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-正则表达式反向断言"}},[e._v("#")]),e._v(" 5. 正则表达式反向断言")]),e._v(" "),a("h4",{attrs:{id:"_5-1-基本用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-基本用法"}},[e._v("#")]),e._v(" 5.1 基本用法")]),e._v(" "),a("p",[e._v("先来看下正则表达式先行断言是什么：")]),e._v(" "),a("p",[e._v("如获取货币的符号")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("        const noReLookahead = /\\D(\\d+)/,\n        \t  reLookahead = /\\D(?=\\d+)/,\n        \t  match1 = noReLookahead.exec('$123.45'),\n              match2 = reLookahead.exec('$123.45');\n        console.log(match1[0]); // $123   \n        console.log(match2[0]); // $\n")])])]),a("p",[e._v("可以看到若是在正则表达式中加入"),a("code",[e._v("?=")]),e._v("的话，匹配会发生，但不会有任何捕获，并且断言没有包含在整个匹配字段中。")]),e._v(" "),a("p",[e._v("在ES9中可以允许反向断言：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("        const reLookahead = /(?<=\\D)[\\d\\.]+/;\n              match = reLookahead.exec('$123.45');\n        console.log(match[0]); // 123.45\n")])])]),a("p",[e._v("使用"),a("code",[e._v("?<=")]),e._v("进行反向断言，可以使用反向断言获取货币的价格，而忽略货币符号。")]),e._v(" "),a("h4",{attrs:{id:"_5-2-肯定反向断言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-肯定反向断言"}},[e._v("#")]),e._v(" 5.2 肯定反向断言")]),e._v(" "),a("p",[e._v("上面的案例为肯定反向断言，也就是说"),a("code",[e._v("\\D")]),e._v("这个条件必须存在，若是:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("        const reLookahead = /(?<=\\D)[\\d\\.]+/;\n              match1 = reLookahead.exec('123.45'),\n              match2 = reLookahead.exec('12345');\n        console.log(match1[0]); // 45\n        console.log(match2);  // null\n")])])]),a("p",[e._v("可以看到"),a("code",[e._v("match1")]),e._v("匹配到的是"),a("code",[e._v("45")]),e._v(",这是由于在"),a("code",[e._v("123")]),e._v("前面没有任何符合"),a("code",[e._v("\\D")]),e._v("的匹配内容，它会一直找到符合"),a("code",[e._v("\\D")]),e._v("的内容，也就是"),a("code",[e._v(".")]),e._v("然后返回后面的内容。")]),e._v(" "),a("p",[e._v("而若是没有满足前面肯定反向断言的条件的话，则返回"),a("code",[e._v("null")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"_6-正则表达式dotall模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-正则表达式dotall模式"}},[e._v("#")]),e._v(" 6. 正则表达式"),a("code",[e._v("dotAll")]),e._v("模式")]),e._v(" "),a("p",[e._v("正则表达式中点"),a("code",[e._v(".")]),e._v("匹配除回车外的任何单字符，标记"),a("code",[e._v("s")]),e._v("改变这种行为，允许行终止符的出现:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/hello.world/.test('hello\\nworld');  // false\n\n/hello.world/s.test('hello\\nworld'); // true\n\nconsole.log(/hello.world/s.test(`hello\nworld`))   // true\n")])])]),a("h3",{attrs:{id:"_7-正则表达式-unicode-转义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-正则表达式-unicode-转义"}},[e._v("#")]),e._v(" 7. 正则表达式 Unicode 转义")]),e._v(" "),a("p",[e._v("到目前为止，在正则表达式中本地访问 Unicode 字符属性是不被允许的。ES2018添加了 Unicode 属性转义——形式为"),a("code",[e._v("\\p{...}")]),e._v("和"),a("code",[e._v("\\P{...}")]),e._v("，在正则表达式中使用标记 "),a("code",[e._v("u")]),e._v(" (unicode) 设置，在"),a("code",[e._v("\\p")]),e._v("块儿内，可以以键值对的方式设置需要匹配的属性而非具体内容。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    const reGreekSymbol = /\\p{Script=Greek}/u;\n    console.log(reGreekSymbol.test('π')); // true\n")])])]),a("p",[a("code",[e._v("Greek")]),e._v("为希腊语的意思。")]),e._v(" "),a("h3",{attrs:{id:"_8-非转义序列的模板字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-非转义序列的模板字符串"}},[e._v("#")]),e._v(" 8. 非转义序列的模板字符串")]),e._v(" "),a("p",[e._v("最后，ES2018 移除对 ECMAScript 在带标签的模版字符串中转义序列的语法限制。")]),e._v(" "),a("p",[e._v("之前，"),a("code",[e._v("\\u")]),e._v("开始一个 unicode 转义，"),a("code",[e._v("\\x")]),e._v("开始一个十六进制转义，"),a("code",[e._v("\\")]),e._v("后跟一个数字开始一个八进制转义。这使得创建特定的字符串变得不可能，例如Windows文件路径 "),a("code",[e._v("C:\\uuu\\xxx\\111")]),e._v("。更多细节参考"),a("a",{attrs:{href:"https://link.juejin.im?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2Ftemplate_strings",target:"_blank",rel:"noopener noreferrer"}},[e._v("模板字符串"),a("OutboundLink")],1),e._v("。")]),e._v(" "),a("h3",{attrs:{id:"后语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后语"}},[e._v("#")]),e._v(" 后语")]),e._v(" "),a("p",[e._v("知识产权无价，支持原创。")]),e._v(" "),a("p",[e._v("参考文章：")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5b2a186cf265da596d04a648",target:"_blank",rel:"noopener noreferrer"}},[e._v("[译] ES2018（ES9）的新特性"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5b431280e51d4519133f74d1",target:"_blank",rel:"noopener noreferrer"}},[e._v("【译】ES2018 新特性：Rest/Spread 特性"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("ES6/ES7/ES8/ES9 可以看到javascript并没有让我们失望，这几年的更新没有落下，不间断的学习，才能保证自己被这个社会淘汰...")])])}),[],!1,null,null,null);a.default=n.exports}}]);