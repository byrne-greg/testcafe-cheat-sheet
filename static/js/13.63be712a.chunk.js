(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{269:function(e,a,t){"use strict";var n=t(81),l=t(0),r=t.n(l),o=t(278),c=t(276),i=t(282),u=t(296),m=t(277),d=t(80),p=t(78);a.a=function(e){var a=e.cardTitle,t=e.codeSections,y=Object(l.useState)(!1),s=Object(n.a)(y,2),E=s[0],f=s[1],C=Object(l.useState)(!1),v=Object(n.a)(C,2),g=v[0],b=v[1];return r.a.createElement(o.a,null,r.a.createElement(o.a.Header,null,a),t.map(function(e){var a=e.description,t=e.language,n=e.code,l=e.options,y=e.example;return r.a.createElement("div",{key:n.substring(0,16)},r.a.createElement(o.a.Body,null,a?r.a.createElement(o.a.Text,null,a):null,r.a.createElement(p.a,{style:{display:"inline-table"},language:t},n),document.queryCommandSupported("copy")&&r.a.createElement(d.CopyToClipboard,{text:n,onCopy:function(){}},r.a.createElement(c.a,{variant:"info"},"Copy"))),l?r.a.createElement(o.a.Body,null,r.a.createElement(o.a.Title,null,"Options"),r.a.createElement(i.a,{style:{paddingBottom:"10px"}},r.a.createElement(u.a,{type:"radio",name:"options",defaultValue:2},r.a.createElement(m.a,{variant:"outline-secondary",value:1,onClick:function(){return f(!0)}},"Show"),r.a.createElement(m.a,{variant:"outline-secondary",value:2,onClick:function(){return f(!1)}},"Hide"))),E?r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{style:{display:"inline-table"},language:t},l),document.queryCommandSupported("copy")&&r.a.createElement(d.CopyToClipboard,{text:n,onCopy:function(){}},r.a.createElement(c.a,{variant:"info"},"Copy"))):null):null,y?r.a.createElement(o.a.Body,null,r.a.createElement(o.a.Title,null,"Example"),r.a.createElement(i.a,{style:{paddingBottom:"10px"}},r.a.createElement(u.a,{type:"radio",name:"example",defaultValue:2},r.a.createElement(m.a,{variant:"outline-secondary",value:1,onClick:function(){return b(!0)}},"Show"),r.a.createElement(m.a,{variant:"outline-secondary",value:2,onClick:function(){return b(!1)}},"Hide"))),g?r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{style:{display:"inline-table"},language:t},y),document.queryCommandSupported("copy")&&r.a.createElement(d.CopyToClipboard,{text:n,onCopy:function(){}},r.a.createElement(c.a,{variant:"info"},"Copy"))):null):null)}))}},289:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(79),o=t(269),c=t(76);a.default=function(){return l.a.createElement(o.a,{cardTitle:l.a.createElement(c.a,{text:r.d.title,href:r.d.fullDocLink}),codeSections:r.d.codeSections})}},76:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(278);a.a=function(e){var a=e.text,t=e.href,n=e.withPreceedingSpace,o=e.withSucceedingSpace,c=a;return n&&(c=" ".concat(c)),o&&(c="".concat(c," ")),l.a.createElement(r.a.Link,{href:t,target:"_blank",rel:"noopener noreferrer"},c)}}}]);
//# sourceMappingURL=13.63be712a.chunk.js.map