(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styles=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss"),options={insert:"head",singleton:!1},parameters=(injectStylesIntoStyleTag_default()(styles.a,options),styles.a.locals,{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}});function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":return Object(ClientApi.d)(value);case"argTypes":return Object(ClientApi.b)(value);case"decorators":return value.forEach((function(decorator){return Object(ClientApi.f)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.g)(loader,!1)}));case"parameters":return Object(ClientApi.h)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.e)(enhancer)}));case"render":return Object(ClientApi.i)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.h)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss":function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/cssWithMappingToString.js"),_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);___CSS_LOADER_EXPORT___.push([module.i,"button,span,h1,h2,h3,h4,h5,h6,a,p{font-family:sans-serif}.alignCenter{text-align:center}.centerItems{display:flex;align-items:center;justify-content:center}.linkPadding{padding-left:4px}.body1{font-size:14px;font-weight:500;color:rgba(0,0,0,.87)}.card-container{background-color:#fff;box-shadow:0px 2px 4px rgba(0,0,0,.24);padding:24px;border-radius:4px;min-width:320px}.card-body{width:100%;padding:16px 0 24px 0}.card-header-footer{width:100%}.app-logo{border:2px solid #823fa8}.footer-container{width:100%;padding:32px 16px 24px 60px}@media(max-width: 540px){.footer-container{padding:24px 16px}}.footer-items-container{display:flex;justify-content:space-between}@media(max-width: 540px){.footer-items-container{display:block}}.footer-item-container{display:grid;padding-right:48px}.footer-item-style{font-size:12px;line-height:20px;letter-spacing:-0.26 px}.footer-paddding-social-media-icons{padding-right:24px}.footer-item-title{padding-bottom:8px;font-weight:600;font-size:10px;line-height:20px;letter-spacing:1.4 px}.footer-buttom-component{padding-top:8px;width:100%}@media(max-width: 540px){.footer-social-media-container{justify-content:center;padding-top:32px;padding-bottom:16px}}.avatar-container{position:absolute;border-radius:50%;min-height:56px;min-width:56px;display:flex}.app-avatar{width:56px;height:56px;border-radius:50%;object-fit:cover;margin:auto}.avatar-icon{border-radius:50%;position:absolute;right:0;top:0}.btn{display:flex;align-items:center;color:#fff;background-color:#2563eb;font-weight:500;font-size:14px;line-height:16px;letter-spacing:1px}.icon{padding:10px 12px;border:none;font-style:normal;cursor:pointer;transition-duration:1s}.icon:hover{opacity:.8}.btn-primary{padding:14px 24px;text-transform:uppercase;border:none;font-style:normal;box-shadow:0px 2px 2px rgba(0,0,0,.24);cursor:pointer;transition-duration:1s}.btn-primary:hover{opacity:.8}.btn-secondary{display:flex;align-items:center;padding:12px 22px;color:#2563eb;text-transform:uppercase;border:2px solid #2563eb;background-color:#fff;font-style:normal;font-weight:500;font-size:14px;line-height:16px;letter-spacing:1px;box-shadow:0px 2px 2px rgba(0,0,0,.24);cursor:pointer;transition-duration:1s}.btn-secondary:hover{background-color:rgba(0,0,0,.05)}.button-icon{padding-right:15px}.fab{display:inline-flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;position:relative;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0px;border:0px;margin:0px;cursor:pointer;user-select:none;vertical-align:middle;appearance:none;text-decoration:none;font-family:Roboto,Helvetica,Arial,sans-serif;font-style:normal;font-weight:500;font-size:14px;line-height:16px;letter-spacing:1px;min-height:36px;border-radius:50%;padding:0px;min-width:0px;width:56px;height:56px;z-index:1050;box-shadow:0px 2px 4px rgba(0,0,0,.24),0px 2px 6px rgba(0,0,0,.18);background-color:#f59e0b;transition-duration:1s}.fab:hover{opacity:.8}.extended{display:inline-flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;position:relative;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);outline:0px;border:0px;margin:0px;cursor:pointer;user-select:none;vertical-align:middle;appearance:none;text-decoration:none;font-family:Roboto,Helvetica,Arial,sans-serif;font-style:normal;font-weight:500;font-size:14px;line-height:16px;letter-spacing:1px;min-height:auto;border-radius:24px;padding:0px 16px;min-width:48px;width:auto;height:48px;z-index:1050;box-shadow:0px 2px 4px rgba(0,0,0,.24),0px 2px 6px rgba(0,0,0,.18);background-color:#f59e0b;transition-duration:1s}.extended:hover{opacity:.8}.sidebar-logo-container{height:76px;padding-top:12px}.sidebar-container{background-color:#fff;justify-content:space-between;color:rgba(0,0,0,.87);padding-left:18px;transition:box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;box-shadow:none;display:flex;flex-direction:column;height:100%;flex:1 0 auto;z-index:1200;position:fixed;top:0px;outline:0px;left:0px;border-right:1px solid rgba(0,0,0,.12)}@media(max-width: 912px){.sidebar-container{transform:none;transition:transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;transition:box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;box-shadow:rgba(0,0,0,.2) 0px 8px 10px -5px,rgba(0,0,0,.14) 0px 16px 24px 2px,rgba(0,0,0,.12) 0px 6px 30px 5px}}@media(max-width: 912px){.sidebar-drawer-mobile{position:fixed;inset:0px;z-index:1200}}@media(max-width: 912px){.sidebar-mobile-background{opacity:1;transition:opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;position:fixed;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;inset:0px;background-color:rgba(0,0,0,.5);-webkit-tap-highlight-color:rgba(0,0,0,0);z-index:-1}}.sidebar-body-head-container{height:calc(100% - 224px)}.sidebar-options-container{overflow-y:auto;height:100%}.sidebar-padding-profile{padding-bottom:48px;padding-right:18px}.menu-option{cursor:pointer;display:flex;align-items:center;border-radius:9999px;border:none;min-width:168px;padding:8px 16px;background-color:#fff;font-size:14px;line-height:24px;letter-spacing:.1%;transition-duration:1s}.menu-option:hover{color:#2563eb;background-color:rgba(225,225,225,.24)}.selected{color:#2563eb;background-color:rgba(225,225,225,.24)}.menu-option-icon{padding-right:35px}.delegate-bp-item-container{display:flex;align-items:center;justify-content:space-between;padding:10px 23px;border-bottom:1px solid #e5e5e5;position:relative}.flex{display:flex}.delegate-bp-item-checkbox{cursor:pointer;width:18px}.delegate-bp-item-rank-padding{align-items:center;padding:0 25.5px;display:flex}.delegate-bp-item-proxy-padding{padding:0 39.5px 0 75px}.delegate-bp-item-seleted{background:#f4f8ff}.h6{font-size:20px;font-weight:500;color:rgba(0,0,0,.87)}.preview-profile-avatar-container{min-width:68px;display:flex;align-items:center}.preview-profile-container{min-height:56px;display:flex}.linkStyle{text-decoration:none}.avatar-info-container{display:grid}.avatar-info-position-text{color:rgba(0,0,0,.6)}.avatar-info-name{font-size:18px;font-weight:500;color:rgba(0,0,0,.87)}.avatar-info-center-content{display:flex;min-height:100%;align-items:center}","",{version:3,sources:["webpack://./src/scss/base/_font.scss","webpack://./src/scss/components/ActionItemDelegateBP/_actionItemDelegateBP.scss","webpack://./src/scss/components/Card/_card.scss","webpack://./src/scss/components/Logo/_logo.scss","webpack://./src/scss/components/Footer/_footer.scss","webpack://./src/scss/components/Avatar/_avatar.scss","webpack://./src/scss/components/Button/_button.scss","webpack://./src/scss/components/Sidebar/_sidebar.scss","webpack://./src/scss/components/MenuOption/_menuOption.scss","webpack://./src/scss/components/DelegateItem/_delegateItem.scss","webpack://./src/scss/components/PreviewProfile/_previewProfile.scss","webpack://./src/scss/components/AvatarGeneralInfo/_avatarGeneralInfo.scss"],names:[],mappings:"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",sourcesContent:["button,\nspan,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\na,\np {\n  font-family: sans-serif;\n}\n",".alignCenter {\n  text-align: center;\n}\n\n.centerItems {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.linkPadding {\n  padding-left: 4px;\n}\n\n.body1 {\n  font-size: 14px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.87);\n}\n",".card-container {\n  background-color: white;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.24);\n  padding: 24px;\n  border-radius: 4px;\n  min-width: 320px;\n}\n\n.card-body {\n  width: 100%;\n  padding: 16px 0 24px 0;\n}\n\n.card-header-footer {\n  width: 100%;\n}\n",".app-logo {\n  border: 2px solid $main\n}","$breakpoint-mobile: 540px;\n\n.footer-container {\n  width: 100%;\n  padding: 32px 16px 24px 60px;\n  @media (max-width: $breakpoint-mobile) {\n    padding: 24px 16px;\n  }\n}\n\n.footer-items-container {\n  display: flex;\n  justify-content: space-between;\n  @media (max-width: $breakpoint-mobile) {\n    display: block;\n  }\n}\n\n.footer-item-container {\n  display: grid;\n  padding-right: 48px;\n}\n\n.footer-item-style {\n  font-size: 12px;\n  line-height: 20px;\n  letter-spacing: -0.26 px;\n}\n\n.footer-paddding-social-media-icons {\n  padding-right: 24px;\n}\n\n.footer-item-title {\n  padding-bottom: 8px;\n  font-weight: 600;\n  font-size: 10px;\n  line-height: 20px;\n  letter-spacing: 1.4 px;\n}\n\n.footer-buttom-component {\n  padding-top: 8px;\n  width: 100%;\n}\n\n.footer-social-media-container {\n  @media (max-width: $breakpoint-mobile) {\n    justify-content: center;\n    padding-top: 32px;\n    padding-bottom: 16px;\n  }\n}\n",".avatar-container {\n  position: absolute;\n  border-radius: 50%;\n  min-height: 56px;\n  min-width: 56px;\n  display: flex;\n}\n\n.app-avatar {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  object-fit: cover;\n  margin: auto;\n}\n\n.avatar-icon {\n  border-radius: 50%;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n",".btn {\n  display: flex;\n  align-items: center;\n  color: #fff;\n  background-color: #2563eb;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 1px;\n}\n\n.icon {\n  padding: 10px 12px;\n  border: none;\n  font-style: normal;\n  cursor: pointer;\n  transition-duration: 1s;\n  &:hover {\n    opacity: 0.8;\n  }\n}\n\n.btn-primary {\n  padding: 14px 24px;\n  text-transform: uppercase;\n  border: none;\n  font-style: normal;\n  box-shadow: 0px 2px 2px rgb(0 0 0 / 24%);\n  cursor: pointer;\n  transition-duration: 1s;\n  &:hover {\n    opacity: 0.8;\n  }\n}\n\n.btn-secondary {\n  display: flex;\n  align-items: center;\n  padding: 12px 22px;\n  color: #2563eb;\n  text-transform: uppercase;\n  border: 2px solid #2563eb;\n  background-color: #fff;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 1px;\n  box-shadow: 0px 2px 2px rgb(0 0 0 / 24%);\n  cursor: pointer;\n  transition-duration: 1s;\n  &:hover {\n    background-color: rgb(0 0 0 / 5%);\n  }\n}\n\n.button-icon {\n  padding-right: 15px;\n}\n\n.fab {\n  display: inline-flex;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  position: relative;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent;\n  outline: 0px;\n  border: 0px;\n  margin: 0px;\n  cursor: pointer;\n  user-select: none;\n  vertical-align: middle;\n  appearance: none;\n  text-decoration: none;\n  font-family: Roboto, Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 1px;\n  min-height: 36px;\n  border-radius: 50%;\n  padding: 0px;\n  min-width: 0px;\n  width: 56px;\n  height: 56px;\n  z-index: 1050;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.24), 0px 2px 6px rgba(0, 0, 0, 0.18);\n  background-color: #f59e0b;\n  transition-duration: 1s;\n  &:hover {\n    opacity: 0.8;\n  }\n}\n\n.extended {\n  display: inline-flex;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  position: relative;\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: transparent;\n  outline: 0px;\n  border: 0px;\n  margin: 0px;\n  cursor: pointer;\n  user-select: none;\n  vertical-align: middle;\n  appearance: none;\n  text-decoration: none;\n  font-family: Roboto, Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 1px;\n  min-height: auto;\n  border-radius: 24px;\n  padding: 0px 16px;\n  min-width: 48px;\n  width: auto;\n  height: 48px;\n  z-index: 1050;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.24), 0px 2px 6px rgba(0, 0, 0, 0.18);\n  background-color: #f59e0b;\n  transition-duration: 1s;\n  &:hover {\n    opacity: 0.8;\n  }\n}\n",".sidebar-logo-container {\n  height: 76px;\n  padding-top: 12px;\n}\n\n$breakpoint-tablet: 912px;\n\n.sidebar-container {\n  background-color: rgb(255, 255, 255);\n  justify-content: space-between;\n  color: rgba(0, 0, 0, 0.87);\n  padding-left: 18px;\n  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  box-shadow: none;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  flex: 1 0 auto;\n  z-index: 1200;\n  position: fixed;\n  top: 0px;\n  outline: 0px;\n  left: 0px;\n  border-right: 1px solid rgba(0, 0, 0, 0.12);\n  @media (max-width: $breakpoint-tablet) {\n    transform: none;\n    transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;\n    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n    box-shadow: rgb(0 0 0 / 20%) 0px 8px 10px -5px,\n      rgb(0 0 0 / 14%) 0px 16px 24px 2px, rgb(0 0 0 / 12%) 0px 6px 30px 5px;\n  }\n}\n\n.sidebar-drawer-mobile {\n  @media (max-width: $breakpoint-tablet) {\n    position: fixed;\n    inset: 0px;\n    z-index: 1200;\n  }\n}\n\n.sidebar-mobile-background {\n  @media (max-width: $breakpoint-tablet) {\n    opacity: 1;\n    transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n    position: fixed;\n    display: flex;\n    -webkit-box-align: center;\n    align-items: center;\n    -webkit-box-pack: center;\n    justify-content: center;\n    inset: 0px;\n    background-color: rgba(0, 0, 0, 0.5);\n    -webkit-tap-highlight-color: transparent;\n    z-index: -1;\n  }\n}\n\n.sidebar-body-head-container {\n  height: calc(100% - 224px);\n}\n\n.sidebar-options-container {\n  overflow-y: auto;\n  height: 100%;\n}\n\n.sidebar-padding-profile {\n  padding-bottom: 48px;\n  padding-right: 18px;\n}\n",".menu-option {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border-radius: 9999px;\n  border: none;\n  min-width: 168px;\n  padding: 8px 16px;\n  background-color: #fff;\n  font-size: 14px;\n  line-height: 24px;\n  letter-spacing: 0.1%;\n  transition-duration: 1s;\n  &:hover {\n    color: #2563eb;\n    background-color: rgba(225, 225, 225, 0.24);\n  }\n}\n\n.selected {\n  color: #2563eb;\n  background-color: rgba(225, 225, 225, 0.24);\n}\n\n.menu-option-icon {\n  padding-right: 35px;\n}\n",".delegate-bp-item-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 23px;\n  border-bottom: 1px solid #e5e5e5;\n  position: relative;\n}\n\n.flex {\n  display: flex;\n}\n\n.delegate-bp-item-checkbox {\n  cursor: pointer;\n  width: 18px;\n}\n\n.delegate-bp-item-rank-padding {\n  align-items: center;\n  padding: 0 25.5px;\n  display: flex;\n}\n\n.delegate-bp-item-proxy-padding {\n  padding: 0 39.5px 0 75px;\n}\n\n.delegate-bp-item-seleted {\n  background: #f4f8ff;\n}\n\n.h6 {\n  font-size: 20px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.87);\n}\n",".preview-profile-avatar-container {\n  min-width: 68px;\n  display: flex;\n  align-items: center;\n}\n\n.preview-profile-container {\n  min-height: 56px;\n  display: flex;\n}\n\n.linkStyle {\n  text-decoration: none\n}",".avatar-info-container {\n  display: grid;\n}\n\n.avatar-info-position-text {\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.avatar-info-name {\n  font-size: 18px;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.avatar-info-center-content {\n  display: flex;\n  min-height: 100%;\n  align-items: center;\n}\n"],sourceRoot:""}]),__webpack_exports__.a=___CSS_LOADER_EXPORT___},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./stories/AvatarGeneral.stories.tsx":"./src/stories/AvatarGeneral.stories.tsx","./stories/Button.stories.tsx":"./src/stories/Button.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/stories/AvatarGeneral.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Avatar",(function(){return Avatar}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),AvatarGeneralInfo_AvatarGeneralInfo=function AvatarGeneralInfo(_ref){var name=_ref.name,nameSize=_ref.nameSize,positionText=_ref.positionText,nameColor=_ref.nameColor,nameFontWeight=_ref.nameFontWeight,selectableItems=_ref.selectableItems;return Object(jsx_runtime.jsx)("div",{className:"avatar-info-center-content",children:Object(jsx_runtime.jsxs)("div",{className:"avatar-info-container",children:[positionText&&Object(jsx_runtime.jsx)("span",{className:"body1 avatar-info-position-text",children:positionText}),name&&Object(jsx_runtime.jsx)("span",{className:"avatar-info-name",style:{fontSize:nameSize,color:nameColor,fontWeight:nameFontWeight},children:name}),selectableItems&&Object(jsx_runtime.jsx)("div",{children:selectableItems})]})})};AvatarGeneralInfo_AvatarGeneralInfo.displayName="AvatarGeneralInfo";try{AvatarGeneralInfo_AvatarGeneralInfo.displayName="AvatarGeneralInfo",AvatarGeneralInfo_AvatarGeneralInfo.__docgenInfo={description:"",displayName:"AvatarGeneralInfo",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},positionText:{defaultValue:null,description:"",name:"positionText",required:!1,type:{name:"string"}},nameSize:{defaultValue:null,description:"",name:"nameSize",required:!1,type:{name:"string"}},nameColor:{defaultValue:null,description:"",name:"nameColor",required:!1,type:{name:"string"}},selectableItems:{defaultValue:null,description:"",name:"selectableItems",required:!1,type:{name:"ReactNode"}},nameFontWeight:{defaultValue:null,description:"",name:"nameFontWeight",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AvatarGeneralInfo/index.tsx#AvatarGeneralInfo"]={docgenInfo:AvatarGeneralInfo_AvatarGeneralInfo.__docgenInfo,name:"AvatarGeneralInfo",path:"src/components/AvatarGeneralInfo/index.tsx#AvatarGeneralInfo"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Avatar General Info",component:AvatarGeneralInfo_AvatarGeneralInfo};var AvatarGeneral_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(AvatarGeneralInfo_AvatarGeneralInfo,Object.assign({},args))};AvatarGeneral_stories_Template.displayName="Template";var Avatar=AvatarGeneral_stories_Template.bind({});Avatar.args={name:"Test Avatar",positionText:"left",nameSize:"20",nameColor:"red",nameFontWeight:20},Avatar.parameters=Object.assign({storySource:{source:"(args) => (\n  <AvatarGeneralInfo {...args} />\n)"}},Avatar.parameters)},"./src/stories/Button.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return Secondary}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.index-of.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["variant","label","shape","icon"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Button_Button=function Button(_ref){var variant=_ref.variant,label=_ref.label,shape=_ref.shape,icon=_ref.icon,props=_objectWithoutProperties(_ref,_excluded),classNames="btn btn-"+variant+" btn-"+shape;return Object(jsx_runtime.jsxs)("button",Object.assign({className:classNames},props,{children:[icon&&Object(jsx_runtime.jsx)("img",{className:"button-icon",src:icon,alt:"icon button"}),label]}))};Button_Button.displayName="Button";try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"rounded"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/index.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"src/components/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"Button",component:Button_Button};var Button_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(Button_Button,Object.assign({},args))};Button_stories_Template.displayName="Template";var Primary=Button_stories_Template.bind({});Primary.args={variant:"primary",label:"Primary"};var Secondary=Button_stories_Template.bind({});Secondary.args={variant:"secondary",label:"Secondary",shape:"rounded"},Primary.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Primary.parameters),Secondary.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Secondary.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);