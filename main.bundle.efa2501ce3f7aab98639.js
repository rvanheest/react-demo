!function(e){function t(t){for(var n,o,u=t[0],i=t[1],l=t[2],f=0,p=[];f<u.length;f++)o=u[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(d&&d(t);p.length;)p.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(c.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={9:0},a={9:0},c=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{1:1,2:1,3:1,4:1,5:1,6:1,8:1}[e]&&t.push(o[e]=new Promise((function(t,r){for(var n=({1:"ClockPage",2:"ConsolePage",3:"CounterPage",4:"MousePositionPage",5:"ReduxCounterPage",6:"ReduxTodoPage",7:"RxJsPage",8:"TodoPage"}[e]||e)+".bundle."+{1:"13ae8dbfcf4faeb05ecc",2:"ec4cb23c85de21a2e95f",3:"4b2aa7a0efadfcd2f2c8",4:"2567b03e2200aeb1ca34",5:"37a9d5e675095d0fb7dc",6:"fee26f29f5c963ce7c84",7:"31d6cfe0d16ae931b73c",8:"28d1c57bf0d73e904dc4"}[e]+".css",a=u.p+n,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=(d=c[i]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===n||l===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){var d;if((l=(d=f[i]).getAttribute("data-href"))===n||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete o[e],p.parentNode.removeChild(p),r(c)},p.href=a,document.getElementsByTagName("head")[0].appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=function(e){return u.p+""+({1:"ClockPage",2:"ConsolePage",3:"CounterPage",4:"MousePositionPage",5:"ReduxCounterPage",6:"ReduxTodoPage",7:"RxJsPage",8:"TodoPage"}[e]||e)+".bundle."+{1:"2957a2e5584993ddc5b8",2:"bf8eed8d9e083d462b60",3:"d026af8a728b3cc85a80",4:"c3e9911fbbf1bcf5de1f",5:"57c246a659819dab884c",6:"7cadf646117dc90ba70b",7:"b0efe3442e7b99686e9a",8:"973308877e3b81f581fc"}[e]+".js"}(e);var l=new Error;c=function(t){i.onerror=i.onload=null,clearTimeout(f);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,r[1](l)}a[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/react-demo/",u.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var d=l;c.push([367,0]),r()}({131:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return p})),r.d(t,"d",(function(){return s})),r.d(t,"e",(function(){return b}));var n,o=r(130);function a(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}!function(e){e.ADD_ITEM="ADD_ITEM",e.COMPLETE_ITEM="COMPLETE_ITEM",e.DELETE_ITEM="DELETE_ITEM"}(n||(n={}));var f={list:[{id:Object(o.a)(),description:"add input form",completed:!1},{id:Object(o.a)(),description:"add checkmarks",completed:!0}]};t.c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.ADD_ITEM:return i(i({},e),{},{list:[].concat(a(e.list),[{id:Object(o.a)(),description:t.payload,completed:!1}])});case n.COMPLETE_ITEM:return i(i({},e),{},{list:e.list.map((function(e){return e.id==t.payload.id?i(i({},e),{},{completed:t.payload.completed}):e}))});case n.DELETE_ITEM:return i(i({},e),{},{list:e.list.filter((function(e){var r=e.id;return t.payload!=r}))});default:return e}};var d=function(e){return{type:n.ADD_ITEM,payload:e}},p=function(e,t){return{type:n.COMPLETE_ITEM,payload:{id:e,completed:t}}},s=function(e){return{type:n.DELETE_ITEM,payload:e}},b=function(e){return e.todo.list}},166:function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c;r.d(t,"d",(function(){return i})),r.d(t,"a",(function(){return l})),r.d(t,"c",(function(){return f})),function(e){e.INCREMENT="INCREMENT",e.DECREMENT="DECREMENT"}(c||(c={}));var u={count:0};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.INCREMENT:return o(o({},e),{},{count:e.count+1});case c.DECREMENT:return o(o({},e),{},{count:e.count-1});default:return e}};var i=function(){return{type:c.INCREMENT}},l=function(){return{type:c.DECREMENT}},f=function(e){return e.count.count}},363:function(e,t,r){},367:function(e,t,r){"use strict";r.r(t);r(169);var n=r(0),o=r.n(n),a=r(87),c=r.n(a),u=r(73),i=r(126),l=r(11),f=(r(363),function(e){var t=e.text,r=e.path;return o.a.createElement("li",null,o.a.createElement(i.b,{to:r},t))}),d=function(){return o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement(f,{text:"Home",path:"/"}),o.a.createElement(f,{text:"Counter",path:"/counter"}),o.a.createElement(f,{text:"Counter with global state",path:"/redux-counter"}),o.a.createElement(f,{text:"Todo list",path:"/todolist"}),o.a.createElement(f,{text:"Todo list with global state",path:"/redux-todolist"}),o.a.createElement(f,{text:"RxJS demo's",path:"/rxjs"})))},p=o.a.lazy((function(){return r.e(3).then(r.bind(null,402))})),s=o.a.lazy((function(){return r.e(5).then(r.bind(null,403))})),b=o.a.lazy((function(){return r.e(8).then(r.bind(null,400))})),m=o.a.lazy((function(){return r.e(6).then(r.bind(null,401))})),y=o.a.lazy((function(){return r.e(7).then(r.bind(null,399))})),E=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",null,o.a.createElement("h1",null,"Demo apps"),o.a.createElement(d,null)),o.a.createElement("hr",null),o.a.createElement("main",null,o.a.createElement(l.c,null,o.a.createElement(n.Suspense,{fallback:o.a.createElement("div",null,"Loading page...")},o.a.createElement(l.a,{path:"/",exact:!0},o.a.createElement("p",{style:{textAlign:"center"}},"You're home!!!")),o.a.createElement(l.a,{path:"/counter",exact:!0,component:p}),o.a.createElement(l.a,{path:"/redux-counter",exact:!0,component:s}),o.a.createElement(l.a,{path:"/todolist",exact:!0,component:b}),o.a.createElement(l.a,{path:"/redux-todolist",exact:!0,component:m}),o.a.createElement(l.a,{path:"/rxjs",component:y})))))},h=function(e){var t=e.store;return o.a.createElement(o.a.StrictMode,null,o.a.createElement(u.a,{store:t},o.a.createElement(i.a,{basename:"/react-demo"},o.a.createElement(E,null))))},g=r(36),v=Boolean(!1),O=r(166),j=r(131),P=Object(g.combineReducers)({count:O.b,todo:j.c}),T=[];function w(e){return function(e){if(Array.isArray(e))return M(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return M(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return M(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}c.a.render(o.a.createElement(h,{store:function(){var e=function(){return!0},t=w(T);if(v){var n=r(365).createLogger,o=(0,r(366).composeWithDevTools)({predicate:e});return Object(g.createStore)(P,o(g.applyMiddleware.apply(void 0,w(t).concat([n({predicate:e})]))))}return Object(g.createStore)(P,g.applyMiddleware.apply(void 0,w(t)))}()}),document.getElementById("root"))}});