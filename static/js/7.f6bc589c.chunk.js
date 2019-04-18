(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{278:function(e,t,a){"use strict";var n=a(1),r=a(2),l=a(3),i=a.n(l),c=a(0),o=a.n(c),s=a(5),u=a(82),m=function(e){return o.a.forwardRef(function(t,a){return o.a.createElement("div",Object(n.a)({},t,{ref:a,className:i()(t.className,e)}))})},d=a(28),f=o.a.forwardRef(function(e,t){var a=e.bsPrefix,l=e.className,c=e.variant,u=e.as,m=Object(r.a)(e,["bsPrefix","className","variant","as"]),d=Object(s.b)(a,"card-img");return o.a.createElement(u,Object(n.a)({ref:t,className:i()(c?d+"-"+c:d,l)},m))});f.displayName="CardImg",f.defaultProps={as:"img",variant:null};var h=f,b=m("h5"),p=m("h6"),E=Object(u.a)("card-body"),v=o.a.forwardRef(function(e,t){var a=e.bsPrefix,l=e.className,u=e.bg,m=e.text,f=e.border,h=e.body,b=e.children,p=e.as,v=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),g=Object(s.b)(a,"card"),y=Object(c.useMemo)(function(){return{cardHeaderBsPrefix:g+"-header"}},[g]);return o.a.createElement(d.a.Provider,{value:y},o.a.createElement(p,Object(n.a)({ref:t},v,{className:i()(l,g,u&&"bg-"+u,m&&"text-"+m,f&&"border-"+f)}),h?o.a.createElement(E,null,b):b))});v.displayName="Card",v.defaultProps={as:"div",body:!1},v.Img=h,v.Title=Object(u.a)("card-title",{Component:b}),v.Subtitle=Object(u.a)("card-subtitle",{Component:p}),v.Body=E,v.Link=Object(u.a)("card-link",{Component:"a"}),v.Text=Object(u.a)("card-text",{Component:"p"}),v.Header=Object(u.a)("card-header"),v.Footer=Object(u.a)("card-footer"),v.ImgOverlay=Object(u.a)("card-img-overlay");t.a=v},292:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(278),i=a(82),c=Object(i.a)("card-deck"),o=a(1),s=a(2),u=a(4),m=a(3),d=a.n(m),f=a(9),h=a.n(f),b=a(5),p=a(35),E=a(33),v=a(6),g=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).handleClick=function(e){var a=t.props,n=a.onClick;if(a.disabled)return e.preventDefault(),void e.stopPropagation();n&&n(e)},t}return Object(u.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,a=e.active,n=e.disabled,l=e.className,i=e.variant,c=e.action,u=e.as,m=e.eventKey,f=Object(s.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey"]);return r.a.createElement(E.a,Object(o.a)({},f,{eventKey:Object(v.b)(m,f.href),as:u||(c?f.href?"a":"button":"div"),onClick:this.handleClick,className:d()(l,t,a&&"active",n&&"disabled",i&&t+"-"+i,c&&t+"-action")}))},t}(r.a.Component);g.defaultProps={variant:null,active:!1,disabled:!1};var y=Object(b.a)(g,"list-group-item"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(u.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.className,a=e.bsPrefix,n=e.variant,l=Object(s.a)(e,["className","bsPrefix","variant"]);return r.a.createElement(p.a,Object(o.a)({},l,{className:d()(t,a,n&&a+"-"+n)}))},t}(r.a.Component);x.defaultProps={as:"div",variant:null};var w=h()(Object(b.a)(x,"list-group"),{activeKey:"onSelect"});w.Item=y;var j=w,O=function(){return r.a.createElement("div",{className:"LI-profile-badge","data-version":"v1","data-size":"medium","data-locale":"en_US","data-type":"horizontal","data-theme":"light","data-vanity":"byrne-greg"},r.a.createElement("a",{className:"LI-simple-link",href:"https://ie.linkedin.com/in/byrne-greg?trk=profile-badge"},"Greg Byrne"))},I=a(76),k=function(){return r.a.createElement(l.a.Body,null,r.a.createElement(l.a.Title,null,"What is this?"),r.a.createElement(l.a.Text,null,"If you haven't guessed by now, this web app is designed as a Cheat Sheet to TestCafe. It's aim is to accelerate your usage of TestCafe with quick information. It's not designed to be a replacement for TestCafe's documentation, but rather a quick \"what was that thing again?\" answer book."),r.a.createElement(l.a.Text,null,"Maybe the Jumbotron above wasn't as explicit as I had intended?",r.a.createElement("span",{role:"img","aria-label":"thinking-face"}," ","\ud83e\udd14")))},N=function(){return r.a.createElement(l.a.Body,null,r.a.createElement(l.a.Title,null,"Who created this... thing?"),r.a.createElement(l.a.Text,null,"All blame can be pointed to:"),r.a.createElement(O,null))},P=function(){return r.a.createElement(l.a.Body,null,r.a.createElement(l.a.Title,null,"Why would you create this?"),r.a.createElement(l.a.Text,null,"A number of reasons, really. The big drivers were:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.a.Text,null,"I had started innovating at work with TestCafe on a front-end offering and constantly read and referred back to the TestCafe documentation, often for the next tidbit of information I needed. In fairness to the TestCafe maintainers, their documentation is nicely laid out and their search bar is super helpful. I just wanted to be selfish and have what I thought as the important information in a single page that I could refer back to with ease.")),r.a.createElement("li",null,r.a.createElement(l.a.Text,null,r.a.createElement(r.a.Fragment,null,"I feel a sense of personal aimlessness if I'm not pumping out code or projects every so often. Partly inspired by",r.a.createElement(I.a,{href:"https://devhints.io/",text:"devhints.io",withPreceedingSpace:!0}),"; I found an excuse to actually read the TestCafe docs more in-depth, experiment more with component libraries, and chase Lighthouse approval metrics. As it's mostly static information, I felt like it was low-hanging fruit I could pump out fairly quickly while learn and experiment that little bit more."))),r.a.createElement("li",null,r.a.createElement(l.a.Text,null,"What else would I do with myself?",r.a.createElement("span",{role:"img","aria-label":"zany-face"}," ","\ud83e\udd2a")))))},T=function(){return r.a.createElement(l.a.Body,null,r.a.createElement(l.a.Title,null,"What is it made of?"),r.a.createElement(l.a.Subtitle,null,"Web App"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(I.a,{href:"https://facebook.github.io/create-react-app/",text:"create-react-app"})," - React, and all the fanciness that goes with create-react-app!"),r.a.createElement("li",null,r.a.createElement(I.a,{href:"https://react-bootstrap.netlify.com/",text:"react-bootstrap & bootstrap"})," - the lovely component library"),r.a.createElement("li",null,r.a.createElement(I.a,{href:"https://github.com/nkbt/react-copy-to-clipboard",text:"react-copy-to-cliboard"})," - for all my copying needs"),r.a.createElement("li",null,r.a.createElement(I.a,{href:"https://highlightjs.org/",text:"highlight.js"})," - code syntax highlighter")),r.a.createElement(l.a.Subtitle,null,"Build"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(I.a,{href:"https://github.com/",text:"Git"})," - for the version control"),r.a.createElement("li",null,r.a.createElement(I.a,{href:"https://travis-ci.org/",text:"Travis"})," - for the building on commit"),r.a.createElement("li",null,r.a.createElement(I.a,{href:"https://pages.github.com/",text:"Github Pages"})," - for the deployment as a static web application")),r.a.createElement(l.a.Subtitle,null,"Test"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(I.a,{href:"https://airbnb.io/enzyme/",text:"Enzyme"}))))};t.default=function(){return r.a.createElement(c,null,r.a.createElement(l.a,null,r.a.createElement(j,null,r.a.createElement(j.Item,null,r.a.createElement(k,null)),r.a.createElement(j.Item,null,r.a.createElement(N,null)),r.a.createElement(j.Item,null,r.a.createElement(P,null)),r.a.createElement(j.Item,null,r.a.createElement(T,null)))))}},76:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(278);t.a=function(e){var t=e.text,a=e.href,n=e.withPreceedingSpace,i=e.withSucceedingSpace,c=t;return n&&(c=" ".concat(c)),i&&(c="".concat(c," ")),r.a.createElement(l.a.Link,{href:a,target:"_blank",rel:"noopener noreferrer"},c)}},82:function(e,t,a){"use strict";a.d(t,"a",function(){return f});var n=a(1),r=a(2),l=a(3),i=a.n(l),c=a(0),o=a.n(c),s=a(44),u=a.n(s),m=a(5),d=function(e){return e[0].toUpperCase()+u()(e).slice(1)};function f(e,t){var a=void 0===t?{}:t,l=a.displayName,c=void 0===l?d(e):l,s=a.Component,u=void 0===s?"div":s,f=a.defaultProps,h=o.a.forwardRef(function(t,a){var l=t.className,c=t.bsPrefix,s=t.as,d=void 0===s?u:s,f=Object(r.a)(t,["className","bsPrefix","as"]),h=Object(m.b)(c,e);return o.a.createElement(d,Object(n.a)({ref:a,className:i()(l,h)},f))});return h.defaultProps=f,h.displayName=c,h}}}]);
//# sourceMappingURL=7.f6bc589c.chunk.js.map