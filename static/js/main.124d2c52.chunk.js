(this["webpackJsonpprojectmanager-spa3"]=this["webpackJsonpprojectmanager-spa3"]||[]).push([[0],{46:function(e){e.exports=JSON.parse('{"pmspa-api":{"api":"https://pmspa-api.herokuapp.com","apiVersion":"v1","apiVersionBeta":"v1.1"},"CNAME":"jbot.angelovski.ga"}')},71:function(e,t,a){e.exports=a(89)},77:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),o=a.n(c),l=a(14),s=a(5),i=(a(76),a(77),a(6)),u=a.n(i),m=a(7),d=a(18),f=a(68),p=a(28),h=a(8),E=a(70),v=function(e){var t=e.component,a=Object(E.a)(e,["component"]),n=Object(s.f)((function(e){return e})).isLoggedIn;return r.a.createElement(h.b,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(h.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},k=a(11),b=a(19),g=a(34),y=a(52),w=a(60),x=a(38),j=function(e){var t=Object(s.f)((function(e){return e})),a=t.dayStart,n=t.dayEnd,c=Object(s.e)((function(e){return e})),o=c.setDayStart,l=c.setDayEnd;return r.a.createElement(w.a,{className:""},r.a.createElement(b.a,{inline:!0,className:"d-inline-block",onSubmit:function(){var t=Object(m.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,e.callFunction(e.query);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},r.a.createElement(y.a,{size:"sm",className:""},r.a.createElement(g.a,{size:"sm",type:"date",className:"",value:a,onChange:function(e){return o(e.target.value)}}),r.a.createElement(g.a,{size:"sm",type:"date",className:"",value:n,onChange:function(e){return l(e.target.value)}}),r.a.createElement(y.a.Append,null,r.a.createElement(x.a,{size:"sm",type:"submit",variant:"outline-secondary",className:"dropdown-toggle"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-calendar mr-1"},r.a.createElement("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),r.a.createElement("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),r.a.createElement("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),r.a.createElement("line",{x1:"3",y1:"10",x2:"21",y2:"10"})),"Submit")))))},O=function(e){var t=e.callFunction,a=e.query,n=e.mainNav,c=e.secondNav;return r.a.createElement("div",{className:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 "},r.a.createElement(k.a,{variant:"tabs",defaultActiveKey:window.location.hash.includes(c)?"link-1":"home",className:"w-50"},r.a.createElement(k.a.Item,null,r.a.createElement(k.a.Link,{href:n,className:"nav-link",eventKey:"home"},e.children[0])),c&&r.a.createElement(k.a.Item,null,r.a.createElement(k.a.Link,{href:c,className:"nav-link",eventKey:"link-1"},e.children[1]))),a&&r.a.createElement(j,{callFunction:t,query:a}))},S=function(){return r.a.createElement(O,null,"homepage")},N=function(){return r.a.createElement(O,null,"Profile")},T=function(){return r.a.createElement(O,null,"Projects")},L=a(61),D=a(62),I=a(13),B=function(e){var t=e.tasks;return r.a.createElement(D.a,null,t.map((function(e){return r.a.createElement(I.a,{key:e._id},r.a.createElement(I.a.Header,null,e.column),r.a.createElement(I.a.Body,null,r.a.createElement(I.a.Title,null,e.title),r.a.createElement(I.a.Subtitle,{className:"mb-2 text-muted"},e.pl),r.a.createElement(I.a.Text,null,e.description),r.a.createElement(I.a.Text,null,"Events: ",e.eventsCount||0," Notes: ",e.notesCount||0),e.kanboard&&r.a.createElement(I.a.Link,{href:e.kanboard,target:"_blank"},"Kanboard")),r.a.createElement(I.a.Footer,null,r.a.createElement("small",{className:"text-muted"},e.createdAt)))})))},C=function(){var e=Object(s.f)((function(e){return e})),t=e.taskDocs,a=e.taskDocsSkip,c=e.hasMoreTaskDocs,o=Object(s.e)((function(e){return e})).getTaskDocs;Object(n.useEffect)((function(){Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=!t.length,!e.t0){e.next=4;break}return e.next=4,o(a);case 4:case"end":return e.stop()}}),e)})))()}),[]);var l=function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(a);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{callFunction:!0,query:!0,mainNav:"#/tasks",secondNav:"#/tasks/booking"},"All tasks","Booking"),r.a.createElement(L.a,{dataLength:t.length,next:l,hasMore:c,loader:r.a.createElement("h4",null,"Loading...")},t.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement("h5",null,e.project),r.a.createElement(B,{tasks:e.tasks}))}))))},H=function(){return r.a.createElement(O,null,"Clock")},M=function(){return r.a.createElement(O,null,"Calendar")},F=a(22),P=a(63),A=a.n(P),z=function(e){var t=e.seriesData,a=e.type,c=0,o="";"worked"===a&&(c=Math.round(t/10*100),o="#008FFB"),"booked"!==a&&"pending"!==a||(c=Math.round(t/7.5*100),o="#00f970"),"pending"===a&&(o="#fcc202"),"overtime"===a&&(c=Math.round(t/2*100),o="#f90010");var l=Object(n.useState)([c]),s=Object(n.useState)({chart:{type:"radialBar"},colors:[o],plotOptions:{radialBar:{inverseOrder:!1,startAngle:0,endAngle:360,offsetX:-30,offsetY:-15,hollow:{margin:1,size:"50%",background:"transparent",image:void 0,imageWidth:150,imageHeight:150,imageOffsetX:0,imageOffsetY:0,imageClipped:!0,position:"front",dropShadow:{enabled:!1,top:0,left:0,blur:3,opacity:.5}},track:{show:!0,startAngle:void 0,endAngle:void 0,background:"#ededed",strokeWidth:"97%",opacity:1,margin:5,dropShadow:{enabled:!1,top:0,left:0,blur:3,opacity:.5}},dataLabels:{show:!0,name:{show:!1,fontSize:"16px",fontFamily:void 0,fontWeight:600,color:void 0,offsetY:-10},value:{show:!0,fontSize:"9px",fontFamily:void 0,fontWeight:400,color:void 0,offsetY:5,formatter:function(e){return e+" %"}}}}}});return r.a.createElement("div",{style:{position:"absolute"}},r.a.createElement("div",{id:"chart"},r.a.createElement(A.a,{options:s[0],series:l[0],type:"radialBar",width:"120px",height:"120px"})))},Y=function(e){return r.a.createElement(F.a,{xl:3,md:6},r.a.createElement(I.a,{className:"mb-3"},r.a.createElement(I.a.Body,null,r.a.createElement("div",{className:"float-left",dir:"ltr"},r.a.createElement(z,{seriesData:e.totalHours,type:e.type})),r.a.createElement("div",{className:"text-right"},r.a.createElement("h3",{className:"mb-1"},e.totalHours,r.a.createElement("small",{className:"text-muted"},"h")),r.a.createElement("p",{className:"text-muted mb-1"},e.children)))))},W=a(35),q=a.n(W),G=a(67),V=a(43),K=a(25),J=a(26);function R(){var e=Object(K.a)(["\n  white-space: nowrap;\n  display: flex;\n  justify-content: space-between;\n\n  svg {\n    opacity: 0.5;\n    cursor: pointer;\n    color: ",";\n  }\n"]);return R=function(){return e},e}function U(){var e=Object(K.a)(["\n  > td {\n    border-top: 0;\n  }\n\n  > td:first-child {\n    cursor: pointer;\n  }\n"]);return U=function(){return e},e}var X=J.a.tr(U()),_=J.a.td(R(),(function(e){return"boolean"!==typeof e.booked?"#007bff":e.booked?"green":"red"})),Q=function(e){var t=e.event,a=Object(n.useState)(!1),c=Object(d.a)(a,2),o=c[0],s=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(X,null,r.a.createElement(_,{booked:t.booked,onClick:function(){return s(!o)}},r.a.createElement("span",null,t.title),t.booked?r.a.createElement(V.b,null):r.a.createElement(V.c,null)),r.a.createElement("td",{style:{textAlign:"center"}},t.duration,r.a.createElement("small",{className:"text-muted"}," h")),r.a.createElement(_,null,r.a.createElement(l.b,{to:"/stats/".concat(t.taskId)},t.task),t.kanboard&&r.a.createElement(V.a,{onClick:function(){return window.open("".concat(t.kanboard,"#t-").concat(t.duration),"","resizable=yes,scrollbars=yes,width=800,height=600")}}))),o&&t.logs.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",{className:"text-muted"},"- ",e.title),r.a.createElement("td",{style:{textAlign:"center"}},e.duration,r.a.createElement("small",{className:"text-muted"}," h")),r.a.createElement("td",null))})))},Z=function(e){var t=e.stat;return r.a.createElement(p.a,null,r.a.createElement(F.a,null,r.a.createElement(I.a,{className:"mb-3"},r.a.createElement(I.a.Body,null,r.a.createElement(I.a.Title,null,q()(t.date).format("dddd, MMMM Do YYYY")),r.a.createElement(G.a,{striped:!0,hover:!0,responsive:!0,size:"sm",className:"mb-0"},r.a.createElement("colgroup",null,r.a.createElement("col",{style:{width:"50%"}}),r.a.createElement("col",{style:{width:"10%"}}),r.a.createElement("col",{style:{width:"40%"}})),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Event"),r.a.createElement("th",{scope:"col",style:{textAlign:"center"}},"Duration"),r.a.createElement("th",{scope:"col"},"Task"))),r.a.createElement("tbody",null,t.events.map((function(e,t){return r.a.createElement(Q,{key:t,event:e})}))))))))},$=function(e){return e.dayStats.map((function(e){return r.a.createElement(n.Fragment,{key:e.date},r.a.createElement(p.a,null,r.a.createElement(Y,{totalHours:e.totalHoursWorked,type:"worked"},"Hours worked"),r.a.createElement(Y,{totalHours:e.totalHoursBooked,type:"booked"},"Hours booked"),r.a.createElement(Y,{totalHours:e.totalHoursPendingBooking,type:"pending"},"Pending booking"),r.a.createElement(Y,{totalHours:e.totalHoursOvertime,type:"overtime"},"Overtime")),r.a.createElement(Z,{stat:e}))}))},ee=function(){var e=Object(s.f)((function(e){return e})),t=e.dayStart,a=e.dayEnd,c=e.dayStats,o=e.statsFetched,l=Object(s.e)((function(e){return e})).getDayStats,i=new URLSearchParams("start=".concat(t,"&end=").concat(a));return Object(n.useEffect)((function(){Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=!o,!e.t0){e.next=4;break}return e.next=4,l(i);case 4:case"end":return e.stop()}}),e)})))()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{callFunction:l,query:i,mainNav:"#/stats",secondNav:"#/stats/total"},"Stats","Total"),r.a.createElement($,{dayStats:c}))},te=function(e){var t=e.stat;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Start: ",t.range.startDate),r.a.createElement("div",null,"End: ",t.range.endDate),r.a.createElement("div",null,"Total days: ",t.totalDays),r.a.createElement("div",null,"Total events: ",t.totalEvents),r.a.createElement("div",null,"Total logs: ",t.totalLogs),r.a.createElement("div",null,"Total hours worked: ",t.totalHoursWorked),r.a.createElement("div",null,"Total hours booked: ",t.totalHoursBooked),r.a.createElement("div",null,"Total hours pending: ",t.totalHoursPendingBooking),r.a.createElement("div",null,"Total hours overtime: ",t.totalHoursOvertime))},ae=function(){var e=Object(s.f)((function(e){return e})),t=e.dayStart,a=e.dayEnd,c=e.dayStatsTotal,o=Object(s.e)((function(e){return e})).getDayStatsTotal,l=new URLSearchParams("start=".concat(t,"&end=").concat(a,"&total=",!0));return Object(n.useEffect)((function(){Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(l);case 2:case"end":return e.stop()}}),e)})))()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{callFunction:o,query:l,mainNav:"#/stats",secondNav:"#/stats/total"},"Stats","Total"),c.map((function(e){return r.a.createElement(te,{key:e.date,stat:e})})))},ne=function(e){var t=e.stat;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Start: ",t.range.startDate),r.a.createElement("div",null,"End: ",t.range.endDate),r.a.createElement("div",null,"Task: ",t.task),r.a.createElement("div",null,"Kanboard: ",t.kanboard),r.a.createElement("div",null,"Total events: ",t.totalEvents),r.a.createElement("div",null,"Total hours worked: ",t.totalHoursWorked),r.a.createElement("div",null,"Total hours booked: ",t.totalHoursBooked),r.a.createElement("div",null,"Total hours pending: ",t.totalHoursPendingBooking))},re=function(e){var t=Object(s.f)((function(e){return e})),a=t.dayStart,c=t.dayEnd,o=t.taskStats,l=Object(s.e)((function(e){return e})),i=l.setTaskStats,d=l.getTaskStats,f=new URLSearchParams("start=".concat(a,"&end=").concat(c,"&id=").concat(e.match.params.projectId));return Object(n.useEffect)((function(){return Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(f);case 2:case"end":return e.stop()}}),e)})))(),function(){return i([])}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{callFunction:d,query:f},"Project stats: ",o[0]&&o[0].task),o.map((function(e){return r.a.createElement(ne,{key:e.task,stat:e})})))};function ce(){var e=Object(K.a)(["\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545;\n"]);return ce=function(){return e},e}function oe(){var e=Object(K.a)(["\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n"]);return oe=function(){return e},e}function le(){var e=Object(K.a)(["\n  top: 0px;\n  bottom: 0px;\n  height: 100vh;\n  min-width: 250px;\n"]);return le=function(){return e},e}var se=J.a.div(le()),ie=J.a.div(oe()),ue=J.a.div(ce()),me=function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(!0),i=Object(d.a)(l,2),f=i[0],p=i[1],h=Object(n.useState)(""),E=Object(d.a)(h,2),v=E[0],k=E[1],g=Object(n.useState)(!0),y=Object(d.a)(g,2),w=y[0],j=y[1],O=Object(n.useState)(!1),S=Object(d.a)(O,2),N=S[0],T=S[1],L=Object(s.f)((function(e){return e})),D=L.isBackendAlive,I=L.isLoggedIn,B=Object(s.e)((function(e){return e})).logIn,C=function(){e.location.state?e.history.push(e.location.state.from.pathname):e.history.push("/")},H=function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),T(!1),!f||!w){e.next=7;break}return e.next=5,B({email:c,password:v});case 5:e.sent?(T(!1),C()):(p(!0),j(!0),T(!0));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){I&&C()}),[]),I?null:r.a.createElement(F.a,{md:{span:3,offset:6}},r.a.createElement(se,null,r.a.createElement(ie,null,r.a.createElement(b.a,{onSubmit:H},r.a.createElement(b.a.Group,{controlId:"formBasicEmail"},r.a.createElement(b.a.Label,null,"Email address"),r.a.createElement(b.a.Control,{required:!0,size:"sm",type:"email",placeholder:"Email",value:c,onChange:function(e){return o(e.target.value)},onBlur:function(e){return c.length<6?p(!1):p(!0)}}),!f&&r.a.createElement(ue,null,"Email needs to have at least 6 characters.")),r.a.createElement(b.a.Group,{controlId:"formBasicPassword"},r.a.createElement(b.a.Label,null,"Password"),r.a.createElement(b.a.Control,{required:!0,size:"sm",type:"password",placeholder:"Password",value:v,onChange:function(e){return k(e.target.value)},onBlur:function(e){return v.length<6?j(!1):j(!0)}}),!w&&r.a.createElement(ue,null,"Password needs to have at least 6 characters."),N&&r.a.createElement(ue,null,"Invalid credentials. Please try again.")),r.a.createElement(x.a,{disabled:!D||!w||!f,variant:"primary",type:"submit",size:"sm"},"Submit"),!D&&r.a.createElement(ue,null,"Service is currently down. Please try again later.")))))},de=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null,"borked"),r.a.createElement(l.b,{to:"/"},"Ho Gome"))},fe=function(){return r.a.createElement(h.d,null,r.a.createElement(v,{exact:!0,path:"/",component:S}),r.a.createElement(v,{exact:!0,path:"/profile",component:N}),r.a.createElement(v,{exact:!0,path:"/projects",component:T}),r.a.createElement(v,{exact:!0,path:"/tasks",component:C}),r.a.createElement(v,{exact:!0,path:"/clock",component:H}),r.a.createElement(v,{exact:!0,path:"/calendar",component:M}),r.a.createElement(v,{exact:!0,path:"/stats",component:ee}),r.a.createElement(v,{exact:!0,path:"/stats/total",component:ae}),r.a.createElement(v,{exact:!0,path:"/stats/:projectId",component:re}),r.a.createElement(h.b,{exact:!0,path:"/login",component:me}),r.a.createElement(h.b,{path:"*",component:de}))},pe=a(30),he=(a(87),function(){var e=Object(s.f)((function(e){return e})).isLoggedIn,t=Object(s.e)((function(e){return e})).logOut;return e&&r.a.createElement(pe.a,{bg:"dark",variant:"dark",collapseOnSelect:!0,expand:"md",className:"sticky-top flex-md-nowrap p-0 shadow"},r.a.createElement(pe.a.Brand,{className:"col-md-3 col-lg-2 mr-0 px-3"},"jBot"),r.a.createElement(pe.a.Toggle,{className:"position-absolute","aria-controls":"sidebarMenu",onClick:function(){document.getElementById("sidebarMenu").classList.toggle("show")}}),r.a.createElement("input",{className:"form-control form-control-dark w-100",type:"text",placeholder:"Search","aria-label":"Search"}),r.a.createElement(k.a,{as:"ul",className:"px-3"},r.a.createElement(k.a.Item,{as:"li"},r.a.createElement(k.a.Link,{onClick:function(){return t()}},"Logout"))))}),Ee=(a(88),function(){var e=function(e){var t=document.querySelector(".active");t&&t.classList.remove("active"),e.target.classList.add("active"),document.getElementById("sidebarMenu").classList.remove("show")};return Object(s.f)((function(e){return e})).isLoggedIn&&r.a.createElement(pe.a,{id:"sidebarMenu",expand:!1,className:"col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"},r.a.createElement("div",{className:"sidebar-sticky pt-3"},r.a.createElement(k.a,{as:"ul",navbar:!1,className:"flex-column"},r.a.createElement(k.a.Item,{as:"li"},r.a.createElement(l.b,{onClick:e,className:"nav-link",to:"/"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-home"},r.a.createElement("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),r.a.createElement("polyline",{points:"9 22 9 12 15 12 15 22"})),"Home")),r.a.createElement(k.a.Item,{as:"li"},r.a.createElement(l.b,{onClick:e,className:"nav-link",to:"/profile"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-users"},r.a.createElement("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),r.a.createElement("circle",{cx:"9",cy:"7",r:"4"}),r.a.createElement("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),r.a.createElement("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})),"Profile")),r.a.createElement(k.a.Item,{as:"li"},r.a.createElement(l.b,{onClick:e,className:"nav-link",to:"/projects"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-layers"},r.a.createElement("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),r.a.createElement("polyline",{points:"2 17 12 22 22 17"}),r.a.createElement("polyline",{points:"2 12 12 17 22 12"})),"Projects")),r.a.createElement(k.a.Item,{as:"li"},r.a.createElement(l.b,{onClick:e,className:"nav-link",to:"/tasks"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-file"},r.a.createElement("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),r.a.createElement("polyline",{points:"13 2 13 9 20 9"})),"Tasks")),r.a.createElement(k.a.Item,{as:"li"},r.a.createElement(l.b,{onClick:e,className:"nav-link",to:"/clock"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-home"},r.a.createElement("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),r.a.createElement("polyline",{points:"9 22 9 12 15 12 15 22"})),"Clock")),r.a.createElement(k.a.Item,{as:"li"},r.a.createElement(l.b,{onClick:e,className:"nav-link",to:"/calendar"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-home"},r.a.createElement("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),r.a.createElement("polyline",{points:"9 22 9 12 15 12 15 22"})),"Calendar")),r.a.createElement(k.a.Item,{as:"li"},r.a.createElement(l.b,{onClick:e,className:"nav-link",to:"/stats"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-bar-chart-2"},r.a.createElement("line",{x1:"18",y1:"20",x2:"18",y2:"10"}),r.a.createElement("line",{x1:"12",y1:"20",x2:"12",y2:"4"}),r.a.createElement("line",{x1:"6",y1:"20",x2:"6",y2:"14"})),"Stats")))))}),ve=function(e){return console.log("I'm being rendered! Layout"),r.a.createElement(r.a.Fragment,null,r.a.createElement(he,null),r.a.createElement(f.a,{fluid:!0},r.a.createElement(p.a,null,r.a.createElement(Ee,null),r.a.createElement("main",{role:"main",className:"col-md-9 ml-sm-auto col-lg-10 px-md-4"},r.a.createElement(fe,null)))))},ke=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],c=t[1],o=Object(s.e)((function(e){return e})).checkAuth;return Object(n.useEffect)((function(){Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:c(!0);case 3:case"end":return e.stop()}}),e)})))()}),[]),a?r.a.createElement(ve,null):null},be=a(69),ge=a(46)["pmspa-api"],ye=ge.api,we=ge.apiVersion,xe=function(e){return function(){var t=Object(m.a)(u.a.mark((function t(a,n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e(n);case 3:if((r=t.sent).status>=500&&a.setIsBackendAlive(!1),r.error){t.next=10;break}return a.setIsLoggedIn(!0),t.abrupt("return",!0);case 10:return a.setIsLoggedIn(!1),t.abrupt("return",!1);case 12:t.next=20;break;case 14:return t.prev=14,t.t0=t.catch(0),console.warn(t.t0),a.setIsLoggedIn(!1),a.setIsBackendAlive(!1),t.abrupt("return",!1);case 20:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e,a){return t.apply(this,arguments)}}()},je=xe((function(e){return new Promise((function(t,a){fetch("".concat(ye,"/").concat(we,"/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return t(e)})).catch((function(e){return a(e)}))}))})),Oe=xe((function(){var e;return new Promise((function(t,a){fetch("".concat(ye,"/").concat(we,"/auth"),{method:"POST",credentials:"include"}).then((function(t){return e=t.status,t.json()})).then((function(a){return t(Object(be.a)({status:e},a))})).catch((function(e){return a(e)}))}))})),Se=function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e,t){fetch("".concat(ye,"/").concat(we,"/auth/logout"),{method:"GET",credentials:"include"}).then((function(e){return e.json()})).then((function(t){return e(t)})).catch((function(e){return t(e)}))}));case 3:if(e.sent.error){e.next=9;break}return t.setIsLoggedIn(!1),e.abrupt("return",!0);case 9:return e.abrupt("return",!1);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(0),console.warn(e.t0),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),Ne=a(53),Te=a(46)["pmspa-api"],Le=Te.api,De=Te.apiVersion,Ie=function(e){return new Promise((function(t,a){fetch("".concat(Le,"/").concat(De,"/stats/tasks?skip=").concat(e),{method:"GET",credentials:"include"}).then((function(e){return e.json()})).then((function(e){return t(e)})).catch((function(e){return a(e)}))}))},Be=function(){var e=Object(m.a)(u.a.mark((function e(t,a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ie(a);case 3:(n=e.sent).error||(t.setTaskDocs(n.docs),t.setHasMoreTaskDocs(n.stats)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.warn(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),Ce=a(46)["pmspa-api"],He=Ce.api,Me=Ce.apiVersion,Fe=function(e){return new Promise((function(t,a){fetch("".concat(He,"/").concat(Me,"/stats/day?").concat(e),{method:"GET",credentials:"include"}).then((function(e){return e.json()})).then((function(e){return t(e)})).catch((function(e){return a(e)}))}))},Pe=function(e,t){return function(){var a=Object(m.a)(u.a.mark((function a(n,r){var c;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e(r);case 3:(c=a.sent).error||n[t](c.stats),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.warn(a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e,t){return a.apply(this,arguments)}}()},Ae=Pe(Fe,"setDayStats"),ze=Pe(Fe,"setDayStatsTotal"),Ye=Pe((function(e){return new Promise((function(t,a){fetch("".concat(He,"/").concat(Me,"/stats/task?").concat(e),{method:"GET",credentials:"include"}).then((function(e){return e.json()})).then((function(e){return t(e)})).catch((function(e){return a(e)}))}))}),"setTaskStats"),We=function(e){return function(t,a){t.statsFetched=!0,t[e]=a}},qe=We("dayStats"),Ge=We("dayStatsTotal"),Ve=We("taskStats"),Ke=Object(s.c)({isBackendAlive:!0,isLoggedIn:!1,taskDocs:[],taskDocsSkip:0,hasMoreTaskDocs:!1,dayStart:q()().startOf("week").format("YYYY-MM-DD"),dayEnd:q()().format("YYYY-MM-DD"),statsFetched:!1,dayStats:[],dayStatsTotal:[],taskStats:[],logIn:Object(s.d)((function(e,t){return je(e,t)})),logOut:Object(s.d)((function(e){return Se(e)})),checkAuth:Object(s.d)((function(e,t){return Oe(e,t)})),getTaskDocs:Object(s.d)((function(e,t){return Be(e,t)})),getDayStats:Object(s.d)((function(e,t){return Ae(e,t)})),getDayStatsTotal:Object(s.d)((function(e,t){return ze(e,t)})),getTaskStats:Object(s.d)((function(e,t){return Ye(e,t)})),setIsBackendAlive:Object(s.b)((function(e,t){return function(e,t){e.isBackendAlive=t}(e,t)})),setIsLoggedIn:Object(s.b)((function(e,t){return function(e,t){e.isLoggedIn=t}(e,t)})),setTaskDocs:Object(s.b)((function(e,t){return function(e,t){e.taskDocsSkip+=20,e.taskDocs=[].concat(Object(Ne.a)(e.taskDocs),Object(Ne.a)(t))}(e,t)})),setHasMoreTaskDocs:Object(s.b)((function(e,t){return function(e,t){e.hasMoreTaskDocs=!!t.remaining}(e,t)})),setDayStart:Object(s.b)((function(e,t){return function(e,t){e.dayStart=t}(e,t)})),setDayEnd:Object(s.b)((function(e,t){return function(e,t){e.dayEnd=t}(e,t)})),setDayStats:Object(s.b)((function(e,t){return qe(e,t)})),setDayStatsTotal:Object(s.b)((function(e,t){return Ge(e,t)})),setTaskStats:Object(s.b)((function(e,t){return Ve(e,t)}))});o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null,r.a.createElement(s.a,{store:Ke},r.a.createElement(ke,null)))),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.124d2c52.chunk.js.map