!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,b=Math.min,g=function(){return d.Date.now()};function p(e,t,n){var r,i,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,c=t,u=e.apply(o,n)}function w(e){return c=e,f=setTimeout(O,t),s?p(e):u}function S(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function O(){var e=g();if(S(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-l);return d?b(n,a-(e-c)):n}(e))}function h(e){return f=void 0,v&&r?p(e):(r=i=void 0,u)}function T(){var e=g(),n=S(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return w(l);if(d)return f=setTimeout(O,t),p(l)}return void 0===f&&(f=setTimeout(O,t)),u}return t=j(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},T.flush=function(){return void 0===f?u:h(g())},T}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var w=document.querySelector(".feedback-form"),S=w.querySelector('input[name="email"]'),O=w.querySelector('textarea[name="message"]'),h=e(t)((function(){var e={email:S.value,message:O.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);window.addEventListener("load",(function(){var e=localStorage.getItem("feedback-form-state");if(null!==e){var t=JSON.parse(e);S.value=t.email,O.value=t.message}else S.value="",O.value=""})),w.addEventListener("input",h),w.addEventListener("submit",(function(e){e.preventDefault(),console.log("Form submitted!"),localStorage.removeItem("feedback-form-state"),S.value="",O.value="";var t={email:S.value,message:O.value};console.log("Current form state:",t)}))}();
//# sourceMappingURL=03-feedback.2c4a7165.js.map