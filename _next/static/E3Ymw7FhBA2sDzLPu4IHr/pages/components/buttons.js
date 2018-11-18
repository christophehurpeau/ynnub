(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{106:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l=o(n(0)),r=o(n(74));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return l.default.createElement(r.default,a({viewBox:"0 0 40 40"},e),l.default.createElement("g",null,l.default.createElement("path",{d:"m20.1 17.5h16.2q0.3 1.5 0.3 2.9 0 4.8-2 8.7t-5.8 5.9-8.7 2.1q-3.5 0-6.6-1.3t-5.5-3.7-3.7-5.4-1.3-6.7 1.3-6.7 3.7-5.4 5.5-3.7 6.6-1.3q6.7 0 11.5 4.4l-4.6 4.5q-2.8-2.6-6.9-2.6-2.8 0-5.3 1.4t-3.9 4-1.4 5.4 1.4 5.4 3.9 4 5.3 1.4q2 0 3.6-0.5t2.7-1.3 1.8-1.9 1.2-1.9 0.5-1.8h-9.8v-5.9z"})))},e.exports=t.default},11:function(e,t,n){"use strict";var a=n(0),l=n.n(a);t.a=function(e){var t=e.value,n=e.className,a=void 0===n?"":n,r=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["value","className"]);return"string"==typeof t?l.a.createElement("span",Object.assign({className:"material-icons "+a},r),t):l.a.cloneElement(t,{className:a+" "+(t.props.className||""),style:{verticalAlign:"text-bottom"}})}},19:function(e,t,n){"use strict";var a=n(0),l=n.n(a),r=n(14),o=n.n(r);t.a=function(e){var t=e.className,n=e.responsive,a=e.withGutter,r=e.justifyContent,c=void 0===r?"flex-start":r,i=e.alignItems,s=void 0===i?"stretch":i,u=e.alignContent,f=void 0===u?"stretch":u,d=e.flow,m=void 0===d?"row nowrap":d,b=e.children,p=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["className","responsive","withGutter","justifyContent","alignItems","alignContent","flow","children"]);return l.a.createElement("div",Object.assign({className:(o.a.flex||"")+" "+(a&&o.a.withGutter||"")+" "+(n&&o.a.responsive||"")+" "+(t||""),style:{justifyContent:c,alignItems:s,alignContent:f,flexFlow:m}},p),b)}},285:function(e,t,n){__NEXT_REGISTER_PAGE("/components/buttons",function(){return e.exports=n(286),{page:e.exports.default}})},286:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(6),o=n(5),c=n(2),i=n(106),s=n.n(i),u=n(3),f=function(e){return e.preventDefault(),!1};t.default=function(){return l.a.createElement(u.b,null,l.a.createElement("h1",{className:c.a.headline},"Buttons"),l.a.createElement("h2",{className:c.a.title},"Imports"),l.a.createElement("pre",null,l.a.createElement("code",null,"\nimport Button from 'ynnub/components/Button';\n".trim())),l.a.createElement("h2",{className:c.a.title},"Basic Button (Raised)"),l.a.createElement(u.a,{source:'<FlexGrid flow="row wrap">\n  <FlexItems padding="1rem">\n    <Button label="Click me !" />\n    <Button disabled label="Disabled" />\n    <Button label="Icon" icon="favorite" />\n    <Button label="Icon" icon={<GoogleIcon />} />\n    <Button icon="favorite" />\n    <Button compact label="Compact" />\n    <Button dense label="Dense" />\n    <Button inProgress label="In progress" icon="favorite" />\n    <Button\nlabel="Confirm (Doesn\'t work because not rehydrated)"\nconfirm="Are you sure ?" />\n\n  </FlexItems>\n</FlexGrid>',result:l.a.createElement(o.a,{flow:"row wrap"},l.a.createElement(o.c,{padding:"1rem"},l.a.createElement(r.a,{label:"Click me !"}),l.a.createElement(r.a,{disabled:!0,label:"Disabled"}),l.a.createElement(r.a,{label:"Icon",icon:"favorite"}),l.a.createElement(r.a,{label:"Icon",icon:l.a.createElement(s.a,null)}),l.a.createElement(r.a,{icon:"favorite"}),l.a.createElement(r.a,{compact:!0,label:"Compact"}),l.a.createElement(r.a,{dense:!0,label:"Dense"}),l.a.createElement(r.a,{inProgress:!0,label:"In progress",icon:"favorite"}),l.a.createElement(r.a,{label:"Confirm (Doesn't work because not rehydrated)",confirm:"Are you sure ?"})))}),l.a.createElement("h2",{className:c.a.title},"Link Button"),l.a.createElement(u.a,{source:'<FlexGrid flow="row wrap">\n  <FlexItems padding="1rem">\n    <Button href="#" label="Link to something" onClick={onClick} />\n    <Button href="#" label="Icon" icon="favorite" onClick={onClick} />\n    <Button compact href="#" label="Compact" onClick={onClick} />\n    <Button dense href="#" label="Dense" onClick={onClick} />\n    <Button\ncompact\ndense\nhref="#"\nlabel="Compact Dense"\nonClick={onClick} />\n\n  </FlexItems>\n</FlexGrid>',result:l.a.createElement(o.a,{flow:"row wrap"},l.a.createElement(o.c,{padding:"1rem"},l.a.createElement(r.a,{href:"#",label:"Link to something",onClick:f}),l.a.createElement(r.a,{href:"#",label:"Icon",icon:"favorite",onClick:f}),l.a.createElement(r.a,{compact:!0,href:"#",label:"Compact",onClick:f}),l.a.createElement(r.a,{dense:!0,href:"#",label:"Dense",onClick:f}),l.a.createElement(r.a,{compact:!0,dense:!0,href:"#",label:"Compact Dense",onClick:f})))}),l.a.createElement("h2",{className:c.a.title},"Flat Button"),l.a.createElement(u.a,{source:'<FlexGrid flow="row wrap">\n  <FlexItems padding="1rem">\n    <Button flat label="Click me !" />\n    <Button flat disabled label="Disabled" />\n    <Button flat label="Icon" icon="favorite" />\n    <Button flat label="Icon" icon={<GoogleIcon />} />\n    <Button icon="favorite" />\n    <Button flat compact label="Compact" />\n    <Button flat dense label="Dense" />\n    <Button flat inProgress label="In progress" icon="favorite" />\n    <Button\nflat\nlabel="Confirm (Doesn\'t work because not rehydrated)"\nconfirm="Are you sure ?" />\n\n  </FlexItems>\n</FlexGrid>',result:l.a.createElement(o.a,{flow:"row wrap"},l.a.createElement(o.c,{padding:"1rem"},l.a.createElement(r.a,{flat:!0,label:"Click me !"}),l.a.createElement(r.a,{flat:!0,disabled:!0,label:"Disabled"}),l.a.createElement(r.a,{flat:!0,label:"Icon",icon:"favorite"}),l.a.createElement(r.a,{flat:!0,label:"Icon",icon:l.a.createElement(s.a,null)}),l.a.createElement(r.a,{icon:"favorite"}),l.a.createElement(r.a,{flat:!0,compact:!0,label:"Compact"}),l.a.createElement(r.a,{flat:!0,dense:!0,label:"Dense"}),l.a.createElement(r.a,{flat:!0,inProgress:!0,label:"In progress",icon:"favorite"}),l.a.createElement(r.a,{flat:!0,label:"Confirm (Doesn't work because not rehydrated)",confirm:"Are you sure ?"})))}))}},5:function(e,t,n){"use strict";var a=n(19),l=n(0),r=n.n(l);var o=function(e){return!0===e?1:e},c=function(e){var t=e.align,n=e.grow,a=void 0===n?0:n,l=e.shrink,c=void 0===l?0:l,i=e.basis,s=void 0===i?"auto":i,u=e.order,f=e.padding,d=e.children,m=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["align","grow","shrink","basis","order","padding","children"]);return r.a.createElement("div",Object.assign({style:{alignSelf:t,flex:o(a)+" "+o(c)+" "+s,order:u,padding:f}},m),d)};var i=function(e){var t=e.children,n=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["children"]);return r.a.createElement(r.a.Fragment,null,t.map(function(e,t){return r.a.createElement(c,Object.assign({key:t},n),e)}))};n.d(t,"a",function(){return a.a}),n.d(t,"c",function(){return i}),n.d(t,"b",function(){return c})},6:function(e,t,n){"use strict";var a=n(0),l=n.n(a),r=n(11),o=n(26),c=n.n(o);var i=function(e){var t=e.className,n=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["className"]);return l.a.createElement("svg",Object.assign({className:c.a.spinner+" "+t,width:"65px",height:"65px",viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg"},n),l.a.createElement("circle",{className:c.a.path,fill:"none",strokeWidth:"6",strokeLinecap:"round",cx:"33",cy:"33",r:"30"}))};n(104);var s=function(e){return e.preventDefault(),!1};t.a=function(e){var t=e.href,n=e.as,a=void 0===n?t?"a":"button":n,o=e.className,c=e.icon,u=e.label,f=e.children,d=e.unelevated,m=e.flat,b=e.stroked,p=e.compact,v=e.dense,h=e.inProgress,g=e.disabled,E=(e.confirm,e.onClick),w=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["href","as","className","icon","label","children","unelevated","flat","stroked","compact","dense","inProgress","disabled","confirm","onClick"]);if("button"!==a&&g)throw new Error("Cannot disable a link");return u||(u=f),l.a.createElement(a,Object.assign({href:t,className:"mdc-button "+(u?"":"mdl-button--icon")+" "+(d?"mdc-button--unelevated":"")+" "+(!u||m||d?"":"mdc-button--raised")+" "+(b?"mdc-button--stroked":"")+" "+(p?"mdc-button--compact":"")+" "+(v?"mdc-button--dense":"")+" "+(o||""),disabled:h||g,onClick:h?s:E},w),(h||c)&&l.a.createElement(r.a,{key:"icon",value:h?l.a.createElement(i,null):c,className:"mdc-button__icon"}),u)}},74:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l=o(n(0)),r=o(n(32));function o(e){return e&&e.__esModule?e:{default:e}}var c=function(e,t){var n=e.children,r=e.color,o=e.size,c=e.style,i=e.width,s=e.height,u=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["children","color","size","style","width","height"]),f=t.reactIconBase,d=void 0===f?{}:f,m=o||d.size||"1em";return l.default.createElement("svg",a({children:n,fill:"currentColor",preserveAspectRatio:"xMidYMid meet",height:s||m,width:i||m},d,u,{style:a({verticalAlign:"middle",color:r||d.color},d.style||{},c)}))};c.propTypes={color:r.default.string,size:r.default.oneOfType([r.default.string,r.default.number]),width:r.default.oneOfType([r.default.string,r.default.number]),height:r.default.oneOfType([r.default.string,r.default.number]),style:r.default.object},c.contextTypes={reactIconBase:r.default.shape(c.propTypes)},t.default=c,e.exports=t.default}},[[285,1,0,2]]]);