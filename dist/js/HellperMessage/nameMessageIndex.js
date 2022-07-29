"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var _messageFunction=_interopRequireDefault(require("./messageFunction.js"));function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _regeneratorRuntime(){_regeneratorRuntime=function(){return a};var a={},t=Object.prototype,u=t.hasOwnProperty,e="function"==typeof Symbol?Symbol:{},n=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function i(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(t){i=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var o,i,a,c,e=e&&e.prototype instanceof h?e:h,e=Object.create(e.prototype),n=new _(n||[]);return e._invoke=(o=t,i=r,a=n,c="suspendedStart",function(t,e){if("executing"===c)throw new Error("Generator is already running");if("completed"===c){if("throw"===t)throw e;return b()}for(a.method=t,a.arg=e;;){var r=a.delegate;if(r){r=function t(e,r){var n=e.iterator[r.method];if(void 0===n){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=void 0,t(e,r),"throw"===r.method))return f;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}n=s(n,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,f;n=n.arg;return n?n.done?(r[e.resultName]=n.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,f):n:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,f)}(r,a);if(r){if(r===f)continue;return r}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===c)throw c="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c="executing";r=s(o,i,a);if("normal"===r.type){if(c=a.done?"completed":"suspendedYield",r.arg===f)continue;return{value:r.arg,done:a.done}}"throw"===r.type&&(c="completed",a.method="throw",a.arg=r.arg)}}),e}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}a.wrap=c;var f={};function h(){}function l(){}function p(){}var e={},y=(i(e,n,function(){return this}),Object.getPrototypeOf),y=y&&y(y(x([]))),d=(y&&y!==t&&u.call(y,n)&&(e=y),p.prototype=h.prototype=Object.create(e));function v(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function m(a,c){var e;this._invoke=function(r,n){function t(){return new c(function(t,e){!function e(t,r,n,o){var i,t=s(a[t],a,r);if("throw"!==t.type)return(r=(i=t.arg).value)&&"object"==_typeof(r)&&u.call(r,"__await")?c.resolve(r.__await).then(function(t){e("next",t,n,o)},function(t){e("throw",t,n,o)}):c.resolve(r).then(function(t){i.value=t,n(i)},function(t){return e("throw",t,n,o)});o(t.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}}function g(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(g,this),this.reset(!0)}function x(e){if(e){var r,t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return r=-1,(t=function t(){for(;++r<e.length;)if(u.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t}).next=t}return{next:b}}function b(){return{value:void 0,done:!0}}return i(d,"constructor",l.prototype=p),i(p,"constructor",l),l.displayName=i(p,o,"GeneratorFunction"),a.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===l||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,i(t,o,"GeneratorFunction")),t.prototype=Object.create(d),t},a.awrap=function(t){return{__await:t}},v(m.prototype),i(m.prototype,r,function(){return this}),a.AsyncIterator=m,a.async=function(t,e,r,n,o){void 0===o&&(o=Promise);var i=new m(c(t,e,r,n),o);return a.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},v(d),i(d,o,"Generator"),i(d,n,function(){return this}),i(d,"toString",function(){return"[object Generator]"}),a.keys=function(r){var t,n=[];for(t in r)n.push(t);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=x,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&u.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,e&&(n.method="next",n.arg=void 0),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=u.call(o,"catchLoc"),c=u.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&u.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}var i=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),w(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r,n,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(r=o.completion).type&&(n=r.arg,w(o)),n}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:x(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},a}function asyncGeneratorStep(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function _asyncToGenerator(c){return function(){var t=this,a=arguments;return new Promise(function(e,r){var n=c.apply(t,a);function o(t){asyncGeneratorStep(n,e,r,o,i,"next",t)}function i(t){asyncGeneratorStep(n,e,r,o,i,"throw",t)}o(void 0)})}}_asyncToGenerator(_regeneratorRuntime().mark(function t(){return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,_messageFunction.default)("Cześć, jestem Kacper Duszek i jestem tu po to, ",0);case 2:return t.next=4,(0,_messageFunction.default)("aby Cię oprowadzić po mojej stronie.",3e3);case 4:return t.next=6,(0,_messageFunction.default)("Zanim zaczniemy, wpisz swoje imię.",2500);case 6:case"end":return t.stop()}},t)}))();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhlbGxwZXJNZXNzYWdlL25hbWVNZXNzYWdlSW5kZXguanMiXSwibmFtZXMiOlsiX21lc3NhZ2VGdW5jdGlvbiIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwibWFyayIsIl9jYWxsZWUiLCJ3cmFwIiwiX2NvbnRleHQiLCJwcmV2IiwibmV4dCIsIndlbGNvbWVNZXNzYWdlIiwic3RvcCJdLCJtYXBwaW5ncyI6IjhQQUFBLElBQUFBLGlCQUFBQyx1QkFBQUMsUUFBQSx5Qixpc05BRUFDLGtCQUFBQyxzQkFBQUMsS0FBQyxTQUFBQyxJQUFBLE9BQUFGLHNCQUFBRyxLQUFBLFNBQUFDLEdBQUEsT0FBQSxPQUFBQSxFQUFBQyxLQUFBRCxFQUFBRSxNQUFBLEtBQUEsRUFBQSxPQUFBRixFQUFBRSxLQUFBLEdBQ00sRUFBQUMsaUJBQUFBLFNBQUEsa0RBQWtFLEdBRHhFLEtBQUEsRUFBQSxPQUFBSCxFQUFBRSxLQUFBLEdBRkQsRUFBQUMsaUJBQUFBLFNBQUEsdUNBQUEsS0FFQyxLQUFBLEVBQUEsT0FBQUgsRUFBQUUsS0FBQSxHQUdNLEVBQUFDLGlCQUFBQSxTQUFlLHFDQUFzQyxNQUgzRCxLQUFBLEVBQUEsSUFBQSxNQUFBLE9BQUFILEVBQUFJLFNBQUFOLEtBQURIIiwiZmlsZSI6IkhlbGxwZXJNZXNzYWdlL25hbWVNZXNzYWdlSW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VsY29tZU1lc3NhZ2UgZnJvbSBcIi4vbWVzc2FnZUZ1bmN0aW9uLmpzXCI7XHJcblxyXG4oYXN5bmMgKCkgPT4ge1xyXG5cdGF3YWl0IHdlbGNvbWVNZXNzYWdlKGBDemXFm8SHLCBqZXN0ZW0gS2FjcGVyIER1c3playBpIGplc3RlbSB0dSBwbyB0bywgYCwgMCk7XHJcblx0YXdhaXQgd2VsY29tZU1lc3NhZ2UoXCJhYnkgQ2nEmSBvcHJvd2FkemnEhyBwbyBtb2plaiBzdHJvbmllLlwiLCAzMDAwKTtcclxuXHRhd2FpdCB3ZWxjb21lTWVzc2FnZShcIlphbmltIHphY3puaWVteSwgd3Bpc3ogc3dvamUgaW1pxJkuXCIsIDI1MDApO1xyXG59KSgpO1xyXG4iXX0=
