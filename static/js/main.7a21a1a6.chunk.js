(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{132:function(e,t,n){e.exports=n(220)},137:function(e,t,n){},220:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),a=n.n(r),u=n(44),c=n.n(u),i=(n(137),n(31)),o=n(32),s=n(34),l=n(33),f=n(35),d=n(14),p=function(e){return a.a.createElement("header",null,a.a.createElement("img",{src:"https://s3.amazonaws.com/peoplepng/wp-content/uploads/2018/07/08104208/Adidas-Logo-PNG-Images.png",alt:""}),a.a.createElement("div",{className:"loginBlock"},e.isAuth?a.a.createElement("div",null,e.login," - ",a.a.createElement("button",{onClick:e.logout},"Logout")):a.a.createElement(d.b,{to:"/login"},"Login")))},m=n(19),g=n(25),E=n(11),h=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return a.a.createElement(p,this.props)}}]),t}(a.a.Component),b=Object(E.d)(Object(m.b)(function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}},{logout:g.d}))(h),w=function(e){return a.a.createElement("div",null,a.a.createElement("img",{src:e.img,alt:""}),a.a.createElement("h4",null,e.name))},O=function(e){return a.a.createElement("nav",null,a.a.createElement("div",null,a.a.createElement(d.b,{to:"/profile"},"Profile")),a.a.createElement("div",null,a.a.createElement(d.b,{to:"/dialogs"},"Messages")),a.a.createElement("div",null,a.a.createElement(d.b,{to:"/users"},"Users")),a.a.createElement("div",null,a.a.createElement(d.b,{to:"#"},"Music")),a.a.createElement("div",null,a.a.createElement(d.b,{to:"#"},"Setting")),a.a.createElement("br",null),a.a.createElement("div",{className:"friends"},a.a.createElement(d.b,null,"Friends"),e.friends.map(function(e){return a.a.createElement(w,{name:e.name,img:e.img})})))},v=Object(E.d)(Object(m.b)(function(e){return{friends:e.profileReducer.friends}},function(e){return{}}))(O),S=n(22),j=n(5),T={initialized:!1},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T;switch((arguments.length>1?arguments[1]:void 0).type){case"INITIALIZED_SUCCESS":return Object(j.a)({},e,{initialized:!0});default:return e}},_=n(37),I=function(e){return function(t){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(_.a,null)},a.a.createElement(e,t))}},P=n(57),A=n(72),U=n(62),L=n(83),k=n(78),x=Object(E.c)({profileReducer:P.b,dialogsReducer:A.a,usersReducer:U.a,auth:g.a,form:k.a,app:y}),R=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||v,C=Object(E.e)(x,R(Object(E.a)(L.a))),G=a.a.lazy(function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,290))}),N=a.a.lazy(function(){return n.e(7).then(n.bind(null,289))}),D=a.a.lazy(function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,288))}),F=a.a.lazy(function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,287))}),M=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(b,null),a.a.createElement(v,null),a.a.createElement(S.b,{path:"/dialogs",render:I(G)}),a.a.createElement(S.b,{path:"/profile/:userId?",render:I(D)}),a.a.createElement(S.b,{path:"/users",render:I(N)}),a.a.createElement(S.b,{path:"/login",render:I(F)})):a.a.createElement(_.a,null)}}]),t}(a.a.Component),z=Object(E.d)(S.f,Object(m.b)(function(e){return{initialized:e.app.initialized}},{initializeApp:function(){return function(e){var t=e(Object(g.b)());Promise.all([t]).then(function(){e({type:"INITIALIZED_SUCCESS"})})}}}))(M),W=function(e){return a.a.createElement(d.a,{basename:"/React-Study"},a.a.createElement(m.a,{store:C},a.a.createElement(z,null)))};c.a.render(a.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},25:function(e,t,n){"use strict";n.d(t,"b",function(){return f}),n.d(t,"c",function(){return d}),n.d(t,"d",function(){return p});var r=n(4),a=n.n(r),u=n(10),c=n(5),i=n(6),o=n(45),s={uderId:null,email:null,login:null,isAuth:!1},l=function(e,t,n,r){return{type:"samurai-network/auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},f=function(){return function(){var e=Object(u.a)(a.a.mark(function e(t){var n,r,u,c,o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.getUserInfo();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,u=r.id,c=r.email,o=r.login,t(l(u,c,o,!0)));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},d=function(e,t,n){return function(){var r=Object(u.a)(a.a.mark(function r(u){var c,s;return a.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?u(f()):(s=c.data.messages.lenght>0?c.data.messages[0]:"Some error",u(Object(o.a)("login",{_error:s})));case 4:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()},p=function(){return function(){var e=Object(u.a)(a.a.mark(function e(t){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.logout();case 2:0===e.sent.data.resultCode&&t(f(null,null,null,!1));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"samurai-network/auth/SET_USER_DATA":return Object(c.a)({},e,t.payload);default:return e}}},37:function(e,t,n){"use strict";var r=n(0),a=n.n(r),u=n(82),c=n.n(u);t.a=function(e){return a.a.createElement("img",{className:"spiner",src:c.a,alt:"loader"})}},57:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"d",function(){return d}),n.d(t,"c",function(){return p}),n.d(t,"e",function(){return m});var r=n(4),a=n.n(r),u=n(10),c=n(26),i=n(5),o=n(6),s={posts:[{id:1,message:"Hi, how are you?",likes:121},{id:2,message:"Yooooo",likes:282},{id:3,message:"It`s my first post",likes:212}],friends:[{id:1,name:"Dima",img:"https://www.inbenta.com/wp-content/uploads/2016/11/7396.jpg"},{id:2,name:"Vlad",img:"https://www.inbenta.com/wp-content/uploads/2016/11/7396.jpg"},{id:3,name:"Sasha",img:"https://www.inbenta.com/wp-content/uploads/2016/11/7396.jpg"}],profile:null,status:""},l=function(e){return{type:"ADD_POST",newPostText:e}},f=function(e){return{type:"SET_STATUS",status:e}},d=function(e){return function(){var t=Object(u.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getProfile(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE",profile:r});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(u.a)(a.a.mark(function t(n){var r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(f(r));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(u.a)(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.responseCode&&n(f(e));case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":var n={id:4,message:t.newPostText,likes:0};return Object(i.a)({},e,{posts:[].concat(Object(c.a)(e.posts),[n]),newPostText:""});case"SET_USER_PROFILE":return Object(i.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(i.a)({},e,{status:t.status});case"DELETE_POST":return Object(i.a)({},e,{posts:e.posts.filter(function(e){return e.id!==t.postId})});default:return e}}},6:function(e,t,n){"use strict";n.d(t,"c",function(){return u}),n.d(t,"b",function(){return c}),n.d(t,"a",function(){return i});var r=n(81),a=r.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"07c3174e-9e42-4cb5-b816-db6738dd581d"}}),u={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then(function(e){return e.data})},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))}},c={getProfile:function(e){return a.get("profile/"+e).then(function(e){return e.data})},getStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;return a.get("profile/status/"+e).then(function(e){return e.data})},updateStatus:function(e){return a.put("profile/status/",{status:e})}},i={getUserInfo:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},62:function(e,t,n){"use strict";var r=n(4),a=n.n(r),u=n(10),c=n(26),i=n(5),o=n(6),s=function(e,t,n,r){return e.map(function(e){return e[n]===t?Object(i.a)({},e,r):e})};n.d(t,"d",function(){return p}),n.d(t,"e",function(){return g}),n.d(t,"c",function(){return E}),n.d(t,"b",function(){return b}),n.d(t,"f",function(){return w});var l={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},f=function(e){return{type:"FOLLOW",userId:e}},d=function(e){return{type:"UNFOLLOW",userId:e}},p=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},m=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},g=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},E=function(e,t){return function(){var n=Object(u.a)(a.a.mark(function n(r){var u;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r(m(!0)),r(p(e)),n.next=4,o.c.getUsers(e,t);case 4:u=n.sent,r(m(!1)),r({type:"SET_USERS",users:u.items}),r({type:"SET_TOTAL_USERS_COUNT",count:u.totalCount});case 8:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()},h=function(){var e=Object(u.a)(a.a.mark(function e(t,n,r,u){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(g(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(u(n)),t(g(!1,n));case 6:case"end":return e.stop()}},e)}));return function(t,n,r,a){return e.apply(this,arguments)}}(),b=function(e){return function(){var t=Object(u.a)(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:h(n,e,o.c.follow.bind(o.c),f);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(u.a)(a.a.mark(function t(n){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:h(n,e,o.c.follow.bind(o.c),d);case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(i.a)({},e,{users:s(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(i.a)({},e,{users:s(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(i.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(i.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(i.a)({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(i.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(i.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(c.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter(function(e){return!t.userId})});default:return e}}},72:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"c",function(){return i});var r=n(26),a=n(5),u={messages:[{message:"Hi"},{message:"How are u?"},{message:"Yoooo"}],dialogs:[{id:1,name:"Dima"},{id:2,name:"Andrey"},{id:3,name:"Vlad"}],newMessageText:"Enter message"},c=function(){return{type:"SEND-MESSAGE"}},i=function(e){return{type:"UPDATE-MESSAGE-TEXT",newMessage:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n={id:6,message:e.newMessageText},c=Object(a.a)({},e);return c.messages=Object(r.a)(e.messages),c.messages.push(n),c.newMessageText="",c;case"UPDATE-MESSAGE-TEXT":var i=Object(a.a)({},e);return i.newMessageText=t.newMessage,i;default:return e}}},82:function(e,t,n){e.exports=n.p+"static/media/spiner.2ef34724.svg"}},[[132,2,3]]]);
//# sourceMappingURL=main.7a21a1a6.chunk.js.map