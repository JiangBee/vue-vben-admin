import{d as s,a0 as a,cp as t,cq as e,h as r,o as n,i as o,j as p,l as i,bw as c,m as l}from"./index.d4318adc.js";import{A as f}from"./index.86bc52fe.js";import{P as d}from"./index.104b2d4a.js";import"./vendor.783aefe0.js";import"./types.4f1ac25d.js";import"./CheckOutlined.eb5170fb.js";var x=s({name:"GrowCard",components:{Progress:d,Avatar:f},props:{info:{type:Object,default:null}},setup:s=>({prefixCls:"task-card",text:a((()=>{const{status:a}=s.info||{};return"active"===a?"进度正常":"exception"===a?"进度滞后":"项目完成"}))})});const u=c("data-v-43ac58a2");t("data-v-43ac58a2");const m=p("span",null,"进度",-1),v=l(" 更新日期: "),_=l("+3");e();const C=u(((s,a,t,e,c,l)=>{const f=r("Progress"),d=r("Avatar");return n(),o("div",{class:s.prefixCls},[p("div",{class:`${s.prefixCls}-header`},[p("div",{class:`${s.prefixCls}__info`},[p("span",{class:`${s.prefixCls}__title`},i(s.info.title),3),p("span",{class:`${s.prefixCls}__desc`},i(s.info.desc),3)],2),p("span",{class:`${s.prefixCls}__tag ${s.info.status}`},i(s.info.text),3)],2),p("div",{class:`${s.prefixCls}-body mt-5`},[p("div",{class:`${s.prefixCls}__process-nfo`},[m,p("span",null,i(s.info.percent)+"%",1)],2),p(f,{percent:s.info.percent,showInfo:!1,status:s.info.status},null,8,["percent","status"])],2),p("div",{class:`${s.prefixCls}-footer`},[p("span",{class:`${s.prefixCls}__date`},[v,p("span",null,i(s.info.updateTime),1)],2),p("div",{class:`${s.prefixCls}__avatar`},[p(d,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),p(d,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"}),p(d,null,{default:u((()=>[_])),_:1})],2)],2)],2)}));x.render=C,x.__scopeId="data-v-43ac58a2";export default x;