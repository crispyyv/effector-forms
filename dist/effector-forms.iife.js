var EffectorForm=function(e,r,o){"use strict";const t={store:function({init:e,domain:o,existing:t}){return t||(o?o.store(e):r.createStore(e))},event:function({domain:e,existing:o}){return o||(e?e.event():r.createEvent())}};function i(e,r,o){var i,n,s,u,l,a,d,c,m,v;const f="function"==typeof r.init?r.init():r.init,h=t.store({domain:o,existing:null===(i=r.units)||void 0===i?void 0:i.$value,init:f}),g=t.store({domain:o,existing:null===(n=r.units)||void 0===n?void 0:n.$errors,init:[]}),$=g.map(e=>e[0]?e[0]:null),E=h.map(e=>e!==f),p=t.store({domain:o,existing:null===(s=r.units)||void 0===s?void 0:s.$isTouched,init:!1}),x=t.event({domain:o,existing:null===(u=r.units)||void 0===u?void 0:u.onChange}),V=t.event({domain:o,existing:null===(l=r.units)||void 0===l?void 0:l.onBlur}),b=t.event({domain:o,existing:null===(a=r.units)||void 0===a?void 0:a.changed}),S=t.event({domain:o,existing:null===(d=r.units)||void 0===d?void 0:d.addError}),y=t.event({domain:o,existing:null===(c=r.units)||void 0===c?void 0:c.validate}),T=t.event({domain:o,existing:null===(m=r.units)||void 0===m?void 0:m.resetErrors}),F=t.event({domain:o,existing:null===(v=r.units)||void 0===v?void 0:v.reset});return{changed:b,name:e,$value:h,$errors:g,$firstError:$,$isValid:$.map(e=>null===e),$isDirty:E,$isTouched:p,$touched:p,onChange:x,onBlur:V,addError:S,validate:y,set:x,reset:F,resetErrors:T,filter:r.filter}}function n({$form:e,validateFormEvent:o,submitEvent:t,resetFormEvent:i,field:n,rules:s,formValidationEvents:u,fieldValidationEvents:l}){const{$value:a,$errors:d,onBlur:c,changed:m,addError:v,validate:f,resetErrors:h,reset:g}=n,$=r.combine(s.map(({source:e})=>e||r.createStore(null))),E=function(e){return(r,o,t)=>{const i=[];for(let n=0;n<e.length;n++){const s=e[n],u=t?t[n]:null,l=s.validator(r,o,u);"boolean"!=typeof l||l||i.push({rule:s.name,errorText:s.errorText,value:r}),"object"!=typeof l||l.isValid||i.push({rule:s.name,errorText:l.errorText,value:r})}return i}}(s),p=[...u,...l],x=[];p.includes("submit")&&x.push(r.sample({source:r.combine({fieldValue:a,form:e,rulesSources:$}),clock:t})),p.includes("blur")&&x.push(r.sample({source:r.combine({fieldValue:a,form:e,rulesSources:$}),clock:c})),p.includes("change")&&x.push(r.sample({source:r.combine({fieldValue:a,form:e,rulesSources:$}),clock:m})),x.push(r.sample({source:r.combine({fieldValue:a,form:e,rulesSources:$}),clock:f})),x.push(r.sample({source:r.combine({fieldValue:a,form:e,rulesSources:$}),clock:o}));const V=r.sample({source:a,clock:v,fn:(e,{rule:r,errorText:o})=>({rule:r,value:e,errorText:o})});d.on(x,(e,{form:r,fieldValue:o,rulesSources:t})=>E(o,r,t)).on(V,(e,r)=>[r,...e]).reset(h,i,g),p.includes("change")||d.reset(m)}function s({$value:e,$touched:o,onChange:t,changed:i,name:n,reset:s,filter:u},l,a,d){o.on(i,()=>!0).reset(s,a,d),r.guard({source:t,filter:u||(()=>!0),target:i}),e.on(i,(e,r)=>r).on(l,(e,r)=>r.hasOwnProperty(n)?r[n]:e).reset(s,a)}function u(e){const r=o.useStore(e.$value),t=o.useStore(e.$errors),i=o.useStore(e.$firstError),n=o.useStore(e.$isValid),s=o.useStore(e.$isDirty),u=o.useStore(e.$touched);return{name:e.name,value:r,errors:t,firstError:i,isValid:n,isDirty:s,touched:u,isTouched:u,onChange:e.onChange,onBlur:e.onBlur,addError:e.addError,validate:e.validate,reset:e.reset,set:e.onChange,resetErrors:e.resetErrors,hasError:()=>null!==i,errorText:e=>i?e&&e[i.rule]?e[i.rule]:i.errorText||"":""}}return e.createForm=function(e){const{filter:o,domain:u,fields:l,validateOn:a,units:d}=e,c={},m=[],v=[];for(const e in l){if(!l.hasOwnProperty(e))continue;const r=i(e,l[e],u);c[e]=r,m.push(r.$isDirty),v.push(r.$touched)}const f=function(e){const o={};for(const r in e)e.hasOwnProperty(r)&&(o[r]=e[r].$value);return r.combine(o)}(c),h=function(e){const o=[];for(const r in e){if(!e.hasOwnProperty(r))continue;const{$firstError:t}=e[r];o.push(t)}return r.combine(o).map(e=>e.every(e=>null===e))}(c),g=o?r.combine(h,o,(e,r)=>e&&r):h,$=r.combine(m).map(e=>e.some(Boolean)),E=r.combine(v).map(e=>e.some(Boolean)),p=t.event({domain:u,existing:null==d?void 0:d.validate}),x=t.event({domain:u,existing:null==d?void 0:d.submit}),V=t.event({domain:u,existing:null==d?void 0:d.formValidated}),b=t.event({domain:u,existing:null==d?void 0:d.setForm}),S=t.event({domain:u,existing:null==d?void 0:d.reset}),y=t.event({domain:u,existing:null==d?void 0:d.resetTouched}),T=r.sample(f,x);for(const e in c){if(!c.hasOwnProperty(e))continue;const r=l[e],o=c[e];s(o,b,S,y),r.rules&&n({$form:f,rules:r.rules,submitEvent:x,resetFormEvent:S,validateFormEvent:p,field:o,formValidationEvents:a||["submit"],fieldValidationEvents:r.validateOn?r.validateOn:[]})}return r.guard({source:T,filter:g,target:V}),{fields:c,$values:f,$eachValid:h,$isValid:h,$isDirty:$,$touched:E,submit:x,validate:p,resetTouched:y,reset:S,setForm:b,set:b,formValidated:V}},e.useField=u,e.useForm=function(e){const r={};for(const o in e.fields){if(!e.fields.hasOwnProperty(o))continue;const t=e.fields[o];r[o]=u(t)}const t=o.useStore(e.$values),i=o.useStore(e.$eachValid),n=o.useStore(e.$isDirty),s=o.useStore(e.$touched);return{fields:r,values:t,hasError:e=>e?!!r[e]&&Boolean(r[e].firstError):!i,eachValid:i,isValid:i,isDirty:n,isTouched:s,touched:s,errors:e=>r[e]?r[e].errors:[],error:e=>r[e]?r[e].firstError:null,reset:e.reset,errorText:(e,o)=>{const t=r[e];return t&&t.firstError?o&&o[t.firstError.rule]?o[t.firstError.rule]:t.firstError.errorText||"":""},submit:e.submit,setForm:e.setForm,set:e.setForm,formValidated:e.formValidated}},e}({},effector,effectorReact);
//# sourceMappingURL=effector-forms.iife.js.map
