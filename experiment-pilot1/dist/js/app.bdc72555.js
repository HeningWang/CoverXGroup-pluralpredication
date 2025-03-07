(function(){var e={4725:function(e,t,r){var n={"./img_l1_i1.svg":6587,"./img_l1_i37.svg":1972,"./img_l2_i2.svg":6377,"./img_l2_i38.svg":8448,"./img_l3_i3.svg":1283,"./img_l3_i39.svg":2416,"./img_l4_i4.svg":1069,"./img_l4_i40.svg":8215,"./img_l5_i41.svg":5439,"./img_l5_i5.svg":4803,"./img_l6_i42.svg":763,"./img_l6_i6.svg":8129};function i(e){var t=a(e);return r(t)}function a(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=a,e.exports=i,i.id=4725},648:function(e,t,r){"use strict";var n=r(1514),i=r(2545),a=r.n(i),o=r(4344),s=function(){var e=this,t=e._self._c;return t("Experiment",{attrs:{title:"magpie demo"}},[t("InstructionScreen",{attrs:{title:"Welcome"}},[e._v(" This is a sample introduction screen. ")]),e._l(e.items,(function(r,n){return[t("Screen",{key:n},[t("img",{attrs:{src:e.getImagePath(r.List,r.itemNr)}}),e._v(" "+e._s(r.linguisticContext)+" "),t("br"),e._v(" F1 NP: "+e._s(r.F1_NPforms)+" "),t("br"),e._v(" F2 matchness: "+e._s(r.F2_matchness)+" "),t("br"),e._v(" List: "+e._s(r.List)+" "),t("br"),e._v(" Item number: "+e._s(r.itemNr)+" "),t("br"),e._v(" Groupby: "+e._s(r.Grouped)+" "),t("SliderInput",{attrs:{left:"very unacceptable",right:"very acceptable",response:e.$magpie.measurements.acceptability},on:{"update:response":function(t){return e.$set(e.$magpie.measurements,"acceptability",t)}}}),e._v(" "+e._s(e.$magpie.measurements.acceptability)+" "),e.$magpie.measurements.acceptability?t("button",{on:{click:function(t){return e.$magpie.saveAndNextScreen()}}},[e._v("Submit")]):e._e(),t("Record",{attrs:{data:{trialNR:n,itemNr:r.itemNr,List:r.List,F1:r.F1_NPforms,F2:r.F2_matchness,acceptability:e.$magpie.measurements.acceptability}}})],1)]})),t("SubmitResultsScreen")],2)},u=[],c=r(5076),m=r.n(c),l=r(1459),p=r.n(l),d={name:"App",data(){return{items:m().shuffle(p())}},computed:{_(){return m()}},methods:{getImagePath(e,t){return r(4725)(`./img_l${e}_i${t}.svg`)}}},g=d,f=r(1455),h=(0,f.A)(g,s,u,!1,null,null,null),_=h.exports,b={experimentId:"9",serverUrl:"https://magpie-demo.herokuapp.com/",socketUrl:"wss://magpie-demo.herokuapp.com/socket",completionUrl:"https://...",contactEmail:"test@random.com",mode:"debug",language:"en"};n["default"].config.productionTip=!1,n["default"].use(a(),{prefix:"Canvas"}),n["default"].use(o.Ay,b),new n["default"]({render:e=>e(_)}).$mount("#app")},1459:function(e){e.exports=[{List:1,itemNr:1,F1_NPforms:"part",F2_matchness:"random",Grouped:"Color",Predicate:"separated",linguisticContext:"The blue and the orange ones are separated.",Color1:"blue",Color2:"orange",Shape1:"star",Shape2:"circle",Number1:3,Number2:8,Quadrant:13},{List:2,itemNr:2,F1_NPforms:"sum",F2_matchness:"random",Grouped:"Color",Predicate:"separated",linguisticContext:"The objects are separated.",Color1:"blue",Color2:"orange",Shape1:"heart",Shape2:"cross",Number1:8,Number2:6,Quadrant:13},{List:3,itemNr:3,F1_NPforms:"part",F2_matchness:"+match",Grouped:"Color",Predicate:"separated",linguisticContext:"The blue and the orange ones are separated.",Color1:"blue",Color2:"orange",Shape1:"star",Shape2:"square",Number1:4,Number2:4,Quadrant:13},{List:4,itemNr:4,F1_NPforms:"sum",F2_matchness:"+match",Grouped:"Color",Predicate:"separated",linguisticContext:"The objects are separated.",Color1:"blue",Color2:"orange",Shape1:"circle",Shape2:"triangle",Number1:4,Number2:5,Quadrant:13},{List:5,itemNr:5,F1_NPforms:"part",F2_matchness:"-match",Grouped:"Color",Predicate:"separated",linguisticContext:"The blue and the orange ones are separated.",Color1:"blue",Color2:"orange",Shape1:"circle",Shape2:"square",Number1:5,Number2:6,Quadrant:13},{List:6,itemNr:6,F1_NPforms:"sum",F2_matchness:"-match",Grouped:"Color",Predicate:"separated",linguisticContext:"The objects are separated.",Color1:"blue",Color2:"orange",Shape1:"triangle",Shape2:"square",Number1:4,Number2:8,Quadrant:13},{List:1,itemNr:37,F1_NPforms:"part",F2_matchness:"random",Grouped:"Shape",Predicate:"separated",linguisticContext:"The stars and the circles are separated.",Color1:"blue",Color2:"orange",Shape1:"star",Shape2:"circle",Number1:5,Number2:6,Quadrant:13},{List:2,itemNr:38,F1_NPforms:"sum",F2_matchness:"random",Grouped:"Shape",Predicate:"separated",linguisticContext:"The objects are separated.",Color1:"blue",Color2:"orange",Shape1:"Heart",Shape2:"cross",Number1:5,Number2:6,Quadrant:13},{List:3,itemNr:39,F1_NPforms:"part",F2_matchness:"+match",Grouped:"Shape",Predicate:"separated",linguisticContext:"The stars and the squares are separated.",Color1:"blue",Color2:"orange",Shape1:"star",Shape2:"square",Number1:7,Number2:4,Quadrant:13},{List:4,itemNr:40,F1_NPforms:"sum",F2_matchness:"+match",Grouped:"Shape",Predicate:"separated",linguisticContext:"The objects are separated.",Color1:"blue",Color2:"orange",Shape1:"circle",Shape2:"triangle",Number1:4,Number2:8,Quadrant:13},{List:5,itemNr:41,F1_NPforms:"part",F2_matchness:"-match",Grouped:"Shape",Predicate:"separated",linguisticContext:"The circles and the squares are separated.",Color1:"blue",Color2:"orange",Shape1:"circle",Shape2:"square",Number1:6,Number2:7,Quadrant:13},{List:6,itemNr:42,F1_NPforms:"sum",F2_matchness:"-match",Grouped:"Shape",Predicate:"separated",linguisticContext:"The objects are separated.",Color1:"blue",Color2:"orange",Shape1:"triangle",Shape2:"square",Number1:5,Number2:4,Quadrant:13}]},6587:function(e,t,r){"use strict";e.exports=r.p+"img/img_l1_i1.131e2d30.svg"},1972:function(e,t,r){"use strict";e.exports=r.p+"img/img_l1_i37.7f64aee1.svg"},6377:function(e,t,r){"use strict";e.exports=r.p+"img/img_l2_i2.9273dfd7.svg"},8448:function(e,t,r){"use strict";e.exports=r.p+"img/img_l2_i38.59e6739f.svg"},1283:function(e,t,r){"use strict";e.exports=r.p+"img/img_l3_i3.ae11793c.svg"},2416:function(e,t,r){"use strict";e.exports=r.p+"img/img_l3_i39.14c440af.svg"},1069:function(e,t,r){"use strict";e.exports=r.p+"img/img_l4_i4.730f3966.svg"},8215:function(e,t,r){"use strict";e.exports=r.p+"img/img_l4_i40.2fa87566.svg"},5439:function(e,t,r){"use strict";e.exports=r.p+"img/img_l5_i41.2867c5a9.svg"},4803:function(e,t,r){"use strict";e.exports=r.p+"img/img_l5_i5.518bec9f.svg"},763:function(e,t,r){"use strict";e.exports=r.p+"img/img_l6_i42.a8336f22.svg"},8129:function(e,t,r){"use strict";e.exports=r.p+"img/img_l6_i6.b6933b93.svg"}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var a=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=e,function(){var e=[];r.O=function(t,n,i,a){if(!n){var o=1/0;for(m=0;m<e.length;m++){n=e[m][0],i=e[m][1],a=e[m][2];for(var s=!0,u=0;u<n.length;u++)(!1&a||o>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[u])}))?n.splice(u--,1):(s=!1,a<o&&(o=a));if(s){e.splice(m--,1);var c=i();void 0!==c&&(t=c)}}return t}a=a||0;for(var m=e.length;m>0&&e[m-1][2]>a;m--)e[m]=e[m-1];e[m]=[n,i,a]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+e+".836559ba.js"}}(),function(){r.miniCssF=function(e){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="experiment-pilot1:";r.l=function(n,i,a,o){if(e[n])e[n].push(i);else{var s,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),m=0;m<c.length;m++){var l=c[m];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==t+a){s=l;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=n),e[n]=[i];var p=function(t,r){s.onerror=s.onload=null,clearTimeout(d);var i=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(e){return e(r)})),t)return t(r)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){r.p="/"}(),function(){var e={524:0};r.f.j=function(t,n){var i=r.o(e,t)?e[t]:void 0;if(0!==i)if(i)n.push(i[2]);else{var a=new Promise((function(r,n){i=e[t]=[r,n]}));n.push(i[2]=a);var o=r.p+r.u(t),s=new Error,u=function(n){if(r.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var a=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,i[1](s)}};r.l(o,u,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,a,o=n[0],s=n[1],u=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(i in s)r.o(s,i)&&(r.m[i]=s[i]);if(u)var m=u(r)}for(t&&t(n);c<o.length;c++)a=o[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(m)},n=self["webpackChunkexperiment_pilot1"]=self["webpackChunkexperiment_pilot1"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[504],(function(){return r(648)}));n=r.O(n)})();
//# sourceMappingURL=app.bdc72555.js.map