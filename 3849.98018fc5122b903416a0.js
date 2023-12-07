"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3849],{3849:function(a,e,t){t.r(e),t(7378);var n=t(2682),p=["components"];function s(){return s=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(a[n]=t[n])}return a},s.apply(this,arguments)}function o(a){var e=a.components,t=function(a,e){if(null==a)return{};var t,n,p=function(a,e){if(null==a)return{};var t,n,p={},s=Object.keys(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||(p[t]=a[t]);return p}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(p[t]=a[t])}return p}(a,p);return(0,n.kt)("wrapper",s({components:e},t),(0,n.kt)("p",null,"首先，我们要消除一个常见的误解。webpack 是一个模块打包工具(module bundler)（例如，",(0,n.kt)("a",{href:"http://browserify.org/",parentName:"p"},"Browserify")," 或 ",(0,n.kt)("a",{href:"https://brunch.io/",parentName:"p"},"Brunch"),"）。而 ",(0,n.kt)("em",{parentName:"p"},"不是一个任务执行工具(task runner)"),"（例如，",(0,n.kt)("a",{href:"https://www.gnu.org/software/make/",parentName:"p"},"Make"),", ",(0,n.kt)("a",{href:"https://gruntjs.com/",parentName:"p"},"Grunt")," 或者 ",(0,n.kt)("a",{href:"https://gulpjs.com/",parentName:"p"},"Gulp")," ）。任务执行工具用来自动化处理常见的开发任务，例如，lint(代码检测)、build(构建)、test(测试)。相比模块打包工具，任务执行工具则聚焦在偏重上层的问题上面。你仍然可以得益于这种用法：使用上层的工具，而将打包部分的问题留给 webpack。"),(0,n.kt)("p",null,"打包工具帮助你取得准备用于部署的 JavaScript 和 stylesheet，将它们转换为适合浏览器的可用格式。例如，可以通过 ",(0,n.kt)("a",{href:"/plugins/terser-webpack-plugin",parentName:"p"},"压缩"),"、",(0,n.kt)("a",{href:"/guides/code-splitting",parentName:"p"},"分离 chunk")," 和 ",(0,n.kt)("a",{href:"/guides/lazy-loading",parentName:"p"},"惰性加载")," 我们的 JavaScript 来提高性能。打包是 web 开发中最重要的挑战之一，解决此问题可以消除开发过程中的大部分痛点。"),(0,n.kt)("p",null,"好的消息是，虽然有一些功能重叠，但是如果使用方式正确，任务运行工具和模块打包工具还是能够一起协同工作。本指南提供了关于如何将 webpack 与一些流行的任务运行工具集成在一起的高度概述。"),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"npm-scripts",parentName:"h2"}),"NPM Scripts",(0,n.kt)("a",{href:"#npm-scripts","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"通常 webpack 用户使用 npm ",(0,n.kt)("a",{href:"https://docs.npmjs.com/misc/scripts",parentName:"p"},(0,n.kt)("inlineCode",{parentName:"a"},"scripts"))," 来作为任务执行工具。这是比较好的开始。然而跨平台支持可能是个问题，但是有几种解决方案。许多用户（但不是大多数用户）直接使用 npm ",(0,n.kt)("inlineCode",{parentName:"p"},"scripts")," 和各种级别的 webpack 配置和工具。"),(0,n.kt)("p",null,"因此，虽然 webpack 核心重点是打包，但是可以通过各种扩展，将它用于任务运行工具的常见工作。集成一个单独的工具会增加复杂度，因此在开始前一定要权衡利弊。"),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"grunt",parentName:"h2"}),"Grunt",(0,n.kt)("a",{href:"#grunt","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"对于那些使用 Grunt 的人，我们推荐使用 ",(0,n.kt)("a",{href:"https://www.npmjs.com/package/grunt-webpack",parentName:"p"},(0,n.kt)("inlineCode",{parentName:"a"},"grunt-webpack"))," package。使用 ",(0,n.kt)("inlineCode",{parentName:"p"},"grunt-webpack")," 你可以将 webpack 或 ",(0,n.kt)("a",{href:"https://github.com/webpack/webpack-dev-server",parentName:"p"},"webpack-dev-server")," 作为一项任务(task)执行，访问 ",(0,n.kt)("a",{href:"https://gruntjs.com/api/grunt.template",parentName:"p"},"grunt template tags")," 中的统计信息，拆分开发和生产配置等等。如果还没有安装 ",(0,n.kt)("inlineCode",{parentName:"p"},"grunt-webpack")," 和 ",(0,n.kt)("inlineCode",{parentName:"p"},"webpack"),"，请先安装它们："),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-bash",parentName:"pre"},(0,n.kt)("span",{className:"token function",parentName:"code"},"npm")," ",(0,n.kt)("span",{className:"token function",parentName:"code"},"install")," --save-dev grunt-webpack webpack")),(0,n.kt)("p",null,"然后，注册一个配置并加载任务："),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Gruntfile.js")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-js",parentName:"pre"},(0,n.kt)("span",{className:"token keyword",parentName:"code"},"const")," webpackConfig ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token function",parentName:"code"},"require"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token string",parentName:"code"},"'./webpack.config.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n\nmodule",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function-variable function",parentName:"code"},"exports")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"function")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token parameter",parentName:"code"},"grunt"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  grunt",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"initConfig"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    webpack",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n      options",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n        stats",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"!"),"process",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"env",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token constant",parentName:"code"},"NODE_ENV")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"||")," process",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"env",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token constant",parentName:"code"},"NODE_ENV")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"===")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'development'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n      ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n      prod",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," webpackConfig",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n      dev",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," Object",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"assign"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{")," watch",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token boolean",parentName:"code"},"true")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," webpackConfig",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n\n  grunt",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"loadNpmTasks"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token string",parentName:"code"},"'grunt-webpack'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,"获取更多信息，请查看 ",(0,n.kt)("a",{href:"https://github.com/webpack-contrib/grunt-webpack",parentName:"p"},"仓库"),"。"),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"gulp",parentName:"h2"}),"Gulp",(0,n.kt)("a",{href:"#gulp","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"在 ",(0,n.kt)("a",{href:"https://github.com/shama/webpack-stream",parentName:"p"},(0,n.kt)("inlineCode",{parentName:"a"},"webpack-stream"))," package（也称作 ",(0,n.kt)("inlineCode",{parentName:"p"},"gulp-webpack"),"） 的帮助下，可以相当直接地将 Gulp 与 webpack 集成。在这种情况下，不需要单独安装 ",(0,n.kt)("inlineCode",{parentName:"p"},"webpack"),"，因为它是 ",(0,n.kt)("inlineCode",{parentName:"p"},"webpack-stream")," 直接依赖："),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-bash",parentName:"pre"},(0,n.kt)("span",{className:"token function",parentName:"code"},"npm")," ",(0,n.kt)("span",{className:"token function",parentName:"code"},"install")," --save-dev webpack-stream")),(0,n.kt)("p",null,"只要将 ",(0,n.kt)("inlineCode",{parentName:"p"},"webpack")," 替换为 ",(0,n.kt)("inlineCode",{parentName:"p"},"require('webpack-stream')"),"，并传递一个配置："),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"gulpfile.js")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-js",parentName:"pre"},(0,n.kt)("span",{className:"token keyword",parentName:"code"},"const")," gulp ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token function",parentName:"code"},"require"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token string",parentName:"code"},"'gulp'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"const")," webpack ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token function",parentName:"code"},"require"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token string",parentName:"code"},"'webpack-stream'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\ngulp",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"task"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token string",parentName:"code"},"'default'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"function")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"return")," gulp\n    ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"src"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token string",parentName:"code"},"'src/entry.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),"\n    ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"pipe"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),"\n      ",(0,n.kt)("span",{className:"token function",parentName:"code"},"webpack"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n        ",(0,n.kt)("span",{className:"token comment",parentName:"code"},"// Any configuration options..."),"\n      ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),"\n    ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),"\n    ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"pipe"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),"gulp",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"dest"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token string",parentName:"code"},"'dist/'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,"获取更多信息，请查看 ",(0,n.kt)("a",{href:"https://github.com/shama/webpack-stream",parentName:"p"},"仓库"),"。"),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"mocha",parentName:"h2"}),"Mocha",(0,n.kt)("a",{href:"#mocha","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,(0,n.kt)("a",{href:"https://github.com/zinserjan/mocha-webpack",parentName:"p"},(0,n.kt)("inlineCode",{parentName:"a"},"mocha-webpack"))," 可以将 Mocha 与 webpack 完全集成。这个仓库提供了很多关于其优势和劣势的细节，基本上 ",(0,n.kt)("inlineCode",{parentName:"p"},"mocha-webpack")," 只是一个简单封装，提供与 Mocha 几乎相同的 CLI，并提供各种 webpack 功能，例如改进了 watch mode 和改进了路径分析。这里是一个如何安装并使用它来运行测试套件的示例（在 ",(0,n.kt)("inlineCode",{parentName:"p"},"./test")," 中找到）："),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-bash",parentName:"pre"},(0,n.kt)("span",{className:"token function",parentName:"code"},"npm")," ",(0,n.kt)("span",{className:"token function",parentName:"code"},"install")," --save-dev webpack mocha mocha-webpack\nmocha-webpack ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'test/**/*.js'"))),(0,n.kt)("p",null,"获取更多信息，请查看 ",(0,n.kt)("a",{href:"https://github.com/zinserjan/mocha-webpack",parentName:"p"},"仓库"),"。"),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"karma",parentName:"h2"}),"Karma",(0,n.kt)("a",{href:"#karma","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,(0,n.kt)("a",{href:"https://github.com/webpack-contrib/karma-webpack",parentName:"p"},(0,n.kt)("inlineCode",{parentName:"a"},"karma-webpack"))," package 允许你使用 webpack 预处理 ",(0,n.kt)("a",{href:"https://karma-runner.github.io/1.0/index.html",parentName:"p"},"Karma")," 中的文件。"),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-bash",parentName:"pre"},(0,n.kt)("span",{className:"token function",parentName:"code"},"npm")," ",(0,n.kt)("span",{className:"token function",parentName:"code"},"install")," --save-dev webpack karma karma-webpack")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"karma.conf.js")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-js",parentName:"pre"},"module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function-variable function",parentName:"code"},"exports")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"function")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token parameter",parentName:"code"},"config"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  config",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"set"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    frameworks",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"["),(0,n.kt)("span",{className:"token string",parentName:"code"},"'webpack'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    files",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"["),"\n      ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{")," pattern",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'test/*_test.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," watched",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token boolean",parentName:"code"},"false")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n      ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{")," pattern",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'test/**/*_test.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," watched",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token boolean",parentName:"code"},"false")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    preprocessors",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n      ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'test/*_test.js'"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"["),(0,n.kt)("span",{className:"token string",parentName:"code"},"'webpack'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n      ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'test/**/*_test.js'"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"["),(0,n.kt)("span",{className:"token string",parentName:"code"},"'webpack'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    webpack",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n      ",(0,n.kt)("span",{className:"token comment",parentName:"code"},"// Any custom webpack configuration..."),"\n    ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    plugins",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"["),(0,n.kt)("span",{className:"token string",parentName:"code"},"'karma-webpack'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,"获取更多信息，请查看 ",(0,n.kt)("a",{href:"https://github.com/webpack-contrib/karma-webpack",parentName:"p"},"仓库"),"。"))}o.isMDXComponent=!0,e.default=o}}]);