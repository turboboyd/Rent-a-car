"use strict";(self.webpackChunkrent_a_car=self.webpackChunkrent_a_car||[]).push([[190],{2773:function(e,n,r){r.d(n,{Z:function(){return ce}});var t=r(2791),a=r(9439),s="CardProduct_card__QSxjP",c="CardProduct_img__-7KNF",i="CardProduct_btn__hyagx",u="CardProduct_icon__PkCu6",o="CardProduct_icon_active__tfBft",l=r.p+"static/media/auto.19d1f8491c8391215d2a.jpg",d=r(7689);var p=r.p+"static/media/InlineSprite.b3c59eb5a823de3092524a8b1bea3b7d.svg",f=r(184);var m=function(e){var n=e.className,r=e.iconId,t=e.onClick;return(0,f.jsx)("svg",{className:n,preserveAspectRatio:"none",onClick:t,children:(0,f.jsx)("use",{href:"".concat(p,"#").concat(r)})})},v=r(9434),h=r(4662),_="CardDetails_title_wrap__Ve+LI",x="CardDetails_title__q4ccl",j="CardDetails_title_accent__AxAZm",N="CardDetails_wrap_text__o-1bt",g="CardDetails_block_info__tNIBn",C="CardDetails_text__iSX8x",y=r(370);var b=function(e){var n=e.advert,r=n.make,t=n.model,a=n.year,s=n.rentalPrice,c=n.address,i=n.rentalCompany,u=n.type,o=n.mileage,l=n.accessories,d=(0,y.xg)(c),p=d.city,m=d.country,v=i.split(" "),h=p.length+m.length+i.length<=35,b=u.length+t.length+l.length<=25,k=u===t,w="SLK-Class"!==t&&"Range Rover Sport"!==t;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:_,children:[(0,f.jsxs)("h2",{className:x,children:[r," ",w&&(0,f.jsx)("span",{className:j,children:t}),", ",a]}),(0,f.jsx)("p",{className:x,children:s})]}),(0,f.jsxs)("div",{className:N,children:[(0,f.jsxs)("div",{className:g,children:[(0,f.jsx)("p",{className:C,children:p}),(0,f.jsx)("p",{className:C,children:m}),(0,f.jsx)("p",{className:C,children:v.slice(1).join(" ")}),h&&(0,f.jsx)("p",{className:C,children:v[0]})]}),(0,f.jsxs)("div",{className:g,children:[!k&&(0,f.jsx)("p",{className:C,children:u}),(0,f.jsx)("p",{className:C,children:t}),(0,f.jsx)("p",{className:C,children:(0,y.fy)(o)}),!b&&(0,f.jsx)("p",{className:C,children:(0,y.aS)(l)})]})]})]})},k=function(e){return e.adverts},w=function(e){return e.isLoading},M=function(e){return e.status},A=function(e){return e.error},Z=function(e){return e.favouriteAdverts},P=function(){return{adverts:(0,v.v9)(k),isLoading:(0,v.v9)(w),status:(0,v.v9)(M),error:(0,v.v9)(A),favouriteAdverts:(0,v.v9)(Z)}};var S=function(e){var n=e.advert,r=n.id,p=n.img,_=n.make;console.log("img: ",p);var x=!!p;console.log("hasImg: ",x);var j=(0,v.I0)(),N=(0,t.useState)(!1),g=(0,a.Z)(N,2),C=g[0],y=g[1],k=P().favouriteAdverts;(0,t.useEffect)((function(){var e=k.some((function(e){return e.id===n.id}));y(e)}),[n,k,C]);var w=(0,t.useCallback)((function(){if(k.some((function(e){return e.id===n.id})))return j((0,h.d7)(n)),y(!1);j((0,h.NJ)(n)),y(!0)}),[n,j,k]),M=(0,d.s0)();return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("li",{className:s,children:[(0,f.jsx)(m,{className:C?"".concat(u,"  ").concat(o):u,iconId:"heart",onClick:w}),(0,f.jsx)("img",{className:c,src:p||l,alt:_,loading:"lazy"}),(0,f.jsx)(b,{advert:n}),(0,f.jsx)("button",{className:i,onClick:function(){M("?id=".concat(r))},children:"Learn more"})]})})},R="ItemProduct_item__QvDv9",I=r(4164),L="BasicModal_Overlay__qpAAm",E="BasicModal_modal__1fw-L",T="CloseButton_button__0MCUQ",D="CloseButton_iconClose__ztCPC",F=function(e){var n=e.isModal;return(0,f.jsx)("button",{className:T,type:"button",onClick:n,children:(0,f.jsx)(m,{className:D,iconId:"Close"})})},B=document.querySelector("#modal-root");var q=function(e){var n=e.isModal,r=e.children;(0,t.useEffect)((function(){return document.documentElement.style.overflow="hidden",document.addEventListener("keydown",a),function(){document.documentElement.style.overflow="",document.removeEventListener("keydown",a)}}));var a=function(e){"Escape"===e.key&&n()};return(0,I.createPortal)((0,f.jsx)("div",{className:L,onClick:function(e){e.target===e.currentTarget&&n()},children:(0,f.jsxs)("div",{className:E,children:[(0,f.jsx)(F,{isModal:n}),r]})}),B)},z=r(5861),O=r(4687),U=r.n(O),V="ModalCardAuto_img__WdKC+",H="ModalCardAuto_title__pYb7c",Y="ModalCardAuto_title_span__5cqxR",K="ModalCardAuto_wrap_info__47Yfg",Q="ModalCardAuto_block_info__jFacV",X="ModalCardAuto_text__HMVlb",G="ModalCardAuto_description__CoeIT",J="ModalCardAuto_functional__z5C4b",W="ModalCardAuto_functional_wrap__lVoed",$="ModalCardAuto_wrap_rental__GlOvx",ee="ModalCardAuto_text_rental__RhNCE",ne="ModalCardAuto_phone__+Tb-z",re=r(3903);var te=function(){var e=(0,d.TH)(),n=new URLSearchParams(e.search).get("id"),r=(0,v.I0)(),s=(0,t.useState)(null),c=(0,a.Z)(s,2),i=c[0],u=c[1],o=(0,t.useState)(null),l=(0,a.Z)(o,2),p=l[0],m=l[1],_=(0,t.useState)(null),x=(0,a.Z)(_,2),j=x[0],N=x[1];return(0,t.useEffect)((function(){if(n){var e=function(){var e=(0,z.Z)(U().mark((function e(){var t,a,s,c;return U().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r((0,h.ao)(n));case 2:t=e.sent,u(t),a=(0,re.Z)(t.address),s=a.city,c=a.country,m(s),N(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[n,r]),(0,f.jsx)(f.Fragment,{children:i&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("img",{className:V,src:i.img,alt:i.make}),(0,f.jsxs)("h2",{className:H,children:[i.make," ",(0,f.jsxs)("span",{className:Y,children:[" ",i.model]}),","," ",i.year]}),(0,f.jsxs)("div",{className:K,children:[(0,f.jsxs)("div",{className:Q,children:[(0,f.jsx)("p",{className:X,children:p}),(0,f.jsx)("p",{className:X,children:j}),(0,f.jsxs)("p",{className:X,children:["Id: ",i.id]}),(0,f.jsxs)("p",{className:X,children:["Year: ",i.year]}),(0,f.jsxs)("p",{className:X,children:["Type: ",i.type]})]}),(0,f.jsxs)("div",{className:Q,children:[(0,f.jsxs)("p",{className:X,children:["Fuel Consumption: ",i.fuelConsumption]}),(0,f.jsxs)("p",{className:X,children:["Engine Size: ",i.engineSize]})]})]}),(0,f.jsx)("p",{className:G,children:i.description}),(0,f.jsx)("p",{className:J,children:"Accessories and functionalities:"}),(0,f.jsxs)("div",{className:W,children:[(0,f.jsx)("ul",{className:Q,children:i.accessories.map((function(e,n){return(0,f.jsx)("li",{className:X,children:e},n)}))}),(0,f.jsx)("ul",{className:Q,children:i.functionalities.map((function(e,n){return(0,f.jsx)("li",{className:X,children:e},n)}))})]}),(0,f.jsx)("p",{className:J,children:"Rental Conditions: "}),(0,f.jsxs)("div",{className:$,children:[i.rentalConditions.split("\n").map((function(e,n){return(0,f.jsx)("p",{className:ee,children:e},n)})),(0,f.jsxs)("p",{className:ee,children:["Mileage: ",i.mileage]}),(0,f.jsxs)("p",{className:ee,children:["Price: ",i.rentalPrice]})]}),(0,f.jsx)("a",{href:"tel:+380730000000",className:ne,children:"Rental car"})]})})},ae=function(){var e=(0,t.useState)(!1),n=(0,a.Z)(e,2),r=n[0],s=n[1],c=(0,d.TH)(),i=(0,d.s0)(),u=new URLSearchParams(c.search).get("id");(0,t.useEffect)((function(){new URLSearchParams(c.search).get("id")&&s(!0)}),[c.search]);return{isModal:function(){s(!r),i(r?"/catalog":"?id=".concat(u))},isModalOpen:r}},se=r(2041);var ce=function(){var e=P(),n=e.adverts,r=e.favouriteAdverts,t=ae(),a=t.isModal,s=t.isModalOpen,c=window.location.pathname.endsWith(se.Xr);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("ul",{className:R,children:c?r.map((function(e){return(0,f.jsx)(S,{advert:e,isModal:a},e.id)})):n.map((function(e){return(0,f.jsx)(S,{advert:e,isModal:a},e.id)}))}),s&&(0,f.jsx)(q,{isModal:a,children:(0,f.jsx)(te,{})})]})}},4662:function(e,n,r){r.d(n,{NJ:function(){return x},GA:function(){return h},ao:function(){return _},VX:function(){return N},d7:function(){return j}});var t=r(3433),a=r(5861),s=r(4687),c=r.n(s),i=r(91),u=r(5294);u.Z.defaults.baseURL="https://6566535deb8bb4b70ef32d21.mockapi.io/Advert";var o=function(){var e=(0,a.Z)(c().mark((function e(){var n,r,t,a,s=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>0&&void 0!==s[0]?s[0]:1,r=s.length>1&&void 0!==s[1]?s[1]:12,t=s.length>2?s[2]:void 0,e.next=5,u.Z.get("/",{params:{page:n,limit:r,make:t}});case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/");case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/".concat(n));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){return{type:i.YP}},f=function(){return{type:i.i6}},m=function(e){return{type:i.sH,payload:e}},v=function(e){return{type:i.td,payload:e}},h=function(e,n,r,t){return function(){var s=(0,a.Z)(c().mark((function a(s){var u,l,d;return c().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s(1===e?f():p()),a.prev=1,a.next=4,o(e,n,r);case 4:if(u=a.sent,!t){a.next=10;break}return l=Number(t),d=u.data.filter((function(e){var n=Number(e.rentalPrice.replace("$",""));return n>=l&&n<=l+1})),s(v(d)),a.abrupt("return");case 10:return s((c=u.data,{type:i.Of,payload:c})),a.abrupt("return",u.data.length);case 14:a.prev=14,a.t0=a.catch(1),s(m(a.t0));case 17:case"end":return a.stop()}var c}),a,null,[[1,14]])})));return function(e){return s.apply(this,arguments)}}()},_=function(e){return function(){var n=(0,a.Z)(c().mark((function n(r){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(p()),n.prev=1,n.next=4,d(e);case 4:return t=n.sent,r({type:i.p}),n.abrupt("return",t.data);case 9:n.prev=9,n.t0=n.catch(1),r(m(n.t0));case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()},x=function(e){return{type:i.rx,payload:e}},j=function(e){return{type:i.xn,payload:e}},N=function(e,n,r,s){return function(){var i=(0,a.Z)(c().mark((function a(i){var u,o;return c().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return i(1===e?f():p()),a.prev=1,a.next=4,l();case 4:return u=a.sent,o=u.data.reduce((function(e,a){if(n&&a.make!==n)return e;if(r){var c=Number(r),i=Number(a.rentalPrice.replace("$",""));if(i<c||i>c+10)return e}var u=Number(s.min),o=Number(s.max);if(o>0){var l=Number(a.mileage);if(l<=u||l>=o)return e}return[].concat((0,t.Z)(e),[a])}),[]),i(v(o)),a.abrupt("return",o.length);case 10:a.prev=10,a.t0=a.catch(1),i(m(a.t0));case 13:case"end":return a.stop()}}),a,null,[[1,10]])})));return function(e){return i.apply(this,arguments)}}()}},3903:function(e,n,r){var t=r(2007),a=r.n(t);function s(e){var n=e.split(", ");return{city:n[1],country:n[2]}}n.Z=s,s.propTypes={address:a().string.isRequired}},370:function(e,n,r){r.d(n,{xg:function(){return t.Z},fy:function(){return i},aS:function(){return u}});var t=r(3903),a=r(2007),s=r.n(a);function c(e){return e.toString().replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,",")}var i=c;c.propTypes={mileage:s().oneOfType([s().number,s().string]).isRequired};var u=function(e){var n=e[1].split(" ");if(!(n.length<2)){var r=n.slice(-2);return(r=r.map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)}))).join(" ")}}}}]);
//# sourceMappingURL=190.08a29d33.chunk.js.map