(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(9),c=n.n(s),u=(n(14),n(6)),i=n(8),o=n(2),l=n(3),j=n(5),b=n(4),p=(n(15),n(0)),d=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={username:""},e.handleSubmit=function(t){t.preventDefault(),e.state.username&&(e.props.onAdd(e.state.username),e.setState({username:""}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(p.jsx)("input",{type:"text",placeholder:"Enter a name",value:this.state.username,onChange:function(t){e.setState({username:t.target.value})}}),Object(p.jsx)("button",{type:"submit",children:"Add"})]})}}]),n}(a.a.Component),m=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={user:e.props.user},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.user,n=t.name,r=t.id;return Object(p.jsxs)(p.Fragment,{children:[this.props.user.name,Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.props.onRename(r,n)},children:[Object(p.jsx)("input",{type:"text",value:n,onChange:function(t){e.setState((function(e){return{user:Object(u.a)(Object(u.a)({},e.user),{},{name:t.target.value})}}))}}),Object(p.jsx)("button",{type:"submit",children:"Save"})]}),Object(p.jsx)("button",{type:"button",onClick:function(){return e.props.onDelete(r)},children:"Delete"})]})}}]),n}(a.a.Component),h=function(e){var t=e.users,n=e.onDelete,r=e.onRename;return Object(p.jsx)("ul",{children:t.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(m,{user:e,onDelete:n,onRename:r})},e.id)}))})},f=[{id:1,name:"Anna"},{id:2,name:"Laila"},{id:3,name:"Lena"}],O=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={users:f},e.addUser=function(t){e.setState((function(e){var n={id:Math.max.apply(Math,Object(i.a)(e.users.map((function(e){return e.id}))))+1,name:t};return{users:[].concat(Object(i.a)(e.users),[n])}})),console.log(e.state.users)},e.deleteUser=function(t){e.setState((function(e){return{users:e.users.filter((function(e){return e.id!==t}))}}))},e.renameUser=function(t,n){e.setState((function(e){return{users:e.users.map((function(e){return e.id===t?Object(u.a)(Object(u.a)({},e),{},{name:n}):e}))}}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.users;return console.log(e),Object(p.jsxs)("div",{className:"",children:[Object(p.jsx)(d,{onAdd:this.addUser}),Object(p.jsx)(h,{users:e,onDelete:this.deleteUser,onRename:this.renameUser})]})}}]),n}(a.a.Component);c.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(O,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d5803eab.chunk.js.map