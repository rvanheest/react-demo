(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{363:function(){},364:function(){},365:function(){},366:function(){},377:function(a,b,c){"use strict";function d(a,b){return j(a)||h(a,b)||f(a,b)||e()}function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(a,b){if(a){if("string"==typeof a)return g(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?g(a,b):void 0}}function g(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function h(a,b){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function j(a){if(Array.isArray(a))return a}function k(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function i(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?k(Object(b),!0).forEach(function(c){l(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):k(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function l(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function m(a){return p(a)||o(a)||s(a)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(a){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a))return Array.from(a)}function p(a){if(Array.isArray(a))return t(a)}function q(a,b){return v(a)||u(a,b)||s(a,b)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(a,b){if(a){if("string"==typeof a)return t(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?t(a,b):void 0}}function t(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function u(a,b){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!(b&&c.length===b));d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h["return"]||h["return"]()}finally{if(e)throw f}}return c}}function v(a){if(Array.isArray(a))return a}c.r(b);var w=c(0),x=c.n(w),y=c(120),z=c(363),A=c(364),B=function(a){var b=a.item,c=b.id,d=b.description,e=b.completed,f=a.setDone,g=a.remove;return x.a.createElement("li",null,x.a.createElement("input",{type:"checkbox",id:"todo-item-".concat(c),checked:e,onChange:function(a){return f(c,a.target.checked)}}),x.a.createElement("label",{htmlFor:"todo-item-".concat(c),className:e?"completed":""},d),x.a.createElement("button",{type:"button",className:"delete",onClick:function(){return g(c)}},"x"))},C=function(a){var b=a.list,c=a.setItemDone,d=a.removeItem;return 0==b.length?x.a.createElement("p",{className:"emptyList"},"Nothing to display"):x.a.createElement("ul",{className:"todoList"},b.map(function(a){return x.a.createElement(B,{key:a.id,item:a,setDone:c,remove:d})}))},D=c(365),E=c(366),F=function(a){var b=a.onAdd,c=Object(w.useState)(""),e=d(c,2),f=e[0],g=e[1];return x.a.createElement("form",{className:"todo-input",onSubmit:function(a){a.preventDefault(),!f||(b(f),g(""))}},x.a.createElement("input",{type:"text",name:"todo-input",value:f,onChange:function(a){g(a.target.value)}}),x.a.createElement("button",{type:"submit",disabled:!f},"Add"))},G=b["default"]=function(){var a=Object(w.useState)([{id:Object(y.a)(),description:"add input form",completed:!1},{id:Object(y.a)(),description:"add checkmarks",completed:!0}]),b=q(a,2),c=b[0],d=b[1];return x.a.createElement("div",{className:"todo"},x.a.createElement("h2",null,"To do list"),x.a.createElement(F,{onAdd:function(a){d([].concat(m(c),[{id:Object(y.a)(),description:a,completed:!1}]))}}),x.a.createElement(C,{list:c,setItemDone:function(a,b){d(c.map(function(c){return c.id==a?i(i({},c),{},{completed:b}):c}))},removeItem:function(a){d(c.filter(function(b){var c=b.id;return a!=c}))}}))}}}]);