(function(t){function e(e){for(var i,s,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],i=!0,r=1;r<o.length;r++){var c=o[r];0!==n[c]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=o[0]))}return t}var i={},n={app:0},a=[];function s(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=i,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(o,i,function(e){return t[e]}.bind(null,i));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0226":function(t,e,o){t.exports=o.p+"img/checked.33b4ca30.svg"},"034f":function(t,e,o){"use strict";var i=o("85ec"),n=o.n(i);n.a},"0757":function(t,e,o){},"111c":function(t,e,o){},1141:function(t,e,o){},"136b":function(t,e,o){"use strict";var i=o("3c35"),n=o.n(i);n.a},2470:function(t,e,o){"use strict";var i=o("111c"),n=o.n(i);n.a},"24f1":function(t,e,o){t.exports=o.p+"img/phone-call.7f3451ed.svg"},2598:function(t,e,o){t.exports=o.p+"img/github-orange.c23c7748.svg"},"27ff":function(t,e,o){"use strict";var i=o("48b5"),n=o.n(i);n.a},"3c35":function(t,e,o){},"3dea":function(t,e,o){"use strict";var i=o("9ecc"),n=o.n(i);n.a},"48b5":function(t,e,o){},5134:function(t,e,o){},"53e0":function(t,e,o){t.exports=o.p+"img/play.dc847044.svg"},"553a":function(t,e,o){"use strict";var i=o("935c"),n=o.n(i);n.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"main"}},[o("router-view")],1)])},a=[],s=o("5f5b");o("f9e3"),o("2dd8");i["default"].use(s["a"]);var r={name:"App",components:{},data:function(){return{}},computed:{},methods:{},mounted:function(){var t=this;this.$store.state.isMobile=window.innerWidth<=600,window.addEventListener("resize",(function(){t.$store.state.isMobile=window.innerWidth<=600}))}},c=r,l=(o("034f"),o("2877")),u=Object(l["a"])(c,n,a,!1,null,null,null),d=u.exports,p=o("9483");Object(p["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var f=o("8c4f"),m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"LandingPage"},[i("Navbar"),t._m(0),i("section",{staticClass:"aboutUs"},[t._m(1),i("div",{staticClass:"swiperContainer"},[i("AboutMeSwiper",{attrs:{photoUrls:t.aboutMePhotoUrls}})],1)]),i("StaffsSection"),i("ProjectsSection"),i("section",{staticClass:"location"},[t._m(2),i("div",{staticClass:"map"},[i("GmapMap",{ref:"mapRef",attrs:{options:{zoomControl:!1,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!0,fullscreenControl:!0,disableDefaultUi:!1},center:{lat:49.327973,lng:-123.141709},zoom:10}},[i("GmapMarker",{attrs:{icon:{url:o("c6c2"),size:{width:40,height:40,f:"px",b:"px"},scaledSize:{width:40,height:40,f:"px",b:"px"}},position:{lat:49.327973,lng:-123.141709},clickable:!0},on:{mouseover:function(e){t.showTooltip=!0},mouseout:function(e){t.showTooltip=!1},click:function(e){t.showTooltip=!t.showTooltip}}})],1),t.showTooltip?i("div",{staticClass:"customTooltip"},[i("p",[t._v("935 Marine Drive, West Vancouver")]),t._m(3)]):t._e()],1)]),i("section",{staticClass:"footer"},[i("div",{staticClass:"buttons"},[i("button",{staticClass:"navigateToTop",on:{click:t.scrollToTop}},[i("img",{attrs:{src:o("5743"),alt:"up arrow icon"}})]),t._m(4)]),i("div",{staticClass:"booknow"},[i("BookingModal")],1)]),t._m(5)],1)},h=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"banner"},[i("img",{attrs:{src:o("9d64"),alt:"logo"}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"texts"},[o("div",[o("h3",[t._v("Hi ! I am Jay, "),o("br"),t._v("a growing developer.")]),o("p",[t._v("I am a full stack web developer with 2 years of experience(2020). I studied coding at CodeCore Web Developer College and successfully graduated with my Diploma of Web Development. After graduation, I worked as a front-end web developer at a marketing company from 2018-2019, then worked on my own to improve my development skills. My next goal is to get a development job in North America. I hope to work long-term for my next company to advance my career in the tech industry.")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h2",[t._v("Where I Am")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticStyle:{"font-size":"1.2em"}},[o("b",[t._v("778 792 1407")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{attrs:{href:"tel:+1-778-792-1407"}},[i("button",{staticClass:"phoneNumber"},[i("img",{attrs:{src:o("24f1"),alt:"phone icon"}})])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"credit"},[o("p",[t._v("©2020 Jay Jeong's Portfolio Website")])])}],g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Navbar",class:{show:!t.isWindowTop}},[i("div",{staticClass:"topContainer"},[t._m(0),t.$store.state.isMobile?t._e():i("div",{staticClass:"navs"},[i("button",{staticClass:"scrollTo",attrs:{name:"aboutUs"},on:{click:t.scrollTo}},[i("p",[t._v("About Me")])]),i("button",{staticClass:"scrollTo",attrs:{name:"ProjectsSection"},on:{click:t.scrollTo}},[i("p",[t._v("My Projects")])]),i("button",{staticClass:"scrollTo",attrs:{name:"location"},on:{click:t.scrollTo}},[i("p",[t._v("Where I Am")])]),i("button",{staticClass:"scrollTo",attrs:{name:"footer"},on:{click:t.scrollTo}},[i("p",[t._v("Direct Message")])])]),i("div",{staticClass:"contactIcons"},[i("span",[i("img",{attrs:{src:o("7711"),name:"email",alt:"email icon"},on:{click:t.selectContact}}),t.isContactCardOpen&&"email"===t.contactType?i("ContactCard",{attrs:{type:t.contactType,iconClickedPosition:t.iconClickedPosition}}):t._e()],1),i("span",[i("img",{attrs:{src:o("cf63"),name:"phone",alt:"smartphone icon"},on:{click:t.selectContact}}),t.isContactCardOpen&&"phone"===t.contactType?i("ContactCard",{attrs:{type:t.contactType,iconClickedPosition:t.iconClickedPosition}}):t._e()],1),t._m(1),t._m(2)]),t.$store.state.isMobile?i("button",{staticClass:"toggleDropdownBtn",on:{click:t.toggleDropdown}},[i("img",{attrs:{id:"dropdownBtn",src:t.dynamicToggleBtnImg,alt:"dropdown icon"}})]):t._e()]),i("div",{staticClass:"dropdownContainer",class:{show:t.showDropdown},attrs:{id:"dropdownContainer"}},[i("button",{staticClass:"scrollTo",attrs:{name:"aboutUs"},on:{click:t.scrollTo}},[i("p",[t._v("About Me")])]),i("button",{staticClass:"scrollTo",attrs:{name:"ProjectsSection"},on:{click:t.scrollTo}},[i("p",[t._v("My Projects")])]),i("button",{staticClass:"scrollTo",attrs:{name:"location"},on:{click:t.scrollTo}},[i("p",[t._v("Where I Am")])]),i("button",{staticClass:"scrollTo",attrs:{name:"footer"},on:{click:t.scrollTo}},[i("p",[t._v("Contact")])])])])},v=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{attrs:{id:"homeLink",href:""}},[i("img",{attrs:{src:o("9d64")}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{attrs:{href:"https://github.com/Jay-Jeong1988",target:"_blank"}},[i("span",[i("img",{attrs:{src:o("e3d6"),alt:"github icon",name:"github"}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{attrs:{href:"https://www.linkedin.com/in/jay-jeong",target:"_blank"}},[i("span",[i("img",{attrs:{src:o("6a55"),alt:"linkedin icon",name:"github"}})])])}],k=(o("a4d3"),o("e01a"),o("d28b"),o("b0c0"),o("d3b7"),o("3ca3"),o("ddb0"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ContactCard",attrs:{id:"ContactCard"}},["phone"===t.type?i("div",{staticClass:"cardContainer"},[i("img",{attrs:{src:o("8665"),alt:"smartphone icon"}}),i("p",[t._v("778 792 1407")])]):t._e(),"email"===t.type?i("div",{staticClass:"cardContainer"},[i("img",{attrs:{src:o("caf7"),alt:"email icon"}}),i("p",[t._v("heybro32@gmail.com")])]):t._e()])}),w=[],b={data:function(){return{}},props:["type","iconClickedPosition"],mounted:function(){var t=document.getElementById("ContactCard"),e=t.children[0];e.style.left="".concat(this.iconClickedPosition[0]-100,"px"),e.style.top="".concat(this.iconClickedPosition[1]+20,"px")},created:function(){}},C=b,y=(o("3dea"),Object(l["a"])(C,k,w,!1,null,"4d86aab4",null)),_=y.exports,j={name:"Navbar",data:function(){return{contactType:"",iconClickedPosition:"",isContactCardOpen:!1,isWindowTop:!0,showDropdown:!1,sectionPosition:{}}},components:{ContactCard:_},computed:{dynamicToggleBtnImg:function(){return this.showDropdown?"/img/icons/cancel.svg":"/img/icons/menu.svg"}},methods:{setSectionPositions:function(){var t=document.getElementsByTagName("section"),e=!0,o=!1,i=void 0;try{for(var n,a=t[Symbol.iterator]();!(e=(n=a.next()).done);e=!0){var s=n.value;this.sectionPosition[s.className]=this.getOffsetTop(s)}}catch(r){o=!0,i=r}finally{try{e||null==a.return||a.return()}finally{if(o)throw i}}},getOffsetTop:function(t){var e=window.innerWidth<=600?80:130,o=t.getBoundingClientRect();return o.top+window.scrollY-e},toggleDropdown:function(){var t=this;setTimeout((function(){return t.showDropdown=!t.showDropdown}),0)},scrollTo:function(t){var e=t.currentTarget.getAttribute("name");window.scrollTo({left:0,top:this.sectionPosition[e],behavior:"smooth"}),this.showDropdown=!1},selectContact:function(t){var e=this,o=[t.clientX,t.clientY],i=t.target.name;this.contactType=i,this.iconClickedPosition=o,setTimeout((function(){return e.isContactCardOpen=!0}),0)}},created:function(){var t=this;window.addEventListener("resize",(function(){t.setSectionPositions()}))},mounted:function(){var t=this;window.onscroll=function(){t.isWindowTop=window.scrollY<=100};var e=document.getElementsByTagName("body")[0];e.addEventListener("click",(function(e){if(t.isContactCardOpen){e.preventDefault();var o=document.getElementById("ContactCard");o.contains(e.target)||(t.isContactCardOpen=!1)}if(t.showDropdown){e.preventDefault();var i=document.getElementById("dropdownContainer"),n=document.getElementById("dropdownBtn");i.contains(e.target)||e.target==n||(t.showDropdown=!1)}})),this.setSectionPositions()},props:["totalItemCount","checkedItemCount"]},S=j,M=(o("87c7"),Object(l["a"])(S,g,v,!1,null,"844de3b6",null)),T=M.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"ProjectsSection"},[i("div",{staticClass:"menus"},[t._m(0),i("div",{attrs:{name:"justmusic"},on:{click:t.openProjectModal}},[i("img",{attrs:{src:o("53e0"),alt:"play button icon"}}),i("p",[t._v("Just Music (2019)")])]),i("div",{attrs:{name:"jjride"},on:{click:t.openProjectModal}},[i("img",{attrs:{src:o("8307"),alt:"car icon"}}),i("p",[t._v("JJ Ride (2019)")])]),i("div",{attrs:{name:"idealio"},on:{click:t.openProjectModal}},[i("img",{attrs:{src:o("d2e3"),alt:"restaurant icon"}}),i("p",[t._v("Idealio (2018)")])]),i("div",{attrs:{name:"codezen"},on:{click:t.openProjectModal}},[i("img",{attrs:{src:o("5dbe"),alt:"zen circle icon"}}),i("p",[t._v("Codezen (2018)")])])]),t.$store.state.projectModalShow?i("b-modal",{attrs:{centered:"","hide-header":"","hide-footer":"","dialog-class":"menu","content-class":"modalContent shadow-lg border-0 menu","body-class":"p-0 menu",id:"projectModal"},scopedSlots:t._u([{key:"modal-backdrop",fn:function(){},proxy:!0}],null,!1,4096896557)},[i("section",{staticClass:"photoSection",style:"background-image: url("+t.project.bgUrl+")"},[t.$store.state.swiperOn?i("CustomSwiper",{attrs:{photoUrls:t.project.photoUrls,videoUrls:t.videosForDifferentBrowser}}):t._e()],1),i("section",{staticClass:"contentsContainer"},[i("div",{staticClass:"contentsHeader"},[i("button",{staticClass:"closeModalBtn",on:{click:t.closeModal}},[i("img",{attrs:{src:o("7314"),alt:"close button"}})])]),i("div",{staticClass:"modalTextContents"},[i("h3",[t._v(t._s(t.project.title))]),i("p",[t._v(t._s(t.unescapedContents))]),i("a",{attrs:{href:t.project.linkToProject,target:"_blank"}},[i("h4",[t._v("You can check "+t._s(t.project.title)+" here")])])]),i("div",{staticClass:"functions"},[i("div",{staticClass:"booknow"},[i("button",{on:{click:t.openBookingModal}},[i("p",[t._v("DM")])])]),i("div",{staticClass:"buttons"},[i("a",{attrs:{href:"tel:+1-778-792-1407"}},[i("button",[i("img",{attrs:{src:o("fcff"),alt:"phone icon"}})])]),i("a",{attrs:{href:t.project.githubUrl,target:"_blank"}},[i("button",[i("img",{attrs:{src:o("2598"),alt:"github icon"}})])])])]),i("div",{staticClass:"logo"},[i("img",{attrs:{src:o("6cc7")}})])])]):t._e()],1)},I=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"introduction"},[o("h2",[t._v("My Projects")]),o("p",[o("br"),t._v("These are the list of my individual/group projects "),o("br"),t._v("I have worked on ever since I had started coding. "),o("br"),t._v("I didn't post the ones I had participated in a company. "),o("br"),t._v("*FYI, this static website is built with VueJS and Express.js. "),o("a",{attrs:{href:"https://github.com/Jay-Jeong1988/portfolio",target:"_blank"}},[o("small",{staticStyle:{"margin-left":"1em","white-space":"nowrap"}},[t._v("Github --\x3e")])])])])])}],P=(o("a15b"),o("ac1f"),o("1276"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"CustomSwiper"},[o("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption},on:{slideChange:t.slideChange}},[t._l(t.videoUrls,(function(e,i){return o("swiper-slide",{key:"0"+i},[o("video",{staticClass:"swiper-lazy",attrs:{"data-src":e,loop:"",onloadstart:"this.volume=0.1",poster:"http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,w-1000e-usm-2-2-0.8-0.024/video-loading2.png"}},[t._v(" Your browser does not support the video player. ")]),o("div",{staticClass:"swiper-lazy-preloader"})])})),t._l(t.photoUrls,(function(t,e){return o("swiper-slide",{key:e},[o("img",{attrs:{src:t,alt:"project images"}})])})),o("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),o("div",{staticClass:"swiper-button swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),o("div",{staticClass:"swiper-button swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],2)],1)}),$=[],O={name:"CustomSwiper",data:function(){return{hideElements:!0,swiperOption:{slidesPerView:1,spaceBetween:30,lazy:!0,loop:!0,allowTouchMove:window.innerWidth<=600,preventInteractionOnTransition:window.innerWidth>=600,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},methods:{slideChange:function(){"VIDEO"==this.previousSlideElement.tagName&&(this.previousSlideElement.pause(),this.previousSlideElement.currentTime=0),"VIDEO"==this.currentSlideElement.tagName&&this.currentSlideElement.play()},playVideoOnReady:function(){"VIDEO"==this.currentSlideElement.tagName&&this.currentSlideElement.play()}},props:["photoUrls","videoUrls"],computed:{swiper:function(){return this.$refs.mySwiper.swiper},currentSlideElement:function(){var t=this.swiper.slides[this.swiper.activeIndex];return t?t.firstElementChild:{}},previousSlideElement:function(){var t=this.swiper.slides[this.swiper.previousIndex];return t?t.firstElementChild:{}}},components:{},mounted:function(){this.playVideoOnReady()}},E=O,D=(o("5b37"),Object(l["a"])(E,P,$,!1,null,null,null)),B=D.exports,U={data:function(){return{projectModalShow:!1,modalContentName:"justmusic",project:{}}},props:[],methods:{openProjectModal:function(t){var e=this;window.location.hash+=this.$store.state.openProjectModalHashStateId;var o=t.currentTarget.getAttribute("name");this.fetchProject(o),setTimeout((function(){return e.$store.state.swiperOn=!0}),500)},openBookingModal:function(){var t=this;window.location.hash+=this.$store.state.openBookingModalHashStateId,this.$store.state.bookingModalShow=!0,setTimeout((function(){t.$bvModal.show("bookingModal")}),100)},closeModal:function(){this.$bvModal.hide("projectModal")},fetchProject:function(t){var e=this,o="http://jayjeong.xyz:8081/api/v1/projects/getOne",i=o;fetch(i+"/".concat(t)).then((function(t){return t.json()})).then((function(t){e.project=t||{}})).catch((function(t){return alert(t)}))}},computed:{unescapedContents:function(){var t=this.project.contents;return t?t.split("\\n").join("\n"):t},videosForDifferentBrowser:function(){var t={IE:this.$browserDetect.isIE,Chrome:this.$browserDetect.isChrome,Safari:this.$browserDetect.isSafari},e=this.project.videoUrls[0].mp4,o=this.project.videoUrls[0].webm;return t.IE||t.Safari?e:o}},created:function(){},mounted:function(){},components:{CustomSwiper:B}},q=U,A=(o("27ff"),Object(l["a"])(q,x,I,!1,null,null,null)),z=A.exports,N=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"BookingModal"},[o("button",{on:{click:t.openBookingModal}},[o("p",[t._v("Direct Message")])]),t.$store.state.bookingModalShow?o("b-modal",{attrs:{centered:"","hide-footer":"","dialog-class":"","content-class":"shadow-lg bookingPage","body-class":"bookingPage","header-class":"border-0",id:"bookingModal"},scopedSlots:t._u([{key:"modal-header",fn:function(e){e.close;return[o("b-button",{staticStyle:{"background-color":"transparent",border:"none","margin-left":"auto"},attrs:{size:"sm",variant:""},on:{click:function(e){return t.$bvModal.hide("bookingModal")}}},[o("img",{staticStyle:{width:"2em"},attrs:{src:"img/icons/cancel-black.svg",alt:"close icon"}})])]}}],null,!1,580206240)},[o("Booking")],1):t._e()],1)},H=[],R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Booking"},[i("div",{staticClass:"createCardForm"},[i("h1",{staticStyle:{"margin-bottom":"1em"}},[t._v("Direct Message")]),t.responseErrors.length>0?i("div",{staticClass:"errors"},t._l(t.responseErrors,(function(e,o){return i("small",{key:o,staticStyle:{color:"red"}},[t._v(" "+t._s(e.split(":")[1].includes("Cast to Date")?o+1+".Please make sure if date is correct.":o+1+"."+e.split(":")[1])+" "),i("br")])})),0):t._e(),i("div",[i("label",[t._v("Name")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.data.name,expression:"data.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"eg) John Doe"},domProps:{value:t.data.name},on:{input:function(e){e.target.composing||t.$set(t.data,"name",e.target.value)}}})]),i("div",[i("label",[t._v("Phone Number")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.data.phone,expression:"data.phone"}],staticClass:"form-control",attrs:{type:"number",placeholder:"eg) 6047773333"},domProps:{value:t.data.phone},on:{input:function(e){e.target.composing||t.$set(t.data,"phone",e.target.value)}}})]),i("div",[i("label",[t._v("Message")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data.note,expression:"data.note"}],staticClass:"form-control",attrs:{rows:"8",type:"text",placeholder:"Please leave me a message if anything :)"},domProps:{value:t.data.note},on:{input:function(e){e.target.composing||t.$set(t.data,"note",e.target.value)}}})]),i("button",{staticClass:"btn btn-block btn-lg btn-success done",on:{click:t.makeReservation}},[t._v("Send")])]),i("b-modal",{attrs:{centered:"","hide-header":"","hide-footer":"","dialog-class":"","content-class":"border-0 bg-transparent succeeded align-items-center","body-class":"bookingPage succeeded",id:"successModal"},model:{value:t.succeeded,callback:function(e){t.succeeded=e},expression:"succeeded"}},[i("b-button",{staticStyle:{"background-color":"transparent",border:"none","margin-left":"auto"},attrs:{size:"sm",variant:""},on:{click:function(e){return t.closeBookingModal()}}},[i("img",{staticClass:"successIcon",attrs:{src:o("0226"),alt:"success icon"}}),i("h2",[t._v("Message sent. Thank you!")])])],1)],1)},L=[],W={name:"Booking",data:function(){return{data:{name:"",phone:"",note:""},responseErrors:[],succeeded:!1}},computed:{},methods:{closeBookingModal:function(){this.$bvModal.hide("successModal")},makeReservation:function(){var t=this;this.responseErrors=[];var e="http://jayjeong.xyz:8081/api/v1/reservations/create",o=e,i={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify(this.data)};fetch(o,i).then((function(t){return t.json()})).then((function(e){var o=[];if(e.error){o=e.error.split(",");var i=!0,n=!1,a=void 0;try{for(var s,r=o[Symbol.iterator]();!(i=(s=r.next()).done);i=!0){var c=s.value;t.responseErrors.push(c)}}catch(l){n=!0,a=l}finally{try{i||null==r.return||r.return()}finally{if(n)throw a}}}e.ok&&(t.succeeded=!0)})).catch((function(t){console.log(t)}))}},mounted:function(){},components:{},props:[]},J=W,V=(o("e8e2"),Object(l["a"])(J,R,L,!1,null,"96bba6e8",null)),F=V.exports,Y={data:function(){return{}},props:[],computed:{},methods:{openBookingModal:function(){window.location.hash+=this.$store.state.openBookingModalHashStateId}},created:function(){},mounted:function(){},components:{Booking:F}},G=Y,K=(o("7716"),Object(l["a"])(G,N,H,!1,null,null,null)),Z=K.exports,X=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"AboutMeSwiper"},[o("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[t._l(t.photoUrls,(function(t,e){return o("swiper-slide",{key:e},[o("img",{attrs:{src:t,alt:"about me images"}})])})),o("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),o("div",{staticClass:"swiper-button swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),o("div",{staticClass:"swiper-button swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],2)],1)},Q=[],tt={name:"AboutMeSwiper",data:function(){return{swiperOption:{slidesPerView:1,slidesPerGroup:1,loop:!0,speed:800,effect:"cube",allowTouchMove:window.innerWidth<=600,preventInteractionOnTransition:window.innerWidth>=600,cubeEffect:{slideShadows:!1,shadow:!1},pagination:{el:".swiper-pagination",clickable:!1,dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},methods:{},props:["photoUrls"],computed:{swiper:function(){return this.$refs.mySwiper.swiper}},components:{},created:function(){var t=window.innerWidth;this.swiperOption.slidesPerView=t>=660&&t<=924?2:1,this.swiperOption.slidesPerGroup=t>=660&&t<=924?2:1,this.swiperOption.effect=t>=660&&t<=924?"slide":"cube"}},et=tt,ot=(o("6360"),Object(l["a"])(et,X,Q,!1,null,null,null)),it=ot.exports,nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"staffs"},[t._m(0),i("StaffPhotoContainer",{attrs:{staff:t.staffs.owner},on:{selectStaff:t.selectStaff}}),i("StaffPhotoContainer",{attrs:{staff:t.staffs.rick},on:{selectStaff:t.selectStaff}}),i("StaffPhotoContainer",{attrs:{staff:t.staffs.morty},on:{selectStaff:t.selectStaff}}),t.$store.state.staffModalShow?i("b-modal",{attrs:{centered:"","hide-footer":"","hide-header":"","content-class":"shadow-lg staffPage","body-class":"staffPage","header-class":"border-0",id:"staffModal"}},[i("div",{staticClass:"modalContents"},[i("img",{attrs:{src:t.selectedStaff.modalContentsUrl,alt:"resume"}}),i("a",{staticClass:"downloadLink",attrs:{href:t.selectedStaff.pdfDownloadUrl,target:"_blank"}},[i("img",{attrs:{src:o("c482"),alt:"download icon"}}),i("p",[t._v("Download")])])])]):t._e()],1)},at=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h2",[t._v("MEMBERS")])])}],st=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"staffPhotoContainer",class:t.staff.uid,attrs:{name:t.staff.uid},on:{mouseover:t.asyncHoverOn,mouseleave:t.asyncHoverOff,click:t.openStaffModal}},[o("div",{staticClass:"overlay",class:{show:t.onHover}},[o("div",[o("small",[t._v(t._s(t.staff.title))]),o("p",{staticStyle:{"margin-bottom":"5em"}},[t._v(t._s(t.staff.name))]),o("small",{staticStyle:{"font-family":"sans-serif"}},[t._v("Click to see profile")])])])])},rt=[],ct={data:function(){return{onHover:!1}},methods:{openStaffModal:function(t){if(this.onHover){window.location.hash+=this.$store.state.openStaffModalHashStateId;var e=t.currentTarget.getAttribute("name");this.$emit("selectStaff",e)}},asyncHoverOn:function(){var t=this;setTimeout((function(){return t.onHover=!0}),0)},asyncHoverOff:function(){var t=this;setTimeout((function(){return t.onHover=!1}),0)}},props:["staff"]},lt=ct,ut=(o("96da"),Object(l["a"])(lt,st,rt,!1,null,null,null)),dt=ut.exports,pt={data:function(){return{selectedStaff:{},staffs:{owner:{uid:"owner",title:"Web Developer",name:"Jay Jeong",photoUrl:"http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/image.png",modalContentsUrl:"http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,w-1000e-usm-2-2-0.8-0.024/jayjeong_new-resume.png",pdfDownloadUrl:"http://s3-us-west-2.amazonaws.com/jayjeong.xyz/portfolio/jayjeong_resume.pdf"},rick:{uid:"rick",title:"Mad Scientist",name:"Rick",photoUrl:"http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/rick.jpg",modalContentsUrl:"http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,w-1000e-usm-2-2-0.8-0.024/rick-resume.png",pdfDownloadUrl:"https://s3-us-west-2.amazonaws.com/jayjeong.xyz/portfolio/rick-resume.pdf"},morty:{uid:"morty",title:"Rick's Grandson",name:"Morty",photoUrl:"http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/morty.jpg",modalContentsUrl:"http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,w-1000e-usm-2-2-0.8-0.024/morty-missing.png",pdfDownloadUrl:"https://s3-us-west-2.amazonaws.com/jayjeong.xyz/portfolio/morty-missing.png"}}}},computed:{},methods:{selectStaff:function(t){this.selectedStaff=this.staffs[t]}},props:[],components:{StaffPhotoContainer:dt}},ft=pt,mt=(o("9976"),Object(l["a"])(ft,nt,at,!1,null,null,null)),ht=mt.exports,gt={name:"LandingPage",data:function(){return{hoverOnOwner:!1,hoverOnCoach:!1,showTooltip:!1,aboutMePhotoUrls:["http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/laptop.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage00.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage01.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage02.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage03.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage04.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage05.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage06.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage07.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage08.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage09.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage10.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage11.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage13.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage14.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage15.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage16.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage17.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage18.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage19.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage20.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage21.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024,fo-bottom/aboutMeImage22.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage23.jpg"]}},methods:{scrollToTop:function(){window.scrollTo({left:0,top:0,behavior:"smooth"})},handleHashChange:function(){var t=this;window.location.hash?window.location.hash==this.$store.state.openProjectModalHashStateId?(this.$store.state.bookingModalShow=!1,this.$store.state.projectModalShow=!0,setTimeout((function(){t.$bvModal.show("projectModal")}),100)):window.location.hash==this.$store.state.openBookingModalHashStateId?(this.$store.state.bookingModalShow=!0,setTimeout((function(){t.$bvModal.show("bookingModal")}),100)):window.location.hash==this.$store.state.openStaffModalHashStateId&&(this.$store.state.staffModalShow=!0,setTimeout((function(){t.$bvModal.show("staffModal")}),100)):(this.$store.state.swiperOn=!1,this.$store.state.bookingModalShow=!1,this.$store.state.projectModalShow=!1,this.$store.state.staffModalShow=!1)}},computed:{},mounted:function(){var t=this;this.handleHashChange(),window.onhashchange=function(){t.handleHashChange()},this.$refs.mapRef.$mapPromise.then((function(t){t.panTo({lat:49.327973,lng:-123.141709})})),this.$root.$on("bv::modal::hide",(function(){window.history.back()}))},components:{Navbar:T,ProjectsSection:z,BookingModal:Z,AboutMeSwiper:it,StaffsSection:ht}},vt=gt,kt=(o("5df8"),Object(l["a"])(vt,m,h,!1,null,null,null)),wt=kt.exports,bt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ReservationList"},[o("div",{staticClass:"integration"},[o("section",{staticClass:"header"},[o("h1",{staticClass:"title"},[t._v("Messages")]),o("DigitalClock",{attrs:{date:t.date}})],1),o("section",{staticClass:"mainContainer"},[o("table",[t._m(0),t._l(t.reservations,(function(t,e){return o("ReservationListItem",{key:e,attrs:{item:t}})}))],2)])])])},Ct=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("tr",[o("th"),o("th",[t._v("Name")]),o("th",[t._v("Phone Number")]),o("th",[t._v("Sent At")]),o("th",[t._v("Message")])])}],yt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"clock"}},[o("p",{staticClass:"time"},[t._v(t._s(t.dynamicDisplayingTime))])])},_t=[],jt=(o("fb6a"),o("0d03"),o("4d90"),{data:function(){return{displayingTime:(new Date).toLocaleString("ko-KO",{timeZone:"Asia/Seoul"}).split(":").slice(0,2).join(":")}},computed:{dynamicDisplayingTime:function(){var t=new Date,e=String(t.getDate()).padStart(2,"0"),o=String(t.getMonth()+1).padStart(2,"0"),i=t.getFullYear();return t=i+"-"+o+"-"+e,this.date&&this.date!=t?new Date("".concat(this.date)).toLocaleString("ko-KO",{timeZone:"Asia/Seoul"}).split(".").slice(0,3).join("."):this.displayingTime}},methods:{updateTime:function(){this.displayingTime=(new Date).toLocaleString("ko-KO",{timeZone:"Asia/Seoul"}).split(":").slice(0,2).join(":")}},props:["date"],created:function(){var t=this;setInterval((function(){t.updateTime()}),6e4)}}),St=jt,Mt=(o("2470"),Object(l["a"])(St,yt,_t,!1,null,"440ee5a7",null)),Tt=Mt.exports,xt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",{class:{crossed:t.crossed}},[i("td",[i("div",[i("button",{staticClass:"removeBtn",on:{click:t.toggleCross}},[i("img",{attrs:{src:o("7314"),alt:"close icon"}})])])]),i("td",[i("div",[t._v(t._s(t.item.name))])]),i("td",[i("div",[t._v(t._s(t.item.phone))])]),i("td",[i("div",[t._v(" "+t._s(t.createdAtInPST)+" ")])]),i("td",[i("div",[t._v(t._s(t.item.note))])])])},It=[],Pt=(o("99af"),{name:"ReservationListItem",data:function(){return{crossed:!1}},methods:{toggleCross:function(){this.crossed=!this.crossed;var t="http://jayjeong.xyz:8081/api/v1/reservations/updateCrossed",e=t;fetch("".concat(e,"?reservationId=").concat(this.item._id,"&crossed=").concat(this.crossed)).then((function(t){return t.status})).catch((function(t){alert(t)}))}},props:["item"],computed:{createdAtInPST:function(){var t=new Date(this.item.createdAt);return t}},created:function(){this.crossed=this.item.crossed}}),$t=Pt,Ot=(o("553a"),Object(l["a"])($t,xt,It,!1,null,null,null)),Et=Ot.exports,Dt={name:"ReservationList",data:function(){return{date:"",reservations:[]}},methods:{fetchDate:function(){this.fetchReservations()},fetchReservations:function(){var t=this,e="http://jayjeong.xyz:8081/api/v1/reservations/getAll",o=e;fetch(o).then((function(t){return t.json()})).then((function(e){t.reservations=e})).catch((function(t){return alert(t)}))}},computed:{},components:{DigitalClock:Tt,ReservationListItem:Et},created:function(){var t=this;this.fetchReservations();var e=3e5;setInterval((function(){t.fetchReservations()}),e)}},Bt=Dt,Ut=(o("136b"),Object(l["a"])(Bt,bt,Ct,!1,null,null,null)),qt=Ut.exports;i["default"].use(f["a"]);var At=[{path:"/",name:"LandingPage",component:wt},{path:"/reservationList",name:"ReservationList",component:qt}],zt=new f["a"]({mode:"history",base:"/",routes:At}),Nt=zt,Ht=o("2f62");i["default"].use(Ht["a"]);var Rt=new Ht["a"].Store({state:{isAdmin:!1,bookingModalShow:!1,projectModalShow:!1,staffModalShow:!1,openProjectModalHashStateId:"#pmOpen",openBookingModalHashStateId:"#bmOpen",openStaffModalHashStateId:"#smOpen",swiperOn:!1,isMobile:!1},mutations:{},actions:{},modules:{}}),Lt=o("755e"),Wt=o("7212"),Jt=o.n(Wt),Vt=o("d0be"),Ft=o.n(Vt);o("dfa4");i["default"].use(Ft.a),i["default"].use(Jt.a),i["default"].use(Lt,{load:{key:"AIzaSyA4D1IrSyymiDuxH1LUyak7_R9_NNjIFJ4",region:"CA",language:"en"}}),i["default"].config.productionTip=!1,new i["default"]({router:Nt,store:Rt,render:function(t){return t(d)}}).$mount("#app")},5743:function(t,e,o){t.exports=o.p+"img/up-arrow.681edd0e.svg"},"5b37":function(t,e,o){"use strict";var i=o("9424"),n=o.n(i);n.a},"5dbe":function(t,e,o){t.exports=o.p+"img/zen-circle.449bfb74.svg"},"5df8":function(t,e,o){"use strict";var i=o("ce37"),n=o.n(i);n.a},6360:function(t,e,o){"use strict";var i=o("f316"),n=o.n(i);n.a},"6a55":function(t,e,o){t.exports=o.p+"img/linkedin.1dc2ee60.svg"},"6cc7":function(t,e,o){t.exports=o.p+"img/logo-grey.b05858a3.png"},7314:function(t,e,o){t.exports=o.p+"img/error.b2138751.svg"},7711:function(t,e,o){t.exports=o.p+"img/email.16907cb2.svg"},7716:function(t,e,o){"use strict";var i=o("d760"),n=o.n(i);n.a},8307:function(t,e,o){t.exports=o.p+"img/car.2cdf1901.svg"},"85ec":function(t,e,o){},8665:function(t,e,o){t.exports=o.p+"img/smartphone.0809b2c4.svg"},"87c7":function(t,e,o){"use strict";var i=o("1141"),n=o.n(i);n.a},"935c":function(t,e,o){},9424:function(t,e,o){},"96da":function(t,e,o){"use strict";var i=o("5134"),n=o.n(i);n.a},9976:function(t,e,o){"use strict";var i=o("0757"),n=o.n(i);n.a},"9d64":function(t,e,o){t.exports=o.p+"img/logo.83f6ae00.png"},"9ecc":function(t,e,o){},ac27:function(t,e,o){},c482:function(t,e,o){t.exports=o.p+"img/download.08f7856d.svg"},c6c2:function(t,e,o){t.exports=o.p+"img/home.f3da2f4c.svg"},caf7:function(t,e,o){t.exports=o.p+"img/email-color.8583169b.svg"},ce37:function(t,e,o){},cf63:function(t,e,o){t.exports=o.p+"img/phone.d4214122.svg"},d2e3:function(t,e,o){t.exports=o.p+"img/restaurant.92a08257.svg"},d760:function(t,e,o){},e3d6:function(t,e,o){t.exports=o.p+"img/github-image.176ccdf2.svg"},e8e2:function(t,e,o){"use strict";var i=o("ac27"),n=o.n(i);n.a},f316:function(t,e,o){},fcff:function(t,e,o){t.exports=o.p+"img/phone-call-orange.7317f566.svg"}});
//# sourceMappingURL=app.6f755033.js.map