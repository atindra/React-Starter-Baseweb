(self.webpackChunkreact_starter=self.webpackChunkreact_starter||[]).push([[377],{5877:(r,e,t)=>{"use strict";t.d(e,{Z:()=>X});var o=t(7294),a=t(7265),n=t(1075);function i(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,o)}return t}function l(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){p(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function p(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var c=(0,a.zo)("button",(function(r){var e=r.$theme,t=r.$size,o=r.$kind,a=r.$shape,i=r.$isLoading,p=r.$isSelected,c=r.$disabled;return l(l(l(l(l({display:"inline-flex",flexDirection:i?"column":"row",alignItems:"center",justifyContent:"center",borderLeftWidth:0,borderTopWidth:0,borderRightWidth:0,borderBottomWidth:0,borderLeftStyle:"none",borderTopStyle:"none",borderRightStyle:"none",borderBottomStyle:"none",outline:"none",boxShadow:r.$isFocusVisible?"inset 0 0 0 3px ".concat(e.colors.accent):"none",textDecoration:"none",WebkitAppearance:"none",transitionProperty:"background",transitionDuration:e.animation.timing200,transitionTimingFunction:e.animation.linearCurve,cursor:"pointer",":disabled":{cursor:"not-allowed",backgroundColor:e.colors.buttonDisabledFill,color:e.colors.buttonDisabledText},marginLeft:0,marginTop:0,marginRight:0,marginBottom:0},function(r){var e=r.$theme;switch(r.$size){case n.NO.mini:return e.typography.font150;case n.NO.compact:return e.typography.font250;case n.NO.large:return e.typography.font450;default:return e.typography.font350}}({$theme:e,$size:t})),function(r){var e=r.$size,t=r.$shape,o=r.$theme.borders.buttonBorderRadius;return t===n.X3.pill?o=e===n.NO.compact?"30px":e===n.NO.large?"42px":"38px":t!==n.X3.circle&&t!==n.X3.round||(o="50%"),{borderTopRightRadius:o,borderBottomRightRadius:o,borderTopLeftRadius:o,borderBottomLeftRadius:o}}({$theme:e,$size:t,$shape:a})),function(r){var e=r.$theme,t=r.$size,o=r.$shape,a=o===n.X3.square||o===n.X3.circle||o===n.X3.round;switch(t){case n.NO.mini:return{paddingTop:e.sizing.scale200,paddingBottom:e.sizing.scale200,paddingLeft:a?e.sizing.scale200:e.sizing.scale300,paddingRight:a?e.sizing.scale200:e.sizing.scale300};case n.NO.compact:return{paddingTop:e.sizing.scale400,paddingBottom:e.sizing.scale400,paddingLeft:a?e.sizing.scale400:e.sizing.scale500,paddingRight:a?e.sizing.scale400:e.sizing.scale500};case n.NO.large:return{paddingTop:e.sizing.scale600,paddingBottom:e.sizing.scale600,paddingLeft:a?e.sizing.scale600:e.sizing.scale700,paddingRight:a?e.sizing.scale600:e.sizing.scale700};default:return{paddingTop:e.sizing.scale550,paddingBottom:e.sizing.scale550,paddingLeft:a?e.sizing.scale550:e.sizing.scale600,paddingRight:a?e.sizing.scale550:e.sizing.scale600}}}({$theme:e,$size:t,$shape:a})),function(r){var e=r.$theme,t=r.$isLoading,o=r.$isSelected,a=r.$kind;if(r.$disabled)return Object.freeze({});switch(a){case n.TO.primary:return o?{color:e.colors.buttonPrimarySelectedText,backgroundColor:e.colors.buttonPrimarySelectedFill}:{color:e.colors.buttonPrimaryText,backgroundColor:e.colors.buttonPrimaryFill,":hover":{backgroundColor:t?e.colors.buttonPrimaryActive:e.colors.buttonPrimaryHover},":active":{backgroundColor:e.colors.buttonPrimaryActive}};case n.TO.secondary:return o?{color:e.colors.buttonPrimaryText,backgroundColor:e.colors.buttonPrimaryFill}:{color:e.colors.buttonSecondaryText,backgroundColor:e.colors.buttonSecondaryFill,":hover":{backgroundColor:t?e.colors.buttonSecondaryActive:e.colors.buttonSecondaryHover},":active":{backgroundColor:e.colors.buttonSecondaryActive}};case n.TO.tertiary:return o?{color:e.colors.buttonTertiarySelectedText,backgroundColor:e.colors.buttonTertiarySelectedFill}:{color:e.colors.buttonTertiaryText,backgroundColor:e.colors.buttonTertiaryFill,":hover":{backgroundColor:t?e.colors.buttonTertiaryActive:e.colors.buttonTertiaryHover},":active":{backgroundColor:e.colors.buttonTertiaryActive}};case n.TO.minimal:return o?{color:e.colors.buttonMinimalSelectedText,backgroundColor:e.colors.buttonMinimalSelectedFill}:{color:e.colors.buttonMinimalText,backgroundColor:e.colors.buttonMinimalFill,":hover":{backgroundColor:t?e.colors.buttonMinimalActive:e.colors.buttonMinimalHover},":active":{backgroundColor:e.colors.buttonMinimalActive}};default:return Object.freeze({})}}({$theme:e,$kind:o,$isLoading:i,$isSelected:p,$disabled:c})),function(r){var e=r.$shape,t=r.$size;if(e===n.X3.circle||e===n.X3.square){var o,a;switch(t){case n.NO.mini:o="28px",a="28px";break;case n.NO.compact:o="36px",a="36px";break;case n.NO.large:o="56px",a="56px";break;case n.NO.default:default:o="48px",a="48px"}return{height:o,width:a,paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0}}return{}}({$theme:e,$shape:a,$size:t}))}));c.displayName="BaseButton";var d=(0,a.zo)("div",(function(r){var e=r.$theme;return p({display:"flex"},"rtl"===e.direction?"marginRight":"marginLeft",e.sizing.scale500)}));d.displayName="EndEnhancer";var u=(0,a.zo)("div",(function(r){var e=r.$theme;return p({display:"flex"},"rtl"===e.direction?"marginLeft":"marginRight",e.sizing.scale500)}));u.displayName="StartEnhancer";var s=(0,a.zo)("div",(function(r){var e=r.$theme,t=r.$size,o="3px";return t!==n.NO.mini&&t!==n.NO.compact||(o=e.sizing.scale0),t===n.NO.large&&(o=e.sizing.scale100),{lineHeight:0,position:"static",marginBottom:o,marginTop:o}}));s.displayName="LoadingSpinnerContainer";var f=(0,a.zo)("span",(function(r){var e=r.$theme,t=r.$kind,o=r.$disabled,a=r.$size,i=function(r){var e=r.$theme,t=r.$kind;if(r.$disabled)return{foreground:e.colors.buttonDisabledSpinnerForeground,background:e.colors.buttonDisabledSpinnerBackground};switch(t){case n.TO.secondary:return{foreground:e.colors.buttonSecondarySpinnerForeground,background:e.colors.buttonSecondarySpinnerBackground};case n.TO.tertiary:return{foreground:e.colors.buttonTertiarySpinnerForeground,background:e.colors.buttonTertiarySpinnerBackground};case n.TO.minimal:return{foreground:e.colors.buttonMinimalSpinnerForeground,background:e.colors.buttonMinimalSpinnerBackground};case n.TO.primary:default:return{foreground:e.colors.buttonPrimarySpinnerForeground,background:e.colors.buttonPrimarySpinnerBackground}}}({$theme:e,$kind:t,$disabled:o}),l=i.foreground,p=i.background,c=e.sizing.scale550;return a!==n.NO.mini&&a!==n.NO.compact||(c=e.sizing.scale500),a===n.NO.large&&(c=e.sizing.scale600),{height:c,width:c,borderTopLeftRadius:"50%",borderTopRightRadius:"50%",borderBottomRightRadius:"50%",borderBottomLeftRadius:"50%",borderLeftStyle:"solid",borderTopStyle:"solid",borderRightStyle:"solid",borderBottomStyle:"solid",borderLeftWidth:e.sizing.scale0,borderTopWidth:e.sizing.scale0,borderRightWidth:e.sizing.scale0,borderBottomWidth:e.sizing.scale0,borderTopColor:l,borderLeftColor:p,borderBottomColor:p,borderRightColor:p,boxSizing:"border-box",display:"inline-block",animationDuration:e.animation.timing700,animationTimingFunction:"linear",animationIterationCount:"infinite",animationName:{to:{transform:"rotate(360deg)"},from:{transform:"rotate(0deg)"}}}}));function m(r){return{$disabled:r.disabled,$isLoading:r.isLoading,$isSelected:r.isSelected,$kind:r.kind,$shape:r.shape,$size:r.size}}f.displayName="LoadingSpinner";var g=t(9864),y=t(2338);function b(){return(b=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r}).apply(this,arguments)}function h(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var t=[],o=!0,a=!1,n=void 0;try{for(var i,l=r[Symbol.iterator]();!(o=(i=l.next()).done)&&(t.push(i.value),!e||t.length!==e);o=!0);}catch(r){a=!0,n=r}finally{try{o||null==l.return||l.return()}finally{if(a)throw n}}return t}}(r,e)||function(r,e){if(r){if("string"==typeof r)return v(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?v(r,e):void 0}}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=r[t];return o}function w(r){var e=r.Enhancer,t=function(r,e){if(null==r)return{};var t,o,a=function(r,e){if(null==r)return{};var t,o,a={},n=Object.keys(r);for(o=0;o<n.length;o++)t=n[o],e.indexOf(t)>=0||(a[t]=r[t]);return a}(r,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);for(o=0;o<n.length;o++)t=n[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(a[t]=r[t])}return a}(r,["Enhancer"]);return"string"==typeof e?e:g.isValidElementType(e)?o.createElement(e,t):e}function $(r){var e=r.children,t=r.overrides,a=void 0===t?{}:t,n=r.startEnhancer,i=r.endEnhancer,l=h((0,y.jb)(a.StartEnhancer,u),2),p=l[0],c=l[1],s=h((0,y.jb)(a.EndEnhancer,d),2),f=s[0],g=s[1],v=m(r);return o.createElement(o.Fragment,null,null!=n&&o.createElement(p,b({},v,c),o.createElement(w,{Enhancer:n})),e,null!=i&&o.createElement(f,b({},v,g),o.createElement(w,{Enhancer:i})))}var S={disabled:!1,isLoading:!1,isSelected:!1,kind:n.TO.primary,overrides:{},shape:n.X3.default,size:n.NO.default},O=t(3495);function R(r){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function k(){return(k=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r}).apply(this,arguments)}function P(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,o)}return t}function E(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?P(Object(t),!0).forEach((function(e){A(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function C(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var t=[],o=!0,a=!1,n=void 0;try{for(var i,l=r[Symbol.iterator]();!(o=(i=l.next()).done)&&(t.push(i.value),!e||t.length!==e);o=!0);}catch(r){a=!0,n=r}finally{try{o||null==l.return||l.return()}finally{if(a)throw n}}return t}}(r,e)||function(r,e){if(r){if("string"==typeof r)return j(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?j(r,e):void 0}}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=r[t];return o}function x(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function T(r,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}function L(r,e){return(L=Object.setPrototypeOf||function(r,e){return r.__proto__=e,r})(r,e)}function z(r,e){return!e||"object"!==R(e)&&"function"!=typeof e?N(r):e}function N(r){if(void 0===r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function M(r){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)})(r)}function A(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var B=function(r){!function(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&L(r,e)}(l,r);var e,t,a,n,i=(a=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(r){return!1}}(),function(){var r,e=M(a);if(n){var t=M(this).constructor;r=Reflect.construct(e,arguments,t)}else r=e.apply(this,arguments);return z(this,r)});function l(){var r;x(this,l);for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return A(N(r=i.call.apply(i,[this].concat(t))),"state",{isFocusVisible:!1}),A(N(r),"internalOnClick",(function(){for(var e=r.props,t=e.isLoading,o=e.onClick,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];t?n[0].preventDefault():o&&o.apply(void 0,n)})),A(N(r),"handleFocus",(function(e){(0,O.E)(e)&&r.setState({isFocusVisible:!0})})),A(N(r),"handleBlur",(function(e){!1!==r.state.isFocusVisible&&r.setState({isFocusVisible:!1})})),r}return e=l,(t=[{key:"render",value:function(){var r,e=this.props,t=e.overrides,a=void 0===t?{}:t,n=(e.size,e.kind,e.shape,e.isLoading),i=(e.isSelected,e.startEnhancer,e.endEnhancer,e.children,e.forwardedRef),l=function(r,e){if(null==r)return{};var t,o,a=function(r,e){if(null==r)return{};var t,o,a={},n=Object.keys(r);for(o=0;o<n.length;o++)t=n[o],e.indexOf(t)>=0||(a[t]=r[t]);return a}(r,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);for(o=0;o<n.length;o++)t=n[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(a[t]=r[t])}return a}(e,["overrides","size","kind","shape","isLoading","isSelected","startEnhancer","endEnhancer","children","forwardedRef"]),p=C((0,y.jb)(a.BaseButton||a.Root,c),2),d=p[0],u=p[1],g=C((0,y.jb)(a.LoadingSpinner,f),2),b=g[0],h=g[1],v=C((0,y.jb)(a.LoadingSpinnerContainer,s),2),w=v[0],S=v[1],R=E(E({},m(this.props)),{},{$isFocusVisible:this.state.isFocusVisible});return o.createElement(d,k({ref:i,"data-baseweb":"button"},n?(A(r={},"aria-label","loading ".concat("string"==typeof this.props.children?this.props.children:"")),A(r,"aria-busy","true"),r):{},R,l,u,{onClick:this.internalOnClick,onFocus:(0,O.Ah)(E(E({},l),u),this.handleFocus),onBlur:(0,O.Z5)(E(E({},l),u),this.handleBlur)}),n?o.createElement(o.Fragment,null,o.createElement("div",{style:{opacity:0,display:"flex",height:"0px"}},o.createElement($,this.props)),o.createElement(w,k({},R,S),o.createElement(b,k({},R,h)))):o.createElement($,this.props))}}])&&T(e.prototype,t),l}(o.Component);A(B,"defaultProps",S);var H=o.forwardRef((function(r,e){return o.createElement(B,k({forwardedRef:e},r))}));H.displayName="Button";const X=H},1075:(r,e,t)=>{"use strict";t.d(e,{TO:()=>o,X3:()=>a,NO:()=>n});var o={primary:"primary",secondary:"secondary",tertiary:"tertiary",minimal:"minimal"},a={default:"default",pill:"pill",round:"round",circle:"circle",square:"square"},n={mini:"mini",default:"default",compact:"compact",large:"large"}},2922:(r,e,t)=>{"use strict";t.d(e,{nN:()=>g,io:()=>y,Uc:()=>b,aM:()=>v});var o=t(7294),a=t(1141);function n(r){return void 0===r?null:r}function i(r,e){if(r)return r[e]}var l=(0,t(7265).zo)("div",(function(r){var e=r.$theme,t=e.breakpoints,o=e.colors,l=e.typography,p=e.sizing,c=function(r,e){return r[e]},d=function(r){return p[r]||r},u=function(r){var e={},t=(0,a.W)(r);return{apply:function(r){var o=r.property,a=r.transform,i=void 0===a?function(r){return r}:a,l=r.value;null!=l&&(Array.isArray(l)?l.forEach((function(r,a){if(0!==a){var l=t[a-1];e[l]||(e[l]={}),e[l][o]=n(i(r))}else e[o]=n(i(r))})):e[o]=n(i(l)))},value:function(){return e}}}(t);return u.apply({property:"color",value:c(r,"$color"),transform:function(r){return o[r]||r}}),u.apply({property:"backgroundAttachment",value:c(r,"$backgroundAttachment")}),u.apply({property:"backgroundClip",value:c(r,"$backgroundClip")}),u.apply({property:"backgroundColor",value:c(r,"$backgroundColor"),transform:function(r){return o[r]||r}}),u.apply({property:"backgroundImage",value:c(r,"$backgroundImage")}),u.apply({property:"backgroundOrigin",value:c(r,"$backgroundOrigin")}),u.apply({property:"backgroundPosition",value:c(r,"$backgroundPosition")}),u.apply({property:"backgroundRepeat",value:c(r,"$backgroundRepeat")}),u.apply({property:"backgroundSize",value:c(r,"$backgroundSize")}),u.apply({property:"fontFamily",value:c(r,"$font"),transform:function(r){return i(l[r],"fontFamily")}}),u.apply({property:"fontWeight",value:c(r,"$font"),transform:function(r){return i(l[r],"fontWeight")}}),u.apply({property:"fontSize",value:c(r,"$font"),transform:function(r){return i(l[r],"fontSize")}}),u.apply({property:"lineHeight",value:c(r,"$font"),transform:function(r){return i(l[r],"lineHeight")}}),u.apply({property:"alignContent",value:c(r,"$alignContent")}),u.apply({property:"alignItems",value:c(r,"$alignItems")}),u.apply({property:"alignSelf",value:c(r,"$alignSelf")}),u.apply({property:"display",value:c(r,"$display")}),u.apply({property:"flex",value:c(r,"$flex")}),u.apply({property:"flexDirection",value:c(r,"$flexDirection")}),u.apply({property:"grid",value:c(r,"$grid")}),u.apply({property:"gridArea",value:c(r,"$gridArea")}),u.apply({property:"gridAutoColumns",value:c(r,"$gridAutoColumns")}),u.apply({property:"gridAutoFlow",value:c(r,"$gridAutoFlow")}),u.apply({property:"gridAutoRows",value:c(r,"$gridAutoRows")}),u.apply({property:"gridColumn",value:c(r,"$gridColumn")}),u.apply({property:"gridColumnEnd",value:c(r,"$gridColumnEnd")}),u.apply({property:"gridColumnGap",value:c(r,"$gridColumnGap"),transform:d}),u.apply({property:"gridColumnStart",value:c(r,"$gridColumnStart")}),u.apply({property:"gridGap",value:c(r,"$gridGap"),transform:d}),u.apply({property:"gridRow",value:c(r,"$gridRow")}),u.apply({property:"gridRowEnd",value:c(r,"$gridRowEnd")}),u.apply({property:"gridRowGap",value:c(r,"$gridRowGap"),transform:d}),u.apply({property:"gridRowStart",value:c(r,"$gridRowStart")}),u.apply({property:"gridTemplate",value:c(r,"$gridTemplate")}),u.apply({property:"gridTemplateAreas",value:c(r,"$gridTemplateAreas")}),u.apply({property:"gridTemplateColumns",value:c(r,"$gridTemplateColumns")}),u.apply({property:"gridTemplateRows",value:c(r,"$gridTemplateRows")}),u.apply({property:"justifyContent",value:c(r,"$justifyContent")}),u.apply({property:"justifyItems",value:c(r,"$justifyItems")}),u.apply({property:"justifySelf",value:c(r,"$justifySelf")}),u.apply({property:"position",value:c(r,"$position")}),u.apply({property:"width",value:c(r,"$width"),transform:d}),u.apply({property:"minWidth",value:c(r,"$minWidth"),transform:d}),u.apply({property:"maxWidth",value:c(r,"$maxWidth"),transform:d}),u.apply({property:"height",value:c(r,"$height"),transform:d}),u.apply({property:"minHeight",value:c(r,"$minHeight"),transform:d}),u.apply({property:"maxHeight",value:c(r,"$maxHeight"),transform:d}),u.apply({property:"overflowX",value:c(r,"$overflow"),transform:function(r){return"scrollX"===r?"scroll":null}}),u.apply({property:"overflowY",value:c(r,"$overflow"),transform:function(r){return"scrollY"===r?"scroll":null}}),u.apply({property:"overflow",value:c(r,"$overflow"),transform:function(r){return"scrollX"!==r&&"scrollY"!==r?r:null}}),u.apply({property:"margin",value:c(r,"$margin"),transform:d}),u.apply({property:"marginTop",value:c(r,"$marginTop"),transform:d}),u.apply({property:"marginRight",value:c(r,"$marginRight"),transform:d}),u.apply({property:"marginBottom",value:c(r,"$marginBottom"),transform:d}),u.apply({property:"marginLeft",value:c(r,"$marginLeft"),transform:d}),u.apply({property:"padding",value:c(r,"$padding"),transform:d}),u.apply({property:"paddingTop",value:c(r,"$paddingTop"),transform:d}),u.apply({property:"paddingRight",value:c(r,"$paddingRight"),transform:d}),u.apply({property:"paddingBottom",value:c(r,"$paddingBottom"),transform:d}),u.apply({property:"paddingLeft",value:c(r,"$paddingLeft"),transform:d}),u.apply({property:"placeContent",value:c(r,"$placeContent")}),u.apply({property:"placeItems",value:c(r,"$placeItems")}),u.apply({property:"placeSelf",value:c(r,"$placeSelf")}),u.apply({property:"flexWrap",value:c(r,"$flexWrap"),transform:function(){return"wrap"}}),u.apply({property:"top",value:c(r,"$top"),transform:d}),u.apply({property:"right",value:c(r,"$right"),transform:d}),u.apply({property:"left",value:c(r,"$left"),transform:d}),u.apply({property:"bottom",value:c(r,"$bottom"),transform:d}),u.apply({property:"textOverflow",value:c(r,"$textOverflow")}),u.apply({property:"whiteSpace",value:c(r,"$whiteSpace")}),u.value()}));l.displayName="StyledBlock";var p=t(2338);function c(){return(c=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r}).apply(this,arguments)}function d(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=r[t];return o}function u(r){var e,t,a=r.forwardedRef,n=r.children,i=r.as,u=void 0===i?"div":i,s=r.overrides,f=void 0===s?{}:s,m=r.color,g=r.backgroundAttachment,y=r.backgroundClip,b=r.backgroundColor,h=r.backgroundImage,v=r.backgroundOrigin,w=r.backgroundPosition,$=r.backgroundRepeat,S=r.backgroundSize,O=r.font,R=r.alignContent,k=r.alignItems,P=r.alignSelf,E=r.flexDirection,C=r.display,j=r.flex,x=r.grid,T=r.gridArea,L=r.gridAutoColumns,z=r.gridAutoFlow,N=r.gridAutoRows,M=r.gridColumn,A=r.gridColumnEnd,B=r.gridColumnGap,H=r.gridColumnStart,X=r.gridGap,D=r.gridRow,F=r.gridRowEnd,I=r.gridRowGap,W=r.gridRowStart,G=r.gridTemplate,_=r.gridTemplateAreas,V=r.gridTemplateColumns,q=r.gridTemplateRows,U=r.justifyContent,Y=r.justifyItems,Z=r.justifySelf,J=r.position,K=r.width,Q=r.minWidth,rr=r.maxWidth,er=r.height,tr=r.minHeight,or=r.maxHeight,ar=r.overflow,nr=r.margin,ir=r.marginTop,lr=r.marginRight,pr=r.marginBottom,cr=r.marginLeft,dr=r.padding,ur=r.paddingTop,sr=r.paddingRight,fr=r.paddingBottom,mr=r.paddingLeft,gr=r.placeContent,yr=r.placeItems,br=r.placeSelf,hr=r.flexWrap,vr=r.left,wr=r.top,$r=r.right,Sr=r.bottom,Or=r.textOverflow,Rr=r.whiteSpace,kr=function(r,e){if(null==r)return{};var t,o,a=function(r,e){if(null==r)return{};var t,o,a={},n=Object.keys(r);for(o=0;o<n.length;o++)t=n[o],e.indexOf(t)>=0||(a[t]=r[t]);return a}(r,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);for(o=0;o<n.length;o++)t=n[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(a[t]=r[t])}return a}(r,["forwardedRef","children","as","overrides","color","backgroundAttachment","backgroundClip","backgroundColor","backgroundImage","backgroundOrigin","backgroundPosition","backgroundRepeat","backgroundSize","font","alignContent","alignItems","alignSelf","flexDirection","display","flex","grid","gridArea","gridAutoColumns","gridAutoFlow","gridAutoRows","gridColumn","gridColumnEnd","gridColumnGap","gridColumnStart","gridGap","gridRow","gridRowEnd","gridRowGap","gridRowStart","gridTemplate","gridTemplateAreas","gridTemplateColumns","gridTemplateRows","justifyContent","justifyItems","justifySelf","position","width","minWidth","maxWidth","height","minHeight","maxHeight","overflow","margin","marginTop","marginRight","marginBottom","marginLeft","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","placeContent","placeItems","placeSelf","flexWrap","left","top","right","bottom","textOverflow","whiteSpace"]),Pr=(e=(0,p.jb)(f.Block,l),t=2,function(r){if(Array.isArray(r))return r}(e)||function(r,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var t=[],o=!0,a=!1,n=void 0;try{for(var i,l=r[Symbol.iterator]();!(o=(i=l.next()).done)&&(t.push(i.value),!e||t.length!==e);o=!0);}catch(r){a=!0,n=r}finally{try{o||null==l.return||l.return()}finally{if(a)throw n}}return t}}(e,t)||function(r,e){if(r){if("string"==typeof r)return d(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?d(r,e):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),Er=Pr[0],Cr=Pr[1];return o.createElement(Er,c({ref:a,$as:u,$color:m,$backgroundAttachment:g,$backgroundClip:y,$backgroundColor:b,$backgroundImage:h,$backgroundOrigin:v,$backgroundPosition:w,$backgroundRepeat:$,$backgroundSize:S,$font:O,$alignContent:R,$alignItems:k,$alignSelf:P,$flexDirection:E,$display:C,$flex:j,$grid:x,$gridArea:T,$gridAutoColumns:L,$gridAutoFlow:z,$gridAutoRows:N,$gridColumn:M,$gridColumnEnd:A,$gridColumnGap:B,$gridColumnStart:H,$gridGap:X,$gridRow:D,$gridRowEnd:F,$gridRowGap:I,$gridRowStart:W,$gridTemplate:G,$gridTemplateAreas:_,$gridTemplateColumns:V,$gridTemplateRows:q,$justifyContent:U,$justifyItems:Y,$justifySelf:Z,$position:J,$width:K,$minWidth:Q,$maxWidth:rr,$height:er,$minHeight:tr,$maxHeight:or,$overflow:ar,$margin:nr,$marginTop:ir,$marginRight:lr,$marginBottom:pr,$marginLeft:cr,$padding:dr,$paddingTop:ur,$paddingRight:sr,$paddingBottom:fr,$paddingLeft:mr,$placeContent:gr,$placeItems:yr,$placeSelf:br,$flexWrap:hr,$left:vr,$top:wr,$right:$r,$bottom:Sr,$textOverflow:Or,$whiteSpace:Rr,"data-baseweb":"block"},kr,Cr),n)}var s=o.forwardRef((function(r,e){return o.createElement(u,c({},r,{forwardedRef:e}))}));s.displayName="Block";const f=s;function m(){return(m=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r}).apply(this,arguments)}var g=o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-displaylarge"},r,{font:r.font||"DisplayLarge",color:r.color||"contentPrimary",ref:e}))}));g.displayName="DisplayLarge";var y=o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-displaymedium"},r,{font:r.font||"DisplayMedium",color:r.color||"contentPrimary",ref:e}))}));y.displayName="DisplayMedium",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-displaysmall"},r,{font:r.font||"DisplaySmall",color:r.color||"contentPrimary",ref:e}))})).displayName="DisplaySmall",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-displayxsmall"},r,{font:r.font||"DisplayXSmall",color:r.color||"contentPrimary",ref:e}))})).displayName="DisplayXSmall",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-headingxxlarge",as:r.as||"h1"},r,{font:r.font||"HeadingXXLarge",color:r.color||"contentPrimary",ref:e}))})).displayName="HeadingXXLarge",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-headingxlarge",as:r.as||"h2"},r,{font:r.font||"HeadingXLarge",color:r.color||"contentPrimary",ref:e}))})).displayName="HeadingXLarge",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-headinglarge",as:r.as||"h3"},r,{font:r.font||"HeadingLarge",color:r.color||"contentPrimary",ref:e}))})).displayName="HeadingLarge",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-headingmedium",as:r.as||"h4"},r,{font:r.font||"HeadingMedium",color:r.color||"contentPrimary",ref:e}))})).displayName="HeadingMedium",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-headingsmall",as:r.as||"h5"},r,{font:r.font||"HeadingSmall",color:r.color||"contentPrimary",ref:e}))})).displayName="HeadingSmall",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-headingxsmall",as:r.as||"h6"},r,{font:r.font||"HeadingXSmall",color:r.color||"contentPrimary",ref:e}))})).displayName="HeadingXSmall",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-labellarge"},r,{font:r.font||"LabelLarge",color:r.color||"contentPrimary",ref:e}))})).displayName="LabelLarge";var b=o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-labelmedium"},r,{font:r.font||"LabelMedium",color:r.color||"contentPrimary",ref:e}))}));b.displayName="LabelMedium",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-labelsmall"},r,{font:r.font||"LabelSmall",color:r.color||"contentPrimary",ref:e}))})).displayName="LabelSmall";var h=o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-labelxsmall"},r,{font:r.font||"LabelXSmall",color:r.color||"contentPrimary",ref:e}))}));h.displayName="LabelXSmall",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-paragraphlarge",as:r.as||"p"},r,{font:r.font||"ParagraphLarge",color:r.color||"contentPrimary",ref:e}))})).displayName="ParagraphLarge",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-paragraphmedium",as:r.as||"p"},r,{font:r.font||"ParagraphMedium",color:r.color||"contentPrimary",ref:e}))})).displayName="ParagraphMedium";var v=o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-paragraphsmall",as:r.as||"p"},r,{font:r.font||"ParagraphSmall",color:r.color||"contentPrimary",ref:e}))}));v.displayName="ParagraphSmall";var w=o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-paragraphxsmall",as:r.as||"p"},r,{font:r.font||"ParagraphXSmall",color:r.color||"contentPrimary",ref:e}))}));w.displayName="ParagraphXSmall",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monodisplaylarge"},r,{font:r.font||"MonoDisplayLarge",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoDisplayLarge",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monodisplaymedium"},r,{font:r.font||"MonoDisplayMedium",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoDisplayMedium",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monodisplaysmall"},r,{font:r.font||"MonoDisplaySmall",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoDisplaySmall",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monodisplayxsmall"},r,{font:r.font||"MonoDisplayXSmall",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoDisplayXSmall",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monoheadingxxlarge",as:r.as||"h1"},r,{font:r.font||"MonoHeadingXXLarge",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoHeadingXXLarge",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monoheadingxlarge",as:r.as||"h2"},r,{font:r.font||"MonoHeadingXLarge",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoHeadingXLarge",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monoheadinglarge",as:r.as||"h3"},r,{font:r.font||"MonoHeadingLarge",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoHeadingLarge",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monoheadingmedium",as:r.as||"h4"},r,{font:r.font||"MonoHeadingMedium",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoHeadingMedium",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monoheadingsmall",as:r.as||"h5"},r,{font:r.font||"MonoHeadingSmall",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoHeadingSmall",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monoheadingxsmall",as:r.as||"h6"},r,{font:r.font||"MonoHeadingXSmall",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoHeadingXSmall",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monolabellarge"},r,{font:r.font||"MonoLabelLarge",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoLabelLarge",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monolabelmedium"},r,{font:r.font||"MonoLabelMedium",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoLabelMedium",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monolabelsmall"},r,{font:r.font||"MonoLabelSmall",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoLabelSmall",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monolabelxsmall"},r,{font:r.font||"MonoLabelXSmall",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoLabelXSmall",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monoparagraphlarge",as:r.as||"p"},r,{font:r.font||"MonoParagraphLarge",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoParagraphLarge",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monoparagraphmedium",as:r.as||"p"},r,{font:r.font||"MonoParagraphMedium",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoParagraphMedium",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monoparagraphsmall",as:r.as||"p"},r,{font:r.font||"MonoParagraphSmall",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoParagraphSmall",o.forwardRef((function(r,e){return o.createElement(f,m({"data-baseweb":"typo-monoparagraphxsmall",as:r.as||"p"},r,{font:r.font||"MonoParagraphXSmall",color:r.color||"contentPrimary",ref:e}))})).displayName="MonoParagraphXSmall";var $=w,S=h;o.forwardRef((function(r,e){return o.createElement($,m({},r,{color:r.color||"contentSecondary",ref:e}))})).displayName="Caption1",o.forwardRef((function(r,e){return o.createElement(S,m({},r,{color:r.color||"contentSecondary"}))})).displayName="Caption2"}}]);