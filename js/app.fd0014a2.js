(function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)})({0:function(e,t,n){e.exports=n("56d7")},"24fb":function(e,t,n){"use strict";function r(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"===typeof btoa){var i=o(r),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([i]).join("\n")}return[n].join("\n")}function o(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(n," */")}e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=r(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"===typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},"37b6":function(e,t,n){"use strict";n("3ba5")},"3ba5":function(e,t,n){var r=n("b4ed");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=n("499e").default;o("2dc8431e",r,!0,{sourceMap:!1,shadowMode:!1})},"499e":function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],c=i[1],s=i[2],u=i[3],f={id:e+":"+o,css:c,media:s,sourceMap:u};r[a]?r[a].parts.push(f):n.push(r[a]={id:a,parts:[f]})}return n}n.r(t),n.d(t,"default",(function(){return h}));var o="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=o&&(document.head||document.getElementsByTagName("head")[0]),c=null,s=0,u=!1,f=function(){},d=null,l="data-vue-ssr-id",p="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,t,n,o){u=n,d=o||{};var a=r(e,t);return v(a),function(t){for(var n=[],o=0;o<a.length;o++){var c=a[o],s=i[c.id];s.refs--,n.push(s)}t?(a=r(e,t),v(a)):a=[];for(o=0;o<n.length;o++){s=n[o];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete i[s.id]}}}}function v(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(m(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(m(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function b(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function m(e){var t,n,r=document.querySelector("style["+l+'~="'+e.id+'"]');if(r){if(u)return f;r.parentNode.removeChild(r)}if(p){var o=s++;r=c||(c=b()),t=y.bind(null,r,o,!1),n=y.bind(null,r,o,!0)}else r=b(),t=w.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function y(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function w(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),d.ssrId&&e.setAttribute(l,t.id),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{while(e.firstChild)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("8bbf"),o=Object(r["createVNode"])("svg",{style:{width:"48px",height:"48px"},viewBox:"0 0 24 24"},[Object(r["createVNode"])("path",{fill:"#00FF53",d:"M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"})],-1),i={ref:"mainView",class:"main-view"},a={ref:"selfView",muted:"",class:"self-view"};function c(e,t,n,c,s,u){return Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],null,[s.peerId&&!s.friendPeerId?(Object(r["openBlock"])(),Object(r["createBlock"])("button",{key:0,onClick:t[1]||(t[1]=function(){return u.copyPeerLink&&u.copyPeerLink.apply(u,arguments)}),class:"btn-icon call-btn"},[o])):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])("video",i,null,512),Object(r["createVNode"])("video",a,null,512)],64)}var s=n("c56e"),u=n.n(s),f={name:"App",data:function(){var e=location.search.match(/p=([\da-f-]*)/);return{peer:null,peerId:null,friendPeerId:e?e[1]:null}},computed:{peerLink:function(){return this.peerId?location.origin+location.pathname+"?p="+this.peerId:""}},methods:{copyPeerLink:function(){navigator.clipboard.writeText(this.peerLink)}},mounted:function(){var e=this;this.$refs.mainView.onloadedmetadata=function(){return e.$refs.mainView.play()},this.$refs.selfView.onloadedmetadata=function(){return e.$refs.selfView.play()};var t=function(t){t.on("stream",(function(t){e.$refs.mainView.srcObject=t}))};this.peer=new u.a,this.peer.on("open",(function(t){return e.peerId=t})),this.peer.on("call",(function(n){e.friendPeerId=n.peer,n.answer(e.$refs.selfView.srcObject),t(n)})),this.peer.on("disconnected",(function(){return e.peer.reconnect()})),this.peer.on("error",(function(e){return console.log(e)})),navigator.mediaDevices.getUserMedia({audio:!0,video:!0}).then((function(n){e.$refs.selfView.srcObject=n,e.friendPeerId&&e.peer.on("open",(function(){t(e.peer.call(e.friendPeerId,n))}))}))}};n("37b6");f.render=c;var d=f;Object(r["createApp"])(d).mount("#app")},"8bbf":function(e,t){e.exports=Vue},b4ed:function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,"body{margin:0;background:#000}.btn-icon{background:#333;outline:none;border-radius:50%}.call-btn{position:fixed;bottom:50%;right:50%}.main-view{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:-1}.self-view{position:fixed;top:0;right:0;max-width:50vw;max-height:30vh;transform:rotateY(180deg)}",""]),e.exports=t},c56e:function(e,t){e.exports=Peer}});
//# sourceMappingURL=app.fd0014a2.js.map