import{a as r,r as e,X as a,o,j as t}from"./index.0d38f9a5.js";import"./xlsx.a48e520c.js";import"./useTimeout.9e854957.js";import{u as i}from"./useECharts.58aba505.js";import{b as s}from"./props.c31746e0.js";var n=r({props:s,setup(){const r=e(null),{setOptions:o,echarts:t}=i(r);return a((()=>{o({tooltip:{trigger:"axis",padding:3,backgroundColor:"rgba(0, 0, 0, .6)",borderColor:"#777",borderWidth:1},legend:{show:!1},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,axisTick:{inside:!0},data:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},yAxis:{type:"value",axisTick:{inside:!0}},series:[{name:"产品一",type:"line",itemStyle:{color:"#5B8FF9"},areaStyle:{color:new t.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#5B8FF9"},{offset:1,color:"rgba(118,168,248, 0)"}],!1),shadowColor:"rgba(118,168,248, 0.9)",shadowBlur:20},data:[134,330,132,101,90,230,210,150,230,400,232,234],animationDuration:3e3}]})})),{chartRef:r}}});n.render=function(r,e,a,i,s,n){return o(),t("div",{ref:"chartRef",style:{height:r.height,width:r.width}},null,4)};export default n;