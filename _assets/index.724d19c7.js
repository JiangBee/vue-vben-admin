let e=document.createElement("style");e.innerHTML=".vben-setting-button{position:absolute;top:45%;right:0;z-index:10;display:flex;padding:10px;color:#fff;cursor:pointer;background:#018ffb;border-radius:6px 0 0 6px;justify-content:center;align-items:center}.vben-setting-button svg{width:1em;height:1em}",document.head.appendChild(e);import{aR as t,u as n,dK as i,dL as a,dM as o,b1 as l,dA as s,dN as r,bh as E,bv as u,dO as _,dP as d,dQ as g,dR as O,a as S,I as T,ay as N,aM as A,f as R,b2 as M,be as c,aV as I,b7 as D,aY as m,i as C,o as f,j as H,k as p}from"./index.0d38f9a5.js";import{D as b}from"./index.1a93a451.js";import{s as L,u as U}from"./index.4817e080.js";import{S as y}from"./SettingOutlined.43c82267.js";import{d as v}from"./useHeaderSetting.30bed3af.js";const h=t((()=>import("./TypePicker.042090a9.js"))),B=t((()=>import("./ThemePicker.d217fdf9.js"))),W=t((()=>import("./SettingFooter.4504d44f.js"))),G=t((()=>import("./SwitchItem.01ccd83c.js"))),P=t((()=>import("./SelectItem.3720ee8b.js"))),w=t((()=>import("./InputNumberItem.b6bd3070.js"))),{t:F}=n();var x,X;(X=x||(x={}))[X.CHANGE_LAYOUT=0]="CHANGE_LAYOUT",X[X.MENU_HAS_DRAG=1]="MENU_HAS_DRAG",X[X.MENU_ACCORDION=2]="MENU_ACCORDION",X[X.MENU_TRIGGER=3]="MENU_TRIGGER",X[X.MENU_TOP_ALIGN=4]="MENU_TOP_ALIGN",X[X.MENU_COLLAPSED=5]="MENU_COLLAPSED",X[X.MENU_COLLAPSED_SHOW_TITLE=6]="MENU_COLLAPSED_SHOW_TITLE",X[X.MENU_WIDTH=7]="MENU_WIDTH",X[X.MENU_SHOW_SIDEBAR=8]="MENU_SHOW_SIDEBAR",X[X.MENU_THEME=9]="MENU_THEME",X[X.MENU_SPLIT=10]="MENU_SPLIT",X[X.MENU_FIXED=11]="MENU_FIXED",X[X.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE=12]="MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE",X[X.MENU_TRIGGER_MIX_SIDEBAR=13]="MENU_TRIGGER_MIX_SIDEBAR",X[X.HEADER_SHOW=14]="HEADER_SHOW",X[X.HEADER_THEME=15]="HEADER_THEME",X[X.HEADER_FIXED=16]="HEADER_FIXED",X[X.HEADER_SEARCH=17]="HEADER_SEARCH",X[X.TABS_SHOW_QUICK=18]="TABS_SHOW_QUICK",X[X.TABS_SHOW_REDO=19]="TABS_SHOW_REDO",X[X.TABS_SHOW=20]="TABS_SHOW",X[X.LOCK_TIME=21]="LOCK_TIME",X[X.FULL_CONTENT=22]="FULL_CONTENT",X[X.CONTENT_MODE=23]="CONTENT_MODE",X[X.SHOW_BREADCRUMB=24]="SHOW_BREADCRUMB",X[X.SHOW_BREADCRUMB_ICON=25]="SHOW_BREADCRUMB_ICON",X[X.GRAY_MODE=26]="GRAY_MODE",X[X.COLOR_WEAK=27]="COLOR_WEAK",X[X.SHOW_LOGO=28]="SHOW_LOGO",X[X.SHOW_FOOTER=29]="SHOW_FOOTER",X[X.ROUTER_TRANSITION=30]="ROUTER_TRANSITION",X[X.OPEN_PROGRESS=31]="OPEN_PROGRESS",X[X.OPEN_PAGE_LOADING=32]="OPEN_PAGE_LOADING",X[X.OPEN_ROUTE_TRANSITION=33]="OPEN_ROUTE_TRANSITION";const k=[{value:i.FULL,label:F("layout.setting.contentModeFull")},{value:i.FIXED,label:F("layout.setting.contentModeFixed")}],j=[{value:a.CENTER,label:F("layout.setting.topMenuAlignRight")},{value:a.START,label:F("layout.setting.topMenuAlignLeft")},{value:a.END,label:F("layout.setting.topMenuAlignCenter")}],K=[o.ZOOM_FADE,o.FADE,o.ZOOM_OUT,o.FADE_SIDE,o.FADE_BOTTOM,o.FADE_SCALE].map((e=>({label:e,value:e}))),Y=[{title:F("layout.setting.menuTypeSidebar"),mode:l.INLINE,type:s.SIDEBAR},{title:F("layout.setting.menuTypeMix"),mode:l.INLINE,type:s.MIX},{title:F("layout.setting.menuTypeTopMenu"),mode:l.HORIZONTAL,type:s.TOP_MENU},{title:F("layout.setting.menuTypeMixSidebar"),mode:l.INLINE,type:s.MIX_SIDEBAR}],Q=[{value:r.HOVER,label:F("layout.setting.triggerHover")},{value:r.CLICK,label:F("layout.setting.triggerClick")}];function V(e,t){const n=function(e,t){switch(e){case x.CHANGE_LAYOUT:const{mode:e,type:n,split:i}=t;return{menuSetting:{mode:e,type:n,collapsed:!1,show:!0,hidden:!1,...void 0===i?{split:i}:{}}};case x.MENU_HAS_DRAG:return{menuSetting:{canDrag:t}};case x.MENU_ACCORDION:return{menuSetting:{accordion:t}};case x.MENU_TRIGGER:return{menuSetting:{trigger:t}};case x.MENU_TOP_ALIGN:return{menuSetting:{topMenuAlign:t}};case x.MENU_COLLAPSED:return{menuSetting:{collapsed:t}};case x.MENU_WIDTH:return{menuSetting:{menuWidth:t}};case x.MENU_SHOW_SIDEBAR:return{menuSetting:{show:t}};case x.MENU_COLLAPSED_SHOW_TITLE:return{menuSetting:{collapsedShowTitle:t}};case x.MENU_THEME:return O(t),{menuSetting:{bgColor:t}};case x.MENU_SPLIT:return{menuSetting:{split:t}};case x.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE:return{menuSetting:{closeMixSidebarOnChange:t}};case x.MENU_FIXED:return{menuSetting:{fixed:t}};case x.MENU_TRIGGER_MIX_SIDEBAR:return{menuSetting:{mixSideTrigger:t}};case x.OPEN_PAGE_LOADING:return u.commitPageLoadingState(!1),{transitionSetting:{openPageLoading:t}};case x.ROUTER_TRANSITION:return{transitionSetting:{basicTransition:t}};case x.OPEN_ROUTE_TRANSITION:return{transitionSetting:{enable:t}};case x.OPEN_PROGRESS:return{transitionSetting:{openNProgress:t}};case x.LOCK_TIME:return{lockTime:t};case x.FULL_CONTENT:return{fullContent:t};case x.CONTENT_MODE:return{contentMode:t};case x.SHOW_BREADCRUMB:return{showBreadCrumb:t};case x.SHOW_BREADCRUMB_ICON:return{showBreadCrumbIcon:t};case x.GRAY_MODE:return g(t),{grayMode:t};case x.SHOW_FOOTER:return{showFooter:t};case x.COLOR_WEAK:return d(t),{colorWeak:t};case x.SHOW_LOGO:return{showLogo:t};case x.TABS_SHOW_QUICK:return{multiTabsSetting:{showQuick:t}};case x.TABS_SHOW:return{multiTabsSetting:{show:t}};case x.TABS_SHOW_REDO:return{multiTabsSetting:{showRedo:t}};case x.HEADER_THEME:return _(t),{headerSetting:{bgColor:t}};case x.HEADER_SEARCH:return{headerSetting:{showSearch:t}};case x.HEADER_FIXED:return{headerSetting:{fixed:t}};case x.HEADER_SHOW:return{headerSetting:{show:t}};default:return{}}}(e,t);u.commitProjectConfigState(n)}const $=["#ffffff","#009688","#5172DC","#1E9FFF","#018ffb","#409eff","#4e73df","#e74c3c","#24292e","#394664","#001529","#383f45"],z=["#273352","#ffffff","#191b24","#191a23","#001529","#304156","#001628","#28333E","#344058","#383f45"],{t:Z}=n();var q=S({name:"SettingDrawer",setup(e,{attrs:t}){const{getContentMode:n,getShowFooter:i,getShowBreadCrumb:a,getShowBreadCrumbIcon:o,getShowLogo:l,getFullContent:r,getColorWeak:u,getGrayMode:_,getLockTime:d}=M(),{getOpenPageLoading:g,getBasicTransition:O,getEnableTransition:S,getOpenNProgress:m}=c(),{getIsHorizontal:C,getShowMenu:f,getMenuType:H,getTrigger:p,getCollapsedShowTitle:U,getMenuFixed:y,getCollapsed:X,getCanDrag:q,getTopMenuAlign:J,getAccordion:ee,getMenuWidth:te,getMenuBgColor:ne,getIsTopMenu:ie,getSplit:ae,getIsMixSidebar:oe,getCloseMixSidebarOnChange:le,getMixSideTrigger:se}=I(),{getShowHeader:re,getFixed:Ee,getHeaderBgColor:ue,getShowSearch:_e}=v(),{getShowMultipleTab:de,getShowQuick:ge,getShowRedo:Oe}=D(),Se=T((()=>R(f)&&!R(C)));function Te(){let e=R(p);const t=(i=R(ae),[{value:E.NONE,label:F("layout.setting.menuTriggerNone")},{value:E.FOOTER,label:F("layout.setting.menuTriggerBottom")},...i?[]:[{value:E.HEADER,label:F("layout.setting.menuTriggerTop")}]]);var i;return t.some((t=>t.value===e))||(e=E.FOOTER),N(A,null,N(G,{title:Z("layout.setting.menuDrag"),event:x.MENU_HAS_DRAG,def:R(q),disabled:!R(Se)}),N(G,{title:Z("layout.setting.menuSearch"),event:x.HEADER_SEARCH,def:R(_e),disabled:!R(re)}),N(G,{title:Z("layout.setting.menuAccordion"),event:x.MENU_ACCORDION,def:R(ee),disabled:!R(Se)}),N(G,{title:Z("layout.setting.menuCollapse"),event:x.MENU_COLLAPSED,def:R(X),disabled:!R(Se)||R(oe)}),N(G,{title:Z("layout.setting.collapseMenuDisplayName"),event:x.MENU_COLLAPSED_SHOW_TITLE,def:R(U),disabled:!R(Se)||!R(X)}),N(G,{title:Z("layout.setting.fixedHeader"),event:x.HEADER_FIXED,def:R(Ee),disabled:!R(re)}),N(G,{title:Z("layout.setting.fixedSideBar"),event:x.MENU_FIXED,def:R(y),disabled:!R(Se)||R(oe)}),N(P,{title:Z("layout.setting.topMenuLayout"),event:x.MENU_TOP_ALIGN,def:R(J),options:j,disabled:!R(re)||R(ae)||!R(ie)&&!R(ae)||R(oe)}),N(P,{title:Z("layout.setting.menuCollapseButton"),event:x.MENU_TRIGGER,def:e,options:t,disabled:!R(Se)||R(oe)}),N(P,{title:Z("layout.setting.contentMode"),event:x.CONTENT_MODE,def:R(n),options:k}),N(w,{title:Z("layout.setting.autoScreenLock"),min:0,event:x.LOCK_TIME,defaultValue:R(d),formatter:e=>0===parseInt(e)?`0(${Z("layout.setting.notAutoScreenLock")})`:`${e}${Z("layout.setting.minute")}`}),N(w,{title:Z("layout.setting.expandedMenuWidth"),max:600,min:100,step:10,event:x.MENU_WIDTH,disabled:!R(Se),defaultValue:R(te),formatter:e=>`${parseInt(e)}px`}))}return()=>N(L,{...t,title:Z("layout.setting.drawerTitle"),width:330,wrapClassName:"setting-drawer"},{default:()=>N(A,null,N(b,null,(()=>Z("layout.setting.navMode"))),N(A,null,N(h,{menuTypeList:Y,handler:e=>{V(x.CHANGE_LAYOUT,{mode:e.mode,type:e.type,split:!R(C)&&void 0})},def:R(H)}),N(G,{title:Z("layout.setting.splitMenu"),event:x.MENU_SPLIT,def:R(ae),disabled:!R(Se)||R(H)!==s.MIX}),N(G,{title:Z("layout.setting.closeMixSidebarOnChange"),event:x.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE,def:R(le),disabled:!R(oe)}),N(P,{title:Z("layout.setting.mixSidebarTrigger"),event:x.MENU_TRIGGER_MIX_SIDEBAR,def:R(se),options:Q,disabled:!R(oe)})),N(b,null,(()=>Z("layout.setting.headerTheme"))),N(B,{colorList:$,def:R(ue),event:x.HEADER_THEME}),N(b,null,(()=>Z("layout.setting.sidebarTheme"))),N(B,{colorList:z,def:R(ne),event:x.MENU_THEME}),N(b,null,(()=>Z("layout.setting.interfaceFunction"))),Te(),N(b,null,(()=>Z("layout.setting.interfaceDisplay"))),N(A,null,N(G,{title:Z("layout.setting.breadcrumb"),event:x.SHOW_BREADCRUMB,def:R(a),disabled:!R(re)}),N(G,{title:Z("layout.setting.breadcrumbIcon"),event:x.SHOW_BREADCRUMB_ICON,def:R(o),disabled:!R(re)}),N(G,{title:Z("layout.setting.tabs"),event:x.TABS_SHOW,def:R(de)}),N(G,{title:Z("layout.setting.tabsRedoBtn"),event:x.TABS_SHOW_REDO,def:R(Oe),disabled:!R(de)}),N(G,{title:Z("layout.setting.tabsQuickBtn"),event:x.TABS_SHOW_QUICK,def:R(ge),disabled:!R(de)}),N(G,{title:Z("layout.setting.sidebar"),event:x.MENU_SHOW_SIDEBAR,def:R(f),disabled:R(C)}),N(G,{title:Z("layout.setting.header"),event:x.HEADER_SHOW,def:R(re)}),N(G,{title:"Logo",event:x.SHOW_LOGO,def:R(l),disabled:R(oe)}),N(G,{title:Z("layout.setting.footer"),event:x.SHOW_FOOTER,def:R(i)}),N(G,{title:Z("layout.setting.fullContent"),event:x.FULL_CONTENT,def:R(r)}),N(G,{title:Z("layout.setting.grayMode"),event:x.GRAY_MODE,def:R(_)}),N(G,{title:Z("layout.setting.colorWeak"),event:x.COLOR_WEAK,def:R(u)})),N(b,null,(()=>Z("layout.setting.animation"))),N(A,null,N(G,{title:Z("layout.setting.progress"),event:x.OPEN_PROGRESS,def:R(m)}),N(G,{title:Z("layout.setting.switchLoading"),event:x.OPEN_PAGE_LOADING,def:R(g)}),N(G,{title:Z("layout.setting.switchAnimation"),event:x.OPEN_ROUTE_TRANSITION,def:R(S)}),N(P,{title:Z("layout.setting.animationType"),event:x.ROUTER_TRANSITION,def:R(O),options:K,disabled:!R(S)})),N(b,null),N(W,null))})}}),J=S({name:"SettingButton",components:{SettingOutlined:y,SettingDrawer:q},setup(){const[e,{openDrawer:t}]=U(),{prefixCls:n}=m("setting-button");return{prefixCls:n,register:e,openDrawer:t}}});J.render=function(e,t,n,i,a,o){const l=C("SettingOutlined"),s=C("SettingDrawer");return f(),H("div",{onClick:t[1]||(t[1]=(...t)=>e.openDrawer&&e.openDrawer(...t)),class:e.prefixCls},[p(l),p(s,{onRegister:e.register},null,8,["onRegister"])],2)};var ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:J});export{V as b,ee as i};