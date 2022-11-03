import e from"react";const t=({headItem:t,text:a,icon:n,link:r,target:l,containerclasses:o})=>e.createElement("div",{className:o},e.createElement("div",{className:"alignCenter"},t),e.createElement("div",{className:"centerItems"},e.createElement("span",{className:"body1"},a),n&&e.createElement("a",{className:"linkPadding",href:r,target:l},e.createElement("img",{src:n,alt:"action item icon"})))),a=({icon:t,image:a,imgChild:n,bgColor:r="rgba(0, 0, 0, 0.38)"})=>e.createElement("div",{className:"avatar-container",style:{backgroundColor:r}},a&&e.createElement("img",{src:a,className:"app-avatar",alt:"avatar"}),n,t&&e.createElement("img",{src:t,alt:"avatar icon",className:"avatar-icon"})),n=({name:t,nameSize:a,positionText:n,nameColor:r,nameFontWeight:l,selectableItems:o})=>e.createElement("div",{className:"avatar-info-center-content"},e.createElement("div",{className:"avatar-info-container"},n&&e.createElement("span",{className:"body1 avatar-info-position-text"},n),t&&e.createElement("span",{className:"avatar-info-name",style:{fontSize:a,color:r,fontWeight:l}},t),o&&e.createElement("div",null,o))),r=({icon:t,name:r,image:l,bgColor:o,nameSize:c,imgChild:i,nameColor:s,profileLink:m,positionText:d,targetProfile:g,nameFontWeight:p,selectableItems:v})=>e.createElement("a",{href:m,rel:"noreferrer",target:g,className:"linkStyle"},e.createElement("div",{className:"preview-profile-container"},e.createElement("div",{className:"preview-profile-avatar-container"},e.createElement(a,{image:l,icon:t,bgColor:o,imgChild:i})),e.createElement(n,{name:r,positionText:d,nameSize:c,nameColor:s,nameFontWeight:p,selectableItems:v}))),l=({name:a,image:n,bgColor:l,nameSize:o,nameColor:c,rankValue:i,proxyScore:s,avatarIcon:m,imgChild:d,isSelected:g,eosrateValue:p,positionText:v,checkboxValue:b,onClick:u,nameFontWeight:f,selectableItems:E})=>e.createElement("div",{className:g?"delegate-bp-item-container delegate-bp-item-seleted":"delegate-bp-item-container"},e.createElement("div",{className:"flex"},e.createElement("input",{checked:g,className:"delegate-bp-item-checkbox",type:"checkbox",id:"checkbox",name:"checkbox",onChange:()=>u(),value:b}),e.createElement("div",{className:"delegate-bp-item-rank-padding"},i&&e.createElement(t,{text:"Rank",headItem:e.createElement("span",{className:"h6"},i)})),e.createElement(r,{name:a,image:n,bgColor:l,icon:m,positionText:v,nameSize:o,nameColor:c,nameFontWeight:f,selectableItems:E,imgChild:d})),e.createElement("div",{className:"centerItems"},p&&e.createElement(t,{text:"EOSRate",headItem:e.createElement("span",{className:"h6"},p)}),s&&e.createElement("div",{className:"delegate-bp-item-proxy-padding"},e.createElement(t,{text:"Proxy Score",headItem:e.createElement("span",{className:"h6"},s)})))),o=({content:t})=>e.createElement("div",{className:"card-body"},t);function c(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}function i(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=i(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function s(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=i(e))&&(n&&(n+=" "),n+=t);return n}const m=t=>{var{variant:a,label:n,shape:r,icon:l,externalStyles:o}=t,i=c(t,["variant","label","shape","icon","externalStyles"]);const m=`btn btn-${a} btn-${r}`;return e.createElement("button",Object.assign({className:s(o,m)},i),l&&e.createElement("img",{className:"button-icon",src:l,alt:"icon button"}),n)},d=({content:t})=>e.createElement("div",{className:"card-header-footer"},t),g=({headerContent:t,bobyContent:a,footerContent:n,width:r,height:l})=>e.createElement("div",{className:"card-container",style:{width:r,height:l}},e.createElement(d,{content:t}),e.createElement(o,{content:a}),e.createElement(d,{content:n})),p=({text:a,link:n,name:l,image:o,target:c,bgColor:i,headItem:s,imgChild:m,nameSize:d,linkIcon:g,nameColor:p,avatarIcon:v,profileLink:b,positionText:u,targetProfile:f,nameFontWeight:E,selectableItems:h,actionItemStyles:y})=>e.createElement("div",{className:"delegate-bp-item-container"},e.createElement(r,{name:l,image:o,bgColor:i,icon:v,imgChild:m,positionText:u,profileLink:b,targetProfile:f,nameSize:d,nameColor:p,nameFontWeight:E,selectableItems:h}),e.createElement(t,{text:a,link:n,icon:g,target:c,headItem:s,containerclasses:y})),v=t=>{var{children:a,extended:n,externalStyles:r,bgColor:l,color:o}=t,i=c(t,["children","extended","externalStyles","bgColor","color"]);return e.createElement("button",Object.assign({type:"button",className:s(r,{extended:n,fab:!n}),style:{backgroundColor:l,color:o}},i),a)},b=({socialMediaItems:t,buttomContent:a,itemsFooter:n,bgColor:r,color:l})=>e.createElement("div",{className:"footer-container",style:{backgroundColor:r}},e.createElement("div",{className:"footer-items-container"},e.createElement("div",{className:"flex"},null==n?void 0:n.map((t=>{var a;return e.createElement("div",{key:null==t?void 0:t.title,style:{color:l},className:"footer-item-container"},e.createElement("span",{className:"footer-item-title"},null==t?void 0:t.title),null===(a=null==t?void 0:t.links)||void 0===a?void 0:a.map((t=>e.createElement("a",{className:"footer-item-style",style:{color:l,textDecoration:null==t?void 0:t.underline},href:null==t?void 0:t.ref,rel:"noreferrer",target:null==t?void 0:t.target},null==t?void 0:t.text))))}))),t&&e.createElement("div",{className:"flex footer-social-media-container"},null==t?void 0:t.map((t=>e.createElement("a",{key:null==t?void 0:t.name,href:null==t?void 0:t.ref,target:"_blank",rel:"noreferrer",className:"footer-paddding-social-media-icons"},e.createElement("img",{src:null==t?void 0:t.image,alt:null==t?void 0:t.name,width:"24px"})))))),e.createElement("div",{className:"footer-buttom-component"},a)),u=({logo:t})=>e.createElement("img",{src:t,className:"app-logo",alt:"logo"}),f=t=>{var{icon:a,text:n,isSelected:r}=t,l=c(t,["icon","text","isSelected"]);return e.createElement("button",Object.assign({className:r?"menu-option selected":"menu-option"},l),e.createElement("img",{src:a,alt:n,className:"menu-option-icon"}),n)},E=({open:t=!0,logo:a,close:n,menuOptions:r,profileComponent:l})=>{if(!t)return e.createElement(e.Fragment,null);return e.createElement("div",{className:"sidebar-drawer-mobile"},e.createElement("div",{className:"sidebar-mobile-background",onClick:e=>{n()}}),e.createElement("div",{className:"sidebar-container"},e.createElement("div",{className:"sidebar-body-head-container"},e.createElement("div",{className:"sidebar-logo-container"},e.createElement("img",{className:"heigth-image",src:a,alt:"App logo"})),e.createElement("div",{className:"sidebar-options-container"},r)),e.createElement("div",{className:"sidebar-padding-profile"},l)))};var h={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},y=e.createContext&&e.createContext(h),N=function(){return N=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},N.apply(this,arguments)},x=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};function C(t){return t&&t.map((function(t,a){return e.createElement(t.tag,N({key:a},t.attr),C(t.child))}))}function k(t){return function(a){return e.createElement(O,N({attr:N({},t.attr)},a),C(t.child))}}function O(t){var a=function(a){var n,r=t.attr,l=t.size,o=t.title,c=x(t,["attr","size","title"]),i=l||a.size||"1em";return a.className&&(n=a.className),t.className&&(n=(n?n+" ":"")+t.className),e.createElement("svg",N({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,r,c,{className:n,style:N(N({color:t.color||a.color},a.style),t.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),o&&e.createElement("title",null,o),t.children)};return void 0!==y?e.createElement(y.Consumer,null,(function(e){return a(e)})):a(h)}function S(e){return k({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"}}]})(e)}const I=({size:t=56})=>e.createElement(S,{size:t,className:"spinnerStyle"});export{t as ActionItemDelegateBP,a as Avatar,n as AvatarGeneralInfo,l as BlockProducerItem,o as BodyCard,m as Button,g as Card,p as DelegateItem,v as Fab,b as Footer,d as HeaderFooterCard,u as Logo,f as MenuOption,r as PreviewProfile,E as Sidebar,I as Spinner};
