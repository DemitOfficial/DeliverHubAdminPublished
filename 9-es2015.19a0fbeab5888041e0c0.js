(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"7yM0":function(l,n,u){"use strict";u.d(n,"a",(function(){return o}));var e=u("s7LF");u("Shfd"),u("45yh");class o{constructor(l,n,u){this.Model=l,this.authService=n,this.router=u}ngOnInit(){this.loginForm=new e.g({Email:new e.e(this.Model.Email),Password:new e.e(this.Model.Password)}),document.querySelector("body").setAttribute("themebg-pattern","theme1")}login(){this.authService.login(this.loginForm.value).subscribe(l=>{this.router.navigate(["/dashboard"])},()=>{})}loggedIn(){return!!localStorage.getItem("token")}}},Cyoc:function(l,n,u){"use strict";u.d(n,"a",(function(){return e}));class e{}},"Nao/":function(l,n,u){"use strict";u.d(n,"a",(function(){return o})),u.d(n,"b",(function(){return e})),u("7yM0");const e={title:"Simple Login"};class o{}},Shfd:function(l,n,u){"use strict";u.d(n,"a",(function(){return e}));class e{}},VBcZ:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class o{}var t=u("pMnS"),d=u("9AJC"),i=u("qgFh"),a=u("SVse"),s=u("s7LF"),r=u("G0yt"),c=u("ADQ8"),m=u("IheW"),p=u("45yh"),g=u("Shfd"),v=u("iInd");const h={title:"Authentication",status:!1},f=()=>u.e(24).then(u.bind(null,"LQQW")).then(l=>l.BasicLoginModuleNgFactory),b=()=>u.e(25).then(u.bind(null,"gBj9")).then(l=>l.BasicRegModuleNgFactory);class C{}var y=u("bse0"),k=u("22Na"),w=u("PCNd"),F=u("Nao/"),M=u("Cyoc"),R=u("7yM0");u.d(n,"AuthModuleNgFactory",(function(){return S}));var S=e["\u0275cmf"](o,[],(function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[t.a,d.a,d.b,d.h,d.i,d.e,d.f,d.g,i.a]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,a.NgLocalization,a.NgLocaleLocalization,[e.LOCALE_ID,[2,a["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,s.u,s.u,[]),e["\u0275mpd"](4608,r.A,r.A,[e.ComponentFactoryResolver,e.Injector,r.vb,r.B]),e["\u0275mpd"](4608,c.a,c.a,[]),e["\u0275mpd"](4608,s.d,s.d,[]),e["\u0275mpd"](4608,m.h,m.n,[a.DOCUMENT,e.PLATFORM_ID,m.l]),e["\u0275mpd"](4608,m.o,m.o,[m.h,m.m]),e["\u0275mpd"](5120,m.a,(function(l){return[l]}),[m.o]),e["\u0275mpd"](4608,m.k,m.k,[]),e["\u0275mpd"](6144,m.i,null,[m.k]),e["\u0275mpd"](4608,m.g,m.g,[m.i]),e["\u0275mpd"](6144,m.b,null,[m.g]),e["\u0275mpd"](4608,m.f,m.j,[m.b,e.Injector]),e["\u0275mpd"](4608,m.c,m.c,[m.f]),e["\u0275mpd"](4608,p.a,p.a,[m.c]),e["\u0275mpd"](4608,g.a,g.a,[]),e["\u0275mpd"](1073742336,a.CommonModule,a.CommonModule,[]),e["\u0275mpd"](1073742336,v.s,v.s,[[2,v.x],[2,v.o]]),e["\u0275mpd"](1073742336,C,C,[]),e["\u0275mpd"](1073742336,y.d,y.d,[]),e["\u0275mpd"](1073742336,k.ClickOutsideModule,k.ClickOutsideModule,[]),e["\u0275mpd"](1073742336,r.c,r.c,[]),e["\u0275mpd"](1073742336,r.f,r.f,[]),e["\u0275mpd"](1073742336,r.g,r.g,[]),e["\u0275mpd"](1073742336,r.k,r.k,[]),e["\u0275mpd"](1073742336,r.l,r.l,[]),e["\u0275mpd"](1073742336,s.t,s.t,[]),e["\u0275mpd"](1073742336,s.i,s.i,[]),e["\u0275mpd"](1073742336,r.r,r.r,[]),e["\u0275mpd"](1073742336,r.x,r.x,[]),e["\u0275mpd"](1073742336,r.C,r.C,[]),e["\u0275mpd"](1073742336,r.E,r.E,[]),e["\u0275mpd"](1073742336,r.J,r.J,[]),e["\u0275mpd"](1073742336,r.O,r.O,[]),e["\u0275mpd"](1073742336,r.R,r.R,[]),e["\u0275mpd"](1073742336,r.U,r.U,[]),e["\u0275mpd"](1073742336,r.Z,r.Z,[]),e["\u0275mpd"](1073742336,r.eb,r.eb,[]),e["\u0275mpd"](1073742336,r.hb,r.hb,[]),e["\u0275mpd"](1073742336,r.kb,r.kb,[]),e["\u0275mpd"](1073742336,r.lb,r.lb,[]),e["\u0275mpd"](1073742336,r.D,r.D,[]),e["\u0275mpd"](1073742336,w.a,w.a,[]),e["\u0275mpd"](1073742336,F.a,F.a,[]),e["\u0275mpd"](1073742336,s.r,s.r,[]),e["\u0275mpd"](1073742336,m.e,m.e,[]),e["\u0275mpd"](1073742336,m.d,m.d,[]),e["\u0275mpd"](1073742336,M.a,M.a,[]),e["\u0275mpd"](1073742336,o,o,[]),e["\u0275mpd"](1024,v.m,(function(){return[[{path:"",data:h,children:[{path:"login",loadChildren:f},{path:"registration",loadChildren:b}]}],[{path:"",component:R.a,data:F.b}]]}),[]),e["\u0275mpd"](256,y.a,w.b,[]),e["\u0275mpd"](256,m.l,"XSRF-TOKEN",[]),e["\u0275mpd"](256,m.m,"X-XSRF-TOKEN",[])])}))},qgFh:function(l,n,u){"use strict";var e=u("8Y7J"),o=u("s7LF"),t=u("7yM0"),d=u("Shfd"),i=u("45yh"),a=u("iInd");u.d(n,"a",(function(){return m}));var s=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function r(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,48,"section",[["class","login p-fixed d-flex text-center bg-primary common-img-bg"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,47,"div",[["class","auth-fluid"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,46,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,45,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,44,"div",[["class","login-card card-body auth-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,43,"form",[["class","md-float-material"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var o=!0;return"submit"===n&&(o=!1!==e["\u0275nov"](l,7).onSubmit(u)&&o),"reset"===n&&(o=!1!==e["\u0275nov"](l,7).onReset()&&o),o}),null,null)),e["\u0275did"](6,16384,null,0,o.x,[],null,null),e["\u0275did"](7,540672,null,0,o.h,[[8,null],[8,null]],{form:[0,"form"]},null),e["\u0275prd"](2048,null,o.b,null,[o.h]),e["\u0275did"](9,16384,null,0,o.n,[[4,o.b]],null,null),(l()(),e["\u0275eld"](10,0,null,null,2,"div",[["class","text-center"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Deliver Hub"])),(l()(),e["\u0275eld"](13,0,null,null,35,"div",[["class","auth-box"]],null,null,null,null,null)),(l()(),e["\u0275eld"](14,0,null,null,3,"div",[["class","row m-b-20"]],null,null,null,null,null)),(l()(),e["\u0275eld"](15,0,null,null,2,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](16,0,null,null,1,"h3",[["class","text-left txt-primary"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Login"])),(l()(),e["\u0275eld"](18,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](19,0,null,null,9,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](20,0,null,null,7,"input",[["class","form-control"],["formControlName","Email"],["placeholder","Your Username"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var o=!0;return"input"===n&&(o=!1!==e["\u0275nov"](l,21)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==e["\u0275nov"](l,21).onTouched()&&o),"compositionstart"===n&&(o=!1!==e["\u0275nov"](l,21)._compositionStart()&&o),"compositionend"===n&&(o=!1!==e["\u0275nov"](l,21)._compositionEnd(u.target.value)&&o),o}),null,null)),e["\u0275did"](21,16384,null,0,o.c,[e.Renderer2,e.ElementRef,[2,o.a]],null,null),e["\u0275did"](22,16384,null,0,o.s,[],{required:[0,"required"]},null),e["\u0275prd"](1024,null,o.j,(function(l){return[l]}),[o.s]),e["\u0275prd"](1024,null,o.k,(function(l){return[l]}),[o.c]),e["\u0275did"](25,671744,null,0,o.f,[[3,o.b],[6,o.j],[8,null],[6,o.k],[2,o.v]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,o.l,null,[o.f]),e["\u0275did"](27,16384,null,0,o.m,[[4,o.l]],null,null),(l()(),e["\u0275eld"](28,0,null,null,0,"span",[["class","md-line"]],null,null,null,null,null)),(l()(),e["\u0275eld"](29,0,null,null,7,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](30,0,null,null,5,"input",[["class","form-control"],["formControlName","Password"],["placeholder","Password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var o=!0;return"input"===n&&(o=!1!==e["\u0275nov"](l,31)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==e["\u0275nov"](l,31).onTouched()&&o),"compositionstart"===n&&(o=!1!==e["\u0275nov"](l,31)._compositionStart()&&o),"compositionend"===n&&(o=!1!==e["\u0275nov"](l,31)._compositionEnd(u.target.value)&&o),o}),null,null)),e["\u0275did"](31,16384,null,0,o.c,[e.Renderer2,e.ElementRef,[2,o.a]],null,null),e["\u0275prd"](1024,null,o.k,(function(l){return[l]}),[o.c]),e["\u0275did"](33,671744,null,0,o.f,[[3,o.b],[8,null],[8,null],[6,o.k],[2,o.v]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,o.l,null,[o.f]),e["\u0275did"](35,16384,null,0,o.m,[[4,o.l]],null,null),(l()(),e["\u0275eld"](36,0,null,null,0,"span",[["class","md-line"]],null,null,null,null,null)),(l()(),e["\u0275eld"](37,0,null,null,3,"div",[["class","row m-t-30"]],null,null,null,null,null)),(l()(),e["\u0275eld"](38,0,null,null,2,"div",[["class","col-md-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](39,0,null,null,1,"button",[["class","btn btn-primary btn-md btn-block waves-effect text-center m-b-20"],["style","cursor:pointer"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.login()&&e),e}),null,null)),(l()(),e["\u0275ted"](-1,null,["Sign in"])),(l()(),e["\u0275eld"](41,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),e["\u0275eld"](42,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](43,0,null,null,3,"div",[["class","col-md-10"]],null,null,null,null,null)),(l()(),e["\u0275eld"](44,0,null,null,2,"p",[["class","text-inverse text-left"]],null,null,null,null,null)),(l()(),e["\u0275eld"](45,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["All Rights Reserved \xa9 2020 DemiT"])),(l()(),e["\u0275eld"](47,0,null,null,1,"div",[["class","col-md-2"]],null,null,null,null,null)),(l()(),e["\u0275eld"](48,0,null,null,0,"img",[["alt","small-logo.png"],["src","assets/images/auth/Logo-small-bottom.png"]],null,null,null,null,null))],(function(l,n){l(n,7,0,n.component.loginForm),l(n,22,0,""),l(n,25,0,"Email"),l(n,33,0,"Password")}),(function(l,n){var u=n.component;l(n,5,0,e["\u0275nov"](n,9).ngClassUntouched,e["\u0275nov"](n,9).ngClassTouched,e["\u0275nov"](n,9).ngClassPristine,e["\u0275nov"](n,9).ngClassDirty,e["\u0275nov"](n,9).ngClassValid,e["\u0275nov"](n,9).ngClassInvalid,e["\u0275nov"](n,9).ngClassPending),l(n,20,0,e["\u0275nov"](n,22).required?"":null,e["\u0275nov"](n,27).ngClassUntouched,e["\u0275nov"](n,27).ngClassTouched,e["\u0275nov"](n,27).ngClassPristine,e["\u0275nov"](n,27).ngClassDirty,e["\u0275nov"](n,27).ngClassValid,e["\u0275nov"](n,27).ngClassInvalid,e["\u0275nov"](n,27).ngClassPending),l(n,30,0,e["\u0275nov"](n,35).ngClassUntouched,e["\u0275nov"](n,35).ngClassTouched,e["\u0275nov"](n,35).ngClassPristine,e["\u0275nov"](n,35).ngClassDirty,e["\u0275nov"](n,35).ngClassValid,e["\u0275nov"](n,35).ngClassInvalid,e["\u0275nov"](n,35).ngClassPending),l(n,39,0,!u.loginForm.valid)}))}function c(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-basic-login",[],null,null,null,r,s)),e["\u0275did"](1,114688,null,0,t.a,[d.a,i.a,a.o],null,null)],(function(l,n){l(n,1,0)}),null)}var m=e["\u0275ccf"]("app-basic-login",t.a,c,{},{},[])}}]);