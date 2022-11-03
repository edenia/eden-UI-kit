"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t=e(require("react"));const a=({headItem:e,text:a,icon:l,link:n,target:r,containerclasses:o})=>t.default.createElement("div",{className:o},t.default.createElement("div",{className:"alignCenter"},e),t.default.createElement("div",{className:"centerItems"},t.default.createElement("span",{className:"body1"},a),l&&t.default.createElement("a",{className:"linkPadding",href:n,target:r},t.default.createElement("img",{src:l,alt:"action item icon"})))),l=({icon:e,image:a,imgChild:l,bgColor:n="rgba(0, 0, 0, 0.38)"})=>t.default.createElement("div",{className:"avatar-container",style:{backgroundColor:n}},a&&t.default.createElement("img",{src:a,className:"app-avatar",alt:"avatar"}),l,e&&t.default.createElement("img",{src:e,alt:"avatar icon",className:"avatar-icon"})),n=({name:e,nameSize:a,positionText:l,nameColor:n,nameFontWeight:r,selectableItems:o})=>t.default.createElement("div",{className:"avatar-info-center-content"},t.default.createElement("div",{className:"avatar-info-container"},l&&t.default.createElement("span",{className:"body1 avatar-info-position-text"},l),e&&t.default.createElement("span",{className:"avatar-info-name",style:{fontSize:a,color:n,fontWeight:r}},e),o&&t.default.createElement("div",null,o))),r=({icon:e,name:a,image:r,bgColor:o,nameSize:i,imgChild:c,nameColor:s,profileLink:m,positionText:d,targetProfile:u,nameFontWeight:f,selectableItems:p})=>t.default.createElement("a",{href:m,rel:"noreferrer",target:u,className:"linkStyle"},t.default.createElement("div",{className:"preview-profile-container"},t.default.createElement("div",{className:"preview-profile-avatar-container"},t.default.createElement(l,{image:r,icon:e,bgColor:o,imgChild:c})),t.default.createElement(n,{name:a,positionText:d,nameSize:i,nameColor:s,nameFontWeight:f,selectableItems:p}))),o=({content:e})=>t.default.createElement("div",{className:"card-body"},e);function i(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(l=Object.getOwnPropertySymbols(e);n<l.length;n++)t.indexOf(l[n])<0&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(a[l[n]]=e[l[n]])}return a}function c(e){var t,a,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=c(e[t]))&&(l&&(l+=" "),l+=a);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}function s(){for(var e,t,a=0,l="";a<arguments.length;)(e=arguments[a++])&&(t=c(e))&&(l&&(l+=" "),l+=t);return l}const m=({content:e})=>t.default.createElement("div",{className:"card-header-footer"},e);var d={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},u=t.default.createContext&&t.default.createContext(d),f=function(){return f=Object.assign||function(e){for(var t,a=1,l=arguments.length;a<l;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},f.apply(this,arguments)},p=function(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(l=Object.getOwnPropertySymbols(e);n<l.length;n++)t.indexOf(l[n])<0&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(a[l[n]]=e[l[n]])}return a};function g(e){return e&&e.map((function(e,a){return t.default.createElement(e.tag,f({key:a},e.attr),g(e.child))}))}function v(e){return function(a){return t.default.createElement(b,f({attr:f({},e.attr)},a),g(e.child))}}function b(e){var a=function(a){var l,n=e.attr,r=e.size,o=e.title,i=p(e,["attr","size","title"]),c=r||a.size||"1em";return a.className&&(l=a.className),e.className&&(l=(l?l+" ":"")+e.className),t.default.createElement("svg",f({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,n,i,{className:l,style:f(f({color:e.color||a.color},a.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),o&&t.default.createElement("title",null,o),e.children)};return void 0!==u?t.default.createElement(u.Consumer,null,(function(e){return a(e)})):a(d)}function E(e){return v({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z"}}]})(e)}exports.ActionItemDelegateBP=a,exports.Avatar=l,exports.AvatarGeneralInfo=n,exports.BlockProducerItem=({name:e,image:l,bgColor:n,nameSize:o,nameColor:i,rankValue:c,proxyScore:s,avatarIcon:m,imgChild:d,isSelected:u,eosrateValue:f,positionText:p,checkboxValue:g,onClick:v,nameFontWeight:b,selectableItems:E})=>t.default.createElement("div",{className:u?"delegate-bp-item-container delegate-bp-item-seleted":"delegate-bp-item-container"},t.default.createElement("div",{className:"flex"},t.default.createElement("input",{checked:u,className:"delegate-bp-item-checkbox",type:"checkbox",id:"checkbox",name:"checkbox",onChange:()=>v(),value:g}),t.default.createElement("div",{className:"delegate-bp-item-rank-padding"},c&&t.default.createElement(a,{text:"Rank",headItem:t.default.createElement("span",{className:"h6"},c)})),t.default.createElement(r,{name:e,image:l,bgColor:n,icon:m,positionText:p,nameSize:o,nameColor:i,nameFontWeight:b,selectableItems:E,imgChild:d})),t.default.createElement("div",{className:"centerItems"},f&&t.default.createElement(a,{text:"EOSRate",headItem:t.default.createElement("span",{className:"h6"},f)}),s&&t.default.createElement("div",{className:"delegate-bp-item-proxy-padding"},t.default.createElement(a,{text:"Proxy Score",headItem:t.default.createElement("span",{className:"h6"},s)})))),exports.BodyCard=o,exports.Button=e=>{var{variant:a,label:l,shape:n,icon:r,externalStyles:o}=e,c=i(e,["variant","label","shape","icon","externalStyles"]);const m=`btn btn-${a} btn-${n}`;return t.default.createElement("button",Object.assign({className:s(o,m)},c),r&&t.default.createElement("img",{className:"button-icon",src:r,alt:"icon button"}),l)},exports.Card=({headerContent:e,bobyContent:a,footerContent:l,width:n,height:r})=>t.default.createElement("div",{className:"card-container",style:{width:n,height:r}},t.default.createElement(m,{content:e}),t.default.createElement(o,{content:a}),t.default.createElement(m,{content:l})),exports.DelegateItem=({text:e,link:l,name:n,image:o,target:i,bgColor:c,headItem:s,imgChild:m,nameSize:d,linkIcon:u,nameColor:f,avatarIcon:p,profileLink:g,positionText:v,targetProfile:b,nameFontWeight:E,selectableItems:h,actionItemStyles:x})=>t.default.createElement("div",{className:"delegate-bp-item-container"},t.default.createElement(r,{name:n,image:o,bgColor:c,icon:p,imgChild:m,positionText:v,profileLink:g,targetProfile:b,nameSize:d,nameColor:f,nameFontWeight:E,selectableItems:h}),t.default.createElement(a,{text:e,link:l,icon:u,target:i,headItem:s,containerclasses:x})),exports.Fab=e=>{var{children:a,extended:l,externalStyles:n,bgColor:r,color:o}=e,c=i(e,["children","extended","externalStyles","bgColor","color"]);return t.default.createElement("button",Object.assign({type:"button",className:s(n,{extended:l,fab:!l}),style:{backgroundColor:r,color:o}},c),a)},exports.Footer=({socialMediaItems:e,buttomContent:a,itemsFooter:l,bgColor:n,color:r})=>t.default.createElement("div",{className:"footer-container",style:{backgroundColor:n}},t.default.createElement("div",{className:"footer-items-container"},t.default.createElement("div",{className:"flex"},null==l?void 0:l.map((e=>{var a;return t.default.createElement("div",{key:null==e?void 0:e.title,style:{color:r},className:"footer-item-container"},t.default.createElement("span",{className:"footer-item-title"},null==e?void 0:e.title),null===(a=null==e?void 0:e.links)||void 0===a?void 0:a.map((e=>t.default.createElement("a",{className:"footer-item-style",style:{color:r,textDecoration:null==e?void 0:e.underline},href:null==e?void 0:e.ref,rel:"noreferrer",target:null==e?void 0:e.target},null==e?void 0:e.text))))}))),e&&t.default.createElement("div",{className:"flex footer-social-media-container"},null==e?void 0:e.map((e=>t.default.createElement("a",{key:null==e?void 0:e.name,href:null==e?void 0:e.ref,target:"_blank",rel:"noreferrer",className:"footer-paddding-social-media-icons"},t.default.createElement("img",{src:null==e?void 0:e.image,alt:null==e?void 0:e.name,width:"24px"})))))),t.default.createElement("div",{className:"footer-buttom-component"},a)),exports.HeaderFooterCard=m,exports.Logo=({logo:e})=>t.default.createElement("img",{src:e,className:"app-logo",alt:"logo"}),exports.MenuOption=e=>{var{icon:a,text:l,isSelected:n}=e,r=i(e,["icon","text","isSelected"]);return t.default.createElement("button",Object.assign({className:n?"menu-option selected":"menu-option"},r),t.default.createElement("img",{src:a,alt:l,className:"menu-option-icon"}),l)},exports.PreviewProfile=r,exports.Sidebar=({open:e=!0,logo:a,close:l,menuOptions:n,profileComponent:r})=>{if(!e)return t.default.createElement(t.default.Fragment,null);return t.default.createElement("div",{className:"sidebar-drawer-mobile"},t.default.createElement("div",{className:"sidebar-mobile-background",onClick:e=>{l()}}),t.default.createElement("div",{className:"sidebar-container"},t.default.createElement("div",{className:"sidebar-body-head-container"},t.default.createElement("div",{className:"sidebar-logo-container"},t.default.createElement("img",{className:"heigth-image",src:a,alt:"App logo"})),t.default.createElement("div",{className:"sidebar-options-container"},n)),t.default.createElement("div",{className:"sidebar-padding-profile"},r)))},exports.Spinner=({size:e=56})=>t.default.createElement(E,{size:e,className:"spinnerStyle"});
