(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,s=n(7),o=n.n(s),r=n(6),i=n(8),u=n(1),a=(n(13),n(14),n(4)),l=n.n(a),b=n(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var h=function(){var t=Object(u.useState)(c.NONE),e=Object(r.a)(t,2),n=e[0],s=e[1],o=Object(u.useState)(!1),a=Object(r.a)(o,2),h=a[0],d=a[1],N=function(t,e,n){var s=Object(i.a)(t);return s.sort((function(t,n){switch(e){case c.LENGTH:return t.length-n.length;case c.ALPHABET:return t.localeCompare(n);default:return 0}})),n&&s.reverse(),s}(j,n,h);return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",onClick:function(){return s(c.ALPHABET)},className:l()("button is-info",{"is-light":n!==c.ALPHABET}),children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",onClick:function(){return s(c.LENGTH)},className:l()("button is-success",{"is-light":n!==c.LENGTH}),children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:l()("button is-warning",{"is-light":!h}),onClick:function(){return d((function(t){return!t}))},children:"Reverse"}),(n||h)&&Object(b.jsx)("button",{type:"button",onClick:function(){return s(c.NONE),void d(!1)},className:"button is-danger is-light",children:"Reset"})]}),Object(b.jsx)("ul",{children:Object(b.jsx)("ul",{children:N.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})})]})};o.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0cfa4ebe.chunk.js.map