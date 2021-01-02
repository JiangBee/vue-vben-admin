import{a as e,r as i,h as t,f as o,i as s,o as n,j as a,k as l,w as c,p as r}from"./index.0d38f9a5.js";import"./xlsx.a48e520c.js";import"./useSortable.e2939103.js";import"./index.c78520ea.js";import"./Trigger.92fe36b8.js";import"./omit.d1225ee8.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.9686ab5b.js";import"./CheckOutlined.3634c842.js";import"./index.fe58e67f.js";import"./colors.f6e9cd64.js";import"./index.2dea14f7.js";import"./RightOutlined.34192766.js";import"./index.09e8fcf0.js";import"./types.ef193411.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.ff8c0c9d.js";import"./_baseFor.f4e5f03f.js";import"./index.1450a339.js";import"./index.a172b251.js";import"./index.7cf09532.js";import"./index.e9197d83.js";import"./UpOutlined.876ce6e7.js";import"./LeftOutlined.f59506e3.js";import"./index.f3a0573c.js";import"./index.b568d9c4.js";import"./index.1a93a451.js";import"./index.9ac06134.js";import"./index.8f94c8c5.js";import"./zh_CN.0242bd16.js";import"./index.f6ffef62.js";import"./index.ca8253ee.js";import"./CaretDownFilled.b77157b9.js";import"./index.34b43b67.js";import"./CheckOutlined.a3f2b329.js";import"./CloseOutlined.0a163b20.js";import{s as m}from"./index.b3204b6d.js";import"./FullscreenOutlined.f9c823d9.js";import"./LeftOutlined.3350d894.js";import"./LoadingOutlined.25b80990.js";import"./TableAction.cce3f00c.js";import"./RightOutlined.a931e0fb.js";import"./SettingOutlined.43c82267.js";import"./useTimeout.9e854957.js";import"./tsxHelper.b0075210.js";import"./index.7b626059.js";import"./domUtils.bd8f2ecf.js";import"./index.d865d4a3.js";import"./animation.b6b70e60.js";import"./useScrollTo.1e47dcd6.js";import"./useAttrs.ade69aae.js";import"./index.144ebe51.js";import"./useForm.d479c77f.js";import"./index.7705d5dd.js";import"./useWindowSizeFn.b9a528aa.js";import"./uuid.40269c00.js";import"./useExpose.b7f2e5b6.js";import{getBasicColumns as d,getBasicShortColumns as f}from"./tableData.66c8e128.js";import{d as p}from"./table.ab1e6f6c.js";var u=e({components:{BasicTable:m},setup(){const e=i(null),{createMessage:s}=t();function n(){const i=o(e);if(!i)throw new Error("tableAction is null");return i}return{tableRef:e,api:p,columns:d(),changeLoading:function(){n().setLoading(!0),setTimeout((()=>{n().setLoading(!1)}),1e3)},changeColumns:function(){n().setColumns(f())},reloadTable:function(){n().setColumns(d()),n().reload({page:1})},getColumn:function(){s.info("请在控制台查看！")},getTableData:function(){s.info("请在控制台查看！")},getPagination:function(){s.info("请在控制台查看！")},setPaginationInfo:function(){n().setPagination({current:2}),n().reload()},getSelectRowList:function(){s.info("请在控制台查看！")},getSelectRowKeyList:function(){s.info("请在控制台查看！")},setSelectedRowKeyList:function(){n().setSelectedRowKeys(["0","1","2"])},clearSelect:function(){n().clearSelectedRowKeys()}}}});const j={class:"p-4"},b={class:"mb-4"},C=r("还原"),g=r("开启loading"),x=r("更改Columns"),k=r("获取Columns"),w=r("获取表格数据"),S=r("跳转到第2页"),R={class:"mb-4"},_=r("获取选中行"),L=r("获取选中行Key"),T=r("设置选中行"),h=r("清空选中行"),O=r("获取分页信息");u.render=function(e,i,t,o,r,m){const d=s("a-button"),f=s("BasicTable");return n(),a("div",j,[l("div",b,[l(d,{class:"mr-2",onClick:e.reloadTable},{default:c((()=>[C])),_:1},8,["onClick"]),l(d,{class:"mr-2",onClick:e.changeLoading},{default:c((()=>[g])),_:1},8,["onClick"]),l(d,{class:"mr-2",onClick:e.changeColumns},{default:c((()=>[x])),_:1},8,["onClick"]),l(d,{class:"mr-2",onClick:e.getColumn},{default:c((()=>[k])),_:1},8,["onClick"]),l(d,{class:"mr-2",onClick:e.getTableData},{default:c((()=>[w])),_:1},8,["onClick"]),l(d,{class:"mr-2",onClick:e.setPaginationInfo},{default:c((()=>[S])),_:1},8,["onClick"])]),l("div",R,[l(d,{class:"mr-2",onClick:e.getSelectRowList},{default:c((()=>[_])),_:1},8,["onClick"]),l(d,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:c((()=>[L])),_:1},8,["onClick"]),l(d,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:c((()=>[T])),_:1},8,["onClick"]),l(d,{class:"mr-2",onClick:e.clearSelect},{default:c((()=>[h])),_:1},8,["onClick"]),l(d,{class:"mr-2",onClick:e.getPagination},{default:c((()=>[O])),_:1},8,["onClick"])]),l(f,{canResize:!1,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref:"tableRef",api:e.api,columns:e.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])};export default u;