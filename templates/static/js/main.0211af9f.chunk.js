(this.webpackJsonpgrandpybot=this.webpackJsonpgrandpybot||[]).push([[0],{25:function(e,t,a){e.exports=a(71)},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(4),c=a.n(s),l=a(24),o=a(2),u=a(5),i=a.n(u),m=a(23),d=a.n(m),g=a(3),p=a.n(g),v=function(e){var t=e.message,a=Object(n.useState)(null),s=Object(o.a)(a,2),c=s[0],l=s[1],u="position"in t?function(e){var t={lng:Number(e.lng.toFixed(3)),lat:Number(e.lat.toFixed(3))};return p.a.get("/get_google_key").then((function(e){return l(e.data.key)})).catch((function(e){return console.log(e)})),null===c?null:r.a.createElement("div",{style:{width:"400px",height:"50vh"}},r.a.createElement(d.a,{bootstrapURLKeys:{key:c,language:"fr"},options:{mapTypeControl:!1,scrollwheel:!1,panControl:!1},defaultCenter:t,defaultZoom:15},r.a.createElement((function(e){var t=e.text;return r.a.createElement("div",{className:"pin bounce"},t,r.a.createElement("div",{className:"pulse"}))}),{lat:e.lat,lng:e.lng})))}(t.position):"",i="Me"!==t.user?{image:r.a.createElement("img",{src:"https://image.flaticon.com/icons/png/512/2115/2115916.png",alt:"grandpybot"}),class:""}:{image:"",class:"message-personal"};return r.a.createElement("div",{className:"message new ".concat(i.class)},r.a.createElement("figure",{className:"avatar"},i.image),u,t.text,r.a.createElement("div",{className:"timestamp"},t.hour),r.a.createElement("div",{className:"checkmark-read"},"\u2713\u2713"))},f=r.a.createContext({conversation:null,updateConversation:null}),h=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],s=t[1],c=Object(n.useContext)(f);return r.a.createElement("div",{className:"message-box"},r.a.createElement("form",{className:"message-input",onSubmit:function(e){e.preventDefault();var t=a;c.updateConversation({user:"Me",text:t}),p.a.post("/askbot",{message:t}).then((function(e){var t=e.data.description,a=e.data.address,n=e.data.position;if(a){var r={user:"GrandPY",text:a};n&&(r.position={lng:n.lng,lat:n.lat}),c.updateConversation(r)}c.updateConversation({user:"GrandPY",text:t})})).catch((function(e){return console.log(e)})),document.querySelector(".message-input").reset()}},r.a.createElement("input",{onChange:function(e){var t=e.currentTarget.value;s(t)},type:"text",className:"message-input",placeholder:"Ask your question...",required:!0}),r.a.createElement("button",{type:"submit",className:"message-submit"},"Send")))},E=function(){var e=Object(n.useContext)(f);return r.a.createElement("section",{className:"avenue-messenger"},r.a.createElement("div",{className:"agent-face"},r.a.createElement("div",{className:"half"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{className:"agent circle",src:"https://image.flaticon.com/icons/png/512/2115/2115916.png",alt:"grandpy bot"})))),r.a.createElement("div",{className:"chat"},r.a.createElement("div",{className:"chat-title"},r.a.createElement("h1",null,"GrandPy"),r.a.createElement("h2",null,"Bot")),r.a.createElement("div",{className:"messages"},e.conversation.map((function(e){return r.a.createElement(v,{key:e.id,message:e})}))),r.a.createElement(h,null)))},b=(a(69),function(){var e=Object(n.useState)([{id:1,user:"GrandPY",text:"Bonjour ! Bienvenue sur GrandPY Bot, pose une question relative \xe0 un lieu.",hour:"Now"}]),t=Object(o.a)(e,2),a=t[0],s=t[1],c={conversation:a,updateConversation:function(e){var t=a;i.a.locale("fr");var n=i()().format("LT");e.hour=n,e.id=Math.round(1e5*Math.random()),t.push(e),s(Object(l.a)(t))}};return Object(n.useEffect)((function(){document.querySelector(".message:nth-last-child(1)").scrollIntoView(!0)})),r.a.createElement(f.Provider,{value:c},r.a.createElement(E,null))});a(70);c.a.render(r.a.createElement(b,null),document.querySelector("#root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.0211af9f.chunk.js.map