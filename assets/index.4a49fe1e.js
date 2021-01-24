import{d as e,P as o,v as n,x as c,y as l,j as t,r as a,a_ as i,D as r,aO as s,cr as u,bO as d}from"./index.d4318adc.js";import{P as v,a as f}from"./colors.c7aea5b4.js";function p(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}var b=e({name:"ACheckableTag",props:{prefixCls:o.string,checked:o.looseBool,onChange:{type:Function},onClick:{type:Function}},emits:["update:checked","change","click"],setup:function(e,o){var a=o.slots,i=o.emit,r=n("configProvider",c).getPrefixCls,s=function(o){var n=e.checked;i("update:checked",!n),i("change",!n),i("click",o)};return function(){var o,n,c=e.checked,i=e.prefixCls,u=r("tag",i),d=l(u,(p(o={},"".concat(u,"-checkable"),!0),p(o,"".concat(u,"-checkable-checked"),c),o));return t("span",{class:d,onClick:s},[null===(n=a.default)||void 0===n?void 0:n.call(a)])}}});function g(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function k(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!r(e)}var C=new RegExp("^(".concat(v.join("|"),")(-inverse)?$")),h=new RegExp("^(".concat(f.join("|"),")$")),m={prefixCls:o.string,color:{type:String},closable:o.looseBool.def(!1),closeIcon:o.VNodeChild,visible:o.looseBool,onClose:{type:Function},icon:o.VNodeChild},x=e({name:"ATag",emits:["update:visible","close"],setup:function(e,o){var r=o.slots,v=o.emit,f=o.attrs,p=n("configProvider",c).getPrefixCls,b=a(!0);i((function(){void 0!==e.visible&&(b.value=e.visible)}));var m=function(o){o.stopPropagation(),v("update:visible",!1),v("close",o),o.defaultPrevented||void 0===e.visible&&(b.value=!1)},x=function(){var o=e.color;return!!o&&(C.test(o)||h.test(o))};return function(){var o,n,c,a,i=e.prefixCls,v=e.icon,C=void 0===v?null===(n=r.icon)||void 0===n?void 0:n.call(r):v,h=e.color,j=e.closeIcon,y=void 0===j?null===(c=r.closeIcon)||void 0===c?void 0:c.call(r):j,P=e.closable,O=void 0!==P&&P,w=x(),T=p("tag",i),B={backgroundColor:h&&!x()?h:void 0},F=l(T,(g(o={},"".concat(T,"-").concat(h),w),g(o,"".concat(T,"-has-color"),h&&!w),g(o,"".concat(T,"-hidden"),!b.value),o)),I=C||null,A=null===(a=r.default)||void 0===a?void 0:a.call(r),E=I?t(s,null,[I,t("span",null,k(A)?A:{default:function(){return[A]}})]):A,N="onClick"in f,R=t("span",{class:F,style:B},[E,O?y?t("div",{class:"".concat(T,"-close-icon"),onClick:m},k(y)?y:{default:function(){return[y]}}):t(d,{class:"".concat(T,"-close-icon"),onClick:m},null):null]);return N?t(u,null,k(R)?R:{default:function(){return[R]}}):R}}});x.props=m,x.CheckableTag=b,x.install=function(e){return e.component(x.name,x),e.component(b.name,b),e};export{x as T};