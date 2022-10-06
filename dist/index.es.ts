import e,{useRef as t,useState as a}from"react";const n=({headItem:t,text:a,icon:n,link:l,target:o})=>e.createElement("div",null,e.createElement("div",{className:"alignCenter"},t),e.createElement("div",{className:"centerItems"},e.createElement("span",{className:"body1"},a),n&&e.createElement("a",{className:"linkPadding",href:l,target:o},e.createElement("img",{src:n,alt:"action item icon"})))),l=({icon:t,image:a,bgColor:n})=>e.createElement("div",{className:"avatar-container",style:{backgroundColor:n||"rgba(0, 0, 0, 0.38)"}},a&&e.createElement("img",{src:a,className:"app-avatar",alt:"avatar"}),t&&e.createElement("img",{src:t,alt:"avatar icon",className:"avatar-icon"})),o=({name:t,nameSize:a,positionText:n,nameColor:l,nameFontWeight:o,selectableItems:r})=>e.createElement("div",{className:"avatar-info-center-content"},e.createElement("div",{className:"avatar-info-container"},n&&e.createElement("span",{className:"body1 avatar-info-position-text"},n),t&&e.createElement("span",{className:"avatar-info-name",style:{fontSize:a,color:l,fontWeight:o}},t),r&&e.createElement("div",null,r))),r=({icon:t,name:a,image:n,bgColor:r,positionText:c,nameSize:i,nameColor:m,nameFontWeight:s,selectableItems:d})=>e.createElement("div",{className:"preview-profile-container"},e.createElement("div",{className:"preview-profile-avatar-container"},e.createElement(l,{image:n,icon:t,bgColor:r})),e.createElement(o,{name:a,positionText:c,nameSize:i,nameColor:m,nameFontWeight:s,selectableItems:d})),c=({name:l,image:o,bgColor:c,nameSize:i,nameColor:m,rankValue:s,proxyScore:d,avatarIcon:g,eosrateValue:b,positionText:v,checkboxValue:p,nameFontWeight:E,selectableItems:u})=>{const N=t(null),[h,f]=a();return e.createElement("div",{className:h?"delegate-bp-item-container delegate-bp-item-seleted":"delegate-bp-item-container"},e.createElement("div",{className:"flex"},e.createElement("input",{ref:N,className:"delegate-bp-item-checkbox",type:"checkbox",id:"checkbox",name:"checkbox",onChange:()=>{var e;f(null===(e=null==N?void 0:N.current)||void 0===e?void 0:e.checked)},value:p}),e.createElement("div",{className:"delegate-bp-item-rank-padding"},e.createElement(n,{text:"Rank",headItem:e.createElement("span",{className:"h6"},s)})),e.createElement(r,{name:l,image:o,bgColor:c,icon:g,positionText:v,nameSize:i,nameColor:m,nameFontWeight:E,selectableItems:u})),e.createElement("div",{className:"centerItems"},e.createElement(n,{text:"EOSRate",headItem:e.createElement("span",{className:"h6"},b)}),e.createElement("div",{className:"delegate-bp-item-proxy-padding"},e.createElement(n,{text:"Proxy Score",headItem:e.createElement("span",{className:"h6"},d)}))))},i=({content:t})=>e.createElement("div",{className:"card-body"},t);function m(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a}const s=t=>{var{variant:a,label:n,shape:l,icon:o}=t,r=m(t,["variant","label","shape","icon"]);const c=`btn btn-${a} btn-${l}`;return e.createElement("button",Object.assign({className:c},r),o&&e.createElement("img",{className:"button-icon",src:o,alt:"icon button"}),n)},d=({content:t})=>e.createElement("div",{className:"card-header-footer"},t),g=({headerContent:t,bobyContent:a,footerContent:n,width:l,height:o})=>e.createElement("div",{className:"card-container",style:{width:l,height:o}},e.createElement(d,{content:t}),e.createElement(i,{content:a}),e.createElement(d,{content:n})),b=({text:t,link:a,name:l,image:o,target:c,bgColor:i,headItem:m,nameSize:s,linkIcon:d,nameColor:g,avatarIcon:b,positionText:v,nameFontWeight:p,selectableItems:E})=>e.createElement("div",{className:"delegate-bp-item-container"},e.createElement(r,{name:l,image:o,bgColor:i,icon:b,positionText:v,nameSize:s,nameColor:g,nameFontWeight:p,selectableItems:E}),e.createElement(n,{text:t,link:a,icon:d,target:c,headItem:m})),v=t=>{var{children:a,extended:n,bgColor:l,color:o}=t,r=m(t,["children","extended","bgColor","color"]);return e.createElement("button",Object.assign({type:"button",className:n?"extended":"fab",style:{backgroundColor:l,color:o}},r),a)},p=({socialMediaItems:t,buttomContent:a,itemsFooter:n,bgColor:l,color:o})=>e.createElement("div",{className:"footer-container",style:{backgroundColor:l}},e.createElement("div",{className:"footer-items-container"},e.createElement("div",{className:"flex"},null==n?void 0:n.map((t=>{var a;return e.createElement("div",{key:null==t?void 0:t.title,style:{color:o},className:"footer-item-container"},e.createElement("span",{className:"footer-item-title"},null==t?void 0:t.title),null===(a=null==t?void 0:t.links)||void 0===a?void 0:a.map((t=>e.createElement("a",{style:{color:o,textDecoration:null==t?void 0:t.underline},href:null==t?void 0:t.ref,rel:"noreferrer",target:null==t?void 0:t.target},null==t?void 0:t.text))))}))),t&&e.createElement("div",{className:"flex footer-social-media-container"},null==t?void 0:t.map((t=>e.createElement("a",{key:null==t?void 0:t.name,href:null==t?void 0:t.ref,target:"_blank",rel:"noreferrer",className:"footer-paddding-social-media-icons"},e.createElement("img",{src:null==t?void 0:t.image,alt:null==t?void 0:t.name,width:"24px"})))))),e.createElement("div",{className:"footer-buttom-component"},a)),E=({logo:t})=>e.createElement("img",{src:t,className:"app-logo",alt:"logo"}),u=t=>{var{icon:a,text:n,isSelected:l}=t,o=m(t,["icon","text","isSelected"]);return e.createElement("button",Object.assign({className:l?"menu-option selected":"menu-option"},o),e.createElement("img",{src:a,alt:n,className:"menu-option-icon"}),n)},N=({open:t=!0,logo:a,close:n,menuOptions:l,profileComponent:o})=>{if(!t)return e.createElement(e.Fragment,null);return e.createElement("div",{className:"sidebar-drawer-mobile"},e.createElement("div",{className:"sidebar-mobile-background",onClick:e=>{n()}}),e.createElement("div",{className:"sidebar-container"},e.createElement("div",{className:"sidebar-body-head-container"},e.createElement("div",{className:"sidebar-logo-container"},e.createElement("img",{src:a,alt:"App logo"})),e.createElement("div",{className:"sidebar-options-container"},l)),e.createElement("div",{className:"sidebar-padding-profile"},o)))};export{n as ActionItemDelegateBP,l as Avatar,o as AvatarGeneralInfo,c as BlockProducerItem,i as BodyCard,s as Button,g as Card,b as DelegateItem,v as Fab,p as Footer,d as HeaderFooterCard,E as Logo,u as MenuOption,r as PreviewProfile,N as Sidebar};