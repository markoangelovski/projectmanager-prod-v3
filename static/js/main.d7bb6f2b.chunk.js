(this["webpackJsonpprojectmanager-spa3"]=this["webpackJsonpprojectmanager-spa3"]||[]).push([[0],{39:function(e){e.exports=JSON.parse('{"pmspa-api":{"api":"https://pmspa-api.herokuapp.com","apiVersion":"v1","apiVersionBeta":"v1.1"},"CNAME":"jbot.angelovski.ga"}')},71:function(e,t,n){e.exports=n(89)},77:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(31),o=n.n(c),l=n(14),s=n(5),i=(n(76),n(77),n(6)),u=n.n(i),m=n(7),d=n(20),f=n(69),p=n(30),h=n(8),E=n(70),v=function(e){var t=e.component,n=Object(E.a)(e,["component"]),a=Object(s.f)((function(e){return e})).isLoggedIn;return r.a.createElement(h.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(h.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},k=n(11),b=n(21),g=n(37),y=n(53),w=n(61),j=n(41),x=function(e){var t=Object(s.f)((function(e){return e})),n=t.dayStart,a=t.dayEnd,c=Object(s.e)((function(e){return e})),o=c.setDayStart,l=c.setDayEnd;return r.a.createElement(w.a,{className:""},r.a.createElement(b.a,{inline:!0,className:"d-inline-block",onSubmit:function(){var t=Object(m.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,e.callFunction(e.query);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},r.a.createElement(y.a,{size:"sm",className:""},r.a.createElement(g.a,{size:"sm",type:"date",className:"",value:n,onChange:function(e){return o(e.target.value)}}),r.a.createElement(g.a,{size:"sm",type:"date",className:"",value:a,onChange:function(e){return l(e.target.value)}}),r.a.createElement(y.a.Append,null,r.a.createElement(j.a,{size:"sm",type:"submit",variant:"outline-secondary",className:"dropdown-toggle"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-calendar mr-1"},r.a.createElement("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),r.a.createElement("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),r.a.createElement("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),r.a.createElement("line",{x1:"3",y1:"10",x2:"21",y2:"10"})),"Submit")))))},O=function(e){var t=e.callFunction,n=e.query,a=e.mainNav,c=e.secondNav;return r.a.createElement("div",{className:"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 "},r.a.createElement(k.a,{variant:"tabs",defaultActiveKey:window.location.hash.includes(c)?"link-1":"home",className:"w-50"},r.a.createElement(k.a.Item,null,r.a.createElement(k.a.Link,{href:a,className:"nav-link",eventKey:"home"},e.children[0])),c&&r.a.createElement(k.a.Item,null,r.a.createElement(k.a.Link,{href:c,className:"nav-link",eventKey:"link-1"},e.children[1]))),n&&r.a.createElement(x,{callFunction:t,query:n}))},S=function(){return r.a.createElement(O,null,"homepage")},N=function(){return r.a.createElement(O,null,"Profile")},T=function(){return r.a.createElement(O,null,"Projects")},I=n(62),D=n(66),L=n(13),C=n(26),B=n(18),M=n(19);function H(){var e=Object(B.a)(["\n  cursor: pointer;\n  float: right;\n\n  svg {\n    opacity: 0.5;\n    color: ",";\n  }\n"]);return H=function(){return e},e}var P=M.a.div(H(),(function(e){return e.done?"green":"red"})),F=function(e){var t=e.done,n=e.taskId,a=e.taskTitle,c=Object(s.e)((function(e){return e})).editTask;return r.a.createElement(P,{done:t,onClick:function(){window.confirm('Mark task "'.concat(a,'" as ').concat(t?"not":""," done?"))&&c({taskId:n,payload:[{propName:"done",propValue:JSON.stringify(!t)}]})}},t?r.a.createElement(C.b,null):r.a.createElement(C.c,null))},A=function(e){var t=e.tasks;return r.a.createElement(D.a,null,t.map((function(e){return r.a.createElement(L.a,{key:e._id},r.a.createElement(L.a.Header,null,e.column,r.a.createElement(F,{done:e.done,taskId:e._id,taskTitle:e.title})),r.a.createElement(L.a.Body,null,r.a.createElement(L.a.Title,null,e.title),r.a.createElement(L.a.Subtitle,{className:"mb-2 text-muted"},e.pl),r.a.createElement(L.a.Text,null,e.description),r.a.createElement(L.a.Text,null,"Events: ",e.eventsCount||0," Notes: ",e.notesCount||0),e.kanboard&&r.a.createElement(L.a.Link,{href:e.kanboard,target:"_blank"},"Kanboard")),r.a.createElement(L.a.Footer,null,r.a.createElement("small",{className:"text-muted"},e.createdAt)))})))},z=function(){var e=Object(s.f)((function(e){return e})),t=e.taskDocs,n=e.taskDocsSkip,c=e.hasMoreTaskDocs,o=Object(s.e)((function(e){return e})).getTaskDocs,l=new URLSearchParams("skip=".concat(n)),i=window.location.hash.split("=")[1];"true"!==i&&"false"!==i||l.append("done",i),Object(a.useEffect)((function(){Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=!t.length,!e.t0){e.next=4;break}return e.next=4,o(l);case 4:case"end":return e.stop()}}),e)})))()}),[]);var d=function(){var e=Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(l);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{callFunction:!0,query:!0,mainNav:"#/tasks",secondNav:"#/tasks/booking"},"All tasks","Booking"),r.a.createElement(I.a,{dataLength:t.length,next:d,hasMore:c,loader:r.a.createElement("h4",null,"Loading...")},t.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement("h5",null,e.project),r.a.createElement(A,{tasks:e.tasks}))}))))},Y=function(){return r.a.createElement(O,null,"Clock")},W=function(){return r.a.createElement(O,null,"Calendar")},V=n(24),q=n(67),G=n.n(q),J=function(e){var t=e.seriesData,n=e.type,c=0,o="";"worked"===n&&(c=Math.round(t/10*100),o="#008FFB"),"booked"!==n&&"pending"!==n||(c=Math.round(t/7.5*100),o="#00f970"),"pending"===n&&(o="#fcc202"),"overtime"===n&&(c=Math.round(t/2*100),o="#f90010");var l=Object(a.useState)([c]),s=Object(a.useState)({chart:{type:"radialBar"},colors:[o],plotOptions:{radialBar:{inverseOrder:!1,startAngle:0,endAngle:360,offsetX:-30,offsetY:-15,hollow:{margin:1,size:"50%",background:"transparent",image:void 0,imageWidth:150,imageHeight:150,imageOffsetX:0,imageOffsetY:0,imageClipped:!0,position:"front",dropShadow:{enabled:!1,top:0,left:0,blur:3,opacity:.5}},track:{show:!0,startAngle:void 0,endAngle:void 0,background:"#ededed",strokeWidth:"97%",opacity:1,margin:5,dropShadow:{enabled:!1,top:0,left:0,blur:3,opacity:.5}},dataLabels:{show:!0,name:{show:!1,fontSize:"16px",fontFamily:void 0,fontWeight:600,color:void 0,offsetY:-10},value:{show:!0,fontSize:"9px",fontFamily:void 0,fontWeight:400,color:void 0,offsetY:5,formatter:function(e){return e+" %"}}}}}});return r.a.createElement("div",{style:{position:"absolute"}},r.a.createElement("div",{id:"chart"},r.a.createElement(G.a,{options:s[0],series:l[0],type:"radialBar",width:"120px",height:"120px"})))},K=function(e){return r.a.createElement(V.a,{xl:3,md:6},r.a.createElement(L.a,{className:"mb-3"},r.a.createElement(L.a.Body,null,r.a.createElement("div",{className:"float-left",dir:"ltr"},r.a.createElement(J,{seriesData:e.totalHours,type:e.type})),r.a.createElement("div",{className:"text-right"},r.a.createElement("h3",{className:"mb-1"},e.totalHours,r.a.createElement("small",{className:"text-muted"},"h")),r.a.createElement("p",{className:"text-muted mb-1"},e.children)))))},R=n(32),U=n.n(R),_=n(68);function X(){var e=Object(B.a)(["\n  white-space: nowrap;\n  display: flex;\n  justify-content: space-between;\n\n  svg {\n    opacity: 0.5;\n    cursor: pointer;\n    color: #007bff;\n  }\n"]);return X=function(){return e},e}function Q(){var e=Object(B.a)(["\n  > td {\n    border-top: 0;\n  }\n\n  span {\n    cursor: pointer;\n  }\n"]);return Q=function(){return e},e}var Z=M.a.tr(Q()),$=M.a.td(X());function ee(){var e=Object(B.a)(["\n  cursor: pointer;\n\n  svg {\n    color: ",";\n  }\n"]);return ee=function(){return e},e}var te=M.a.div(ee(),(function(e){return e.booked?"green":"red"})),ne=function(e){var t=e.booked,n=e.eventId,a=e.eventTitle,c=Object(s.e)((function(e){return e})).editEvent;return r.a.createElement(te,{booked:t,onClick:function(){window.confirm('Mark event "'.concat(a,'" as ').concat(t?"not":""," booked?"))&&c({eventId:n,payload:[{propName:"booked",propValue:!t}]})}},t?r.a.createElement(C.b,null):r.a.createElement(C.c,null))},ae=function(e){var t=e.event,n=e.day,c=Object(a.useState)(!1),o=Object(d.a)(c,2),s=o[0],i=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,null,r.a.createElement($,null,r.a.createElement("span",{onClick:function(){return i(!s)}},t.title),r.a.createElement(ne,{booked:t.booked,eventId:t.eventId,eventTitle:t.title})),r.a.createElement("td",{style:{textAlign:"center"}},t.duration,r.a.createElement("small",{className:"text-muted"}," h")),r.a.createElement($,null,r.a.createElement(l.b,{to:"/stats/".concat(t.taskId)},t.task),t.kanboard&&r.a.createElement(C.a,{onClick:function(){return window.open("".concat(t.kanboard,"#d=").concat(n,"&t=").concat(t.duration),"","resizable=yes,scrollbars=yes,width=1024,height=768")}}))),s&&t.logs.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",{className:"text-muted"},"- ",e.title),r.a.createElement("td",{style:{textAlign:"center"}},e.duration,r.a.createElement("small",{className:"text-muted"}," h")),r.a.createElement("td",null))})))},re=function(e){var t=e.stat;return r.a.createElement(p.a,null,r.a.createElement(V.a,null,r.a.createElement(L.a,{className:"mb-3"},r.a.createElement(L.a.Body,null,r.a.createElement(L.a.Title,null,U()(t.date).format("dddd, MMMM Do YYYY")),r.a.createElement(_.a,{striped:!0,hover:!0,responsive:!0,size:"sm",className:"mb-0"},r.a.createElement("colgroup",null,r.a.createElement("col",{style:{width:"50%"}}),r.a.createElement("col",{style:{width:"10%"}}),r.a.createElement("col",{style:{width:"40%"}})),r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Event"),r.a.createElement("th",{scope:"col",style:{textAlign:"center"}},"Duration"),r.a.createElement("th",{scope:"col"},"Task"))),r.a.createElement("tbody",null,t.events.sort((function(e,t){return new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime()})).map((function(e,n){return r.a.createElement(ae,{key:n,event:e,day:U()(t.day).format("DD-MM")})}))))))))},ce=function(e){return e.dayStats.map((function(e){return r.a.createElement(a.Fragment,{key:e.date},r.a.createElement(p.a,null,r.a.createElement(K,{totalHours:e.totalHoursWorked,type:"worked"},"Hours worked"),r.a.createElement(K,{totalHours:e.totalHoursBooked,type:"booked"},"Hours booked"),r.a.createElement(K,{totalHours:e.totalHoursPendingBooking,type:"pending"},"Pending booking"),r.a.createElement(K,{totalHours:e.totalHoursOvertime,type:"overtime"},"Overtime")),r.a.createElement(re,{stat:e}))}))},oe=function(){var e=Object(s.f)((function(e){return e})),t=e.dayStart,n=e.dayEnd,c=e.dayStats,o=e.statsFetched,l=Object(s.e)((function(e){return e})).getDayStats,i=new URLSearchParams("start=".concat(t,"&end=").concat(n));return Object(a.useEffect)((function(){Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=!o,!e.t0){e.next=4;break}return e.next=4,l(i);case 4:case"end":return e.stop()}}),e)})))()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{callFunction:l,query:i,mainNav:"#/stats",secondNav:"#/stats/total"},"Stats","Total"),r.a.createElement(ce,{dayStats:c}))},le=function(e){var t=e.stat;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Start: ",t.range.startDate),r.a.createElement("div",null,"End: ",t.range.endDate),r.a.createElement("div",null,"Total days: ",t.totalDays),r.a.createElement("div",null,"Total events: ",t.totalEvents),r.a.createElement("div",null,"Total logs: ",t.totalLogs),r.a.createElement("div",null,"Total hours worked: ",t.totalHoursWorked),r.a.createElement("div",null,"Total hours booked: ",t.totalHoursBooked),r.a.createElement("div",null,"Total hours pending: ",t.totalHoursPendingBooking),r.a.createElement("div",null,"Total hours overtime: ",t.totalHoursOvertime))},se=function(){var e=Object(s.f)((function(e){return e})),t=e.dayStart,n=e.dayEnd,c=e.dayStatsTotal,o=Object(s.e)((function(e){return e})).getDayStatsTotal,l=new URLSearchParams("start=".concat(t,"&end=").concat(n,"&total=",!0));return Object(a.useEffect)((function(){Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(l);case 2:case"end":return e.stop()}}),e)})))()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{callFunction:o,query:l,mainNav:"#/stats",secondNav:"#/stats/total"},"Stats","Total"),c.map((function(e){return r.a.createElement(le,{key:e.date,stat:e})})))},ie=function(e){var t=e.stat;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,"Start: ",t.range.startDate),r.a.createElement("div",null,"End: ",t.range.endDate),r.a.createElement("div",null,"Task: ",t.task),r.a.createElement("div",null,"Kanboard: ",t.kanboard),r.a.createElement("div",null,"Total events: ",t.totalEvents),r.a.createElement("div",null,"Total hours worked: ",t.totalHoursWorked),r.a.createElement("div",null,"Total hours booked: ",t.totalHoursBooked),r.a.createElement("div",null,"Total hours pending: ",t.totalHoursPendingBooking))},ue=function(e){var t=Object(s.f)((function(e){return e})),n=t.dayStart,c=t.dayEnd,o=t.taskStats,l=Object(s.e)((function(e){return e})),i=l.setTaskStats,d=l.getTaskStats,f=new URLSearchParams("start=".concat(n,"&end=").concat(c,"&id=").concat(e.match.params.projectId));return Object(a.useEffect)((function(){return Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(f);case 2:case"end":return e.stop()}}),e)})))(),function(){return i([])}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{callFunction:d,query:f},"Project stats: ",o[0]&&o[0].task),o.map((function(e){return r.a.createElement(ie,{key:e.task,stat:e})})))};function me(){var e=Object(B.a)(["\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545;\n"]);return me=function(){return e},e}function de(){var e=Object(B.a)(["\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n"]);return de=function(){return e},e}function fe(){var e=Object(B.a)(["\n  top: 0px;\n  bottom: 0px;\n  height: 100vh;\n  min-width: 250px;\n"]);return fe=function(){return e},e}var pe=M.a.div(fe()),he=M.a.div(de()),Ee=M.a.div(me()),ve=function(e){var t=Object(a.useState)(""),n=Object(d.a)(t,2),c=n[0],o=n[1],l=Object(a.useState)(!0),i=Object(d.a)(l,2),f=i[0],p=i[1],h=Object(a.useState)(""),E=Object(d.a)(h,2),v=E[0],k=E[1],g=Object(a.useState)(!0),y=Object(d.a)(g,2),w=y[0],x=y[1],O=Object(a.useState)(!1),S=Object(d.a)(O,2),N=S[0],T=S[1],I=Object(s.f)((function(e){return e})),D=I.isBackendAlive,L=I.isLoggedIn,C=Object(s.e)((function(e){return e})).logIn,B=function(){e.location.state?e.history.push(e.location.state.from.pathname):e.history.push("/")},M=function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),T(!1),!f||!w){e.next=7;break}return e.next=5,C({email:c,password:v});case 5:e.sent?(T(!1),B()):(p(!0),x(!0),T(!0));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){L&&B()}),[]),L?null:r.a.createElement(V.a,{md:{span:3,offset:6}},r.a.createElement(pe,null,r.a.createElement(he,null,r.a.createElement(b.a,{onSubmit:M},r.a.createElement(b.a.Group,{controlId:"formBasicEmail"},r.a.createElement(b.a.Label,null,"Email address"),r.a.createElement(b.a.Control,{required:!0,size:"sm",type:"email",placeholder:"Email",value:c,onChange:function(e){return o(e.target.value)},onBlur:function(e){return c.length<6?p(!1):p(!0)}}),!f&&r.a.createElement(Ee,null,"Email needs to have at least 6 characters.")),r.a.createElement(b.a.Group,{controlId:"formBasicPassword"},r.a.createElement(b.a.Label,null,"Password"),r.a.createElement(b.a.Control,{required:!0,size:"sm",type:"password",placeholder:"Password",value:v,onChange:function(e){return k(e.target.value)},onBlur:function(e){return v.length<6?x(!1):x(!0)}}),!w&&r.a.createElement(Ee,null,"Password needs to have at least 6 characters."),N&&r.a.createElement(Ee,null,"Invalid credentials. Please try again.")),r.a.createElement(j.a,{disabled:!D||!w||!f,variant:"primary",type:"submit",size:"sm"},"Submit"),!D&&r.a.createElement(Ee,null,"Service is currently down. Please try again later.")))))},ke=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null,"borked"),r.a.createElement(l.b,{to:"/"},"Ho Gome"))},be=function(){return r.a.createElement(h.d,null,r.a.createElement(v,{exact:!0,path:"/",component:S}),r.a.createElement(v,{exact:!0,path:"/profile",component:N}),r.a.createElement(v,{exact:!0,path:"/projects",component:T}),r.a.createElement(v,{exact:!0,path:"/tasks",component:z}),r.a.createElement(v,{exact:!0,path:"/clock",component:Y}),r.a.createElement(v,{exact:!0,path:"/calendar",component:W}),r.a.createElement(v,{exact:!0,path:"/stats",component:oe}),r.a.createElement(v,{exact:!0,path:"/stats/total",component:se}),r.a.createElement(v,{exact:!0,path:"/stats/:projectId",component:ue}),r.a.createElement(h.b,{exact:!0,path:"/login",component:ve}),r.a.createElement(h.b,{path:"*",component:ke}))},ge=n(33),ye=(n(87),function(){var e=Object(s.f)((function(e){return e})).isLoggedIn,t=Object(s.e)((function(e){return e})).logOut;return e&&r.a.createElement(ge.a,{bg:"dark",variant:"dark",collapseOnSelect:!0,expand:"md",className:"sticky-top flex-md-nowrap p-0 shadow"},r.a.createElement(ge.a.Brand,{className:"col-md-3 col-lg-2 mr-0 px-3"},"jBot"),r.a.createElement(ge.a.Toggle,{className:"position-absolute","aria-controls":"sidebarMenu",onClick:function(){document.getElementById("sidebarMenu").classList.toggle("show")}}),r.a.createElement("input",{className:"form-control form-control-dark w-100",type:"text",placeholder:"Search","aria-label":"Search"}),r.a.createElement(k.a,{as:"ul",className:"px-3"},r.a.createElement(k.a.Item,{as:"li"},r.a.createElement(k.a.Link,{onClick:function(){return t()}},"Logout"))))}),we=(n(88),function(){var e=function(e){var t=document.querySelector(".active");t&&t.classList.remove("active"),e.target.classList.add("active"),document.getElementById("sidebarMenu").classList.remove("show")};return Object(s.f)((function(e){return e})).isLoggedIn&&r.a.createElement(ge.a,{id:"sidebarMenu",expand:!1,className:"col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"},r.a.createElement("div",{className:"sidebar-sticky pt-3"},r.a.createElement(k.a,{as:"ul",navbar:!1,className:"flex-column"},r.a.createElement(k.a.Item,{as:"li"},r.a.createElement(l.b,{onClick:e,className:"nav-link",to:"/"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-home"},r.a.createElement("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),r.a.createElement("polyline",{points:"9 22 9 12 15 12 15 22"})),"Home")),r.a.createElement(k.a.Item,{as:"li"},r.a.createElement(l.b,{onClick:e,className:"nav-link",to:"/profile"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-users"},r.a.createElement("path",{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"}),r.a.createElement("circle",{cx:"9",cy:"7",r:"4"}),r.a.createElement("path",{d:"M23 21v-2a4 4 0 0 0-3-3.87"}),r.a.createElement("path",{d:"M16 3.13a4 4 0 0 1 0 7.75"})),"Profile")),r.a.createElement(k.a.Item,{as:"li"},r.a.createElement(l.b,{onClick:e,className:"nav-link",to:"/projects"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-layers"},r.a.createElement("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),r.a.createElement("polyline",{points:"2 17 12 22 22 17"}),r.a.createElement("polyline",{points:"2 12 12 17 22 12"})),"Projects")),r.a.createElement(k.a.Item,{as:"li"},r.a.createElement(l.b,{onClick:e,className:"nav-link",to:"/tasks?done=false"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-file"},r.a.createElement("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),r.a.createElement("polyline",{points:"13 2 13 9 20 9"})),"Tasks")),r.a.createElement(k.a.Item,{as:"li"},r.a.createElement(l.b,{onClick:e,className:"nav-link",to:"/clock"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-home"},r.a.createElement("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),r.a.createElement("polyline",{points:"9 22 9 12 15 12 15 22"})),"Clock")),r.a.createElement(k.a.Item,{as:"li"},r.a.createElement(l.b,{onClick:e,className:"nav-link",to:"/calendar"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-home"},r.a.createElement("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),r.a.createElement("polyline",{points:"9 22 9 12 15 12 15 22"})),"Calendar")),r.a.createElement(k.a.Item,{as:"li"},r.a.createElement(l.b,{onClick:e,className:"nav-link",to:"/stats"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-bar-chart-2"},r.a.createElement("line",{x1:"18",y1:"20",x2:"18",y2:"10"}),r.a.createElement("line",{x1:"12",y1:"20",x2:"12",y2:"4"}),r.a.createElement("line",{x1:"6",y1:"20",x2:"6",y2:"14"})),"Stats")))))}),je=function(e){return console.log("I'm being rendered! Layout"),r.a.createElement(r.a.Fragment,null,r.a.createElement(ye,null),r.a.createElement(f.a,{fluid:!0},r.a.createElement(p.a,null,r.a.createElement(we,null),r.a.createElement("main",{role:"main",className:"col-md-9 ml-sm-auto col-lg-10 px-md-4"},r.a.createElement(be,null)))))},xe=function(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2),n=t[0],c=t[1],o=Object(s.e)((function(e){return e})).checkAuth;return Object(a.useEffect)((function(){Object(m.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:c(!0);case 3:case"end":return e.stop()}}),e)})))()}),[]),n?r.a.createElement(je,null):null},Oe=n(27),Se=n(39)["pmspa-api"],Ne=Se.api,Te=Se.apiVersion,Ie=function(e){return function(){var t=Object(m.a)(u.a.mark((function t(n,a){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e(a);case 3:if((r=t.sent).status>=500&&n.setIsBackendAlive(!1),r.error){t.next=10;break}return n.setIsLoggedIn(!0),t.abrupt("return",!0);case 10:return n.setIsLoggedIn(!1),t.abrupt("return",!1);case 12:t.next=20;break;case 14:return t.prev=14,t.t0=t.catch(0),console.warn(t.t0),n.setIsLoggedIn(!1),n.setIsBackendAlive(!1),t.abrupt("return",!1);case 20:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e,n){return t.apply(this,arguments)}}()},De=Ie((function(e){return new Promise((function(t,n){fetch("".concat(Ne,"/").concat(Te,"/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return t(e)})).catch((function(e){return n(e)}))}))})),Le=Ie((function(){var e;return new Promise((function(t,n){fetch("".concat(Ne,"/").concat(Te,"/auth"),{method:"POST",credentials:"include"}).then((function(t){return e=t.status,t.json()})).then((function(n){return t(Object(Oe.a)({status:e},n))})).catch((function(e){return n(e)}))}))})),Ce=function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise((function(e,t){fetch("".concat(Ne,"/").concat(Te,"/auth/logout"),{method:"GET",credentials:"include"}).then((function(e){return e.json()})).then((function(t){return e(t)})).catch((function(e){return t(e)}))}));case 3:if(e.sent.error){e.next=9;break}return t.setIsLoggedIn(!1),e.abrupt("return",!0);case 9:return e.abrupt("return",!1);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(0),console.warn(e.t0),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),Be=n(54),Me=n(39)["pmspa-api"],He=Me.api,Pe=Me.apiVersion,Fe=function(e){return new Promise((function(t,n){fetch("".concat(He,"/").concat(Pe,"/stats/tasks?").concat(e),{method:"GET",credentials:"include"}).then((function(e){return e.json()})).then((function(e){return t(e)})).catch((function(e){return n(e)}))}))},Ae=function(e,t){return new Promise((function(n,a){fetch("".concat(He,"/").concat(Pe,"/tasks/").concat(e),{method:"PATCH",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){return n(e)})).catch((function(e){return a(e)}))}))},ze=function(){var e=Object(m.a)(u.a.mark((function e(t,n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Fe(n);case 3:(a=e.sent).error||(t.setTaskDocs(a.docs),t.setHasMoreTaskDocs(a.stats)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.warn(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),Ye=function(){var e=Object(m.a)(u.a.mark((function e(t,n){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.taskId,r=n.payload,e.prev=1,e.next=4,Ae(a,r);case 4:e.sent.error||t.updateTaskDocs({taskId:a,payload:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.warn(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),We=n(39)["pmspa-api"],Ve=We.api,qe=We.apiVersion,Ge=function(e,t){return new Promise((function(n,a){fetch("".concat(Ve,"/").concat(qe,"/days/event.update/").concat(e),{method:"PATCH",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){return n(e)})).catch((function(e){return a(e)}))}))},Je=function(){var e=Object(m.a)(u.a.mark((function e(t,n){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.eventId,r=n.payload,e.prev=1,e.next=4,Ge(a,r);case 4:e.sent.error||t.updateEvent({eventId:a,payload:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.warn(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),Ke=n(39)["pmspa-api"],Re=Ke.api,Ue=Ke.apiVersion,_e=function(e){return new Promise((function(t,n){fetch("".concat(Re,"/").concat(Ue,"/stats/day?").concat(e),{method:"GET",credentials:"include"}).then((function(e){return e.json()})).then((function(e){return t(e)})).catch((function(e){return n(e)}))}))},Xe=function(e,t){return function(){var n=Object(m.a)(u.a.mark((function n(a,r){var c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e(r);case 3:(c=n.sent).error||a[t](c.stats),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.warn(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}()},Qe=Xe(_e,"setDayStats"),Ze=Xe(_e,"setDayStatsTotal"),$e=Xe((function(e){return new Promise((function(t,n){fetch("".concat(Re,"/").concat(Ue,"/stats/task?").concat(e),{method:"GET",credentials:"include"}).then((function(e){return e.json()})).then((function(e){return t(e)})).catch((function(e){return n(e)}))}))}),"setTaskStats"),et=function(e){return function(t,n){t.statsFetched=!0,t[e]=n}},tt=et("dayStats"),nt=et("dayStatsTotal"),at=et("taskStats"),rt=Object(s.c)({isBackendAlive:!0,isLoggedIn:!1,taskDocs:[],taskDocsSkip:0,hasMoreTaskDocs:!1,dayStart:U()().startOf("week").format("YYYY-MM-DD"),dayEnd:U()().format("YYYY-MM-DD"),statsFetched:!1,dayStats:[],dayStatsTotal:[],taskStats:[],logIn:Object(s.d)((function(e,t){return De(e,t)})),logOut:Object(s.d)((function(e){return Ce(e)})),checkAuth:Object(s.d)((function(e,t){return Le(e,t)})),getTaskDocs:Object(s.d)((function(e,t){return ze(e,t)})),editTask:Object(s.d)((function(e,t){return Ye(e,t)})),editEvent:Object(s.d)((function(e,t,n){return Je(e,t,n)})),getDayStats:Object(s.d)((function(e,t){return Qe(e,t)})),getDayStatsTotal:Object(s.d)((function(e,t){return Ze(e,t)})),getTaskStats:Object(s.d)((function(e,t){return $e(e,t)})),setIsBackendAlive:Object(s.b)((function(e,t){return function(e,t){e.isBackendAlive=t}(e,t)})),setIsLoggedIn:Object(s.b)((function(e,t){return function(e,t){e.isLoggedIn=t}(e,t)})),setTaskDocs:Object(s.b)((function(e,t){return function(e,t){e.taskDocsSkip+=20,e.taskDocs=[].concat(Object(Be.a)(e.taskDocs),Object(Be.a)(t))}(e,t)})),setHasMoreTaskDocs:Object(s.b)((function(e,t){return function(e,t){e.hasMoreTaskDocs=!!t.remaining}(e,t)})),updateTaskDocs:Object(s.b)((function(e,t){return function(e,t){var n=t.taskId,a=t.payload.reduce((function(e,t){return e[t.propName]=t.propValue,e}),{});e.taskDocs=e.taskDocs.map((function(e){return e.tasks=e.tasks.map((function(e){return e._id===n?Object(Oe.a)(Object(Oe.a)({},e),a):e})),e}))}(e,t)})),setDayStart:Object(s.b)((function(e,t){return function(e,t){e.dayStart=t}(e,t)})),setDayEnd:Object(s.b)((function(e,t){return function(e,t){e.dayEnd=t}(e,t)})),updateEvent:Object(s.b)((function(e,t){return function(e,t){var n=t.eventId,a=t.payload.reduce((function(e,t){return e[t.propName]=t.propValue,e}),{});e.dayStats=e.dayStats.map((function(e){return e.events=e.events.map((function(e){return e.eventId===n?Object(Oe.a)(Object(Oe.a)({},e),a):e})),e}))}(e,t)})),setDayStats:Object(s.b)((function(e,t){return tt(e,t)})),setDayStatsTotal:Object(s.b)((function(e,t){return nt(e,t)})),setTaskStats:Object(s.b)((function(e,t){return at(e,t)}))});o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null,r.a.createElement(s.a,{store:rt},r.a.createElement(xe,null)))),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.d7bb6f2b.chunk.js.map