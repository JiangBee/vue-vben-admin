let s=document.createElement("style");s.innerHTML=".scroll-wrap[data-v-4daccdc8]{width:50%;height:300px;background:#fff}",document.head.appendChild(s);import{a as o,r as t,f as a,d9 as r,da as e,i as l,o as c,j as i,k as d,aM as n,aX as p,n as m,bp as u,p as f}from"./index.a6ab9244.js";import"./xlsx.9d951958.js";import"./Trigger.c98260cb.js";import"./omit.bdc49d67.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.abe3aef5.js";import"./index.1ba525ec.js";import"./index.6a677bcd.js";import"./RightOutlined.095e9d4c.js";import"./usePageContext.5e891747.js";import"./types.d260ef98.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.409025a3.js";import"./index.c6a9e5cf.js";import"./transButton.295c4225.js";import{a as j,s as b}from"./index.c41153d6.js";import"./RightOutlined.a8a05276.js";import"./useTimeout.a76b8678.js";import"./tsxHelper.6b46956f.js";import"./index.bd1dad24.js";import"./animation.fde8d791.js";import"./useScrollTo.537a0974.js";import{s as x}from"./index.7bdbbe2a.js";var g=o({components:{CollapseContainer:j,ScrollContainer:b,PageWrapper:x},setup(){const s=t(null),o=()=>{const o=a(s);if(!o)throw new Error("scroll is Null");return o};return{scrollTo:function(s){o().scrollTo(s)},scrollRef:s,scrollBottom:function(){o().scrollBottom()}}}});const C=u("data-v-4daccdc8");r("data-v-4daccdc8");const T={class:"my-4"},_=f("滚动到100px位置"),h=f("滚动到800px位置"),k=f("滚动到顶部"),v=f("滚动到底部"),w={class:"scroll-wrap"},y={class:"p-3"};e();const B=C(((s,o,t,a,r,e)=>{const u=l("a-button"),f=l("ScrollContainer"),j=l("PageWrapper");return c(),i(j,{title:"滚动组件函数示例",content:"基于el-scrollbar"},{default:C((()=>[d("div",T,[d(u,{onClick:o[1]||(o[1]=o=>s.scrollTo(100)),class:"mr-2"},{default:C((()=>[_])),_:1}),d(u,{onClick:o[2]||(o[2]=o=>s.scrollTo(800)),class:"mr-2"},{default:C((()=>[h])),_:1}),d(u,{onClick:o[3]||(o[3]=o=>s.scrollTo(0)),class:"mr-2"},{default:C((()=>[k])),_:1}),d(u,{onClick:o[4]||(o[4]=o=>s.scrollBottom()),class:"mr-2"},{default:C((()=>[v])),_:1})]),d("div",w,[d(f,{class:"mt-4",ref:"scrollRef"},{default:C((()=>[d("ul",y,[(c(),i(n,null,p(100,(s=>d("li",{key:s,class:"p-2",style:{border:"1px solid #eee"}},m(s),1))),64))])])),_:1},512)])])),_:1})}));g.render=B,g.__scopeId="data-v-4daccdc8";export default g;