(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"1j/A":function(e,t,a){(function(t){e.exports={fetch:t.fetch}}).call(this,a("eKGF"))},Bl7J:function(e,t,a){"use strict";var r=a("FdF9"),n=a("LbRr"),l=a("W/9C");a("sQfG");t.a=function(e){var t=e.location,a=e.children,i=r.default.createElement(n.a,{location:t}),c=r.default.createElement(l.a,null),s=r.Children.toArray(a).filter(function(e){return e.type===n.a||n.a.isPrototypeOf(e.type)?(i=e,!1):e.type!==l.a&&!l.a.isPrototypeOf(e.type)||(c=e,!1)});return r.default.createElement(r.default.Fragment,null,i,r.default.createElement("main",null,s),c)}},LbRr:function(e,t,a){"use strict";var r=a("9Hrx"),n=a("Wbzz"),l=a("FdF9"),i=function(e){var t=e instanceof HTMLImageElement||e instanceof Image,a=t?e:new Image;return t||(a.src=e),new Promise(function(t,r){a.addEventListener("load",function(a){return t(e)}),a.addEventListener("error",r),a.complete&&t(e)})},c=a("LpSC"),s=a.n(c),u=function(e){var t=e.url,a=e.children,r=e.rel;return/^(https?:)?\/\//.test(t)?l.default.createElement("a",{rel:r,href:t},a):l.default.createElement(n.a,{to:t},a)},o=function(e){var t=e.url,a=e.rel,r=e.active,n=e.children;return l.default.createElement("li",{className:"alex-header__nav-item "+(r?"alex-header__nav-item--active":null)},l.default.createElement(u,{rel:a,url:t},n))},d=function(){return l.default.createElement("li",{className:"alex-header__nav-item alex-header__nav-item--spacer"})},m=function(e){var t=e.src,a=e.title;return l.default.createElement("img",{src:t,alt:a,className:"large",height:"1em"})},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={preloadedImage:void 0},a}Object(r.a)(t,e);var a=t.prototype;return a.preloadImage=function(e){var t=this,a=this.imageService(this.props.src,[]);i(new Image(a)).then(function(){return t.setState({preloadedImage:a})}).catch(function(){})},a.imageService=function(e,t){return void 0===t&&(t=[]),"https://imagecdn.app/v2/image/"+encodeURIComponent(e)+"?"+t.join("&")},a.render=function(){var e=this.props.src;return l.default.createElement("div",{className:"alex-header-image"},l.default.createElement("picture",{className:"alex-header-image--container"},l.default.createElement("img",{alt:"Header",className:"alex-header-image__blur",onLoad:this.preloadImage.bind(this,e),src:null!==e?this.imageService(e,["width=25","height=10","quality=low","format=jpg"]):null}),l.default.createElement("img",{alt:"Header",className:"alex-header-image__main",src:this.state.preloadedImage,style:{opacity:void 0!==this.state.preloadedImage?1:0}})))},t}(l.Component),h=function(e){function t(t){var a;return(a=e.call(this,t)||this).header=l.default.createRef(),a.headerNav=l.default.createRef(),a.state={backgroundImage:t.image,backgroundImageLoaded:!1},a}Object(r.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.header.current.style.top="-"+(this.header.current.offsetHeight-this.headerNav.current.offsetHeight)+"px",this.header.current.style.position="sticky",this.state.backgroundImage&&null!==this.state.backgroundImage||this.fetchRandomImage()},a.fetchRandomImage=function(){var e=this;s()("https://random.responsiveimages.io/v1/image?"+["format=json","provider=custom-v1:http://random-images-v1.s3-website.eu-west-1.amazonaws.com"].join("&")).then(function(e){return e.json()}).then(function(t){t.url&&e.setState({backgroundImage:t.url})}).catch(function(e){return null})},a.render=function(){var e=this.props.location.pathname,t=this.props.name?this.props.name:"Alex Wilson",a=this.props.intro?this.props.intro:"Software Engineer, Technical Architect — Helping build a better, faster internet.";return l.default.createElement("header",{role:"banner",className:"alex-header",ref:this.header},l.default.createElement(f,{src:this.state.backgroundImage}),l.default.createElement("div",{className:"alex-header--container"},l.default.createElement("div",{className:"alex-header__about"},l.default.createElement("h1",{className:"alex-header__name"},t),l.default.createElement("span",{className:"alex-header__intro"},a)),l.default.createElement("nav",null,l.default.createElement("ul",{className:"alex-header__nav",id:"menu",ref:this.headerNav},l.default.createElement(o,{url:"/",active:"/"===e},"Home"),l.default.createElement(o,{url:"/about-me/",active:e.startsWith("/about-me/")},"About Me"),l.default.createElement(o,{url:"/blog/",active:e.startsWith("/blog/")},"Blog"),l.default.createElement(o,{url:"/talks/",active:e.startsWith("/talks/")},"Talks"),l.default.createElement(o,{url:"/consultancy/",active:e.startsWith("/consultancy/")},"Hire Me"),l.default.createElement(d,null),l.default.createElement(o,{url:"https://twitter.com/AlexWilsonV1",rel:"me"},l.default.createElement(m,{src:"/svg/twitter.svg",title:"Twitter"})),l.default.createElement(o,{url:"https://www.linkedin.com/in/alex-/",rel:"me"},l.default.createElement(m,{src:"/svg/linkedin.svg",title:"LinkedIn"})),l.default.createElement(o,{url:"https://github.com/alexwilson",rel:"me"},l.default.createElement(m,{src:"/svg/github.svg",title:"Github"}))))))},t}(l.Component);h.defaultProps={siteTitle:"Alex Wilson",image:null};t.a=h},LpSC:function(e,t,a){a("1j/A"),e.exports=self.fetch.bind(self)},"W/9C":function(e,t,a){"use strict";var r=a("9Hrx"),n=a("FdF9"),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return n.default.createElement("footer",{className:"footer"},n.default.createElement("div",{className:"container align-center"},n.default.createElement("span",{className:"text-muted"},"© Alex Wilson ",(new Date).getFullYear())))},t}(n.Component);t.a=l},eKGF:function(e,t){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(r){"object"==typeof window&&(a=window)}e.exports=a},eYzd:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return i});var r=a("FdF9"),n=a("Bl7J"),l=a("vrv3");t.default=function(e){var t=e.data,a=e.location,i=t.markdownRemark;return r.default.createElement(n.a,{location:a},r.default.createElement("div",{class:"alex-article"},r.default.createElement("div",{class:"alex-article__main"},r.default.createElement("h1",{itemprop:"name headline"},i.frontmatter.title),r.default.createElement("article",{dangerouslySetInnerHTML:{__html:i.html},className:"alex-article__body article-description",itemprop:"articleBody"}),r.default.createElement("h3",{class:"share"},"Share"),r.default.createElement(l.a,{title:i.frontmatter.title,url:new URL(a.pathname,t.site.siteMetadata.siteUrl)})),r.default.createElement("div",{class:"alex-article__aside"})))};var i="1409571271"},sQfG:function(e,t,a){},vrv3:function(e,t,a){"use strict";var r=a("FdF9");t.a=function(e){var t=e.url,a=e.title;return r.default.createElement("div",{className:"alex-share"},r.default.createElement("ul",null,r.default.createElement("li",null,r.default.createElement("a",{href:"https://twitter.com/intent/tweet?url="+t+"&amp;text="+a+"&amp;related=AlexWilsonV1&amp;via=AlexWilsonV1"},r.default.createElement("img",{src:"/svg/twitter.svg",alt:"Twitter",title:"Share on Twitter"}))),r.default.createElement("li",null,r.default.createElement("a",{href:"http://www.facebook.com/sharer.php?u="+t+"&amp;t="+a},r.default.createElement("img",{src:"/svg/facebook.svg",alt:"Facebook",title:"Share on Facebook"}))),r.default.createElement("li",null,r.default.createElement("a",{href:"http://www.linkedin.com/shareArticle?mini=true&amp;url="+t+"&amp;title="+a},r.default.createElement("img",{src:"/svg/linkedin.svg",alt:"LinkedIn",title:"Share on LinkedIn"}))),r.default.createElement("li",null,r.default.createElement("a",{href:"http://reddit.com/submit?url="+t+"&amp;title="+a},r.default.createElement("img",{src:"/svg/reddit.svg",alt:"Reddit",title:"Share on Reddit"})))))}}}]);
//# sourceMappingURL=component---src-templates-talk-js-a5c3578e1fde375f1ba5.js.map