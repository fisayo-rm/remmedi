(this["webpackJsonprem-medi"]=this["webpackJsonprem-medi"]||[]).push([[0],{32:function(e,a,t){e.exports=t(66)},37:function(e,a,t){},39:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},40:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),c=t.n(l),s=(t(37),t(7)),o=t.n(s),m=t(13),i=t(6),u=(t(39),t(40),t(2)),p=function(e){var a=e.logout;return r.a.createElement("header",{className:"inner"},r.a.createElement("h2",null,r.a.createElement(u.b,{to:"/"},r.a.createElement("i",{className:"fas fa-prescription-bottle-alt"})," RemMedi")),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(u.b,{to:"/"},"Prescriptions")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/add"},"Add Prescription")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/",onClick:a},"Log Out")))))},d=function(e){var a=e.start,t=e.end,n=e.numOfTimesPerDay,l=e.numOfTablets,c=e.completedDosage,s=e.completeDosage,o=e.id,m=new Date(a),i=m.toDateString(),p=function(e,a){for(var t=[],n=new Date(e);n<=a;)t.push(new Date(n).toUTCString()),n.setDate(n.getDate()+1);return t}(m,new Date(t)).length,d=1===n?"once a day":"".concat(n," times daily"),E=1===p?"one day":"".concat(p," days"),f=1===l?"one tablet":"".concat(l," tablets");return r.a.createElement("div",{className:"gig"},r.a.createElement("h3",null,e.name),r.a.createElement("p",null,"Take ",f," ",d," for ",E," starting from ",i,"."),r.a.createElement("ul",null,r.a.createElement("li",null,"Completed: ",r.a.createElement("input",{type:"checkbox",name:"completedDosage",checked:c,onChange:function(){return s(o)}})),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/details",className:"btn btn-reverse",style:{marginLeft:"40px"}},"Details"))))},E=function(e){console.log(e);var a=e.completeDosage,t=e.data.map((function(e){return r.a.createElement(d,{key:e._id,name:e.name,start:e.startDate,end:e.endDate,numOfTimesPerDay:e.numOfTimesPerDay,numOfTablets:e.numOfTablets,id:e._id,completedDosage:e.completedDosage,completeDosage:a})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{id:"gigs",className:"container"},r.a.createElement("h1",null,"Prescriptions"),t))},f=t(9),b=t(12),g=(t(46),t(48),function(e){var a=e.addPrescription,t=Object(n.useState)({name:"",numOFTablets:"",numOfTimesPerDay:"",startDate:"",endDate:""}),l=Object(i.a)(t,2),c=l[0],s=l[1],o=function(e){var a=e.target,t=a.name,n=a.value;s((function(e){return Object(b.a)({},e,Object(f.a)({},t,n))}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{id:"add",className:"container"},r.a.createElement("div",{className:"form-wrap"},r.a.createElement("h1",null,"Add A Prescription"),r.a.createElement("p",null,"Lorem Ipsum"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={name:c.name,numOfTablets:Number(c.numOFTablets),numOfTimesPerDay:Number(c.numOfTimesPerDay),startDate:c.startDate,endDate:c.endDate,completedDosage:!1};a(t)}},r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{htmlFor:"name"},"Name of Drug"),r.a.createElement("input",{type:"text",name:"name",id:"name",className:"input-box",placeholder:"Enter the name of the drug, eg. Panadol",value:c.name,onChange:o})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{htmlFor:"numOFTablets"},"Number of Tablets"),r.a.createElement("input",{type:"number",name:"numOFTablets",id:"numOFTablets",className:"input-box",placeholder:"Enter the number of tablets per dosage",value:c.numOFTablets,onChange:o})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{htmlFor:"numOfTimesPerDay"},"Daily Dosage"),r.a.createElement("select",{name:"numOfTimesPerDay",onChange:o,id:"numOfTimesPerDay",className:"input-box",placeholder:"Select an option",value:c.numOfTimesPerDay},r.a.createElement("option",{value:"",disabled:!0,hidden:!0},"Select your option"),r.a.createElement("option",{value:1},"Once a day"),r.a.createElement("option",{value:2},"Twice daily"),r.a.createElement("option",{value:3},"Thrice daily"))),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{htmlFor:"startDate"},"Start Date"),r.a.createElement("input",{required:!0,type:"date",name:"startDate",id:"startDate",className:"input-box",onChange:o,value:c.startDate})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{htmlFor:"endDate"},"End Date"),r.a.createElement("input",{required:!0,type:"date",name:"endDate",id:"endDate",className:"input-box",onChange:o,value:c.endDate})),r.a.createElement("input",{type:"submit",value:"Add Prescription",className:"btn btn-reverse"})))))}),v=function(e){var a=e.signup,t=Object(n.useState)({firstName:"",lastName:"",dateOfBirth:"",email:"",password:""}),l=Object(i.a)(t,2),c=l[0],s=l[1],o=function(e){var a=e.target,t=a.name,n=a.value;s((function(e){return Object(b.a)({},e,Object(f.a)({},t,n))}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{id:"add",className:"container"},r.a.createElement("div",{className:"form-wrap"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=c.firstName,n=c.lastName,r=c.dateOfBirth,l=c.email,s=c.password;a({firstName:t,lastName:n,dateOfBirth:r,email:l,password:s})}},r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",name:"firstName",id:"firstName",className:"input-box",placeholder:"Enter your first name",value:c.firstName,onChange:o})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",name:"lastName",id:"lastName",className:"input-box",placeholder:"Enter your last name",value:c.lastName,onChange:o})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{htmlFor:"startDate"},"Date of Birth"),r.a.createElement("input",{required:!0,type:"date",name:"dateOfBirth",id:"startDate",className:"input-box",value:c.dateOfBirth,onChange:o})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{htmlFor:"email"},"E-mail"),r.a.createElement("input",{type:"email",name:"email",id:"email",className:"input-box",placeholder:"Enter your email address",value:c.email,onChange:o})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{htmlFor:"numOFTablets"},"Password"),r.a.createElement("input",{type:"password",name:"password",id:"numOFTablets",className:"input-box",placeholder:"Enter password",value:c.password,onChange:o})),r.a.createElement("input",{type:"submit",value:"Sign Up",className:"btn btn-reverse"})))))},h=function(e){var a=e.login,t=Object(n.useState)({email:"",password:""}),l=Object(i.a)(t,2),c=l[0],s=l[1],o=function(e){var a=e.target,t=a.name,n=a.value;s((function(e){return Object(b.a)({},e,Object(f.a)({},t,n))}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{id:"add",className:"container"},r.a.createElement("div",{className:"form-wrap"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={email:c.email,password:c.password};a(t)}},r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{htmlFor:"signinName"},"Username"),r.a.createElement("input",{type:"text",name:"email",id:"signinName",className:"input-box",placeholder:"Enter your email as your username",value:c.name,onChange:o})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{htmlFor:"signinPassword"},"Password"),r.a.createElement("input",{type:"password",name:"password",id:"signinPassword",className:"input-box",placeholder:"Enter password",value:c.password,onChange:o})),r.a.createElement("input",{type:"submit",value:"Login",className:"btn btn-reverse"})))))},N=t(10),D=function(e){var a=e.login,t=e.signup;return(r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{id:"add",className:"container"},r.a.createElement("div",{className:"form-wrap"},r.a.createElement("h2",null,r.a.createElement(u.b,{to:"/"},r.a.createElement("i",{className:"fas fa-prescription-bottle-alt"})," RemMedi")),r.a.createElement("header",{className:"inner"},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(u.b,{to:"/"},"Login")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/register"},"Register"))))),r.a.createElement(N.d,null,r.a.createElement(N.b,{exact:!0,path:"/",component:function(e){return r.a.createElement(h,{login:a})}}),r.a.createElement(N.b,{exact:!0,path:"/register",component:function(e){return r.a.createElement(v,{signup:t})}}))))))},O=t(14),y=t.n(O);var w=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!0),s=Object(i.a)(c,2),u=(s[0],s[1]),d=Object(n.useState)(null),f=Object(i.a)(d,2),b=(f[0],f[1]),v=Object(n.useState)(!1),h=Object(i.a)(v,2),O=h[0],w=h[1],x=function(){var e=Object(m.a)(o.a.mark((function e(a){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("LOG IN"),t={headers:{"Content-Type":"application/json"}},e.prev=2,e.next=5,y.a.post("/api/v1/users/login",a,t);case 5:"token"===e.sent.data.token&&w(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(a){return e.apply(this,arguments)}}(),T=function(){var e=Object(m.a)(o.a.mark((function e(a){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("SIGN IN"),t={headers:{"Content-Type":"application/json"}},e.prev=2,e.next=5,y.a.post("/api/v1/users/signup",a,t);case 5:e.sent,x({email:a.email,password:a.password}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(a){return e.apply(this,arguments)}}(),j=function(){var e=Object(m.a)(o.a.mark((function e(a){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return{name:"Test",numOfTablets:2,numOfTimesPerDay:2,startDate:"2020-03-07",endDate:"2020-03-20"},t={headers:{"Content-Type":"application/json"}},console.log(a),e.prev=3,e.next=6,y.a.post("/api/v1/prescriptions",a,t);case 6:e.sent,console.log("Hello"),F(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("err");case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(a){return e.apply(this,arguments)}}();function F(){return P.apply(this,arguments)}function P(){return(P=Object(m.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get("/api/v1/prescriptions");case 3:a=e.sent,l(a.data.data),u(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),b(e.t0.response.data.error);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function k(e){return C.apply(this,arguments)}function C(){return(C=Object(m.a)(o.a.mark((function e(a){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={id:a,completedDosage:!t.find((function(e){return e._id===a})).completedDosage},r={headers:{"Content-Type":"application/json"}},e.prev=2,e.next=5,y.a.post("/api/v1/prescriptions/update",n,r);case 5:e.sent,console.log("complete dosage"),F(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0,"NOT complete dosage");case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){F()}),[]),O?r.a.createElement("div",null,r.a.createElement(p,{logout:function(){return w(!1),r.a.createElement(N.a,{to:"/"})}}),r.a.createElement(N.d,null,r.a.createElement(N.b,{exact:!0,path:"/",component:function(e){return r.a.createElement(E,{data:t,completeDosage:k})}}),r.a.createElement(N.b,{path:"/add",component:function(e){return r.a.createElement(g,{addPrescription:j})}}))):r.a.createElement("div",null,r.a.createElement(D,{login:x,signup:T}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(u.a,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.86aea89a.chunk.js.map