(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),s=n.n(r),o=n(2),l=n.n(o),m=n(5),u=n(1),i=(n(12),function(e){return fetch(e).then(function(e){return e.json()})}),p=function(e){var t=e.user,n=t.name,a=t.email,r=t.address;return c.a.createElement("section",null,c.a.createElement("p",null,n),c.a.createElement("p",null,a),c.a.createElement("address",null,Object.entries(r).map(function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];return"object"!==typeof a&&c.a.createElement(c.a.Fragment,{key:n},n," ",a,c.a.createElement("br",null))})))},b=function(e){var t=e.comment,n=t.name,a=t.email,r=t.body;return c.a.createElement("section",{className:"comment"},c.a.createElement("h3",{className:"comment__title"},n),c.a.createElement("section",{className:"comment__main-part"},c.a.createElement("p",null,a),c.a.createElement("p",{className:"comment__body"},r)))},d=function(e){return e.comments.map(function(e){return c.a.createElement(b,{key:e.id,comment:e})})},f=function(e){var t=e.post,n=t.title,a=t.body,r=t.user,s=t.comments;return c.a.createElement("article",{className:"post"},c.a.createElement("h2",null,n),c.a.createElement("section",{className:"post__main-part"},c.a.createElement("p",{className:"post__body"},a),c.a.createElement(p,{user:r})),c.a.createElement(d,{comments:s}))},E=function(e){return e.posts.map(function(e){return c.a.createElement(f,{key:e.id,post:e})})},h=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)([]),o=Object(u.a)(s,2),p=o[0],b=o[1],d=Object(a.useState)(!1),f=Object(u.a)(d,2),h=f[0],y=f[1],j=Object(a.useState)(!1),v=Object(u.a)(j,2),O=v[0],N=v[1],g=Object(a.useState)(!1),_=Object(u.a)(g,2),w=_[0],k=_[1],x=function(e,t){var n=null;return function(a){N(!1),clearTimeout(n),n=setTimeout(e,t,a)}}(function(e){var t=n.filter(function(t){return t.title.includes(e)||t.body.includes(e)});0===t.length?N(!0):b(t)},300);return c.a.createElement("main",{className:"list"},c.a.createElement("h1",null,"Dynamic list of posts"),0!==p.length&&c.a.createElement("section",{className:"search-bar"},c.a.createElement("input",{type:"text",placeholder:"search post",className:"input",onChange:function(e){return x(e.target.value.trim())}}),O&&c.a.createElement("p",{className:"warning"},"There are no such posts, please try another search combination")),h&&c.a.createElement("button",{type:"button",className:"button button--non-active"},"Loading"),!h&&(0===p.length?c.a.createElement("button",{className:"button",type:"button",onClick:function(){var e,t,n,a,c,s;return l.a.async(function(o){for(;;)switch(o.prev=o.next){case 0:return y(!0),o.prev=1,o.next=4,l.a.awrap(Promise.all([i("https://jsonplaceholder.typicode.com/posts"),i("https://jsonplaceholder.typicode.com/users"),i("https://jsonplaceholder.typicode.com/comments")]));case 4:e=o.sent,t=Object(u.a)(e,3),n=t[0],a=t[1],c=t[2],s=n.map(function(e){return Object(m.a)({},e,{user:a.find(function(t){return t.id===e.userId}),comments:c.filter(function(t){return t.postId===e.id})})}),r(s),b(s),o.next=17;break;case 14:o.prev=14,o.t0=o.catch(1),k(!0);case 17:y(!1);case 18:case"end":return o.stop()}},null,null,[[1,14]])}},"Load"):c.a.createElement(E,{posts:p})),w&&c.a.createElement("p",null,"There is an issue, please try again later"))};s.a.render(c.a.createElement(h,null),document.getElementById("root"))},6:function(e,t,n){e.exports=n(13)}},[[6,1,2]]]);
//# sourceMappingURL=main.13fa4a23.chunk.js.map