(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(9),c=n.n(s),i=(n(14),n(6)),o=n(8),u=n(2),l=n(3),p=n(5),j=n(4),b=(n(15),n(16),n(0)),h=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={isOpen:!1},e.toggle=function(){e.setState((function(e){return{isOpen:!e.isOpen}}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.types,r=t.value,a=t.onChange,s=this.state.isOpen;return Object(b.jsxs)("div",{className:"TypePicker",children:[Object(b.jsx)("button",{className:"TypePicker__button",type:"button",onClick:function(){return e.toggle()},children:r||"Choose a color"}),s&&Object(b.jsx)("ul",{className:"TypePicker__list",children:n.map((function(t){return Object(b.jsx)("li",{onClick:function(){a(t),e.toggle()},onKeyDown:function(){},children:t},t)}))})]})}}]),n}(a.a.Component),d=(n(18),["book","magazine","note"]),m=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={username:"",type:""},e.handleSubmit=function(t){t.preventDefault(),e.state.username&&(e.props.onAdd(e.state.username,e.state.type),e.setState({username:"",type:""}))},e.setType=function(t){e.setState({type:t})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("form",{className:"NewUserForm",onSubmit:this.handleSubmit,children:[Object(b.jsx)("input",{type:"text",placeholder:"Enter a name",value:this.state.username,onChange:function(t){e.setState({username:t.target.value})}}),Object(b.jsx)(h,{types:d,value:this.state.type,onChange:this.setType}),Object(b.jsx)("button",{type:"submit",children:"Add"})]})}}]),n}(a.a.Component),f=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={user:e.props.user},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.user,n=t.name,r=t.id,a=this.props,s=a.onDelete,c=a.onRename;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(r,n)},children:[this.props.user.id,"-",this.props.user.name,"-",this.props.user.type,Object(b.jsx)("input",{type:"text",value:n,onChange:function(t){e.setState((function(e){return{user:Object(i.a)(Object(i.a)({},e.user),{},{name:t.target.value})}}))}}),Object(b.jsx)("button",{type:"submit",children:"Save"}),Object(b.jsx)("button",{type:"button",onClick:function(){return s(r)},children:"Delete"})]})})}}]),n}(a.a.Component),O=function(e){var t=e.users,n=e.onDelete,r=e.onRename;return Object(b.jsx)("ul",{children:t.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(f,{user:e,onDelete:n,onRename:r})},e.id)}))})},y=[{id:1,name:"Anna",type:"book"},{id:2,name:"Laila",type:"book"},{id:3,name:"Lena",type:"magazine"},{id:4,name:"Petya",type:"magazine"},{id:5,name:"Kolya",type:"magazine"}],v=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={users:y},e.addUser=function(t,n){e.setState((function(e){var r={id:Math.max.apply(Math,Object(o.a)(e.users.map((function(e){return e.id}))))+1,name:t,type:n};return{users:[].concat(Object(o.a)(e.users),[r])}})),console.log(e.state.users)},e.deleteUser=function(t){e.setState((function(e){return{users:e.users.filter((function(e){return e.id!==t}))}}))},e.renameUser=function(t,n){e.setState((function(e){return{users:e.users.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},{name:n}):e}))}}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.users;return console.log("users",e),Object(b.jsxs)("div",{className:"",style:{backgroundColor:"red",height:"100vh",padding:"50px"},children:[Object(b.jsx)(m,{onAdd:this.addUser}),Object(b.jsx)(O,{users:e,onDelete:this.deleteUser,onRename:this.renameUser})]})}}]),n}(a.a.Component);c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.73545c03.chunk.js.map