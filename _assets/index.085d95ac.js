let e=document.createElement("style");e.innerHTML=".demo[data-v-4fb705d6]{background:#fff}",document.head.appendChild(e);import{a as t,g as s,dz as a,I as o,dA as n,d9 as r,da as i,i as d,o as l,j as p,bp as c,k as m,n as u,p as f}from"./index.a6ab9244.js";import"./xlsx.9d951958.js";import"./Trigger.c98260cb.js";import"./omit.bdc49d67.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.abe3aef5.js";import{A as b}from"./index.278c333c.js";import"./index.1ba525ec.js";import"./index.6a677bcd.js";import"./RightOutlined.095e9d4c.js";import"./usePageContext.5e891747.js";import"./types.d260ef98.js";import"./index.c6a9e5cf.js";import"./index.c4bc0140.js";import"./transButton.295c4225.js";import{s as g}from"./index.7bdbbe2a.js";import j from"./CurrentPermissionMode.b67a5126.js";var R=t({components:{Alert:b,CurrentPermissionMode:j,PageWrapper:g},setup(){const{changeRole:e}=n();return{userStore:s,RoleEnum:a,isSuper:o((()=>s.getRoleListState.includes(a.SUPER))),isTest:o((()=>s.getRoleListState.includes(a.TEST))),changeRole:e}}});const S=c("data-v-4fb705d6");r("data-v-4fb705d6");const x=f(" 当前角色: "),E={class:"mt-4"},y=f(" 权限切换(请先切换权限模式为前端角色权限模式): ");i();const T=S(((e,t,s,a,o,n)=>{const r=d("CurrentPermissionMode"),i=d("Alert"),c=d("a-button"),b=d("a-button-group"),g=d("PageWrapper");return l(),p(g,{title:"前端权限示例",contentBackgrond:"",contentClass:"p-4",content:"由于刷新的时候会请求用户信息接口，会根据接口重置角色信息，所以刷新后界面会恢复原样，如果不需要，可以注释 src/layout/default/index内的获取用户信息接口"},{default:S((()=>[m(r),m("p",null,[x,m("a",null,u(e.userStore.getRoleListState),1)]),m(i,{class:"mt-4",type:"info",message:"点击后请查看左侧菜单变化","show-icon":""}),m("div",E,[y,m(b,null,{default:S((()=>[m(c,{onClick:t[1]||(t[1]=t=>e.changeRole(e.RoleEnum.SUPER)),type:e.isSuper?"primary":"default"},{default:S((()=>[f(u(e.RoleEnum.SUPER),1)])),_:1},8,["type"]),m(c,{onClick:t[2]||(t[2]=t=>e.changeRole(e.RoleEnum.TEST)),type:e.isTest?"primary":"default"},{default:S((()=>[f(u(e.RoleEnum.TEST),1)])),_:1},8,["type"])])),_:1})])])),_:1})}));R.render=T,R.__scopeId="data-v-4fb705d6";export default R;