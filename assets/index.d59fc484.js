var e=Object.assign;import{d as t,r as i,a as r,aE as o,cp as s,cq as d,h as n,o as a,i as p,bw as m,j as c,H as j,b9 as l,k as f}from"./index.d4318adc.js";import{S as u}from"./index.a47ef97f.js";import x from"./Step1.db97ca6d.js";import b from"./Step2.7919ffba.js";import S from"./Step3.c133788d.js";import{_ as v}from"./index.025c1173.js";import"./vendor.783aefe0.js";import"./CheckOutlined.eb5170fb.js";import"./index.c8e19096.js";import"./index.0077ae0f.js";import"./SearchOutlined.1eeb08db.js";import"./EyeOutlined.604588f6.js";import"./index.c1942f06.js";import"./DownOutlined.b7602ab2.js";import"./index.a4c274dd.js";import"./index.1001bbac.js";import"./responsiveObserve.c545f1cc.js";import"./index.a44db8e0.js";import"./findIndex.70092315.js";import"./isEqual.9fc12f76.js";import"./_baseProperty.74f89655.js";import"./toInteger.daaae8e7.js";import"./index.e9368810.js";import"./index.82d704b9.js";import"./index.dd159981.js";import"./UpOutlined.2df25379.js";import"./index.4a49fe1e.js";import"./colors.c7aea5b4.js";import"./RightOutlined.aa2d326a.js";import"./RedoOutlined.c1fe4105.js";import"./index.f10db5c5.js";import"./EllipsisOutlined.078d6602.js";import"./types.4f1ac25d.js";import"./Tree.55e2632d.js";import"./util.7756fc52.js";import"./useAttrs.c9883edb.js";import"./index.95c10fda.js";import"./index.d6dfd0ac.js";import"./uuid.fb512c8a.js";import"./index.104b2d4a.js";import"./DeleteOutlined.3d9090d2.js";import"./index.4ee3a724.js";import"./useTimeout.ed91a96d.js";import"./useWindowSizeFn.a2c0d2e0.js";import"./index.4936604d.js";import"./index.85243e6a.js";import"./domUtils.96378b32.js";import"./_stringToArray.3c05aa00.js";import"./useScrollTo.fc1f5456.js";import"./animation.9de4462f.js";import"./FullscreenOutlined.c77cdd98.js";import"./index.c20afe43.js";import"./index.7a0b53c5.js";import"./LeftOutlined.9f33daa5.js";import"./download.07e3ba88.js";import"./data.2505cb7f.js";import"./useForm.227ddd88.js";import"./index.b625d1ea.js";import"./index.6f53dffb.js";import"./index.045fcbee.js";import"./index.86bc52fe.js";import"./usePageContext.0b56e62c.js";import"./transButton.1a8cd0b2.js";import"./ArrowLeftOutlined.ae61cb07.js";var O=t({components:{Step1:x,Step2:b,Step3:S,PageWrapper:v,[u.name]:u,[u.Step.name]:u.Step},setup(){const t=i(0),s=r({initSetp2:!1,initSetp3:!1});return e({current:t,handleStep1Next:function(e){t.value++,s.initSetp2=!0},handleStep2Next:function(e){t.value++,s.initSetp3=!0},handleRedo:function(){t.value=0,s.initSetp2=!1,s.initSetp3=!1},handleStepPrev:function(){t.value--}},o(s))}});const h=m("data-v-6a09ea8d");s("data-v-6a09ea8d");const g={class:"step-form-form"},N={class:"mt-5"};d();const P=h(((e,t,i,r,o,s)=>{const d=n("a-step"),m=n("a-steps"),u=n("Step1"),x=n("Step2"),b=n("Step3"),S=n("PageWrapper");return a(),p(S,{title:"分步表单",contentBackground:"",content:" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",contentClass:"p-4"},{default:h((()=>[c("div",g,[c(m,{current:e.current},{default:h((()=>[c(d,{title:"填写转账信息"}),c(d,{title:"确认转账信息"}),c(d,{title:"完成"})])),_:1},8,["current"])]),c("div",N,[j(c(u,{onNext:e.handleStep1Next},null,8,["onNext"]),[[l,0===e.current]]),e.initSetp2?j((a(),p(x,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[l,1===e.current]]):f("",!0),e.initSetp3?j((a(),p(b,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[l,2===e.current]]):f("",!0)])])),_:1})}));O.render=P,O.__scopeId="data-v-6a09ea8d";export default O;