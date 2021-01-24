import{_ as e,a as t}from"./index.92f54cda.js";import{o as i}from"./select.ffd209a9.js";import{d}from"./table.a18d2481.js";import{d as o,h as n,o as a,i as s,j as r}from"./index.d4318adc.js";import{u as p}from"./useTable.d2ecf713.js";import"./index.c1942f06.js";import"./SearchOutlined.1eeb08db.js";import"./CheckOutlined.eb5170fb.js";import"./DownOutlined.b7602ab2.js";import"./index.a4c274dd.js";import"./index.1001bbac.js";import"./responsiveObserve.c545f1cc.js";import"./index.a44db8e0.js";import"./findIndex.70092315.js";import"./isEqual.9fc12f76.js";import"./_baseProperty.74f89655.js";import"./toInteger.daaae8e7.js";import"./index.e9368810.js";import"./index.82d704b9.js";import"./index.dd159981.js";import"./UpOutlined.2df25379.js";import"./index.0077ae0f.js";import"./EyeOutlined.604588f6.js";import"./index.4a49fe1e.js";import"./colors.c7aea5b4.js";import"./RightOutlined.aa2d326a.js";import"./RedoOutlined.c1fe4105.js";import"./index.f10db5c5.js";import"./EllipsisOutlined.078d6602.js";import"./types.4f1ac25d.js";import"./Tree.55e2632d.js";import"./util.7756fc52.js";import"./useAttrs.c9883edb.js";import"./index.95c10fda.js";import"./index.d6dfd0ac.js";import"./uuid.fb512c8a.js";import"./index.104b2d4a.js";import"./DeleteOutlined.3d9090d2.js";import"./index.4ee3a724.js";import"./useTimeout.ed91a96d.js";import"./useWindowSizeFn.a2c0d2e0.js";import"./index.4936604d.js";import"./index.85243e6a.js";import"./domUtils.96378b32.js";import"./_stringToArray.3c05aa00.js";import"./useScrollTo.fc1f5456.js";import"./animation.9de4462f.js";import"./FullscreenOutlined.c77cdd98.js";import"./index.c8e19096.js";import"./index.c20afe43.js";import"./index.7a0b53c5.js";import"./LeftOutlined.9f33daa5.js";import"./download.07e3ba88.js";import"./index.caa6a329.js";import"./DoubleLeftOutlined.be2c9db2.js";import"./DoubleRightOutlined.ed97fe7d.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c9242ea7.js";import"./transButton.1a8cd0b2.js";import"./CaretDownFilled.04263475.js";import"./clickOutside.dab4d16e.js";import"./useSortable.37493f58.js";import"./SettingOutlined.b48f4509.js";import"./useExpose.f5a34c3c.js";import"./useForm.227ddd88.js";import"./vendor.783aefe0.js";const m=[{title:"输入框",dataIndex:"name",edit:!0,editComponentProps:{prefix:"$"},width:200},{title:"默认输入状态",dataIndex:"name7",edit:!0,editable:!0,width:200},{title:"输入框校验",dataIndex:"name1",edit:!0,editRule:!0,width:200},{title:"输入框函数校验",dataIndex:"name2",edit:!0,editRule:async e=>"2"===e?"不能输入该值":"",width:200},{title:"数字输入框",dataIndex:"id",edit:!0,editRule:!0,editComponent:"InputNumber",width:200},{title:"下拉框",dataIndex:"name3",edit:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"远程下拉",dataIndex:"name4",edit:!0,editComponent:"ApiSelect",editComponentProps:{api:i},width:200},{title:"勾选框",dataIndex:"name5",edit:!0,editComponent:"Checkbox",editValueMap:e=>e?"是":"否",width:200},{title:"开关",dataIndex:"name6",edit:!0,editComponent:"Switch",editValueMap:e=>e?"开":"关",width:200}];var l=o({components:{BasicTable:e,EditTableHeaderIcon:t},setup(){const[e]=p({title:"可编辑单元格示例",api:d,columns:m,showIndexColumn:!1,bordered:!0});return{registerTable:e,handleEditEnd:function({record:e,index:t,key:i,value:d}){},handleEditCancel:function(){}}}});const j={class:"p-4"};l.render=function(e,t,i,d,o,p){const m=n("BasicTable");return a(),s("div",j,[r(m,{onRegister:e.registerTable,onEditEnd:e.handleEditEnd,onEditCancel:e.handleEditCancel},null,8,["onRegister","onEditEnd","onEditCancel"])])};export default l;