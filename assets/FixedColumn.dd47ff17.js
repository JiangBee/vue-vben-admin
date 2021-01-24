import{_ as e}from"./index.92f54cda.js";import{d as i}from"./table.a18d2481.js";import{d as t,h as o,o as d,i as s,j as n,w as r}from"./index.d4318adc.js";import{g as a}from"./index.a4c274dd.js";import{u as m}from"./useTable.d2ecf713.js";import"./index.c1942f06.js";import"./SearchOutlined.1eeb08db.js";import"./CheckOutlined.eb5170fb.js";import"./DownOutlined.b7602ab2.js";import"./index.a44db8e0.js";import"./index.1001bbac.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.70092315.js";import"./isEqual.9fc12f76.js";import"./_baseProperty.74f89655.js";import"./toInteger.daaae8e7.js";import"./index.f10db5c5.js";import"./RightOutlined.aa2d326a.js";import"./EllipsisOutlined.078d6602.js";import"./types.4f1ac25d.js";import"./index.caa6a329.js";import"./LeftOutlined.9f33daa5.js";import"./DoubleLeftOutlined.be2c9db2.js";import"./DoubleRightOutlined.ed97fe7d.js";import"./zh_CN.8094f4d6.js";import"./uuid.fb512c8a.js";import"./index.104b2d4a.js";import"./util.7756fc52.js";import"./DeleteOutlined.3d9090d2.js";import"./EyeOutlined.604588f6.js";import"./index.c20afe43.js";import"./index.95c10fda.js";import"./scrollTo.c9242ea7.js";import"./transButton.1a8cd0b2.js";import"./CaretDownFilled.04263475.js";import"./clickOutside.dab4d16e.js";import"./domUtils.96378b32.js";import"./_stringToArray.3c05aa00.js";import"./index.82d704b9.js";import"./index.dd159981.js";import"./UpOutlined.2df25379.js";import"./index.0077ae0f.js";import"./useSortable.37493f58.js";import"./useTimeout.ed91a96d.js";import"./useWindowSizeFn.a2c0d2e0.js";import"./index.4ee3a724.js";import"./useAttrs.c9883edb.js";import"./index.4936604d.js";import"./index.85243e6a.js";import"./useScrollTo.fc1f5456.js";import"./animation.9de4462f.js";import"./FullscreenOutlined.c77cdd98.js";import"./index.c8e19096.js";import"./SettingOutlined.b48f4509.js";import"./useExpose.f5a34c3c.js";import"./useForm.227ddd88.js";import"./vendor.783aefe0.js";import"./index.e9368810.js";import"./index.4a49fe1e.js";import"./colors.c7aea5b4.js";import"./RedoOutlined.c1fe4105.js";import"./Tree.55e2632d.js";import"./index.d6dfd0ac.js";import"./index.7a0b53c5.js";import"./download.07e3ba88.js";const p=[{title:"ID",dataIndex:"id",fixed:"left",width:280},{title:"姓名",dataIndex:"name",width:260},{title:"地址",dataIndex:"address"},{title:"编号",dataIndex:"no",width:300},{title:"开始时间",width:200,dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}];var l=t({components:{BasicTable:e,TableAction:a},setup(){const[e]=m({title:"TableAction组件及固定列示例",api:i,columns:p,rowSelection:{type:"radio"},bordered:!0,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:e,handleDelete:function(e){},handleOpen:function(e){}}}});const c={class:"p-4"};l.render=function(e,i,t,a,m,p){const l=o("TableAction"),j=o("BasicTable");return d(),s("div",c,[n(j,{onRegister:e.registerTable},{action:r((({record:i})=>[n(l,{actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:e.handleDelete.bind(null,i)}],dropDownActions:[{label:"启用",onClick:e.handleOpen.bind(null,i)}]},null,8,["actions","dropDownActions"])])),_:1},8,["onRegister"])])};export default l;