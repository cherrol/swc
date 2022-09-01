"use strict";import e from"@swc/helpers/src/_instanceof.mjs";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var t=n();if(t&&t.has(e))return t.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var f=i?Object.getOwnPropertyDescriptor(e,u):null;f&&(f.get||f.set)?Object.defineProperty(r,u,f):r[u]=e[u]}return r.default=e,t&&t.set(e,r),r}(require("react")),r=function(e){return e&&e.__esModule?e:{default:e}}(require("prop-types"));function n(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return n=function(){return e},e}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=function(r){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(h,r);var n,s,p,d,y=(n=h,function(){var e,t,r,i=a(n);if(function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var u=a(this).constructor;r=Reflect.construct(i,arguments,u)}else r=i.apply(this,arguments);return e=this,t=r,t&&("object"===o(t)||"function"==typeof t)?t:function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)});function h(){!function(t,r){if(!e(t,r))throw TypeError("Cannot call a class as a function")}(this,h);for(var t,r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return!function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}(function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t=y.call.apply(y,[this].concat(n))),"storeHighlightedItemReference",function(e){t.props.onHighlightedItemChange(null===e?null:e.item)}),t}return s=h,p=[{key:"shouldComponentUpdate",value:function(e){return(0,_compareObjects.default)(e,this.props,["itemProps",])}},{key:"render",value:function(){var e=this,r=this.props,n=r.items,o=r.itemProps,f=r.renderItem,a=r.renderItemData,c=r.sectionIndex,s=r.highlightedItemIndex,p=r.getItemId,d=r.theme,y=r.keyPrefix,h=null===c?y:"".concat(y,"section-").concat(c,"-"),m="function"==typeof o;return t.default.createElement("ul",i({role:"listbox"},d("".concat(h,"items-list"),"itemsList")),n.map(function(r,n){var y=n===s,g="".concat(h,"item-").concat(n),v=m?o({sectionIndex:c,itemIndex:n}):o,b=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach(function(t){l(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({id:p(c,n),"aria-selected":y},d(g,"item",0===n&&"itemFirst",y&&"itemHighlighted"),{},v);return y&&(b.ref=e.storeHighlightedItemReference),t.default.createElement(_Item.default,i({},b,{sectionIndex:c,isHighlighted:y,itemIndex:n,item:r,renderItem:f,renderItemData:a}))}))}},],f(s.prototype,p),d&&f(s,d),h}(t.Component);exports.default=s,l(s,"propTypes",{items:r.default.array.isRequired,itemProps:r.default.oneOfType([r.default.object,r.default.func,]),renderItem:r.default.func.isRequired,renderItemData:r.default.object.isRequired,sectionIndex:r.default.number,highlightedItemIndex:r.default.number,onHighlightedItemChange:r.default.func.isRequired,getItemId:r.default.func.isRequired,theme:r.default.func.isRequired,keyPrefix:r.default.string.isRequired}),l(s,"defaultProps",{sectionIndex:null}),new s;
