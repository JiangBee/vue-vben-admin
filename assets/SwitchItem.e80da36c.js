import{d as e,aK as t,u as i,K as s,h as d,o as n,i as a,j as o,l as r,a7 as l,bw as p}from"./index.8d47259d.js";import{S as m}from"./index.f5c06edb.js";import{b as c}from"./index.47580e3b.js";import"./vendor.3b1829c7.js";import"./index.481b27de.js";import"./index.d263819e.js";import"./index.61c2aa67.js";import"./index.f0041cf8.js";import"./index.be6382ea.js";import"./domUtils.958d292f.js";import"./_stringToArray.60f5614b.js";import"./RightOutlined.23eff149.js";/* empty css              */import"./useTimeout.b2057379.js";import"./useScrollTo.c394ad0f.js";import"./animation.8dadcc24.js";import"./ArrowLeftOutlined.503463ec.js";import"./useAttrs.34eee9f3.js";import"./isEqual.ffb3460c.js";import"./useHeaderSetting.89f5d3a1.js";import"./SettingOutlined.4d5b6906.js";var f=e({name:"SwitchItem",components:{Switch:m},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:d}=t("setting-switch-item"),{t:n}=i();return{prefixCls:d,t:n,handleChange:function(t){e.event&&c(e.event,t)},getBindValue:s((()=>e.def?{checked:e.def}:{}))}}});const u=p("data-v-3a858942")(((e,t,i,s,p,m)=>{const c=d("Switch");return n(),a("div",{class:e.prefixCls},[o("span",null,r(e.title),1),o(c,l(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}));f.render=u,f.__scopeId="data-v-3a858942";export default f;