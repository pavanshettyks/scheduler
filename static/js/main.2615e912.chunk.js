(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{215:function(e,t,a){e.exports=a(411)},220:function(e,t,a){},226:function(e,t,a){},227:function(e,t,a){},410:function(e,t,a){},411:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(86),c=a.n(l),o=(a(220),a(45));function i(){return r.a.createElement("header",{style:s},r.a.createElement("h1",null,"Scheduler is on the way..........."),r.a.createElement(o.b,{to:"/",style:u},"Scheduler")," | ",r.a.createElement(o.b,{to:"/AddUser",style:u},"Add User"),"| ",r.a.createElement(o.b,{to:"/PAScreen",style:u},"PA Schedule"))}var s={background:"#333",color:"#fff",textAlign:"center",padding:"5px"},u={color:"#fff",textDecoration:"none"},d=a(4),m=a(5),p=a(8),f=a(6),h=a(9),E=a(7),y=function(e){return r.a.createElement("div",{className:"Tblock"},r.a.createElement("div",null,e.id),r.a.createElement("div",{className:"subBlock",style:{display:"flex"}},r.a.createElement("div",{className:"indBlock",onClick:function(){console.log(e.id+"00")}},":00 "),r.a.createElement("div",{className:"indBlock",onClick:function(){console.log(e.id+" 15")}},":15 "),r.a.createElement("div",{className:"indBlock",onClick:function(){console.log(e.id+" 30")}},":30 "),r.a.createElement("div",{onClick:function(){console.log(e.id+" 45")}},":45 ")))},b=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).changeAssignment=function(e){var t=a.props.data[e].isAssigned,n=a.props.CountPerDay,r=a.props.newLocation;console.log(r),t&&"No"!==a.props.newLocation?t=!0:t&&"No"===a.props.newLocation?(t=!1,n-=.25):t||"No"===a.props.newLocation||(t=!0,n+=.25);var l={time:a.props.time,interval:e,day:a.props.day,user:a.props.studentName,location:a.props.newLocation,assigned:t,CountPerDay:n};a.props.changeAssignment(l)},a.getColor=function(e){switch(a.props.data[e].location){case"No":return"white";case"Office":return"blue";case"Associated":return"purple";case"Arts":return"orange";case"Eastside":return"yellow";case"Busy":return"red";default:return"white"}},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"block"},r.a.createElement("div",{className:"subBlock",style:{display:"flex"}},r.a.createElement("div",{className:"indBlock",style:{backgroundColor:this.getColor("0")},onClick:function(){e.changeAssignment("0")}},":00 "),r.a.createElement("div",{className:"indBlock",style:{backgroundColor:this.getColor("15")},onClick:function(){e.changeAssignment("15")}},":15 "),r.a.createElement("div",{className:"indBlock",style:{backgroundColor:this.getColor("30")},onClick:function(){e.changeAssignment("30")}},":30 "),r.a.createElement("div",{style:{backgroundColor:this.getColor("45")},onClick:function(){e.changeAssignment("45")}},":45 ")))}}]),t}(n.Component),v=Object(E.b)(function(e,t){var a=t.studentName,n=t.day,r=t.time;return{user:a,day:t.day,data:e.local[a][n].hrs[r],newLocation:e.selectionView.selectedView,CountPerDay:e.local[a][n].CountPerDay}},function(e){return{changeAssignment:function(t){return e({type:"changeAssignment",data:t})}}})(b),g=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{className:"StudentName"},this.props.user),Object.keys(this.props.studentDay).map(function(t){return r.a.createElement(v,{id:e.props.studentDay[t],time:t,studentName:e.props.user,day:e.props.day,key:t})}),r.a.createElement("div",{className:"StudentName"},this.props.CountPerDay,"hrs"))}}]),t}(n.Component),O=Object(E.b)(function(e,t){var a=t.user,n=t.day;return{user:t.user,Day:t.day,studentDay:e.local[a][n].hrs,CountPerDay:e.local[a][n].CountPerDay}},{})(g),j=["06:00 PM","07:00 PM","08:00 PM","09:00 PM","10:00 PM","11:00 PM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM"],_=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{marginLeft:15,flexWrap:"wrap"}},r.a.createElement("h2",null,this.props.day),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{className:"StudentName"},"Student Name"),j.map(function(e){return r.a.createElement(y,{id:e,key:e})}),r.a.createElement("div",{className:"StudentName"},"Total Time/Day")),this.props.users.map(function(t){return r.a.createElement(O,{user:t,key:t,day:e.props.day})}))}}]),t}(n.Component),w=Object(E.b)(function(e,t){return{users:e.local.userList,day:t.day}},null)(_),C=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"selectionBox",style:{disply:"flex",margin:15}},r.a.createElement("div",{id:"no",className:"smallBox",onClick:function(){e.props.selectionView("No")}}," No "),r.a.createElement("div",{id:"office",className:"smallBox",onClick:function(){e.props.selectionView("Office")}}," Office "),r.a.createElement("div",{id:"arts",className:"smallBox",onClick:function(){e.props.selectionView("Arts")}}," Arts "),r.a.createElement("div",{id:"eastside",className:"smallBox",onClick:function(){e.props.selectionView("Eastside")}}," Easide "),r.a.createElement("div",{id:"associated",className:"smallBox",onClick:function(){e.props.selectionView("Associated")}}," Associated"))}}]),t}(n.Component),N=Object(E.b)(function(e){return{}},function(e){return{selectionView:function(t){return e({type:"selectionView",location:t})}}})(C);function P(){return r.a.createElement("div",null,r.a.createElement(N,null),r.a.createElement(w,{day:"Monday"}),r.a.createElement(w,{day:"Tuesday"}),r.a.createElement(w,{day:"Wednesday"}),r.a.createElement(w,{day:"Thursday"}),r.a.createElement(w,{day:"Friday"}))}var F=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={user:""},a.onSubmit=function(e){e.preventDefault(),a.props.AddUser(a.state.user)},a.onChange=function(e){a.setState({user:e.target.value})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{placeholder:"Enter new User",type:"text",value:this.state.user,name:"add_user_name",onChange:this.onChange}),r.a.createElement("input",{type:"submit",value:"Add User"})),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Users")),this.props.users.map(function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e))}))))}}]),t}(n.Component),A=Object(E.b)(function(e){return{users:e.local.userList}},function(e){return{AddUser:function(t){return e({type:"Add_User",user:t})},onChangeUser:function(t,a){return e({type:"FilterValue",target:t,value:a})}}})(F),k=(a(226),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).changeText=function(e){console.log(e.target.value),a.props.onChangeFilter(e.target.name,e.target.value)},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"formFilter"},r.a.createElement("div",{className:"formFilter_1"},r.a.createElement("div",{className:"formFilter_2"},"Event Name: ",r.a.createElement("input",{type:"text",name:"Filter_Event_Name",value:this.props.Filter_Event_Name,onChange:this.changeText})),r.a.createElement("div",{className:"formFilter_2"},"UID:       ",r.a.createElement("input",{type:"text",name:"Filter_UID",value:this.props.Filter_UID,onChange:this.changeText})),r.a.createElement("div",{className:"formFilter_2"},"VIC Staff:  ",r.a.createElement("input",{type:"text",name:"Filter_Staff",value:this.props.Filter_Staff,onChange:this.changeText})),r.a.createElement("div",{className:"formFilter_2"},"Location:   ",r.a.createElement("input",{type:"text",name:"Filter_Location",value:this.props.Filter_Location,onChange:this.changeText})))))}}]),t}(n.Component)),D=Object(E.b)(function(e){return{Filter_Event_Name:e.UI.Filter_Event_Name,Filter_UID:e.UI.Filter_UID,Filter_Location:e.UI.Filter_Location,Filter_Staff:e.UI.Filter_Staff}},function(e){return{onChangeFilter:function(t,a){return e({type:"FilterValue",target:t,value:a})}}})(k),U=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,this.props.row.Event_Name),r.a.createElement("td",null,this.props.row.UID),r.a.createElement("td",null,this.props.row.Event_Date),r.a.createElement("td",null,this.props.row.Location),r.a.createElement("td",null,this.props.row.Time),r.a.createElement("td",null,this.props.row.Num_Attendants),r.a.createElement("td",null,this.props.row.Staff),r.a.createElement("td",null,this.props.row.Permit_Type),r.a.createElement("td",null,this.props.row.PRO_Permits_located)))}}]),t}(n.Component),S=Object(E.b)(function(e,t){return{row:t.rowData}},{})(U),I=(a(227),function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Event Name"),r.a.createElement("th",null,"UID"),r.a.createElement("th",null,"Event Date"),r.a.createElement("th",null,"Location"),r.a.createElement("th",null,"Time"),r.a.createElement("th",null,"No. of Attendants"),r.a.createElement("th",null,"VIC Staff"),r.a.createElement("th",null,"Permit Type"),r.a.createElement("th",null,"PRO Permits located"))),this.props.AllRowData.map(function(t){if(console.log(new Date),t.UID.includes(e.props.Filter_UID)&&t.Event_Name.toUpperCase().includes(e.props.Filter_Event_Name.toUpperCase())&&t.Staff.toUpperCase().includes(e.props.Filter_Staff.toUpperCase())&&t.Location.toUpperCase().includes(e.props.Filter_Location.toUpperCase()))return r.a.createElement(S,{rowData:t,key:t.UID})})))}}]),t}(n.Component)),x=Object(E.b)(function(e){return{AllRowData:e.PA,Filter_Event_Name:e.UI.Filter_Event_Name,Filter_UID:e.UI.Filter_UID,Filter_Location:e.UI.Filter_Location,Filter_Staff:e.UI.Filter_Staff}},{})(I),L=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(D,null),r.a.createElement(x,null))}}]),t}(n.Component),T=a(39),B=a(88),M=a(89),V=a(90),R=a.n(V),J=(a(405),a(407),{apiKey:"AIzaSyCwTimQLdqmQv72yp-ZS42Kh1RHcHmtjXE",authDomain:"client123-673fc.firebaseapp.com",databaseURL:"https://client123-673fc.firebaseio.com",projectId:"client123-673fc",storageBucket:"client123-673fc.appspot.com",messagingSenderId:"702860724566",appId:"1:702860724566:web:66b356175fa5d04d"}),W=a(214),K=a(21),z=a(14),H={isBusy:!1,isAssigned:!1,location:"No"},Q={0:H,15:H,30:H,45:H},Z={6:Q,7:Q,8:Q,9:Q,10:Q,11:Q,12:Q,13:Q,14:Q,15:Q,16:Q,17:Q,18:Q,19:Q},q={Monday:{hrs:Z,CountPerDay:0},Tuesday:{hrs:Z,CountPerDay:0},Wednesday:{hrs:Z,CountPerDay:0},Thursday:{hrs:Z,CountPerDay:0},Friday:{hrs:Z,CountPerDay:0}},X={Pavan:q,PK:q,userList:["Pavan","PK"]},$=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"changeAssignment":console.log(t);var n=a.data.user,r=a.data.day,l=a.data.time,c=a.data.interval,o=a.data.CountPerDay,i=a.data.assigned,s=a.data.location,u=Object(z.a)({},t[n],Object(K.a)({},r,Object(z.a)({},t[n][r],{CountPerDay:o,hrs:Object(z.a)({},t[n][r].hrs,Object(K.a)({},l,Object(z.a)({},t[n][r].hrs[l],Object(K.a)({},c,Object(z.a)({},t[n][r].hrs[l][c],{isAssigned:i,location:s})))))})));return Object(z.a)({},t,Object(K.a)({},n,u));case"Add_User":return Object(z.a)({},t,(e={},Object(K.a)(e,a.user,q),Object(K.a)(e,"userList",[].concat(Object(W.a)(t.userList),[a.user])),e));default:return t}},G={selectedView:"No"},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"selectionView":return Object(z.a)({},e,{selectedView:t.location});default:return e}},ee=[{Event_Name:"RAISE Transfer Program Orientation",UID:"4183",Event_Date:"7/30/2019",Location:"TSU",Time:"8 AM - 10 AM",Num_Attendants:"4",Staff:"Jatin, Trevi, Brenda, Jordan",Permit_Type:"Billable",PRO_Permits_located:"Pink Folder"},{Event_Name:"Chiefs meeting",UID:"4187",Event_Date:"8/2/2019",Location:"north entrance of SCPS",Time:"9-10am",Num_Attendants:"2",Staff:"Jonathan, Zach",Permit_Type:"Billable",PRO_Permits_located:"Pink Folder"},{Event_Name:"Project Raise - SIP Bootcamp",UID:"4188",Event_Date:"8/7/2019",Location:"SCPS (2) at each entrance",Time:"8:30 AM - 9:30 AM",Num_Attendants:"4",Staff:"Maria, Jazmin, Erick, Ericka, Fernanda ",Permit_Type:"Billable",PRO_Permits_located:"Pink Folder"}],te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"selectionView":return Object(z.a)({},e,{selectedView:t.location});default:return e}},ae={ShowAddUser:!1,add_user_name:"",Filter_Event_Name:"",Filter_UID:"",Filter_Location:"",Filter_Staff:""},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AddUser":return Object(z.a)({},e,{ShowAddUser:!e.ShowAddUser});case"FilterValue":return Object(z.a)({},e,Object(K.a)({},t.target,t.value));default:return e}},re=Object(T.b)({firebase:B.firebaseReducer,firestore:M.firestoreReducer,local:$,selectionView:Y,PA:te,UI:ne});R.a.initializeApp(J);var le=[Object(M.reduxFirestore)(R.a),Object(B.reactReduxFirebase)(R.a,{userProfile:"count-signs",useFirestoreForProfile:!0})],ce=T.c.apply(void 0,le),oe=Object(T.d)(re,{},ce),ie=a(30);a(410);var se=function(){return r.a.createElement(E.a,{store:oe},r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(i,null),r.a.createElement(ie.d,null,r.a.createElement(ie.b,{exact:!0,path:"/"},r.a.createElement(ie.a,{to:"/scheduler"})),r.a.createElement(ie.b,{exact:!0,path:"/scheduler",component:P}),r.a.createElement(ie.b,{path:"/AddUser",component:A}),r.a.createElement(ie.b,{path:"/PAScreen",component:L})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[215,1,2]]]);
//# sourceMappingURL=main.2615e912.chunk.js.map