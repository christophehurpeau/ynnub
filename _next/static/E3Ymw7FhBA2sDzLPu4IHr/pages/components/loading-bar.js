(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{299:function(e,t,a){__NEXT_REGISTER_PAGE("/components/loading-bar",function(){return e.exports=a(335),{page:e.exports.default}})},335:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(3),o=a(2),l=a(108),s=a.n(l);function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=function(){return Math.ceil(100*Math.random())/100},h=function(e){var t,a;function n(){var t,a,n,i,r,o,l;for(a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return t=e.call.apply(e,[this].concat(n))||this,r=c(c(t)),o="state",l=t.calcState(t.props),o in r?Object.defineProperty(r,o,{value:l,enumerable:!0,configurable:!0,writable:!0}):r[o]=l,t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.componentWillReceiveProps=function(e){e.hidden!==("none"===this.state.containerStyle.display)&&this.setState(this.calcState(e))},r.componentWillUnmount=function(){clearTimeout(this.fadeOffTimeout),clearTimeout(this.resetTimeout),clearTimeout(this.first20Timeout),clearInterval(this.progressTimer)},r.calcState=function(e){var t=this;return e.hidden?this.state?(clearTimeout(this.first20Timeout),clearInterval(this.progressTimer),this.fadeOffTimeout=setTimeout(function(){t.setState({containerStyle:{height:0,opacity:0,willChange:"display"},progress:{value:100,willChange:void 0}})},500),this.resetTimeout=setTimeout(function(){t.setState({containerStyle:{display:"none",willChange:"display"},progress:{value:1,willChange:void 0}})},1e3),{containerStyle:{willChange:"height, opacity"},progress:{value:100,willChange:void 0}}):{containerStyle:{display:"none",willChange:"display"},progress:{value:1,willChange:void 0}}:(clearTimeout(this.fadeOffTimeout),clearTimeout(this.resetTimeout),this.first20Timeout=setTimeout(function(){t.setState({progress:{value:20,willChange:"width"}})},100),this.progressTimer=setInterval(function(){t.setState(function(e){var t;return{progress:{value:(t=e.progress.value)<60?t+10*u()+5:t<70?t+10*u()+3:t<80?t+u()+5:t<90?t+u()+1:t<95?t+.1:t,willChange:"width"}}})},500),{containerStyle:{},progress:{value:1,willChange:"width"}})},r.render=function(){return i.a.createElement("div",{className:s.a.loadingBar,style:this.state.containerStyle},i.a.createElement("div",{className:s.a.progress,style:{width:this.state.progress.value+"%",willChange:this.state.progress.willChange}}))},n}(n.Component);t.default=function(){return i.a.createElement(r.b,null,i.a.createElement("h1",{className:o.a.headline},"Loading Bars"),i.a.createElement("h2",{className:o.a.title},"Imports"),i.a.createElement("pre",null,i.a.createElement("code",null,"\nimport LoadingBar from 'ynnub/components/LoadingBar';\n".trim())),i.a.createElement("h2",{className:o.a.title},"Example of LoadingBar"),i.a.createElement(r.a,{source:"<LoadingBar hidden={false} />",result:i.a.createElement(h,{hidden:!1})}))}}},[[299,1,0,2]]]);