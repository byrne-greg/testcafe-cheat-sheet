(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{299:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(77),i=n(82);t.default=function(){return o.a.createElement(i.a,{cardTitle:r.c.title,fullDocLink:r.c.fullDocLink,codeSnippet:{code:r.c.code,language:r.c.language,options:r.c.options,example:r.c.example},description:r.c.description})}},77:function(e,t,n){"use strict";var a={title:"Install TestCafe",code:["npm install -D testcafe"],language:"plaintext"},o={title:"Simple Test",code:["import { Selector } from 'testcafe';\n    \n    fixture `Getting Started`\n      .page `http://devexpress.github.io/testcafe/example`;\n                \n    test('My first test', async t => {\n      // Test code\n    });"],language:"javascript"},r={title:"Running a test on multiple browsers",code:["testcafe chrome,firefox,edge src/tests/my.e2e.test.js"],language:"plaintext"},i={title:"Browser Support",browsers:[{text:"Google Chrome: Stable, Beta, Dev and Canary",aliases:["chromium","chrome","chrome-canary","chrome:headless"]},{text:"Internet Explorer (11+)",aliases:["ie"]},{text:"Microsoft Edge",aliases:["edge"]},{text:"Mozilla Firefox",aliases:["firefox","firefox:headless"]},{text:"Safari",aliases:["safari"]},{text:"Opera",aliases:["opera"]}],fullDocLink:"https://devexpress.github.io/testcafe/documentation/using-testcafe/common-concepts/browsers/browser-support.html"},c={title:"Click Action",description:"Click, Double-click, and Right-click a webpage element in a test.",code:["t.click( selector [, options] )","t.doubleClick( selector [, options]","t.rightClick( selector [, options] ))"],language:"javascript",example:"import { Selector } from 'testcafe';\n\n    const avatar = Selector('#avatar');\n    const popupMenu = Selector('#popupMenu');\n    \n    fixture `My fixture`\n        .page `http://www.example.com/`;\n    \n    test('Click a check box and check its state', async t => {\n        await t\n            .click(avatar)\n            .expect(avatar.selected).ok();\n            .doubleClick(avatar)\n            .expect(avatar.visible).ok();\n            .rightClick(avatar)\n            .expect(popupMenu.exists).notOk();\n    });",options:"{\n      modifiers: {\n          ctrl: Boolean,\n          alt: Boolean,\n          shift: Boolean,\n          meta: Boolean\n      },\n  \n      offsetX: Number,\n      offsetY: Number,\n      destinationOffsetX: Number,\n      destinationOffsetY: Number,\n      speed: Number\n  }",fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/actions/click.html"},l={title:"Drag Action",description:"Drag a webpage element in a test.",code:["t.drag( selector, dragOffsetX, dragOffsetY [, options] )","t.dragToElement( selector, destinationSelector [, options] )"],language:"javascript",example:"import { Selector } from 'testcafe';\n\n  const slider = Selector('#developer-rating');\n  \n  fixture `My fixture`\n      .page `http://www.example.com/`;\n  \n  test('Drag slider', async t => {\n      await t\n          .click('#i-tried-testcafe');\n          .expect(slider.value).eql(1)\n          .drag('.ui-slider-handle', 360, 0, { offsetX: 10, offsetY: 10 })\n          .expect(slider.value).eql(7);\n          .dragToElement('.ui-slider-handle', '.developer-rating-best')\n          .expect(slider.value).eql(10);\n  });",options:"{\n      modifiers: {\n          ctrl: Boolean,\n          alt: Boolean,\n          shift: Boolean,\n          meta: Boolean\n      },\n  \n      offsetX: Number,\n      offsetY: Number,\n      destinationOffsetX: Number,\n      destinationOffsetY: Number,\n      speed: Number\n  }",fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/actions/drag-element.html"},s={title:"Hover Action",description:"Hovers the mouse pointer over a webpage element.",code:["t.hover( selector [, options] )"],language:"javascript",example:"import { Selector } from 'testcafe';\n\n  const comboBox = Selector('.combo-box');\n  \n  fixture `My fixture`\n      .page `http://www.example.com/`;\n  \n  test('Select combo box value', async t => {\n      await t\n          .hover(comboBox)\n          .click('#i-prefer-both')\n          .expect(comboBox.value).eql('Both');\n  });",options:"{\n      modifiers: {\n          ctrl: Boolean,\n          alt: Boolean,\n          shift: Boolean,\n          meta: Boolean\n      },\n  \n      offsetX: Number,\n      offsetY: Number,\n      destinationOffsetX: Number,\n      destinationOffsetY: Number,\n      speed: Number\n  }",fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/actions/hover.html"},u={title:"Select Action",codeSections:[{description:"Selects text in input elements of various types",code:["t.selectText( selector [, startPos] [, endPos] [, options] )"],language:"javascript",example:"import { ClientFunction, Selector } from 'testcafe';\n\n      fixture `My fixture`\n          .page `http://devexpress.github.io/testcafe/example/`;\n      \n      const developerNameInput = Selector('#developer-name');\n      \n      const getElementSelectionStart = ClientFunction(selector => selector().selectionStart);\n      const getElementSelectionEnd   = ClientFunction(selector => selector().selectionEnd);\n      \n      test('Select text within input', async t => {\n          await t\n              .typeText(developerNameInput, 'Test Cafe', { caretPos: 0 })\n              .selectText(developerNameInput, 7, 1);\n      \n          await t\n              .expect(await getElementSelectionStart(developerNameInput)).eql(1)\n              .expect(await getElementSelectionEnd(developerNameInput)).eql(7);\n      });",options:"{ speed: Number }"},{description:"Select text within a <textarea> element",code:["t.selectTextAreaContent( selector [, startLine] [, startPos] [, endLine] [, endPos] [, options] )"],language:"javascript",example:"import { ClientFunction, Selector } from 'testcafe';\n\n      fixture `My fixture`\n          .page `http://devexpress.github.io/testcafe/example/`;\n      \n      const commentTextArea = Selector('#comments');\n      \n      const getElementSelectionStart = ClientFunction(selector => selector().selectionStart);\n      const getElementSelectionEnd   = ClientFunction(selector => selector().selectionEnd);\n      \n      test('Select text within textarea', async t => {\n          await t\n              .click('#tried-test-cafe')\n              .typeText(commentTextArea, [\n                  'Lorem ipsum dolor sit amet',\n                  'consectetur adipiscing elit',\n                  'sed do eiusmod tempor'\n              ].join(',\n'))\n              .selectTextAreaContent(commentTextArea, 0, 5, 2, 10);\n      \n          await t\n              .expect(await getElementSelectionStart(commentTextArea)).eql(5)\n              .expect(await getElementSelectionEnd(commentTextArea)).eql(67);\n      });",options:"{ speed: Number }"},{description:"Select HTML elements that have the contentEditable attribute enabled.",code:["t.selectEditableContent( startSelector, endSelector [, options] )"],language:"javascript",example:"import { Selector } from 'testcafe';\n\n      fixture `My fixture`\n          .page `http://www.example.com/`;\n      \n      test('Delete text within a contentEditable element', async t => {\n          await t\n              .selectEditableContent('#foreword', '#chapter-3')\n              .pressKey('delete')\n              .expect(Selector('#chapter-2').exists).notOk()\n              .expect(Selector('#chapter-4').exists).ok();\n      });",options:"{ speed: Number }"}],fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/actions/select-text.html"},p={title:"Typing Action",description:"Types the specified text into an input element.",code:["t.typeText( selector, text [, options] )"],language:"javascript",example:"import { Selector } from 'testcafe';\n\n  const nameInput = Selector('#developer-name');\n  \n  fixture `My fixture`\n      .page `http://www.example.com/`;\n  \n  test('Type and Replace', async t => {\n      await t\n          .typeText(nameInput, 'Tony')\n          .typeText(nameInput, 'Stak', { replace: true })\n          .typeText(nameInput, 'r', { caretPos: 3 })\n          .expect(nameInput.value).eql('Stark');\n  });",options:"{\n    modifiers: {\n        ctrl: Boolean,\n        alt: Boolean,\n        shift: Boolean,\n        meta: Boolean\n    },\n\n    offsetX: Number,\n    offsetY: Number,\n    caretPos: Number,\n    replace: Boolean,\n    paste: Boolean,\n    speed: Number\n}",fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/actions/type-text.html"},f={title:"Press Key Action",description:"Presses the specified keyboard keys.",code:["t.pressKey( keys [, options] )"],language:"javascript",example:"import { Selector } from 'testcafe';\n\n  const nameInput = Selector('#developer-name');\n  \n  fixture `My fixture`\n      .page `http://www.example.com/`;\n  \n  test('Key Presses', async t => {\n      await t\n          .typeText(nameInput, 'Tony Stark')\n          .pressKey('home right . delete delete delete')\n          .expect(nameInput.value).eql('T. Stark');\n  });",options:"{\n    speed: Number\n}",fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/actions/press-key.html"},d={title:"Fixtures",codeSections:[{description:"TestCafe tests must be organized into categories called fixtures. They accept a String parameter",code:["fixture( fixtureName )","fixture `fixtureName`"],language:"javascript"},{description:"Specify the web page URL as a String parameter where all tests in a fixture start.",code:["fixture.page( url )","fixture.page `url`"],language:"javascript"},{description:"Specify additional information for tests in the form of key-value metadata and use it in reports.",code:["fixture.meta({ key1: 'value1', key2: 'value2', key3: 'value3' })"],language:"javascript"},{description:"Fixture hooks that execute a function before/after each test run",code:["fixture.before( fn(ctx) )","fixture.after( fn(ctx) )"],language:"javascript"},{description:"Test hooks that execute a function before/after each test.",code:["fixture.beforeEach( fn(t) )","fixture.afterEach( fn(t) )"],language:"javascript"},{description:"Skip a feature from execution.",code:["fixture.skip"],language:"javascript"},{description:"Only execute a specific feature.",code:["fixture.only"],language:"javascript"}],fullDocLink:"https://devexpress.github.io/testcafe/documentation/test-api/test-code-structure.html#fixtures"};n.d(t,"i",function(){return a}),n.d(t,"k",function(){return o}),n.d(t,"j",function(){return r}),n.d(t,"g",function(){return i}),n.d(t,"a",function(){return c}),n.d(t,"b",function(){return l}),n.d(t,"c",function(){return s}),n.d(t,"e",function(){return u}),n.d(t,"f",function(){return p}),n.d(t,"d",function(){return f}),n.d(t,"h",function(){return d})},78:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(76),i=n(305),c=n(293),l=function(e){var t=e.children,n=e.language;return o.a.createElement(i.a,{language:n,style:c.a},t)};n.d(t,"b",function(){return u}),n.d(t,"a",function(){return s});var s=function(e){var t=e.children,n=e.language;return o.a.createElement(o.a.Fragment,null,document.queryCommandSupported("copy")?o.a.createElement(r.CopyToClipboard,{text:t,onCopy:function(){}},o.a.createElement("div",{style:{cursor:"copy"}},o.a.createElement(l,{language:n},t))):o.a.createElement(l,{language:n},t))},u=function(e){var t=e.code,n=e.language;return o.a.createElement(o.a.Fragment,null,t.map(function(e){return o.a.createElement(s,{key:"".concat(n,"-").concat(e.substring(0,24)),language:n},e)}))}},79:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(289),i=n(85),c=function(e){var t=e.href,n=e.children;return o.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},n)};t.a=function(e){var t=e.docLink,n=e.title;return o.a.createElement(r.a.Header,null,o.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center"}},n,t&&o.a.createElement(c,{href:t},o.a.createElement(i.a,{variant:"info"},"Documentation"))))}},80:function(e,t,n){"use strict";var a=n(1),o=n(2),r=n(4),i=n(3),c=n.n(i),l=n(0),s=n.n(l),u=n(85),p=function(){},f=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).state={focused:!1},t.handleFocus=function(e){"INPUT"===e.target.tagName&&t.setState({focused:!0})},t.handleBlur=function(e){"INPUT"===e.target.tagName&&t.setState({focused:!1})},t}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.name,r=e.className,i=e.checked,l=e.type,f=e.onChange,d=e.value,m=e.disabled,g=e.inputRef,x=e.innerRef,h=Object(o.a)(e,["children","name","className","checked","type","onChange","value","disabled","inputRef","innerRef"]),v=this.state.focused;return s.a.createElement(u.a,Object(a.a)({},h,{ref:x,className:c()(r,v&&"focus",m&&"disabled"),type:null,active:!!i,as:"label"}),s.a.createElement("input",{name:n,type:l,value:d,ref:g,autoComplete:"off",checked:!!i,disabled:!!m,onFocus:this.handleFocus,onBlur:this.handleBlur,onChange:f||p}),t)},t}(s.a.Component);t.a=s.a.forwardRef(function(e,t){return s.a.createElement(f,Object(a.a)({innerRef:t},e))})},81:function(e,t,n){"use strict";function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,o=!1,r=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(l){o=!0,r=l}finally{try{a||null==c.return||c.return()}finally{if(o)throw r}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",function(){return a})},82:function(e,t,n){"use strict";var a=n(81),o=n(0),r=n.n(o),i=n(289),c=n(86),l=n(87),s=n(80),u=n(85),p=n(76),f=n(78),d=n(79);t.a=function(e){var t=e.cardTitle,n=e.fullDocLink,m=e.codeSnippet,g=m.code,x=m.language,h=m.options,v=m.example,b=e.description,y=Object(o.useState)(!1),E=Object(a.a)(y,2),S=E[0],k=E[1],w=Object(o.useState)(!1),C=Object(a.a)(w,2),T=C[0],N=C[1];return r.a.createElement(i.a,null,r.a.createElement(d.a,{title:t,docLink:n}),r.a.createElement(i.a.Body,null,b?r.a.createElement(i.a.Text,null,b):null,r.a.createElement(f.b,{code:g,language:x})),h?r.a.createElement(i.a.Body,null,r.a.createElement(i.a.Title,null,"Options"),r.a.createElement(c.a,{style:{paddingBottom:"10px"}},r.a.createElement(l.a,{type:"radio",name:"options",defaultValue:2},r.a.createElement(s.a,{variant:"outline-secondary",value:1,onClick:function(){return k(!0)}},"Show"),r.a.createElement(s.a,{variant:"outline-secondary",value:2,onClick:function(){return k(!1)}},"Hide"))),S?r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{language:x},h),document.queryCommandSupported("copy")&&r.a.createElement(p.CopyToClipboard,{text:g,onCopy:function(){}},r.a.createElement(u.a,{variant:"info"},"Copy"))):null):null,v?r.a.createElement(i.a.Body,null,r.a.createElement(i.a.Title,null,"Example"),r.a.createElement(c.a,{style:{paddingBottom:"10px"}},r.a.createElement(l.a,{type:"radio",name:"example",defaultValue:2},r.a.createElement(s.a,{variant:"outline-secondary",value:1,onClick:function(){return N(!0)}},"Show"),r.a.createElement(s.a,{variant:"outline-secondary",value:2,onClick:function(){return N(!1)}},"Hide"))),T?r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{language:x},v),document.queryCommandSupported("copy")&&r.a.createElement(p.CopyToClipboard,{text:g,onCopy:function(){}},r.a.createElement(u.a,{variant:"info"},"Copy"))):null):null)}},86:function(e,t,n){"use strict";var a=n(1),o=n(2),r=n(3),i=n.n(r),c=n(0),l=n.n(c),s=n(5),u=l.a.forwardRef(function(e,t){var n=e.bsPrefix,r=e.className,c=Object(o.a)(e,["bsPrefix","className"]),u=Object(s.b)(n,"btn-toolbar");return l.a.createElement("div",Object(a.a)({},c,{ref:t,className:i()(r,u)}))});u.displayName="ButtonToolbar",u.defaultProps={role:"toolbar"},t.a=u},87:function(e,t,n){"use strict";var a=n(1),o=n(2),r=n(4),i=n(0),c=n.n(i),l=n(20),s=n.n(l),u=n(9),p=n.n(u),f=n(21),d=n(10),m=n(3),g=n.n(m),x=n(5),h=c.a.forwardRef(function(e,t){var n=e.bsPrefix,r=e.size,i=e.toggle,l=e.vertical,s=e.className,u=e.as,p=Object(o.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),f=Object(x.b)(n,"btn-group"),d=f;return l&&(d=f+"-vertical"),c.a.createElement(u,Object(a.a)({},p,{ref:t,className:g()(s,d,r&&f+"-"+r,i&&f+"-toggle")}))});h.displayName="ButtonGroup",h.defaultProps={vertical:!1,toggle:!1,role:"group",as:"div"};var v=h,b=n(80),y=function(e){function t(){return e.apply(this,arguments)||this}Object(r.a)(t,e);var n=t.prototype;return n.getValues=function(){var e=this.props.value;return null==e?[]:[].concat(e)},n.handleToggle=function(e,t){var n=this.props,a=n.type,o=n.onChange,r=this.getValues(),i=-1!==r.indexOf(e);"radio"!==a?o(i?r.filter(function(t){return t!==e}):[].concat(r,[e]),t):i||o(e,t)},n.render=function(){var e=this,t=this.props,n=t.children,r=t.type,i=t.name,l=Object(o.a)(t,["children","type","name"]);delete l.onChange,delete l.value;var u=this.getValues();return"radio"!==r||i||s()(!1),c.a.createElement(v,Object(a.a)({},l,{toggle:!0}),Object(d.b)(n,function(t){var n=t.props,a=n.value,o=n.onChange;return c.a.cloneElement(t,{type:r,name:t.name||i,checked:-1!==u.indexOf(a),onChange:Object(f.a)(o,function(t){return e.handleToggle(a,t)})})}))},t}(c.a.Component);y.defaultProps={type:"radio"};var E=p()(y,{value:"onChange"});E.Button=b.a;t.a=E}}]);
//# sourceMappingURL=8.e5df59a1.chunk.js.map