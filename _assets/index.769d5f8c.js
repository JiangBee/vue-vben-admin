let e=document.createElement("style");e.innerHTML=".high-form[data-v-0d2bde26]{padding-bottom:48px}",document.head.appendChild(e);import{aR as o,a as t,r as i,d0 as s,d1 as r,i as n,o as l,j as d,k as p,bi as a,p as m}from"./index.0d38f9a5.js";import"./xlsx.a48e520c.js";import"./useSortable.e2939103.js";import"./index.c78520ea.js";import"./Trigger.92fe36b8.js";import"./omit.d1225ee8.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.9686ab5b.js";import"./CheckOutlined.3634c842.js";import{s as c}from"./index.fe58e67f.js";import"./colors.f6e9cd64.js";import"./index.2dea14f7.js";import"./RightOutlined.34192766.js";import"./index.09e8fcf0.js";import"./types.ef193411.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.ff8c0c9d.js";import"./_baseFor.f4e5f03f.js";import"./index.1450a339.js";import"./index.a172b251.js";import"./index.7cf09532.js";import"./index.e9197d83.js";import"./UpOutlined.876ce6e7.js";import"./LeftOutlined.f59506e3.js";import"./index.f3a0573c.js";import"./index.b568d9c4.js";import"./index.1a93a451.js";import"./index.9ac06134.js";import"./index.8f94c8c5.js";import"./zh_CN.0242bd16.js";import"./index.f6ffef62.js";import"./index.ca8253ee.js";import"./CaretDownFilled.b77157b9.js";import"./index.34b43b67.js";import"./CheckOutlined.a3f2b329.js";import"./CloseOutlined.0a163b20.js";import"./index.b3204b6d.js";import"./FullscreenOutlined.f9c823d9.js";import"./LeftOutlined.3350d894.js";import"./LoadingOutlined.25b80990.js";import"./TableAction.cce3f00c.js";import"./RightOutlined.a931e0fb.js";import"./SettingOutlined.43c82267.js";import"./useTimeout.9e854957.js";import"./tsxHelper.b0075210.js";import"./index.7b626059.js";import"./domUtils.bd8f2ecf.js";import"./index.d865d4a3.js";import"./animation.b6b70e60.js";import"./useScrollTo.1e47dcd6.js";import"./useAttrs.ade69aae.js";import"./index.144ebe51.js";import{u as f}from"./useForm.d479c77f.js";import"./index.7705d5dd.js";import"./useWindowSizeFn.b9a528aa.js";import"./uuid.40269c00.js";import"./useExpose.b7f2e5b6.js";import"./useTable.f8e6f880.js";import u from"./PersonTable.79e0de2c.js";const b=o((()=>import("./PageFooter.7e7e719d.js"))),j=[{label:"付晓晓",value:"1"},{label:"周毛毛",value:"2"}],x=[{label:"私密",value:"1"},{label:"公开",value:"2"}],P=[{field:"f1",component:"Input",label:"仓库名",required:!0},{field:"f2",component:"Input",label:"仓库域名",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"仓库管理员",componentProps:{options:j},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"审批人",componentProps:{options:j},required:!0},{field:"f5",component:"RangePicker",label:"生效日期",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"仓库类型",componentProps:{options:x},required:!0,colProps:{offset:2}}],g=[{field:"t1",component:"Input",label:"任务名",required:!0},{field:"t2",component:"Input",label:"任务描述",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"执行人",componentProps:{options:j},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"责任人",componentProps:{options:j},required:!0},{field:"t5",component:"TimePicker",label:"生效日期",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"任务类型",componentProps:{options:x},required:!0,colProps:{offset:2}}];var h=t({components:{BasicForm:c,PersonTable:u,PageFooter:b},setup(){const e=i(null),[o,{validate:t}]=f({baseColProps:{span:6},schemas:P,showActionButtonGroup:!1}),[s,{validate:r}]=f({baseColProps:{span:6},schemas:g,showActionButtonGroup:!1});return{register:o,registerTask:s,submitAll:async function(){try{e.value;const[o,i]=await Promise.all([t(),r()])}catch(e){}},tableRef:e}}});const v=a("data-v-0d2bde26");s("data-v-0d2bde26");const T={class:"high-form"},q=m(" 高级表单常见于一次性输入和提交大批量数据的场景。 "),O={class:"m-5"},_=m("提交");r();const F=v(((e,o,t,i,s,r)=>{const a=n("a-page-header"),m=n("BasicForm"),c=n("a-card"),f=n("PersonTable"),u=n("a-button"),b=n("PageFooter");return l(),d("div",T,[p(a,{title:"高级表单",ghost:!1},{default:v((()=>[q])),_:1}),p("div",O,[p(c,{title:"仓库管理",bordered:!1},{default:v((()=>[p(m,{onRegister:e.register},null,8,["onRegister"])])),_:1}),p(c,{title:"任务管理",bordered:!1,class:"mt-5"},{default:v((()=>[p(m,{onRegister:e.registerTask},null,8,["onRegister"])])),_:1}),p(c,{title:"成员管理",bordered:!1,class:"mt-5"},{default:v((()=>[p(f,{ref:"tableRef"},null,512)])),_:1})]),p(b,null,{right:v((()=>[p(u,{type:"primary",onClick:e.submitAll},{default:v((()=>[_])),_:1},8,["onClick"])])),_:1})])}));h.render=F,h.__scopeId="data-v-0d2bde26";export default h;