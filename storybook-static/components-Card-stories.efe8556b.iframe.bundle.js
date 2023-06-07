"use strict";(self.webpackChunktest_trade=self.webpackChunktest_trade||[]).push([[610],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _defineProperty}});var esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==(0,esm_typeof.Z)(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==(0,esm_typeof.Z)(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===(0,esm_typeof.Z)(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}},"./node_modules/@babel/runtime/helpers/esm/extends.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _extends}})},"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}});var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}},"./node_modules/@babel/runtime/helpers/esm/typeof.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}__webpack_require__.d(__webpack_exports__,{Z:function(){return _typeof}})},"./node_modules/@styled-icons/styled-icon/index.esm.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return StyledIconBase}});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_excluded=["children","iconAttrs","iconVerticalAlign","iconViewBox","size","title"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var StyledIconBaseBase=react.forwardRef((function(props,ref){var children=props.children,iconAttrs=props.iconAttrs,iconViewBox=(props.iconVerticalAlign,props.iconViewBox),size=props.size,title=props.title,otherProps=_objectWithoutProperties(props,_excluded),iconProps=_objectSpread(_objectSpread({viewBox:iconViewBox,height:void 0!==props.height?props.height:size,width:void 0!==props.width?props.width:size,"aria-hidden":null==title?"true":void 0,focusable:"false",role:null!=title?"img":void 0},iconAttrs),otherProps);return react.createElement("svg",(0,esm_extends.Z)({},iconProps,{ref:ref}),title&&react.createElement("title",{key:"icon-title"},title),children)})),StyledIconBase=(0,styled_components_browser_esm.ZP)(StyledIconBaseBase).withConfig({displayName:"StyledIconBase",componentId:"sc-ea9ulj-0"})(["display:inline-block;vertical-align:",";overflow:hidden;"],(function(props){return props.iconVerticalAlign}))},"./src/UI/Earth/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{I:function(){return Earth}});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),index_esm=__webpack_require__("./node_modules/@styled-icons/styled-icon/index.esm.js"),EarthAmericas=react.forwardRef((function(props,ref){return react.createElement(index_esm.r,(0,esm_extends.Z)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 512 512"},props,{ref:ref}),react.createElement("path",{fill:"currentColor",d:"m57.7 193 9.4 16.4c8.3 14.5 21.9 25.2 38 29.8l57.9 16.5c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6 16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5 4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5.3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3-92.8 0-171.5 60.9-198.2 145zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zm48 0c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256z"}))}));EarthAmericas.displayName="EarthAmericas";var _templateObject,_templateObject2,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Img=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n","\n"])),(function(_ref){var theme=_ref.theme;return(0,styled_components_browser_esm.iv)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\ncolor: ",";\nwidth: 100%;\nheight: 100%;\n"])),theme.color.secondaryColor)}));try{Img.displayName="Img",Img.__docgenInfo={description:"",displayName:"Img",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/UI/Earth/styles.tsx#Img"]={docgenInfo:Img.__docgenInfo,name:"Img",path:"src/UI/Earth/styles.tsx#Img"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Earth=function Earth(){return(0,jsx_runtime.jsx)(Img,{"data-testid":"Earth",children:(0,jsx_runtime.jsx)(EarthAmericas,{})})}},"./src/components/Card/stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:function(){return Template},default:function(){return stories}});var _templateObject,_templateObject2,_templateObject3,_templateObject4,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),TextComponent=__webpack_require__("./src/components/TextComponent/index.tsx"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),styles=__webpack_require__("./src/components/TextComponent/styles.tsx"),Container=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n","\n"])),(function(_ref){var theme=_ref.theme,available=_ref.available;return(0,styled_components_browser_esm.iv)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\nbackground: white;\ndisplay: flex;\nflex-direction: column;\njustify-content: space-evenly;\nalign-items: center;\nheight: 15.625rem;\nwidth: 15.625rem;\nborder-radius: 5px;\nmargin: ",";\nbox-shadow: ",";\ncursor: ",";\n\n","{\n  color: ",";\n  font-family: ",";\n  border-bottom: ",";\n  padding: ",";;\n}\n"])),theme.spacings.normal,available?"0 0 5px "+theme.color.secondaryColor:"none",available?"pointer":"",styles.W,available?"":"grey",theme.fonts.logoFont,available?"1px solid "+theme.color.secondaryColor:"none",theme.spacings.xsmall)})),Img=styled_components_browser_esm.ZP.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n","\n"])),(function(_ref2){_ref2.theme;return(0,styled_components_browser_esm.iv)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\nheight: 6.25rem;\nwidth: 6.25rem;\n"])))}));try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{available:{defaultValue:null,description:"",name:"available",required:!0,type:{name:"boolean"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/styles.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/Card/styles.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}try{Img.displayName="Img",Img.__docgenInfo={description:"",displayName:"Img",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/styles.tsx#Img"]={docgenInfo:Img.__docgenInfo,name:"Img",path:"src/components/Card/styles.tsx#Img"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Card=function Card(_ref){var title=_ref.title,img=_ref.img,handleOpen=_ref.handleOpen,available=_ref.available;return(0,jsx_runtime.jsxs)(Container,{"data-testid":"cardId",available:available,onClick:available?handleOpen:function(){},children:[(0,jsx_runtime.jsx)(Img,{children:img}),(0,jsx_runtime.jsx)(TextComponent.T,{children:title})]})};try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},img:{defaultValue:null,description:"",name:"img",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},handleOpen:{defaultValue:null,description:"",name:"handleOpen",required:!0,type:{name:"() => void"}},available:{defaultValue:null,description:"",name:"available",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/index.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/components/Card/index.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}var Earth=__webpack_require__("./src/UI/Earth/index.tsx"),stories={name:"Card",component:Card,args:{title:"Selecione o país",img:(0,jsx_runtime.jsx)(Earth.I,{})}},Template=function Template(args){return(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Card,(0,objectSpread2.Z)({},args))})};try{Template.displayName="Template",Template.__docgenInfo={description:"",displayName:"Template",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/stories.tsx#Template"]={docgenInfo:Template.__docgenInfo,name:"Template",path:"src/components/Card/stories.tsx#Template"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TextComponent/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{T:function(){return TextComponent}});var _styles__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/TextComponent/styles.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),TextComponent=function TextComponent(_ref){var children=_ref.children;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_styles__WEBPACK_IMPORTED_MODULE_0__.W,{children:children})};try{TextComponent.displayName="TextComponent",TextComponent.__docgenInfo={description:"",displayName:"TextComponent",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextComponent/index.tsx#TextComponent"]={docgenInfo:TextComponent.__docgenInfo,name:"TextComponent",path:"src/components/TextComponent/index.tsx#TextComponent"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TextComponent/styles.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{W:function(){return Container}});var _templateObject,_templateObject2,C_Users_Marina_Desktop_test_trade_test_trade_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Container=styled_components__WEBPACK_IMPORTED_MODULE_0__.ZP.p(_templateObject||(_templateObject=(0,C_Users_Marina_Desktop_test_trade_test_trade_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\n","\n"])),(function(_ref){var theme=_ref.theme;return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(_templateObject2||(_templateObject2=(0,C_Users_Marina_Desktop_test_trade_test_trade_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_1__.Z)(["\ncolor:",";\n"])),theme.color.primaryColor)}));try{Container.displayName="Container",Container.__docgenInfo={description:"",displayName:"Container",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLParagraphElement | null) => void) | RefObject<HTMLParagraphElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TextComponent/styles.tsx#Container"]={docgenInfo:Container.__docgenInfo,name:"Container",path:"src/components/TextComponent/styles.tsx#Container"})}catch(__react_docgen_typescript_loader_error){}}}]);