"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5389],{5389:function(a,e,n){n.r(e),n(7378);var t=n(2682);function o(){return o=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t])}return a},o.apply(this,arguments)}function p(a){let{components:e,...n}=a;return(0,t.kt)("wrapper",o({components:e},n),(0,t.kt)("p",null,"插件是 webpack 生态的关键部分，\n它为社区用户提供了一种强有力的方式来直接触及 webpack 的编译过程(compilation process)。\n插件能够 ",(0,t.kt)("a",{href:"/api/compiler-hooks/#hooks",parentName:"p"},"hook")," 到每一个编译(compilation)中发出的关键事件中。\n在编译的每个阶段中，插件都拥有对 ",(0,t.kt)("inlineCode",{parentName:"p"},"compiler")," 对象的完全访问能力，\n并且在合适的时机，还可以访问当前的 ",(0,t.kt)("inlineCode",{parentName:"p"},"compilation")," 对象。"),(0,t.kt)("aside",{className:"tip"},(0,t.kt)("h6",{className:"tip__prefix",parentName:"aside"},"提示"),(0,t.kt)("p",{parentName:"aside"},"关于编写插件的高级介绍，请移步：\n",(0,t.kt)("a",{href:"/contribute/writing-a-plugin",parentName:"p"},"自定义插件"),"。")),(0,t.kt)("p",null,"让我们首先从 tapable 工具开始，\n它为 webpack 插件接口提供了核心能力的。"),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"tapable",parentName:"h2"}),"Tapable",(0,t.kt)("a",{href:"#tapable","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"这个小型库是 webpack 的一个核心工具，但也可用于其他地方，\n以提供类似的插件接口。\n在 webpack 中的许多对象都扩展自 ",(0,t.kt)("inlineCode",{parentName:"p"},"Tapable")," 类。\n它对外暴露了 ",(0,t.kt)("inlineCode",{parentName:"p"},"tap"),"，",(0,t.kt)("inlineCode",{parentName:"p"},"tapAsync")," 和 ",(0,t.kt)("inlineCode",{parentName:"p"},"tapPromise")," 等方法，\n插件可以使用这些方法向 webpack 中注入自定义构建的步骤，这些步骤将在构建过程中触发。"),(0,t.kt)("p",null,"请查阅",(0,t.kt)("a",{href:"https://github.com/webpack/tapable",parentName:"p"},"文档"),"了解更多知识。\n理解上面的的三种 ",(0,t.kt)("inlineCode",{parentName:"p"},"tap")," 方法，\n以及提供这些方法的钩子(hooks)对于编写插件来说是至关重要的。\n那些扩展自 ",(0,t.kt)("inlineCode",{parentName:"p"},"Tapable")," 的对象（例如：compiler），\n以及其提供的钩子(hooks)和每个钩子的类型（例如：",(0,t.kt)("inlineCode",{parentName:"p"},"同步钩子(SyncHook)"),"）值得关注。"),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"plugin-types",parentName:"h2"}),"插件类型",(0,t.kt)("a",{href:"#plugin-types","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"根据使用不同的钩子(hooks)和 ",(0,t.kt)("inlineCode",{parentName:"p"},"tap")," 方法，\n插件可以以多种不同的方式运行。\n这个工作方式与 Tapable 提供的",(0,t.kt)("a",{href:"https://github.com/webpack/tapable#tapable",parentName:"p"},"钩子(hooks)"),"密切相关。\n",(0,t.kt)("a",{href:"/api/compiler-hooks/#hooks",parentName:"p"},"compiler hooks")," 分别记录了 Tapable 内在的钩子，\n并指出哪些 tap 方法可用。"),(0,t.kt)("p",null,"所以，依赖于使用的 ",(0,t.kt)("inlineCode",{parentName:"p"},"tap")," 方法的不同，\n插件可能会以不同的方式运行。\n例如：当你钩入到 ",(0,t.kt)("inlineCode",{parentName:"p"},"编译(compile)")," 阶段时，只有同步的 ",(0,t.kt)("inlineCode",{parentName:"p"},"tap")," 方法可以使用。"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-js",parentName:"pre"},"compiler",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"hooks",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"compile",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"tap"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'MyPlugin'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token parameter",parentName:"code"},"params"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  console",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"log"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'以同步方式触及 compile 钩子。'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("p",null,"然而，对于可以使用 ",(0,t.kt)("inlineCode",{parentName:"p"},"AsyncHook")," 的 ",(0,t.kt)("inlineCode",{parentName:"p"},"run")," 阶段，\n则需使用 ",(0,t.kt)("inlineCode",{parentName:"p"},"tapAsync")," 或 ",(0,t.kt)("inlineCode",{parentName:"p"},"tapPromise"),"（以及 ",(0,t.kt)("inlineCode",{parentName:"p"},"tap"),"）方法。"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-js",parentName:"pre"},"compiler",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"hooks",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"run",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"tapAsync"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),"\n  ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'MyPlugin'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token parameter",parentName:"code"},"source",(0,t.kt)("span",{className:"token punctuation",parentName:"span"},",")," target",(0,t.kt)("span",{className:"token punctuation",parentName:"span"},",")," routesList",(0,t.kt)("span",{className:"token punctuation",parentName:"span"},",")," callback"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    console",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"log"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'以异步方式触及运行钩子。'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n    ",(0,t.kt)("span",{className:"token function",parentName:"code"},"callback"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n\ncompiler",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"hooks",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"run",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"tapPromise"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'MyPlugin'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token parameter",parentName:"code"},"source",(0,t.kt)("span",{className:"token punctuation",parentName:"span"},",")," target",(0,t.kt)("span",{className:"token punctuation",parentName:"span"},",")," routesList"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"return")," ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"Promise"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token parameter",parentName:"code"},"resolve"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.kt)("span",{className:"token function",parentName:"code"},"setTimeout"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),"resolve",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,t.kt)("span",{className:"token number",parentName:"code"},"1000"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"then"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    console",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"log"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'以异步的方式触发具有延迟操作的钩子。'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n\ncompiler",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"hooks",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"run",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"tapPromise"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),"\n  ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'MyPlugin'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"async")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token parameter",parentName:"code"},"source",(0,t.kt)("span",{className:"token punctuation",parentName:"span"},",")," target",(0,t.kt)("span",{className:"token punctuation",parentName:"span"},",")," routesList"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"await")," ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"Promise"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token parameter",parentName:"code"},"resolve"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.kt)("span",{className:"token function",parentName:"code"},"setTimeout"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),"resolve",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,t.kt)("span",{className:"token number",parentName:"code"},"1000"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n    console",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"log"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'以异步的方式触发具有延迟操作的钩子。'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("p",null,"这些需求(story)的含义在于，\n我们可以有多种方式 hook 到 compiler 中，可以让各种插件都以合适的方式去运行。"),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"custom-hooks",parentName:"h2"}),"自定义钩子",(0,t.kt)("a",{href:"#custom-hooks","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"为了便于其他插件的编译过程中可以 ",(0,t.kt)("inlineCode",{parentName:"p"},"tap")," 到，\n你可以这样做："),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"Create a module-scope ",(0,t.kt)("inlineCode",{parentName:"p"},"WeakMap")," for compilation hooks:"),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{className:"hljs language-ts",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"const")," compilationHooks ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"WeakMap",(0,t.kt)("span",{className:"token operator",parentName:"span"},"<"),"Compilation",(0,t.kt)("span",{className:"token punctuation",parentName:"span"},",")," MyHooks",(0,t.kt)("span",{className:"token operator",parentName:"span"},">")),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n\n",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"interface")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"MyHooks")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  custom",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," SyncHook",(0,t.kt)("span",{className:"token operator",parentName:"code"},"<"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"["),(0,t.kt)("span",{className:"token builtin",parentName:"code"},"number"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,t.kt)("span",{className:"token builtin",parentName:"code"},"string"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,t.kt)("span",{className:"token operator",parentName:"code"},">"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}")))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"在插件中创建一个静态方法："),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{className:"hljs language-ts",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"static")," ",(0,t.kt)("span",{className:"token function",parentName:"code"},"getCompilationHooks"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),"compilation",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," Compilation",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," MyHooks ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"let")," hooks ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," compilationHooks",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token keyword",parentName:"code"},"get"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),"compilation",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"if"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),"hooks ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"===")," ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"undefined"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    compilationHooks",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token keyword",parentName:"code"},"set"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),"compilation",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},",")," hooks ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n      custom",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"SyncHook"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),"\n    ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),"\n  ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"return")," hooks",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}")))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"像下面这样在你的插件中调用钩子函数："),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{className:"hljs language-ts",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"const")," hooks ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," MyPlugin",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"getCompilationHooks"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),"compilation",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n\nhooks",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"custom"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"call"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token number",parentName:"code"},"1"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'hello'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";")))),(0,t.kt)("li",{parentName:"ol"},(0,t.kt)("p",{parentName:"li"},"其他插件也可以访问你的自定义钩子函数："),(0,t.kt)("pre",{parentName:"li"},(0,t.kt)("code",{className:"hljs language-ts",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"import")," MyPlugin ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"from")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'my-plugin'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n\n",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"const")," hooks ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," MyPlugin",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"getCompilationHooks"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),"compilation",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n\nhooks",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"custom",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"tap"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'OtherPlugin'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),"n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},",")," s",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,t.kt)("span",{className:"token comment",parentName:"code"},"// magic"),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))))),(0,t.kt)("p",null,"再次声明，\n查看 ",(0,t.kt)("inlineCode",{parentName:"p"},"tapable")," ",(0,t.kt)("a",{href:"https://github.com/webpack/tapable",parentName:"p"},"文档")," 来了解更多不同的钩子类(hook class)，以及它们是如何工作的。"),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"reporting-progress",parentName:"h2"}),"进度报告",(0,t.kt)("a",{href:"#reporting-progress","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"插件能够通过 ",(0,t.kt)("a",{href:"/plugins/progress-plugin/",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"ProgressPlugin"))," 这个在默认情况下将信息打印到标准错误输出(stderr)的插件来进行进度报告。如果想要使用这个功能，只需要在使用 ",(0,t.kt)("a",{href:"/api/cli/",parentName:"p"},"webpack CLI")," 的时候传入 ",(0,t.kt)("inlineCode",{parentName:"p"},"--progress")," 参数。"),(0,t.kt)("p",null,"如果想要自定义打印输出，只需要传递不同的参数到 ",(0,t.kt)("a",{href:"/plugins/progress-plugin/",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"ProgressPlugin"))," 的 ",(0,t.kt)("inlineCode",{parentName:"p"},"reportProgress")," 方法。"),(0,t.kt)("p",null,"如果想要报告进度，插件必须在 ",(0,t.kt)("inlineCode",{parentName:"p"},"tap")," 到 hook 的时候使用 ",(0,t.kt)("inlineCode",{parentName:"p"},"context: true")," 选项。"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-js",parentName:"pre"},"compiler",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"hooks",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"emit",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"tapAsync"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    name",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'MyPlugin'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    context",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token boolean",parentName:"code"},"true"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token parameter",parentName:"code"},"context",(0,t.kt)("span",{className:"token punctuation",parentName:"span"},",")," compiler",(0,t.kt)("span",{className:"token punctuation",parentName:"span"},",")," callback"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"const")," reportProgress ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," context ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"&&")," context",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"reportProgress",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n    ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"if")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),"reportProgress",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token function",parentName:"code"},"reportProgress"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token number",parentName:"code"},"0.95"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'Starting work'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n    ",(0,t.kt)("span",{className:"token function",parentName:"code"},"setTimeout"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n      ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"if")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),"reportProgress",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token function",parentName:"code"},"reportProgress"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token number",parentName:"code"},"0.95"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,t.kt)("span",{className:"token string",parentName:"code"},"'Done work'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n      ",(0,t.kt)("span",{className:"token function",parentName:"code"},"callback"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n    ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,t.kt)("span",{className:"token number",parentName:"code"},"1000"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"reportProgress")," 方法在被调用的时候会传入以下的参数："),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-js",parentName:"pre"},(0,t.kt)("span",{className:"token function",parentName:"code"},"reportProgress"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),"percentage",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"..."),"args",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"percentage"),"：此参数未使用。作为代替，",(0,t.kt)("a",{href:"/plugins/progress-plugin/",parentName:"li"},(0,t.kt)("inlineCode",{parentName:"a"},"ProgressPlugin"))," 插件会基于当前的钩子(hook)计算进度。"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"...args"),"：任意数量的字符串，这些字符串会传递给 ",(0,t.kt)("inlineCode",{parentName:"li"},"ProgressPlugin")," 插件并报告给用户。")),(0,t.kt)("p",null,"注意：只有 compiler 和 compilation 钩子的子集才支持 ",(0,t.kt)("inlineCode",{parentName:"p"},"reportProgress")," 方法。请查看 ",(0,t.kt)("a",{href:"/plugins/progress-plugin/#supported-hooks",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"ProgressPlugin"))," 了解更多信息。"),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"logging",parentName:"h2"}),"日志",(0,t.kt)("a",{href:"#logging","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"日志的 API 在 webpack 4.37 版本后提供支持。当 ",(0,t.kt)("inlineCode",{parentName:"p"},"logging")," 在 ",(0,t.kt)("a",{href:"/configuration/stats/#statslogging",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"统计配置(stats configuration)")),"中可用和(或)当 ",(0,t.kt)("a",{href:"/configuration/other-options/#infrastructurelogging",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"infrastructure logging"))," 可用的时候，插件会通过各自的记录格式(stats，infrastructure)打印信息。"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"插件可以使用 ",(0,t.kt)("inlineCode",{parentName:"li"},"compilation.getLogger('PluginName')")," 来做记录。这种形式的记录保存在统计数据(Stats)中并做相应的格式化。它能够被用户过滤和导出。"),(0,t.kt)("li",{parentName:"ul"},"插件也可以使用 ",(0,t.kt)("inlineCode",{parentName:"li"},"compilation.getInfrastructureLogger('PluginName')")," 来做记录。使用 ",(0,t.kt)("inlineCode",{parentName:"li"},"infrastructure")," 的形式并不会被保存在统计数据(Stats)中，因此也不会被格式化。它通常直接将记录载入到 console/dashboard/GUI 中。它能够被用户过滤。"),(0,t.kt)("li",{parentName:"ul"},"插件也可以使用特殊的降级逻辑 ",(0,t.kt)("inlineCode",{parentName:"li"},"compilation.getLogger ? compilation.getLogger('PluginName') : console")," 来检测是否支持记录，以此来在不支持 ",(0,t.kt)("inlineCode",{parentName:"li"},"compilation.getLogger")," 方法的旧版本 webpack 中提供降级方法。")),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"next-steps",parentName:"h2"}),"下一步",(0,t.kt)("a",{href:"#next-steps","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"查看 ",(0,t.kt)("a",{href:"/api/compiler-hooks/",parentName:"p"},"compiler hooks")," 部分，\n了解所有可用的 ",(0,t.kt)("inlineCode",{parentName:"p"},"compiler")," 钩子以及它们提供的参数的详细列表。"))}p.isMDXComponent=!0,e.default=p}}]);