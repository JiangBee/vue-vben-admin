import{aL as e,aM as o,d as t,r as l,L as a,e as r,cp as s,cq as i,h as d,o as n,i as c,j as m,bw as u,m as p}from"./index.d4318adc.js";import{a as g}from"./index.4936604d.js";import{_ as f}from"./index.025c1173.js";import"./vendor.783aefe0.js";import"./index.85243e6a.js";import"./domUtils.96378b32.js";import"./_stringToArray.3c05aa00.js";import"./RightOutlined.aa2d326a.js";import"./index.95c10fda.js";import"./useTimeout.ed91a96d.js";import"./useScrollTo.fc1f5456.js";import"./animation.9de4462f.js";import"./index.045fcbee.js";import"./index.f10db5c5.js";import"./EllipsisOutlined.078d6602.js";import"./types.4f1ac25d.js";import"./isEqual.9fc12f76.js";import"./toInteger.daaae8e7.js";import"./DownOutlined.b7602ab2.js";import"./index.86bc52fe.js";import"./usePageContext.0b56e62c.js";import"./transButton.1a8cd0b2.js";import"./ArrowLeftOutlined.ae61cb07.js";const b=e((()=>o((()=>import("./index.238a01e8.js")),["/assets/index.238a01e8.js","/assets/index.d4318adc.js","/assets/index.3100f8d1.css","/assets/vendor.783aefe0.js","/assets/vendor.4a5fa02d.css","/assets/download.07e3ba88.js"])));var v=t({components:{CollapseContainer:g,QrCode:b,PageWrapper:f},setup(){const e=l(null);return{qrCodeUrl:"https://www.vvbin.cn",LogoImg:a,download:function(){const o=r(e);o&&o.download("文件名")},qrRef:e}}});const j=u("data-v-40460a35");s("data-v-40460a35");const x={class:"flex flex-wrap"},q=p(" 下载 "),C=m("div",{class:"msg"},"(在线logo会导致图片跨域，需要下载图片需要自行解决跨域问题)",-1);i();const _=j(((e,o,t,l,a,r)=>{const s=d("QrCode"),i=d("CollapseContainer"),u=d("a-button"),p=d("PageWrapper");return n(),c(p,{title:"二维码组件使用示例"},{default:j((()=>[m("div",x,[m(i,{title:"基础示例",canExpan:!0,class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl},null,8,["value"])])),_:1}),m(i,{title:"渲染成img标签示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,tag:"img"},null,8,["value"])])),_:1}),m(i,{title:"配置样式示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,options:{color:{dark:"#55D187"}}},null,8,["value"])])),_:1}),m(i,{title:"本地logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,logo:e.LogoImg},null,8,["value","logo"])])),_:1}),m(i,{title:"在线logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,logo:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",options:{color:{dark:"#55D187"}}},null,8,["value"])])),_:1}),m(i,{title:"logo配置示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,logo:{src:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",logoSize:.2,borderSize:.05,borderRadius:50,bgColor:"blue"}},null,8,["value","logo"])])),_:1}),m(i,{title:"下载示例",class:"text-center qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,ref:"qrRef",logo:e.LogoImg},null,8,["value","logo"]),m(u,{class:"mb-2",type:"primary",onClick:e.download},{default:j((()=>[q])),_:1},8,["onClick"]),C])),_:1}),m(i,{title:"配置大小示例",class:"text-center qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,width:300},null,8,["value"])])),_:1})])])),_:1})}));v.render=_,v.__scopeId="data-v-40460a35";export default v;