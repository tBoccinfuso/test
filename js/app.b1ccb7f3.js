(function(e){function t(t){for(var r,o,c=t[0],s=t[1],i=t[2],f=0,d=[];f<c.length;f++)o=c[f],a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(d.length)d.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(u.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},u=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d0c8664":"271f8cd6","chunk-2d0e24b5":"45f4502e","chunk-2d0f0bbf":"fa0212e9","chunk-2d213767":"2d905967","chunk-2d22269e":"e1181eef","chunk-4444a092":"b2f2fe76","chunk-4c23ffd6":"bf0c0348","chunk-62990c44":"0cb58549","chunk-76eaa41b":"682ad189"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-4444a092":1,"chunk-4c23ffd6":1,"chunk-62990c44":1,"chunk-76eaa41b":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0c8664":"31d6cfe0","chunk-2d0e24b5":"31d6cfe0","chunk-2d0f0bbf":"31d6cfe0","chunk-2d213767":"31d6cfe0","chunk-2d22269e":"31d6cfe0","chunk-4444a092":"cae0f510","chunk-4c23ffd6":"cae0f510","chunk-62990c44":"0fb7a5e5","chunk-76eaa41b":"89a605b0"}[e]+".css",a=s.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var i=u[c],f=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(f===r||f===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){i=d[c],f=i.getAttribute("data-href");if(f===r||f===a)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],l.parentNode.removeChild(l),n(u)},l.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(l)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=u);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=c(e),i=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var d=setTimeout(function(){i({type:"timeout",target:f})},12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var l=f;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"3dfd":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/m-about"}},[e._v("Mosaic - About")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/about/team"}},[e._v("Mosaic- Bios")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/about"}},[e._v("Test - About")])],1),n("router-view")],1)},o=[],a=(n("034f"),n("2877")),u={},c=Object(a["a"])(u,r,o,!1,null,null,null);t["default"]=c.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=n("3dfd"),a=n("9693"),u=n("db49");r["a"].config.productionTip=!1,r["a"].use(a["default"]);var c=u["default"].newRouter(u["default"].pages);new r["a"]({router:c,render:function(e){return e(o["default"])}}).$mount("#app")},"64a9":function(e,t,n){},9693:function(e,t,n){"use strict";n.r(t);var r=n("bc35"),o=n("be77"),a={pages:o["default"],install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r["default"].install(e,t),e.prototype.$mosaic={hello:function(){return"Hello from Mosaic"}},console.log("Mosaic (theme) plugin installed")},newRouter:function(e){return r["default"].buildRoutes(o["default"],e)}};t["default"]=a},bc35:function(e,t,n){"use strict";n.r(t);n("6762");var r=n("768b"),o=(n("ac6a"),n("ffc1"),n("96cf"),n("3b8d")),a=n("bc3a"),u=n.n(a),c={install:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.prototype.$get_properties=Object(o["a"])(regeneratorRuntime.mark(function e(){var t,n,r=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",e.prev=1,e.next=4,u.a.get("https://my-json-server.typicode.com/tBoccinfuso/demo/properties/".concat(t));case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e["catch"](1),e.abrupt("return","unable to get data :(");case 11:case"end":return e.stop()}},e,null,[[1,8]])})),console.log("Core plugin installed")},buildRoutes:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[],o=[],a=0,u=Object.entries(e);a<u.length;a++){var c=Object(r["a"])(u[a],2),s=(c[0],c[1]);o.push(s)}for(var i=0,f=Object.entries(t);i<f.length;i++){var d=Object(r["a"])(f[i],2);d[0],s=d[1];n.push(s);for(var l=0;l<o.length;l++)n.includes(o[l])||n.push(o[l])}return console.log("Routes built by the Core"),n}};t["default"]=c},be77:function(e,t,n){"use strict";n.r(t);var r={home:{path:"/",name:"baseHome",component:function(){return n.e("chunk-62990c44").then(n.bind(null,"9c0d"))}},about:{path:"/m-about",name:"baseAbout",component:function(){return n.e("chunk-2d0e24b5").then(n.bind(null,"7da3"))},children:[{path:"team",name:"mosaicTeamBios",component:function(){return n.e("chunk-2d0f0bbf").then(n.bind(null,"9e41"))}}]},error:{path:"*",name:"baseError",redirect:"/test/404"},404:{path:"/404",name:"baseNotFound",component:function(){return n.e("chunk-2d213767").then(n.bind(null,"ad7e"))}}};t["default"]=r},c84f:function(e,t,n){"use strict";n.r(t);var r=n("d7c2");t["default"]={about:r["default"].buildPageRoute("/about","WebsiteAbout","About")}},d43f:function(e,t,n){var r={"./App":["3dfd",9],"./App.vue":["3dfd",9],"./BaseTheme/FrontendCore/core":["bc35",9],"./BaseTheme/FrontendCore/core.js":["bc35",9],"./BaseTheme/Pages/404":["ad7e",9,"chunk-2d213767"],"./BaseTheme/Pages/404.vue":["ad7e",9,"chunk-2d213767"],"./BaseTheme/Pages/About/About":["7da3",9,"chunk-2d0e24b5"],"./BaseTheme/Pages/About/About.vue":["7da3",9,"chunk-2d0e24b5"],"./BaseTheme/Pages/Home/Home":["9c0d",9,"chunk-62990c44"],"./BaseTheme/Pages/Home/Home.scss":["edf9",7,"chunk-76eaa41b"],"./BaseTheme/Pages/Home/Home.vue":["9c0d",9,"chunk-62990c44"],"./BaseTheme/Pages/TeamBios/TeamBios":["9e41",9,"chunk-2d0f0bbf"],"./BaseTheme/Pages/TeamBios/TeamBios.vue":["9e41",9,"chunk-2d0f0bbf"],"./BaseTheme/Theme":["9693",9],"./BaseTheme/Theme.js":["9693",9],"./BaseTheme/config/BaseThemePages":["be77",9],"./BaseTheme/config/BaseThemePages.js":["be77",9],"./Pages/About/About":["555c",9,"chunk-2d0c8664"],"./Pages/About/About.vue":["555c",9,"chunk-2d0c8664"],"./Pages/Home/Home":["5c04",9,"chunk-4c23ffd6"],"./Pages/Home/Home.vue":["5c04",9,"chunk-4c23ffd6"],"./assets/logo.png":["cf05",7,"chunk-2d22269e"],"./components/HelloWorld":["fdab",9,"chunk-4444a092"],"./components/HelloWorld.vue":["fdab",9,"chunk-4444a092"],"./config":["db49",9],"./config.js":["db49",9],"./helpers":["d7c2",9],"./helpers.js":["d7c2",9],"./main":["56d7",9],"./main.js":["56d7",9],"./pages":["c84f",9],"./pages.js":["c84f",9]};function o(e){var t=r[e];return t?Promise.all(t.slice(2).map(n.e)).then(function(){var e=t[0];return n.t(e,t[1])}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}o.keys=function(){return Object.keys(r)},o.id="d43f",e.exports=o},d7c2:function(e,t,n){"use strict";n.r(t),t["default"]={buildPageRoute:function(e,t,r){var o="./Pages/"+r+"/"+r+".vue";return{path:e,name:t,component:function(){return n("d43f")("".concat(o))}}}}},db49:function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=n("8c4f"),a=n("9693"),u=n("c84f");r["a"].use(o["a"]);var c={pages:u["default"],newRouter:function(e){return new o["a"]({mode:"history",base:"/",routes:a["default"].newRouter(e)})}};t["default"]=c}});
//# sourceMappingURL=app.b1ccb7f3.js.map