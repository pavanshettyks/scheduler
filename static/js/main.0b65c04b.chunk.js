(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{203:function(e,t,a){e.exports=a(396)},208:function(e,t,a){},395:function(e,t,a){},396:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(78),i=a.n(r);a(208);function o(){return c.a.createElement("header",{style:s},c.a.createElement("h1",null,"Scheduler is on the way..........."))}var s={background:"#333",color:"#fff",textAlign:"center",padding:"5px"},l=a(20),u=a(21),d=a(23),m=a(22),p=a(24),f=a(13),y=function(e){return c.a.createElement("div",{className:"Tblock"},c.a.createElement("div",null,e.id),c.a.createElement("div",{className:"subBlock",style:{display:"flex"}},c.a.createElement("div",{className:"indBlock",onClick:function(){console.log(e.id+"00")}},":00 "),c.a.createElement("div",{className:"indBlock",onClick:function(){console.log(e.id+" 15")}},":15 "),c.a.createElement("div",{className:"indBlock",onClick:function(){console.log(e.id+" 30")}},":30 "),c.a.createElement("div",{onClick:function(){console.log(e.id+" 45")}},":45 ")))},b=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).changeAssignment=function(e){var t={time:a.props.time,interval:e,day:a.props.day,user:a.props.studentName,location:a.props.location,assigned:!0,CountPerDay:a.props.CountPerDay};a.props.changeAssignment(t)},a.getColor=function(e){switch(a.props.data[e].location){case"No":return"white";case"Office":return"blue";case"Associated":return"purple";case"Arts":return"orange";case"Eastside":return"yellow";case"Busy":return"red";default:return"white"}},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"block"},c.a.createElement("div",{className:"subBlock",style:{display:"flex"}},c.a.createElement("div",{className:"indBlock",style:{backgroundColor:this.getColor("0")},onClick:function(){e.changeAssignment("0")}},":00 "),c.a.createElement("div",{className:"indBlock",style:{backgroundColor:this.getColor("15")},onClick:function(){e.changeAssignment("15")}},":15 "),c.a.createElement("div",{className:"indBlock",style:{backgroundColor:this.getColor("30")},onClick:function(){e.changeAssignment("30")}},":30 "),c.a.createElement("div",{style:{backgroundColor:this.getColor("45")},onClick:function(){e.changeAssignment("45")}},":45 ")))}}]),t}(n.Component),h=Object(f.b)(function(e,t){var a=t.studentName,n=t.day,c=t.time;return{user:a,day:t.day,data:e.local[a][n].hrs[c],location:e.selectionView.selectedView,CountPerDay:e.local[a][n].CountPerDay}},function(e){return{changeAssignment:function(t){return e({type:"changeAssignment",data:t})}}})(b),v=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{style:{display:"flex"}},c.a.createElement("div",{className:"StudentName"},this.props.user),Object.keys(this.props.studentDay).map(function(t){return c.a.createElement(h,{id:e.props.studentDay[t],time:t,studentName:e.props.user,day:e.props.day,key:t})}),c.a.createElement("div",{className:"StudentName"},this.props.CountPerDay,"hrs"))}}]),t}(n.Component),g=Object(f.b)(function(e,t){var a=t.user,n=t.day;return{user:t.user,Day:t.day,studentDay:e.local[a][n].hrs,CountPerDay:e.local[a][n].CountPerDay}},{})(v),E=["06:00 PM","07:00 PM","08:00 PM","09:00 PM","10:00 PM","11:00 PM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM"],O=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{style:{marginLeft:15}},c.a.createElement("br",null),c.a.createElement("div",{style:{display:"flex"}},c.a.createElement("div",{className:"StudentName"},"Student Name"),E.map(function(e){return c.a.createElement(y,{id:e,key:e})}),c.a.createElement("div",{className:"StudentName"},"Total Time")),this.props.users.map(function(e){return c.a.createElement(g,{user:e,key:e,day:"Monday"})}))}}]),t}(n.Component),j=Object(f.b)(function(e){return{users:e.local.userList}},null)(O),k=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"selectionBox",style:{disply:"flex"}},c.a.createElement("div",{id:"no",className:"smallBox",onClick:function(){e.props.selectionView("No")}}," No "),c.a.createElement("div",{id:"office",className:"smallBox",onClick:function(){e.props.selectionView("Office")}}," Office "),c.a.createElement("div",{id:"arts",className:"smallBox",onClick:function(){e.props.selectionView("Arts")}}," Arts "),c.a.createElement("div",{id:"eastside",className:"smallBox",onClick:function(){e.props.selectionView("Eastside")}}," Easide "),c.a.createElement("div",{id:"associated",className:"smallBox",onClick:function(){e.props.selectionView("Associated")}}," Associated"))}}]),t}(n.Component),C=Object(f.b)(function(e){return{}},function(e){return{selectionView:function(t){return e({type:"selectionView",location:t})}}})(k),w=a(32),N=a(79),P=a(80),A=a(81),B=a.n(A),x=(a(390),a(392),{apiKey:"AIzaSyCwTimQLdqmQv72yp-ZS42Kh1RHcHmtjXE",authDomain:"client123-673fc.firebaseapp.com",databaseURL:"https://client123-673fc.firebaseio.com",projectId:"client123-673fc",storageBucket:"client123-673fc.appspot.com",messagingSenderId:"702860724566",appId:"1:702860724566:web:66b356175fa5d04d"}),M=a(33),D=a(16),V={isBusy:!1,assigned:!1,location:""},S={0:V,15:V,30:V,45:V},I={Monday:{hrs:{6:S,7:S,8:S,9:S,10:S,11:S,12:S,13:S,14:S,15:S,16:S,17:S,18:S,19:S},CountPerDay:0}},L={Pavan:I,PK:I,userList:["Pavan","PK"]},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"changeAssignment":console.log(e);var a=t.data.user,n=t.data.day,c=t.data.time,r=t.data.interval,i=.25+t.data.CountPerDay,o=t.data.assigned,s=t.data.location,l=Object(D.a)({},e[a],Object(M.a)({},n,Object(D.a)({},e[a][n],{CountPerDay:i,hrs:Object(D.a)({},e[a][n].hrs,Object(M.a)({},c,Object(D.a)({},e[a][n].hrs[c],Object(M.a)({},r,Object(D.a)({},e[a][n].hrs[c][r],{assigned:o,location:s})))))})));return Object(D.a)({},e,Object(M.a)({},a,l));default:return e}},F={selectedView:""},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"selectionView":return Object(D.a)({},e,{selectedView:t.location});default:return e}},T=Object(w.b)({firebase:N.firebaseReducer,firestore:P.firestoreReducer,local:R,selectionView:K});B.a.initializeApp(x);var z=[Object(P.reduxFirestore)(B.a),Object(N.reactReduxFirebase)(B.a,{userProfile:"count-signs",useFirestoreForProfile:!0})],H=w.c.apply(void 0,z),J=Object(w.d)(T,{},H);a(395);var Q=function(){return c.a.createElement(f.a,{store:J},c.a.createElement("div",{className:"App"},c.a.createElement(o,null),c.a.createElement(C,null),c.a.createElement(j,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[203,1,2]]]);
//# sourceMappingURL=main.0b65c04b.chunk.js.map