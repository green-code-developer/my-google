(this.webpackJsonpgoogle=this.webpackJsonpgoogle||[]).push([[0],{50:function(e,a,t){e.exports=t(67)},55:function(e,a,t){},56:function(e,a,t){},57:function(e,a,t){},64:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(19),l=t.n(r),s=(t(55),t(56),t(40)),o=t.n(s),m=t(81),i=t(3),u=t(35),E=t(18),h=(t(57),t(25)),d=t.n(h),g=t(39),v=t.n(g),p=t(80),b=t(4),f=Object(n.createContext)(),N=function(e){var a=e.reducer,t=e.initialState,r=e.children;return c.a.createElement(f.Provider,{value:Object(n.useReducer)(a,t)},r)},_=function(){return Object(n.useContext)(f)},P=t(30),w="SET_SEARCH_TERM",y=function(e,a){switch(console.log(a),a.type){case w:return Object(P.a)(Object(P.a)({},e),{},{term:a.term});default:return e}};var S=function(e){var a=e.hideButton,t=void 0!==a&&a,r=_(),l=Object(E.a)(r,2);Object(u.a)(l[0]);var s=l[1],o=Object(n.useState)(" "),m=Object(E.a)(o,2),i=m[0],h=m[1],g=Object(b.f)(),f=function(e){e.preventDefault(),console.log("you hit enter"),s({type:w,term:i}),g.push("/search")};return c.a.createElement("form",{className:"search"},c.a.createElement("div",{className:"search_input"},c.a.createElement(d.a,{className:"search_icon"}),c.a.createElement("input",{value:i,onChange:function(e){return h(e.target.value)},placeholder:"Search",type:"text"}),c.a.createElement(v.a,null)),t?c.a.createElement("div",{className:"search_buttons"},c.a.createElement(p.a,{className:"search_buttonHidden",type:"submit",onClick:f,variant:"outlined"},"Google Search"),c.a.createElement(p.a,{className:"search_buttonHidden",variant:"outlined"},"I'm feeling Wonder")):c.a.createElement("div",{className:"search_buttons"},c.a.createElement(p.a,{type:"submit",onClick:f,variant:"outlined"},"Google Search"),c.a.createElement(p.a,{variant:"outlined"},"I'm feeling Wonder")))};var j=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"home_header"},c.a.createElement("div",{className:"home_headerLeft"},c.a.createElement(i.b,{to:"/about"},"About"),c.a.createElement(i.b,{to:"/store"},"Store")),c.a.createElement("div",{className:"home_headerRight"},c.a.createElement(i.b,{to:"/Gmail"},"Gmail"),c.a.createElement(i.b,{to:"/Images"},"Images"),c.a.createElement(o.a,{className:"headerRight_icons"}),c.a.createElement(m.a,{src:"https://avatars0.githubusercontent.com/u/71284942?s=460&u=042477abf4c5020157b30e8506b311a02d37f492&v=4",className:"headerRight_icons"}))),c.a.createElement("div",{className:"home_body"},c.a.createElement("img",{src:"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",alt:"google"}),c.a.createElement("div",{className:"homeInputContainer"},c.a.createElement(S,{hideButton:!0})),c.a.createElement("div",{className:"home_languages"},c.a.createElement("p",null,"Google offered in: ",c.a.createElement("span",{className:"languages"},"hindi, kannada, telugu, tamil, malayalam, marati,spanish, french, chainese")," "))),c.a.createElement("div",{className:"footer"},c.a.createElement("hr",null),c.a.createElement("p",{className:"home_coutry"},"India "),c.a.createElement("hr",null),c.a.createElement("div",{className:"home_footer"},c.a.createElement("div",{className:"homeFooterLeft"},c.a.createElement(i.b,{to:"/advertising"},"Advertising"),c.a.createElement(i.b,{to:"/business"},"Business"),c.a.createElement(i.b,{to:"/howsearchworks"},"How Search Works")),c.a.createElement("div",{className:"homeFooterRight"},c.a.createElement(i.b,{to:"/privacy"},"Privacy"),c.a.createElement(i.b,{to:"/terms"},"Terms"),c.a.createElement(i.b,{to:"/settings"},"Settings")))))},O=(t(64),t(29)),k=t.n(O),C=t(41),I=function(e){var a=Object(n.useState)(null),t=Object(E.a)(a,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){(function(){var a=Object(C.a)(k.a.mark((function a(){return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:fetch("https://www.googleapis.com/customsearch/v1?key=".concat("AIzaSyAdEgCgByfE9KottjWCNQrCVSnhuN8dz6g","&cx=").concat("b14b2c09509d28170","&q=").concat(e)).then((function(e){return e.json()})).then((function(e){r(e)}));case 1:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[e]),{data:c}},x=t(44),R=t.n(x),A=t(42),B=t.n(A),T=t(43),G=t.n(T),H=t(46),M=t.n(H),W=t(45),L=t.n(W);var z=function(){var e=_(),a=Object(E.a)(e,2),t=a[0].term,n=(a[1],I(t).data);return console.log(n),c.a.createElement("div",{className:"searchPage"},c.a.createElement("div",{className:"searchPage_header"},c.a.createElement(i.b,{to:"/"},c.a.createElement("img",{className:"searchPage_logo",src:"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",alt:"google-logo"})),c.a.createElement("div",{className:"searchPage_header1"},c.a.createElement(S,{className:"searchPage_searchBar",hideButton:!0}),c.a.createElement("div",{className:"searchPage_options"},c.a.createElement("div",{className:"options_left"},c.a.createElement("div",{className:"searchPage_option"},c.a.createElement(d.a,null),c.a.createElement(i.b,{to:"/all"},"All")),c.a.createElement("div",{className:"searchPage_option"},c.a.createElement(B.a,null),c.a.createElement(i.b,{to:"/images"},"Images")),c.a.createElement("div",{className:"searchPage_option"},c.a.createElement(G.a,null),c.a.createElement(i.b,{to:"/maps"},"Maps")),c.a.createElement("div",{className:"searchPage_option"},c.a.createElement(R.a,null),c.a.createElement(i.b,{to:"/news"},"News")),c.a.createElement("div",{className:"searchPage_option"},c.a.createElement(L.a,null),c.a.createElement(i.b,{to:"/videos"},"Videos")),c.a.createElement("div",{className:"searchPage_option"},c.a.createElement(M.a,null),c.a.createElement(i.b,{to:"/more"},"More"))),c.a.createElement("div",{className:"options_right"},c.a.createElement("div",{className:"searchPage_option"},c.a.createElement(i.b,{to:"/settings"},"Settings")),c.a.createElement("div",{className:"searchPage_option"},c.a.createElement(i.b,{to:"/tools"},"Tools")))))),n&&c.a.createElement("div",{className:"searchPage_results"},c.a.createElement("p",{className:"searchPage_resultCount"},"About ",null===n||void 0===n?void 0:n.searchInformation.formattedTotalResults," results ( ",null===n||void 0===n?void 0:n.searchInformation.formattedSearchTime," seconds)"),null===n||void 0===n?void 0:n.items.map((function(e,a){return c.a.createElement("div",{key:a,className:"searchPage_result"},c.a.createElement("a",{href:e.link},e.displayLink),c.a.createElement("a",{className:"searchPage_resultTitle",href:e.link},c.a.createElement("h2",null," ",e.title," ")),c.a.createElement("p",{className:"searchPage_resultSnippet"},e.snippet))}))))};var F=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(i.a,null,c.a.createElement(b.c,null,c.a.createElement(b.a,{path:"/search"},c.a.createElement(z,null)),c.a.createElement(b.a,{path:"/"},c.a.createElement(j,null)))))};t(66);l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,{initialState:{term:null},reducer:y},c.a.createElement(F,null))),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.d01a4e6f.chunk.js.map