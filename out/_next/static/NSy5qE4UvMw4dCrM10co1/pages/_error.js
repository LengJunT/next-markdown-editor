(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{123:function(e,t,n){e.exports=n(46)},339:function(e,t,n){__NEXT_REGISTER_PAGE("/_error",function(){return e.exports=n(632),{page:e.exports.default}})},632:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=(n(1),n(110),n(34)),c=n.n(i),a=n(3),u=n.n(a),s=n(123),l=n.n(s);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,b(t).apply(this,arguments))}var n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r.Component),n=t,(i=[{key:"render",value:function(){var e;switch(this.props.statusCode){case 200:case 404:e=function(){return o.a.createElement("div",{className:"jsx-3438667246 content-container"},o.a.createElement(u.a,{styleId:"3438667246",css:[".content-container.jsx-3438667246{position:absolute;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".error-image.jsx-3438667246{width:200px;height:200px;margin:10px 0;}"]}),o.a.createElement("img",{alt:"error-img",src:"/static/empty.png",className:"jsx-3438667246 error-image"}),o.a.createElement("h3",{className:"jsx-3438667246"},"您访问的页面不存在，请确认地址准确～"),o.a.createElement(c.a,{onClick:function(){return l.a.push("/")},type:"primary",ghost:!0},"返回首页"))};break;case 500:e=function(){return o.a.createElement("div",{className:"jsx-3438667246 content-container"},o.a.createElement(u.a,{styleId:"3438667246",css:[".content-container.jsx-3438667246{position:absolute;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".error-image.jsx-3438667246{width:200px;height:200px;margin:10px 0;}"]}),o.a.createElement("img",{alt:"error-img",src:"/static/unknown_error.png",className:"jsx-3438667246 error-image"}),o.a.createElement("h3",{className:"jsx-3438667246"},"您访问的页面出现未知错误，程序员小哥正在加紧修复～"),o.a.createElement(c.a,{onClick:function(){return l.a.push("/")},type:"primary",ghost:!0},"返回首页"))}}return o.a.createElement(e,null)}}])&&p(n.prototype,i),t}();function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return v});var g,j,k,v=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,h(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,o.a.Component),n=t,i=[{key:"getInitialProps",value:function(e){var t=e.res,n=e.err;return{statusCode:t?t.statusCode:n?n.statusCode:null}}}],(r=[{key:"render",value:function(){return o.a.createElement(m,{statusCode:this.props.statusCode||200})}}])&&x(n.prototype,r),i&&x(n,i),t}();k={statusCode:200},(j="defaultProps")in(g=v)?Object.defineProperty(g,j,{value:k,enumerable:!0,configurable:!0,writable:!0}):g[j]=k}},[[339,2,0,1]]]);