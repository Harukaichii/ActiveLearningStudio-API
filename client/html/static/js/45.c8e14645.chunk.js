(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[45],{379:function(e,t,r){"use strict";r.d(t,"d",(function(){return i})),r.d(t,"f",(function(){return u})),r.d(t,"e",(function(){return l})),r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return j})),r.d(t,"c",(function(){return f}));var n,s,a=r(385),c=r(387),o=r(386);function i(e){if(e.errors&&!Array.isArray(e.errors)&&"object"===typeof e.errors){var t=[];return Object.keys(e.errors).forEach((function(r){Array.isArray(e.errors[r])&&(t=t.concat(e.errors[r]))})),{errors:t}}return e}var u=function(e){return e&&e.trim()?void 0:"* Required"},l=function(e){return function(t){return t&&t.length>e?"* Must be ".concat(e," characters or less"):void 0}},b=Object(c.b)(n||(n=Object(a.a)(["",""])),o.fadeIn),d=c.a.div(s||(s=Object(a.a)(["\n  animation: 0.8s ",";\n"])),b),j=function(e){return!new RegExp("[^0-9a-zA-Z@ ._-]").test(e)},f=function(e){return!new RegExp("[^a-zA-Z]").test(e)}},393:function(e,t,r){"use strict";r(3);var n=r(2);function s(e){var t=e.error;if(!t)return null;var r="";return"string"===typeof t&&(r=t),"object"===typeof t&&(t.errors&&t.errors.length>0&&(r=t.errors[0]),t.message?r=t.message:t.error&&(r=t.error)),Object(n.jsx)("p",{className:"error-msg alert alert-danger",role:"alert",children:r})}s.defaultProps={error:null},t.a=s},977:function(e,t,r){"use strict";r.r(t);var n=r(4),s=r.n(n),a=r(6),c=r(27),o=r(3),i=r(12),u=r(21),l=r(24),b=r(420),d=r.n(b),j=r(30),f=r(8),m=r.n(f),h=r(146),p=r(147),O=r(52),g=r(51),x=r(379),v=r(393),w=r(150),y=(r(225),r(2));t.default=Object(l.h)(Object(i.b)((function(e){return{isLoading:e.auth.isLoading}}),(function(e){return{forgotPassword:function(t){return e(Object(g.d)(t))}}}))((function(e){var t=e.isLoading,r=e.forgotPassword,n=Object(o.useState)(""),i=Object(c.a)(n,2),l=i[0],b=i[1],f=Object(o.useState)(null),g=Object(c.a)(f,2),k=g[0],N=g[1],P=Object(o.useCallback)((function(e){b(e.target.value.trim())}),[b]),A=Object(o.useCallback)(function(){var e=Object(a.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,d.a.isEmail(l)){e.next=5;break}return N("Please input valid email."),e.abrupt("return");case 5:return N(null),e.next=8,r({email:l});case 8:m.a.fire({icon:"success",title:"Success",text:"Password reset email has been sent. Please follow the instructions."}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),N(Object(x.d)(e.t0));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),[l,r]),E=d.a.isEmpty(l);return Object(y.jsxs)("div",{className:"auth-page",children:[Object(y.jsx)(w.a,{}),Object(y.jsxs)("div",{className:"auth-container",children:[Object(y.jsx)("h1",{className:"auth-title",children:"Reset Password"}),Object(y.jsx)("h3",{className:"auth-description",children:"Please enter your CurrikiStudio account's email and click the button below, then check your email for instructions on how to reset your password."}),Object(y.jsxs)("form",{onSubmit:A,autoComplete:"off",className:"auth-form",children:[Object(y.jsxs)("div",{className:"form-group",children:[Object(y.jsx)(j.a,{icon:"envelope"}),Object(y.jsx)("input",{autoFocus:!0,className:"input-box",name:"email",placeholder:"Email*",required:!0,value:l,onChange:P})]}),Object(y.jsx)(v.a,{error:k}),Object(y.jsx)("div",{className:"form-group",children:Object(y.jsx)("button",{type:"submit",className:"signUp-btn submit",disabled:t||E,children:t?Object(y.jsx)("img",{src:O.a,alt:""}):"Send Reset Password Link"})}),Object(y.jsx)("div",{className:"form-group text-center",children:Object(y.jsx)(u.b,{to:"/studio/login",children:"Back to Login"})})]})]}),Object(y.jsx)("img",{src:h.a,className:"bg1",alt:""}),Object(y.jsx)("img",{src:p.a,className:"bg2",alt:""})]})})))}}]);
//# sourceMappingURL=45.c8e14645.chunk.js.map