(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],{171:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),s=a.n(r),l=(a(93),a(17)),o=a(172),m=a(9),i=a.n(m),u=a(175),p=function(e){return c.a.createElement("div",null,c.a.createElement("div",{className:i.a.timeCounter},c.a.createElement("span",null,e.time.min>=10?e.time.min:"0".concat(e.time.min)),"\xa0:\xa0",c.a.createElement("span",null,e.time.sec>=10?e.time.sec:"0".concat(e.time.sec)),"\xa0:\xa0",c.a.createElement("span",null,e.time.msec>=10?e.time.msec:"0".concat(e.time.msec))),c.a.createElement("div",{className:i.a.buttons},0===e.status?c.a.createElement(u.a,{className:i.a.button,onClick:e.start},"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c"):c.a.createElement(u.a,{className:i.a.button,onClick:e.stop},"\u041e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c"),c.a.createElement(u.a,{className:i.a.button,onClick:e.reset},"\u0421\u0431\u0440\u043e\u0441")))},v=a(37),b=a(77),E=a(174),d=function(e){return c.a.createElement("div",{className:i.a.activePart},c.a.createElement("div",null,c.a.createElement("div",{className:i.a.countdown},c.a.createElement("input",{type:"text",name:"min",value:e.minutes||0,onChange:e.handleInputChange}),c.a.createElement("input",{type:"text",name:"sec",value:e.seconds||0,onChange:e.handleInputChange})),c.a.createElement("div",{className:i.a.buttons},0===e.keys?c.a.createElement(u.a,{className:i.a.button,onClick:e.start},"\u0417\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c"):c.a.createElement(u.a,{className:i.a.button,onClick:e.stop},"\u041e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c"),c.a.createElement(u.a,{className:i.a.button,onClick:e.reset},"\u0421\u0431\u0440\u043e\u0441"))),c.a.createElement("div",{className:i.a.progress},c.a.createElement(E.a,{type:"circle",percent:e.percentage})))},h=function(){var e=Object(n.useRef)(),t=Object(n.useState)({min:0,sec:0}),a=Object(l.a)(t,2),r=a[0],s=a[1],o=r.min,m=r.sec;console.log(o,m);var i=Object(n.useState)(),u=Object(l.a)(i,2),p=u[0],E=u[1],h=Object(n.useState)(0),f=Object(l.a)(h,2),_=f[0],g=f[1],O=r.sec,j=r.min,C=0,N=0,k=100,w=60*j+O;O>60&&(N=O,j+=Math.floor(N/60),O-=60*Math.floor(N/60)),j>720&&(j=720),0===N&&(N=O),k=k===60*j+O?100:w/(60*j+O)*100;var y=function(){clearInterval(p),g(0)},I=function(){return 0===j&&0===O?(j=0,O=0,null!==e.current&&e.current.play(),e.current.play(),y()):(0===O&&(j--,O=59),0===C&&(O--,C=99),C--,s({msec:C,sec:O,min:j}))};return c.a.createElement("div",null,c.a.createElement(d,{keys:_,minutes:j,seconds:O,reset:function(){clearInterval(p),g(0),s({msec:100,sec:1,min:1})},stop:y,start:function(){I(),g(1),E(setInterval(I,10))},handleInputChange:function(e){return s(Object(b.a)({},r,Object(v.a)({},e.currentTarget.name,Number(e.currentTarget.value))))},value:r,percentage:k}),c.a.createElement("audio",{src:"https://avto-life.club/alert.ogg",ref:e,preload:"true",id:"1"}))},f=function(){var e=Object(n.useState)({msec:0,sec:0,min:0,hrs:0}),t=Object(l.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(),m=Object(l.a)(s,2),u=m[0],v=m[1],b=Object(n.useState)(0),E=Object(l.a)(b,2),d=E[0],f=E[1],_=a.msec,g=a.sec,O=a.min,j=a.hrs,C=function(){return 60===O&&(j++,O=0),60===g&&(O++,g=0),99===_&&(g++,_=0),_++,r({msec:_,sec:g,min:O,hrs:j})},N=o.a.TabPane;return c.a.createElement("div",{className:i.a.section},c.a.createElement(o.a,{defaultActiveKey:"1"},c.a.createElement(N,{tab:"Timer",key:"1"},c.a.createElement(p,{status:d,reset:function(){clearInterval(u),f(0),r({msec:0,sec:0,min:0,hrs:0})},stop:function(){clearInterval(u),f(0)},start:function(){C(),f(1),v(setInterval(C,10))},time:a})),c.a.createElement(N,{tab:"Countdown",key:"2"},c.a.createElement(h,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},88:function(e,t,a){e.exports=a(171)},9:function(e,t,a){e.exports={section:"app_section__Tr6YQ",buttons:"app_buttons__3Pc3M",button:"app_button__hx0oF",timeCounter:"app_timeCounter__ceXvq",activePart:"app_activePart__1Y3mu",countdown:"app_countdown__1GwN1",progress:"app_progress__wrWuO"}},93:function(e,t,a){}},[[88,1,2]]]);
//# sourceMappingURL=main.5b46e2ed.chunk.js.map