import{d as e,b2 as l,u as t,a0 as s,e as n,h as r,o,i as u,w as a,j as i}from"./index.d4318adc.js";import"./index.95c10fda.js";import{u as c}from"./useFullScreen.89cf2ebe.js";import{F as d,a as F}from"./FullscreenOutlined.c77cdd98.js";import"./vendor.783aefe0.js";var m=e({name:"FullScreen",components:{FullscreenExitOutlined:d,FullscreenOutlined:F,Tooltip:l},setup(){const{t:e}=t(),{toggleFullscreen:l,isFullscreenRef:r}=c();return{getTitle:s((()=>n(r)?e("layout.header.tooltipExitFull"):e("layout.header.tooltipEntryFull"))),isFullscreen:r,toggleFullscreen:l}}});m.render=function(e,l,t,s,n,c){const d=r("FullscreenOutlined"),F=r("FullscreenExitOutlined"),m=r("Tooltip");return o(),u(m,{title:e.getTitle,placement:"bottom",mouseEnterDelay:.5},{default:a((()=>[i("span",{onClick:l[1]||(l[1]=(...l)=>e.toggleFullscreen&&e.toggleFullscreen(...l))},[e.isFullscreen?(o(),u(F,{key:1})):(o(),u(d,{key:0}))])])),_:1},8,["title","mouseEnterDelay"])};export default m;