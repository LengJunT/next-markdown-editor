(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{111:function(e,t,n){"use strict";var r=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.noSSR=f,t.default=function(e,t){var n=u.default,r={loading:function(e){return e.error,e.isLoading,l.default.createElement(d,null)}};if("function"==typeof e.then?r.loader=function(){return e}:"function"==typeof e?r.loader=e:"object"===(0,i.default)(e)&&(r=(0,o.default)({},r,e)),r=(0,o.default)({},r,t),e.render&&(r.render=function(t,n){return e.render(n,t)}),e.modules){n=u.default.Map;var s={},p=e.modules();(0,a.default)(p).forEach(function(e){var t=p[e];"function"!=typeof t.then?s[e]=t:s[e]=function(){return t.then(function(e){return e.default||e})}}),r.loader=s}if(r.loadableGenerated&&delete(r=(0,o.default)({},r,r.loadableGenerated)).loadableGenerated,"boolean"==typeof r.ssr){if(!r.ssr)return delete r.ssr,f(n,r);delete r.ssr}return n(r)};var a=r(n(65)),o=r(n(41)),i=r(n(39)),l=r(n(0)),u=r(n(102)),s="undefined"==typeof window;function f(e,t){return delete t.webpack,delete t.modules,s?function(){return l.default.createElement(t.loading,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}:e(t)}function d(){return l.default.createElement("p",null,"loading...")}},169:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=m(n(13)),a=m(n(7)),o=m(n(14)),i=m(n(15)),l=m(n(9)),u=m(n(16)),s=c(n(0)),f=c(n(1)),d=m(n(21)),p=m(n(106));function c(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function m(e){return e&&e.__esModule?e:{default:e}}var y=function(e){function t(){(0,o.default)(this,t);var e=(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.handleKeyDown=function(t){var n=e.props,r=n.onPressEnter,a=n.onKeyDown;13===t.keyCode&&r&&r(t),a&&a(t)},e.saveInput=function(t){e.input=t},e}return(0,u.default)(t,e),(0,i.default)(t,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"getInputClassName",value:function(){var e,t=this.props,n=t.prefixCls,r=t.size,o=t.disabled;return(0,d.default)(n,(e={},(0,a.default)(e,n+"-sm","small"===r),(0,a.default)(e,n+"-lg","large"===r),(0,a.default)(e,n+"-disabled",o),e))}},{key:"renderLabeledInput",value:function(e){var t,n=this.props;if(!n.addonBefore&&!n.addonAfter)return e;var r=n.prefixCls+"-group",o=r+"-addon",i=n.addonBefore?s.createElement("span",{className:o},n.addonBefore):null,l=n.addonAfter?s.createElement("span",{className:o},n.addonAfter):null,u=(0,d.default)(n.prefixCls+"-wrapper",(0,a.default)({},r,i||l)),f=(0,d.default)(n.prefixCls+"-group-wrapper",(t={},(0,a.default)(t,n.prefixCls+"-group-wrapper-sm","small"===n.size),(0,a.default)(t,n.prefixCls+"-group-wrapper-lg","large"===n.size),t));return s.createElement("span",{className:f,style:n.style},s.createElement("span",{className:u},i,s.cloneElement(e,{style:null}),l))}},{key:"renderLabeledIcon",value:function(e){var t,n=this.props;if(!("prefix"in n||"suffix"in n))return e;var r=n.prefix?s.createElement("span",{className:n.prefixCls+"-prefix"},n.prefix):null,o=n.suffix?s.createElement("span",{className:n.prefixCls+"-suffix"},n.suffix):null,i=(0,d.default)(n.className,n.prefixCls+"-affix-wrapper",(t={},(0,a.default)(t,n.prefixCls+"-affix-wrapper-sm","small"===n.size),(0,a.default)(t,n.prefixCls+"-affix-wrapper-lg","large"===n.size),t));return s.createElement("span",{className:i,style:n.style},r,s.cloneElement(e,{style:null,className:this.getInputClassName()}),o)}},{key:"renderInput",value:function(){var e=this.props,t=e.value,n=e.className,a=(0,p.default)(this.props,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix"]);return"value"in this.props&&(a.value=null==t?"":t,delete a.defaultValue),this.renderLabeledIcon(s.createElement("input",(0,r.default)({},a,{className:(0,d.default)(this.getInputClassName(),n),onKeyDown:this.handleKeyDown,ref:this.saveInput})))}},{key:"render",value:function(){return this.renderLabeledInput(this.renderInput())}}]),t}(s.Component);t.default=y,y.defaultProps={prefixCls:"ant-input",type:"text",disabled:!1},y.propTypes={type:f.string,id:f.oneOfType([f.string,f.number]),size:f.oneOf(["small","default","large"]),maxLength:f.oneOfType([f.string,f.number]),disabled:f.bool,value:f.any,defaultValue:f.any,className:f.string,addonBefore:f.node,addonAfter:f.node,prefixCls:f.string,onPressEnter:f.func,onKeyDown:f.func,onKeyUp:f.func,onFocus:f.func,onBlur:f.func,prefix:f.node,suffix:f.node},e.exports=t.default},185:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(n(169)),a=l(n(350)),o=l(n(351)),i=l(n(352));function l(e){return e&&e.__esModule?e:{default:e}}r.default.Group=a.default,r.default.Search=o.default,r.default.TextArea=i.default,t.default=r.default,e.exports=t.default},346:function(e,t,n){__NEXT_REGISTER_PAGE("/edit",function(){return e.exports=n(631),{page:e.exports.default}})},347:function(e,t,n){"use strict";n(104),n(348),n(110)},350:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(7)),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),o=i(n(21));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t,n=e.prefixCls,i=void 0===n?"ant-input-group":n,l=e.className,u=void 0===l?"":l,s=(0,o.default)(i,(t={},(0,r.default)(t,i+"-lg","large"===e.size),(0,r.default)(t,i+"-sm","small"===e.size),(0,r.default)(t,i+"-compact",e.compact),t),u);return a.createElement("span",{className:s,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},e.children)},e.exports=t.default},351:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=m(n(13)),a=m(n(7)),o=m(n(14)),i=m(n(15)),l=m(n(9)),u=m(n(16)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),f=m(n(21)),d=m(n(169)),p=m(n(105)),c=m(n(34));function m(e){return e&&e.__esModule?e:{default:e}}var y=function(e){function t(){(0,o.default)(this,t);var e=(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.onSearch=function(t){var n=e.props.onSearch;n&&n(e.input.input.value,t),e.input.focus()},e.saveInput=function(t){e.input=t},e}return(0,u.default)(t,e),(0,i.default)(t,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"getButtonOrIcon",value:function(){var e,t=this.props,n=t.enterButton,r=t.prefixCls,a=t.size,o=t.disabled,i=n;return e=n?i.type===c.default||"button"===i.type?s.cloneElement(i,i.type===c.default?{className:r+"-button",size:a}:{}):s.createElement(c.default,{className:r+"-button",type:"primary",size:a,disabled:o,key:"enterButton"},!0===n?s.createElement(p.default,{type:"search"}):n):s.createElement(p.default,{className:r+"-icon",type:"search",key:"searchIcon"}),s.cloneElement(e,{onClick:this.onSearch})}},{key:"render",value:function(){var e,t=this.props,n=t.className,o=t.prefixCls,i=t.inputPrefixCls,l=t.size,u=t.suffix,p=t.enterButton,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n}(t,["className","prefixCls","inputPrefixCls","size","suffix","enterButton"]);delete c.onSearch;var m=this.getButtonOrIcon(),y=u?[u,m]:m,h=(0,f.default)(o,n,(e={},(0,a.default)(e,o+"-enter-button",!!p),(0,a.default)(e,o+"-"+l,!!l),e));return s.createElement(d.default,(0,r.default)({onPressEnter:this.onSearch},c,{size:l,className:h,prefixCls:i,suffix:y,ref:this.saveInput}))}}]),t}(s.Component);t.default=y,y.defaultProps={inputPrefixCls:"ant-input",prefixCls:"ant-input-search",enterButton:!1},e.exports=t.default},352:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=c(n(13)),a=c(n(7)),o=c(n(14)),i=c(n(15)),l=c(n(9)),u=c(n(16)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),f=c(n(106)),d=c(n(21)),p=c(n(353));function c(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(){(0,o.default)(this,t);var e=(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state={textareaStyles:{}},e.resizeTextarea=function(){var t=e.props.autosize;if(t&&e.textAreaRef){var n=t?t.minRows:null,r=t?t.maxRows:null,a=(0,p.default)(e.textAreaRef,!1,n,r);e.setState({textareaStyles:a})}},e.handleTextareaChange=function(t){"value"in e.props||e.resizeTextarea();var n=e.props.onChange;n&&n(t)},e.handleKeyDown=function(t){var n=e.props,r=n.onPressEnter,a=n.onKeyDown;13===t.keyCode&&r&&r(t),a&&a(t)},e.saveTextAreaRef=function(t){e.textAreaRef=t},e}return(0,u.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.resizeTextarea()}},{key:"componentWillReceiveProps",value:function(e){var t,n;this.props.value!==e.value&&(this.nextFrameActionId&&(n=this.nextFrameActionId,window.cancelAnimationFrame?window.cancelAnimationFrame(n):window.clearTimeout(n)),this.nextFrameActionId=(t=this.resizeTextarea,window.requestAnimationFrame?window.requestAnimationFrame(t):window.setTimeout(t,1)))}},{key:"focus",value:function(){this.textAreaRef.focus()}},{key:"blur",value:function(){this.textAreaRef.blur()}},{key:"getTextAreaClassName",value:function(){var e=this.props,t=e.prefixCls,n=e.className,r=e.disabled;return(0,d.default)(t,n,(0,a.default)({},t+"-disabled",r))}},{key:"render",value:function(){var e=this.props,t=(0,f.default)(e,["prefixCls","onPressEnter","autosize"]),n=(0,r.default)({},e.style,this.state.textareaStyles);return"value"in t&&(t.value=t.value||""),s.createElement("textarea",(0,r.default)({},t,{className:this.getTextAreaClassName(),style:n,onKeyDown:this.handleKeyDown,onChange:this.handleTextareaChange,ref:this.saveTextAreaRef}))}}]),t}(s.Component);t.default=m,m.defaultProps={prefixCls:"ant-input"},e.exports=t.default},353:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;i||(i=document.createElement("textarea"),document.body.appendChild(i)),e.getAttribute("wrap")?i.setAttribute("wrap",e.getAttribute("wrap")):i.removeAttribute("wrap");var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(t&&o[n])return o[n];var r=window.getComputedStyle(e),i=r.getPropertyValue("box-sizing")||r.getPropertyValue("-moz-box-sizing")||r.getPropertyValue("-webkit-box-sizing"),l=parseFloat(r.getPropertyValue("padding-bottom"))+parseFloat(r.getPropertyValue("padding-top")),u=parseFloat(r.getPropertyValue("border-bottom-width"))+parseFloat(r.getPropertyValue("border-top-width")),s={sizingStyle:a.map(function(e){return e+":"+r.getPropertyValue(e)}).join(";"),paddingSize:l,borderSize:u,boxSizing:i};return t&&n&&(o[n]=s),s}(e,t),s=u.paddingSize,f=u.borderSize,d=u.boxSizing,p=u.sizingStyle;i.setAttribute("style",p+";"+r),i.value=e.value||e.placeholder||"";var c=Number.MIN_SAFE_INTEGER,m=Number.MAX_SAFE_INTEGER,y=i.scrollHeight,h=void 0;if("border-box"===d?y+=f:"content-box"===d&&(y-=s),null!==n||null!==l){i.value=" ";var b=i.scrollHeight-s;null!==n&&(c=b*n,"border-box"===d&&(c=c+s+f),y=Math.max(c,y)),null!==l&&(m=b*l,"border-box"===d&&(m=m+s+f),h=y>m?"":"hidden",y=Math.min(m,y))}return l||(h="hidden"),{height:y,minHeight:c,maxHeight:m,overflowY:h}};var r="\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n",a=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"],o={},i=void 0;e.exports=t.default},60:function(e,t,n){e.exports=n(111)},631:function(e,t,n){"use strict";n.r(t),n(347);var r=n(185),a=n.n(r),o=n(3),i=n.n(o),l=n(0),u=n.n(l),s=n(60);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=n.n(s)()(function(){return Promise.all([n.e(0),n.e(1),n.e(10)]).then(n.bind(null,623))},{ssr:!1,loadableGenerated:{webpack:function(){return[623]},modules:["./SimpleMde"]}}),y=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,p(t).call(this,e))).state={},n}var n,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,l.Component),n=t,(r=[{key:"render",value:function(){return u.a.createElement("div",{className:"jsx-3307808554 edit-container"},u.a.createElement(i.a,{styleId:"3307808554",css:[".edit-container.jsx-3307808554{position:absolute;display:flex: flex-direction:column;width:100%;height:100%;background-color:#fff;}",".content-container.jsx-3307808554{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;top:50px;bottom:40px;}",".editor-container.jsx-3307808554{position:relative;width:50%;}",".markdown-container.jsx-3307808554{box-sizing:content-box;width:50%;background-color:#fff;padding:10px;border:1px solid #ddd;border-bottom-left-radius:4px;border-bottom-right-radius:4px;}",".foot-container.jsx-3307808554{position:absolute;width:100%;height:40px;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:10px;background-color:#fff;}"]}),u.a.createElement(a.a,{style:{height:"50px",fontSize:"20px"},placeholder:"请输入试题标题..."}),u.a.createElement("div",{className:"jsx-3307808554 content-container"},u.a.createElement("div",{className:"jsx-3307808554 editor-container"},u.a.createElement(m,null))),u.a.createElement("div",{className:"jsx-3307808554 foot-container"},"编辑页面底部内容"))}}])&&d(n.prototype,r),t}();t.default=y}},[[346,2,0,1]]]);