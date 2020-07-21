(this.webpackJsonpmesto=this.webpackJsonpmesto||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),s=a.n(c),o=(a(13),a(1)),i=a(2),l=a(5),p=a.n(l);var u=function(e){return r.a.createElement("header",{className:"header"},r.a.createElement("img",{className:"logo",src:p.a,alt:"Mesto Russia",lang:"en"}))},m=a(6),d=a(7),_=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(m.a)(this,e),this._baseUrl=a,this._headers=n,console.log(this._baseUrl)}return Object(d.a)(e,[{key:"_response",value:function(e){return e.ok?e.json():Promise.reject("error".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._response)}},{key:"getDefaultCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._response)}},{key:"updateUserInfo",value:function(e){var t=e.name,a=e.description;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:a})}).then(this._response)}},{key:"addNewCard",value:function(e){var t=e.title,a=e.link;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:a})}).then(this._response)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._response)}},{key:"setLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._response)}},{key:"removeLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._response)}},{key:"setUserAvatar",value:function(e){var t=e.avatar;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then(this._response)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-12",headers:{authorization:"246d132c-15dc-4567-a2e3-3aa37ea260d6","Content-Type":"application/json"}});var h=function(e){var t=e.card;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{onClick:function(){e.click(t)},className:"card__image",alt:"\u0444\u043e\u0442\u043e",src:t.link}),r.a.createElement("button",{className:"card__delete-button card__delete-button_visiable"}),r.a.createElement("div",{className:"card__info"},r.a.createElement("h2",{className:"card__title"},t.name),r.a.createElement("div",{className:"card__like-wrapper"},r.a.createElement("button",{className:"card__like-button",type:"button"}),r.a.createElement("p",{className:"card__like-counter"},t.likes.length))))};var f=function(e){var t=r.a.useState(),a=Object(i.a)(t,2),n=a[0],c=a[1],s=r.a.useState(),o=Object(i.a)(s,2),l=o[0],p=o[1],u=r.a.useState(),m=Object(i.a)(u,2),d=m[0],f=m[1],b=r.a.useState([]),E=Object(i.a)(b,2),v=E[0],N=E[1];return r.a.useEffect((function(){_.getUserInfo().then((function(e){c(e.name),p(e.about),f(e.avatar)})).catch((function(e){console.log(e)}))}),[]),r.a.useEffect((function(){_.getDefaultCards().then((function(e){N(e)})).catch((function(e){console.log(e)}))}),[]),r.a.createElement("main",{className:"content"},r.a.createElement("section",{className:"profile"},r.a.createElement("div",{className:"profile__container"},r.a.createElement("button",{onClick:e.editAvatar,className:"profile__avatar-button"},r.a.createElement("img",{className:"profile__avatar",alt:"\u0412\u0430\u0448\u0435 \u0444\u043e\u0442\u043e",src:d})),r.a.createElement("div",{className:"profile__info"},r.a.createElement("div",{className:"profile__wrapper"},r.a.createElement("h1",{className:"profile__title"},n),r.a.createElement("button",{className:"profile__edit-button",type:"button",onClick:e.editProfile})),r.a.createElement("p",{className:"profile__subtitle"},l))),r.a.createElement("button",{className:"open-newcard-popup-button",onClick:e.addPlace})),r.a.createElement("section",{className:"cards-container"},v.map((function(t){return r.a.createElement(h,{key:t._id,card:t,click:e.showPic})}))))};var b=function(e){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__copyright",lang:"en"},"\xa92020 Mesto Russia"))};var E=function(e){return r.a.createElement("div",{className:"popup ".concat(e.isOpen&&"popup_opened"),id:e.id},r.a.createElement("form",{className:"popup__container popup__container_".concat(e.size),noValidate:!0},r.a.createElement("button",{className:"popup__close-button",id:"close-avatar-popup-button",type:"button",onClick:e.close}),r.a.createElement("h2",{className:"popup__title"},e.title),e.children,r.a.createElement("button",{className:"popup__submit-button",type:"submit"},e.submitButtonText)))};var v=function(e){return r.a.createElement("div",{className:"popup ".concat(e.isOpen&&"popup_opened"),id:"pic-popup"},r.a.createElement("div",{className:"popup__wrapper"},r.a.createElement("img",{className:"popup__image",alt:"\u0444\u043e\u0442\u043e",src:e.cardInfo.link}),r.a.createElement("button",{onClick:e.close,className:"popup__close-button",id:"close-picpopup",type:"button"}),r.a.createElement("h2",{className:"popup__image-title"},e.cardInfo.name)))};var N=function(){var e,t,a,n=r.a.useState(!1),c=Object(i.a)(n,2),s=c[0],l=c[1],p=r.a.useState(!1),m=Object(i.a)(p,2),d=m[0],_=m[1],h=r.a.useState(!1),N=Object(i.a)(h,2),O=N[0],k=N[1],g=r.a.useState(!1),j=Object(i.a)(g,2),y=j[0],w=j[1],x=r.a.useState({}),U=Object(i.a)(x,2),S=U[0],C=U[1];function P(){l(!1),_(!1),k(!1),w(!1)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,null),r.a.createElement(f,{editAvatar:function(){l(!0)},editProfile:function(){_(!0)},addPlace:function(){k(!0)},showPic:function(e){w(!0),C(e)}}),r.a.createElement(b,null),r.a.createElement(E,{isOpen:s,id:"avatar-popup",size:"medium",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",close:P,submitButtonText:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c"},r.a.createElement("div",{className:"popup__input-wrapper"},r.a.createElement("input",{type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",className:"popup__input",id:"input-avatar-link",required:!0}),r.a.createElement("span",{className:"popup__error-text",id:"input-avatar-link-error"}))),r.a.createElement(E,{isOpen:d,id:"profile-edit-popup",size:"large",title:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435",close:P,submitButtonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"},r.a.createElement("fieldset",{className:"popup__fieldset"},r.a.createElement("div",{className:"popup__input-wrapper"},r.a.createElement("input",(e={type:"text",placeholder:"\u0418\u043c\u044f"},Object(o.a)(e,"type","text"),Object(o.a)(e,"className","popup__input"),Object(o.a)(e,"id","input-profile-title"),Object(o.a)(e,"minLength","2"),Object(o.a)(e,"maxLength","40"),Object(o.a)(e,"pattern","[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\\s\\-]{1,}"),Object(o.a)(e,"required",!0),e)),r.a.createElement("span",{className:"popup__error-text",id:"input-profile-title-error"})),r.a.createElement("div",{className:"popup__input-wrapper"},r.a.createElement("input",(t={type:"text",placeholder:"\u041e \u0441\u0435\u0431\u0435"},Object(o.a)(t,"type","text"),Object(o.a)(t,"className","popup__input"),Object(o.a)(t,"id","input-profile-subtitle"),Object(o.a)(t,"minLength","2"),Object(o.a)(t,"maxLength","200"),Object(o.a)(t,"required",!0),t)),r.a.createElement("span",{className:"popup__error-text",id:"input-profile-subtitle-error"})))),r.a.createElement(E,{isOpen:O,id:"newcard-popup",size:"large",title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043c\u0435\u0441\u0442\u043e",close:P,submitButtonText:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"},r.a.createElement("fieldset",{className:"popup__fieldset"},r.a.createElement("div",{className:"popup__input-wrapper"},r.a.createElement("input",(a={type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"},Object(o.a)(a,"type","text"),Object(o.a)(a,"className","popup__input"),Object(o.a)(a,"id","input-card-title"),Object(o.a)(a,"minLength","1"),Object(o.a)(a,"maxLength","30"),Object(o.a)(a,"required",!0),a)),r.a.createElement("span",{className:"popup__error-text",id:"input-card-title-error"})),r.a.createElement("div",{className:"popup__input-wrapper"},r.a.createElement("input",{type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input",id:"input-card-link",required:!0}),r.a.createElement("span",{className:"popup__error-text",id:"input-card-link-error"})))),r.a.createElement(v,{isOpen:y,close:P,cardInfo:S}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,a){e.exports=a.p+"static/media/logo.697f7460.svg"},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.7dd2f552.chunk.js.map