(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{406:function(t,e,n){},430:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r);n(406);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var u,c=t[Symbol.iterator]();!(r=(u=c.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){a=!0,o=t}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var c=function(){var t=o(Object(r.useState)(0),2),e=t[0],n=t[1];return a.a.createElement("div",{className:"counter"},a.a.createElement("p",null,"count: ",e),a.a.createElement("button",{onClick:function(){return n(e-1)}},"Decrement"),a.a.createElement("button",{onClick:function(){return n(e+1)}},"Increment"))};e.default=function(){return a.a.createElement("div",{className:"counter-page"},a.a.createElement("h2",null,"Counter example"),a.a.createElement(c,null))}}}]);