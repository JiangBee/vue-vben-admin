let t=document.createElement("style");t.innerHTML=".lazy-base-demo-wrap{display:flex;width:50%;height:2000px;margin:20px auto;text-align:center;background:#fff;justify-content:center;flex-direction:column;align-items:center}.lazy-base-demo-box{width:300px;height:300px}.lazy-base-demo h1{height:1300px;margin:20px 0}.custom-enter{opacity:0;transform:scale(.4) translate(100%)}.custom-enter-to{opacity:1}.custom-enter-active{position:absolute;top:0;width:100%;transition:.5s}.custom-leave{opacity:1}.custom-leave-to{opacity:0;transform:scale(.4) translate(-100%)}.custom-leave-active{transition:.5s}",document.head.appendChild(t);import{a as e,i as o,o as i,j as s,k as a,w as n}from"./index.5c6c90f9.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.d754e078.js";import{A as r}from"./index.a8571cb1.js";import"./RightOutlined.76c81f82.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.17085377.js";import"./index.d0076f6e.js";import"./UpOutlined.4db44387.js";import"./LeftOutlined.bc728dc1.js";import"./index.4c78e464.js";import{d as m,S as c}from"./index.1f4cd203.js";import"./RightOutlined.68bb84f7.js";import"./useTimeout.fa9b71e9.js";import"./tsxHelper.e1b376ef.js";import"./index.5e857500.js";import"./animation.1ca9d394.js";import"./useScrollTo.1859eb4d.js";import d from"./TargetContent.d5f03277.js";var l=e({components:{LazyContainer:m,TargetContent:d,Skeleton:c,Alert:r},setup:()=>({})});const p={class:"p-4 lazy-base-demo"},u={class:"lazy-base-demo-wrap"},f=a("h1",null,"向下滚动",-1),j={class:"lazy-base-demo-box"};l.render=function(t,e,r,m,c,d){const l=o("Alert"),x=o("TargetContent"),b=o("LazyContainer");return i(),s("div",p,[a(l,{message:"自定义动画",description:"懒加载组件显示动画",type:"info","show-icon":""}),a("div",u,[f,a("div",j,[a(b,{transitionName:"custom"},{default:n((()=>[a(x)])),_:1})])])])};export default l;