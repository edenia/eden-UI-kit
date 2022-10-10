import e from"react";const t=({headItem:t,text:a,icon:n,link:l,target:o})=>e.createElement("div",null,e.createElement("div",{className:"alignCenter"},t),e.createElement("div",{className:"centerItems"},e.createElement("span",{className:"body1"},a),n&&e.createElement("a",{className:"linkPadding",href:l,target:o},e.createElement("img",{src:n,alt:"action item icon"})))),a=({icon:t,image:a,bgColor:n})=>e.createElement("div",{className:"avatar-container",style:{backgroundColor:n||"rgba(0, 0, 0, 0.38)"}},a&&e.createElement("img",{src:a,className:"app-avatar",alt:"avatar"}),t&&e.createElement("img",{src:t,alt:"avatar icon",className:"avatar-icon"})),n=({name:t,nameSize:a,positionText:n,nameColor:l,nameFontWeight:o,selectableItems:r})=>e.createElement("div",{className:"avatar-info-center-content"},e.createElement("div",{className:"avatar-info-container"},n&&e.createElement("span",{className:"body1 avatar-info-position-text"},n),t&&e.createElement("span",{className:"avatar-info-name",style:{fontSize:a,color:l,fontWeight:o}},t),r&&e.createElement("div",null,r))),l=({icon:t,name:l,image:o,bgColor:r,positionText:c,nameSize:i,nameColor:m,nameFontWeight:s,selectableItems:d})=>e.createElement("div",{className:"preview-profile-container"},e.createElement("div",{className:"preview-profile-avatar-container"},e.createElement(a,{image:o,icon:t,bgColor:r})),e.createElement(n,{name:l,positionText:c,nameSize:i,nameColor:m,nameFontWeight:s,selectableItems:d})),o=({name:a,image:n,bgColor:o,nameSize:r,nameColor:c,rankValue:i,proxyScore:m,avatarIcon:s,isSelected:d,eosrateValue:g,positionText:b,checkboxValue:p,onClick:v,nameFontWeight:E,selectableItems:u})=>e.createElement("div",{className:d?"delegate-bp-item-container delegate-bp-item-seleted":"delegate-bp-item-container"},e.createElement("div",{className:"flex"},e.createElement("input",{checked:d,className:"delegate-bp-item-checkbox",type:"checkbox",id:"checkbox",name:"checkbox",onChange:()=>v(),value:p}),e.createElement("div",{className:"delegate-bp-item-rank-padding"},i&&e.createElement(t,{text:"Rank",headItem:e.createElement("span",{className:"h6"},i)})),e.createElement(l,{name:a,image:n,bgColor:o,icon:s,positionText:b,nameSize:r,nameColor:c,nameFontWeight:E,selectableItems:u})),e.createElement("div",{className:"centerItems"},g&&e.createElement(t,{text:"EOSRate",headItem:e.createElement("span",{className:"h6"},g)}),m&&e.createElement("div",{className:"delegate-bp-item-proxy-padding"},e.createElement(t,{text:"Proxy Score",headItem:e.createElement("span",{className:"h6"},m)})))),r=({content:t})=>e.createElement("div",{className:"card-body"},t);function c(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a}const i=t=>{var{variant:a,label:n,shape:l,icon:o}=t,r=c(t,["variant","label","shape","icon"]);const i=`btn btn-${a} btn-${l}`;return e.createElement("button",Object.assign({className:i},r),o&&e.createElement("img",{className:"button-icon",src:o,alt:"icon button"}),n)},m=({content:t})=>e.createElement("div",{className:"card-header-footer"},t),s=({headerContent:t,bobyContent:a,footerContent:n,width:l,height:o})=>e.createElement("div",{className:"card-container",style:{width:l,height:o}},e.createElement(m,{content:t}),e.createElement(r,{content:a}),e.createElement(m,{content:n})),d=({text:a,link:n,name:o,image:r,target:c,bgColor:i,headItem:m,nameSize:s,linkIcon:d,nameColor:g,avatarIcon:b,positionText:p,nameFontWeight:v,selectableItems:E})=>e.createElement("div",{className:"delegate-bp-item-container"},e.createElement(l,{name:o,image:r,bgColor:i,icon:b,positionText:p,nameSize:s,nameColor:g,nameFontWeight:v,selectableItems:E}),e.createElement(t,{text:a,link:n,icon:d,target:c,headItem:m}));function g(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=g(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function b(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=g(e))&&(n&&(n+=" "),n+=t);return n}const p=t=>{var{children:a,extended:n,externalStyles:l,bgColor:o,color:r}=t,i=c(t,["children","extended","externalStyles","bgColor","color"]);return e.createElement("button",Object.assign({type:"button",className:b(l,{extended:n,fab:!n}),style:{backgroundColor:o,color:r}},i),a)},v=({socialMediaItems:t,buttomContent:a,itemsFooter:n,bgColor:l,color:o})=>e.createElement("div",{className:"footer-container",style:{backgroundColor:l}},e.createElement("div",{className:"footer-items-container"},e.createElement("div",{className:"flex"},null==n?void 0:n.map((t=>{var a;return e.createElement("div",{key:null==t?void 0:t.title,style:{color:o},className:"footer-item-container"},e.createElement("span",{className:"footer-item-title"},null==t?void 0:t.title),null===(a=null==t?void 0:t.links)||void 0===a?void 0:a.map((t=>e.createElement("a",{className:"footer-item-style",style:{color:o,textDecoration:null==t?void 0:t.underline},href:null==t?void 0:t.ref,rel:"noreferrer",target:null==t?void 0:t.target},null==t?void 0:t.text))))}))),t&&e.createElement("div",{className:"flex footer-social-media-container"},null==t?void 0:t.map((t=>e.createElement("a",{key:null==t?void 0:t.name,href:null==t?void 0:t.ref,target:"_blank",rel:"noreferrer",className:"footer-paddding-social-media-icons"},e.createElement("img",{src:null==t?void 0:t.image,alt:null==t?void 0:t.name,width:"24px"})))))),e.createElement("div",{className:"footer-buttom-component"},a)),E=({logo:t})=>e.createElement("img",{src:t,className:"app-logo",alt:"logo"}),u=t=>{var{icon:a,text:n,isSelected:l}=t,o=c(t,["icon","text","isSelected"]);return e.createElement("button",Object.assign({className:l?"menu-option selected":"menu-option"},o),e.createElement("img",{src:a,alt:n,className:"menu-option-icon"}),n)},f=({open:t=!0,logo:a,close:n,menuOptions:l,profileComponent:o})=>{if(!t)return e.createElement(e.Fragment,null);return e.createElement("div",{className:"sidebar-drawer-mobile"},e.createElement("div",{className:"sidebar-mobile-background",onClick:e=>{n()}}),e.createElement("div",{className:"sidebar-container"},e.createElement("div",{className:"sidebar-body-head-container"},e.createElement("div",{className:"sidebar-logo-container"},e.createElement("img",{src:a,alt:"App logo"})),e.createElement("div",{className:"sidebar-options-container"},l)),e.createElement("div",{className:"sidebar-padding-profile"},o)))};export{t as ActionItemDelegateBP,a as Avatar,n as AvatarGeneralInfo,o as BlockProducerItem,r as BodyCard,i as Button,s as Card,d as DelegateItem,p as Fab,v as Footer,m as HeaderFooterCard,E as Logo,u as MenuOption,l as PreviewProfile,f as Sidebar};
