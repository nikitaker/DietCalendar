(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{250:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var s=n(29),a=n.n(s),r=n(0),o=n.n(r),l=n(5),c=n(3),i=n(248),j=n(67),u=n(68),m=n(18),d=n(45),f=n(36),y=n(47),h=n.n(y),b=n(86),p=function(e,t){var n;return h.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,n=JSON.stringify(t),s.next=4,h.a.awrap(b.a.mergeItem(e,n));case 4:s.next=9;break;case 6:s.prev=6,s.t0=s.catch(0),console.log(s.t0);case 9:case"end":return s.stop()}}),null,null,[[0,6]],Promise)},g=function(e){var t;return h.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,h.a.awrap(b.a.getItem(e));case 3:return t=n.sent,n.abrupt("return",null!=t?JSON.parse(t):null);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),null,null,[[0,7]],Promise)},k=n(249);function v(){var e=Object(r.useState)(1600),t=a()(e,2),n=t[0],s=t[1],l=Object(r.useState)(2500),i=a()(l,2),j=i[0],u=i[1];return o.a.useEffect((function(){g("data").then((function(e){e&&(e&&s(e.botCals),e&&u(e.topCals))}))}),[]),o.a.createElement(k.a,null,o.a.createElement(c.a,{style:w.centeredView},o.a.createElement(d.a,{style:w.tinyLogo,source:{uri:"https://i.kym-cdn.com/entries/icons/original/000/034/811/cover6.jpg"}}),o.a.createElement(m.a,{style:{fontSize:40}},"\u0413\u0440\u0430\u043d\u0438\u0446\u044b"),o.a.createElement(c.a,{style:w.input},o.a.createElement(m.a,{style:{fontSize:30,color:"limegreen"}},"\u043c\u0435\u043d\u044c\u0448\u0435 \u0447\u0435\u043c\xa0"),o.a.createElement(f.a,{style:{fontSize:30,color:"limegreen",width:100},keyboardType:"numeric",placeholder:"Enter",returnKeyType:"done",clearTextOnFocus:!1,borderWidth:2,borderRadius:8,onChangeText:function(e){return s(e)},onSubmitEditing:function(e){return p("data",{botCals:n})},value:n})),o.a.createElement(m.a,{style:{fontSize:30,color:"orange"}},"\u043e\u0442 ",n," \u0434\u043e ",j),o.a.createElement(c.a,{style:w.input},o.a.createElement(m.a,{style:{fontSize:30,color:"red"}},"\u0431\u043e\u043b\u044c\u0448\u0435 \u0447\u0435\u043c\xa0"),o.a.createElement(f.a,{style:{fontSize:30,color:"red",width:100},keyboardType:"numeric",placeholder:"Enter",returnKeyType:"done",clearTextOnFocus:!1,borderWidth:2,borderRadius:8,onChangeText:function(e){return u(e)},onSubmitEditing:function(e){return p("data",{topCals:j})},value:j}))))}var w=l.a.create({input:{flexDirection:"row",justifyContent:"center"},centeredView:{flex:1,justifyContent:"center",alignItems:"center",marginTop:22},tinyLogo:{marginBottom:30,width:250,height:250}}),E=n(251),z=n(34);function S(){var e=Object(r.useState)(!1),t=a()(e,2),n=t[0],s=t[1],l=Object(r.useState)(""),i=a()(l,2),d=i[0],y=i[1],h=Object(r.useState)(0),b=a()(h,2),k=b[0],v=b[1],w=Object(r.useState)({}),S=a()(w,2),C=S[0],O=S[1],T=o.a.useReducer((function(e,t){for(var n="white",s=0,r=Object.entries(t.dates);s<r.length;s++){var o=r[s],l=a()(o,2),c=l[0],i=l[1];i<parseInt(t.botCals)?n="limegreen":i<parseInt(t.topCals)?n="orange":i>=parseInt(t.topCals)&&(n="red"),e[c]={customStyles:{container:{backgroundColor:n,width:40,borderRadius:3,alignItems:"center"},text:{fontSize:30}}}}return e}),{}),I=a()(T,2),D=I[0],N=I[1],P=Object(r.useState)(1600),R=a()(P,2),V=R[0],F=R[1],L=Object(r.useState)(2500),J=a()(L,2),q=J[0],K=J[1];return o.a.useEffect((function(){g("data").then((function(e){e&&(e.botCals&&F(e.botCals),e.topCals&&K(e.topCals),e.dates&&N(e),e.dates&&O(e.dates))}))}),[]),o.a.createElement(c.a,{style:x.container},o.a.createElement(u.a,{firstDay:1,dayComponent:function(e){var t,n=e.date,s=e.marking,a=e.onPress,r=e.state;return o.a.createElement(z.a,{onPress:function(){return a(n)},style:s?s.customStyles.container:{}},o.a.createElement(m.a,{style:s?null==(t=s.customStyles)?void 0:t.text:{textAlign:"center",fontSize:30,color:"disabled"===r?"gray":"black"}},n.day))},markedDates:D,markingType:"custom",onDayPress:function(e){y(e.dateString),console.log(D),v(""),s(!n)},theme:{textMonthFontSize:25}}),o.a.createElement(E.a,{animationType:"slide",visible:n,transparent:!0,onRequestClose:function(){s(!n)}},o.a.createElement(c.a,{style:x.centeredView},o.a.createElement(c.a,{style:x.modalView},o.a.createElement(m.a,{style:{fontSize:20}},d),o.a.createElement(c.a,{style:x.input},o.a.createElement(f.a,{style:x.textInput,keyboardType:"numeric",placeholder:"Enter calories",autoFocus:!0,onChangeText:function(e){return v(e)},value:k,maxLength:10}),o.a.createElement(j.a,{title:"\u0412\u0432\u043e\u0434",style:{fontSize:20},onPress:function(){C[d]=k,N({dates:C,topCals:q,botCals:V}),p("data",{dates:C}),s(!n)}}))))))}var x=l.a.create({container:{flex:1,backgroundColor:"#fff",alignSelf:"stretch"},input:{flexDirection:"row",justifyContent:"center"},centeredView:{flex:1,justifyContent:"center",alignItems:"center",marginTop:22},modalView:{margin:10,backgroundColor:"white",borderRadius:20,padding:25,justifyContent:"center",alignItems:"center",shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.25,shadowRadius:4,elevation:5},textInput:{width:200,fontSize:20}});function C(){var e=Object(r.useState)(!0),t=a()(e,2),n=t[0],s=t[1];return o.a.createElement(i.a,{style:O.container},n?o.a.createElement(S,null):o.a.createElement(v,null),o.a.createElement(c.a,{style:O.buttonrow},o.a.createElement(j.a,{title:"\u041a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c",onPress:function(){s(!0)}}),o.a.createElement(j.a,{title:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c",onPress:function(){s(!1)}})))}u.b.locales.ru={monthNames:["\u042f\u043d\u0432\u0430\u0440\u044c","\u0424\u0435\u0432\u0440\u0430\u043b\u044c","\u041c\u0430\u0440\u0442","\u0410\u043f\u0440\u0435\u043b\u044c","\u041c\u0430\u0439","\u0418\u044e\u043d\u044c","\u0418\u044e\u043b\u044c","\u0410\u0432\u0433\u0443\u0441\u0442","\u0421\u0435\u043d\u0442\u044f\u0431\u0440\u044c","\u041e\u043a\u0442\u044f\u0431\u0440\u044c","\u041d\u043e\u044f\u0431\u0440\u044c","\u0414\u0435\u043a\u0430\u0431\u0440\u044c"],monthNamesShort:["\u042f\u043d\u0432","\u0424\u0435\u0432","\u041c\u0430\u0440","\u0410\u043f\u0440","\u041c\u0430\u0439","\u0418\u044e\u043d","\u0418\u044e\u043b","\u0410\u0432\u0433","\u0421\u0435\u043d","\u041e\u043a\u0442","\u041d\u043e\u044f","\u0414\u0435\u043a"],dayNames:["\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435","\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a","\u0432\u0442\u043e\u0440\u043d\u0438\u043a","\u0441\u0440\u0435\u0434\u0430","\u0447\u0435\u0442\u0432\u0435\u0440\u0433","\u043f\u044f\u0442\u043d\u0438\u0446\u0430","\u0441\u0443\u0431\u0431\u043e\u0442\u0430"],dayNamesShort:["\u0412\u0441","\u041f\u043d","\u0412\u0442","\u0421\u0440","\u0427\u0442","\u041f\u0442","\u0421\u0431"],today:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f"},u.b.defaultLocale="ru";var O=l.a.create({container:{flex:1,backgroundColor:"#fff",alignSelf:"stretch"},buttonrow:{flexDirection:"row",justifyContent:"space-evenly"}})},252:function(e,t,n){e.exports=n(283)},278:function(e,t,n){var s={"./af":93,"./af.js":93,"./ar":94,"./ar-dz":95,"./ar-dz.js":95,"./ar-kw":96,"./ar-kw.js":96,"./ar-ly":97,"./ar-ly.js":97,"./ar-ma":98,"./ar-ma.js":98,"./ar-sa":99,"./ar-sa.js":99,"./ar-tn":100,"./ar-tn.js":100,"./ar.js":94,"./az":101,"./az.js":101,"./be":102,"./be.js":102,"./bg":103,"./bg.js":103,"./bm":104,"./bm.js":104,"./bn":105,"./bn-bd":106,"./bn-bd.js":106,"./bn.js":105,"./bo":107,"./bo.js":107,"./br":108,"./br.js":108,"./bs":109,"./bs.js":109,"./ca":110,"./ca.js":110,"./cs":111,"./cs.js":111,"./cv":112,"./cv.js":112,"./cy":113,"./cy.js":113,"./da":114,"./da.js":114,"./de":115,"./de-at":116,"./de-at.js":116,"./de-ch":117,"./de-ch.js":117,"./de.js":115,"./dv":118,"./dv.js":118,"./el":119,"./el.js":119,"./en-au":120,"./en-au.js":120,"./en-ca":121,"./en-ca.js":121,"./en-gb":122,"./en-gb.js":122,"./en-ie":123,"./en-ie.js":123,"./en-il":124,"./en-il.js":124,"./en-in":125,"./en-in.js":125,"./en-nz":126,"./en-nz.js":126,"./en-sg":127,"./en-sg.js":127,"./eo":128,"./eo.js":128,"./es":129,"./es-do":130,"./es-do.js":130,"./es-mx":131,"./es-mx.js":131,"./es-us":132,"./es-us.js":132,"./es.js":129,"./et":133,"./et.js":133,"./eu":134,"./eu.js":134,"./fa":135,"./fa.js":135,"./fi":136,"./fi.js":136,"./fil":137,"./fil.js":137,"./fo":138,"./fo.js":138,"./fr":139,"./fr-ca":140,"./fr-ca.js":140,"./fr-ch":141,"./fr-ch.js":141,"./fr.js":139,"./fy":142,"./fy.js":142,"./ga":143,"./ga.js":143,"./gd":144,"./gd.js":144,"./gl":145,"./gl.js":145,"./gom-deva":146,"./gom-deva.js":146,"./gom-latn":147,"./gom-latn.js":147,"./gu":148,"./gu.js":148,"./he":149,"./he.js":149,"./hi":150,"./hi.js":150,"./hr":151,"./hr.js":151,"./hu":152,"./hu.js":152,"./hy-am":153,"./hy-am.js":153,"./id":154,"./id.js":154,"./is":155,"./is.js":155,"./it":156,"./it-ch":157,"./it-ch.js":157,"./it.js":156,"./ja":158,"./ja.js":158,"./jv":159,"./jv.js":159,"./ka":160,"./ka.js":160,"./kk":161,"./kk.js":161,"./km":162,"./km.js":162,"./kn":163,"./kn.js":163,"./ko":164,"./ko.js":164,"./ku":165,"./ku.js":165,"./ky":166,"./ky.js":166,"./lb":167,"./lb.js":167,"./lo":168,"./lo.js":168,"./lt":169,"./lt.js":169,"./lv":170,"./lv.js":170,"./me":171,"./me.js":171,"./mi":172,"./mi.js":172,"./mk":173,"./mk.js":173,"./ml":174,"./ml.js":174,"./mn":175,"./mn.js":175,"./mr":176,"./mr.js":176,"./ms":177,"./ms-my":178,"./ms-my.js":178,"./ms.js":177,"./mt":179,"./mt.js":179,"./my":180,"./my.js":180,"./nb":181,"./nb.js":181,"./ne":182,"./ne.js":182,"./nl":183,"./nl-be":184,"./nl-be.js":184,"./nl.js":183,"./nn":185,"./nn.js":185,"./oc-lnc":186,"./oc-lnc.js":186,"./pa-in":187,"./pa-in.js":187,"./pl":188,"./pl.js":188,"./pt":189,"./pt-br":190,"./pt-br.js":190,"./pt.js":189,"./ro":191,"./ro.js":191,"./ru":192,"./ru.js":192,"./sd":193,"./sd.js":193,"./se":194,"./se.js":194,"./si":195,"./si.js":195,"./sk":196,"./sk.js":196,"./sl":197,"./sl.js":197,"./sq":198,"./sq.js":198,"./sr":199,"./sr-cyrl":200,"./sr-cyrl.js":200,"./sr.js":199,"./ss":201,"./ss.js":201,"./sv":202,"./sv.js":202,"./sw":203,"./sw.js":203,"./ta":204,"./ta.js":204,"./te":205,"./te.js":205,"./tet":206,"./tet.js":206,"./tg":207,"./tg.js":207,"./th":208,"./th.js":208,"./tk":209,"./tk.js":209,"./tl-ph":210,"./tl-ph.js":210,"./tlh":211,"./tlh.js":211,"./tr":212,"./tr.js":212,"./tzl":213,"./tzl.js":213,"./tzm":214,"./tzm-latn":215,"./tzm-latn.js":215,"./tzm.js":214,"./ug-cn":216,"./ug-cn.js":216,"./uk":217,"./uk.js":217,"./ur":218,"./ur.js":218,"./uz":219,"./uz-latn":220,"./uz-latn.js":220,"./uz.js":219,"./vi":221,"./vi.js":221,"./x-pseudo":222,"./x-pseudo.js":222,"./yo":223,"./yo.js":223,"./zh-cn":224,"./zh-cn.js":224,"./zh-hk":225,"./zh-hk.js":225,"./zh-mo":226,"./zh-mo.js":226,"./zh-tw":227,"./zh-tw.js":227};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=r,e.exports=a,a.id=278}},[[252,1,2]]]);
//# sourceMappingURL=app.8b86d2f8.chunk.js.map