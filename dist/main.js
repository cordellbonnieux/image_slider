(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,"body {\n  background-color: #000;\n}\n#sliderWrapper {\n  width: 100%;\n}\n.slide {\n  position: relative;\n  transition: opacity 2s ease-in-out;\n}\n.previousWrapper {\n  left: 0;\n  padding-left: 30px;\n}\n.nextWrapper {\n  right: 0;\n  padding-right: 30px;\n}\n.nextWrapper,\n.previousWrapper {\n  position: fixed;\n  top: 200px;\n  background-color: #fff;\n  padding: 15px;\n}\n.next,\n.previous {\n  transition: 2s;\n  cursor: pointer;\n  margin: 0 10px;\n}\n.next:hover,\n.previous:hover {\n  text-decoration: underline;\n}\n",""]);const o=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:(e,t,n)=>{var r,i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function a(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],i=0;i<e.length;i++){var s=e[i],c=t.base?s[0]+t.base:s[0],d=n[c]||0,l="".concat(c," ").concat(d);n[c]=d+1;var u=a(l),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(o[u].references++,o[u].updater(p)):o.push({identifier:l,updater:v(p,t),references:1}),r.push(l)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,l=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function u(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,m=0;function v(e,t){var n,r,i;if(t.singleton){var o=m++;n=f||(f=c(t)),r=u.bind(null,n,o,!1),i=u.bind(null,n,o,!0)}else n=c(t),r=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=a(n[r]);o[i].references--}for(var c=s(e,t),d=0;d<n.length;d++){var l=a(n[d]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}n=c}}}}},t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{function e(e,n,r){if(n>0){const r=document.createElement("span");r.textContent="Previous",r.setAttribute("class","previous"),r.addEventListener("click",(function(){const r=document.getElementById("slide"+n);e.style.opacity="0",setTimeout((function(){t(e,r)}),3e3)}));const i=document.createElement("div");i.setAttribute("class","previousWrapper"),i.appendChild(r),e.appendChild(i)}if(n<r.length-1){const r=document.createElement("span");r.textContent="Next",r.setAttribute("class","next"),r.addEventListener("click",(function(){const r=n+2,i=document.getElementById("slide"+r);e.style.opacity="0",setTimeout((function(){t(e,i)}),2e3)}));const i=document.createElement("div");i.setAttribute("class","nextWrapper"),i.appendChild(r),e.appendChild(i)}}function t(e,t){e.style.display="none",t.style.cssText="opacity:1; display:block;"}var r=n(379),i=n.n(r),o=n(426);i()(o.Z,{insert:"head",singleton:!1}),o.Z.locals,function(t,n){for(let r=0;r<n.length;r++){const i=document.createElement("div");i.setAttribute("class","slide"),i.setAttribute("id","slide"+(r+1));const o=document.createElement("img");o.src=n[r].img,o.style.cssText="width:100%;",i.appendChild(o),t.appendChild(i),e(i,r,n),0!=[r]&&(i.style.display="none")}}(document.getElementById("sliderWrapper"),[{img:"img/image1.jpg"},{img:"img/image2.jpg"},{img:"img/image3.jpg"},{img:"img/image4.jpg"}])})()})();