(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{JoyC:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h});n("pJf4");var r=n("LpSC"),o=n.n(r),l=n("FdF9"),i=n("IGbE");var s=function(e){return function(t){return t["wm-property"]===e}},u=function(e){return e.filter(s("like-of"))},a=function(e){return e.filter(s("mention-of"))},c=function(e){return e.filter(s("repost-of"))},f=function(e){return e.filter(s("reply-of"))};function p(e){var t=e.webmention;return l.default.createElement("a",{href:t.author.url,title:t.author.name},l.default.createElement(i.a,{src:t.author.photo,width:64,height:64,quality:"lossless",format:"png"}))}function m(e){var t=e.webmentions;return l.default.createElement("ul",null,t.map(function(e){return l.default.createElement("li",{key:e["wm-id"]},l.default.createElement(p,{webmention:e}))}))}var h=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={error:null,isLoaded:!1,mentions:[],reposts:[],replies:[],likes:[]},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.fetchWebmentions=function(e){var t=this;o()("https://webmention.io/api/mentions.jf2?target="+e).then(function(e){return e.json()}).then(function(e){return e.children}).then(function(e){t.setState({reposts:c(e),mentions:a(e),likes:u(e),replies:f(e)})}).catch(console.error)},i.componentDidMount=function(){this.props.url&&this.fetchWebmentions(this.props.url)},i.render=function(){var e=this.state,t=e.likes,n=e.replies,r=e.reposts,o=e.mentions,i=t.length>0,s=(n.length,r.length>0);o.length;return!1===this.isLoaded?null:l.default.createElement("div",{className:"alex-webmentions"},i?l.default.createElement("div",{className:"alex-webmentions__likes"},l.default.createElement("h3",null,"Likes"),l.default.createElement(m,{webmentions:t})):null,s?l.default.createElement("div",{className:"alex-webmentions__reposts"},l.default.createElement("h3",null,"Reposts"),l.default.createElement(m,{webmentions:r})):null)},r}(l.Component)}}]);
//# sourceMappingURL=16-3928050c390895c49fea.js.map