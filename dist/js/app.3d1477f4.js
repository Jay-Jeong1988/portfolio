(function(t){function e(e){for(var n,o,r=e[0],c=e[1],d=e[2],u=0,p=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,d||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var l=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"023d":function(t,e,a){},"034f":function(t,e,a){"use strict";var n=a("85ec"),i=a.n(n);i.a},"0ebd":function(t,e,a){"use strict";var n=a("851a"),i=a.n(n);i.a},1792:function(t,e,a){t.exports=a.p+"img/travel.54b2c89b.svg"},"22d7":function(t,e,a){"use strict";var n=a("be87"),i=a.n(n);i.a},3152:function(t,e,a){},3479:function(t,e,a){t.exports=a.p+"img/admin.240dc0f6.svg"},"3b7a":function(t,e,a){"use strict";var n=a("85ea"),i=a.n(n);i.a},"476e":function(t,e,a){t.exports=a.p+"img/about.08b3d018.svg"},"4d6b":function(t,e,a){},"55f5":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Menu",{class:{showMenu:t.isMenu},on:{closeMenu:t.hideMenu}}),a("div",{attrs:{id:"main"}},[a("Navbar"),a("router-view"),a("div",{staticClass:"showMenuBtn",on:{click:t.toggleMenu}},[t.isMenu?a("p",[t._v("Hide filters")]):a("p",[t._v("Show filters")])])],1)],1)},s=[],o=a("5f5b"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"menu"}},[n("div",{staticClass:"fixedContainer"},[n("div",{staticClass:"logo"},[n("router-link",{attrs:{to:"/"}},[n("img",{attrs:{src:a("e217"),alt:"logo"}})])],1),n("div",{staticClass:"filters"},[n("button",{staticClass:"about",on:{click:t.goToAbout}},[n("img",{attrs:{src:a("476e"),alt:"about icon"}}),n("p",[t._v("소개")]),n("p",[t._v("About")])]),n("button",{staticClass:"trips",on:{click:t.goToHome}},[n("img",{attrs:{src:a("1792"),alt:"travel icon"}}),n("p",[t._v("예약현황")]),n("p",[t._v("Trips")])]),n("button",{staticClass:"notification",on:{click:t.goToNotification}},[n("img",{attrs:{src:a("f3f4"),alt:"notification icon"}}),n("p",[t._v("공지사항")]),n("p",[t._v("Notification")])]),n("button",{staticClass:"payment",on:{click:t.goToPayment}},[n("img",{attrs:{src:a("c055"),alt:"payment icon"}}),n("p",[t._v("결제방법")]),n("p",[t._v("Payment")])]),t.$store.state.isAdmin?n("button",{staticClass:"admin",on:{click:t.goToAdminPage}},[n("img",{attrs:{src:a("3479"),alt:"admin person icon"}}),n("p",[t._v("Admin")])]):t._e()]),t._m(0)])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footers"},[n("div",{staticClass:"footer-title"},[n("p",[t._v("예약/문의 24/7")]),n("p",[t._v("RESERVATION")])]),n("span",[n("img",{attrs:{src:a("8665"),alt:"smartphone icon"}}),n("p",[t._v("778 792 1407")])]),n("span",[n("img",{attrs:{src:a("90c2"),alt:"kakaotalk icon"}}),n("p",[t._v("hangma12")])]),n("span",[n("img",{attrs:{src:a("7711"),alt:"email icon"}}),n("p",[t._v("heybros32@gmail.com")])])])}],d={name:"Menu",data:function(){return{categories:[],adminCode:""}},computed:{},methods:{switchPage:function(){},goToNotification:function(){this.$emit("closeMenu"),this.$router.push("Notification")},goToHome:function(){this.$emit("closeMenu"),this.$router.push("/")},goToPayment:function(){this.$emit("closeMenu"),this.$router.push("/how-to-pay")},goToAdminPage:function(){this.$emit("closeMenu"),this.$router.push("/admin")},goToAbout:function(){this.$emit("closeMenu"),this.$router.push("/about")}},created:function(){this.$store.commit("setAdmin")},mounted:function(){},props:[]},l=d,u=(a("e305"),a("2877")),p=Object(u["a"])(l,r,c,!1,null,"9cb9dcfc",null),m=p.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar"},[n("div",{staticClass:"statusSample"},[n("span",[n("img",{attrs:{src:"/img/icons/scheduled.svg",alt:"white car"}}),n("p",[t._v("Scheduled")]),n("p",[t._v("예약")])]),n("span",[n("img",{attrs:{src:"/img/icons/driving.svg",alt:"green car"}}),n("p",[t._v("Driving")]),n("p",[t._v("운행중")])]),n("span",[n("img",{attrs:{src:"/img/icons/done.svg",alt:"red car"}}),n("p",[t._v("Done")]),n("p",[t._v("완료")])])]),n("div",{staticClass:"contactIcons"},[n("p",[t._v("예약문의")]),n("span",[n("img",{attrs:{src:a("7711"),alt:"email icon",name:"email"},on:{click:t.selectContact}}),t.isContactCardOpen&&"email"===t.contactType?n("ContactCard",{attrs:{type:t.contactType,iconClickedPosition:t.iconClickedPosition}}):t._e()],1),n("span",[n("img",{attrs:{src:a("8665"),name:"phone",alt:"smartphone icon"},on:{click:t.selectContact}}),t.isContactCardOpen&&"phone"===t.contactType?n("ContactCard",{attrs:{type:t.contactType,iconClickedPosition:t.iconClickedPosition}}):t._e()],1),n("span",[n("img",{attrs:{src:a("90c2"),name:"katalk",alt:"kakaotalk icon"},on:{click:t.selectContact}}),t.isContactCardOpen&&"katalk"===t.contactType?n("ContactCard",{attrs:{type:t.contactType,iconClickedPosition:t.iconClickedPosition}}):t._e()],1)])])},f=[],h=(a("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ContactCard",attrs:{id:"ContactCard"}},["phone"===t.type?n("div",{staticClass:"cardContainer"},[n("img",{attrs:{src:a("8665"),alt:"smartphone icon"}}),n("p",[t._v("778 792 1407")])]):t._e(),"katalk"===t.type?n("div",{staticClass:"cardContainer"},[n("img",{attrs:{src:a("90c2"),alt:"kakaotalk icon"}}),n("p",[t._v("hangma12")])]):t._e(),"email"===t.type?n("div",{staticClass:"cardContainer"},[n("img",{attrs:{src:a("7711"),alt:"email icon"}}),n("p",[t._v("heybro32@gmail.com")])]):t._e()])}),g=[],b={data:function(){return{}},props:["type","iconClickedPosition"],mounted:function(){var t=document.getElementById("ContactCard"),e=t.children[0];e.style.left="".concat(this.iconClickedPosition[0]-100,"px"),e.style.top="".concat(this.iconClickedPosition[1]+20,"px")},created:function(){}},C=b,_=(a("7a15"),Object(u["a"])(C,h,g,!1,null,"5d992a1a",null)),k=_.exports,y={name:"Navbar",data:function(){return{contactType:"",iconClickedPosition:"",isContactCardOpen:!1}},components:{ContactCard:k},computed:{},methods:{selectContact:function(t){var e=this,a=[t.clientX,t.clientY],n=t.target.name;this.contactType=n,this.iconClickedPosition=a,setTimeout((function(){return e.isContactCardOpen=!0}),0)}},mounted:function(){var t=this,e=document.getElementsByTagName("body")[0];e.addEventListener("click",(function(e){if(e.preventDefault(),t.isContactCardOpen){var a=document.getElementById("ContactCard");a.contains(e.target)||(t.isContactCardOpen=!1)}}))},props:["totalItemCount","checkedItemCount"]},A=y,w=(a("3b7a"),Object(u["a"])(A,v,f,!1,null,"acba8e96",null)),x=w.exports;a("f9e3"),a("2dd8");n["default"].use(o["a"]);var T={name:"App",components:{Menu:m,Navbar:x},data:function(){return{isAdmin:!1,isMenu:!1}},computed:{},methods:{toggleMenu:function(){this.isMenu=!this.isMenu},hideMenu:function(){this.isMenu=!1}},created:function(){var t=this;this.$router.beforeEach((function(e,a,n){t.hideMenu(),n()}))}},P=T,E=(a("034f"),Object(u["a"])(P,i,s,!1,null,null,null)),O=E.exports,N=a("9483");Object(N["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var S=a("8c4f"),I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"defaultCards"},t._l(t.trips,(function(t,e){return a("Card",{key:e,attrs:{item:t}})})),1)])},$=[],M=(a("d3b7"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gear",on:{click:t.openModal}},[a("b-card",{staticStyle:{"max-height":"180px",border:"none","border-radius":"10px","border-bottom-left-radius":"0","border-bottom-right-radius":"0",overflow:"hidden"},attrs:{"no-body":"","bg-variant":"bg-dark"}},[a("div",{staticClass:"overlay-text"},[a("p",[t._v(t._s(t.item.from+" - "+t.item.to))]),a("p",[t._v(t._s("예상소요시간: "+t.item.duration+" mins"))]),a("p",[t._v(t._s(t.getDate))]),a("p",[t._v(t._s(t.item.customerName.split("-")[1]))])]),a("b-card-img",{staticStyle:{filter:"brightness(.8)","border-radius":"10px","border-bottom-left-radius":"0","border-bottom-right-radius":"0"},attrs:{src:""+t.item.thumbnailUrl,alt:"item image",fluid:"true"}})],1),a("div",{staticClass:"card-header bg-dark"},[a("div",{staticClass:"headerIcons"},[a("span",{staticClass:"categoryIcon"},[a("img",{attrs:{src:"/img/icons/"+t.item.status+".svg",alt:"driving status icon"}})])]),a("h3",{class:t.item.status},[a("small",{staticStyle:{"font-size":".7rem"}},[t._v("예약 ")]),t._v(t._s(""+t.pickupTime))])]),t.modalShow?a("Modal",{attrs:{item:t.item}}):t._e()],1)}),j=[],D=(a("0d03"),a("ac1f"),a("1276"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"modalview"}},[a("b-modal",{attrs:{centered:"","dialog-class":"bg-transparent","content-class":"shadow-lg","footer-class":"shadow-lg bg-dark footerr","body-class":"bg-dark","header-class":"bg-dark"},scopedSlots:t._u([{key:"modal-header",fn:function(e){var n=e.close;return[a("div",{staticClass:"btn btn-outline-danger",on:{click:t.deleteTrip}},[a("p",[t._v("Delete")])]),a("b-button",{attrs:{size:"sm",variant:""},on:{click:function(t){return n()}}},[t._v("x")])]}},{key:"modal-footer",fn:function(e){e.login;return[a("div",{staticClass:"btn btn-outline-success",on:{click:t.edit}},[a("p",[t._v("Edit")])]),a("div",{staticClass:"btn btn-outline-primary",on:{click:t.save}},[a("p",[t._v("Save")])]),a("div",{staticClass:"statuses"},[a("div",{staticClass:"status",on:{click:t.switchStatus}},[a("img",{attrs:{name:"scheduled",src:"/img/icons/scheduled.svg",alt:"white car"}})]),a("div",{staticClass:"status",on:{click:t.switchStatus}},[a("img",{attrs:{name:"driving",src:"/img/icons/driving.svg",alt:"green car"}})]),a("div",{staticClass:"status",on:{click:t.switchStatus}},[a("img",{attrs:{name:"done",src:"/img/icons/done.svg",alt:"red car"}})])])]}}]),model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[t.editing?t._e():a("div",{attrs:{id:"loginContainer"}},[a("p",[t._v("Pickup: "+t._s(t.data.pickupAddress))]),a("p",[t._v("Destination: "+t._s(t.data.destinationAddress))]),a("p",[t._v("When: "+t._s(t.getDate+" "+t.pickupTime))]),a("p",[t._v("Name: "+t._s(t.data.customerName.split("-")[0]))]),a("p",[t._v("PhoneNo: "+t._s(t.data.phone))]),a("p",[t._v("Distance: "+t._s(t.data.distance)+" km")]),a("p",[t._v("Price: $"+t._s(t.data.price))]),a("p",[t._v("ETE: "+t._s(t.data.duration)+" minutes")])]),t.editing?a("div",{attrs:{id:"loginContainer2"}},[a("div",{staticClass:"control"},[a("span",[t._v("Pickup:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.pickupAddress,expression:"data.pickupAddress"}],domProps:{value:t.data.pickupAddress},on:{input:function(e){e.target.composing||t.$set(t.data,"pickupAddress",e.target.value)}}})]),a("div",{staticClass:"control"},[a("span",[t._v("Destination:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.destinationAddress,expression:"data.destinationAddress"}],domProps:{value:t.data.destinationAddress},on:{input:function(e){e.target.composing||t.$set(t.data,"destinationAddress",e.target.value)}}})]),a("div",{staticClass:"control"},[a("span",[t._v("When:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.pickupTime,expression:"data.pickupTime"}],attrs:{type:"datetime-local"},domProps:{value:t.data.pickupTime},on:{input:function(e){e.target.composing||t.$set(t.data,"pickupTime",e.target.value)}}})]),a("div",{staticClass:"control"},[a("span",[t._v("Name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.customerName,expression:"data.customerName"}],domProps:{value:t.data.customerName},on:{input:function(e){e.target.composing||t.$set(t.data,"customerName",e.target.value)}}})]),a("div",{staticClass:"control"},[a("span",[t._v("PhoneNo:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.phone,expression:"data.phone"}],attrs:{type:"number"},domProps:{value:t.data.phone},on:{input:function(e){e.target.composing||t.$set(t.data,"phone",e.target.value)}}})]),a("div",{staticClass:"control"},[a("span",[t._v("Distance:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.distance,expression:"data.distance"}],attrs:{type:"number"},domProps:{value:t.data.distance},on:{input:function(e){e.target.composing||t.$set(t.data,"distance",e.target.value)}}})]),a("div",{staticClass:"control"},[a("span",[t._v("Price:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.price,expression:"data.price"}],attrs:{type:"number"},domProps:{value:t.data.price},on:{input:function(e){e.target.composing||t.$set(t.data,"price",e.target.value)}}})]),a("div",{staticClass:"control"},[a("span",[t._v("ETE:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.duration,expression:"data.duration"}],attrs:{type:"number"},domProps:{value:t.data.duration},on:{input:function(e){e.target.composing||t.$set(t.data,"duration",e.target.value)}}})])]):t._e()])],1)}),J=[],F=(a("99af"),{data:function(){return{modalShow:!1,pst:new Date(this.item.pickupTime),editing:!1,responseError:null,data:{}}},props:["item"],computed:{pickupTime:function(){var t="0"==this.pst.getHours()?"00":this.pst.getHours(),e="0"==this.pst.getMinutes()?"00":this.pst.getMinutes();return t+" : "+e},getDate:function(){var t=this.pst.getFullYear(),e=this.pst.getMonth()+1,a=this.pst.getDate();return t+"/"+e+"/"+a+" "+"".concat(this.pst).split(" ")[0]}},methods:{switchStatus:function(t){var e=this,a=t.target.name,n="https://survivalstack.herokuapp.com/api/v1/trips/updateStatus",i=n;fetch("".concat(i,"?tripId=").concat(this.data._id,"&status=").concat(a)).then((function(t){return t.json()})).then((function(t){e.item.status=t.status})).catch((function(t){e.responseError=t}))},edit:function(){this.editing=!this.editing},save:function(){var t=this,e="https://survivalstack.herokuapp.com/api/v1/trips/update",a=e,n={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify(this.data)};fetch("".concat(a,"?tripId=").concat(this.data._id),n).then((function(t){return t.json()})).then((function(e){t.data=e})).catch((function(e){t.responseError=e}))},deleteTrip:function(){var t=this,e="https://survivalstack.herokuapp.com/api/v1/trips/remove",a=e;fetch("".concat(a,"?tripId=").concat(this.data._id)).then((function(t){return t.status})).catch((function(e){t.responseError=e}))}},created:function(){this.data=this.item},mounted:function(){this.modalShow=!0}}),B=F,R=(a("22d7"),Object(u["a"])(B,D,J,!1,null,null,null)),Q=R.exports,W={name:"Card",props:["item"],data:function(){return{pst:new Date(this.item.pickupTime),modalShow:!1}},created:function(){},computed:{pickupTime:function(){var t="0"==this.pst.getHours()?"00":this.pst.getHours(),e="0"==this.pst.getMinutes()?"00":this.pst.getMinutes();return t+" : "+e},getDate:function(){var t=this.pst.getFullYear(),e=this.pst.getMonth()+1,a=this.pst.getDate();return t+"/"+e+"/"+a+" "+"".concat(this.pst).split(" ")[0]}},methods:{toggleCheckIcon:function(t){t.preventDefault(),this.item.checked=!this.item.checked},openModal:function(){this.$store.state.isAdmin&&(this.modalShow=!this.modalShow)}},mounted:function(){var t=this;this.$root.$on("bv::modal::hide",(function(){t.modalShow=!1}))},components:{Modal:Q}},L=W,U=(a("e28e"),Object(u["a"])(L,M,j,!1,null,"58dfb6bd",null)),q=U.exports,G={name:"Content",data:function(){return{trips:[]}},methods:{fetchTrips:function(){var t=this,e=new Request("https://survivalstack.herokuapp.com/api/v1/trips/getAll"),a=(new Request("http://localhost:8081/api/v1/trips/getAll"),e);fetch(a).then((function(t){return t.json()})).then((function(e){t.trips=e})).catch((function(t){return t}))}},created:function(){this.fetchTrips()},components:{Card:q},props:[]},X=G,V=(a("f953"),Object(u["a"])(X,I,$,!1,null,"4b7d18be",null)),H=V.exports,z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",[a("h4",[t._v("공지사항")]),a("div",{staticClass:"warning"},[a("p",[t._v("안녕하세요 JJ Ride 입니다. 현재는 중형차만 보유하고 있는 관계로 대형 이사짐은 운반이 불가합니다. 양해 부탁드립니다.")]),a("p",[t._v("차량: Toyota Camry Le/ 4도어 5인석(운전석 포함)/ 트렁크 용량: 대형 캐리어 x 4")])]),a("div",{staticClass:"camry"},[a("img",{attrs:{src:"http://ik.imagekit.io/kitkitkitit/tr:q-100,w-500/camry.jpg",alt:"white camry"}})])])])}],Y={name:"Notification",data:function(){return{}},components:{},props:[]},Z=Y,tt=(a("0ebd"),Object(u["a"])(Z,z,K,!1,null,"3944a82d",null)),et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"AdminPage"},[t.responseError?a("small",{staticStyle:{color:"red"}},[t._v("responseError")]):t._e(),t.$store.state.isAdmin?a("div",{staticClass:"createCardForm"},[a("div",[a("label",[t._v("pickup address")]),a("vue-google-autocomplete",{staticClass:"form-control",attrs:{id:"map",types:"",country:["ca","us"]},on:{placechanged:t.getPickupAddress}})],1),a("div",[a("label",[t._v("destination address")]),a("vue-google-autocomplete",{staticClass:"form-control",attrs:{id:"map2",types:"",country:["ca","us"]},on:{placechanged:t.getDestinationAddress}})],1),a("div",[a("label",[t._v("pickup time")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.pickupTime,expression:"data.pickupTime"}],staticClass:"form-control date",attrs:{type:"datetime-local"},domProps:{value:t.data.pickupTime},on:{input:function(e){e.target.composing||t.$set(t.data,"pickupTime",e.target.value)}}})]),a("div",[a("label",[t._v("duration")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.duration,expression:"data.duration"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.data.duration},on:{input:function(e){e.target.composing||t.$set(t.data,"duration",e.target.value)}}})]),a("div",[a("label",[t._v("distance")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.distance,expression:"data.distance"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.data.distance},on:{input:function(e){e.target.composing||t.$set(t.data,"distance",e.target.value)}}})]),a("div",[a("label",[t._v("price")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.price,expression:"data.price"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.data.price},on:{input:function(e){e.target.composing||t.$set(t.data,"price",e.target.value)}}})]),a("div",[a("label",[t._v("client name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.customerName,expression:"data.customerName"}],staticClass:"form-control",domProps:{value:t.data.customerName},on:{input:function(e){e.target.composing||t.$set(t.data,"customerName",e.target.value)}}})]),a("div",[a("label",[t._v("contact")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.phone,expression:"data.phone"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:t.data.phone},on:{input:function(e){e.target.composing||t.$set(t.data,"phone",e.target.value)}}})]),a("button",{staticClass:"btn btn-block btn-success done",on:{click:t.makeReservation}},[t._v("Submit")])]):t._e()])},nt=[],it=(a("accc"),a("0118")),st={name:"AdminPage",data:function(){return{data:{from:"",to:"",pickupTime:"",duration:0,customerName:"",pickupAddress:"",destinationAddress:"",phone:"",price:0,distance:0},responseError:null}},methods:{getPickupAddress:function(t){var e=t.street_number||"",a=t.route||"",n=t.locality||"";this.data.from=n,this.data.pickupAddress="".concat(e," ").concat(a,", ").concat(n)},getDestinationAddress:function(t){var e=t.street_number||"",a=t.route||"",n=t.locality||"";this.data.to=n,this.data.destinationAddress="".concat(e," ").concat(a,", ").concat(n)},makeReservation:function(){var t=this;if(this.$store.state.isAdmin){var e="https://survivalstack.herokuapp.com/api/v1/trips/create",a=e,n={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify(this.data)};fetch(a,n).then((function(e){200==e.status&&t.$router.push("/")})).catch((function(e){t.responseError=e}))}}},mounted:function(){var t=(new Date).toISOString().split(".")[0];document.getElementsByClassName("date")[0].setAttribute("min",t)},components:{VueGoogleAutocomplete:it["a"]},props:[]},ot=st,rt=(a("7cda"),Object(u["a"])(ot,at,nt,!1,null,"aa8d2e80",null)),ct=rt.exports,dt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},lt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Payment"},[n("h3",[t._v("Payment Options")]),n("div",{staticClass:"paymentOptions"},[n("span",[n("p",[t._v("Cash")]),n("img",{attrs:{src:a("bcbc"),alt:"cash icon"}}),n("p",[t._v("현금결제")])]),n("span",[n("p",[t._v("Paypal")]),n("img",{attrs:{src:a("b67a"),alt:"paypal icon"}}),n("div",[n("p",[n("b",[t._v("https://paypal.me/jjride ")])]),n("small",[t._v("예약하시고 난 후에 결제 해 주세요.")])])]),n("span",[n("p",[t._v("Email Transfer")]),n("img",{attrs:{src:a("7711"),alt:"email icon"}}),n("div",[n("p",[n("b",[t._v("heybros32@gmail.com ")])]),n("small",[t._v("예약하시고 난 후에 결제 해 주세요.")])])])])])}],ut={name:"Payment",data:function(){return{}},components:{},props:[]},pt=ut,mt=(a("c293"),Object(u["a"])(pt,dt,lt,!1,null,"4a67d74d",null)),vt=mt.exports,ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"About"},[t.isSecret?a("div",{staticClass:"checkAdmin"},[a("div",{attrs:{id:"code"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.adminCode,expression:"adminCode"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.adminCode},on:{input:function(e){e.target.composing||(t.adminCode=e.target.value)}}}),a("button",{staticClass:"btn btn-outline-primary",on:{click:t.verifyCode}},[t._v("Verify")])])]):t._e(),t._m(0),a("div",{staticClass:"container"},[a("div",{staticClass:"pContainer"},[a("p",{staticClass:"korean"},[t._v(" 한국 다녀올 때마다 매번 20분씩 줄 서서 택시 타고, 그마저도 혹시나 빙 돌아가지 않을까 걱정하면서 가고, 도착하고 나서도 요금이 비싸게 나와 지불하기 아까웠던 적이 있으셨나요? 택시를 급하게 이용해야 하는데 업체가 전화를 받지 않아서 애탄 적이 있으셨나요? 이사는 해야 되지만 짐이 너무 적어서 "),a("span",{on:{click:t.openSesame}},[t._v("굳이")]),t._v(" 이사전문업체에 연락하기 애매하시다면, 그 외에 물건을 급하게 전달해야 하는데 시간이 없어서.. 등등 여러 이유로 자차가 없으셔서 불편을 겪고 계신다면 JJ RIDE에 연락주세요. 기존 지출보다 훨씬 저렴한 비용에 해결해 드립니다. 궁금한 게 있으시면 문의만 하셔도 좋으니 카톡/전화/이메일 상관없이 편하게 연락해주세요. "),a("small",[t._v("*상시로 예약/운행 상황을 업데이트 하니 웹사이트를 확인 해주세요.")])])]),t._m(1)]),t._m(2),t._m(3)])},ht=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",[t._v(" One thing "),a("b",[t._v("JJ RIDE")]),t._v(" guarantees.. is "),a("b",[t._v("better pricing!")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"imageContainer"},[a("img",{attrs:{src:"http://ik.imagekit.io/kitkitkitit/survivalstack/tr:q-100,ar-5-5,w-600/buckleup1.png",alt:"car image"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",[t._v(" ..and "),a("b",[t._v("convenience!")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"imageContainer"},[a("img",{attrs:{src:"http://ik.imagekit.io/kitkitkitit/survivalstack/tr:q-100,ar-5-5,w-600/safety1.png",alt:"safety image"}})]),a("div",{staticClass:"pContainer"},[a("p",{staticClass:"english"},[t._v(" If you've ever felt frustrated by the high costs and unresponsive operators from taxis, JJ RIDE is your cheaper, safer, and friendlier option. Just call to book, and we'll help handle everything with your transportation at a very reasonable price. Whether you need to move a few things across town, need a quick ride to/from the airport, or just looking to save some money getting to your destination, we have you covered. Feel free to call to ask any questions or to get an estimate for your trip. "),a("small",[t._v(" *Please check the driving status on the website so you don't have to feel nervous everytime about if your driver is coming or not. ")])])])])}],gt={name:"About",data:function(){return{isSecret:!1,adminCode:""}},components:{},props:[],methods:{openSesame:function(){this.isSecret=!this.isSecret},verifyCode:function(){"MIIBOQIBAAJAWw/d2k7AJxDh3ey/TM1yvXojvjbZdf06EzazVr6ZW/iOqot4fyJqtvX/vdvTlU/ekpgpQf+GI2IeE0Mo+OeURwIDAQABAkAcIlLQ1/PWHgkqn7Ka7/67O7k/U4LsSUhgF05hRpHrMAmdCAYFIs2acd1+8FJriCzhlD8p6Bb9TIPMzedy1rtBAiEAonTfo8iVFhmbn3i8cXU0nLGlKWrgb96uNpB6w79SBh0CIQCPfvsxGFmCXgrgT3eQtHRcjxumjUtgpL84AZkbRykmswIhAJloolNos5hWAEY8Xj8JvfAGNQAChARAFOVD1BoLDerlAiAfTlrLGT7d/FpvGadCQLxqPSaRLZ5WVVsKgv6+PsYxlQIgSGWF72fC+0CooXlFUtODx5qbOxvgdJKk5s6mNkEWCvs="===this.adminCode&&(this.$store.state.isAdmin="MIIBOQIBAAJAWw/d2k7AJxDh3ey/TM1yvXojvjbZdf06EzazVr6ZW/iOqot4fyJqtvX/vdvTlU/ekpgpQf+GI2IeE0Mo+OeURwIDAQABAkAcIlLQ1/PWHgkqn7Ka7/67O7k/U4LsSUhgF05hRpHrMAmdCAYFIs2acd1+8FJriCzhlD8p6Bb9TIPMzedy1rtBAiEAonTfo8iVFhmbn3i8cXU0nLGlKWrgb96uNpB6w79SBh0CIQCPfvsxGFmCXgrgT3eQtHRcjxumjUtgpL84AZkbRykmswIhAJloolNos5hWAEY8Xj8JvfAGNQAChARAFOVD1BoLDerlAiAfTlrLGT7d/FpvGadCQLxqPSaRLZ5WVVsKgv6+PsYxlQIgSGWF72fC+0CooXlFUtODx5qbOxvgdJKk5s6mNkEWCvs="===this.adminCode,localStorage.setItem("adminKey",this.adminCode))}}},bt=gt,Ct=(a("da50"),Object(u["a"])(bt,ft,ht,!1,null,"5bba229e",null)),_t=Ct.exports;n["default"].use(S["a"]);var kt=[{path:"/",name:"Content",component:H},{path:"/notification",name:"Notification",component:et},{path:"/admin",name:"AdminPage",component:ct},{path:"/how-to-pay",name:"Payment",component:vt},{path:"/about",name:"About",component:_t}],yt=new S["a"]({mode:"history",base:"/",routes:kt}),At=yt,wt=a("2f62");n["default"].use(wt["a"]);var xt=new wt["a"].Store({state:{isAdmin:!1},mutations:{setAdmin:function(t){var e=localStorage.getItem("adminKey");e&&"MIIBOQIBAAJAWw/d2k7AJxDh3ey/TM1yvXojvjbZdf06EzazVr6ZW/iOqot4fyJqtvX/vdvTlU/ekpgpQf+GI2IeE0Mo+OeURwIDAQABAkAcIlLQ1/PWHgkqn7Ka7/67O7k/U4LsSUhgF05hRpHrMAmdCAYFIs2acd1+8FJriCzhlD8p6Bb9TIPMzedy1rtBAiEAonTfo8iVFhmbn3i8cXU0nLGlKWrgb96uNpB6w79SBh0CIQCPfvsxGFmCXgrgT3eQtHRcjxumjUtgpL84AZkbRykmswIhAJloolNos5hWAEY8Xj8JvfAGNQAChARAFOVD1BoLDerlAiAfTlrLGT7d/FpvGadCQLxqPSaRLZ5WVVsKgv6+PsYxlQIgSGWF72fC+0CooXlFUtODx5qbOxvgdJKk5s6mNkEWCvs="===e&&(t.isAdmin=!0)}},actions:{},modules:{}});n["default"].config.productionTip=!1,new n["default"]({router:At,store:xt,render:function(t){return t(O)}}).$mount("#app")},7711:function(t,e,a){t.exports=a.p+"img/email.8583169b.svg"},"7a15":function(t,e,a){"use strict";var n=a("3152"),i=a.n(n);i.a},"7cda":function(t,e,a){"use strict";var n=a("7e5c"),i=a.n(n);i.a},"7e5c":function(t,e,a){},8332:function(t,e,a){},"851a":function(t,e,a){},"85ea":function(t,e,a){},"85ec":function(t,e,a){},8665:function(t,e,a){t.exports=a.p+"img/smartphone.0809b2c4.svg"},"90c2":function(t,e,a){t.exports=a.p+"img/kakao-talk.5d676a2a.svg"},b67a:function(t,e,a){t.exports=a.p+"img/paypal.ca93c6f2.svg"},bcbc:function(t,e,a){t.exports=a.p+"img/cash.53cbf498.svg"},be87:function(t,e,a){},c055:function(t,e,a){t.exports=a.p+"img/payment.ee181b40.svg"},c293:function(t,e,a){"use strict";var n=a("023d"),i=a.n(n);i.a},da50:function(t,e,a){"use strict";var n=a("4d6b"),i=a.n(n);i.a},e217:function(t,e,a){t.exports=a.p+"img/JJ RIDE1.87ea6936.png"},e28e:function(t,e,a){"use strict";var n=a("8332"),i=a.n(n);i.a},e305:function(t,e,a){"use strict";var n=a("55f5"),i=a.n(n);i.a},e523:function(t,e,a){},f3f4:function(t,e,a){t.exports=a.p+"img/notification.5b69d510.svg"},f953:function(t,e,a){"use strict";var n=a("e523"),i=a.n(n);i.a}});
//# sourceMappingURL=app.3d1477f4.js.map