(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[994],{61200:function(e,t,n){"use strict";var r=n(90275),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,i,u,c,l,d,s,f=!1;t||(t={}),i=t.debug||!1;try{if(c=r(),l=document.createRange(),d=document.getSelection(),(s=document.createElement("span")).textContent=e,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",function(n){if(n.stopPropagation(),t.format){if(n.preventDefault(),void 0===n.clipboardData){i&&console.warn("unable to use e.clipboardData"),i&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=o[t.format]||o.default;window.clipboardData.setData(r,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)}t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(s),l.selectNodeContents(s),d.addRange(l),!document.execCommand("copy"))throw Error("copy command was unsuccessful");f=!0}catch(r){i&&console.error("unable to copy using execCommand: ",r),i&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),f=!0}catch(r){i&&console.error("unable to copy using clipboardData: ",r),i&&console.error("falling back to prompt"),n="message"in t?t.message:"Copy to clipboard: #{key}, Enter",a=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",u=n.replace(/#{\s*key\s*}/g,a),window.prompt(u,e)}}finally{d&&("function"==typeof d.removeRange?d.removeRange(l):d.removeAllRanges()),s&&document.body.removeChild(s),c()}return f}},23455:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var r=n(65122),o=n(73037),a=n(3546),i=a.useLayoutEffect,u=function(e){var t=a.useRef(e);return i(function(){t.current=e}),t},c=function(e,t){if("function"==typeof e){e(t);return}e.current=t},l=function(e,t){var n=(0,a.useRef)();return(0,a.useCallback)(function(r){e.current=r,n.current&&c(n.current,null),n.current=t,t&&c(t,r)},[t])},d={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},s=function(e){Object.keys(d).forEach(function(t){e.style.setProperty(t,d[t],"important")})},f=null,p=function(e,t){var n=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?n+t.borderSize:n-t.paddingSize},g=function(){},v=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],h=!!document.documentElement.currentStyle,b=function(e){var t=window.getComputedStyle(e);if(null===t)return null;var n=v.reduce(function(e,n){return e[n]=t[n],e},{}),r=n.boxSizing;if(""===r)return null;h&&"border-box"===r&&(n.width=parseFloat(n.width)+parseFloat(n.borderRightWidth)+parseFloat(n.borderLeftWidth)+parseFloat(n.paddingRight)+parseFloat(n.paddingLeft)+"px");var o=parseFloat(n.paddingBottom)+parseFloat(n.paddingTop),a=parseFloat(n.borderBottomWidth)+parseFloat(n.borderTopWidth);return{sizingStyle:n,paddingSize:o,borderSize:a}};function m(e,t,n){var r=u(n);a.useLayoutEffect(function(){var n=function(e){return r.current(e)};if(e)return e.addEventListener(t,n),function(){return e.removeEventListener(t,n)}},[])}var y=function(e){m(window,"resize",e)},x=function(e){m(document.fonts,"loadingdone",e)},w=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],Z=a.forwardRef(function(e,t){var n=e.cacheMeasurements,i=e.maxRows,u=e.minRows,c=e.onChange,d=void 0===c?g:c,v=e.onHeightChange,h=void 0===v?g:v,m=(0,o.Z)(e,w),Z=void 0!==m.value,C=a.useRef(null),S=l(C,t),R=a.useRef(0),E=a.useRef(),z=function(){var e,t,r,o,a,c,l,d,g,v,m,y=C.current,x=n&&E.current?E.current:b(y);if(x){E.current=x;var w=(e=y.value||y.placeholder||"x",void 0===(t=u)&&(t=1),void 0===(r=i)&&(r=1/0),f||((f=document.createElement("textarea")).setAttribute("tabindex","-1"),f.setAttribute("aria-hidden","true"),s(f)),null===f.parentNode&&document.body.appendChild(f),o=x.paddingSize,a=x.borderSize,l=(c=x.sizingStyle).boxSizing,Object.keys(c).forEach(function(e){f.style[e]=c[e]}),s(f),f.value=e,d=p(f,x),f.value=e,d=p(f,x),f.value="x",v=(g=f.scrollHeight-o)*t,"border-box"===l&&(v=v+o+a),d=Math.max(v,d),m=g*r,"border-box"===l&&(m=m+o+a),[d=Math.min(m,d),g]),Z=w[0],S=w[1];R.current!==Z&&(R.current=Z,y.style.setProperty("height",Z+"px","important"),h(Z,{rowHeight:S}))}};return a.useLayoutEffect(z),y(z),x(z),a.createElement("textarea",(0,r.Z)({},m,{onChange:function(e){Z||z(),d(e)},ref:S}))})},90275:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},73037:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})},74225:function(e,t,n){"use strict";n.d(t,{f:function(){return d}});var r=n(65122),o=n(3546),a=n(72205);let i="horizontal",u=["horizontal","vertical"],c=(0,o.forwardRef)((e,t)=>{let{decorative:n,orientation:u=i,...c}=e,d=l(u)?u:i;return(0,o.createElement)(a.WV.div,(0,r.Z)({"data-orientation":d},n?{role:"none"}:{"aria-orientation":"vertical"===d?d:void 0,role:"separator"},c,{ref:t}))});function l(e){return u.includes(e)}c.propTypes={orientation(e,t,n){let r=e[t],o=String(r);return r&&!l(r)?Error(`Invalid prop \`orientation\` of value \`${o}\` supplied to \`${n}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${i}\`.`):null}};let d=c},26581:function(e,t,n){"use strict";var r=n(74913),o=n(77725),a=Object.prototype.hasOwnProperty;t.Z=function(e,t,n){var i=e[t];a.call(e,t)&&(0,o.Z)(i,n)&&(void 0!==n||t in e)||(0,r.Z)(e,t,n)}},74913:function(e,t,n){"use strict";var r=n(27015);t.Z=function(e,t,n){"__proto__"==t&&r.Z?(0,r.Z)(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}},27015:function(e,t,n){"use strict";var r=n(47404),o=function(){try{var e=(0,r.Z)(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();t.Z=o},9841:function(e,t,n){"use strict";var r=n(95973),o=n(9111),a=n(82149);t.Z=function(e){return(0,r.Z)(e,a.Z,o.Z)}},8621:function(e,t,n){"use strict";var r=(0,n(34659).Z)(Object.getPrototypeOf,Object);t.Z=r},9111:function(e,t,n){"use strict";var r=n(68085),o=n(8621),a=n(45270),i=n(25407),u=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)(0,r.Z)(t,(0,a.Z)(e)),e=(0,o.Z)(e);return t}:i.Z;t.Z=u},82149:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(30762),o=n(84639),a=n(36586),i=function(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t},u=Object.prototype.hasOwnProperty,c=function(e){if(!(0,o.Z)(e))return i(e);var t=(0,a.Z)(e),n=[];for(var r in e)"constructor"==r&&(t||!u.call(e,r))||n.push(r);return n},l=n(20568),d=function(e){return(0,l.Z)(e)?(0,r.Z)(e,!0):c(e)}}}]);