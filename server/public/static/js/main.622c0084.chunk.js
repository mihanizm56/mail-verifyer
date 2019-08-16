(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){},119:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){},138:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(58),c=n.n(o),s=n(36),l=n(18),u=n(69),i=n(21),m=n.n(i),d=n(5),f="SEND_USER_EMAIL",E=function(e){return{type:"ADD_SENDER_USERNAME",payload:e}},b=function(e){return{type:"ERROR_SENDER_FETCH",payload:e}},p=function(){return{type:"LOADING_START_SENDER"}},v=function(){return{type:"LOADING_FINISH_SENDER"}},_=function(e){var t=e.token;return console.log("\u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u0442\u043e\u043a\u0435\u043d\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",t),function(e){var t=e.endpoint;return console.log("endpoint",t)||fetch(t).then(function(e){return e.json()}).catch(function(e){return console.log("////////////",e)||{error:"request-error",message:""}})}({endpoint:"".concat("/user","/").concat(t)})},O=function(e){var t=e.body;return console.log("\u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0430 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",t),function(e){var t=e.endpoint,n=e.data,r={method:"PUT",headers:{Accept:"application/json","Access-Control-Allow-Origin":"*","Content-Type":"application/json","Cache-Control":"no-cache"},body:JSON.stringify(n)};return fetch(t,r).then(function(e){return e.json()}).catch(function(e){return{error:"request-error",message:""}})}({endpoint:"/user",data:t})},g=function(e){return setTimeout(function(){},e)},N=n(7),h=function(e){console.log("errorCreator",e);var t=Object(N.b)().t;switch(e){case"internal server error":return t("errors.server");case"enter the correct data":return t("errors.userdata");case"token is not valid":default:return t("errors.server")}},x=m.a.mark(j);function j(e){var t,n,r;return m.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(d.b)(p());case 2:return a.next=4,g(2e3);case 4:return console.log("check sendUserEmailSaga",e),a.prev=5,a.next=8,Object(d.a)(O,{body:e.payload});case 8:if(t=a.sent,n=t.message,r=t.error,console.log("sendUserEmailSaga result",t),!r){a.next=17;break}return console.log("saga request failed",r),a.next=15,Object(d.b)(b(r));case 15:return a.next=17,Object(d.b)(v());case 17:if(!n||r||!e.payload.name){a.next=23;break}return console.log("saga request success",e.payload.name),a.next=21,Object(d.b)(E(e.payload.name));case 21:return a.next=23,Object(d.b)(v());case 23:a.next=32;break;case 25:return a.prev=25,a.t0=a.catch(5),console.log("error in sendUserEmailSaga",a.t0),a.next=30,Object(d.b)(b(a.t0));case 30:return a.next=32,Object(d.b)(v());case 32:case"end":return a.stop()}},x,null,[[5,25]])}var S=n(29),y=Object(S.a)([function(e){return e.senderDataStorage.isLoading}],function(e){return e}),D=Object(S.a)([function(e){return e.senderDataStorage.error}],function(e){return e}),k=Object(S.a)([function(e){return e.senderDataStorage.username}],function(e){return e}),A=n(30),R=n.n(A),w=n(20),T=n.n(w),L={isLoading:!1,error:null,username:""},C=R()(["isLoading"]),I=R()(["error"]),B=R()(["username"]),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_SENDER_USERNAME":return T()(B,t.payload,e);case"LOADING_START_SENDER":return T()(C,!0,e);case"LOADING_FINISH_SENDER":return T()(C,!1,e);case"ERROR_SENDER_FETCH":return T()(I,t.payload,e);case"NEW_MESSAGE":return L;default:return e}},V="VALIDATE_USER",F=function(e){return{type:"ADD_VALIDATOR_USERNAME",payload:e}},G=function(e){return{type:"ERROR_VALIDATE_FETCH",payload:e}},M=function(){return{type:"LOADING_START_VALIDATOR"}},H=function(){return{type:"LOADING_FINISH_VALIDATOR"}},q=m.a.mark(P);function P(e){var t,n,r,a;return m.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,Object(d.b)(M());case 3:return o.next=5,g(1e4);case 5:return console.log("check validateUserEmailSaga",e),o.next=8,Object(d.a)(_,{token:e.payload});case 8:if(t=o.sent,console.log("resultOfRequest",t),n=t.message,r=t.error,a=t.username,console.log("validateUserEmailSaga result",t),!r){o.next=20;break}return console.log("saga request failed",r),o.next=16,Object(d.b)(G(r));case 16:return o.next=18,Object(d.b)(F(a));case 18:return o.next=20,Object(d.b)(H());case 20:if(!n||r||!a){o.next=26;break}return console.log("saga request success",a),o.next=24,Object(d.b)(F(a));case 24:return o.next=26,Object(d.b)(H());case 26:o.next=35;break;case 28:return o.prev=28,o.t0=o.catch(0),console.log("get error in validateUserEmailSaga",o.t0),o.next=33,Object(d.b)(G(o.t0));case 33:return o.next=35,Object(d.b)(H());case 35:case"end":return o.stop()}},q,null,[[0,28]])}var X=Object(S.a)([function(e){return e.validatorDataStorage.isLoading}],function(e){return e}),J=Object(S.a)([function(e){return e.validatorDataStorage.error}],function(e){return e}),W=Object(S.a)([function(e){return e.validatorDataStorage.username}],function(e){return e}),Y={isLoading:!1,error:null,username:""},z=R()(["isLoading"]),K=R()(["error"]),Q=R()(["username"]),Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_VALIDATOR_USERNAME":return T()(Q,t.payload,e);case"LOADING_START_VALIDATOR":return T()(z,!0,e);case"LOADING_FINISH_VALIDATOR":return T()(z,!1,e);case"ERROR_VALIDATE_FETCH":return T()(K,t.payload,e);default:return e}},$=m.a.mark(ee);function ee(){return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.c)(f,j);case 2:return e.next=4,Object(d.c)(V,P);case 4:case"end":return e.stop()}},$)}var te=ee,ne=Object(l.c)({senderDataStorage:U,validatorDataStorage:Z}),re=n(26),ae=n(27),oe=n.n(ae),ce=(n(110),function(e){var t=e.to,n=e.text,r=e.handleButtonClick;return a.a.createElement(re.b,{exact:!0,to:t,className:oe()("link-button"),onClick:r},a.a.createElement(me,{text:n,isButton:!0}))});ce.defaultProps={handleButtonClick:function(){return console.log("default handleButtonClick")}};n(116);var se=Object(r.memo)(function(e){var t=e.path;return a.a.createElement("object",{type:"image/svg+xml",data:"".concat(t),className:"icon",alt:"icon"},">Your browser does not support SVGs")}),le=n(63),ue=n.n(le),ie=(n(57),n(117),function(){return a.a.createElement("div",{className:"loader"},a.a.createElement(se,{path:ue.a,className:"loader"}))}),me=(n(118),function(e){var t=e.text,n=(e.bold,e.isButton);return a.a.createElement("span",{className:oe()("open-sans-text",{"open-sans-text--button":n})},t)}),de=(n(119),function(e){var t=e.text,n=e.handleButtonClick,r=e.type;return a.a.createElement("button",{type:r,className:oe()("button"),onClick:n},a.a.createElement(me,{text:t,isButton:!0}))});de.defaultProps={handleButtonClick:function(){return console.log("default handleButtonClick")}};var fe=n(64),Ee=n.n(fe),be=(n(120),function(e){var t=e.error,n=e.handleButtonClick,r=h(t),o=Object(N.b)().t;return a.a.createElement("div",{className:"error-modal"},a.a.createElement(se,{path:Ee.a}),a.a.createElement("div",{className:"error-modal__content"},a.a.createElement(me,{text:o("errors.error-type-label")}),a.a.createElement(me,{text:r})),a.a.createElement("div",{className:"error-modal__button"},a.a.createElement(ce,{to:"/send",text:o("buttons.send-new"),handleButtonClick:n})))});be.defaultProps={handleButtonClick:function(){return console.log("default handleButtonClick")}};n(121);var pe=function(e){var t=e.handleButtonClick,n=e.successText,r=e.buttonClickRedirectsTo,o=Object(N.b)().t;return a.a.createElement("div",{className:"success-modal"},a.a.createElement("div",{className:"success-modal__text"},a.a.createElement(me,{text:n})),a.a.createElement("div",{className:"success-modal__button"},a.a.createElement(ce,{to:r,text:o("buttons.send-new"),handleButtonClick:t})))},ve=n(8),_e=n(9),Oe=n(19),ge=n(22),Ne=n(24),he=n(31),xe=(n(122),function(e){function t(){var e,n;Object(ve.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(n=Object(Oe.a)(this,(e=Object(ge.a)(t)).call.apply(e,[this].concat(o)))).render=function(){var e=n.props,t=e.values,r=e.isLoading,o=e.t;return a.a.createElement("div",{className:oe()("user-form-wrapper",{"user-form-wrapper--loading":r})},r?a.a.createElement(ie,null):a.a.createElement(he.d,null,a.a.createElement(he.c,{name:"email-sender",render:function(){return a.a.createElement("div",{className:"user-form"},a.a.createElement("div",{className:"user-form__row"},a.a.createElement(me,{text:o("form.title")})),a.a.createElement("div",{className:"user-form__row"},a.a.createElement("div",{className:"user-form__field-block"},a.a.createElement("label",{htmlFor:"name",className:"user-form__label"},a.a.createElement(me,{text:o("form.labels.username")})),a.a.createElement(he.b,{className:"user-form__text-field",name:"name",value:t.name,type:"text"})),a.a.createElement("div",{className:"user-form__error"},a.a.createElement(he.a,{name:"name",component:"div",className:"user-form__error-text"}))),a.a.createElement("div",{className:"user-form__row"},a.a.createElement("div",{className:"user-form__field-block"},a.a.createElement("label",{htmlFor:"email",className:"user-form__label"},a.a.createElement(me,{text:o("form.labels.email")})),a.a.createElement(he.b,{className:"user-form__text-field",name:"email",value:t.email,type:"email"})),a.a.createElement("div",{className:"user-form__error"},a.a.createElement(he.a,{name:"email",component:"div",className:"user-form__error-text"}))),a.a.createElement("div",{className:"user-form__row user-form__row--button"},a.a.createElement(de,{type:"submit",text:o("buttons.validate")})))}})))},n}return Object(Ne.a)(t,e),Object(_e.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.error,r=t.setErrors;n&&e.error!==n&&(console.log("//////////////////",n),r({name:n,email:n}))}}]),t}(r.Component)),je=Object(N.c)()(xe),Se=Object(he.e)({handleSubmit:function(e,t){t.props.submitFunc(e)},mapPropsToValues:function(){return{}}})(je),ye=n(33),De=function(){return a.a.createElement(ye.b,{component:we})},ke=function(e){return a.a.createElement(ye.b,Object.assign({component:Te},e))},Ae=function(){return a.a.createElement(ye.d,null,a.a.createElement(De,{exact:!0,path:"/user"}),a.a.createElement(ke,{exact:!0,path:"/user/:token"}),a.a.createElement(ye.a,{to:"/user"}))},Re=(n(123),Object(r.memo)(function(e){return a.a.createElement("div",{className:"main-wrapper"},a.a.createElement(Ae,null))})),we=function(){return a.a.createElement("div",{className:"send-page-container"},a.a.createElement(Fe,null))},Te=function(e){var t=e.match,n=(t=void 0===t?{}:t).params,r=(n=void 0===n?{}:n).token;return a.a.createElement("div",{className:"verification-page-container"},a.a.createElement(Ue,{token:r}))},Le=(n(124),Object(r.memo)(function(){return a.a.createElement("div",{className:"global-wrapper"},a.a.createElement(Re,null))})),Ce="/send",Ie=function(e){function t(){var e,n;Object(ve.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(n=Object(Oe.a)(this,(e=Object(ge.a)(t)).call.apply(e,[this].concat(o)))).contentSwitcher=function(){var e=n.props,t=e.username,r=e.error,o=(e.isLoading,e.t);return Boolean(r)?a.a.createElement(be,{errorText:r}):Boolean(t)?a.a.createElement(pe,{buttonClickRedirectsTo:Ce,successText:o("success.verified",{username:t})}):a.a.createElement(ie,null)},n.render=function(){return n.contentSwitcher()},n}return Object(Ne.a)(t,e),Object(_e.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.fetchValidateUserEmail)(e.token)}}]),t}(r.Component),Be=Object(s.b)(function(e){return{isLoading:X(e),error:J(e),username:W(e)}},{fetchValidateUserEmail:function(e){return{type:V,payload:e}}})(Ie),Ue=Object(N.c)()(Be),Ve=function(e){var t=e.username;return(0,Object(N.b)().t)("success.send-email",{username:t})},Fe=Object(s.b)(function(e){return{isLoading:y(e),error:D(e),username:k(e)}},{fetchSendUserEmail:function(e){return{type:f,payload:e}},createNewMail:function(){return{type:"NEW_MESSAGE"}}})(function(e){var t=e.username,n=e.error,r=e.fetchSendUserEmail,o=e.isLoading,c=e.createNewMail,s=n&&h(n);return Boolean(n)||!Boolean(t)||Boolean(o)?a.a.createElement(Se,{error:s,isLoading:o,submitFunc:r}):a.a.createElement(pe,{buttonClickRedirectsTo:Ce,handleButtonClick:c,successText:Ve({username:t})})}),Ge=(n(125),n(126),n(127),n(128),n(55)),Me=n(67),He=n(68),qe=n.n(He);Ge.a.use(Me.a).use(qe.a).use(N.a).init({fallbackLng:"en",debug:!0,backend:{allowMultiLoading:!1},interpolation:{escapeValue:!1},load:"languageOnly"});Ge.a;var Pe=document.getElementById("root"),Xe=function(){var e=Object(u.a)(),t=Object(l.e)(ne,Object(l.d)(Object(l.a)(e),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}));return e.run(te),t}();c.a.render(a.a.createElement(s.a,{store:Xe},a.a.createElement(re.a,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null)},a.a.createElement(Le,null)))),Pe)},57:function(e,t,n){},63:function(e,t,n){e.exports=n.p+"static/media/icon-loading.904f1366.svg"},64:function(e,t,n){e.exports=n.p+"static/media/icon-error.19b7198f.svg"},70:function(e,t,n){e.exports=n(138)}},[[70,1,2]]]);
//# sourceMappingURL=main.622c0084.chunk.js.map