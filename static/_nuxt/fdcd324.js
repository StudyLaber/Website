(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{378:function(t,e,n){"use strict";var o={name:"Page"},r=n(2),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"page-inner"},[t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},379:function(t,e,n){var content=n(383);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("906f7bbc",content,!0,{sourceMap:!1})},380:function(t,e,n){var content=n(385);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("6b050436",content,!0,{sourceMap:!1})},381:function(t,e,n){var content=n(387);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("1d074662",content,!0,{sourceMap:!1})},382:function(t,e,n){"use strict";n(379)},383:function(t,e,n){var o=n(4)(!1);o.push([t.i,'.app-icon{display:block;width:156px;height:156px;text-indent:-9999px;background:transparent url(https://s.motrix.app/images/app-icon-square.png) 50% no-repeat;background-image:url(https://s.motrix.app/images/app-icon-square.png)}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi){.app-icon{background-image: url(https://s.motrix.app/images/app-icon-square@2x.png)}}.app-icon{background-image:-webkit-image-set(url("https://s.motrix.app/images/app-icon-square.png") 1x,url("https://s.motrix.app/images/app-icon-square@2x.png") 2x);background-size:100% 100%}.app-icon>a{display:block;width:100%;height:100%}@media screen and (min-width:415px){.app-icon{width:234px;height:234px}}',""]),t.exports=o},384:function(t,e,n){"use strict";n(380)},385:function(t,e,n){var o=n(4)(!1);o.push([t.i,".download-btn{display:inline-block;width:180px;height:16px;text-align:center;vertical-align:middle;background-color:#2b2b2b;font-size:0;line-height:0;font-weight:700;border-radius:20px;padding:12px 0;border:none;transition:all .5s cubic-bezier(.08,.82,.17,1)}.download-btn>a,.download-btn>span{font-size:16px;line-height:16px;display:inline-block;vertical-align:middle;color:#fff;font-size:14px}.download-btn .download-link{padding-left:16px;font-size:16px;font-weight:400;margin-right:10px}.download-popover{padding-left:0;padding-right:0}.select-platform{cursor:pointer;width:40px;font-size:0;text-align:center;outline:none}.select-platform>i{margin-right:8px}.select-platform>i,.select-platform>span{display:inline-block;vertical-align:middle;height:16px;line-height:16px}.platform-list{list-style:none;font-size:16px;padding:0;margin:0}.platform-list>li{cursor:pointer;padding:10px 16px;font-size:0}.platform-list>li>i{margin-right:12px}.platform-list>li>i,.platform-list>li>span{display:inline-block;vertical-align:middle;font-size:16px;height:16px;line-height:16px}.platform-list>li:hover,.platform-list>li:hover>a{background-color:#5c5edc;color:#fff}",""]),t.exports=o},386:function(t,e,n){"use strict";n(381)},387:function(t,e,n){var o=n(4)(!1);o.push([t.i,".version{display:inline-block;font-size:16px;color:#222;line-height:40px}.version>sup{padding-left:5px;font-weight:700;color:#5c5edc}",""]),t.exports=o},388:function(t,e,n){"use strict";var o={name:"AppIcon",props:{link:{type:String,default:""}}},r=(n(382),n(2)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-icon"},[t.link?n("a",{attrs:{href:t.link}},[t._v("\n    Motrix\n  ")]):t._e()])}),[],!1,null,null,null);e.a=component.exports},389:function(t,e,n){"use strict";var o=n(55),r={macOS:"apple",Windows:"windows",Linux:"linux"},l={name:"DownloadButton",components:{},props:{version:{type:String,default:""},defaultPlatform:{type:String,default:"unknown"}},data:function(){return{platform:this.defaultPlatform,visible:!1}},computed:{currentIcon:function(){var t="unknown"!==this.platform?this.platform:"macOS";return r[t]||""},downloadLink:function(){var t="unknown"!==this.platform?this.platform:"macOS";return Object(o.a)(t,this.version)},releaseLink:function(){var t=this.version;return"https://github.com/agalwood/Motrix/releases/tag/".concat(t)}},mounted:function(){this.$nextTick((function(){"unknown"===this.platform&&(this.platform=Object(o.c)(navigator.userAgent,"macOS"))}))},methods:{changePlatform:function(t){t&&(this.platform=t,this.visible=!1)},togglePopover:function(){this.visible=!this.visible},openRelease:function(){window.location.href=this.releaseLink}}},c=(n(384),n(2)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"download-btn"},[n("a",{staticClass:"download-link",attrs:{href:t.downloadLink}},[t._v("\n    "+t._s(t.$t("common.download-btn-text"))+"\n  ")]),t._v(" "),n("el-popover",{attrs:{"popper-class":"download-popover",placement:"bottom",width:"200"},on:{click:t.togglePopover},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("div",{staticClass:"select-platform",attrs:{slot:"reference"},slot:"reference"},[n("i",[n("mo-icon",{attrs:{name:t.currentIcon,width:"14",height:"16"}})],1),t._v(" "),n("span",[n("mo-icon",{attrs:{name:"arrow-down",width:"10",height:"16"}})],1)]),t._v(" "),t._t("default",[n("ul",{staticClass:"platform-list"},[n("li",{on:{click:function(){return t.changePlatform("macOS")}}},[n("i",[n("mo-icon",{attrs:{name:"apple",width:"16",height:"16"}})],1),t._v(" "),n("span",[t._v("macOS (dmg)")])]),t._v(" "),n("li",{on:{click:function(){return t.changePlatform("Windows")}}},[n("i",[n("mo-icon",{attrs:{name:"windows",width:"16",height:"16"}})],1),t._v(" "),n("span",[t._v("Windows (exe)")])]),t._v(" "),n("li",{on:{click:function(){return t.changePlatform("Linux")}}},[n("i",[n("mo-icon",{attrs:{name:"linux",width:"16",height:"16"}})],1),t._v(" "),n("span",[t._v("Linux (AppImage)")])]),t._v(" "),n("li",{on:{click:function(){return t.openRelease()}}},[n("span",[t._v("\n            "+t._s(t.$t("home.other-formats"))+"\n          ")])])])])],2)],1)}),[],!1,null,null,null);e.a=component.exports},390:function(t,e,n){"use strict";var o={name:"Version",props:{version:{type:String,default:""}},computed:{link:function(){return"https://github.com/agalwood/Motrix/releases/tag/".concat(this.version)}}},r=(n(386),n(2)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.version?n("a",{staticClass:"version",attrs:{href:t.link}},[t._v("\n  "+t._s(t.version)+"\n  "),n("sup",[t._v("New")])]):t._e()}),[],!1,null,null,null);e.a=component.exports},396:function(t,e,n){"use strict";var o={name:"Screenshot"},r=n(2),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("figure",{staticClass:"poster"},[n("img",{attrs:{src:t.$t("common.screenshot"),alt:"Motrix"}})])}),[],!1,null,null,null);e.a=component.exports},412:function(t,e,n){var content=n(422);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("a34198da",content,!0,{sourceMap:!1})},421:function(t,e,n){"use strict";n(412)},422:function(t,e,n){var o=n(4)(!1);o.push([t.i,".firework{position:fixed;top:32vh;left:10vw;font-size:64px;line-height:0;opacity:0;z-index:100}.view-features{margin-top:1rem;color:#5c5edc}.view-features .view-features-link{display:inline-block;font-size:1rem;font-weight:500;cursor:pointer}.view-features .view-features-link>i,.view-features .view-features-link>span{display:inline-block;vertical-align:middle;height:24px;line-height:24px}.other-links{margin-top:48px;line-height:20px}.other-links a{display:inline-block;font-size:0;line-height:20px;color:#666}.other-links a:hover{color:#5c5edc}.other-links a>span{margin-left:8px;font-size:14px}.other-links a>i,.other-links a>span{display:inline-block;vertical-align:middle;height:20px;line-height:20px}@media screen and (min-width:1200px){.firework{top:40vh}.page-home .app-icon{margin-top:9.5vh}}",""]),t.exports=o},423:function(t,e,n){"use strict";n.r(e);n(36),n(22),n(29),n(53),n(54);var o=n(3),r=(n(11),n(37)),l=n(139),c=n(140),h=(n(38),n(40),n(16),n(41),n(57),n(411)),f=(n(56),n(39),n(55));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var v,m=function(){function t(e,n,r){Object(l.a)(this,t),this.options=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({shapeTypes:["circle","rect","polygon"],shapeColors:["#e07272","#0805b5","#49c6ff","#8bc34a","#1e1e21","#e24e81","#e0cd24"],shapeFill:!0,shapeStrokeWidth:1},r),this.type=e||this.options.shapeTypes[0],("random"===this.type||this.options.types.includes(this.type))&&("random"===this.type&&(this.type=this.options.shapeTypes[Object(f.e)(0,this.options.shapeTypes.length-1,0)]),this.letterRect=n,this.init())}return Object(c.a)(t,[{key:"init",value:function(){this.el=document.createElementNS("http://www.w3.org/2000/svg",this.type),this.el.style.opacity=0,this.configureShapeType(),this.options.shapeFill?this.el.setAttribute("fill",this.options.shapeColors[Object(f.e)(0,this.options.shapeColors.length-1,0)]):(this.el.setAttribute("fill","none"),this.el.setAttribute("stroke-width",this.options.shapeStrokeWidth),this.el.setAttribute("stroke",this.options.shapeColors[Object(f.e)(0,this.options.shapeColors.length-1,0)]))}},{key:"configureShapeType",value:function(){if(this.el.style.transformOrigin="".concat(this.letterRect.left+this.letterRect.width/2,"px ").concat(this.letterRect.top+this.letterRect.height/2,"px"),"circle"===this.type){var t=.5*this.letterRect.width;this.el.setAttribute("r",t),this.el.setAttribute("cx",this.letterRect.left+this.letterRect.width/2),this.el.setAttribute("cy",this.letterRect.top+this.letterRect.height/2)}else if("rect"===this.type){var e=Object(f.e)(.05,.5,3)*this.letterRect.width,n=Object(f.e)(.05,.5,3)*this.letterRect.height;this.el.setAttribute("width",e),this.el.setAttribute("height",n),this.el.setAttribute("x",this.letterRect.left+(this.letterRect.width-e)/2),this.el.setAttribute("y",this.letterRect.top+(this.letterRect.height-n)/2)}else"polygon"===this.type&&this.el.setAttribute("points","".concat(this.letterRect.left," ").concat(this.letterRect.top+this.letterRect.height,", ").concat(this.letterRect.left+this.letterRect.width/2," ").concat(this.letterRect.bottom-this.letterRect.width,", ").concat(this.letterRect.left+this.letterRect.width," ").concat(this.letterRect.top+this.letterRect.height))}},{key:"onResize",value:function(t){this.letterRect=t,this.configureShapeType()}}]),t}(),w=function(){function t(e,svg,n){Object(l.a)(this,t),this.el=e,this.svg=svg,this.options={totalShapes:12},Object.assign(this.options,n),this.rect=this.el.getBoundingClientRect(),this.totalShapes=this.options.totalShapes,this.init(),this.initEvents()}return Object(c.a)(t,[{key:"init",value:function(){this.shapes=[];for(var i=0;i<=this.totalShapes-1;++i){var t=new m("random",this.rect,this.options);this.shapes.push(t),this.svg.appendChild(t.el)}}},{key:"initEvents",value:function(){var t=this;window.addEventListener("resize",Object(f.b)((function(){t.rect=t.el.getBoundingClientRect();for(var i=0;i<=t.totalShapes-1;++i){t.shapes[i].onResize(t.rect)}}),20))}}]),t}(),x=function(){function t(e,n){Object(l.a)(this,t),this.options=n,this.el=e,this.winSize={width:window.innerWidth,height:window.innerHeight},this.init(),this.initEvents()}return Object(c.a)(t,[{key:"init",value:function(){this.createSVG(),this.createLetters(),this.show()}},{key:"createSVG",value:function(){this.svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.svg.setAttribute("class","shapes"),this.svg.setAttribute("width","".concat(this.winSize.width,"px")),this.svg.setAttribute("height","".concat(this.winSize.height,"px")),this.svg.setAttribute("viewbox","0 0 ".concat(this.winSize.width," ").concat(this.winSize.height)),this.options.shapesOnTop?this.el.parentNode.insertBefore(this.svg,this.el.nextSibling):this.el.parentNode.insertBefore(this.svg,this.el)}},{key:"createLetters",value:function(){var t=this;this.letters=[],Array.from(this.el.querySelectorAll("span")).forEach((function(e){t.letters.push(new w(e,t.svg,t.options.shapeOptions))}))}},{key:"initEvents",value:function(){var t=this;window.addEventListener("resize",Object(f.b)((function(){t.winSize={width:window.innerWidth,height:window.innerHeight},t.svg.setAttribute("width","".concat(t.winSize.width,"px")),t.svg.setAttribute("height","".concat(t.winSize.width,"px")),t.svg.setAttribute("viewbox","0 0 ".concat(t.winSize.width," ").concat(t.winSize.height))}),20))}},{key:"show",value:function(){for(var t=this.options.shapesAnimationOpts,i=0,e=this.letters.length;i<=e-1;++i){var n=this.letters[i];setTimeout(function(e){return function(){t.targets=e.shapes.map((function(t){return t.el})),h.a.remove(t.targets),Object(h.a)(t)}}(n),0)}}}]),t}(),y={shapeOptions:{shapeColors:["#35c394","#9985ee","#f54665","#4718f5","#f5aa18"],shapesOnTop:!0},shapesAnimationOpts:{duration:function(){return h.a.random(1e3,3e3)},delay:function(t,i){return 20*i},easing:"easeOutElastic",translateX:function(t){var e=h.a.random(-250,250);return t.dataset.tx=e,[0,e]},translateY:function(t){var e=h.a.random(-250,250);return t.dataset.ty=e,[0,e]},scale:function(t){var s=Object(f.e)(.15,.65);return t.dataset.s=s,[s,s]},rotate:function(){return h.a.random(-90,90)},opacity:{value:.6,duration:1e3,easing:"linear"}}},O=n(378),k=n(388),_=n(396),j=n(389),S=n(390);function R(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var C={name:"PageHome",components:(v={},Object(o.a)(v,O.a.name,O.a),Object(o.a)(v,k.a.name,k.a),Object(o.a)(v,_.a.name,_.a),Object(o.a)(v,j.a.name,j.a),Object(o.a)(v,S.a.name,S.a),v),layout:"stack",computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?R(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):R(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)("app",{stackIsOpen:function(t){return t.stackIsOpen},version:function(t){return t.latestVersion}})),mounted:function(){setTimeout((function(){var t=document.querySelector(".firework");new x(t,y)}),400)},methods:{navigateToFeatures:function(t){var e=this;if(t.preventDefault(),t.stopPropagation(),!this.stackIsOpen){this.$store.dispatch("app/toggleStack",!0);var n=document.querySelector("#nav-features a");setTimeout((function(){n.focus()}),1e3),setTimeout((function(){e.$router.push(e.$i18n.path("features"))}),1800)}}}},z=(n(421),n(2)),component=Object(z.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Page",{staticClass:"page-home"},[n("div",{staticClass:"page__inner"},[n("div",{staticClass:"firework"},[n("span",{staticClass:"char1"},[t._v("M")]),t._v(" "),n("span",{staticClass:"char2"},[t._v("o")]),t._v(" "),n("span",{staticClass:"char3"},[t._v("t")]),t._v(" "),n("span",{staticClass:"char4"},[t._v("r")]),t._v(" "),n("span",{staticClass:"char5"},[t._v("i")]),t._v(" "),n("span",{staticClass:"char6"},[t._v("x")])]),t._v(" "),n("header",{staticClass:"mo-header cf"},[n("AppIcon"),t._v(" "),n("h1",{staticClass:"mo-header__title"},[t._v("\n        "+t._s(t.$t("home.title"))+"\n      ")]),t._v(" "),n("p",{staticClass:"mo-header__desc"},[t._v("\n        "+t._s(t.$t("home.intro"))+"\n      ")]),t._v(" "),n("div",{staticClass:"info"},[n("DownloadButton",{attrs:{version:t.version}}),t._v(" "),n("Version",{staticStyle:{"margin-left":"8px"},attrs:{version:t.version}}),t._v(" "),n("div",{staticClass:"view-features"},[n("div",{staticClass:"view-features-link",on:{click:t.navigateToFeatures}},[n("i",[n("mo-icon",{attrs:{name:"party-popper",width:"24",height:"24"}})],1),t._v(" "),n("span",[t._v(t._s(t.$t("home.view-features")))])])])],1),t._v(" "),n("p",{staticClass:"other-links"},[n("a",{attrs:{href:"https://github.com/agalwood/Motrix",target:"_blank"}},[n("i",[n("mo-icon",{attrs:{name:"github",width:"20",height:"20"}})],1),t._v(" "),n("span",[t._v(t._s(t.$t("home.github")))])])])],1),t._v(" "),n("Screenshot")],1)])}),[],!1,null,null,null);e.default=component.exports}}]);