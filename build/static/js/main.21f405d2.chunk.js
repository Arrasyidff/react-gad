(this["webpackJsonpsandbox-pag"]=this["webpackJsonpsandbox-pag"]||[]).push([[0],{22:function(e,s,t){},23:function(e,s,t){},30:function(e,s,t){"use strict";t.r(s);var c=t(1),n=t.n(c),a=t(16),i=t.n(a),l=(t(22),t(23),t(8)),j=t(0);var r=function(){return Object(j.jsxs)("div",{className:"navbar flex justify-between items-center",children:[Object(j.jsx)("div",{className:"logo-nav",children:Object(j.jsx)(l.b,{to:"/",children:Object(j.jsx)("img",{src:"https://www.zahironline.com/wp-content/uploads/2016/09/gadjian-logo-zahir-online-337x150.png",alt:"Gadjian.com"})})}),Object(j.jsxs)("div",{className:"user-nav flex justify-between items-center",children:[Object(j.jsxs)("p",{children:["Hello, ",Object(j.jsx)("span",{children:"Gadjian User"})]}),Object(j.jsx)("div",{className:"user-photo-nav"})]})]})},d=t(4),b=t(2);var o=function(){return Object(j.jsx)("div",{children:"Hello Home"})};var O=function(e){var s=e.data,t=s.dob.date.split("T")[0].split("-")[1],c=s.dob.date.split("T")[0].split("-")[2];return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"card rounded-lg shadow",children:[Object(j.jsxs)("div",{className:"head-card",children:[Object(j.jsxs)("p",{children:["Personnel ID: ",Object(j.jsx)("span",{children:s.id.value})]}),Object(j.jsx)("i",{class:"fas fa-ellipsis-h"})]}),Object(j.jsxs)("div",{className:"card-middle",children:[Object(j.jsx)("div",{className:"photo-card",children:Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:s.picture.large,alt:""})})}),Object(j.jsxs)("div",{className:"card-desc",children:[Object(j.jsx)("h4",{children:"Name"}),Object(j.jsxs)("p",{children:[s.name.first," ",s.name.last]}),Object(j.jsx)("h4",{children:"Telephone"}),Object(j.jsx)("p",{children:s.phone}),Object(j.jsx)("h4",{className:"dob-card-title",children:"Birthday"}),Object(j.jsxs)("p",{className:"dob-card-desc",children:[t,"-",c]}),Object(j.jsx)("h4",{className:"email-card-title",children:"Email"}),Object(j.jsx)("p",{className:"email-card-desc",children:s.email})]})]})]})})};var h=function(){return Object(j.jsx)("div",{className:"loadingSpinner",children:Object(j.jsx)("img",{src:"https://ujianonline.smkn1-sawahlunto.sch.id/public/images/loading.gif",alt:""})})};var u=function(){var e=Object(c.useState)([]),s=Object(d.a)(e,2),t=s[0],n=s[1],a=Object(c.useState)(!0),i=Object(d.a)(a,2),l=i[0],r=i[1],b=Object(c.useState)([]),o=Object(d.a)(b,2),u=o[0],x=o[1],m=Object(c.useState)(0),f=Object(d.a)(m,2),p=f[0],v=f[1],N=Object(c.useState)(4),g=Object(d.a)(N,2),S=g[0],w=g[1],C=Object(c.useState)(0),k=Object(d.a)(C,2),T=k[0],P=k[1],F=Object(c.useState)(""),L=Object(d.a)(F,2),D=L[0],E=L[1],y=Object(c.useState)(!0),A=Object(d.a)(y,2),B=A[0],I=A[1],z=Object(c.useState)(!0),H=Object(d.a)(z,2),G=H[0],J=H[1],M=Object(c.useState)(!1),R=Object(d.a)(M,2),U=R[0],q=R[1],K=Object(c.useState)([]),Q=Object(d.a)(K,2),V=Q[0],W=Q[1],X=Object(c.useState)(!1),Y=Object(d.a)(X,2),Z=Y[0],$=Y[1];Object(c.useEffect)((function(){fetch("https://randomuser.me/api/?results=28").then((function(e){return e.json()})).then((function(e){n(e.results),x(e.results),setTimeout((function(){I(!1)}),1e3);var s=4*Math.ceil(e.results.length/S);P(s)})).catch((function(e){return console.log(e)}))}),[]);var _=function(e){I(!0),"next"===e?(v(p+4),w(S+4)):"previous"===e&&(v(p-4),w(S-4)),setTimeout((function(){I(!1)}),1e3)},ee=function(){Z?(I(!0),J(!0),$(!1),setTimeout((function(){I(!1)}),1e3)):(I(!0),r(!0),x(t),W([]),q(!1),J(!0),setTimeout((function(){I(!1)}),1e3))};return B?Object(j.jsx)(h,{}):Z?Object(j.jsxs)("div",{className:"data-not-found",children:[Object(j.jsx)("img",{src:"https://cdn.dribbble.com/users/1121009/screenshots/11030107/media/25be2b86a12dbfd8da02db4cfcbfe50a.jpg?compress=1&resize=400x300",alt:""}),Object(j.jsx)("p",{children:"Data Not Found"}),Object(j.jsx)("button",{onClick:ee,children:"Show All Personnels"})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"header-personnels",children:[Object(j.jsxs)("div",{className:"title-personnels",children:[Object(j.jsx)("h1",{children:"PERSONNEL LIST"}),Object(j.jsx)("p",{children:"List of all personnels"})]}),Object(j.jsxs)("div",{className:"actions-personnels",children:[Object(j.jsxs)("div",{className:"search-person",children:[Object(j.jsx)("i",{class:"fas fa-search",onClick:function(){var e=t.filter((function(e){return e.name.first.toLowerCase()===D.toLowerCase()}));0===e.length?(I(!0),$(!0),J(!1),setTimeout((function(){I(!1)}),1e3)):(I(!0),q(!0),W(e),r(!1),J(!1),setTimeout((function(){I(!1)}),1e3)),E("")}}),Object(j.jsx)("input",{type:"text",placeholder:"Find Personnels",value:D,onChange:function(e){return E(e.target.value)}})]}),Object(j.jsx)("div",{className:"add-personnel",children:Object(j.jsxs)("p",{children:["ADD PERSONNEL ",Object(j.jsx)("i",{class:"fas fa-plus"})]})})]})]}),U&&Object(j.jsx)("div",{className:"filterData",children:V.map((function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(O,{data:e},e.email),Object(j.jsx)("button",{onClick:ee,children:"Show All Personnels"})]})}))}),l&&Object(j.jsx)("div",{className:"personnels grid grid-cols-4 gap-2",children:u.slice(p,S).map((function(e){return Object(j.jsx)(O,{data:e},e.email)}))}),G&&Object(j.jsx)("div",{className:"pagination-button",children:Object(j.jsxs)("div",{className:"actions-btn",children:[Object(j.jsxs)("button",{className:"btn-previous",onClick:_.bind(this,"previous"),disabled:0===p,children:[Object(j.jsx)("i",{class:"fas fa-chevron-left"}),"Previous"]}),Object(j.jsxs)("button",{className:"btn-next",onClick:_.bind(this,"next"),disabled:S===T,children:["Next",Object(j.jsx)("i",{class:"fas fa-chevron-right"})]})]})})]})};var x=function(){var e=Object(c.useState)(!1),s=Object(d.a)(e,2),t=s[0],n=s[1],a=function(){n(!t)};return Object(j.jsxs)("div",{className:"content flex",children:[Object(j.jsx)("i",{class:t?"btn-bar fas fa-times":"btn-bar fas fa-bars",onClick:a}),Object(j.jsxs)("div",{className:t?"sidebar bar-open":"sidebar bar-close",children:[Object(j.jsxs)(l.b,{to:"/home",onClick:a,children:[Object(j.jsx)("i",{class:"fas fa-home"}),"Beranda"]}),Object(j.jsxs)(l.b,{to:"/add",onClick:a,children:[Object(j.jsx)("i",{class:"fas fa-users"}),"Personnel List"]}),Object(j.jsxs)(l.b,{to:"/test",onClick:a,children:[Object(j.jsx)("i",{class:"fas fa-calendar-alt"}),"Daily Attendance"]})]}),Object(j.jsx)("div",{className:"fill-content",children:Object(j.jsx)("div",{className:"wrap-fill",children:Object(j.jsxs)(b.c,{children:[Object(j.jsx)(b.a,{path:"/home",children:Object(j.jsx)(o,{})}),Object(j.jsx)(b.a,{path:"/add",children:Object(j.jsx)(u,{})})]})})})]})};var m=function(){return Object(j.jsx)(l.a,{children:Object(j.jsxs)("div",{className:"wrapper font-sans",children:[Object(j.jsx)(r,{}),Object(j.jsx)(x,{})]})})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,31)).then((function(s){var t=s.getCLS,c=s.getFID,n=s.getFCP,a=s.getLCP,i=s.getTTFB;t(e),c(e),n(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),f()}},[[30,1,2]]]);
//# sourceMappingURL=main.21f405d2.chunk.js.map