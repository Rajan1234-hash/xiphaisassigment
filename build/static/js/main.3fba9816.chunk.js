(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{29:function(t,e,n){},4:function(t,e,n){t.exports={row:"Counter_row__1C_4f",value:"Counter_value__1d0te",button:"Counter_button__1xpSV",textbox:"Counter_textbox__3ODaX",asyncButton:"Counter_asyncButton__2UAr3 Counter_button__1xpSV"}},54:function(t,e,n){},55:function(t,e,n){},58:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n.n(o),a=n(8),r=n.n(a),i=(n(29),n(6)),u=n(5),s=n(12),l=n.n(s),d=(n.p,n(13)),f=n.n(d),h=n(23),O=n(7);function b(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(e){return setTimeout((function(){return e({data:t})}),500)}))}var j=Object(O.a)("counter/fetchCount",function(){var t=Object(h.a)(f.a.mark((function t(e){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),p=Object(O.b)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(t){t.value+=1},decrement:function(t){t.value-=1},incrementByAmount:function(t,e){t.value+=e.payload,alert(JSON.stringify(e))}},extraReducers:function(t){t.addCase(j.pending,(function(t){t.status="loading"})).addCase(j.fulfilled,(function(t,e){t.status="idle",t.value+=e.payload}))}}),_=p.actions,m=(_.increment,_.decrement,_.incrementByAmount,p.reducer,n(4),n(1));var v=Object(O.b)({name:"color",initialState:{color:"red",status:"idle"},reducers:{setcolor:function(t){alert()}}});v.actions.setcolor,v.reducer;n(54),n(55);var E=function(){var t=Object(u.c)((function(t){return t})),e=Object(u.b)(),n=Object(o.useState)([]),c=Object(i.a)(n,2),a=c[0],r=c[1],s=Object(o.useState)([]),d=Object(i.a)(s,2),f=(d[0],d[1]);Object(o.useEffect)((function(){O(),h()}),[]),Object(o.useEffect)((function(){r(t.Photocall.data),f(t.AlbumCall.data)})),Object(o.useEffect)((function(){}));var h=function(){l()({method:"get",url:"https://jsonplaceholder.typicode.com/photos",responseType:"stream"}).then((function(t){e({type:"PROPOSALRESPONSE",payload:t}),console.log("data photo",t.data)})).then((function(){})).catch((function(t){console.log(t)}))},O=function(){l()({method:"get",url:"https://jsonplaceholder.typicode.com/photos",responseType:"stream"}).then((function(t){e({type:"ALBUMRESP",payload:t}),console.log(" daata album",t)})).catch((function(t){console.log(t)}))};return Object(m.jsx)("div",{className:"main p-4",children:a?a.map((function(t,e){return Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-12",children:Object(m.jsx)("div",{className:"float-left text-left",children:Object(m.jsx)("h5",{children:"Title"})})}),Object(m.jsx)("div",{className:"col-1",children:Object(m.jsx)("img",{src:t.thumbnailUrl,width:"100"})}),Object(m.jsxs)("div",{className:"col-6",children:[Object(m.jsx)("h6",{children:t.id}),Object(m.jsx)("small",{children:t.title})]})]})})):"no data"})},w=n(2),y=n(14),x=n(24),S=n.n(x),g=Object(w.b)({Photocall:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"PROPOSALRESPONSE":return t=e.payload;default:return t}},AlbumCall:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ALBUMRESP":return t=e.payload;default:return t}}}),N={key:"root",storage:S.a},C=Object(y.a)(N,g),T=Object(w.d)(C,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());Object(y.b)(T,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(u.a,{store:T,children:Object(m.jsx)(E,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[58,1,2]]]);
//# sourceMappingURL=main.3fba9816.chunk.js.map