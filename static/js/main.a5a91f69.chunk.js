(this.webpackJsonpbrawlvk=this.webpackJsonpbrawlvk||[]).push([[0],{103:function(e,t,a){e.exports=a(207)},207:function(e,t,a){"use strict";a.r(t);a(104),a(130),a(132),a(133),a(135),a(136),a(137),a(138),a(139),a(140),a(141),a(142),a(144),a(145),a(146),a(147),a(148),a(149),a(150),a(151),a(152),a(153),a(155),a(156),a(157),a(158),a(159),a(160),a(161),a(162),a(163),a(164),a(165),a(166),a(167),a(168),a(169),a(170),a(171),a(172);var n=a(0),c=a.n(n),r=a(61),i=a.n(r),l=a(33),s=a.n(l),o=a(62),u=a.n(o),p=a(95),m=a(64),d=a(102),f=a.n(d),h=(a(181),a(96)),b=a.n(h),E=a(97),v=a.n(E),k=a(101),w=a.n(k),y=a(63),g=a.n(y),j=a(98),O=a.n(j),x=a(100),I=a.n(x),U=a(99),_=a.n(U),A=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement(b.a,{id:t},c.a.createElement(v.a,null,"Example"),n&&c.a.createElement(g.a,{title:"User Data Fetched with VK Bridge"},c.a.createElement(O.a,{before:n.photo_200?c.a.createElement(_.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),c.a.createElement(g.a,{title:"Input"},c.a.createElement(I.a,null,c.a.createElement(w.a,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"Show me the Persik, please"))))},K=function(){var e=Object(n.useState)("home"),t=Object(m.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(null),l=Object(m.a)(i,2),o=l[0],d=l[1];Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.send("VKWebAppGetUserInfo");case 2:t=e.sent,d(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),function(){e.apply(this,arguments)}()}),[]);return c.a.createElement(f.a,{activePanel:a},c.a.createElement(A,{id:"home",fetchedUser:o,go:function(e){r(e.currentTarget.dataset.to)}}))};s.a.send("VKWebAppInit"),i.a.render(c.a.createElement(K,null),document.getElementById("root"))}},[[103,1,2]]]);
//# sourceMappingURL=main.a5a91f69.chunk.js.map