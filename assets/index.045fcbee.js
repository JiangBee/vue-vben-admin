import{d as r,P as t,v as e,x as n,z as o,j as a,D as i,J as c,F as u,c2 as s,R as f,$ as l}from"./index.d4318adc.js";import{D as p,M as d}from"./index.f10db5c5.js";import{D as m}from"./DownOutlined.b7602ab2.js";function b(r){return"function"==typeof r||"[object Object]"===Object.prototype.toString.call(r)&&!i(r)}var y=r({name:"ABreadcrumbItem",__ANT_BREADCRUMB_ITEM:!0,props:{prefixCls:t.string,href:t.string,separator:t.VNodeChild.def("/"),overlay:t.VNodeChild},setup:function(){return{configProvider:e("configProvider",n)}},methods:{renderBreadcrumbNode:function(r,t){var e,n=o(this,"overlay");return n?a(p,{overlay:n,placement:"bottomCenter"},b(e=a("span",{class:"".concat(t,"-overlay-link")},[r,a(m,null,null)]))?e:{default:function(){return[e]}}):r}},render:function(){var r,t=this.prefixCls,e=(0,this.configProvider.getPrefixCls)("breadcrumb",t),n=o(this,"separator"),i=c(this);return r=u(this,"href")?a("a",{class:"".concat(e,"-link")},b(i)?i:{default:function(){return[i]}}):a("span",{class:"".concat(e,"-link")},b(i)?i:{default:function(){return[i]}}),r=this.renderBreadcrumbNode(r,e),i?a("span",null,[r,n&&""!==n&&a("span",{class:"".concat(e,"-separator")},b(n)?n:{default:function(){return[n]}})]):null}});function h(r){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function v(r){return function(r){if(Array.isArray(r))return g(r)}(r)||function(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}(r)||function(r,t){if(!r)return;if("string"==typeof r)return g(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(r);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return g(r,t)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function O(r){return"function"==typeof r||"[object Object]"===Object.prototype.toString.call(r)&&!i(r)}function j(r){var t=r.route,e=r.params,n=r.routes,o=r.paths,i=n.indexOf(t)===n.length-1,c=function(r,t){if(!r.breadcrumbName)return null;var e=Object.keys(t).join("|");return r.breadcrumbName.replace(new RegExp(":(".concat(e,")"),"g"),(function(r,e){return t[e]||r}))}(t,e);return i?a("span",null,O(c)?c:{default:function(){return[c]}}):a("a",{href:"#/".concat(o.join("/"))},O(c)?c:{default:function(){return[c]}})}var P=r({name:"ABreadcrumb",props:{prefixCls:t.string,routes:{type:Array},params:t.any,separator:t.VNodeChild,itemRender:{type:Function}},setup:function(){return{configProvider:e("configProvider",n)}},methods:{getPath:function(r,t){return r=(r||"").replace(/^\//,""),Object.keys(t).forEach((function(e){r=r.replace(":".concat(e),t[e])})),r},addChildPath:function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=arguments.length>2?arguments[2]:void 0,n=v(r),o=this.getPath(t,e);return o&&n.push(o),n},genForRoutes:function(r){var t=this,e=r.routes,n=void 0===e?[]:e,o=r.params,i=void 0===o?{}:o,c=r.separator,u=r.itemRender,s=void 0===u?j:u,f=[];return n.map((function(r){var e,o=t.getPath(r.path,i);o&&f.push(o);var u,l=[].concat(f),p=null;r.children&&r.children.length&&(p=a(d,null,O(u=r.children.map((function(r){var e;return a(d.Item,{key:r.path||r.breadcrumbName},O(e=s({route:r,params:i,routes:n,paths:t.addChildPath(l,r.path,i)}))?e:{default:function(){return[e]}})})))?u:{default:function(){return[u]}}));return a(y,{overlay:p,separator:c,key:o||r.breadcrumbName},O(e=s({route:r,params:i,routes:n,paths:l}))?e:{default:function(){return[e]}})}))}},render:function(){var r,t=this.prefixCls,e=this.routes,n=this.params,i=void 0===n?{}:n,u=this.$slots,p=(0,this.configProvider.getPrefixCls)("breadcrumb",t),d=s(c(this)),m=o(this,"separator"),b=this.itemRender||u.itemRender||j;return e&&e.length>0?r=this.genForRoutes({routes:e,params:i,separator:m,itemRender:b}):d.length&&(r=d.map((function(r,t){return f("object"===h(r.type)&&(r.type.__ANT_BREADCRUMB_ITEM||r.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),l(r,{separator:m,key:t})}))),a("div",{class:p},O(r)?r:{default:function(){return[r]}})}});function A(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function R(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}var S=r({name:"ABreadcrumbSeparator",__ANT_BREADCRUMB_SEPARATOR:!0,inheritAttrs:!1,props:{prefixCls:t.string},setup:function(){return{configProvider:e("configProvider",n)}},render:function(){var r=this.prefixCls,t=this.$attrs;t.separator;var e=t.class,n=function(r,t){var e={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.indexOf(n)<0&&(e[n]=r[n]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(r);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(r,n[o])&&(e[n[o]]=r[n[o]])}return e}(t,["separator","class"]),o=(0,this.configProvider.getPrefixCls)("breadcrumb",r),i=c(this);return a("span",function(r){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?A(Object(e),!0).forEach((function(t){R(r,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):A(Object(e)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))}))}return r}({class:["".concat(o,"-separator"),e]},n),[i.length>0?i:"/"])}});P.Item=y,P.Separator=S,P.install=function(r){return r.component(P.name,P),r.component(y.name,y),r.component(S.name,S),r};export{P as B};