(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{296:function(e,t,a){__NEXT_REGISTER_PAGE("/components/labels",function(){return e.exports=a(333),{page:e.exports.default}})},333:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),s=a(2),c=a(1),i=a(46),m=a.n(i);var o=function(e){var t=e.children,a=e.variation,n=e.className,r=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,["children","variation","className"]);return l.a.createElement("span",Object.assign({className:m.a.label+" "+(a?m.a[a]:"")+" "+(n||"")},r),t)};t.default=function(){return l.a.createElement(r.b,null,l.a.createElement("h1",{className:s.a.headline},"Labels"),l.a.createElement("h2",{className:s.a.title},"Imports"),l.a.createElement("pre",null,l.a.createElement("code",null,"\nimport Label from 'ynnub/components/Label';\n".trim())),l.a.createElement("h2",{className:s.a.title},"Basic labels in list"),l.a.createElement(r.a,{source:'<List>\n  <ListItem text="Item 1"><Label>Successfully saved</Label></ListItem>\n  <ListItem text="Item 2"><Label variation="success">Done</Label></ListItem>\n  <ListItem text="Item 3"><Label variation="error">Invalid data</Label></ListItem>\n  <ListItem text="Item 4"><Label variation="warning">Be careful</Label></ListItem>\n</List>',result:l.a.createElement(c.c,null,l.a.createElement(c.b,{text:"Item 1"},l.a.createElement(o,null,"Successfully saved")),l.a.createElement(c.b,{text:"Item 2"},l.a.createElement(o,{variation:"success"},"Done")),l.a.createElement(c.b,{text:"Item 3"},l.a.createElement(o,{variation:"error"},"Invalid data")),l.a.createElement(c.b,{text:"Item 4"},l.a.createElement(o,{variation:"warning"},"Be careful")))}),"See also: ",l.a.createElement("a",{href:"badges"},"Badges"))}}},[[296,1,0,2]]]);