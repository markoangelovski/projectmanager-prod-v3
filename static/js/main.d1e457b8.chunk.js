(this["webpackJsonpprojectmanager-spa3"]=this["webpackJsonpprojectmanager-spa3"]||[]).push([[0],{41:function(e,t,a){var n=a(55)["pmspa-api"],r=n.api,c=n.apiVersion;e.exports={getDayStatsCall:function(e){return new Promise((function(t,a){fetch("".concat(r,"/").concat(c,"/stats/day?").concat(e),{method:"GET",credentials:"include"}).then((function(e){return e.json()})).then((function(e){return t(e)})).catch((function(e){return a(e)}))}))},getTaskStatsCall:function(e){return new Promise((function(t,a){fetch("".concat(r,"/").concat(c,"/stats/task?").concat(e),{method:"GET",credentials:"include"}).then((function(e){return e.json()})).then((function(e){return t(e)})).catch((function(e){return a(e)}))}))}}},55:function(e){e.exports=JSON.parse('{"pmspa-api":{"api":"https://pmspa-api.herokuapp.com","apiVersion":"v1","apiVersionBeta":"v1.1"},"CNAME":"jbot.angelovski.ga"}')},67:function(e,t,a){e.exports=a(85)},73:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),o=a.n(c),l=a(10),s=a(5),i=(a(72),a(73),a(6)),u=a.n(i),m=a(11),d=a(17),f=a(64),p=a(29),h=a(7),E=a(66),v=function(e){var t=e.component,a=Object(E.a)(e,["component"]),n=Object(s.f)((function(e){return e})).isLoggedIn;return r.a.createElement(h.b,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(h.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},b=a(9),g=a(18),k=a(33),y=a(50),w=a(58),x=a(36),j=function(e){var t=Object(s.f)((function(e){return e})),a=t.dayStart,n=t.dayEnd,c=Object(s.e)((function(e){return e})),o=c.setDayStart,l=c.setDayEnd;return r.a.createElement(w.a,{className:""},r.a.createElement(g.a,{inline:!0,className:"d-inline-block",onSubmit:function(){var t=Object(m.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,e.callFunction(e.query);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},r.a.createElement(y.a,{size:"sm",className:""},r.a.createElement(k.a,{size:"sm",type:"date",className:"",value:a,onChange:function(e){return o(e.target.value)}}),r.a.createElement(k.a,{size:"sm",type:"date",className:"",value:n,onChange:function(e){return l(e.target.value)}}),r.a.createElement(y.a.Append,null,r.a.createElement(x.a,{size:"sm",type:"submit",variant:"outline-secondary",className:"dropdown-toggle"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-calendar mr-1"},r.a.createElement("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),r.a.createElement("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),r.a.createElement("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),r.a.createElement("line",{x1:"3",y1:"10",x2:"21",y2:"10"})),"Submit")))))},O=function(e){var t=e.callFunction,a=e.query,n=e.mainNav,c=e.secondNav;return r.a.createElement("div",{className:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 "},r.a.createElement(b.a,{variant:"tabs",defaultActiveKey:window.location.hash.includes(c)?"link-1":"home",className:"w-50"},r.a.createElement(b.a.Item,null,r.a.createElement(b.a.Link,{href:n,className:"nav-link",eventKey:"home"},e.children[0])),c&&r.a.createElement(b.a.Item,null,r.a.createElement(b.a.Link,{href:c,className:"nav-link",eventKey:"link-1"},e.children[1]))),a&&r.a.createElement(j,{callFunction:t,query:a}))},S=function(){return r.a.createElement(O,null,"homepage")},N=function(){return r.a.createElement(O,null,"Profile")},L=function(){return r.a.createElement(O,null,"Projects")},I=function(){return r.a.createElement(O,null,"Tasks")},T=function(){return r.a.createElement(O,null,"Clock")},C=function(){return r.a.createElement(O,null,"Calendar")},B=a(24),D=a.n(B),H=a(21),P=a(27),F=a(59),M=a.n(F),Y=function(e){var t=e.seriesData,a=e.type,c=0,o="";"worked"===a&&(c=Math.round(t/10*100),o="#008FFB"),"booked"!==a&&"pending"!==a||(c=Math.round(t/7.5*100),o="#00f970"),"pending"===a&&(o="#fcc202"),"overtime"===a&&(c=Math.round(t/2*100),o="#f90010");var l=Object(n.useState)([c]),s=Object(n.useState)({chart:{type:"radialBar"},colors:[o],plotOptions:{radialBar:{inverseOrder:!1,startAngle:0,endAngle:360,offsetX:-30,offsetY:-15,hollow:{margin:1,size:"50%",background:"transparent",image:void 0,imageWidth:150,imageHeight:150,imageOffsetX:0,imageOffsetY:0,imageClipped:!0,position:"front",dropShadow:{enabled:!1,top:0,left:0,blur:3,opacity:.5}},track:{show:!0,startAngle:void 0,endAngle:void 0,background:"#ededed",strokeWidth:"97%",opacity:1,margin:5,dropShadow:{enabled:!1,top:0,left:0,blur:3,opacity:.5}},dataLabels:{show:!0,name:{show:!1,fontSize:"16px",fontFamily:void 0,fontWeight:600,color:void 0,offsetY:-10},value:{show:!0,fontSize:"9px",fontFamily:void 0,fontWeight:400,color:void 0,offsetY:5,formatter:function(e){return e+" %"}}}}}});return r.a.createElement("div",{style:{position:"absolute"}},r.a.createElement("div",{id:"chart"},r.a.createElement(M.a,{options:s[0],series:l[0],type:"radialBar",width:"120px",height:"120px"})))},A=function(e){return r.a.createElement(H.a,{xl:3,md:6},r.a.createElement(P.a,{className:"mb-3"},r.a.createElement(P.a.Body,null,r.a.createElement("div",{className:"float-left",dir:"ltr"},r.a.createElement(Y,{seriesData:e.totalHours,type:e.type})),r.a.createElement("div",{className:"text-right"},r.a.createElement("h3",{className:"mb-1"},e.totalHours,r.a.createElement("small",{className:"text-muted"},"h")),r.a.createElement("p",{className:"text-muted mb-1"},e.children)))))},z=a(63),W=a(42),q=a(25),G=a(26);function V(){var e=Object(q.a)(["\n  white-space: nowrap;\n  display: flex;\n  justify-content: space-between;\n\n  svg {\n    opacity: 0.5;\n    cursor: pointer;\n    color: ",";\n  }\n"]);return V=function(){return e},e}function J(){var e=Object(q.a)(["\n  > td {\n    border-top: 0;\n  }\n\n  > td:first-child {\n    cursor: pointer;\n  }\n"]);return J=function(){return e},e}var K=G.a.tr(J()),R=G.a.td(V(),(function(e){return"boolean"!==typeof e.booked?"#007bff":e.booked?"green":"red"})),U=function(e){var t=e.event,a=Object(n.useState)(!1),c=Object(d.a)(a,2),o=c[0],s=c[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null,r.a.createElement(R,{booked:t.booked,onClick:function(){return s(!o)}},r.a.createElement("span",null,t.title),t.booked?r.a.createElement(W.b,null):r.a.createElement(W.c,null)),r.a.createElement("td",{style:{textAlign:"center"}},t.duration,r.a.createElement("small",{className:"text-muted"}," h")),r.a.createElement(R,null,r.a.createElement(l.b,{to:"/stats/".concat(t.taskId)},t.task),t.kanboard&&r.a.createElement(W.a,{onClick:function(){return window.open("".concat(t.kanboard,"#t-").concat(t.duration),"","resizable=yes,scrollbars=yes,width=800,height=600")}}))),o&&t.logs.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",{className:"text-muted"},"- ",e.title),r.a.createElement("td",{style:{textAlign:"center"}},e.duration,r.a.createElement("small",{className:"text-muted"}," h")),r.a.createElement("td",null))})))},X=function(e){var t=e.stat;return r.a.createElement(p.a,null,r.a.createElement(H.a,null,r.a.createElement(P.a,{className:"mb-3"},r.a.createElement(P.a.Body,null,r.a.createElement(P.a.Title,null,D()(t.date).format("dddd, MMMM Do YYYY")),r.a.createElement(z.a,{striped:!0,hover:!0,responsive:!0,size:"sm",className:"mb-0"},r.a.createElement("colgroup",null,r.a.createElement("col",{style:{width:"50%"}}),r.a.createElement("col",{style:{width:"10%"}}),r.a.createElement("col",{style:{width:"40%"}})),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Event"),r.a.createElement("th",{scope:"col",style:{textAlign:"center"}},"Duration"),r.a.createElement("th",{scope:"col"},"Task"))),r.a.createElement("tbody",null,t.events.map((function(e,t){return r.a.createElement(U,{key:t,event:e})}))))))))},Q=function(e){var t=e.stat;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,null,r.a.createElement(A,{totalHours:t.totalHoursWorked,type:"worked"},"Hours worked"),r.a.createElement(A,{totalHours:t.totalHoursBooked,type:"booked"},"Hours booked"),r.a.createElement(A,{totalHours:t.totalHoursPendingBooking,type:"pending"},"Pending booking"),r.a.createElement(A,{totalHours:t.totalHoursOvertime,type:"overtime"},"Overtime")),r.a.createElement(X,{stat:t}))},Z=function(){var e=Object(s.f)((function(e){return e})),t=e.dayStart,a=e.dayEnd,c=e.dayStats,o=e.statsFetched,l=Object(s.e)((function(e){return e})).getDayStats,i=new URLSearchParams("start=".concat(t,"&end=").concat(a)),d=D()().subtract(1,"weeks").format("YYYY-MM-DD");return Object(n.useEffect)((function(){i.set("start",d),Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=!o,!e.t0){e.next=4;break}return e.next=4,l(i);case 4:case"end":return e.stop()}}),e)})))()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{callFunction:l,query:i,mainNav:"#/stats",secondNav:"#/stats/total"},"Stats","Total"),c.map((function(e){return r.a.createElement(Q,{key:e.date,stat:e})})))},$=function(e){var t=e.stat;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Start: ",t.range.startDate),r.a.createElement("div",null,"End: ",t.range.endDate),r.a.createElement("div",null,"Total days: ",t.totalDays),r.a.createElement("div",null,"Total events: ",t.totalEvents),r.a.createElement("div",null,"Total logs: ",t.totalLogs),r.a.createElement("div",null,"Total hours worked: ",t.totalHoursWorked),r.a.createElement("div",null,"Total hours booked: ",t.totalHoursBooked),r.a.createElement("div",null,"Total hours pending: ",t.totalHoursPendingBooking),r.a.createElement("div",null,"Total hours overtime: ",t.totalHoursOvertime))},_=function(){var e=Object(s.f)((function(e){return e})),t=e.dayStart,a=e.dayEnd,c=e.dayStatsTotal,o=Object(s.e)((function(e){return e})).getDayStatsTotal,l=new URLSearchParams("start=".concat(t,"&end=").concat(a,"&total=",!0));return Object(n.useEffect)((function(){Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(l);case 2:case"end":return e.stop()}}),e)})))()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{callFunction:o,query:l,mainNav:"#/stats",secondNav:"#/stats/total"},"Stats","Total"),c.map((function(e){return r.a.createElement($,{key:e.date,stat:e})})))},ee=function(e){var t=e.stat;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Start: ",t.range.startDate),r.a.createElement("div",null,"End: ",t.range.endDate),r.a.createElement("div",null,"Task: ",t.task),r.a.createElement("div",null,"Kanboard: ",t.kanboard),r.a.createElement("div",null,"Total events: ",t.totalEvents),r.a.createElement("div",null,"Total hours worked: ",t.totalHoursWorked),r.a.createElement("div",null,"Total hours booked: ",t.totalHoursBooked),r.a.createElement("div",null,"Total hours pending: ",t.totalHoursPendingBooking))},te=function(e){var t=Object(s.f)((function(e){return e})),a=t.dayStart,c=t.dayEnd,o=t.taskStats,l=Object(s.e)((function(e){return e})),i=l.setTaskStats,d=l.getTaskStats,f=new URLSearchParams("start=".concat(a,"&end=").concat(c,"&id=").concat(e.match.params.projectId));return Object(n.useEffect)((function(){return Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(f);case 2:case"end":return e.stop()}}),e)})))(),function(){return i([])}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{callFunction:d,query:f},"Project stats: ",o[0]&&o[0].task),o.map((function(e){return r.a.createElement(ee,{key:e.task,stat:e})})))};function ae(){var e=Object(q.a)(["\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545;\n"]);return ae=function(){return e},e}function ne(){var e=Object(q.a)(["\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n"]);return ne=function(){return e},e}function re(){var e=Object(q.a)(["\n  top: 0px;\n  bottom: 0px;\n  height: 100vh;\n"]);return re=function(){return e},e}var ce=G.a.div(re()),oe=G.a.div(ne()),le=G.a.div(ae()),se=function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(!0),i=Object(d.a)(l,2),f=i[0],p=i[1],h=Object(n.useState)(""),E=Object(d.a)(h,2),v=E[0],b=E[1],k=Object(n.useState)(!0),y=Object(d.a)(k,2),w=y[0],j=y[1],O=Object(n.useState)(!1),S=Object(d.a)(O,2),N=S[0],L=S[1],I=Object(s.f)((function(e){return e})),T=I.isBackendAlive,C=I.isLoggedIn,B=Object(s.e)((function(e){return e})).logIn,D=function(){e.location.state?e.history.push(e.location.state.from.pathname):e.history.push("/")},P=function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),L(!1),!f||!w){e.next=7;break}return e.next=5,B({email:c,password:v});case 5:e.sent?(L(!1),D()):(p(!0),j(!0),L(!0));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){C&&D()}),[]),C?null:r.a.createElement(H.a,{md:{span:3,offset:6}},r.a.createElement(ce,null,r.a.createElement(oe,null,r.a.createElement(g.a,{onSubmit:P},r.a.createElement(g.a.Group,{controlId:"formBasicEmail"},r.a.createElement(g.a.Label,null,"Email address"),r.a.createElement(g.a.Control,{required:!0,size:"sm",type:"email",placeholder:"Email",value:c,onChange:function(e){return o(e.target.value)},onBlur:function(e){return c.length<6?p(!1):p(!0)}}),!f&&r.a.createElement(le,null,"Email needs to have at least 6 characters.")),r.a.createElement(g.a.Group,{controlId:"formBasicPassword"},r.a.createElement(g.a.Label,null,"Password"),r.a.createElement(g.a.Control,{required:!0,size:"sm",type:"password",placeholder:"Password",value:v,onChange:function(e){return b(e.target.value)},onBlur:function(e){return v.length<6?j(!1):j(!0)}}),!w&&r.a.createElement(le,null,"Password needs to have at least 6 characters."),N&&r.a.createElement(le,null,"Invalid credentials. Please try again.")),r.a.createElement(x.a,{disabled:!T||!w||!f,variant:"primary",type:"submit",size:"sm"},"Submit"),!T&&r.a.createElement(le,null,"Service is currently down. Please try again later.")))))},ie=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null,"borked"),r.a.createElement(l.b,{to:"/"},"Ho Gome"))},ue=function(){return r.a.createElement(h.d,null,r.a.createElement(v,{exact:!0,path:"/",component:S}),r.a.createElement(v,{exact:!0,path:"/profile",component:N}),r.a.createElement(v,{exact:!0,path:"/projects",component:L}),r.a.createElement(v,{exact:!0,path:"/tasks",component:I}),r.a.createElement(v,{exact:!0,path:"/clock",component:T}),r.a.createElement(v,{exact:!0,path:"/calendar",component:C}),r.a.createElement(v,{exact:!0,path:"/stats",component:Z}),r.a.createElement(v,{exact:!0,path:"/stats/total",component:_}),r.a.createElement(v,{exact:!0,path:"/stats/:projectId",component:te}),r.a.createElement(h.b,{exact:!0,path:"/login",component:se}),r.a.createElement(h.b,{path:"*",component:ie}))},me=a(34),de=(a(83),function(){var e=Object(s.f)((function(e){return e})).isLoggedIn,t=Object(s.e)((function(e){return e})).logOut;return e&&r.a.createElement(me.a,{bg:"dark",variant:"dark",className:"sticky-top flex-md-nowrap p-0 shadow"},r.a.createElement(me.a.Brand,{className:"col-md-3 col-lg-2 mr-0 px-3"},"PM"),r.a.createElement(b.a,null,r.a.createElement(b.a.Item,null,r.a.createElement(l.b,{className:"nav-link",to:"/"},"Home")),r.a.createElement(b.a.Item,null,r.a.createElement(b.a.Link,{onClick:function(){return t()}},"Logout"))))}),fe=(a(84),function(){var e=function(e){var t=document.querySelector(".active");t&&t.classList.remove("active"),e.target.classList.add("active")};return Object(s.f)((function(e){return e})).isLoggedIn&&r.a.createElement(me.a,{id:"sidebarMenu",expand:!1,className:"col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"},r.a.createElement("div",{className:"sidebar-sticky pt-3"},r.a.createElement(b.a,{as:"ul",navbar:!1,className:"flex-column"},r.a.createElement(b.a.Item,{as:"li"},r.a.createElement(l.b,{onClick:e,className:"nav-link",to:"/"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-home"},r.a.createElement("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),r.a.createElement("polyline",{points:"9 22 9 12 15 12 15 22"})),"Home")),r.a.createElement(b.a.Item,{as:"li"},r.a.createElement(l.b,{onClick:e,className:"nav-link",to:"/profile"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-users"},r.a.createElement("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),r.a.createElement("circle",{cx:"9",cy:"7",r:"4"}),r.a.createElement("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),r.a.createElement("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})),"Profile")),r.a.createElement(b.a.Item,{as:"li"},r.a.createElement(l.b,{onClick:e,className:"nav-link",to:"/projects"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-layers"},r.a.createElement("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),r.a.createElement("polyline",{points:"2 17 12 22 22 17"}),r.a.createElement("polyline",{points:"2 12 12 17 22 12"})),"Projects")),r.a.createElement(b.a.Item,{as:"li"},r.a.createElement(l.b,{onClick:e,className:"nav-link",to:"/tasks"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-file"},r.a.createElement("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),r.a.createElement("polyline",{points:"13 2 13 9 20 9"})),"Tasks")),r.a.createElement(b.a.Item,{as:"li"},r.a.createElement(l.b,{onClick:e,className:"nav-link",to:"/clock"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-home"},r.a.createElement("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),r.a.createElement("polyline",{points:"9 22 9 12 15 12 15 22"})),"Clock")),r.a.createElement(b.a.Item,{as:"li"},r.a.createElement(l.b,{onClick:e,className:"nav-link",to:"/calendar"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-home"},r.a.createElement("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),r.a.createElement("polyline",{points:"9 22 9 12 15 12 15 22"})),"Calendar")),r.a.createElement(b.a.Item,{as:"li"},r.a.createElement(l.b,{onClick:e,className:"nav-link",to:"/stats"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-bar-chart-2"},r.a.createElement("line",{x1:"18",y1:"20",x2:"18",y2:"10"}),r.a.createElement("line",{x1:"12",y1:"20",x2:"12",y2:"4"}),r.a.createElement("line",{x1:"6",y1:"20",x2:"6",y2:"14"})),"Stats")))))}),pe=function(e){return console.log("I'm being rendered! Layout"),r.a.createElement(r.a.Fragment,null,r.a.createElement(de,null),r.a.createElement(f.a,{fluid:!0},r.a.createElement(p.a,null,r.a.createElement(fe,null),r.a.createElement("main",{role:"main",className:"col-md-9 ml-sm-auto col-lg-10 px-md-4"},r.a.createElement(ue,null)))))},he=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],c=t[1],o=Object(s.e)((function(e){return e})).checkAuth;return Object(n.useEffect)((function(){Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:c(!0);case 3:case"end":return e.stop()}}),e)})))()}),[]),a?r.a.createElement(pe,null):null},Ee=a(65),ve=a(55)["pmspa-api"],be=ve.api,ge=ve.apiVersion,ke=function(e){return function(){var t=Object(m.a)(u.a.mark((function t(a,n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e(n);case 3:if((r=t.sent).status>=500&&a.setIsBackendAlive(!1),r.error){t.next=10;break}return a.setIsLoggedIn(!0),t.abrupt("return",!0);case 10:return a.setIsLoggedIn(!1),t.abrupt("return",!1);case 12:t.next=20;break;case 14:return t.prev=14,t.t0=t.catch(0),console.warn(t.t0),a.setIsLoggedIn(!1),a.setIsBackendAlive(!1),t.abrupt("return",!1);case 20:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e,a){return t.apply(this,arguments)}}()},ye=ke((function(e){return new Promise((function(t,a){fetch("".concat(be,"/").concat(ge,"/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return t(e)})).catch((function(e){return a(e)}))}))})),we=ke((function(){var e;return new Promise((function(t,a){fetch("".concat(be,"/").concat(ge,"/auth"),{method:"POST",credentials:"include"}).then((function(t){return e=t.status,t.json()})).then((function(a){return t(Object(Ee.a)({status:e},a))})).catch((function(e){return a(e)}))}))})),xe=function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e,t){fetch("".concat(be,"/").concat(ge,"/auth/logout"),{method:"GET",credentials:"include"}).then((function(e){return e.json()})).then((function(t){return e(t)})).catch((function(e){return t(e)}))}));case 3:if(e.sent.error){e.next=9;break}return t.setIsLoggedIn(!1),e.abrupt("return",!0);case 9:return e.abrupt("return",!1);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(0),console.warn(e.t0),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),je=a(41),Oe=function(e,t){return function(){var a=Object(m.a)(u.a.mark((function a(n,r){var c;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,e(r);case 3:(c=a.sent).error||n[t](c.stats),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.warn(a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e,t){return a.apply(this,arguments)}}()},Se=Oe(je.getDayStatsCall,"setDayStats"),Ne=Oe(je.getDayStatsCall,"setDayStatsTotal"),Le=Oe(je.getTaskStatsCall,"setTaskStats"),Ie=Object(s.c)({isBackendAlive:!0,isLoggedIn:!1,dayStart:D()().startOf("month").format("YYYY-MM-DD"),dayEnd:D()().format("YYYY-MM-DD"),statsFetched:!1,dayStats:[],dayStatsTotal:[],taskStats:[],logIn:Object(s.d)((function(e,t){return ye(e,t)})),logOut:Object(s.d)((function(e){return xe(e)})),checkAuth:Object(s.d)((function(e,t){return we(e,t)})),getDayStats:Object(s.d)((function(e,t){return Se(e,t)})),getDayStatsTotal:Object(s.d)((function(e,t){return Ne(e,t)})),getTaskStats:Object(s.d)((function(e,t){return Le(e,t)})),setIsBackendAlive:Object(s.b)((function(e,t){return function(e,t){e.isBackendAlive=t}(e,t)})),setIsLoggedIn:Object(s.b)((function(e,t){return function(e,t){e.isLoggedIn=t}(e,t)})),setDayStart:Object(s.b)((function(e,t){return function(e,t){e.dayStart=t}(e,t)})),setDayEnd:Object(s.b)((function(e,t){return function(e,t){e.dayEnd=t}(e,t)})),setDayStats:Object(s.b)((function(e,t){return function(e,t){e.statsFetched=!0,e.dayStats=t}(e,t)})),setDayStatsTotal:Object(s.b)((function(e,t){return function(e,t){e.statsFetched=!0,e.dayStatsTotal=t}(e,t)})),setTaskStats:Object(s.b)((function(e,t){return function(e,t){e.statsFetched=!0,e.taskStats=t}(e,t)}))});o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null,r.a.createElement(s.a,{store:Ie},r.a.createElement(he,null)))),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.d1e457b8.chunk.js.map