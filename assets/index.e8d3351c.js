import{a as e}from"./index.4936604d.js";import{d as o,g as n,h as s,o as a,i as r,w as t,j as i,m as l}from"./index.d4318adc.js";import{_ as c}from"./index.025c1173.js";import"./index.85243e6a.js";import"./domUtils.96378b32.js";import"./_stringToArray.3c05aa00.js";import"./RightOutlined.aa2d326a.js";import"./index.95c10fda.js";import"./useTimeout.ed91a96d.js";import"./useScrollTo.fc1f5456.js";import"./animation.9de4462f.js";import"./vendor.783aefe0.js";import"./index.045fcbee.js";import"./index.f10db5c5.js";import"./EllipsisOutlined.078d6602.js";import"./types.4f1ac25d.js";import"./isEqual.9fc12f76.js";import"./toInteger.daaae8e7.js";import"./DownOutlined.b7602ab2.js";import"./index.86bc52fe.js";import"./usePageContext.0b56e62c.js";import"./transButton.1a8cd0b2.js";import"./ArrowLeftOutlined.ae61cb07.js";var d=o({components:{CollapseContainer:e,PageWrapper:c},setup(){const{createMessage:e,createConfirm:o,createSuccessModal:s,createInfoModal:a,createErrorModal:r,createWarningModal:t,notification:i}=n(),{info:l,success:c,warning:d,error:m}=e;return{infoMsg:l,successMsg:c,warningMsg:d,errorMsg:m,handleLoading:function(){e.loading("Loading...")},handleConfirm:function(e){o({iconType:e,title:"Tip",content:"content message..."})},handleSuccessModal:function(){s({title:"Tip",content:"content message..."})},handleErrorModal:function(){r({title:"Tip",content:"content message..."})},handleWarningModal:function(){t({title:"Tip",content:"content message..."})},handleInfoModal:function(){a({title:"Tip",content:"content message..."})},handleNotify:function(){i.success({message:"Tip",description:"content message..."})}}}});const m=l(" Info "),f=l(" Success "),u=l(" Warning "),g=l(" Error "),p=l(" Loading "),C=l("Info"),h=l("Warning"),j=l("Success"),M=l("Error"),_=l("Info"),k=l("Success"),w=l("Error"),b=l("Warning"),x=l("Success");d.render=function(e,o,n,l,c,d){const T=s("a-button"),E=s("CollapseContainer"),S=s("PageWrapper");return a(),r(S,{title:"消息示例"},{default:t((()=>[i(E,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Message"},{default:t((()=>[i(T,{onClick:o[1]||(o[1]=o=>e.infoMsg("Info message")),class:"mr-2"},{default:t((()=>[m])),_:1}),i(T,{onClick:o[2]||(o[2]=o=>e.successMsg("Success message")),class:"mr-2",color:"success"},{default:t((()=>[f])),_:1}),i(T,{onClick:o[3]||(o[3]=o=>e.warningMsg("Warning message")),class:"mr-2",color:"warning"},{default:t((()=>[u])),_:1}),i(T,{onClick:o[4]||(o[4]=o=>e.errorMsg("Error message")),class:"mr-2",color:"error"},{default:t((()=>[g])),_:1}),i(T,{onClick:e.handleLoading,class:"mr-2",type:"primary"},{default:t((()=>[p])),_:1},8,["onClick"])])),_:1}),i(E,{class:"px-20 bg-white w-full h-32 rounded-md mt-5",title:"Comfirm"},{default:t((()=>[i(T,{onClick:o[5]||(o[5]=o=>e.handleConfirm("info")),class:"mr-2"},{default:t((()=>[C])),_:1}),i(T,{onClick:o[6]||(o[6]=o=>e.handleConfirm("warning")),color:"warning",class:"mr-2"},{default:t((()=>[h])),_:1}),i(T,{onClick:o[7]||(o[7]=o=>e.handleConfirm("success")),color:"success",class:"mr-2"},{default:t((()=>[j])),_:1}),i(T,{onClick:o[8]||(o[8]=o=>e.handleConfirm("error")),color:"error",class:"mr-2"},{default:t((()=>[M])),_:1})])),_:1}),i(E,{class:"px-20 bg-white w-full h-32 rounded-md mt-5",title:"Modal"},{default:t((()=>[i(T,{onClick:e.handleInfoModal,class:"mr-2"},{default:t((()=>[_])),_:1},8,["onClick"]),i(T,{onClick:e.handleSuccessModal,color:"success",class:"mr-2"},{default:t((()=>[k])),_:1},8,["onClick"]),i(T,{onClick:e.handleErrorModal,color:"error",class:"mr-2"},{default:t((()=>[w])),_:1},8,["onClick"]),i(T,{onClick:e.handleWarningModal,color:"warning",class:"mr-2"},{default:t((()=>[b])),_:1},8,["onClick"])])),_:1}),i(E,{class:"px-20 bg-white w-full h-32 rounded-md mt-5",title:"Notification 用法与上面一致"},{default:t((()=>[i(T,{onClick:e.handleNotify,color:"success",class:"mr-2"},{default:t((()=>[x])),_:1},8,["onClick"])])),_:1})])),_:1})};export default d;