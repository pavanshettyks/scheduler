(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{203:function(e,t,n){e.exports=n(396)},208:function(e,t,n){},395:function(e,t,n){},396:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(78),r=n.n(c);n(208);function i(){return o.a.createElement("header",{style:s},o.a.createElement("h1",null,"Scheduler is on the way..........."))}var s={background:"#333",color:"#fff",textAlign:"center",padding:"5px"},l=n(20),u=n(21),d=n(23),m=n(22),p=n(24),f=n(13),y=function(e){return o.a.createElement("div",{className:"Tblock"},o.a.createElement("div",null,e.id),o.a.createElement("div",{className:"subBlock",style:{display:"flex"}},o.a.createElement("div",{className:"indBlock",onClick:function(){console.log(e.id+"00")}},":00 "),o.a.createElement("div",{className:"indBlock",onClick:function(){console.log(e.id+" 15")}},":15 "),o.a.createElement("div",{className:"indBlock",onClick:function(){console.log(e.id+" 30")}},":30 "),o.a.createElement("div",{onClick:function(){console.log(e.id+" 45")}},":45 ")))},b=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).changeAssignment=function(e){var t=n.props.data[e].isAssigned,a=n.props.CountPerDay,o=n.props.newLocation;console.log(o),t&&"No"!==n.props.newLocation?t=!0:t&&"No"===n.props.newLocation?(t=!1,a-=.25):t||"No"===n.props.newLocation||(t=!0,a+=.25);var c={time:n.props.time,interval:e,day:n.props.day,user:n.props.studentName,location:n.props.newLocation,assigned:t,CountPerDay:a};n.props.changeAssignment(c)},n.getColor=function(e){switch(n.props.data[e].location){case"No":return"white";case"Office":return"blue";case"Associated":return"purple";case"Arts":return"orange";case"Eastside":return"yellow";case"Busy":return"red";default:return"white"}},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"block"},o.a.createElement("div",{className:"subBlock",style:{display:"flex"}},o.a.createElement("div",{className:"indBlock",style:{backgroundColor:this.getColor("0")},onClick:function(){e.changeAssignment("0")}},":00 "),o.a.createElement("div",{className:"indBlock",style:{backgroundColor:this.getColor("15")},onClick:function(){e.changeAssignment("15")}},":15 "),o.a.createElement("div",{className:"indBlock",style:{backgroundColor:this.getColor("30")},onClick:function(){e.changeAssignment("30")}},":30 "),o.a.createElement("div",{style:{backgroundColor:this.getColor("45")},onClick:function(){e.changeAssignment("45")}},":45 ")))}}]),t}(a.Component),h=Object(f.b)(function(e,t){var n=t.studentName,a=t.day,o=t.time;return console.log(e.local[n][a].hrs[o][0]),{user:n,day:t.day,data:e.local[n][a].hrs[o],newLocation:e.selectionView.selectedView,CountPerDay:e.local[n][a].CountPerDay}},function(e){return{changeAssignment:function(t){return e({type:"changeAssignment",data:t})}}})(b),v=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{style:{display:"flex"}},o.a.createElement("div",{className:"StudentName"},this.props.user),Object.keys(this.props.studentDay).map(function(t){return o.a.createElement(h,{id:e.props.studentDay[t],time:t,studentName:e.props.user,day:e.props.day,key:t})}),o.a.createElement("div",{className:"StudentName"},this.props.CountPerDay,"hrs"))}}]),t}(a.Component),g=Object(f.b)(function(e,t){var n=t.user,a=t.day;return{user:t.user,Day:t.day,studentDay:e.local[n][a].hrs,CountPerDay:e.local[n][a].CountPerDay}},{})(v),E=["06:00 PM","07:00 PM","08:00 PM","09:00 PM","10:00 PM","11:00 PM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM"],O=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{style:{marginLeft:15}},o.a.createElement("br",null),o.a.createElement("div",{style:{display:"flex"}},o.a.createElement("div",{className:"StudentName"},"Student Name"),E.map(function(e){return o.a.createElement(y,{id:e,key:e})}),o.a.createElement("div",{className:"StudentName"},"Total Time")),this.props.users.map(function(e){return o.a.createElement(g,{user:e,key:e,day:"Monday"})}))}}]),t}(a.Component),j=Object(f.b)(function(e){return{users:e.local.userList}},null)(O),k=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"selectionBox",style:{disply:"flex",margin:15}},o.a.createElement("div",{id:"no",className:"smallBox",onClick:function(){e.props.selectionView("No")}}," No "),o.a.createElement("div",{id:"office",className:"smallBox",onClick:function(){e.props.selectionView("Office")}}," Office "),o.a.createElement("div",{id:"arts",className:"smallBox",onClick:function(){e.props.selectionView("Arts")}}," Arts "),o.a.createElement("div",{id:"eastside",className:"smallBox",onClick:function(){e.props.selectionView("Eastside")}}," Easide "),o.a.createElement("div",{id:"associated",className:"smallBox",onClick:function(){e.props.selectionView("Associated")}}," Associated"))}}]),t}(a.Component),w=Object(f.b)(function(e){return{}},function(e){return{selectionView:function(t){return e({type:"selectionView",location:t})}}})(k),C=n(32),N=n(79),P=n(80),A=n(81),B=n.n(A),x=(n(390),n(392),{apiKey:"AIzaSyCwTimQLdqmQv72yp-ZS42Kh1RHcHmtjXE",authDomain:"client123-673fc.firebaseapp.com",databaseURL:"https://client123-673fc.firebaseio.com",projectId:"client123-673fc",storageBucket:"client123-673fc.appspot.com",messagingSenderId:"702860724566",appId:"1:702860724566:web:66b356175fa5d04d"}),M=n(33),D=n(16),V={isBusy:!1,isAssigned:!1,location:"No"},L={0:V,15:V,30:V,45:V},S={Monday:{hrs:{6:L,7:L,8:L,9:L,10:L,11:L,12:L,13:L,14:L,15:L,16:L,17:L,18:L,19:L},CountPerDay:0}},I={Pavan:S,PK:S,userList:["Pavan","PK"]},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"changeAssignment":console.log(e);var n=t.data.user,a=t.data.day,o=t.data.time,c=t.data.interval,r=t.data.CountPerDay,i=t.data.assigned,s=t.data.location,l=Object(D.a)({},e[n],Object(M.a)({},a,Object(D.a)({},e[n][a],{CountPerDay:r,hrs:Object(D.a)({},e[n][a].hrs,Object(M.a)({},o,Object(D.a)({},e[n][a].hrs[o],Object(M.a)({},c,Object(D.a)({},e[n][a].hrs[o][c],{isAssigned:i,location:s})))))})));return Object(D.a)({},e,Object(M.a)({},n,l));default:return e}},F={selectedView:"No"},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"selectionView":return Object(D.a)({},e,{selectedView:t.location});default:return e}},T=Object(C.b)({firebase:N.firebaseReducer,firestore:P.firestoreReducer,local:R,selectionView:K});B.a.initializeApp(x);var z=[Object(P.reduxFirestore)(B.a),Object(N.reactReduxFirebase)(B.a,{userProfile:"count-signs",useFirestoreForProfile:!0})],H=C.c.apply(void 0,z),J=Object(C.d)(T,{},H);n(395);var Q=function(){return o.a.createElement(f.a,{store:J},o.a.createElement("div",{className:"App"},o.a.createElement(i,null),o.a.createElement(w,null),o.a.createElement(j,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[203,1,2]]]);
//# sourceMappingURL=main.d803975d.chunk.js.map