import{N as M,a as h,b as z}from"./NeonCardHeader-5e3d5e8c.js";import{N as w,a as n}from"./NeonDatePicker-3d24ea23.js";import{b as y,M as H,_ as R}from"../index.js";import{N as B}from"./NeonStack-fb7ab566.js";import{C as $}from"./ComponentDocumentation-6caf88ca.js";import{E as O}from"./Editor-1d4a4353.js";import{u as j,R as s,S as J,D as V,F as _,G as d,A as q,x as A,L as o,H as i,a2 as D,Q as I}from"./vendor-7a8d752b.js";import"./NeonDropdown-f9c34229.js";import"./NeonPlacementUtils-e254198c.js";import"./NeonBadge-0890751f.js";import"./NeonColorUtils-3abbbd7e.js";import"./NeonLabel-387f69e3.js";import"./NeonNote-2bf2c89c.js";import"./NeonInline-e4d49a2a.js";import"./NeonTabs-5786a26a.js";const F=j({name:"DatePicker",components:{ComponentDocumentation:$,Editor:O,NeonCard:M,NeonCardBody:h,NeonCardHeader:z,NeonDatePicker:w,NeonLink:y,NeonStack:B},setup(){const e=s(null),l=s("Enhanced HTML native date picker"),t=new Date;t.setDate(t.getDate()+2);const g=s(n.dateToIso(t)),v=s(n.dateToIso(t)),L=s(n.dateToIso(t)),f=s(n.dateToIso(t)),r=s(n.dateToIso(t)),m=s(n.dateToIso(t)),u=s(n.dateToIso(t)),p=s(n.dateToIso(t)),b=s(n.dateToIso(t)),k=s(n.dateToIso(t)),a=new Date;a.setDate(a.getDate()-5);const E=s(n.dateToIso(a));a.setDate(a.getDate()+10);const T=s(n.dateToIso(a)),c=[];t.setDate(t.getDate()+1),c.push(n.dateToIso(t)),t.setDate(t.getDate()+1),c.push(n.dateToIso(t)),t.setDate(t.getDate()+1),c.push(n.dateToIso(t));const S=`<neon-date-picker v-model="dateSmall" size="s" />
<neon-date-picker v-model="dateMedium" size="m" />
<neon-date-picker v-model="dateLarge" size="l" />`,U=`<neon-date-picker v-model="dateSmall" color="brand" />
          <neon-date-picker v-model="dateLarge" color="info" />`,N=`<neon-date-picker v-model="dateDisabled" :disabled="true" />
<neon-date-picker v-model="datesDisabled" :disabled-dates="disabledDates" />
<neon-date-picker v-model="dateValidRange" :max="maxDate" :min="minDate" />`,C='<neon-date-picker v-model="dateLocale" locale="ja-JP" />',P='<neon-date-picker v-model="dateLocale" placement="top-left" />';return J(()=>e.value=H.getComponentConfig("NeonDatePicker")),{dateSizeExamples:S,dateColorExamples:U,dateDisabledExamples:N,dateLocaleExample:C,datePlacementExample:P,dateSmall:g,dateMedium:v,dateLarge:L,dateDisabled:f,datesDisabled:r,dateValidRange:m,dateInfo:u,datePrimary:p,dateLocale:b,datePlacement:k,disabledDates:c,menuModel:e,headline:l,minDate:E,maxDate:T}}}),G=i("strong",null,"NeonDatePicker",-1),Q=i("h2",{class:"neon-h3"},"Size examples",-1),W=i("h2",{class:"neon-h3"},"Color examples",-1),K=i("h2",{class:"neon-h3"},"Disabled examples",-1),X=i("label",null,"Disabled input",-1),Y=i("label",null,"Disabled specific date selection",-1),Z=i("br",null,null,-1),x=i("h2",{class:"neon-h3"},"Locale example",-1),ee=i("h2",{class:"neon-h3"},"Placement example",-1);function ae(e,l,t,g,v,L){const f=V("neon-link"),r=V("neon-card-body"),m=V("neon-date-picker"),u=V("neon-stack"),p=V("editor"),b=V("neon-card"),k=V("component-documentation");return e.menuModel?(A(),_(k,{key:0,headline:e.headline,model:e.menuModel},{default:d(()=>[o(b,null,{default:d(()=>[o(r,null,{default:d(()=>[i("p",null,[G,D(" is the equivalent of the native "),o(f,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date",target:"_blank"},{default:d(()=>[D(" HTML Date Input ")]),_:1}),D(" . It accepts an "),o(f,{href:"https://en.wikipedia.org/wiki/ISO_8601",target:"_blank"},{default:d(()=>[D(" ISO 8601")]),_:1}),D(" date string as values & allows the user to select a date. Dates are formatted with the provided locale, if none is provided the browser locale is used as a default. On touch devices the native date picker is presented to the user. ")])]),_:1}),o(r,null,{default:d(()=>[Q,o(u,null,{default:d(()=>[o(u,{class:"date-example"},{default:d(()=>[o(m,{modelValue:e.dateSmall,"onUpdate:modelValue":l[0]||(l[0]=a=>e.dateSmall=a),size:"s"},null,8,["modelValue"]),o(m,{modelValue:e.dateMedium,"onUpdate:modelValue":l[1]||(l[1]=a=>e.dateMedium=a),size:"m"},null,8,["modelValue"]),o(m,{modelValue:e.dateLarge,"onUpdate:modelValue":l[2]||(l[2]=a=>e.dateLarge=a),size:"l"},null,8,["modelValue"])]),_:1}),o(p,{modelValue:e.dateSizeExamples,"onUpdate:modelValue":l[3]||(l[3]=a=>e.dateSizeExamples=a)},null,8,["modelValue"])]),_:1})]),_:1}),o(r,null,{default:d(()=>[W,o(u,null,{default:d(()=>[o(u,{class:"date-example"},{default:d(()=>[o(m,{modelValue:e.dateSmall,"onUpdate:modelValue":l[4]||(l[4]=a=>e.dateSmall=a),color:"brand"},null,8,["modelValue"]),o(m,{modelValue:e.dateLarge,"onUpdate:modelValue":l[5]||(l[5]=a=>e.dateLarge=a),color:"info"},null,8,["modelValue"])]),_:1}),o(p,{modelValue:e.dateColorExamples,"onUpdate:modelValue":l[6]||(l[6]=a=>e.dateColorExamples=a)},null,8,["modelValue"])]),_:1})]),_:1}),o(r,null,{default:d(()=>[K,o(u,null,{default:d(()=>[o(u,{class:"date-example"},{default:d(()=>[X,o(m,{modelValue:e.dateDisabled,"onUpdate:modelValue":l[7]||(l[7]=a=>e.dateDisabled=a),disabled:!0},null,8,["modelValue"]),Y,o(m,{modelValue:e.datesDisabled,"onUpdate:modelValue":l[8]||(l[8]=a=>e.datesDisabled=a),"disabled-dates":e.disabledDates},null,8,["modelValue","disabled-dates"]),i("label",null,[D("Specified date range"),Z,D("(min="+I(e.minDate)+", max="+I(e.maxDate)+")",1)]),o(m,{modelValue:e.dateValidRange,"onUpdate:modelValue":l[9]||(l[9]=a=>e.dateValidRange=a),max:e.maxDate,min:e.minDate},null,8,["modelValue","max","min"])]),_:1}),o(p,{modelValue:e.dateDisabledExamples,"onUpdate:modelValue":l[10]||(l[10]=a=>e.dateDisabledExamples=a)},null,8,["modelValue"])]),_:1})]),_:1}),o(r,null,{default:d(()=>[x,o(u,null,{default:d(()=>[o(m,{modelValue:e.dateLocale,"onUpdate:modelValue":l[11]||(l[11]=a=>e.dateLocale=a),locale:"ja-JP"},null,8,["modelValue"]),o(p,{modelValue:e.dateLocaleExample,"onUpdate:modelValue":l[12]||(l[12]=a=>e.dateLocaleExample=a)},null,8,["modelValue"])]),_:1})]),_:1}),o(r,null,{default:d(()=>[ee,o(u,null,{default:d(()=>[o(m,{modelValue:e.datePlacement,"onUpdate:modelValue":l[13]||(l[13]=a=>e.datePlacement=a),placement:"top-left"},null,8,["modelValue"]),o(p,{modelValue:e.datePlacementExample,"onUpdate:modelValue":l[14]||(l[14]=a=>e.datePlacementExample=a)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["headline","model"])):q("",!0)}const be=R(F,[["render",ae]]);export{be as default};
