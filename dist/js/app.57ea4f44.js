(function(t){function e(e){for(var i,s,r=e[0],c=e[1],l=e[2],p=0,d=[];p<r.length;p++)s=r[p],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],i=!0,r=1;r<o.length;r++){var c=o[r];0!==n[c]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=o[0]))}return t}var i={},n={app:0},a=[];function s(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=i,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(o,i,function(e){return t[e]}.bind(null,i));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0226":function(t,e,o){t.exports=o.p+"img/checked.33b4ca30.svg"},"034f":function(t,e,o){"use strict";var i=o("85ec"),n=o.n(i);n.a},"111c":function(t,e,o){},"136b":function(t,e,o){"use strict";var i=o("3c35"),n=o.n(i);n.a},2470:function(t,e,o){"use strict";var i=o("111c"),n=o.n(i);n.a},"24f1":function(t,e,o){t.exports=o.p+"img/phone-call.7f3451ed.svg"},2598:function(t,e,o){t.exports=o.p+"img/github-orange.c23c7748.svg"},"27ff":function(t,e,o){"use strict";var i=o("48b5"),n=o.n(i);n.a},"3a07":function(t,e,o){t.exports=o.p+"img/letter.570a02f3.svg"},"3c35":function(t,e,o){},"48b5":function(t,e,o){},5134:function(t,e,o){},"53e0":function(t,e,o){t.exports=o.p+"img/play.dc847044.svg"},"553a":function(t,e,o){"use strict";var i=o("935c"),n=o.n(i);n.a},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"main"}},[o("router-view")],1)])},a=[],s=o("5f5b");o("f9e3"),o("2dd8");i["default"].use(s["a"]);var r={name:"App",components:{},data:function(){return{}},computed:{},methods:{},created:function(){}},c=r,l=(o("034f"),o("2877")),u=Object(l["a"])(c,n,a,!1,null,null,null),p=u.exports,d=o("9483");Object(d["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var m=o("8c4f"),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"LandingPage"},[i("Navbar"),t._m(0),i("section",{staticClass:"aboutUs"},[t._m(1),i("div",[i("AboutMeSwiper",{attrs:{photoUrls:t.aboutMePhotoUrls}})],1)]),i("section",{staticClass:"staffs"},[t._m(2),i("StaffPhotoContainer",{attrs:{staff:t.staffs.owner}}),i("StaffPhotoContainer",{attrs:{staff:t.staffs.rick}}),i("StaffPhotoContainer",{attrs:{staff:t.staffs.morty}})],1),i("ProjectsSection"),i("section",{staticClass:"location"},[t._m(3),i("div",{staticClass:"map"},[i("GmapMap",{ref:"mapRef",staticStyle:{width:"100%","min-height":"70vh"},attrs:{options:{zoomControl:!1,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!0,fullscreenControl:!0,disableDefaultUi:!1},center:{lat:49.327973,lng:-123.141709},zoom:10}},[i("GmapMarker",{attrs:{icon:{url:o("c6c2"),size:{width:40,height:40,f:"px",b:"px"},scaledSize:{width:40,height:40,f:"px",b:"px"}},position:{lat:49.327973,lng:-123.141709},clickable:!0},on:{mouseover:function(e){t.showTooltip=!0},mouseout:function(e){t.showTooltip=!1}}})],1),t.showTooltip?i("div",{staticClass:"customTooltip"},[i("p",[t._v("935 Marine Drive, West Vancouver")]),t._m(4)]):t._e()],1)]),i("section",{staticClass:"footer"},[i("div",{staticClass:"buttons"},[i("button",{staticClass:"navigateToTop",on:{click:t.scrollToTop}},[i("img",{attrs:{src:o("5743"),alt:"up arrow icon"}})]),t._m(5)]),i("div",{staticClass:"booknow"},[i("BookingModal")],1)]),t._m(6)],1)},g=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"banner"},[i("img",{attrs:{src:o("9d64"),alt:"logo"}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"texts"},[o("h3",[t._v("Hi ! I am Jay, a growing developer.")]),o("p",[t._v("I am 2 years experienced full stack web developer. I had studied coding at CodeCore Web Developer College and successfully acquired diploma of web development. After graduation, I had worked as a Front-End web developer in a marketing company for 4 months in 2018-2019, then worked on my own to improve my developement skills. My next goal is to get a new development job in North America and hoping to work in long-term for my next company to advance my career in the tech industry. ")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h2",[t._v("MEMBERS")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h2",[t._v("Where I Am")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticStyle:{"font-size":"1.2em"}},[o("b",[t._v("778 792 1407")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{attrs:{href:"tel:+1-778-792-1407"}},[i("button",{staticClass:"phoneNumber"},[i("img",{attrs:{src:o("24f1"),alt:"phone icon"}})])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"credit"},[o("p",[t._v("©2020 Jay Jeong's Portfolio Website")])])}],f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Navbar",class:{show:!t.isWindowTop}},[i("div",{staticClass:"topContainer"},[t._m(0),t.isMobile?t._e():i("div",{staticClass:"navs"},[i("button",{staticClass:"scrollTo",attrs:{name:"intro"},on:{click:t.scrollTo}},[i("p",[t._v("About Me")])]),i("button",{staticClass:"scrollTo",attrs:{name:"notice"},on:{click:t.scrollTo}},[i("p",[t._v("My Projects")])]),i("button",{staticClass:"scrollTo",attrs:{name:"location"},on:{click:t.scrollTo}},[i("p",[t._v("Where I Am")])]),i("button",{staticClass:"scrollTo",attrs:{name:"book"},on:{click:t.scrollTo}},[i("p",[t._v("Direct Message")])])]),i("div",{staticClass:"contactIcons"},[i("span",[i("img",{attrs:{src:o("7711"),name:"email",alt:"email icon"},on:{click:t.selectContact}}),t.isContactCardOpen&&"email"===t.contactType?i("ContactCard",{attrs:{type:t.contactType,iconClickedPosition:t.iconClickedPosition}}):t._e()],1),i("span",[i("img",{attrs:{src:o("cf63"),name:"phone",alt:"smartphone icon"},on:{click:t.selectContact}}),t.isContactCardOpen&&"phone"===t.contactType?i("ContactCard",{attrs:{type:t.contactType,iconClickedPosition:t.iconClickedPosition}}):t._e()],1),t._m(1)]),t.isMobile?i("button",{staticClass:"toggleDropdownBtn",on:{click:t.toggleDropdown}},[i("img",{attrs:{src:t.dynamicToggleBtnImg,alt:"dropdown icon"}})]):t._e()]),i("div",{staticClass:"dropdownContainer",class:{show:t.showDropdown}},[i("button",{staticClass:"scrollTo",attrs:{name:"intro"},on:{click:t.scrollTo}},[i("p",[t._v("About Me")])]),i("button",{staticClass:"scrollTo",attrs:{name:"notice"},on:{click:t.scrollTo}},[i("p",[t._v("My Projects")])]),i("button",{staticClass:"scrollTo",attrs:{name:"location"},on:{click:t.scrollTo}},[i("p",[t._v("Where I Am")])]),i("button",{staticClass:"scrollTo",attrs:{name:"book"},on:{click:t.scrollTo}},[i("p",[t._v("Contact")])])])])},k=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{attrs:{id:"homeLink",href:""}},[i("img",{attrs:{src:o("9d64")}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{attrs:{href:"https://github.com/Jay-Jeong1988",target:"_blank"}},[i("span",[i("img",{attrs:{src:o("e3d6"),alt:"github icon",name:"github"}})])])}],v=(o("b0c0"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ContactCard",attrs:{id:"ContactCard"}},["phone"===t.type?i("div",{staticClass:"cardContainer"},[i("img",{attrs:{src:o("8665"),alt:"smartphone icon"}}),i("p",[t._v("778 792 1407")])]):t._e(),"katalk"===t.type?i("div",{staticClass:"cardContainer"},[i("img",{attrs:{src:o("90c2"),alt:"kakaotalk icon"}}),i("p",[t._v("hangma12")])]):t._e(),"email"===t.type?i("div",{staticClass:"cardContainer"},[i("img",{attrs:{src:o("caf7"),alt:"email icon"}}),i("p",[t._v("heybro32@gmail.com")])]):t._e()])}),b=[],w={data:function(){return{}},props:["type","iconClickedPosition"],mounted:function(){var t=document.getElementById("ContactCard"),e=t.children[0];e.style.left="".concat(this.iconClickedPosition[0]-100,"px"),e.style.top="".concat(this.iconClickedPosition[1]+20,"px")},created:function(){}},y=w,C=(o("d1d4"),Object(l["a"])(y,v,b,!1,null,"4d17e730",null)),_=C.exports,M={name:"Navbar",data:function(){return{contactType:"",iconClickedPosition:"",isContactCardOpen:!1,isWindowTop:!0,showDropdown:!1}},components:{ContactCard:_},computed:{isMobile:function(){return window.innerWidth<=600},dynamicToggleBtnImg:function(){return this.showDropdown?"/img/icons/cancel.svg":"/img/icons/menu.svg"}},methods:{toggleDropdown:function(){this.showDropdown=!this.showDropdown},scrollTo:function(t){var e=t.currentTarget.getAttribute("name"),o=this.isMobile?{intro:604,notice:2270,location:4495,book:4847}:{intro:614,notice:1595,location:2198,book:2730};window.scrollTo({left:0,top:o[e],behavior:"smooth"}),this.showDropdown=!1},selectContact:function(t){var e=this,o=[t.clientX,t.clientY],i=t.target.name;this.contactType=i,this.iconClickedPosition=o,setTimeout((function(){return e.isContactCardOpen=!0}),0)}},created:function(){},mounted:function(){var t=this;window.onscroll=function(){t.isWindowTop=window.scrollY<=100};var e=this,o=document.getElementsByTagName("body")[0];o.addEventListener("click",(function(t){if(e.isContactCardOpen){t.preventDefault();var o=document.getElementById("ContactCard");o.contains(t.target)||(e.isContactCardOpen=!1)}}))},props:["totalItemCount","checkedItemCount"]},j=M,T=(o("a0bd"),Object(l["a"])(j,f,k,!1,null,"29ba89f3",null)),I=T.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("div",{staticClass:"menus"},[t._m(0),i("div",{staticClass:"lesson",attrs:{name:"lesson"},on:{click:t.openProjectModal}},[i("img",{attrs:{src:o("53e0"),alt:"play icon"}}),i("p",[t._v("Just Music")])]),i("div",{attrs:{name:"question"},on:{click:t.openProjectModal}},[i("img",{attrs:{src:o("8307"),alt:"question mark"}}),i("p",[t._v("JJ Ride")])]),i("div",{attrs:{name:"membership"},on:{click:t.openProjectModal}},[i("img",{attrs:{src:o("d2e3"),alt:"membership card icon"}}),i("p",[t._v("Idealio")])]),i("div",{attrs:{name:"community"},on:{click:t.openProjectModal}},[i("img",{attrs:{src:o("3a07"),alt:"networking icon"}}),i("p",[t._v("Birthday Letter")])]),i("div",{attrs:{name:"newFeed"},on:{click:t.openProjectModal}},[i("img",{attrs:{src:o("5dbe"),alt:"new arrival"}}),i("p",[t._v("Codezen")])])]),t.$store.state.projectModalShow?i("b-modal",{attrs:{centered:"","hide-header":"","hide-footer":"","dialog-class":"menu","content-class":"modalContent shadow-lg border-0 menu","body-class":"p-0 menu",id:"projectModal"},scopedSlots:t._u([{key:"modal-backdrop",fn:function(){},proxy:!0}],null,!1,4096896557)},[i("section",{staticClass:"photoSection",style:"background-image: url("+t.computedContents.dynamicBg+")"},[t.swiperOn?i("CustomSwiper",{attrs:{photoUrls:t.computedContents.dynamicPhotoUrls}}):t._e()],1),i("section",{staticClass:"contentsContainer"},[i("div",{staticClass:"contentsHeader"},[i("button",{staticClass:"closeModalBtn",on:{click:function(e){return t.$bvModal.hide("projectModal")}}},[i("img",{attrs:{src:o("7314"),alt:"close button"}})])]),i("div",{staticClass:"modalTextContents"},[i("h3",[t._v(t._s(t.computedContents.textTitle))]),i("p",[t._v(t._s(t.computedContents.textContent))]),i("a",{attrs:{href:t.computedContents.linkToProject,target:"_blank"}},[i("h4",[t._v("You can check "+t._s(t.computedContents.textTitle)+" here")])])]),i("div",{staticClass:"functions"},[i("div",{staticClass:"booknow"},[i("button",{on:{click:t.openBookingModal}},[i("p",[t._v("DM")])])]),i("div",{staticClass:"buttons"},[i("a",{attrs:{href:"tel:+1-778-792-1407"}},[i("button",[i("img",{attrs:{src:o("fcff"),alt:"phone icon"}})])]),i("a",{attrs:{href:t.computedContents.githubUrl,target:"_blank"}},[i("button",[i("img",{attrs:{src:o("2598"),alt:"github icon"}})])])])]),i("div",{staticClass:"logo"},[i("img",{attrs:{src:o("6cc7")}})])])]):t._e()],1)},S=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"introduction"},[o("h2",[t._v("My Projects")]),o("p",[o("br"),t._v("These are the list of my individual/group projects "),o("br"),t._v("I have worked on ever since I had started coding. "),o("br"),t._v("I didn't post the ones I had participated in a company. "),o("br"),t._v("*FYI, this static website is built with VueJS and Express.js. ")])])}],P=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"CustomSwiper"},[o("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[t._l(t.photoUrls,(function(t,e){return o("swiper-slide",{key:e},[o("img",{attrs:{src:t,alt:"project images"}})])})),o("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),o("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),o("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],2)],1)},A=[],O={name:"CustomSwiper",data:function(){return{swiperOption:{slidesPerView:1,spaceBetween:30,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},methods:{},props:["photoUrls"],computed:{swiper:function(){return this.$refs.mySwiper.swiper}},components:{},mounted:function(){}},q=O,$=(o("5b37"),Object(l["a"])(q,P,A,!1,null,null,null)),E=$.exports,U={data:function(){return{projectModalShow:!1,swiperOn:!1,modalContentName:"lesson",contentsTypes:{lesson:{title:"JustMusic - Random Youtube Music Video Player (Beta)",contents:"Hi all, I have just launched my first mobile app ever! The name of the app is JustMusic (please search as justmusic without a space between each word, not Just Music, on Play Store, otherwise it won't show 😭) and it is for android only. I first got the idea when I saw my dad trying to listen to music, but most modern music players were too difficult for him to use. I thought it'd be great if I could make a music player app with a simpler interface so other older people my dad's age can easily use it. It didn’t turn out as good as I had hoped, but I wanted to finish it anyways and here it is now 😄I've built it from scratch and spent 5 hours daily on average for 3 months to completion. \n\nTech stacks I used are: \n\nLanguages/Frameworks: \nDart/Flutter(Front-End)\nNode.js/Express.js/MongoDB/Mongoose(Back-End)\n\nFlutter Plugins: \ngeolocator\nfirebase\nyoutube_player_flutter \ndevice_info \nshared_preferences \nfluttertoast \ndotted_border \nimage_cropper \nimage_picker \nflutter_launcher_icons \nflutter_svg \nhtml_unescape \nads \n\nThe server is running on an AWS EC2 instance and because it is also my first time launching my own production server using AWS, it would be really appreciated if you could tell me what possible issues are when launching servers at AWS. Anyways, please check my app and let me know if anything could be improved. I'd be glad to hear all feedback! Thank you!",bgUrl:"http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,w-1000e-usm-2-2-0.8-0.024/jm-bg00.png",photoUrls:["http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,w-1000e-usm-2-2-0.8-0.024/jm-banner00.png","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,w-1000e-usm-2-2-0.8-0.024/jm-banner01.png","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,w-1000e-usm-2-2-0.8-0.024/jm-banner02.png","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,w-1000e-usm-2-2-0.8-0.024/jm-banner03.png","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,w-1000e-usm-2-2-0.8-0.024/jm-banner04.png","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,w-1000e-usm-2-2-0.8-0.024/jm-banner05.png","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,w-1000e-usm-2-2-0.8-0.024/jm-banner06.png","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,w-1000e-usm-2-2-0.8-0.024/jm-banner07.png"],linkToProject:"https://play.google.com/store/apps/details?id=com.random.JustMusic",githubUrl:"https://github.com/Jay-Jeong1988/JustMusic"},question:{title:"Info",contents:"It was a weird concept. Why would I really need to generate a random paragraph? Could I actually learn something from doing so? All these questions were running through her head as she pressed the generate button. To her surprise, she found what she least expected to see.",bgUrl:"",photoUrls:["http://ik.imagekit.io/kitkitkitit/guibinpingpong/tr:q-100,w-1000e-usm-2-2-0.8-0.024/table-tennies.jpg"],linkToProject:"",githubUrl:"https://github.com/Jay-Jeong1988/JustMusic"},membership:{title:"Membership",contents:"There wasn't a bird in the sky, but that was not what caught her attention. It was the clouds. The deep green that isn't the color of clouds, but came with these. She knew what was coming and she hoped she was prepared.",bgUrl:"",photoUrls:["http://ik.imagekit.io/kitkitkitit/guibinpingpong/tr:q-100,w-1000e-usm-2-2-0.8-0.024/tabletennis.jpg"],linkToProject:"",githubUrl:"https://github.com/Jay-Jeong1988/JustMusic"},community:{title:"Community",contents:'The robot clicked disapprovingly, gurgled briefly inside its cubical interior and extruded a pony glass of brownish liquid. ",Sir, you will undoubtedly end up in a drunkard\'s grave, dead of hepatic cirrhosis," it informed me virtuously as it returned my ID card. I glared as I pushed the glass across the table.',bgUrl:"",photoUrls:["http://ik.imagekit.io/kitkitkitit/guibinpingpong/tr:q-100,w-1000e-usm-2-2-0.8-0.024/Table-Tennis-0001.jpg"],linkToProject:"",githubUrl:"https://github.com/Jay-Jeong1988/JustMusic"},newFeed:{title:"News",contents:"I recollect that my first exploit in squirrel-shooting was in a grove of tall walnut-trees that shades one side of the valley. I had wandered into it at noontime, when all nature is peculiarly quiet, and was startled by the roar of my own gun, as it broke the Sabbath stillness around and was prolonged and reverberated by the angry echoes.",bgUrl:"",photoUrls:["http://ik.imagekit.io/kitkitkitit/guibinpingpong/tr:q-100,w-1000e-usm-2-2-0.8-0.024/Table-Tennis-0001.jpg"],linkToProject:"",githubUrl:"https://github.com/Jay-Jeong1988/JustMusic"}}}},props:[],methods:{openProjectModal:function(t){window.location.hash+=this.$store.state.openProjectModalHashStateId,this.modalContentName=t.currentTarget.getAttribute("name")},openBookingModal:function(){var t=this;window.location.hash+=this.$store.state.openBookingModalHashStateId,this.$store.state.bookingModalShow=!0,setTimeout((function(){t.$bvModal.show("bookingModal")}),100)}},computed:{computedContents:function(){var t=this.contentsTypes[this.modalContentName];return{textTitle:t.title,textContent:t.contents,dynamicPhotoUrls:t.photoUrls,dynamicBg:t.bgUrl,linkToProject:t.linkToProject,githubUrl:t.githubUrl}}},created:function(){},mounted:function(){var t=this;setTimeout((function(){t.swiperOn=!0}),100)},components:{CustomSwiper:E}},B=U,D=(o("27ff"),Object(l["a"])(B,x,S,!1,null,null,null)),J=D.exports,N=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"modalview"}},[o("button",{on:{click:t.openBookingModal}},[o("p",[t._v("Direct Message")])]),t.$store.state.bookingModalShow?o("b-modal",{attrs:{centered:"","hide-footer":"","dialog-class":"","content-class":"shadow-lg bookingPage","body-class":"bookingPage","header-class":"border-0",id:"bookingModal"},scopedSlots:t._u([{key:"modal-header",fn:function(e){e.close;return[o("b-button",{staticStyle:{"background-color":"transparent",border:"none","margin-left":"auto"},attrs:{size:"sm",variant:""},on:{click:function(e){return t.$bvModal.hide("bookingModal")}}},[o("img",{staticStyle:{width:"2em"},attrs:{src:"img/icons/cancel-black.svg",alt:"close icon"}})])]}}],null,!1,580206240)},[o("Booking")],1):t._e()],1)},L=[],R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Booking"},[i("div",{staticClass:"createCardForm"},[i("h1",{staticStyle:{"margin-bottom":"1em"}},[t._v("Direct Message")]),t.responseErrors.length>0?i("div",{staticClass:"errors"},t._l(t.responseErrors,(function(e,o){return i("small",{key:o,staticStyle:{color:"red"}},[t._v(" "+t._s(e.split(":")[1].includes("Cast to Date")?o+1+".Please make sure if date is correct.":o+1+"."+e.split(":")[1])+" "),i("br")])})),0):t._e(),i("div",[i("label",[t._v("Name")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.data.name,expression:"data.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"eg) John Doe"},domProps:{value:t.data.name},on:{input:function(e){e.target.composing||t.$set(t.data,"name",e.target.value)}}})]),i("div",[i("label",[t._v("Phone Number")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.data.phone,expression:"data.phone"}],staticClass:"form-control",attrs:{type:"number",placeholder:"eg) 6047773333"},domProps:{value:t.data.phone},on:{input:function(e){e.target.composing||t.$set(t.data,"phone",e.target.value)}}})]),i("div",[i("label",[t._v("Message")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.data.note,expression:"data.note"}],staticClass:"form-control",attrs:{rows:"8",type:"text",placeholder:"Please leave me a message if anything :)"},domProps:{value:t.data.note},on:{input:function(e){e.target.composing||t.$set(t.data,"note",e.target.value)}}})]),i("button",{staticClass:"btn btn-block btn-lg btn-success done",on:{click:t.makeReservation}},[t._v("Send")])]),i("b-modal",{attrs:{centered:"","hide-header":"","hide-footer":"","dialog-class":"","content-class":"border-0 bg-transparent succeeded align-items-center","body-class":"bookingPage succeeded",id:"successModal"},model:{value:t.succeeded,callback:function(e){t.succeeded=e},expression:"succeeded"}},[i("b-button",{staticStyle:{"background-color":"transparent",border:"none","margin-left":"auto"},attrs:{size:"sm",variant:""},on:{click:function(e){return t.closeBookingModal()}}},[i("img",{staticClass:"successIcon",attrs:{src:o("0226"),alt:"success icon"}}),i("h2",[t._v("Message sent. Thank you!")])])],1)],1)},F=[],W=(o("a4d3"),o("e01a"),o("d28b"),o("d3b7"),o("ac1f"),o("3ca3"),o("1276"),o("ddb0"),{name:"Booking",data:function(){return{data:{name:"",phone:"",note:""},responseErrors:[],succeeded:!1}},computed:{},methods:{closeBookingModal:function(){this.$bvModal.hide("successModal")},makeReservation:function(){var t=this;this.responseErrors=[];var e="http://jayjeong.xyz:8081/api/v1/reservations/create",o=e,i={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify(this.data)};fetch(o,i).then((function(t){return t.json()})).then((function(e){var o=[];if(e.error){o=e.error.split(",");var i=!0,n=!1,a=void 0;try{for(var s,r=o[Symbol.iterator]();!(i=(s=r.next()).done);i=!0){var c=s.value;t.responseErrors.push(c)}}catch(l){n=!0,a=l}finally{try{i||null==r.return||r.return()}finally{if(n)throw a}}}e.ok&&(t.succeeded=!0)})).catch((function(t){console.log(t)}))}},mounted:function(){},components:{},props:[]}),H=W,z=(o("e8e2"),Object(l["a"])(H,R,F,!1,null,"96bba6e8",null)),V=z.exports,G={data:function(){return{}},props:[],computed:{},methods:{openBookingModal:function(){window.location.hash+=this.$store.state.openBookingModalHashStateId}},created:function(){},mounted:function(){},components:{Booking:V}},Q=G,Y=(o("7716"),Object(l["a"])(Q,N,L,!1,null,null,null)),K=Y.exports,X=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"AboutMeSwiper"},[o("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},[t._l(t.photoUrls,(function(t,e){return o("swiper-slide",{key:e},[o("img",{attrs:{src:t,alt:"about me images"}})])})),o("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),o("div",{staticClass:"swiper-button swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),o("div",{staticClass:"swiper-button swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],2)],1)},Z=[],tt={name:"AboutMeSwiper",data:function(){return{swiperOption:{slidesPerView:1,spaceBetween:30,loop:!0,pagination:{el:".swiper-pagination",clickable:!1,dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},methods:{},props:["photoUrls"],computed:{swiper:function(){return this.$refs.mySwiper.swiper}},components:{},mounted:function(){}},et=tt,ot=(o("6360"),Object(l["a"])(et,X,Z,!1,null,null,null)),it=ot.exports,nt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"staffPhotoContainer",class:t.staff.uid,on:{mouseover:function(e){t.onHover=!0},mouseleave:function(e){t.onHover=!1}}},[o("div",{staticClass:"overlay",class:{show:t.onHover}},[o("div",[o("p",{staticStyle:{"margin-bottom":"0"}}),o("p",[o("small",[t._v(t._s(t.staff.title))])]),o("p",[t._v(t._s(t.staff.name))])])])])},at=[],st={data:function(){return{onHover:!1}},props:["staff"]},rt=st,ct=(o("96da"),Object(l["a"])(rt,nt,at,!1,null,null,null)),lt=ct.exports,ut={name:"LandingPage",data:function(){return{staffs:{owner:{uid:"owner",title:"Web Developer",name:"Jay Jeong",photoUrl:"http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/image.png"},rick:{uid:"rick",title:"Senior Developer",name:"Rick",photoUrl:"http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/rick.jpg"},morty:{uid:"morty",title:"Morty",name:"Morty",photoUrl:"http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/morty.jpg"}},hoverOnOwner:!1,hoverOnCoach:!1,showTooltip:!1,aboutMePhotoUrls:["http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/laptop.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage00.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage01.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage02.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage03.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage04.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage05.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage06.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage07.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage08.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage09.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage10.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage11.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage13.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage14.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage15.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage16.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage17.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage18.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage19.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage20.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage21.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024,fo-bottom/aboutMeImage22.jpg","http://ik.imagekit.io/kitkitkitit/portfolio/tr:q-100,ar-5-5,w-1000e-usm-2-2-0.8-0.024/aboutMeImage23.jpg"]}},methods:{scrollToTop:function(){window.scrollTo({left:0,top:0,behavior:"smooth"})}},computed:{},mounted:function(){var t=this;window.onhashchange=function(){window.location.hash?window.location.hash==t.$store.state.openProjectModalHashStateId?(t.$store.state.bookingModalShow=!1,t.$store.state.projectModalShow=!0,setTimeout((function(){t.$bvModal.show("projectModal")}),100)):window.location.hash==t.$store.state.openBookingModalHashStateId&&(t.$store.state.bookingModalShow=!0,setTimeout((function(){t.$bvModal.show("bookingModal")}),100)):(t.$store.state.bookingModalShow=!1,t.$store.state.projectModalShow=!1)},this.$refs.mapRef.$mapPromise.then((function(t){t.panTo({lat:49.327973,lng:-123.141709})})),this.$root.$on("bv::modal::hide",(function(){window.history.back()}))},components:{Navbar:I,ProjectsSection:J,BookingModal:K,AboutMeSwiper:it,StaffPhotoContainer:lt}},pt=ut,dt=(o("5df8"),Object(l["a"])(pt,h,g,!1,null,null,null)),mt=dt.exports,ht=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"ReservationList"},[o("div",{staticClass:"integration"},[o("section",{staticClass:"header"},[o("h1",{staticClass:"title"},[t._v("Messages")]),o("DigitalClock",{attrs:{date:t.date}})],1),o("section",{staticClass:"mainContainer"},[o("table",[t._m(0),t._l(t.reservations,(function(t,e){return o("ReservationListItem",{key:e,attrs:{item:t}})}))],2)])])])},gt=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("tr",[o("th"),o("th",[t._v("Name")]),o("th",[t._v("Phone Number")]),o("th",[t._v("Sent At")]),o("th",[t._v("Message")])])}],ft=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"clock"}},[o("p",{staticClass:"time"},[t._v(t._s(t.dynamicDisplayingTime))])])},kt=[],vt=(o("a15b"),o("fb6a"),o("0d03"),o("4d90"),{data:function(){return{displayingTime:(new Date).toLocaleString("ko-KO",{timeZone:"Asia/Seoul"}).split(":").slice(0,2).join(":")}},computed:{dynamicDisplayingTime:function(){var t=new Date,e=String(t.getDate()).padStart(2,"0"),o=String(t.getMonth()+1).padStart(2,"0"),i=t.getFullYear();return t=i+"-"+o+"-"+e,this.date&&this.date!=t?new Date("".concat(this.date)).toLocaleString("ko-KO",{timeZone:"Asia/Seoul"}).split(".").slice(0,3).join("."):this.displayingTime}},methods:{updateTime:function(){this.displayingTime=(new Date).toLocaleString("ko-KO",{timeZone:"Asia/Seoul"}).split(":").slice(0,2).join(":")}},props:["date"],created:function(){var t=this;setInterval((function(){t.updateTime()}),6e4)}}),bt=vt,wt=(o("2470"),Object(l["a"])(bt,ft,kt,!1,null,"440ee5a7",null)),yt=wt.exports,Ct=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",{class:{crossed:t.crossed}},[i("td",[i("div",[i("button",{staticClass:"removeBtn",on:{click:t.toggleCross}},[i("img",{attrs:{src:o("7314"),alt:"close icon"}})])])]),i("td",[i("div",[t._v(t._s(t.item.name))])]),i("td",[i("div",[t._v(t._s(t.item.phone))])]),i("td",[i("div",[t._v(" "+t._s(t.createdAtInPST)+" ")])]),i("td",[i("div",[t._v(t._s(t.item.note))])])])},_t=[],Mt=(o("99af"),{name:"ReservationListItem",data:function(){return{crossed:!1}},methods:{toggleCross:function(){this.crossed=!this.crossed;var t="http://jayjeong.xyz:8081/api/v1/reservations/updateCrossed",e=t;fetch("".concat(e,"?reservationId=").concat(this.item._id,"&crossed=").concat(this.crossed)).then((function(t){return t.status})).catch((function(t){alert(t)}))}},props:["item"],computed:{createdAtInPST:function(){var t=new Date(this.item.createdAt);return t}},created:function(){this.crossed=this.item.crossed}}),jt=Mt,Tt=(o("553a"),Object(l["a"])(jt,Ct,_t,!1,null,null,null)),It=Tt.exports,xt={name:"ReservationList",data:function(){return{date:"",reservations:[]}},methods:{fetchDate:function(){this.fetchReservations()},fetchReservations:function(){var t=this,e="http://jayjeong.xyz:8081/api/v1/reservations/getAll",o=e;fetch(o).then((function(t){return t.json()})).then((function(e){t.reservations=e})).catch((function(t){return alert(t)}))}},computed:{},components:{DigitalClock:yt,ReservationListItem:It},created:function(){var t=this;this.fetchReservations();var e=3e5;setInterval((function(){t.fetchReservations()}),e)}},St=xt,Pt=(o("136b"),Object(l["a"])(St,ht,gt,!1,null,null,null)),At=Pt.exports;i["default"].use(m["a"]);var Ot=[{path:"/",name:"LandingPage",component:mt},{path:"/reservationList",name:"ReservationList",component:At}],qt=new m["a"]({mode:"history",base:"/",routes:Ot}),$t=qt,Et=o("2f62");i["default"].use(Et["a"]);var Ut=new Et["a"].Store({state:{isAdmin:!1,bookingModalShow:!1,projectModalShow:!1,openProjectModalHashStateId:"#pmOpen",openBookingModalHashStateId:"#bmOpen"},mutations:{setAdmin:function(t){var e=localStorage.getItem("adminKey");e&&"MIIBOQIBAAJAWw/d2k7AJxDh3ey/TM1yvXojvjbZdf06EzazVr6ZW/iOqot4fyJqtvX/vdvTlU/ekpgpQf+GI2IeE0Mo+OeURwIDAQABAkAcIlLQ1/PWHgkqn7Ka7/67O7k/U4LsSUhgF05hRpHrMAmdCAYFIs2acd1+8FJriCzhlD8p6Bb9TIPMzedy1rtBAiEAonTfo8iVFhmbn3i8cXU0nLGlKWrgb96uNpB6w79SBh0CIQCPfvsxGFmCXgrgT3eQtHRcjxumjUtgpL84AZkbRykmswIhAJloolNos5hWAEY8Xj8JvfAGNQAChARAFOVD1BoLDerlAiAfTlrLGT7d/FpvGadCQLxqPSaRLZ5WVVsKgv6+PsYxlQIgSGWF72fC+0CooXlFUtODx5qbOxvgdJKk5s6mNkEWCvs="===e&&(t.isAdmin=!0)}},actions:{},modules:{}}),Bt=o("755e"),Dt=o("7212"),Jt=o.n(Dt);o("dfa4");i["default"].use(Jt.a),i["default"].use(Bt,{load:{key:"AIzaSyA4D1IrSyymiDuxH1LUyak7_R9_NNjIFJ4",region:"CA",language:"en"}}),i["default"].config.productionTip=!1,new i["default"]({router:$t,store:Ut,render:function(t){return t(p)}}).$mount("#app")},5743:function(t,e,o){t.exports=o.p+"img/up-arrow.681edd0e.svg"},"5b37":function(t,e,o){"use strict";var i=o("9424"),n=o.n(i);n.a},"5dbe":function(t,e,o){t.exports=o.p+"img/zen-circle.449bfb74.svg"},"5df8":function(t,e,o){"use strict";var i=o("ce37"),n=o.n(i);n.a},6360:function(t,e,o){"use strict";var i=o("f316"),n=o.n(i);n.a},"6cc7":function(t,e,o){t.exports=o.p+"img/logo-grey.b05858a3.png"},7314:function(t,e,o){t.exports=o.p+"img/error.b2138751.svg"},7711:function(t,e,o){t.exports=o.p+"img/email.16907cb2.svg"},7716:function(t,e,o){"use strict";var i=o("d760"),n=o.n(i);n.a},8307:function(t,e,o){t.exports=o.p+"img/car.2cdf1901.svg"},"85ec":function(t,e,o){},8665:function(t,e,o){t.exports=o.p+"img/smartphone.0809b2c4.svg"},"90c2":function(t,e,o){t.exports=o.p+"img/kakao-talk.5d676a2a.svg"},"935c":function(t,e,o){},9424:function(t,e,o){},"96da":function(t,e,o){"use strict";var i=o("5134"),n=o.n(i);n.a},"9d64":function(t,e,o){t.exports=o.p+"img/logo.83f6ae00.png"},a0bd:function(t,e,o){"use strict";var i=o("ccb9"),n=o.n(i);n.a},ac27:function(t,e,o){},c6c2:function(t,e,o){t.exports=o.p+"img/home.f3da2f4c.svg"},caf7:function(t,e,o){t.exports=o.p+"img/email-color.8583169b.svg"},ccb9:function(t,e,o){},ce37:function(t,e,o){},cf63:function(t,e,o){t.exports=o.p+"img/phone.d4214122.svg"},d1d4:function(t,e,o){"use strict";var i=o("ff4f"),n=o.n(i);n.a},d2e3:function(t,e,o){t.exports=o.p+"img/restaurant.92a08257.svg"},d760:function(t,e,o){},e3d6:function(t,e,o){t.exports=o.p+"img/github-image.176ccdf2.svg"},e8e2:function(t,e,o){"use strict";var i=o("ac27"),n=o.n(i);n.a},f316:function(t,e,o){},fcff:function(t,e,o){t.exports=o.p+"img/phone-call-orange.7317f566.svg"},ff4f:function(t,e,o){}});
//# sourceMappingURL=app.57ea4f44.js.map