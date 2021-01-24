import{a as e}from"./index.4936604d.js";import{r as t,e as r,s as a,b0 as o,d as n,h as s,o as i,i as l,w as d,j as m,m as c}from"./index.d4318adc.js";import{_ as p}from"./index.025c1173.js";import"./index.85243e6a.js";import"./domUtils.96378b32.js";import"./_stringToArray.3c05aa00.js";import"./RightOutlined.aa2d326a.js";import"./index.95c10fda.js";import"./useTimeout.ed91a96d.js";import"./useScrollTo.fc1f5456.js";import"./animation.9de4462f.js";import"./vendor.783aefe0.js";import"./index.045fcbee.js";import"./index.f10db5c5.js";import"./EllipsisOutlined.078d6602.js";import"./types.4f1ac25d.js";import"./isEqual.9fc12f76.js";import"./toInteger.daaae8e7.js";import"./DownOutlined.b7602ab2.js";import"./index.86bc52fe.js";import"./usePageContext.0b56e62c.js";import"./transButton.1a8cd0b2.js";import"./ArrowLeftOutlined.ae61cb07.js";const u=Symbol("watermark-dom");var f=n({components:{CollapseContainer:e,PageWrapper:p},setup(){const e=t(null),{setWatermark:n,clear:s}=function(e=t(document.body)){let n=()=>{};const s=u.toString(),i=()=>{const t=document.getElementById(s);if(t){const a=r(e);a&&a.removeChild(t)}window.removeEventListener("resize",n)},l=t=>{i();const a=document.createElement("canvas");a.width=300,a.height=240;const o=a.getContext("2d");o&&(o.rotate(-20*Math.PI/120),o.font="15px Vedana",o.fillStyle="rgba(0, 0, 0, 0.15)",o.textAlign="left",o.textBaseline="middle",o.fillText(t,a.width/20,a.height));const n=document.createElement("div");n.id=s,n.style.pointerEvents="none",n.style.top="3px",n.style.left="0px",n.style.position="absolute",n.style.zIndex="100000",n.style.width=document.documentElement.clientWidth+"px",n.style.height=document.documentElement.clientHeight+"px",n.style.background="url("+a.toDataURL("image/png")+") left top repeat";const l=r(e);return l&&l.appendChild(n),s};return{setWatermark:function(e){l(e),n=()=>{l(e)},window.addEventListener("resize",n),o()&&a((()=>{i()}))},clear:i}}();return{setWatermark:n,clear:s,areaRef:e}}});const j=c(" Create "),x=c("Clear"),g=c(" Reset ");f.render=function(e,t,r,a,o,n){const c=s("a-button"),p=s("CollapseContainer"),u=s("PageWrapper");return i(),l(u,{title:"水印示例"},{default:d((()=>[m(p,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Global WaterMark"},{default:d((()=>[m(c,{type:"primary",class:"mr-2",onClick:t[1]||(t[1]=t=>e.setWatermark("WaterMark Info"))},{default:d((()=>[j])),_:1}),m(c,{color:"error",class:"mr-2",onClick:e.clear},{default:d((()=>[x])),_:1},8,["onClick"]),m(c,{color:"warning",class:"mr-2",onClick:t[2]||(t[2]=t=>e.setWatermark("WaterMark Info New"))},{default:d((()=>[g])),_:1})])),_:1})])),_:1})};export default f;