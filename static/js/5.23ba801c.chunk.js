(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{222:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return o}),n.d(t,"c",function(){return l});var a=n(221),r=n(0),c=n.n(r),i=(n(223),n(105)),u=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,i=e.children,u=Object(r.useRef)(null),s=n&&a;return s&&u.current&&u.current.classList.add("error"),!s&&u.current&&u.current.classList.remove("error"),c.a.createElement("div",{ref:u,id:"areasDiv",className:"formControl"},c.a.createElement("div",null,i),s&&c.a.createElement("span",null,a))},s=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return c.a.createElement(u,e,c.a.createElement("textarea",Object.assign({},t,n)))},o=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return c.a.createElement(u,e,c.a.createElement("input",Object.assign({},t,n)))},l=function(e,t,n,a,r){var u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return c.a.createElement("div",null,c.a.createElement(i.a,{component:a,name:t,placeholder:e,type:r,validate:n}),u)}},223:function(e,t,n){},224:function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return r});var a=function(e){if(!e)return"field is required"},r=function(e){return function(t){if(t.lenght>e)return"Max lengt is ".concat(e," symb")}}},230:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var a=n(31),r=n(32),c=n(34),i=n(33),u=n(35),s=n(0),o=n.n(s),l=n(22),m=n(19),d=function(e){return{isAuth:e.auth.isAuth}},f=function(e){var t=function(t){function n(){return Object(a.a)(this,n),Object(c.a)(this,Object(i.a)(n).apply(this,arguments))}return Object(u.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){return this.props.isAuth?o.a.createElement(e,this.props):o.a.createElement(l.a,{to:"/login"})}}]),n}(o.a.Component);return Object(m.b)(d)(t)}},290:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(72),i=n(14),u=function(e){var t="/dialogs/"+e.id;return r.a.createElement("div",{className:"dialog"},r.a.createElement(i.b,{to:t},e.name))},s=function(e){return r.a.createElement("div",{className:"message"},e.message.message)},o=n(22),l=n(105),m=n(106),d=n(222),f=n(224),b=Object(f.a)(50),g=Object(m.a)({form:"dialogs=add-message-form"})(function(e){return r.a.createElement("div",{className:"enterText"},r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement(l.a,{component:d.b,placeholder:"Enter",name:"newMessageBody",validate:[f.b,b]}),r.a.createElement("button",null,"Send")))}),p=function(e){var t=e.dialogsPage;r.a.createRef();return e.isAuth?r.a.createElement("div",{className:"dialogs"},r.a.createElement("div",{className:"dialogs-items"},t.dialogs.map(function(e){return r.a.createElement(u,{name:e.name,id:e.id})})),r.a.createElement("div",{className:"messages"},t.messages.map(function(e){return r.a.createElement(s,{message:e})}),r.a.createElement(g,{onSubmit:function(){e.sendMessageText()}}))):r.a.createElement(o.a,{to:"/login"})},v=n(19),E=n(230),h=n(11),j=Object(h.d)(Object(v.b)(function(e){return{dialogsPage:e.dialogsReducer}},{sendMessageText:c.b,updateNewMessageText:c.c}),E.a)(p);t.default=j}}]);
//# sourceMappingURL=5.23ba801c.chunk.js.map