let e=document.createElement("style");e.innerHTML=".vben-setting-select-item[data-v-6110ac28]{display:flex;justify-content:space-between;margin:16px 0}.vben-setting-select-item-select[data-v-6110ac28]{width:126px}",document.head.appendChild(e);import{a as t,aY as i,I as s,i as a,o as n,j as r,k as d,n as o,J as l,bi as p}from"./index.0d38f9a5.js";import"./xlsx.a48e520c.js";import{S as m}from"./index.c78520ea.js";import"./Trigger.92fe36b8.js";import"./omit.d1225ee8.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.9686ab5b.js";import"./CheckOutlined.3634c842.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.ff8c0c9d.js";import"./index.1a93a451.js";import"./index.e328c8dd.js";import"./index.34b43b67.js";import"./index.4817e080.js";import"./RightOutlined.a931e0fb.js";import"./SettingOutlined.43c82267.js";import"./useTimeout.9e854957.js";import"./tsxHelper.b0075210.js";import"./index.7b626059.js";import"./domUtils.bd8f2ecf.js";import"./index.d865d4a3.js";import"./animation.b6b70e60.js";import"./useScrollTo.1e47dcd6.js";import"./useAttrs.ade69aae.js";import"./useHeaderSetting.30bed3af.js";import{b as c}from"./index.724d19c7.js";var u=t({name:"SelectItem",components:{Select:m},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:[String,Number]},initValue:{type:[String,Number]},options:{type:Array,default:[]}},setup(e){const{prefixCls:t}=i("setting-select-item");return{prefixCls:t,handleChange:function(t){e.event&&c(e.event,t)},getBindValue:s((()=>e.def?{value:e.def,defaultValue:e.initValue||e.def}:{}))}}});const j=p("data-v-6110ac28")(((e,t,i,s,p,m)=>{const c=a("Select");return n(),r("div",{class:e.prefixCls},[d("span",null,o(e.title),1),d(c,l(e.getBindValue,{class:`${e.prefixCls}-select`,onChange:e.handleChange,disabled:e.disabled,size:"small",options:e.options}),null,16,["class","onChange","disabled","options"])],2)}));u.render=j,u.__scopeId="data-v-6110ac28";export default u;