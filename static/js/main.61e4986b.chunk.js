(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{37:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){"use strict";s.r(t);var n=s(1),i=s(0),a=s.n(i),r=s(28),c=s.n(r),o=s(9),l=s(2);s(37);var u=function(){return Object(n.jsx)("span",{children:"About this page: I built it because I love movies."})},m=s(19),j=s.n(m),d=s(30),b=s(11),h=s(12),v=s(14),p=s(13),O=s(31),g=s.n(O),x=s(5),y=s.n(x);s(65);function f(e){var t=e.id,s=e.year,i=e.title,a=e.summary,r=e.poster,c=e.genres,l=e.runtime,u=e.rating;return Object(n.jsx)(o.b,{to:{pathname:"/movie/".concat(t),state:{year:s,title:i,summary:a,poster:r,genres:c,runtime:l,rating:u}},children:Object(n.jsxs)("div",{className:"movie",children:[Object(n.jsx)("img",{src:r,alt:i,title:i}),Object(n.jsxs)("div",{className:"movie__data",children:[Object(n.jsx)("h3",{className:"movie__title",children:i}),Object(n.jsx)("ul",{className:"movie__genres",children:c.map((function(e,t){return Object(n.jsxs)("li",{className:"genres__genre",children:[" ",e]},t)}))}),Object(n.jsx)("h5",{className:"movie__year",children:s}),Object(n.jsxs)("p",{className:"movie__summary",children:[a.slice(0,180),"..."]})]})]})})}f.PropTyes={id:y.a.number.isRequired,year:y.a.number.isRequired,title:y.a.string.isRequired,summary:y.a.string.isRequired,poster:y.a.string.isRequired,genres:y.a.arrayOf(y.a.string).isRequired};var _=f,N=(s(66),function(e){Object(v.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(b.a)(this,s);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(j.a.mark((function t(){var s,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,n=s.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(n.jsx)("section",{className:"container",children:t?Object(n.jsx)("div",{className:"loader",children:Object(n.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(n.jsx)("div",{className:"movies",children:s.map((function(e){return Object(n.jsx)(_,{id:e.id,year:e.year,title:e.title,rating:e.rating,runtime:e.runtime,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(a.a.Component)),k=(s(67),function(e){Object(v.a)(s,e);var t=Object(p.a)(s);function s(){return Object(b.a)(this,s),t.apply(this,arguments)}return Object(h.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,s=e.history;void 0===t.state&&s.push("/")}},{key:"render",value:function(){var e=this.props.location;return console.log(e),e.state?Object(n.jsxs)("div",{className:"movie__detail",children:[Object(n.jsx)("h2",{children:e.state.title}),Object(n.jsxs)("div",{className:"detail__box",children:[Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:["\uac1c\ubd09\ub144\ub3c4 : ",e.state.year]}),Object(n.jsxs)("li",{children:["\ud3c9\uc810 : ",e.state.rating]}),Object(n.jsxs)("li",{children:["\uc0c1\uc601\uc2dc\uac04 : ",Math.round(e.state.runtime/60),"\uc2dc\uac04 ",e.state.runtime%60,"\ubd84"]}),Object(n.jsxs)("li",{children:["\uc7a5\ub974 : ",e.state.genres]}),Object(n.jsxs)("li",{children:["\uc904\uac70\ub9ac : ",e.state.summary]})]}),Object(n.jsx)("img",{className:"detail__poster",src:e.state.poster})]})]}):null}}]),s}(a.a.Component));s(68);var q=function(){return Object(n.jsxs)(o.a,{className:"main",children:[Object(n.jsx)(l.a,{path:"/",exact:!0,component:N}),Object(n.jsx)(l.a,{path:"/about",component:u}),Object(n.jsx)(l.a,{path:"/movie/:id",component:k})]})},w=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,70)).then((function(t){var s=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),n(e),i(e),a(e),r(e)}))};c.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(q,{})}),document.getElementById("root")),w()}},[[69,1,2]]]);
//# sourceMappingURL=main.61e4986b.chunk.js.map