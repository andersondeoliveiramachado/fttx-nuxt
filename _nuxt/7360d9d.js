(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{109:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex-shrink-0"},[e("img",{staticClass:"h-10 w-10",attrs:{src:r(209),alt:"FTTx.gr logo"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"text-gray-300 ml-4 px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",attrs:{href:"https://github.com/fttx-gr"}},[e("i",{staticClass:"fab fa-github"}),this._v(" GitHub")])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",attrs:{href:"https://github.com/fttx-gr"}},[e("i",{staticClass:"fab fa-github"}),this._v(" GitHub")])}],o={name:"Header",data:function(){return{currPage:"map",profileDropdown:!1,vcoConfig:{events:["dblclick","click"],isActive:!0},hamburger:!1}},methods:{currentPage:function(t){this.currPage=t},hamburgerClick:function(){this.hamburger=!this.hamburger,this.$root.$emit("hamburgerState",this.hamburger)}}},c=(r(210),r(7)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nav",{staticClass:"bg-gray-800"},[r("div",{staticClass:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},[r("div",{staticClass:"flex items-center justify-between h-16"},[r("div",{staticClass:"flex items-center"},[t._m(0),t._v(" "),r("div",{staticClass:"hidden md:block"},[r("div",{staticClass:"ml-10 flex items-baseline"},[r("nuxt-link",{staticClass:"px-3 py-2 rounded-md text-sm font-medium focus:outline-none focus:text-white focus:bg-gray-700",class:["index"==this.$route.name?"text-white bg-gray-900":"","text-gray-300"],attrs:{to:"/"},on:{click:function(e){return e.preventDefault(),t.currentPage("index")}}},[r("i",{staticClass:"fas fa-map-marked-alt"}),t._v(" Map")]),t._v(" "),r("nuxt-link",{staticClass:"ml-4 px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",class:["add"==this.$route.name?"text-white bg-gray-900":"","text-gray-300"],attrs:{to:"/add"},on:{click:function(e){return e.preventDefault(),t.currentPage("add")}}},[r("i",{staticClass:"fas fa-plus-circle"}),t._v(" Add Cabinet")]),t._v(" "),r("nuxt-link",{staticClass:"ml-4 px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",class:["speed"==this.$route.name?"text-white bg-gray-900":"","text-gray-300"],attrs:{to:"/speed"},on:{click:function(e){return e.preventDefault(),t.currentPage("speed")}}},[r("i",{staticClass:"fas fa-tachometer-alt"}),t._v(" Test Your\n                Speed")]),t._v(" "),t._m(1)],1)])]),t._v(" "),r("div",{staticClass:"-mr-2 flex md:hidden",staticStyle:{"z-index":"9999"}},[r("button",{staticClass:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white",on:{click:function(e){return e.preventDefault(),t.hamburgerClick()}}},[r("svg",{staticClass:"h-6 w-6",class:t.hamburger?"hidden":"block",attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"}})]),t._v(" "),r("svg",{staticClass:"h-6 w-6",class:t.hamburger?"block":"hidden",attrs:{stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])])])]),t._v(" "),r("div",{class:t.hamburger?"block":"hidden"},[r("div",{staticClass:"px-2 pt-2 pb-3 sm:px-3",on:{click:function(e){return e.preventDefault(),t.hamburgerClick()}}},[r("nuxt-link",{staticClass:"block px-3 py-2 rounded-md text-base font-medium text-white focus:outline-none focus:text-white focus:bg-gray-700",class:"index"===this.$route.name?"text-white bg-gray-900":"text-gray-300",attrs:{to:"/"}},[r("i",{staticClass:"fas fa-map-marked-alt"}),t._v(" Map")]),t._v(" "),r("nuxt-link",{staticClass:"mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",class:"add"==this.$route.name?"text-white bg-gray-900":"text-gray-300",attrs:{to:"/add"}},[r("i",{staticClass:"fas fa-plus-circle"}),t._v(" Add Cabinet")]),t._v(" "),r("nuxt-link",{staticClass:"mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700",class:["speed"==this.$route.name?"text-white bg-gray-900":"","text-gray-300"],attrs:{to:"/speed/"},on:{click:function(e){return e.preventDefault(),t.currentPage("speed")}}},[r("i",{staticClass:"fas fa-tachometer-alt"}),t._v(" Test Your Speed")]),t._v(" "),t._m(2)],1)])])])}),n,!1,null,"9b218fd6",null);e.default=component.exports},112:function(t,e,r){"use strict";var n=r(0),o=r(160),c=r(161),l=r.n(c);n.a.use(l.a),n.a.use(o,{load:{key:"AIzaSyBg4wE12cEcuWJGQMbKNnb6m2CUTydSZSY",libraries:["places","geometry"]}})},113:function(t,e,r){"use strict";e.a=function(t){var i,s,e,r,a,n,o=t.app;i=window,s=document,e="script",r="ga",i.GoogleAnalyticsObject=r,i.ga=i.ga||function(){(i.ga.q=i.ga.q||[]).push(arguments)},i.ga.l=1*new Date,a=s.createElement(e),n=s.getElementsByTagName(e)[0],a.async=1,a.src="https://www.google-analytics.com/analytics.js",n.parentNode.insertBefore(a,n),ga("create","UA-129649039-2","auto"),o.router.afterEach((function(t,e){ga("set","page",t.fullPath),ga("send","pageview")}))}},163:function(t,e,r){"use strict";var n={components:{Header:r(109).default}},o=r(7),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Header"),this._v(" "),e("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Header:r(109).default})},167:function(t,e,r){r(168),t.exports=r(169)},209:function(t,e,r){t.exports=r.p+"img/fttx-logo.fd88d4d.png"},210:function(t,e,r){"use strict";var n=r(75);r.n(n).a},211:function(t,e,r){(e=r(26)(!1)).push([t.i,"body[data-v-9b218fd6],html[data-v-9b218fd6]{margin:0}.slide-fade-enter-active[data-v-9b218fd6]{transition:all .3s ease}.slide-fade-leave-active[data-v-9b218fd6]{transition:all .2s ease}.slide-fade-enter[data-v-9b218fd6],.slide-fade-leave-to[data-v-9b218fd6]{transform:translateY(-50px);opacity:0}",""]),t.exports=e},75:function(t,e,r){var content=r(211);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("3e204f0a",content,!0,{sourceMap:!1})}},[[167,9,4,10]]]);