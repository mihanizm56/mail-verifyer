(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,n){},147:function(e,t,n){e.exports=n.p+"static/media/icon-loading.904f1366.svg"},148:function(e,t,n){e.exports=n.p+"static/media/icon-error.19b7198f.svg"},159:function(e,t,n){e.exports=n(357)},199:function(e,t,n){},205:function(e,t,n){},206:function(e,t,n){},207:function(e,t,n){},208:function(e,t,n){},209:function(e,t,n){},210:function(e,t,n){},338:function(e,t,n){},339:function(e,t,n){},340:function(e,t,n){},341:function(e,t,n){},342:function(e,t,n){},343:function(e,t,n){},344:function(e,t,n){},345:function(e,t,n){},346:function(e,t,n){},347:function(e,t,n){},357:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(141),c=n.n(o),u=n(47),s=n(23),l=n(156),i=n(11),m=n.n(i),d=n(5),f="SEND_USER_EMAIL",E=function(e){return{type:"ADD_SENDER_USERNAME",payload:e}},b=function(e){return{type:"ERROR_SENDER_FETCH",payload:e}},p=function(e){return{type:"ERROR_SENDER_RESET"}},v=function(){return{type:"LOADING_START_SENDER"}},_=function(){return{type:"LOADING_FINISH_SENDER"}},O=n(143),N="/send",g="internal server error",h=function(){var e=Object(O.a)(m.a.mark(function e(t){var n,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.request,r=new Promise(function(e){return setTimeout(function(){return e({error:"request-error",message:""})},2200)}),e.abrupt("return",Promise.race([n,r]));case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),x=function(e){var t=e.token;return function(e){var t=e.endpoint,n=fetch(t).then(function(e){return e.json()}).catch(function(e){return console.log("getRequest error",e)||{error:"request-error",message:""}});return h({request:n})}({endpoint:"".concat("/user","/").concat(t)})},j=function(e){return function(e){var t=e.endpoint,n=e.data,r={method:"PUT",headers:{Accept:"application/json","Access-Control-Allow-Origin":"*","Content-Type":"application/json","Cache-Control":"no-cache"},body:JSON.stringify(n)},a=fetch(t,r).then(function(e){return e.json()}).catch(function(e){return{error:"request-error",message:""}});return h({request:a})}({endpoint:"/user",data:e.body})},S=function(e){return setTimeout(function(){},e)},R=n(8),D=function(e){console.log("errorCreator",e);var t=Object(R.b)().t;switch(e){case g:return t("errors.server");case"enter the correct data":return t("errors.userdata");case"token is not valid":default:return t("errors.server")}},y=m.a.mark(A);function A(e){var t,n,r,a;return m.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(d.b)(v());case 2:return o.next=4,Object(d.b)(p());case 4:return o.next=6,S(5e3);case 6:return o.prev=6,o.next=9,Object(d.a)(j,{body:e.payload});case 9:if(t=o.sent,n=t.message,r=t.error,!(a=void 0===r?g:r)){o.next=16;break}return o.next=14,Object(d.b)(b(a));case 14:return o.next=16,Object(d.b)(_());case 16:if(!n||a||!e.payload.username){o.next=21;break}return o.next=19,Object(d.b)(E(e.payload.username));case 19:return o.next=21,Object(d.b)(_());case 21:o.next=30;break;case 23:return o.prev=23,o.t0=o.catch(6),console.log("error in sendUserEmailSaga",o.t0),o.next=28,Object(d.b)(b(o.t0));case 28:return o.next=30,Object(d.b)(_());case 30:case"end":return o.stop()}},y,null,[[6,23]])}var k=n(29),w=Object(k.a)([function(e){return e.senderDataStorage.isLoading}],function(e){return e}),T=Object(k.a)([function(e){return e.senderDataStorage.error}],function(e){return e}),L=Object(k.a)([function(e){return e.senderDataStorage.username}],function(e){return e}),C=n(30),I=n.n(C),B=n(17),V=n.n(B),U={isLoading:!1,error:null,username:""},F=I()(["isLoading"]),M=I()(["error"]),q=I()(["username"]),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_SENDER_USERNAME":return V()(q,t.payload,e);case"LOADING_START_SENDER":return V()(F,!0,e);case"LOADING_FINISH_SENDER":return V()(F,!1,e);case"ERROR_SENDER_FETCH":return V()(M,t.payload,e);case"ERROR_SENDER_RESET":return V()(M,null,e);case"NEW_MESSAGE":return U;default:return e}},H="VALIDATE_USER",P=function(e){return{type:"ADD_VALIDATOR_USERNAME",payload:e}},X=function(e){return{type:"ERROR_VALIDATE_FETCH",payload:e}},J=function(){return{type:"LOADING_START_VALIDATOR"}},W=function(){return{type:"LOADING_FINISH_VALIDATOR"}},Y=m.a.mark(z);function z(e){var t,n,r,a;return m.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,Object(d.b)(J());case 3:return o.next=5,Object(d.a)(x,{token:e.payload});case 5:if(t=o.sent,n=t.message,r=t.error,a=t.username,!r){o.next=10;break}return o.next=10,Object(d.b)(X(r));case 10:if(!n||r||!a){o.next=13;break}return o.next=13,Object(d.b)(P(a));case 13:return o.next=15,Object(d.b)(W());case 15:o.next=24;break;case 17:return o.prev=17,o.t0=o.catch(0),console.log("get error in validateUserEmailSaga",o.t0),o.next=22,Object(d.b)(X(o.t0));case 22:return o.next=24,Object(d.b)(W());case 24:case"end":return o.stop()}},Y,null,[[0,17]])}var K=Object(k.a)([function(e){return e.validatorDataStorage.isLoading}],function(e){return e}),Q=Object(k.a)([function(e){return e.validatorDataStorage.error}],function(e){return e}),Z=Object(k.a)([function(e){return e.validatorDataStorage.username}],function(e){return e}),$={isLoading:!1,error:null,username:""},ee=I()(["isLoading"]),te=I()(["error"]),ne=I()(["username"]),re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_VALIDATOR_USERNAME":return V()(ne,t.payload,e);case"LOADING_START_VALIDATOR":return V()(ee,!0,e);case"LOADING_FINISH_VALIDATOR":return V()(ee,!1,e);case"ERROR_VALIDATE_FETCH":return V()(te,t.payload,e);default:return e}},ae=m.a.mark(oe);function oe(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.c)(f,A);case 2:return e.next=4,Object(d.c)(H,z);case 4:case"end":return e.stop()}},ae)}var ce=oe,ue=Object(s.c)({senderDataStorage:G,validatorDataStorage:re}),se=n(36),le=n(27),ie=n.n(le),me=(n(199),function(e){var t=e.to,n=e.text,r=e.handleButtonClick;return a.a.createElement(se.b,{exact:!0,to:t,className:ie()("link-button"),onClick:r},a.a.createElement(pe,{text:n,isButton:!0}))});me.defaultProps={handleButtonClick:function(){return console.log("default handleButtonClick")}};n(205);var de=Object(r.memo)(function(e){var t=e.path;return a.a.createElement("object",{type:"image/svg+xml",data:"".concat(t),className:"icon",alt:"icon"},">Your browser does not support SVGs")}),fe=n(147),Ee=n.n(fe),be=(n(101),n(206),function(){return a.a.createElement("div",{className:"loader"},a.a.createElement(de,{path:Ee.a,className:"loader"}))}),pe=(n(207),function(e){var t=e.text,n=(e.bold,e.isButton);return a.a.createElement("span",{className:ie()("open-sans-text",{"open-sans-text--button":n})},t)}),ve=(n(208),function(e){var t=e.text,n=e.handleButtonClick,r=e.type;return a.a.createElement("button",{type:r,className:ie()("button"),onClick:n},a.a.createElement(pe,{text:t,isButton:!0}))});ve.defaultProps={handleButtonClick:function(){return console.log("default handleButtonClick")}};var _e=n(148),Oe=n.n(_e),Ne=(n(209),function(e){var t=e.error,n=e.handleButtonClick,r=D(t),o=Object(R.b)().t;return a.a.createElement("div",{className:"error-modal"},a.a.createElement(de,{path:Oe.a}),a.a.createElement("div",{className:"error-modal__content"},a.a.createElement(pe,{text:o("errors.error-type-label")}),a.a.createElement(pe,{text:r})),a.a.createElement("div",{className:"error-modal__button"},a.a.createElement(me,{to:"/send",text:o("buttons.send-new"),handleButtonClick:n})))});Ne.defaultProps={handleButtonClick:function(){return console.log("default handleButtonClick")}};n(210);var ge=function(e){var t=e.handleButtonClick,n=e.successText,r=e.buttonClickRedirectsTo,o=Object(R.b)().t;return a.a.createElement("div",{className:"success-modal"},a.a.createElement("div",{className:"success-modal__text"},a.a.createElement(pe,{text:n})),a.a.createElement("div",{className:"success-modal__button"},a.a.createElement(me,{to:r,text:o("buttons.send-new"),handleButtonClick:t})))},he=n(49),xe=n(74),je=(n(338),n(339),function(e){var t=e.submissionError,n=e.error;console.log("ErrorMessageCustom",t,n);var r=Boolean(n)?n:t;return a.a.createElement("span",{className:"error-message-custom"},r)}),Se=xe.object().shape({username:xe.string().min(2,"short").max(50,"long").required("required"),email:xe.string().min(2,"short").max(50,"long").email("email").required("required")}),Re=Object(r.memo)(function(e){var t=e.values,n=e.isLoading,r=e.submissionError,o=e.errors,c=e.t,u=Boolean(o)&&o.username,s=Boolean(o)&&Boolean(o.email)&&c("validation-errors.email.".concat(o.email));return a.a.createElement("div",{className:ie()("user-form-wrapper",{"user-form-wrapper--loading":n})},n?a.a.createElement(be,null):a.a.createElement(he.c,null,a.a.createElement(he.b,{name:"email-sender",render:function(){return a.a.createElement("div",{className:"user-form"},a.a.createElement("div",{className:"user-form__row"},a.a.createElement(pe,{text:c("form.title")})),a.a.createElement("div",{className:"user-form__row"},a.a.createElement("div",{className:"user-form__field-block"},a.a.createElement("label",{htmlFor:"username",className:"user-form__label"},a.a.createElement(pe,{text:c("form.labels.username")})),a.a.createElement(he.a,{className:"user-form__text-field",name:"username",value:t.username,type:"text"})),a.a.createElement("div",{className:"user-form__error"},a.a.createElement(je,{error:u,submissionError:r}))),a.a.createElement("div",{className:"user-form__row"},a.a.createElement("div",{className:"user-form__field-block"},a.a.createElement("label",{htmlFor:"email",className:"user-form__label"},a.a.createElement(pe,{text:c("form.labels.email")})),a.a.createElement(he.a,{className:"user-form__text-field",name:"email",value:t.email,type:"email"})),a.a.createElement("div",{className:"user-form__error"},a.a.createElement(je,{error:s,submissionError:r}))),a.a.createElement("div",{className:"user-form__row user-form__row--button"},a.a.createElement(ve,{type:"submit",text:c("buttons.validate")})))}})))}),De=Object(R.c)()(Re),ye=Object(he.d)({handleSubmit:function(e,t){var n=t.props;t.setStatus;n.submitFunc(e)},mapPropsToValues:function(e){return{email:"",username:""}},validationSchema:Se})(De),Ae=n(37),ke=function(){return a.a.createElement(Ae.b,{component:Ce})},we=function(e){return a.a.createElement(Ae.b,Object.assign({component:Ie},e))},Te=function(){return a.a.createElement(Ae.d,null,a.a.createElement(ke,{exact:!0,path:"/send"}),a.a.createElement(we,{exact:!0,path:"/verify/:token"}),a.a.createElement(Ae.a,{to:"/send"}))},Le=(n(340),Object(r.memo)(function(e){return a.a.createElement("div",{className:"main-wrapper"},a.a.createElement(Te,null))})),Ce=(n(341),function(){return a.a.createElement("div",{className:"send-page"},a.a.createElement(Je,null))}),Ie=(n(342),function(e){var t=e.match,n=(t=void 0===t?{}:t).params,r=(n=void 0===n?{}:n).token;return a.a.createElement("div",{className:"verification-page"},a.a.createElement(Pe,{token:r}))}),Be=(n(343),Object(r.memo)(function(){return a.a.createElement("div",{className:"global-wrapper"},a.a.createElement(Le,null))})),Ve=n(151),Ue=n(152),Fe=n(157),Me=n(153),qe=n(158),Ge=function(e){function t(){var e,n;Object(Ve.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(n=Object(Fe.a)(this,(e=Object(Me.a)(t)).call.apply(e,[this].concat(o)))).contentSwitcher=function(){var e=n.props,t=e.username,r=e.error,o=e.t;return Boolean(r)?a.a.createElement(Ne,{errorText:r}):Boolean(t)?a.a.createElement(ge,{buttonClickRedirectsTo:N,successText:o("success.verified",{username:t})}):a.a.createElement(be,null)},n.render=function(){return n.contentSwitcher()},n}return Object(qe.a)(t,e),Object(Ue.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.fetchValidateUserEmail)(e.token)}}]),t}(r.Component),He=Object(u.b)(function(e){return{isLoading:K(e),error:Q(e),username:Z(e)}},{fetchValidateUserEmail:function(e){return{type:H,payload:e}}})(Ge),Pe=Object(R.c)()(He),Xe=function(e){var t=e.username;return(0,Object(R.b)().t)("success.send-email",{username:t})},Je=Object(u.b)(function(e){return{isLoading:w(e),error:T(e),username:L(e)}},{fetchSendUserEmail:function(e){return{type:f,payload:e}},createNewMail:function(){return{type:"NEW_MESSAGE"}}})(function(e){var t=e.username,n=e.error,r=e.fetchSendUserEmail,o=e.isLoading,c=e.createNewMail,u=n&&D(n);return Boolean(n)||!Boolean(t)||Boolean(o)?a.a.createElement("div",null,a.a.createElement(ye,{submissionError:u,isLoading:o,submitFunc:r})):a.a.createElement(ge,{buttonClickRedirectsTo:N,handleButtonClick:c,successText:Xe({username:t})})}),We=(n(344),n(345),n(346),n(347),n(99)),Ye=n(154),ze=n(155),Ke=n.n(ze);We.a.use(Ye.a).use(Ke.a).use(R.a).init({fallbackLng:"en",debug:!0,backend:{allowMultiLoading:!1},interpolation:{escapeValue:!1},load:"languageOnly"});We.a;var Qe=document.getElementById("root"),Ze=function(){var e=Object(l.a)(),t=Object(s.e)(ue,Object(s.d)(Object(s.a)(e),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}));return e.run(ce),t}();c.a.render(a.a.createElement(u.a,{store:Ze},a.a.createElement(se.a,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null)},a.a.createElement(Be,null)))),Qe)}},[[159,1,2]]]);
//# sourceMappingURL=main.41da575e.chunk.js.map