(function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)})({0:function(e,t,n){e.exports=n("56d7")},"24fb":function(e,t,n){"use strict";function r(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"===typeof btoa){var i=o(r),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([i]).join("\n")}return[n].join("\n")}function o(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(n," */")}e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=r(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"===typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},"499e":function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],c=i[1],u=i[2],s=i[3],l={id:e+":"+o,css:c,media:u,sourceMap:s};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}n.r(t),n.d(t,"default",(function(){return d}));var o="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=o&&(document.head||document.getElementsByTagName("head")[0]),c=null,u=0,s=!1,l=function(){},f=null,p="data-vue-ssr-id",h="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function d(e,t,n,o){s=n,f=o||{};var a=r(e,t);return b(a),function(t){for(var n=[],o=0;o<a.length;o++){var c=a[o],u=i[c.id];u.refs--,n.push(u)}t?(a=r(e,t),b(a)):a=[];for(o=0;o<n.length;o++){u=n[o];if(0===u.refs){for(var s=0;s<u.parts.length;s++)u.parts[s]();delete i[u.id]}}}}function b(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(v(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(v(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function y(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function v(e){var t,n,r=document.querySelector("style["+p+'~="'+e.id+'"]');if(r){if(s)return l;r.parentNode.removeChild(r)}if(h){var o=u++;r=c||(c=y()),t=m.bind(null,r,o,!1),n=m.bind(null,r,o,!0)}else r=y(),t=w.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function m(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function w(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),f.ssrId&&e.setAttribute(p,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{while(e.firstChild)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("8bbf"),o=Object(r["createVNode"])("svg",{style:{width:"48px",height:"48px"},viewBox:"0 0 24 24"},[Object(r["createVNode"])("path",{fill:"#00FF53",d:"M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"})],-1),i={ref:"mainView",class:"main-view"},a={ref:"selfView",muted:"",class:"self-view"},c={key:1,class:"share"},u={key:2,class:"share"};function s(e,t,n,s,l,f){return Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],null,[l.peerId&&!l.friendPeerId?(Object(r["openBlock"])(),Object(r["createBlock"])("button",{key:0,onClick:t[1]||(t[1]=function(){return f.sharePeerLink&&f.sharePeerLink.apply(f,arguments)}),class:"btn-icon call-btn"},[o])):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])("video",i,null,512),Object(r["createVNode"])("video",a,null,512),l.wechatSharing&&!l.friendPeerId?(Object(r["openBlock"])(),Object(r["createBlock"])("div",c,"点击右上角分享会话链接")):Object(r["createCommentVNode"])("",!0),l.linkCopied&&!l.friendPeerId?(Object(r["openBlock"])(),Object(r["createBlock"])("div",u,"会话链接已复制")):Object(r["createCommentVNode"])("",!0),l.errorMessage?(Object(r["openBlock"])(),Object(r["createBlock"])("div",{key:3,textContent:Object(r["toDisplayString"])(l.errorMessage),class:"share"},null,8,["textContent"])):Object(r["createCommentVNode"])("",!0)],64)}var l=n("b354"),f=n.n(l),p=n("c56e"),h=n.n(p),d=null,b=new f.a;void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=function(e){var t=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return t?new Promise((function(n,r){t.call(navigator,e,n,r)})):Promise.reject(new Error("getUserMedia is not implemented in this browser"))});var y={name:"App",data:function(){var e=location.search.match(/p=([\da-f-]*)/);return{errorMessage:"",friendPeerId:e?e[1]:null,linkCopied:!1,peerId:null,wechatSharing:!1}},methods:{sharePeerLink:function(){var e=new URL(window.location);e.searchParams.set("p",this.peerId),b.setShareData({link:e,title:"视频通话",desc:"您的好友正邀请您进行视频通话"});try{navigator.userAgent.indexOf("Windows NT")>-1?(this.linkCopied=!0,navigator.clipboard.writeText(e)):navigator.userAgent.indexOf("MicroMessenger")>-1?(this.wechatSharing=!0,window.history.pushState({},"",e)):b.call()}catch(t){navigator.clipboard.writeText(e)}}},mounted:function(){var e=this;this.$refs.mainView.onloadedmetadata=function(){return e.$refs.mainView.play()},this.$refs.selfView.onloadedmetadata=function(){return e.$refs.selfView.play()};var t=function(t){t.on("stream",(function(t){e.$refs.mainView.srcObject=t})),t.peerConnection.addEventListener("iceconnectionstatechange",(function(){"disconnected"===t.peerConnection.iceConnectionState&&(e.$refs.mainView.srcObject=null,e.friendPeerId=null)}))};d=new h.a,d.on("open",(function(t){return e.peerId=t})),d.on("call",(function(n){e.friendPeerId=n.peer,n.answer(e.$refs.selfView.srcObject),t(n)})),d.on("disconnected",(function(){return d.reconnect()})),d.on("error",(function(t){e.errorMessage=t.toString(),e.friendPeerId=null})),navigator.mediaDevices.getUserMedia({audio:!0,video:!0}).then((function(n){e.$refs.selfView.srcObject=n,e.friendPeerId&&d.on("open",(function(){t(d.call(e.friendPeerId,n))}))})).catch((function(t){return e.errorMessage=t.toString()}))}};n("c08d");y.render=s;var v=y;Object(r["createApp"])(v).mount("#app")},8462:function(e,t,n){var r=n("d7c8");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n("499e").default;o("2311f28a",r,!0,{sourceMap:!1,shadowMode:!1})},"8bbf":function(e,t){e.exports=Vue},b354:function(e,t,n){!function(t,n){e.exports=n()}("undefined"!=typeof self&&self,(function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function r(){}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,n=document.getElementsByTagName("script")[0],o=document.createElement("script");o.src=e,o.async=!0,n.parentNode.insertBefore(o,n),o.onload=t}function i(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),r=1;r<arguments.length;r++){var o=arguments[r];if(null!=o)for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])}return n}function a(e){if(ie)location.href=e;else{var t=document.createElement("iframe");t.style.display="none",t.src=e,document.body.appendChild(t),setTimeout((function(){t&&t.parentNode&&t.parentNode.removeChild(t)}),2e3)}}function c(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[];for(var r in e)t?n.push(r+"="+encodeURIComponent(e[r])):n.push(r+"="+e[r]);return n.join("&")}function u(e){var t=document.createElement("a");return t.href=e,t.hostname}function s(e){be?be.content=e:document.head.insertAdjacentHTML("beforeend",'<meta name="description" content="'+e+'">')}function l(e){ye?ye.href=e:document.head.insertAdjacentHTML("beforeend",'<link rel="shortcut icon" href="'+e+'">')}function f(e){document.title=e}function p(e){return c({share_id:924053302,url:de.encode(e.link),title:de.encode(e.title),description:de.encode(e.desc),previewimageUrl:de.encode(e.icon),image_url:de.encode(e.icon)})}function h(){a((ie?"mqqapi://share/to_fri?src_type=web&version=1&file_type=news":"mqqapi://share/to_fri?src_type=isqqBrowser&version=1&file_type=news")+"&"+p(ve))}function d(){a((ie?"mqqapi://share/to_fri?file_type=news&src_type=web&version=1&generalpastboard=1&shareType=1&cflag=1&objectlocation=pasteboard&callback_type=scheme&callback_name=QQ41AF4B2A":"mqqapi://share/to_qzone?src_type=isqqBrowser&version=1&file_type=news&req_type=1")+"&"+p(ve))}function b(){var e={url:ve.link,title:ve.title,pic:ve.icon,desc:ve.desc};location.href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?"+c(e,!0)}function y(){var e={url:ve.link,title:ve.title,pic:ve.icon};location.href="http://service.weibo.com/share/share.php?"+c(e,!0)}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function k(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function T(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function q(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function D(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function Q(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function B(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function U(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function L(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function V(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function W(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function z(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function F(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Z(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function $(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function J(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function G(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function H(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function X(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function K(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var ee,te=navigator.userAgent,ne=/(iPad).*OS\s([\d_]+)/.test(te),re=/(iPod)(.*OS\s([\d_]+))?/.test(te),oe=!ne&&/(iPhone\sOS)\s([\d_]+)/.test(te),ie=ne||re||oe,ae=/(Android);?[\s\/]+([\d.]+)?/.test(te),ce=/micromessenger/i.test(te),ue=/QQ\/([\d\.]+)/.test(te),se=/Qzone\//.test(te),le=/MQQBrowser/i.test(te)&&!ce&&!ue,fe=/UCBrowser/i.test(te),pe=/mobile.*baidubrowser/i.test(te),he=/SogouMobileBrowser/i.test(te),de=(/baiduboxapp/i.test(te),{_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t,n,r,o,i,a,c,u="",s=0;for(e=de._utf8_encode(e);s<e.length;)t=e.charCodeAt(s++),n=e.charCodeAt(s++),r=e.charCodeAt(s++),o=t>>2,i=(3&t)<<4|n>>4,a=(15&n)<<2|r>>6,c=63&r,isNaN(n)?a=c=64:isNaN(r)&&(c=64),u=u+this._keyStr.charAt(o)+this._keyStr.charAt(i)+this._keyStr.charAt(a)+this._keyStr.charAt(c);return u},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");for(var t="",n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t+=String.fromCharCode(r):r>127&&r<2048?(t+=String.fromCharCode(r>>6|192),t+=String.fromCharCode(63&r|128)):(t+=String.fromCharCode(r>>12|224),t+=String.fromCharCode(r>>6&63|128),t+=String.fromCharCode(63&r|128))}return t}}),be=document.querySelector("meta[name=description]"),ye=document.querySelector("link[rel*=icon]"),ve={link:location.href,title:function(){return document.title}(),desc:function(){return Object(be).content||""}(),icon:function(){return Object(ye).href||location.protocol+"//"+location.hostname+"/favicon.ico"}(),from:"",success:r,fail:r,trigger:r},ge=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),me=function(){function e(t){v(this,e),this._shareData=ve,this._config={syncDescToTag:!1,syncIconToTag:!1,syncTitleToTag:!1},this.setConfig(t)}return ge(e,[{key:"getShareData",value:function(){return i({},this._shareData)}},{key:"setShareData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this._shareData,e),this._config.syncDescToTag&&s(this._shareData.desc),this._config.syncIconToTag&&l(this._shareData.icon),this._config.syncTitleToTag&&f(this._shareData.title)}},{key:"setConfig",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this._config,e)}},{key:"getConfig",value:function(){return i({},this._config)}}]),e}(),we=me,_e=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Oe=function(e){function t(e){m(this,t);var n=w(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o("https://jsapi.qq.com/get?api=app.share"),n}return _(t,e),_e(t,[{key:"call",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=arguments[1];this.setShareData(t);var n=this.getShareData(),r=this.constructor.commamdMap[String(e).toLowerCase()];browser.app.share({title:n.title,description:n.desc,url:n.link,img_url:n.icon,from:n.from,to_app:r})}}]),t}(we);Oe.commamdMap=(ee={},g(ee,"wechattimeline",8),g(ee,"wechatfriend",1),g(ee,"qqfriend",4),g(ee,"qzone",3),g(ee,"weibo",11),g(ee,"copyurl",10),g(ee,"more",5),g(ee,"generateqrcode",7),g(ee,"default",void 0),ee);var je,Se=Oe,ke=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Pe=function(e){function t(e){return j(this,t),S(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return k(t,e),ke(t,[{key:"call",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=arguments[1];this.setShareData(t);var n=this.getShareData(),r=this.constructor.commamdMap[String(e).toLowerCase()];ucbrowser.web_shareEX?ucbrowser.web_shareEX(JSON.stringify({title:n.title,content:n.desc,sourceUrl:n.link,imageUrl:n.icon,source:n.from,target:r})):ucbrowser.web_share(title,desc,link,r,"",from,"")}}]),t}(we);Pe.commamdMap=(je={},O(je,"wechattimeline","kWeixinFriend"),O(je,"wechatfriend","kWeixin"),O(je,"qqfriend","kQQ"),O(je,"qzone","kQZone"),O(je,"weibo","kSinaWeibo"),O(je,"default",void 0),je);var Ce,xe=Pe,Te=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),qe=function(e){function t(e){return C(this,t),x(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return T(t,e),Te(t,[{key:"call",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=arguments[1];this.setShareData(t);var n=this.getShareData(),r=this.constructor.commamdMap[String(e).toLowerCase()];ucweb.startRequest("shell.page_share",[n.title,n.desc,n.link,r,"",n.from,n.icon])}}]),t}(we);qe.commamdMap=(Ce={},P(Ce,"wechattimeline","WechatTimeline"),P(Ce,"wechatfriend","WechatFriends"),P(Ce,"qqfriend","QQ"),P(Ce,"qzone","Qzone"),P(Ce,"weibo","SinaWeibo"),P(Ce,"default",""),Ce);var Me=qe,De=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ee=function(e){function t(e){return q(this,t),M(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return D(t,e),De(t,[{key:"call",value:function(e,t){this.setShareData(t);var n=this.getShareData();_flyflowNative.exec("bd_utils","shareWebPage",JSON.stringify({title:n.title,content:n.desc,landurl:n.link,imageurl:n.icon,shareSource:n.from}),"")}}]),t}(we),Ae=Ee,Qe=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Be=function(e){function t(e){return E(this,t),A(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return Q(t,e),Qe(t,[{key:"call",value:function(e,t){this.setShareData(t);var n=this.getShareData();location.href="baidubrowserapp://bd_utils?action=shareWebPage&params="+encodeURIComponent(JSON.stringify({title:n.title,content:n.desc,imageurl:n.icon,landurl:n.link,mediaType:0,share_type:"webpage"}))}}]),t}(we),Ne=Be,Ue=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ie=function(e){function t(e){return B(this,t),N(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return U(t,e),Ue(t,[{key:"call",value:function(e,t){this.setShareData(t);var n=this.getShareData();SogouMse.Utility.shareWithInfo({shareTitle:n.title,shareContent:n.desc,shareImageUrl:n.icon,shareUrl:n.link})}}]),t}(we),Re=Ie,Le=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ve=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},We=function(e){function t(e){I(this,t);var n=R(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.setConfig(e),n}return L(t,e),Le(t,[{key:"call",value:function(e,t){this.setShareData(t)}},{key:"setConfig",value:function(e){Ve(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setConfig",this).call(this,e),this.init(this.getConfig().wechatConfig)}},{key:"init",value:function(e){var t=this;e&&o("https://res.wx.qq.com/open/js/jweixin-1.4.0.js",(function(){wx.config(i({debug:!1,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone","updateAppMessageShareData","updateTimelineShareData"]},e));var n=t._shareData,r={};Object.defineProperty(r,"trigger",{get:function(){return function(){i(r,{title:n.title,desc:n.desc,link:n.link,imgUrl:n.icon,success:n.success,fail:n.fail,cancel:n.fail}),n.trigger.apply(n,arguments)}},set:function(e){n.trigger=e},enumerable:!0}),wx.ready((function(){wx.onMenuShareAppMessage(r),wx.onMenuShareQQ(r),wx.onMenuShareQZone(r),wx.onMenuShareWeibo(r),wx.onMenuShareTimeline(r),wx.updateAppMessageShareData(r),wx.updateTimelineShareData(r)}))}))}}]),t}(we),ze=We,Fe=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ze=function(e){function t(e){return V(this,t),W(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return z(t,e),Fe(t,[{key:"call",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=arguments[1];if(this.setShareData(t),navigator.share){var n=this.getShareData(),r={url:n.link,title:n.title,text:n.desc};navigator.share(r).then(n.success).catch(n.fail)}else{if("weibo"!==(e=String(e).toLowerCase()))throw"qqfriend"===e?h():"qzone"===e&&d(),new Error("the browser may not support command "+e+"!");y()}}}]),t}(we),$e=Ze,Je=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ge=function(e){function t(e){F(this,t);var n=Z(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.init(),n}return $(t,e),Je(t,[{key:"call",value:function(){var e=arguments[1];this.setShareData(e),mqq.ui.showShareMenu()}},{key:"init",value:function(){var e=this;o("https://open.mobile.qq.com/sdk/qqapi.js",(function(){var t=e._shareData;mqq.ui.setOnShareHandler((function(e){mqq.ui.shareMessage({back:!0,share_type:e,title:t.title,desc:t.desc,share_url:t.link,image_url:t.icon,sourceName:t.from},(function(e){0===e.retCode?t.success(e):t.fail(e)}))}))}))}}]),t}(we),He=Ge,Xe=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ye=function e(t,n,r){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,n);if(void 0===o){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(r):void 0},Ke=function(e){function t(e){J(this,t);var n=G(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.init(),n}return H(t,e),Xe(t,[{key:"setShareData",value:function(e){Ye(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setShareData",this).call(this,e);var n=this.getShareData();u(n.link)!==location.hostname&&(n.link=location.href,console.warn("安卓的QQ自带浏览器分享url必须跟页面url同一个域名，已自动为你设置为当前页面的url"));try{mqq.data.setShareInfo({share_url:n.link,title:n.title,desc:n.desc,image_url:n.icon},(function(e){!0!==e&&console.warn(e)}))}catch(e){}}},{key:"call",value:function(){var e=arguments[1];this.setShareData(e),mqq.ui.showShareMenu()}},{key:"init",value:function(){var e=this;o("https://open.mobile.qq.com/sdk/qqapi.js",(function(){e.setShareData()}))}}]),t}(we),et=Ke,tt=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),nt=function(e){function t(e){X(this,t);var n=Y(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.init(),n}return K(t,e),tt(t,[{key:"call",value:function(){var e=this,t=arguments[1];this.setShareData(t);for(var n=this.getShareData(),r=[],o=[],i=[],a=[],c=0;c<5;c++)r.push(n.icon),a.push(n.link),o.push(n.title),i.push(n.desc);QZAppExternal.setShare((function(t){0!=t.code&&(e.hasSomethingWrong=!0)}),{type:"share",image:r,title:o,summary:i,shareURL:a})}},{key:"setShareData",value:function(e){try{this.call("default",e)}catch(e){}}},{key:"init",value:function(){var e=this;o("https://qzonestyle.gtimg.cn/qzone/phone/m/v4/widget/mobile/jsbridge.js",(function(){e.call("default")}))}}]),t}(we),rt=nt;n.d(t,"Share",(function(){return we})),n.d(t,"QQMobileBrowser",(function(){return Se})),n.d(t,"UCIosBrowser",(function(){return xe})),n.d(t,"UCAndroidBrowser",(function(){return Me})),n.d(t,"BaiduAndroidBrowser",(function(){return Ae})),n.d(t,"BaiduIosBrowser",(function(){return Ne})),n.d(t,"SogouIosBrowser",(function(){return Re})),n.d(t,"Wechat",(function(){return ze})),n.d(t,"Others",(function(){return $e})),n.d(t,"QQIos",(function(){return He})),n.d(t,"QQAndroid",(function(){return et})),n.d(t,"QZone",(function(){return rt})),n.d(t,"shareToQQ",(function(){return h})),n.d(t,"shareToQZone",(function(){return d})),n.d(t,"shareToWeibo4Web",(function(){return y})),n.d(t,"shareToQZone4Web",(function(){return b}));var ot=void 0;ot=ce?ze:ue&&ie?He:ue&&ae?et:se?rt:le?Se:fe&&ie?xe:fe&&ae?Me:pe&&ae?Ae:pe&&ie?Ne:he&&ie?Re:$e,window.NativeShare=ot,t.default=ot}])}))},c08d:function(e,t,n){"use strict";n("8462")},c56e:function(e,t){e.exports=Peer},d7c8:function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,"body{margin:0;background:#000}.btn-icon{background:transparent;outline:none;border-radius:50%;border:none;transition:background .5s}.btn-icon:hover{background:#222}.btn-icon:active{background:#333}.call-btn{position:fixed;bottom:50%;left:50%;margin-left:-24px}.main-view{width:100vw;height:100vh;z-index:-1}.main-view,.self-view{position:fixed;top:0;left:0}.self-view{max-width:50vw;max-height:30vh;transform:rotateY(180deg)}.share{position:fixed;top:0;right:0;z-index:2;padding:8px;background:hsla(0,0%,78.4%,.5);border-radius:4px}",""]),e.exports=t}});
//# sourceMappingURL=app.45372e22.js.map