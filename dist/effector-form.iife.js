var EffectorForm=function(e,n){"use strict";function t(e,t,r){const o="function"==typeof t.init?t.init():t.init,i=r?r.store(o):n.createStore(o),a=r?r.store([]):n.createStore([]),s=a.map(e=>e[0]?e[0]:null);return{name:e,$value:i,$errors:a,$firstError:s,onChange:r?r.event():n.createEvent(),onBlur:r?r.event():n.createEvent()}}function r({$form:e,submitEvent:t,field:r,rules:o,formValidationEvents:i,fieldValidationEvents:a}){const{$value:s,$errors:c,onBlur:l,onChange:u}=r,f=function(e){return(n,t)=>{const r=[];for(const o of e){const e=o.validator(n,t);"boolean"!=typeof e||e||r.push({rule:o.name,value:n}),"object"!=typeof e||e.isValid||r.push({rule:o.name,errorText:e.errorText,value:n})}return r}}(o),m=[...i,...a],d=[];m.includes("submit")&&d.push(n.sample({source:n.combine({fieldValue:s,form:e}),clock:t})),m.includes("blur")&&d.push(n.sample({source:n.combine({fieldValue:s,form:e}),clock:l})),m.includes("change")&&d.push(n.sample({source:n.combine({fieldValue:s,form:e}),clock:u})),c.on(d,(e,{form:n,fieldValue:t})=>f(t,n)),m.includes("change")||c.reset(u)}function o({$value:e,onChange:n,name:t},r){e.on(n,(e,n)=>n).on(r,(e,n)=>n.hasOwnProperty(t)?n[t]:e)}function i(e){const{filter:i,domain:a,fields:s,validateOn:c}=e,l={};for(const e in s){if(!s.hasOwnProperty(e))continue;const n=s[e];l[e]=t(e,n,a)}const u=function(e){const t={};for(const n in e)e.hasOwnProperty(n)&&(t[n]=e[n].$value);return n.combine(t)}(l),f=function(e){const t=[];for(const n in e){if(!e.hasOwnProperty(n))continue;const{$firstError:r}=e[n];t.push(r)}return n.combine(t).map(e=>e.every(e=>null===e))}(l),m=i?n.combine(f,i,(e,n)=>e&&n):f,d=a?a.event():n.createEvent(),v=a?a.event():n.createEvent(),p=a?a.event():n.createEvent(),h=n.sample(u,d);for(const e in l){if(!l.hasOwnProperty(e))continue;const n=s[e],t=l[e];o(t,p),n.rules&&r({$form:u,rules:n.rules,submitEvent:d,field:t,formValidationEvents:c||["submit"],fieldValidationEvents:n.validateOn?n.validateOn:[]})}return n.guard({source:h,filter:m,target:v}),{fields:l,$values:u,$eachValid:f,submit:d,setForm:p,formValidated:v}}const a=()=>({name:"required",validator:e=>Boolean(e)}),s=n.createEffect(),c=n.createStore(null);c.on(s.failData,(e,n)=>n);const l=i({domain:n.createDomain("my-form"),validateOn:["submit"],filter:n.combine(c,s.pending,(e,n)=>!e&&!n),fields:{username:{init:"",rules:[a()]},password:{init:"",rules:[a()]}}});return n.forward({from:l.formValidated,to:s}),e.createForm=i,e}({},effector);
//# sourceMappingURL=effector-form.iife.js.map
