(()=>{"use strict";var e={943:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(645),i=n.n(r)()((function(e){return e[1]}));i.push([e.id,".keen-slider{display:flex;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.keen-slider,.keen-slider__slide{overflow:hidden;position:relative}.keen-slider__slide{width:100%;min-height:100%}.keen-slider[data-keen-slider-v]{flex-wrap:wrap}.keen-slider[data-keen-slider-v] .keen-slider__slide{width:100%}.keen-slider[data-keen-slider-moves] *{pointer-events:none}",""]);const o=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:(e,t,n)=>{var r,i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function a(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],i=0;i<e.length;i++){var s=e[i],c=t.base?s[0]+t.base:s[0],d=n[c]||0,l="".concat(c," ").concat(d);n[c]=d+1;var u=a(l),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(o[u].references++,o[u].updater(p)):o.push({identifier:l,updater:h(p,t),references:1}),r.push(l)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,l=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function u(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,m=0;function h(e,t){var n,r,i;if(t.singleton){var o=m++;n=f||(f=c(t)),r=u.bind(null,n,o,!1),i=u.bind(null,n,o,!0)}else n=c(t),r=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=a(n[r]);o[i].references--}for(var c=s(e,t),d=0;d<n.length;d++){var l=a(n[d]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}n=c}}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(943);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e){return Array.prototype.slice.call(e)}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"function"==typeof e?d(e()):"string"==typeof e?d(t.querySelectorAll(e)):e instanceof HTMLElement!=0?[e]:e instanceof NodeList!=0?e:[]}function u(e,t,n){return Math.min(Math.max(e,t),n)}t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals,Math.sign||(Math.sign=function(e){return(e>0)-(e<0)||+e});const p=function(e){var t,n,r,i,o,c,d,p,f,m,h,v,g,b,y,w,E,C,L,k,M,T,x,O,S,j,A,I,D,P,F,B,N=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},_="data-keen-slider-moves",R="data-keen-slider-v",H=[],U=null,Y=!1,q=!1,W=0,z=[];function V(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};e.addEventListener(t,n,r),H.push([e,t,n,r])}function X(e){if(C&&L===$(e)&&se()){var n=Q(e).x;if(!te(e)&&O)return Z(e);O&&(Ye(),k=n,t.setAttribute(_,!0),O=!1),e.cancelable&&e.preventDefault(),Pe(x(k-n,Ke)*(de()?-1:1),e.timeStamp),k=n}}function K(e){C||!se()||ee(e.target)||(C=!0,O=!0,L=$(e),te(e),fe(),E=m,k=Q(e).x,Pe(0,e.timeStamp),oe("dragStart"))}function Z(e){C&&L===$(e,!0)&&se()&&(t.removeAttribute(_),C=!1,ve(),oe("dragEnd"))}function J(e){return e.changedTouches}function $(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t?J(e):G(e);return n?n[0]?n[0].identifier:"error":"default"}function G(e){return e.targetTouches}function Q(e){var t=G(e);return{x:ue()?t?t[0].screenY:e.pageY:t?t[0].screenX:e.pageX,timestamp:e.timeStamp}}function ee(e){return e.hasAttribute(w.preventEvent)}function te(e){var t=G(e);if(!t)return!0;var n=t[0],r=ue()?n.clientY:n.clientX,i=ue()?n.clientX:n.clientY,o=void 0!==M&&void 0!==T&&Math.abs(T-i)<=Math.abs(M-r);return M=r,T=i,o}function ne(e){se()&&C&&e.preventDefault()}function re(){V(window,"orientationchange",Se),V(window,"resize",(function(){return Oe()})),V(t,"dragstart",(function(e){se()&&e.preventDefault()})),V(t,"mousedown",K),V(w.cancelOnLeave?t:window,"mousemove",X),w.cancelOnLeave&&V(t,"mouseleave",Z),V(window,"mouseup",Z),V(t,"touchstart",K,{passive:!0}),V(t,"touchmove",X,{passive:!1}),V(t,"touchend",Z,{passive:!0}),V(t,"touchcancel",Z,{passive:!0}),V(window,"wheel",ne,{passive:!1})}function ie(){H.forEach((function(e){e[0].removeEventListener(e[1],e[2],e[3])})),H=[]}function oe(e){w[e]&&w[e](Ke)}function ae(){return w.centered}function se(){return void 0!==n?n:w.controls}function ce(){return w.loop&&r>1}function de(){return w.rtl}function le(){return!w.loop&&w.rubberband}function ue(){return!!w.vertical}function pe(){S=window.requestAnimationFrame(me)}function fe(){S&&(window.cancelAnimationFrame(S),S=null),j=null}function me(e){j||(j=e);var t=e-j,n=he(t);if(t>=I)return Pe(A-P,!1),B?B():void oe("afterChange");var r=Fe(n);if(0===r||ce()||le()||F){if(0!==r&&le()&&!F)return Ee();P+=n,Pe(n,!1),pe()}else Pe(n-r,!1)}function he(e){return A*D(e/I)-P}function ve(){switch(oe("beforeChange"),w.mode){case"free":ye();break;case"free-snap":we();break;case"snap":default:ge()}}function ge(){be((1===d&&0!==h?E:m)+Math.sign(h))}function be(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:w.duration,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=function(e){return 1+--e*e*e*e*e};Ce(Re(e=_e(e,r,i)),n,o,t)}function ye(){if(0===g)return!(!Fe(0)||ce())&&be(m);var e=w.friction/Math.pow(Math.abs(g),-.5);Ce(Math.pow(g,2)/e*Math.sign(g),6*Math.abs(g/e),(function(e){return 1-Math.pow(1-e,5)}))}function we(){if(0===g)return be(m);var e=w.friction/Math.pow(Math.abs(g),-.5),t=Math.pow(g,2)/e*Math.sign(g),n=6*Math.abs(g/e),r=(W+t)/(c/d);Ce((-1===h?Math.floor(r):Math.ceil(r))*(c/d)-W,n,(function(e){return 1-Math.pow(1-e,5)}))}function Ee(){if(fe(),0===g)return be(m,!0);var e=.04/Math.pow(Math.abs(g),-.5),t=Math.pow(g,2)/e*Math.sign(g),n=function(e){return--e*e*e+1},r=g;Ce(t,3*Math.abs(r/e),n,!0,(function(){Ce(Re(_e(m)),500,n,!0)}))}function Ce(e,t,n,r,i){fe(),A=e,P=0,I=t,D=n,F=r,B=i,j=null,pe()}function Le(n){var r=l(e);r.length&&(t=r[0],Oe(n),re(),oe("mounted"))}function ke(){var e,t=N.breakpoints||[];for(var n in t)window.matchMedia(n).matches&&(e=n);if(e===U)return!0;var r=(U=e)?t[U]:N;r.breakpoints&&U&&delete r.breakpoints,w=a(a(a({},Xe),N),r),Y=!0,f=null,xe()}function Me(e){return"function"==typeof e?e():u(e,1,Math.max(ce()?r-1:r,1))}function Te(){ke(),q=!0,oe("created")}function xe(e,t){e&&(N=e),t&&(U=null),je(),Le(t)}function Oe(e){var n=window.innerWidth;if(ke()&&(n!==f||e)){f=n;var a=w.slides;"number"==typeof a?(o=null,r=a):(o=l(a,t),r=o?o.length:0);var s=w.dragSpeed;x="function"==typeof s?s:function(e){return e*s},c=ue()?t.offsetHeight:t.offsetWidth,d=Me(w.slidesPerView),p=u(w.spacing,0,c/(d-1)-1),c+=p,i=ae()?(c/2-c/d/2)/c:0,Ie();var h=!q||Y&&w.resetSlide?w.initial:m;Ve(ce()?h:Be(h)),ue()&&t.setAttribute(R,!0),Y=!1}}function Se(e){Oe(),setTimeout(Oe,500),setTimeout(Oe,2e3)}function je(){ie(),De(),t&&t.hasAttribute(R)&&t.removeAttribute(R),oe("destroyed")}function Ae(){o&&o.forEach((function(e,t){var n=b[t].distance*c-t*(c/d-p/d-p/d*(d-1)),r=ue()?0:n,i=ue()?n:0,o="translate3d(".concat(r,"px, ").concat(i,"px, 0)");e.style.transform=o,e.style["-webkit-transform"]=o}))}function Ie(){o&&o.forEach((function(e){var t="calc(".concat(100/d,"% - ").concat(p/d*(d-1),"px)");ue()?(e.style["min-height"]=t,e.style["max-height"]=t):(e.style["min-width"]=t,e.style["max-width"]=t)}))}function De(){if(o){var e=["transform","-webkit-transform"];e=[].concat(s(e),ue?["min-height","max-height"]:["min-width","max-width"]),o.forEach((function(t){e.forEach((function(e){t.style.removeProperty(e)}))}))}}function Pe(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Date.now();Ue(e,n),t&&(e=We(e)),W+=e,qe()}function Fe(e){var t=c*(r-1*(ae()?1:d))/d,n=W+e;return n>t?n-t:n<0?n:0}function Be(e){return u(e,0,r-1-(ae()?0:d-1))}function Ne(){var e=Math.abs(y),t=W<0?1-e:e;return{direction:h,progressTrack:t,progressSlides:t*r/(r-1),positions:b,position:W,speed:g,relativeSlide:(m%r+r)%r,absoluteSlide:m,size:r,slidesPerView:d,widthOrHeight:c}}function _e(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return ce()?t?He(e,n):e:Be(e)}function Re(e){return-(-c/d*e+W)}function He(e,t){var n=(m%r+r)%r,i=n<(e=(e%r+r)%r)?-n-r+e:-(n-e),o=n>e?r-n+e:e-n,a=t?Math.abs(i)<=o?i:o:e<n?i:o;return m+a}function Ue(e,t){clearTimeout(v);var n=Math.sign(e);if(n!==h&&Ye(),h=n,z.push({distance:e,time:t}),v=setTimeout((function(){z=[],g=0}),50),(z=z.slice(-6)).length<=1||0===h)return g=0;var r=z.slice(0,-1).reduce((function(e,t){return e+t.distance}),0),i=z[z.length-1].time,o=z[0].time;g=u(r/(i-o),-10,10)}function Ye(){z=[]}function qe(){y=ce()?W%(c*r/d)/(c*r/d):W/(c*r/d),ze();for(var e=[],t=0;t<r;t++){var n=(1/r*t-(y<0&&ce()?y+1:y))*r/d+i;ce()&&(n+=n>(r-1)/d?-r/d:n<-r/d+1?r/d:0);var o=1/d,a=n+o,s=a<o?a/o:a>1?1-(a-1)*d/1:1;e.push({portion:s<0||s>1?0:s,distance:de()?-1*n+1-o:n})}b=e,Ae(),oe("move")}function We(e){if(ce())return e;var t,n=Fe(e);return le()?0===n?e:e*(t=n/c,(1-Math.abs(t))*(1-Math.abs(t))):e-n}function ze(){var e=Math.round(W/(c/d));e!==m&&(!ce()&&(e<0||e>r-1)||(m=e,oe("slideChanged")))}function Ve(e){oe("beforeChange"),Pe(Re(e),!1),oe("afterChange")}var Xe={centered:!1,breakpoints:null,controls:!0,dragSpeed:1,friction:.0025,loop:!1,initial:0,duration:500,preventEvent:"data-keen-slider-pe",slides:".keen-slider__slide",vertical:!1,resetSlide:!1,slidesPerView:1,spacing:0,mode:"snap",rtl:!1,rubberband:!0,cancelOnLeave:!0},Ke={controls:function(e){n=e},destroy:je,refresh:function(e){xe(e,!0)},next:function(){be(m+1,!0)},prev:function(){be(m-1,!0)},moveToSlide:function(e,t){be(e,!0,t)},moveToSlideRelative:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2?arguments[2]:void 0;be(e,!0,n,!0,t)},resize:function(){Oe(!0)},details:function(){return Ne()},options:function(){var e=a({},w);return delete e.breakpoints,e}};return Te(),Ke};function f(){const e=document.createElement("div"),t=document.createDocumentFragment(),n=new p("#hero-slide",{loop:!0,duration:5e3,dragStart:()=>{i(!0)},dragEnd:()=>{i(!0)}});let r=0;function i(e){clearInterval(r),r=setInterval((()=>{e&&n&&n.next()}),8e3)}e.classList.add("keen-slider"),e.setAttribute("id","hero-slide");for(let e=1;e<=5;e+=1){const n=new Image;n.src=`/src/assets/images/slider-${e}.jpg`,n.classList.add("keen-slider__slide"),t.appendChild(n)}return e.appendChild(t),i(!0),[n,e]}const m=document.querySelector("#content");m.appendChild(function(){const e=document.createDocumentFragment(),t=document.createElement("nav"),n=document.createElement("h3"),r=document.createElement("div");return n.innerText="FoodiePad",n.classList.add("logo"),["Home","About","Contact"].forEach((t=>{const n=document.createElement("div");n.innerText=t,e.appendChild(n)})),r.appendChild(e),t.appendChild(n),t.appendChild(r),t}()),m.appendChild(f()[1]),f(),m.appendChild(function(){const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("h2"),r=document.createElement("p"),i=document.createElement("div"),o=document.createDocumentFragment(),a=["/src/assets/food/food-1.jpg","/src/assets/food/food-2.jpg","/src/assets/food/food-3.jpg"],s=[" Lorem Ipsum has been the industry's printer took a galley of type and scra unchanged.","It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently ","desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."];n.innerText="We Design Delicious",n.classList.add("styled"),n.classList.add("show-heading"),r.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",r.classList.add("showcase-p"),t.appendChild(n),t.appendChild(r);for(let e=0;e<3;e+=1){const t=document.createElement("div");t.classList.add("list-card");const n=new Image(200,200),r=document.createElement("div");n.src=a[e],n.classList.add("img"),r.innerText=s[e],r.classList.add("image-text"),t.appendChild(n),t.appendChild(r),o.appendChild(t)}return i.appendChild(o),i.classList.add("showcase-list"),e.classList.add("main-showcase"),e.appendChild(t),e.appendChild(i),e}()),m.appendChild(function(){const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("h2"),i=document.createElement("p"),o=document.createElement("button");e.classList.add("main-article"),e.classList.add("setion");const a=["Baked fresh simply delicious",'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" '];return o.innerText="Read More",o.classList.add("btn"),r.innerText=a[0],r.classList.add("article-headin"),r.classList.add("styled"),i.innerText=a[1],i.classList.add("article-content"),t.appendChild(r),t.appendChild(i),t.appendChild(o),n.innerText="Welcome to try",n.classList.add("right-article-text"),n.classList.add("styled"),e.appendChild(n),e.appendChild(t),e}()),m.appendChild(function(){const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("h2"),r=document.createElement("p"),i=document.createElement("div"),o=document.createDocumentFragment(),a=[{src:"/src/assets/food/food-4.jpg",h2:"MONKEY BREAD",p:" scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."},{src:"/src/assets/food/food-5.jpg",h2:"ONION BIALY",p:" scrambled it to make a type specimen book. It has surviv emaining essentially unchanged."},{src:"/src/assets/food/food-6.jpg",h2:"CREEK OLIVE",p:"with the release of Letraset sheets containing Lorem Ipsum passages, and more recently"},{src:"/src/assets/food/food-7.jpg",h2:"KAISER ROLL",p:"desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."},{src:"/src/assets/food/food-8.jpg",h2:"APRICOT NUT",p:'since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"'},{src:"/src/assets/food/food-9.jpg",h2:"CIABATTA",p:"when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}];for(let e=0;e<a.length;e+=1){const t=document.createElement("div"),n=new Image(200,200),r=document.createElement("h2"),i=document.createElement("p");n.src=a[e].src,r.innerText=a[e].h2,i.innerHTML=a[e].p,t.appendChild(n),t.appendChild(r),t.appendChild(i),t.classList.add("list-item"),o.appendChild(t)}return n.innerText="Tast of romance",n.classList.add("styled"),r.innerText="galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining",r.classList.add("foodlist-p"),e.appendChild(n),e.appendChild(r),e.classList.add("foodlist-heading"),i.classList.add("list-parent"),i.appendChild(o),t.appendChild(e),t.appendChild(i),t}()),m.appendChild(function(){const e=document.createElement("div"),t=document.createElement("div"),n=document.createElement("div"),r=document.createElement("div");e.classList.add("main-footer"),t.classList.add("left-footer"),n.classList.add("middle-footer"),r.classList.add("right-footer");const i=document.createElement("h2"),o=document.createElement("p"),a=document.createDocumentFragment();i.innerText="Bakers",i.classList.add("styled"),o.innerText='Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"',a.appendChild(i),a.appendChild(o);const s=document.createElement("h2"),c=document.createElement("p"),d=document.createElement("div"),l=document.createDocumentFragment();s.innerText="LATEST TWEETS",c.innerText='Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"',d.innerText="galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",l.appendChild(s),l.appendChild(c),l.appendChild(d);const u=document.createElement("h2"),p=document.createElement("input"),f=document.createElement("div"),m=document.createDocumentFragment();return u.innerText="JOING THE CLUB",p.innerText="Enter email",f.innerText="subscibe",m.appendChild(u),m.appendChild(p),m.appendChild(f),e.appendChild(a),e.appendChild(l),e.appendChild(a),e}()),m.appendChild(function(){const e=document.createElement("div");return e.innerText="made with love by ≈codesalley",e.classList.add("last-footer"),e}())})()})();