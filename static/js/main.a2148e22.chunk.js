(this.webpackJsonpantenna=this.webpackJsonpantenna||[]).push([[0],{101:function(e,t,a){e.exports=a(140)},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},134:function(e,t,a){},136:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(9),c=a.n(o),i=(a(106),a(30)),r=a(11),s=(a(107),a(6)),u=a(35),m=a.n(u),d=(a(108),a(175)),h=a(176),p=a(168),f=a(25),b=(a(109),a(181)),v=a(12),g=a.n(v),A={name:"",mail:"",phone:"",jwt:"",rollNo:""},E={jwt:"",mail:""},S=Object(p.a)((function(e){return Object(f.a)({field:{width:"300px"}},e.breakpoints.up(900),{width:"400px"})})),N={email:"",password:""};function O(){var e=Object(r.f)(),t=S(),a=Object(n.useState)(),o=Object(s.a)(a,2),c=o[0],i=o[1],u=Object(n.useState)(),m=Object(s.a)(u,2),d=m[0],h=m[1],p=Object(n.useState)("AdminAuth"),f=Object(s.a)(p,2),v=f[0],A=f[1],O=Object(n.useState)("#000"),C=Object(s.a)(O,2),w=C[0],j=C[1];return l.a.createElement("div",{className:"AdminAuth"},l.a.createElement("div",{className:"AdminHeading",style:{color:w}},v),l.a.createElement("div",{className:"BoxAdmin"},l.a.createElement(b.a,{id:"outlined-basic",label:"Mail",className:t.field,variant:"outlined",onChange:function(e){return i(e.target.value)}})),l.a.createElement("div",{className:"BoxAdmin"},l.a.createElement(b.a,{id:"outlined-basic",label:"Password",className:t.field,variant:"outlined",onChange:function(e){return h(e.target.value)}})),l.a.createElement("div",{className:"LoginAdmin"},l.a.createElement("button",{onClick:function(){N.email=c,N.password=d,g.a.post("https://an73nna.herokuapp.com/admin/login",N,{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST","Access-Control-Allow-Headers":"Content-Type, Authorization"}}).then((function(t){t.data.antenna?(j("#ED6A5A"),A("Wrong Credentials")):(localStorage.setItem("AdminWaveForm",t.data),E.jwt=t.data,E.mail=N.email,e.push("/root"))}))},className:"btnlogin"},"COnnect_antenna")))}a(131);var C=["Aarthi B G","Aarthi R","Abdul Rahim A","Adbur Rahman M","Abhinav Murali M","Abimanyu A","Abinaya S","Abinayashri KBS","Abinesh Kumar G","Abirami S","Abishek AT","Ahmed Aadhil T","Ajay R","Ajay S","Ajayunabimani S","Akash T","Akinthiya Srinath KI","Alagappan K","Ambarish Priyan P","Anushree BS","Aravind Ramachandran","Aravind R","Arul Bathra M","Arun TS","Arunsnalan R","ArvindKumar S","Asvitha S","Bala Vignesh KG","Bama Devi M","Baranie M","Bheena Dhevi V","Bhuvaneshwaran A","Chandru S","Chellamani S","Deepadharshini K","Dessika D","Dhanushkumar S","Dharshini D","Divya Sruthi R","Edwin Rajan G","Gayathri A","Gokul Krishna J","Gokul Sriram S","Gowsalya M","Guru Sankar B","Gurupriyadharshani R","Hariharan B","Hariharan S","Harikrishnan M","Harini R","Harini S","Harish Babu S","Harith M","Harshavarthan KG","Harshini A","Harshini R","Hemadharhsini K","Hemadharshini S"],w={mobileNumber:"",password:""},j=Object(p.a)((function(e){return{field:Object(f.a)({width:"300px"},e.breakpoints.up(900),{width:"400px"})}}));function k(){var e=Object(r.f)(),t=Object(n.useState)(""),a=Object(s.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(""),u=Object(s.a)(i,2),m=u[0],d=u[1],h=Object(n.useState)("Student Login"),p=Object(s.a)(h,2),f=p[0],v=p[1],E=Object(n.useState)("#000"),S=Object(s.a)(E,2),N=S[0],O=S[1],k=j();return l.a.createElement("div",{className:"StuLogAuth"},l.a.createElement("div",{className:"StuLogHeading",style:{color:N}},f),l.a.createElement("div",{className:"BoxAdmin"},l.a.createElement(b.a,{id:"phone",label:"Phone",className:k.field,variant:"outlined",onChange:function(e){c(e.target.value)}})),l.a.createElement("div",{className:"BoxAdmin"},l.a.createElement(b.a,{id:"pwd",label:"Password",className:k.field,variant:"outlined",type:"password",onChange:function(e){d(e.target.value)}})),l.a.createElement("div",{className:"StuLogin"},l.a.createElement("button",{className:"btnlogin",onClick:function(){w.mobileNumber=o,w.password=m,g.a.post("https://cors-anywhere.herokuapp.com/https://an73nna.herokuapp.com/students/login",w,{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST","Access-Control-Allow-Headers":"Content-Type, Authorization"}}).then((function(t){console.log("heyThere"),t.data.antenna?(O("#ED6A5A"),v("Wrong Credentials")):(console.log(t.data),A.name=t.data.studentName,A.mail=t.data.email,A.phone=w.mobileNumber,A.jwt=t.headers["auth-token"],A.rollNo=String(C.indexOf(A.name)+1),localStorage.setItem("AntennaWaveForm",JSON.stringify(A)),e.push("/student"))}))}},"COnnect_antenna")))}a(132);var y=a(183),x=a(184),T=a(174),B=a(180),L={studentName:"",mobileNumber:"",email:"",password:"",rollNo:""},D=Object(p.a)((function(e){return{field:Object(f.a)({width:"300px"},e.breakpoints.up(900),{width:"400px"}),formControl:Object(f.a)({margin:e.spacing(1),width:"300px"},e.breakpoints.up(900),{width:"400px"}),selectEmpty:{marginTop:e.spacing(2)}}}));function H(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)(""),i=Object(s.a)(c,2),r=i[0],u=i[1],m=Object(n.useState)(""),d=Object(s.a)(m,2),h=d[0],p=d[1],f=Object(n.useState)(""),v=Object(s.a)(f,2),A=v[0],E=v[1],S=D();return l.a.createElement("div",{className:"StuSignin"},l.a.createElement("div",{className:"StuSiHeading"},"StudentSignIn"),l.a.createElement("div",{className:"BoxAdmin"},l.a.createElement("div",null,l.a.createElement(T.a,{variant:"outlined",className:S.formControl},l.a.createElement(y.a,{id:"demo-simple-select-outlined-label"},"Name"),l.a.createElement(B.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",onChange:function(e){o(e.target.value),C.indexOf(e.target.value,e.target.value)},label:"Name"},C.map((function(e){return l.a.createElement(x.a,{value:e},e)})))))),l.a.createElement("div",{className:"BoxAdmin"},l.a.createElement(b.a,{id:"outlined-basic",label:"Email",className:S.field,variant:"outlined",onChange:function(e){u(e.target.value)}})),l.a.createElement("div",{className:"BoxAdmin"},l.a.createElement(b.a,{id:"outlined-basic",label:"Phone",className:S.field,variant:"outlined",onChange:function(e){p(e.target.value)}})),l.a.createElement("div",{className:"BoxAdmin"},l.a.createElement(b.a,{id:"outlined-basic",label:"Password",className:S.field,variant:"outlined",type:"password",onChange:function(e){E(e.target.value)}})),l.a.createElement("div",{className:"SignUpStu"},l.a.createElement("button",{className:"btnlogin",onClick:function(){L.email=r,L.studentName=a,L.mobileNumber=h,L.password=A,L.rollNo=C.indexOf(a)+1,g.a.post("https://an73nna.herokuapp.com/students/signup",L,{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST","Access-Control-Allow-Headers":"Content-Type, Authorization"}}).then((function(e){console.log(e),alert("Now Login to your account")}))}},"COnnect_antenna")))}var G=Object(p.a)((function(e){return{title:{flexGrow:1,fontFamily:"Geo",fontSize:"30pt"}}}));function R(){var e=Object(n.useState)("StuLog"),t=Object(s.a)(e,2),a=t[0],o=t[1],c=G(),i=Object(r.f)();function u(){return"StuLog"===a?l.a.createElement("div",null,l.a.createElement(k,null)):"StuSi"===a?l.a.createElement("div",null,l.a.createElement(H,null)):"Admin"===a?l.a.createElement("div",null,l.a.createElement(O,null)):void 0}function p(e){o(e)}return l.a.createElement("div",{className:"AuthPage"},l.a.createElement("div",{className:"Decider"},l.a.createElement("div",{className:"IconName"},l.a.createElement("div",{className:"icon"},l.a.createElement(d.a,{edge:"start",onClick:function(){i.push("/dev")},color:"inherit","aria-label":"menu"},l.a.createElement(m.a,null))),l.a.createElement("div",{className:"IconNameName"},l.a.createElement(h.a,{variant:"h6",className:c.title},"Antenna"))),l.a.createElement("div",{className:"Choices"},l.a.createElement("div",{className:"ItemChoice",onClick:function(){p("Admin")}},"AdminLogin"),l.a.createElement("div",{className:"ItemChoice",onClick:function(){p("StuLog")}},"StudentLogin"),l.a.createElement("div",{className:"ItemChoice",onClick:function(){p("StuSi")}},"StudentSignup"))),l.a.createElement("div",{className:"MainAuth"},l.a.createElement(u,null)))}var I=function(){return l.a.createElement(R,null)},M=a(177),z=a(178),F=a(179),P=(a(134),a(52)),K=a.n(P);a(141);K.a.initializeApp({apiKey:"AIzaSyD9TwC78Vi-ZyAFXnmkRzxyilAXhO8r6Uc",authDomain:"antenna-8225f.firebaseapp.com",databaseURL:"https://antenna-8225f.firebaseio.com",projectId:"antenna-8225f",storageBucket:"antenna-8225f.appspot.com",messagingSenderId:"776278968733",appId:"1:776278968733:web:5b215d8a97aded0f4cc774",measurementId:"G-63M4RRKT5G"});K.a.storage(),a(136);function U(){return l.a.createElement("div",{className:"LoadingBox"},l.a.createElement("div",{className:"textLoad"},"Loading"))}var W=Object(p.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,fontFamily:"Geo",fontSize:"30pt"},nav:{backgroundColor:"#ED6A5A"},btn:{backgroundColor:"#ED6A5A"},button:{margin:e.spacing.unit},leftIcon:{marginRight:e.spacing.unit},rightIcon:{marginLeft:e.spacing.unit},iconSmall:{fontSize:20}}}));var _=a(57),J=a.n(_),V=a(79),X=(a(138),a(80)),Z=a.n(X),q=[];g.a.get("http://localhost:8080/http://localhost:6969/cases").then((function(e){q.push(e.data)}));var Q=q,Y=Object(p.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,fontFamily:"Geo",fontSize:"30pt"},nav:{backgroundColor:"#ED6A5A"},btn:{backgroundColor:"#ED6A5A"},field:{width:"30%",float:"left",marginLeft:"40px"}}}));a(139);var $=a(81),ee=a.n($),te=(a(83),a(86),a(84),a(85),a(82),Object(p.a)((function(e){return Object(f.a)({title:{flexGrow:1,fontFamily:"Geo",fontSize:"40pt",color:"#ffffff",marginLeft:"10px"},field:{width:"300px"}},e.breakpoints.up(900),{width:"400px"})})));c.a.render(l.a.createElement(i.a,null,l.a.createElement("div",null,l.a.createElement(r.c,null,l.a.createElement(r.a,{exact:!0,path:"/",component:I}),l.a.createElement(r.a,{path:"/student/",component:function(e){var t=Object(n.useState)(),a=Object(s.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)({imgURL:""}),u=Object(s.a)(i,2),p=u[0],f=u[1];console.log(p);var b=Object(n.useState)("1"),v=Object(s.a)(b,2),E=v[0],S=v[1],N=Object(n.useState)([]),O=Object(s.a)(N,2),w=O[0],j=O[1],k=Object(n.useRef)(),y=Object(r.f)(),x={studentName:"",caseStudy:"",rollNo:"",straightness:"",fileLink:""},T=JSON.parse(localStorage.getItem("AntennaWaveForm"));A.jwt=T.jwt,A.mail=T.mail,A.phone=T.phone,A.rollNo=T.rollNo,A.name=T.name,"1"===E&&g.a.get("https://an73nna.herokuapp.com/cases",{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST","Access-Control-Allow-Headers":"Content-Type, Authorization"}}).then((function(e){var t=e.data;j(t),S("0")}));var B=W();function L(){return l.a.createElement("div",{className:B.root},l.a.createElement(M.a,{position:"static",className:B.nav},l.a.createElement(z.a,null,l.a.createElement(d.a,{edge:"start",className:B.menuButton,color:"inherit","aria-label":"menu"},l.a.createElement(m.a,null)),l.a.createElement(h.a,{variant:"h6",className:B.title},"Antenna"),l.a.createElement(F.a,{color:"inherit",onClick:function(){localStorage.removeItem("AntennaWaveForm"),y.goBack()}},"Logout"))))}function D(e){return l.a.createElement("div",{className:"HelloStudent"},"Hello ",e.name,",")}function H(e){var t=e.target.files[0];console.log(t),c(t),console.log(o)}function G(e){var t=e.link;return l.a.createElement("div",{className:"nthCaseStudyTile"},l.a.createElement("div",{className:"CaseStudyTitle"},l.a.createElement("div",{className:"CaseStudyText"},e.name)),l.a.createElement("div",{className:"CaseStudyDownload"},l.a.createElement("button",{className:"SubmitButton",onClick:function(){window.open(t)}},"DownloadFile")),l.a.createElement("div",{className:"CaseStudyUpload"},l.a.createElement("div",{className:"file-input-wrapper"},l.a.createElement("button",{className:"btn-file-input"},"UploadFile"),l.a.createElement("input",{type:"file",name:"file",ref:k,onChange:H}))),l.a.createElement("button",{className:"SubmitButton",onClick:function(){e.click(e.name)}},"UploadSolution"))}function R(e){var t=K.a.storage().ref("/docs/solutions").child(A.name+e);x.caseStudy=e,x.studentName=A.name,x.rollNo=A.rollNo,S("0"),t.put(o).then((function(a){t.getDownloadURL().then((function(t){if(f(t),console.log(t),x.fileLink=t,x.straightness="true",console.log(x.studentName,x),function(e){var t={rollNo:C.indexOf(A.name)+1,studentName:A.name,caseStudy:e};g.a.post("https://an73nna.herokuapp.com/specific",t).then((function(e){return!!e.data.straightness}))}(e)){g.a.patch("https://an73nna.herokuapp.com/hw/patch",x,{headers:{"auth-token":A.jwt,"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST","Access-Control-Allow-Headers":"Content-Type, Authorization"},params:{rollNo:x.rollNo}}).then((function(e){console.log(e),S("1"),alert("Case Study Submitted Successfully!")}))}else g.a.post("https://an73nna.herokuapp.com/hw",x,{headers:{"auth-token":A.jwt,"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST","Access-Control-Allow-Headers":"Content-Type, Authorization"}}).then((function(e){console.log(e),S("1"),alert("Case Study Submitted Successfully!")}))}))}),(function(e){console.log(e)}))}function I(){return"1"===E?l.a.createElement(U,null):l.a.createElement("div",null,l.a.createElement(L,null),l.a.createElement(D,{name:A.name}),l.a.createElement("div",{className:"HeadingCase"},"Current_Case_Studies"),l.a.createElement("div",null,w.slice(0).reverse().map((function(e){return console.log(e.caseStudytitle),l.a.createElement(G,{name:e.caseStudytitle,click:R,link:e.fileLink})}))))}return l.a.createElement("div",null,l.a.createElement(I,null))}}),l.a.createElement(r.a,{path:"/root",component:function(){var e=Object(r.f)(),t=Object(n.useState)("1"),a=Object(s.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)([]),u=Object(s.a)(i,2),p=u[0],f=u[1],b=Object(n.useState)(),v=Object(s.a)(b,2),A=v[0],E=v[1],S=Object(n.useRef)(),N=Object(n.useRef)(),O=Object(n.useState)(""),w=Object(s.a)(O,2),j=w[0],k=w[1],y=Object(n.useState)(""),x=Object(s.a)(y,2),T=x[0],B=x[1],L=Object(n.useState)(""),D=Object(s.a)(L,2),H=D[0],G=D[1],R=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],I=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],P=Object(n.useState)(""),W=Object(s.a)(P,2),_=W[0],X=W[1],q=Object(n.useState)(I),$=Object(s.a)(q,2),ee=$[0],te=$[1],ae=Object(n.useState)(R),ne=Object(s.a)(ae,2),le=ne[0],oe=ne[1],ce=Y(),ie={caseStudetitle:"",fileLink:""};if("1"===o){g.a.get("https://cors-anywhere.herokuapp.com/https://an73nna.herokuapp.com/cases",{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST","Access-Control-Allow-Headers":"Content-Type, Authorization"}}).then((function(e){var t=e.data;f(t),c("0")}))}function re(e){k(S.current.value);var t=e.target.files[0];console.log(t),E(t)}function se(){var e=K.a.storage().ref("docs/admin").child(j);e.put(A).then((function(t){e.getDownloadURL().then((function(e){ie.fileLink=e,console.log(ie.fileLink),ie.caseStudytitle=j;var t="https://an73nna.herokuapp.com/cases";g.a.post(t,ie,{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST","Access-Control-Allow-Headers":"Content-Type, Authorization"}}).then((function(e){console.log(e),alert("Uploaded the CaseStudy Meta!"),g.a.get("http://localhost:8080/"+t).then((function(e){f(e.data),console.log(Q)}))}))}))}),(function(e){console.log(e)}))}function ue(){var t=Y();return l.a.createElement("div",{className:t.root},l.a.createElement(M.a,{position:"static",className:t.nav},l.a.createElement(z.a,null,l.a.createElement(d.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu"},l.a.createElement(m.a,null)),l.a.createElement(h.a,{variant:"h6",className:t.title},"Antenna"),l.a.createElement(F.a,{color:"inherit",onClick:function(){e.goBack()}},"Logout"))))}function me(e){B(e);var t=C.indexOf(e),a=le[t];G(a)}function de(e){var t=e.name;return l.a.createElement("div",{className:"nthTile",style:{color:ee[C.indexOf(t)]},onClick:function(){e.clickfunc(t)}},t)}function he(e){return pe.apply(this,arguments)}function pe(){return(pe=Object(V.a)(J.a.mark((function e(t){var a,n;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:te([]),X(t),console.log(_),a={caseStudy:t},n=[],"https://an73nna.herokuapp.com/dev/login/hw/case",g.a.post("https://an73nna.herokuapp.com/dev/login/hw/case",a,{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST","Access-Control-Allow-Headers":"Content-Type, Authorization"}}).then((function(e){n.push(e.data),e.data.map((function(e){return R[e.rollNo-1]=e.fileLink,I[e.rollNo-1]="#00ff00",null})),te(I),oe(R)}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fe(e){return l.a.createElement("div",{className:"AdminCaseTile",onClick:function(){e.click(e.caseName)}},l.a.createElement("div",{className:"TileTitle"},e.caseName),l.a.createElement("div",{className:"TileIcon"},l.a.createElement(d.a,{edge:"start",className:ce.menuButton,color:"inherit","aria-label":"menu"},l.a.createElement(Z.a,null))))}function be(){return l.a.createElement("div",{className:"MainAdminScreen"},l.a.createElement("div",{className:"AddScreen"},l.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},l.a.createElement("div",{className:"HeadingMain"},"Case_Studies")),l.a.createElement("div",{className:"AddCaseStudyTile"},l.a.createElement("input",{placeholder:"value",type:"text",id:"outlined-basic",className:ce.field,ref:S}),l.a.createElement("div",{className:"file-input-wrapper"},l.a.createElement("button",{className:"btn-file-input"},"Upload File"),l.a.createElement("input",{type:"file",name:"file",ref:N,onChange:re})),l.a.createElement("button",{className:"SubmitCaseBtn",onClick:se},"Upload CaseStudy")),l.a.createElement("div",{className:"ShowBefore"},p.slice(0).reverse().map((function(e){return l.a.createElement(fe,{id:e.caseStudetitle,caseName:e.caseStudytitle,link:e.fileLink,click:he})})))),l.a.createElement("div",{className:"StudentsScreen"},l.a.createElement("div",{className:"ListofStuds"},C.map((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(de,{name:e,clickfunc:me}))}))),l.a.createElement("div",{className:"Studownload"},l.a.createElement("div",{className:"GetFileDesc"},"Get ",T,"'s file here down below!"),l.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"20px"}},l.a.createElement("button",{className:"GetFileBtn",onClick:ve},"File")))))}function ve(){window.open(H)}function ge(){return"1"===o?l.a.createElement(U,null):l.a.createElement("div",null,l.a.createElement(ue,null),l.a.createElement(be,null))}return l.a.createElement("div",null,l.a.createElement(ge,null))}}),l.a.createElement(r.a,{path:"/dev",component:function(){var e=te(),t=Object(n.useRef)(),a=Object(n.useRef)(),o=Object(n.useState)(),c=Object(s.a)(o,2),i=c[0],r=c[1],u=Object(n.useState)(),m=Object(s.a)(u,2),d=m[0],p=m[1],f=Object(n.useState)("0"),b=Object(s.a)(f,2),v=b[0],A=b[1];function E(){return"0"===v?l.a.createElement(l.a.Fragment,null):l.a.createElement("div",{className:"DataDev"},l.a.createElement("button",null,"Get the Data"))}return l.a.createElement("div",{className:"Dev",style:{backgroundImage:"url(".concat(ee.a)}},l.a.createElement(h.a,{variant:"h6",className:e.title},"Antenna"),l.a.createElement("div",{className:"inputDev"},l.a.createElement("input",{type:"text",ref:t,onChange:function(){r(t.current.value)}}),l.a.createElement("input",{type:"password",ref:a,onChange:function(){p(a.current.value)}}),l.a.createElement("div",{className:"devlog"},l.a.createElement("button",{onClick:function(){var e={email:i,password:d};console.log(e),g.a.post("http://an73nna.herokuapp.com/dev/login",e,{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST","Access-Control-Allow-Headers":"Content-Type, Authorization"}}).then((function(e){localStorage.setItem("DevWaveForm",e.headers["auth-token"]),A("1"),console.log("ola",e.data)}))}},"Get In"))),l.a.createElement(E,null))}})))),document.getElementById("root"))},81:function(e,t,a){e.exports=a.p+"static/media/antennna.e1057d32.jpg"}},[[101,1,2]]]);
//# sourceMappingURL=main.a2148e22.chunk.js.map