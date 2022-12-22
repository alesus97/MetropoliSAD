"use strict";(self.webpackChunkmetropolisad=self.webpackChunkmetropolisad||[]).push([[433],{4991:function(e,n,t){t.d(n,{t:function(){return o}});var r=t(8051),i="cinema-sad",o={getAllSpettacoli:function(e){return r.b.get(i,"/cinema/".concat(e,"/spettacoli"),{response:!0})},deleteSpettacolo:function(e){return r.b.del(i,"/spettacoli/".concat(e),{response:!0})},createSpettacolo:function(e,n){var t={body:n,response:!0};return r.b.post(i,"/sale/".concat(e,"/spettacoli"),t)},getAllSale:function(e){return r.b.get(i,"/cinema/".concat(e,"/sale"),{response:!0})},deleteSala:function(e){return r.b.del(i,"/sale/".concat(e),{response:!0})},createSala:function(e,n){var t={body:n,response:!0};return r.b.post(i,"/cinema/".concat(e,"/sale"),t)},getAllFilms:function(){return r.b.get(i,"/film",{response:!0})},deleteFilm:function(e){return r.b.del(i,"/film/".concat(e),{response:!0})},createFilm:function(e){var n={body:e,response:!0};return r.b.post(i,"/film",n)},getAllQuestions:function(e){return r.b.get(i,"/film/".concat(e,"/domande"),{response:!0})},deleteQuestion:function(e){return r.b.del(i,"/domande/".concat(e),{response:!0})},createQuestion:function(e,n){var t={body:n,response:!0};return r.b.post(i,"/film/".concat(e,"/domande"),t)},getAllPrizes:function(){return r.b.get(i,"/premi",{response:!0})},deletePrize:function(e){return r.b.del(i,"/premi/".concat(e),{response:!0})},createPrize:function(e){var n={body:e,response:!0};return r.b.post(i,"/premi",n)},getAllCinemas:function(){return r.b.get(i,"/cinema",{response:!0})},deleteCinema:function(e){return r.b.del(i,"/cinema/".concat(e),{response:!0})},createCinema:function(e){var n={body:e,response:!0};return r.b.post(i,"/cinema",n)},getPostiDisponibili:function(e){return r.b.get(i,"/spettacoli/".concat(e,"/disponibilita"),{response:!0})},getBiglietti:function(){return r.b.get(i,"/biglietti",{response:!0})},createBiglietto:function(e,n){var t={body:e,response:!0};return r.b.post(i,"/spettacoli/".concat(n,"/biglietti"),t)},getProfilo:function(){return r.b.get(i,"/user",{response:!0})}}},5578:function(e,n,t){t.d(n,{Z:function(){return l}});t(2791);var r=t(9157),i=t(1691),o=t(3767),s=t(890),c=t(753),a=t(184);function l(e){return(0,a.jsx)(r.Z,{children:(0,a.jsx)(i.Z,{component:"div",id:"alert-dialog-description",children:(0,a.jsxs)(o.Z,{justifyContent:"space-between",direction:{xs:"column",sm:"row"},spacing:2,children:[(0,a.jsx)(c.Z,{color:"error"}),(0,a.jsxs)(s.Z,{textAlign:"center",children:[" ",e.onDeleteMessage]}),(0,a.jsx)(c.Z,{color:"error"})]})})})}},6727:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(885),i=t(2791),o=t(5289),s=t(5661),c=t(4721),a=t(9157),l=t(1614),u=t(4554),d=t(2003),p=t(9658),h=t(3767),f=t(6151),Z=t(5773),x=t(184);function m(e){var n=(0,i.useState)(!1),t=(0,r.Z)(n,2),m=t[0],j=t[1],g=(0,i.useState)(!1),v=(0,r.Z)(g,2),b=v[0],w=v[1],S=(0,i.useState)([]),y=(0,r.Z)(S,2),C=y[0],D=y[1],z=function(){e.setCloseDialog(),w(!1),D("")};return(0,x.jsx)("div",{children:(0,x.jsxs)(o.Z,{open:e.openDialog,fullWidth:!0,maxWidth:"sm",onClose:z,children:[(0,x.jsx)(s.Z,{align:"center",children:e.title}),(0,x.jsx)(c.Z,{}),(0,x.jsx)(a.Z,{children:(0,x.jsx)(l.Z,{component:"main",maxWidth:"sm",children:(0,x.jsxs)(u.Z,{component:"form",onSubmit:function(n){j(!0),e.handleOK(n).then((function(){j(!1),z(),w(!1),D("")})).catch((function(e){console.log(e),w(!0),D(e.response.data.message)}))},children:[e.children,b&&(0,x.jsx)(d.Z,{in:b,timeout:{enter:1e3,exit:1e3},addEndListener:function(){setTimeout((function(){console.log("prova"),j(!1),w(!1)}),4e3)},children:(0,x.jsx)(p.Z,{"data-cy":"AlertDialog",variant:"filled",color:"primary",icon:(0,x.jsx)(Z.Z,{fontSize:"inherit"}),children:C})}),(0,x.jsx)("p",{}),(0,x.jsxs)(h.Z,{justifyContent:"flex-end",direction:"row",spacing:2,children:[(0,x.jsx)(f.Z,{variant:"contained",onClick:z,children:"Cancel"}),(0,x.jsx)(f.Z,{"data-cy":"ok",variant:"contained",type:"submit",disabled:m,children:"Ok"})]})]})})})]})})}},433:function(e,n,t){t.r(n),t.d(n,{default:function(){return O}});var r=t(4165),i=t(2982),o=t(1413),s=t(5861),c=t(885),a=t(2791),l=t(6727),u=t(5578),d=t(4554),p=t(4953),h=t(184);function f(){return(0,h.jsxs)(d.Z,{children:[(0,h.jsx)(p.Z,{margin:"normal",name:"premio",fullWidth:!0,label:"Crea premio",required:!0,sx:{"& fieldset":{borderColor:"white"},"&   .MuiSelect-icon":{color:"#F9D159"}}}),(0,h.jsx)(p.Z,{margin:"normal",name:"crediti",fullWidth:!0,label:"Crediti necessari",required:!0,sx:{"& fieldset":{borderColor:"white"},"&   .MuiSelect-icon":{color:"#F9D159"}}})]})}var Z=t(8087),x=t(5397),m=t(9877),j=t(9281),g=t(5527),v=t(9836),b=t(6890),w=t(5855),S=t(3994),y=t(3382),C=t(7047),D=t(3400);function z(e){var n=e.handleSubmit,t=e.handleDelete,r=e.loading,i=e.prizes,o=e.setOnDeleteIndex,s=a.useState(!1),p=(0,c.Z)(s,2),z=p[0],k=p[1],P=a.useState(!1),A=(0,c.Z)(P,2),F=A[0],M=A[1],O=Array(5).fill("");return(0,h.jsxs)(d.Z,{sx:{p:3},children:[(0,h.jsx)(m.Z,{sx:{position:"fixed",bottom:"3%",right:"3%"},color:"primary","aria-label":"add",onClick:function(){return k(!0)},children:(0,h.jsx)(Z.Z,{})}),(0,h.jsx)(l.Z,{openDialog:z,setCloseDialog:function(){return k(!1)},handleOK:n,title:"Inserisci nuovo premio",children:(0,h.jsx)(f,{})}),(0,h.jsx)(l.Z,{openDialog:F,setCloseDialog:function(){return M(!1)},handleOK:t,title:"Sei sicuro di voler eliminare il premio?",children:(0,h.jsx)(u.Z,{onDeleteMessage:"L'azione non potr\xe0 essere annullata"})}),(0,h.jsx)(j.Z,{component:g.Z,children:(0,h.jsxs)(v.Z,{sx:{minWidth:650},children:[(0,h.jsx)(b.Z,{children:(0,h.jsxs)(w.Z,{height:70,children:[(0,h.jsx)(S.Z,{component:"th",scope:"row",width:"30%",children:"Premio"}),(0,h.jsx)(S.Z,{align:"center",width:"10%",children:"Punti necessari"}),(0,h.jsx)(S.Z,{align:"center",width:"10%",children:"Elimina"})]})}),(0,h.jsxs)(y.Z,{children:[r&&O.map((function(e,n){return(0,h.jsxs)(w.Z,{height:70,children:[(0,h.jsx)(S.Z,{component:"th",scope:"row",width:"30%",children:(0,h.jsx)(C.Z,{})}),(0,h.jsx)(S.Z,{align:"center",width:"10%",children:(0,h.jsx)(C.Z,{})}),(0,h.jsx)(S.Z,{align:"center",width:"10%",children:(0,h.jsxs)(D.Z,{children:[" ",(0,h.jsx)(x.Z,{color:"background"})," "]})})]},n)})),i&&i.map((function(e,n){return(0,h.jsxs)(w.Z,{height:70,children:[(0,h.jsxs)(S.Z,{component:"th",scope:"row",children:[" ",e.descrizione," "]}),(0,h.jsxs)(S.Z,{align:"center",children:[" ",e.costo," "]}),(0,h.jsxs)(S.Z,{align:"center",children:["  ",(0,h.jsxs)(D.Z,{onClick:function(){o(n),M(!0)},children:[" ",(0,h.jsx)(x.Z,{color:"primary"})," "]})," "]})]},n)}))]})]})})]})}var k=t(2430),P=t(4991),A=t(3144),F=t(5671),M=(0,A.Z)((function e(n){(0,F.Z)(this,e),this.descrizione=n.descrizione,this.costo=n.costo,this.codice_premio=n.codice_premio}));function O(){var e=(0,a.useState)([]),n=(0,c.Z)(e,2),t=n[0],l=n[1],u=(0,a.useState)(!0),d=(0,c.Z)(u,2),p=d[0],f=d[1],Z=(0,a.useState)(),x=(0,c.Z)(Z,2),m=x[0],j=x[1],g=(0,a.useState)(""),v=(0,c.Z)(g,2),b=v[0],w=v[1],S=(0,a.useState)(),y=(0,c.Z)(S,2),C=y[0],D=y[1],A=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n){var s,c,a,u,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),s=new FormData(n.currentTarget),c={descrizione:s.get("premio"),costo:s.get("crediti")},e.prev=3,e.next=6,P.t.createPrize(c);case 6:a=e.sent,u=(0,o.Z)({codice_premio:a.data.codice_premio},c),(d=(0,i.Z)(t)).push(u),l(d),e.next=16;break;case 13:throw e.prev=13,e.t0=e.catch(3),e.t0;case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(n){return e.apply(this,arguments)}}(),F=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P.t.getAllPrizes().then((function(e){var n=e.data.map((function(e){return new M(e)}));l(n),f(!1)})).catch((function(e){console.log(e),D(!0),w(e)}));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();(0,a.useEffect)((function(){F()}),[]);var O=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(n){var o,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),o=t[m].codice_premio,e.prev=2,e.next=5,P.t.deletePrize(o);case 5:e.sent,(s=(0,i.Z)(t)).splice(m,1),l((0,i.Z)(s)),console.log("Premio cancellato correttamente"),e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(2),e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(n){return e.apply(this,arguments)}}();return C?(0,h.jsx)(k.Z,{error:b}):(0,h.jsx)(z,{handleSubmit:A,handleDelete:O,loading:p,prizes:t,setOnDeleteIndex:j})}},2430:function(e,n,t){t.d(n,{Z:function(){return u}});t(2791);var r=t(4554),i=t(3767),o=t(1889),s=t(890),c=t(5021),a=t(7689),l=t(184);function u(e){var n,t,u;(0,a.s0)();return(0,l.jsx)(r.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"85vh"},children:(0,l.jsxs)(i.Z,{direction:"row",spacing:2,children:[(0,l.jsx)(c.ZP,{children:(0,l.jsxs)(o.ZP,{children:[(0,l.jsx)(s.Z,{variant:"h1",children:null===(n=e.error.response)||void 0===n?void 0:n.status}),(0,l.jsx)(s.Z,{variant:"h5",children:null===(t=e.error)||void 0===t?void 0:t.code}),(0,l.jsx)(s.Z,{variant:"h6",children:null===(u=e.error.response)||void 0===u?void 0:u.data.message}),(0,l.jsx)("p",{})]})}),(0,l.jsx)(c.ZP,{children:(0,l.jsx)(o.ZP,{children:(0,l.jsx)("img",{src:"/ErrorImage.png",alt:"",width:500,height:500})})})]})})}},5397:function(e,n,t){var r=t(6189),i=t(184);n.Z=(0,r.Z)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")}}]);
//# sourceMappingURL=433.0e84e954.chunk.js.map