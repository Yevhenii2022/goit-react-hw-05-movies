"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[518],{8518:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,a,c,o=e(9439),u=e(2791),i=e(1087),s=e(5245),p=e(5218),f=e(2332),l=e(168),h=e(5706),d=h.Z.div(r||(r=(0,l.Z)(["\n  position: relative;\n  width: 160px;\n  height: 160px;\n  margin: 0 auto;\n  padding: 50px;\n"]))),v=h.Z.div(a||(a=(0,l.Z)(["\n  width: 720px;\n  margin: 100px auto 0 auto;\n"]))),y=h.Z.p(c||(c=(0,l.Z)(["\n  font-size: 42px;\n  letter-spacing: 3px;\n  text-align: center;\n  color: #2a2a2a;\n"]))),g=e(184),m=function(){var n=(0,i.lr)(),t=(0,o.Z)(n,2),e=t[0],r=t[1],a=(0,u.useState)(e.get("query")),c=(0,o.Z)(a,2),l=c[0],h=c[1],m=(0,u.useState)([]),x=(0,o.Z)(m,2),w=x[0],Z=x[1],k=(0,u.useState)(!1),b=(0,o.Z)(k,2),_=b[0],S=b[1];(0,u.useEffect)((function(){l&&(S(!0),(0,s.Ai)(l).then((function(n){var t,e=n.data,r=e.results,a=e.total_results;if(0===a)return function(n){(0,p.ZP)('Sorry, there are no movies matching your query: "'.concat(n,'". Please try to search something else.'),{icon:"\ud83e\udd37\u200d\u2642\ufe0f"})}(l),void j();t=a,(0,p.ZP)("Hooray! We found ".concat(t," movies for you."),{icon:"\ud83e\udd1f"}),Z(r)})).catch((function(n){return function(n){(0,p.ZP)("You caught the following error: ".concat(n.message,"."),{icon:"\ud83d\udc37"})}(n)})).finally((function(){S(!1)})))}),[l]);var j=function(){Z([])};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(f.CD,{text:"Movies"}),(0,g.jsx)(f.UI,{onSubmit:function(n){""!==n?(r({query:n}),h(n),j()):(0,p.ZP)("To search for movies you need to specify what you are looking for.",{icon:"\ud83e\udd26\u200d\u2642\ufe0f"})}}),w.length>0?(0,g.jsx)(f.sI,{moviesSet:w}):_?(0,g.jsx)(d,{children:(0,g.jsx)(f.aN,{})}):(0,g.jsx)(v,{children:(0,g.jsx)(y,{children:"All filmmakers are waiting for your search query to show movies."})})]})}},5245:function(n,t,e){e.d(t,{Ai:function(){return h},Hx:function(){return x},Y5:function(){return v},wr:function(){return f},xc:function(){return g}});var r=e(5861),a=e(4687),c=e.n(a),o=e(1243),u="https://api.themoviedb.org/3",i="220d205b9d425bbb3fa953ef6e87c55b";function s(){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(c().mark((function n(){var t,e,r,a=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e=a.length>1&&void 0!==a[1]?a[1]:{},n.prev=2,n.next=5,o.Z.get(t,e);case 5:return r=n.sent,n.abrupt("return",r);case 9:n.prev=9,n.t0=n.catch(2),console.log(n.t0.message),Promise.reject(new Error("Not found"));case 13:case"end":return n.stop()}}),n,null,[[2,9]])}))),p.apply(this,arguments)}function f(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("".concat(u,"/trending/movie/day?api_key=").concat(i));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("".concat(u,"/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("".concat(u,"/movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function n(t){return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=518.991c8654.chunk.js.map