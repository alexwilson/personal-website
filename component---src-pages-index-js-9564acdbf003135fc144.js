(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{189:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return s});var n=a(0),r=a.n(n),i=a(198),l=a(201),c=a(217),s="219697681";t.default=function(e){var t=e.data,a=e.location;return r.a.createElement(i.a,{location:a},r.a.createElement(c.a,{title:"Home",keywords:["gatsby","application","react"]}),r.a.createElement("div",{className:"alex-home"},r.a.createElement("section",{className:"alex-home__section"},r.a.createElement("h1",null,r.a.createElement("a",{className:"heading",href:"/blog/"},"Recent Content")),r.a.createElement("div",{className:"alex-home__tilestack"},t.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.a.createElement("div",{key:t.id,className:"alex-home__tilestack-item"},r.a.createElement(l.a,{article:t,withImage:!1,withDate:!1}))})))))}},194:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(34),s=a.n(c);a.d(t,"a",function(){return s.a});a(195);var o=r.a.createContext({}),m=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},195:function(e,t,a){var n;e.exports=(n=a(196))&&n.default||n},196:function(e,t,a){"use strict";a.r(t);a(35);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),c=a(60),s=a(2),o=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=o},197:function(e){e.exports={data:{site:{siteMetadata:{title:"Alex Wilson"}}}}},198:function(e,t,a){"use strict";var n=a(197),r=a(0),i=a.n(r),l=a(4),c=a.n(l),s=a(194),o=(a(199),a(7)),m=a.n(o),u=function(e){var t=e.url,a=e.children;return/^(https?:)?\/\//.test(t)?i.a.createElement("a",{href:t},a):i.a.createElement(s.a,{to:t},a)},d=function(e){var t=e.url,a=e.active,n=e.children;return i.a.createElement("li",{className:"alex-header__nav-item "+(a?"alex-header__nav-item--active":null)},i.a.createElement(u,{url:t},n))},h=function(){return i.a.createElement("li",{className:"alex-header__nav-item alex-header__nav-item--spacer"})},p=function(e){var t=e.src,a=e.title;return i.a.createElement("img",{src:t,alt:a,className:"large",height:"1em"})},g=function(e){function t(t){var a;return(a=e.call(this,t)||this).header=i.a.createRef(),a.headerNav=i.a.createRef(),a}m()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.header.current.style.top="-"+(this.header.current.offsetHeight-this.headerNav.current.offsetHeight)+"px",this.header.current.style.position="sticky"},a.render=function(){var e=this.props.location.pathname,t={};return this.props.image&&(t.backgroundImage="url('https://imagecdn.app/v2/image/"+encodeURIComponent(this.props.image)+"')"),i.a.createElement("header",{role:"banner",className:"alex-header "+(this.props.image?"alex-header--with-image":null),ref:this.header,style:t},i.a.createElement("div",{className:"alex-header--container"},i.a.createElement("div",{className:"alex-header__about"},i.a.createElement("h1",{className:"alex-header__name"},"Alex Wilson"),i.a.createElement("span",{className:"alex-header__intro"},"Software Engineer, Technical Architect — Helping build a better, faster internet.")),i.a.createElement("nav",null,i.a.createElement("ul",{className:"alex-header__nav",id:"menu",ref:this.headerNav},i.a.createElement(d,{url:"/",active:"/"===e},"Home"),i.a.createElement(d,{url:"/about-me/",active:e.startsWith("/about-me/")},"About Me"),i.a.createElement(d,{url:"/blog/",active:e.startsWith("/blog/")},"Blog"),i.a.createElement(d,{url:"/talks/",active:e.startsWith("/talks/")},"Talks"),i.a.createElement(h,null),i.a.createElement(d,{url:"https://twitter.com/antoligy"},i.a.createElement(p,{src:"/svg/twitter.svg",title:"Twitter"})),i.a.createElement(d,{url:"https://www.linkedin.com/in/alex-/"},i.a.createElement(p,{src:"/svg/linkedin.svg",title:"LinkedIn"})),i.a.createElement(d,{url:"https://github.com/antoligy"},i.a.createElement(p,{src:"/svg/github.svg",title:"Github"}))))))},t}(r.Component);g.propTypes={siteTitle:c.a.string,image:c.a.string},g.defaultProps={siteTitle:"",image:null};var f=g;a(203),t.a=function(e){var t=e.location,a=e.children,r=e.headerImage,l=void 0===r?null:r;return i.a.createElement(s.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,{siteTitle:e.site.siteMetadata.title,location:t,image:l}),i.a.createElement("main",null,a),i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"container align-center"},i.a.createElement("span",{className:"text-muted"},"© Alex Wilson ",(new Date).getFullYear()))))},data:n})}},200:function(e,t,a){"use strict";a.d(t,"a",function(){return i});a(207),a(208);var n=a(0),r=a.n(n);function i(e){var t=e.src,a=e.alt,n=e.width,i=e.height,l=e.className,c=[];return Number.isInteger(n)&&c.push("width="+n),Number.isInteger(i)&&c.push("height="+i),r.a.createElement("img",{src:"https://imagecdn.app/v2/image/"+encodeURIComponent(t)+"?"+c.join("&"),className:"responsive "+l,alt:a})}},201:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(194),r=a(212),i=(a(4),a(0)),l=a.n(i),c=a(200);function s(e){var t=e.article,a=e.withBody,i=void 0===a||a,s=e.withImage,o=void 0===s||s,m=e.withDate,u=void 0===m||m,d=new Date(t.fields.date);return l.a.createElement("div",{className:"alex-card"},l.a.createElement("div",{className:"alex-card__content--container"},l.a.createElement("div",{className:"alex-card__title"},l.a.createElement("h3",null,l.a.createElement(n.a,{to:t.fields.slug},t.frontmatter.title))),!1!==i?l.a.createElement("div",{className:"alex-card__abstract"},l.a.createElement("p",null,t.excerpt)):null,!1!==u?l.a.createElement("div",{className:"alex-card__timetamp"},l.a.createElement("span",{className:"dateline"},l.a.createElement("time",{dateTime:d.toISOString()},Object(r.format)(d,"D MMM YYYY")))):null),!1!==o&&t.fields.thumbnail?l.a.createElement("div",{className:"alex-card__image"},l.a.createElement(c.a,{src:t.fields.thumbnail,width:400})):null)}},202:function(e,t,a){"use strict";var n=function(){return{"@type":"ImageObject","@context":"http://schema.org",url:"https://avatars.githubusercontent.com/u/440052",width:460,height:460}};t.a=function(){return{"@type":"Organization","@context":"http://schema.org",name:"Alex Wilson",logo:n(),url:"https://alexwilson.tech",sameAs:["https://www.twitter.com/antoligy","https://www.linkedin.com/in/alex-","https://github.com/antoligy"]}}},210:function(e,t,a){"use strict";var n=a(202);t.a=function(){return{"@type":"Person",name:"Alex",memberOf:Object(n.a)(),givenName:"Alex",familyName:"Wilson"}}},217:function(e,t,a){"use strict";var n=a(218),r=a(0),i=a.n(r),l=a(4),c=a.n(l),s=a(240),o=a.n(s),m=a(202),u=a(210);function d(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,c=e.title,s=e.children,d=n.data.site,h=t||d.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s - "+d.siteMetadata.title,meta:[{name:"description",content:h},{property:"og:title",content:c},{property:"og:description",content:h},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:d.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:h}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)},i.a.createElement("link",{rel:"alternate",type:"application/rss+xml",title:"Alex Wilson's writing via RSS",href:"/feed.xml"}),i.a.createElement("script",{type:"application/ld+json"},JSON.stringify({"@type":"WebPage","@context":"http://schema.org",name:d.siteMetadata.title,description:d.siteMetadata.description,copyrightHolder:Object(u.a)(),publisher:Object(m.a)()})),s)}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d},218:function(e){e.exports={data:{site:{siteMetadata:{title:"Alex Wilson",description:"Software Engineer, Technical Architect — Helping build a better, faster internet.",author:"@antoligy"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-9564acdbf003135fc144.js.map