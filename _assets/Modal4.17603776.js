import{a as e,r as i,i as o,o as s,j as t,w as r,k as d,J as a}from"./index.5c6c90f9.js";import"./xlsx.a48e520c.js";import"./index.e7bb1c19.js";import"./Trigger.919a25bc.js";import"./omit.dfa8bda2.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.d754e078.js";import"./CheckOutlined.f7557516.js";import{s as n}from"./index.aeff4252.js";import"./colors.1664fe18.js";import"./RightOutlined.76c81f82.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.17085377.js";import"./index.98d0a77d.js";import"./index.a172b251.js";import"./index.4185348b.js";import"./index.5ba92d97.js";import"./UpOutlined.4db44387.js";import"./index.e21bca80.js";import"./index.6c0d5231.js";import"./index.83bd1b65.js";import"./index.62730274.js";import"./index.4a8e715a.js";import"./index.1f4cd203.js";import"./CloseOutlined.d97483db.js";import"./FullscreenOutlined.d60c703c.js";import"./LoadingOutlined.c197daea.js";import"./RightOutlined.68bb84f7.js";import"./useTimeout.fa9b71e9.js";import"./tsxHelper.e1b376ef.js";import"./index.5e857500.js";import"./animation.1ca9d394.js";import"./useScrollTo.1859eb4d.js";import"./useAttrs.42151342.js";import"./index.5d2c4097.js";import{s as m,b as p}from"./index.a6a5b0ce.js";import"./useWindowSizeFn.3173c9f0.js";import{u as l}from"./useForm.2f01440e.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var j=e({components:{BasicModal:m,BasicForm:n},setup(){const e=i({}),[o,{}]=l({labelWidth:120,schemas:c,showActionButtonGroup:!1,actionColOptions:{span:24}}),[s]=p((i=>{e.value={field2:i.data,field1:i.info}}));return{register:s,schemas:c,registerForm:o,model:e}}});j.render=function(e,i,n,m,p,l){const c=o("BasicForm"),j=o("BasicModal");return s(),t(j,a(e.$attrs,{onRegister:e.register,title:"Modal Title"}),{default:r((()=>[d(c,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])),_:1},16,["onRegister"])};export default j;