"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{548:function(t,e,n){n.d(e,{IQ:function(){return p},Jh:function(){return h},gH:function(){return o},rj:function(){return i},s_:function(){return f}});var r=n(861),a=n(757),u=n.n(a),c=n(243),s="92482f3e0360ce24426b46fb170dce96";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var t=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/movie/day?api_key=".concat(s));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?api_key=".concat(s,"&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},186:function(t,e,n){n.r(e);var r=n(439),a=n(791),u=n(689),c=n(548),s=n(184);e.default=function(){var t=(0,a.useState)(null),e=(0,r.Z)(t,2),n=e[0],i=e[1],o=(0,u.UO)().movieId;if((0,a.useEffect)((function(){(0,c.Jh)(o).then(i)}),[o]),n)return(0,s.jsx)("div",{children:n.length>0?(0,s.jsx)("ul",{children:n.map((function(t){return(0,s.jsxs)("li",{children:[(0,s.jsxs)("h3",{children:["Author: ",t.author]}),(0,s.jsx)("p",{children:t.content})]},t.id)}))}):"We do not have any reviews for this movie."})}}}]);
//# sourceMappingURL=186.7c06bb6f.chunk.js.map