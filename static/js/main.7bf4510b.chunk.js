(this.webpackJsonpsuai=this.webpackJsonpsuai||[]).push([[0],{134:function(e,t,a){e.exports=a(172)},163:function(e,t,a){},172:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(30),i=a.n(r),l=a(21),o=a.n(l),s=a(31),u=a.n(s),m=a(40),p=a(26),d=a(50),f=a.n(d),E=a(49),b=a.n(E),h=(a(140),a(24)),g=a.n(h),v=a(25),j=a.n(v),O=a(44),k=a.n(O),y=a(32),x=a.n(y),w=a(41),U=a.n(w),_=a(43),A=a.n(_),C=a(42),I=a.n(C),K=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(g.a,{id:t},c.a.createElement(j.a,null,"Example"),n&&c.a.createElement(x.a,{title:"User Data Fetched with VK Bridge"},c.a.createElement(U.a,{before:n.photo_200?c.a.createElement(I.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(x.a,{title:"Navigation Example"},c.a.createElement(A.a,null,c.a.createElement(k.a,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"\u041d\u0430\u0436\u043c\u0438 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 \u0438 \u0443\u0437\u043d\u0430\u0439 \u0442\u0435\u0440\u043f\u0438\u043b\u0430 \u043b\u0438 \u0442\u044b"))))},V=a(33),D=a(48),N=a.n(D),S=a(45),W=a.n(S),z=a(46),B=a.n(z),J=a(47),P=a.n(J),T=(a(163),Object(V.b)()),F=function(e){return c.a.createElement(g.a,{id:e.id},c.a.createElement(j.a,{left:c.a.createElement(N.a,{onClick:e.go,"data-to":"home"},T===V.a?c.a.createElement(W.a,null):c.a.createElement(B.a,null))},"Persik"),c.a.createElement("img",{className:"Dima",src:P.a,alt:"Dima The Cat"}))},G=function(){var e=Object(n.useState)("home"),t=Object(p.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(null),l=Object(p.a)(i,2),s=l[0],d=l[1],E=Object(n.useState)(c.a.createElement(b.a,{size:"large"})),h=Object(p.a)(E,2),g=h[0],v=h[1];Object(n.useEffect)((function(){function e(){return(e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,d(t),v(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){e.apply(this,arguments)}()}),[]);var j=function(e){r(e.currentTarget.dataset.to)};return c.a.createElement(f.a,{activePanel:a,popout:g},c.a.createElement(K,{id:"home",fetchedUser:s,go:j}),c.a.createElement(F,{id:"persik",go:j}))};o.a.send("VKWebAppInit"),i.a.render(c.a.createElement(G,null),document.getElementById("root"))},47:function(e,t,a){e.exports=a.p+"static/media/dima.de81f4fe.png"}},[[134,1,2]]]);
//# sourceMappingURL=main.7bf4510b.chunk.js.map