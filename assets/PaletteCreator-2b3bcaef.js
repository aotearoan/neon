import{N as W,e as K,_ as M}from"../index.js";import{N as q,b as Q,a as X}from"./NeonCardHeader-5e3d5e8c.js";import{N as Y}from"./NeonCardFooter-0c3e05d5.js";import{N as Z}from"./NeonColor-53b75cd8.js";import{N as x}from"./NeonDialog-6e35fdfd.js";import{N as P}from"./NeonField-f254ddad.js";import{N as ee}from"./NeonInline-e4d49a2a.js";import{N as oe}from"./NeonStack-fb7ab566.js";import{N as ne}from"./NeonTooltip-33b31c3f.js";import{N as L}from"./NeonColorUtils-3abbbd7e.js";import{u as le,R as w,w as re,S as ae,D as h,F,G as r,A as p,x as s,L as l,H as i,a2 as B,P as u,y as d,O as _,M as v,Q as b}from"./vendor-7a8d752b.js";import"./NeonModal-a695c2d2.js";import"./NeonLabel-387f69e3.js";import"./NeonPlacementUtils-e254198c.js";const te=le({name:"PaletteCreator",components:{NeonButton:W,NeonCard:q,NeonCardHeader:Q,NeonCardBody:X,NeonCardFooter:Y,NeonColor:Z,NeonDialog:x,NeonField:P,NeonInline:ee,NeonStack:oe,NeonSwitch:K,NeonTooltip:ne},setup(){const e=["--neon-rgb-text-dark","--neon-rgb-text-strong-dark","--neon-rgb-text-light","--neon-rgb-text-strong-light","--neon-rgb-disabled-background-dark","--neon-rgb-disabled-border-dark","--neon-rgb-disabled-text-dark","--neon-rgb-disabled-border-light","--neon-rgb-disabled-background-light","--neon-rgb-disabled-text-light","--neon-rgb-low-contrast-l5","--neon-rgb-low-contrast-l4","--neon-rgb-low-contrast-l3","--neon-rgb-low-contrast-l2","--neon-rgb-low-contrast-l1","--neon-rgb-low-contrast-d1","--neon-rgb-low-contrast-d2","--neon-rgb-low-contrast-d3","--neon-rgb-low-contrast-d4","--neon-rgb-low-contrast-d5","--neon-rgb-neutral-l5","--neon-rgb-neutral-l4","--neon-rgb-neutral-l3","--neon-rgb-neutral-l2","--neon-rgb-neutral-l1","--neon-rgb-neutral-d1","--neon-rgb-neutral-d2","--neon-rgb-neutral-d3","--neon-rgb-neutral-d4","--neon-rgb-neutral-d5","--neon-rgb-high-contrast-l5","--neon-rgb-high-contrast-l4","--neon-rgb-high-contrast-l3","--neon-rgb-high-contrast-l2","--neon-rgb-high-contrast-l1","--neon-rgb-high-contrast-d1","--neon-rgb-high-contrast-d2","--neon-rgb-high-contrast-d3","--neon-rgb-high-contrast-d4","--neon-rgb-high-contrast-d5","--neon-rgb-brand-l5","--neon-rgb-brand-l4","--neon-rgb-brand-l3","--neon-rgb-brand-l2","--neon-rgb-brand-l1","--neon-rgb-brand-d1","--neon-rgb-brand-d2","--neon-rgb-brand-d3","--neon-rgb-brand-d4","--neon-rgb-brand-d5","--neon-rgb-primary-l5","--neon-rgb-primary-l4","--neon-rgb-primary-l3","--neon-rgb-primary-l2","--neon-rgb-primary-l1","--neon-rgb-primary-d1","--neon-rgb-primary-d2","--neon-rgb-primary-d3","--neon-rgb-primary-d4","--neon-rgb-primary-d5","--neon-rgb-info-l5","--neon-rgb-info-l4","--neon-rgb-info-l3","--neon-rgb-info-l2","--neon-rgb-info-l1","--neon-rgb-info-d1","--neon-rgb-info-d2","--neon-rgb-info-d3","--neon-rgb-info-d4","--neon-rgb-info-d5","--neon-rgb-success-l5","--neon-rgb-success-l4","--neon-rgb-success-l3","--neon-rgb-success-l2","--neon-rgb-success-l1","--neon-rgb-success-d1","--neon-rgb-success-d2","--neon-rgb-success-d3","--neon-rgb-success-d4","--neon-rgb-success-d5","--neon-rgb-warn-l5","--neon-rgb-warn-l4","--neon-rgb-warn-l3","--neon-rgb-warn-l2","--neon-rgb-warn-l1","--neon-rgb-warn-d1","--neon-rgb-warn-d2","--neon-rgb-warn-d3","--neon-rgb-warn-d4","--neon-rgb-warn-d5","--neon-rgb-error-l5","--neon-rgb-error-l4","--neon-rgb-error-l3","--neon-rgb-error-l2","--neon-rgb-error-l1","--neon-rgb-error-d1","--neon-rgb-error-d2","--neon-rgb-error-d3","--neon-rgb-error-d4","--neon-rgb-error-d5"],a=["low-contrast","neutral","high-contrast"],O=["brand","primary"],I=["info","success","warn","error"],z=["l5","l4","l3","l2","l1"],j=["d1","d2","d3","d4","d5"],A="created-palette",f=w(!1),S=w(!1),N=n=>{const[t,y,k]=L.toRgb(n);return` ${t}, ${y}, ${k}`},g=w({}),T=(n,t)=>{g.value[n]=t,g.value={...g.value},document.documentElement.style.setProperty(n,N(t)),localStorage.setItem(A,JSON.stringify(g.value))},c=(n,t)=>{const y=g.value["--neon-rgb-text-dark"],k=g.value["--neon-rgb-text-light"],E=L.generatePalette(t,y,k);Object.entries(E).forEach(([G,R])=>{const C=`--neon-rgb-${n}-${G}`;g.value[C]=R,document.documentElement.style.setProperty(C,N(R))}),g.value={...g.value},localStorage.setItem(A,JSON.stringify(g.value))},m=re(()=>{const n={};return Object.entries(g.value).forEach(([t,y])=>{if(t.indexOf("text")===-1){const k=t[t.length-2]==="d",E=L.isAccessible(g.value[k?"--neon-rgb-text-light":"--neon-rgb-text-dark"],y),{normalAA:G,normalAAA:R}=E,C=L.isAccessible(g.value[k?"--neon-rgb-text-strong-light":"--neon-rgb-text-strong-dark"],y),{largeAA:H,largeAAA:J}=C;n[t]={ratioLarge:C.ratio,ratioNormal:E.ratio,large:J?"AAA":H?"AA":null,normal:R?"AAA":G?"AA":null}}else n[t]={large:null,normal:null}}),n});ae(()=>{const n=localStorage.getItem(A);if(n)g.value=JSON.parse(n),Object.keys(g.value).forEach(t=>{document.documentElement.style.setProperty(t,N(g.value[t]))});else{const t=getComputedStyle(document.documentElement);e.forEach(y=>{g.value[y]=L.rgbToHex(t.getPropertyValue(y).trim().split(", ").map(k=>+k))})}g.value={...g.value},f.value=!0});const $=()=>{S.value=!1,localStorage.removeItem(A),document.location.reload()},D=()=>{let n=`/*
  In order to use opacity with CSS Variables the raw r, g, b values need to be defined.
  This is why there are 2 color definitions the raw 'rgb' definition and the actual 'color' one
*/
.neon {
`;e.forEach(y=>{n+=`  ${y}:${N(g.value[y])};
`}),n+=`}
`;const t=document.createElement("a");t.href="data:text/plain;charset=utf-8,"+encodeURI(n),t.target="_blank",t.download="palette.scss",t.click()},U=w(!1),V=w(!1),o=w(!1);return{toggleNeutral:U,toggleBrand:V,toggleFunctional:o,accessibility:m,ready:f,openConfirmResetDialog:S,palette:g,neutralPalettes:a,brandPalettes:O,functionalPalettes:I,stepsLight:z,stepsDark:j,setStyle:T,exportColors:D,resetPalette:$,generatePalette:c}}}),se=i("div",null,[i("h1",null,"Palette creator"),i("p",null,"Generate a custom palette for using with Neon")],-1),ie=i("div",null,[i("p",null,[B(" To integrate your palette with Neon click the export button at the top right which will generate a file "),i("em",null,"palette.scss"),B(" which contains all color definitions for Neon. This can be directly imported into an application to override the Neon color system. ")])],-1),de={class:"neon-button-group"},ge=i("h2",{class:"neon-h4"},"Text variables",-1),be=i("h2",{class:"neon-h4"},"Disabled variables",-1),ce=i("h2",{class:"neon-h4"},"Neutral palettes",-1),ue=i("br",null,null,-1),me={class:"neon-h5"},pe={class:"palette-creator__light-palette"},$e={class:"palette-creator__color-level"},ye={class:"palette-creator__dark-palette"},he={class:"palette-creator__color-level"},fe=i("h2",{class:"neon-h4"},"Brand palettes",-1),_e=i("br",null,null,-1),ve={class:"neon-h5"},ke={class:"palette-creator__light-palette"},Ae={class:"palette-creator__color-level"},Ne={class:"palette-creator__dark-palette"},Ve={class:"palette-creator__color-level"},we=i("h2",{class:"neon-h4"},"Functional palettes",-1),Se=i("br",null,null,-1),De={class:"neon-h5"},Ue={class:"palette-creator__light-palette"},Ce={class:"palette-creator__color-level"},Le={class:"palette-creator__dark-palette"},Be={class:"palette-creator__color-level"};function Te(e,a,O,I,z,j){const A=h("neon-card-header"),f=h("neon-card-body"),S=h("neon-button"),N=h("neon-dialog"),g=h("neon-card-footer"),T=h("neon-card"),c=h("neon-color"),m=h("neon-field"),$=h("neon-inline"),D=h("neon-switch"),U=h("neon-tooltip"),V=h("neon-stack");return e.ready?(s(),F(V,{key:0,class:"palette-creator"},{default:r(()=>[l(T,null,{default:r(()=>[l(A,null,{default:r(()=>[se]),_:1}),l(f,null,{default:r(()=>[ie]),_:1}),l(g,null,{default:r(()=>[i("div",de,[l(S,{"button-style":"text",label:"Reset palette",size:"s",onClick:a[0]||(a[0]=o=>e.openConfirmResetDialog=!0)}),l(S,{color:"brand",icon:"download","icon-position":"right",label:"Export colors",size:"s",onClick:a[1]||(a[1]=o=>e.exportColors())}),l(N,{open:e.openConfirmResetDialog,"cancel-label":"Cancel",color:"error","confirm-label":"Reset",question:"Are you sure you want to reset the palette?",title:"Reset palette",onCancel:a[2]||(a[2]=o=>e.openConfirmResetDialog=!1),onConfirm:a[3]||(a[3]=o=>e.resetPalette())},null,8,["open"])])]),_:1})]),_:1}),l(T,null,{default:r(()=>[l(f,{class:"palette-creator__text-vars"},{default:r(()=>[ge,l($,null,{default:r(()=>[l(m,{for:"textDark",label:"Text dark"},{default:r(()=>[l(c,{id:"textDark","model-value":e.palette["--neon-rgb-text-dark"],"onUpdate:modelValue":a[4]||(a[4]=o=>e.setStyle("--neon-rgb-text-dark",o))},null,8,["model-value"])]),_:1}),l(m,{for:"textDarkStrong",label:"Text dark strong"},{default:r(()=>[l(c,{id:"textDarkStrong","model-value":e.palette["--neon-rgb-text-strong-dark"],"onUpdate:modelValue":a[5]||(a[5]=o=>e.setStyle("--neon-rgb-text-strong-dark",o))},null,8,["model-value"])]),_:1})]),_:1}),l($,null,{default:r(()=>[l(m,{for:"textLight",label:"Text light"},{default:r(()=>[l(c,{id:"textLight","model-value":e.palette["--neon-rgb-text-light"],"onUpdate:modelValue":a[6]||(a[6]=o=>e.setStyle("--neon-rgb-text-light",o))},null,8,["model-value"])]),_:1}),l(m,{for:"textLightStrong",label:"Text light strong"},{default:r(()=>[l(c,{id:"textLightStrong","model-value":e.palette["--neon-rgb-text-strong-light"],"onUpdate:modelValue":a[7]||(a[7]=o=>e.setStyle("--neon-rgb-text-strong-light",o))},null,8,["model-value"])]),_:1})]),_:1})]),_:1}),l(f,{class:"palette-creator__text-vars"},{default:r(()=>[be,l($,{breakpoint:"tablet"},{default:r(()=>[l(m,{for:"disabledBackgroundDark",label:"Disabled bg dark"},{default:r(()=>[l(c,{id:"disabledBackgroundDark","model-value":e.palette["--neon-rgb-disabled-background-dark"],"onUpdate:modelValue":a[8]||(a[8]=o=>e.setStyle("--neon-rgb-disabled-background-dark",o))},null,8,["model-value"])]),_:1}),l(m,{for:"disabledBorderDark",label:"Disabled border dark"},{default:r(()=>[l(c,{id:"disabledBorderDark","model-value":e.palette["--neon-rgb-disabled-border-dark"],"onUpdate:modelValue":a[9]||(a[9]=o=>e.setStyle("--neon-rgb-disabled-border-dark",o))},null,8,["model-value"])]),_:1}),l(m,{for:"disabledTextDark",label:"Disabled text dark"},{default:r(()=>[l(c,{id:"disabledTextDark","model-value":e.palette["--neon-rgb-disabled-text-dark"],"onUpdate:modelValue":a[10]||(a[10]=o=>e.setStyle("--neon-rgb-disabled-text-dark",o))},null,8,["model-value"])]),_:1})]),_:1}),l($,{breakpoint:"tablet"},{default:r(()=>[l(m,{for:"disabledBackgroundLight",label:"Disabled bg light"},{default:r(()=>[l(c,{id:"disabledBackgroundLight","model-value":e.palette["--neon-rgb-disabled-background-light"],"onUpdate:modelValue":a[11]||(a[11]=o=>e.setStyle("--neon-rgb-disabled-background-light",o))},null,8,["model-value"])]),_:1}),l(m,{for:"disabledBorderLight",label:"Disabled border light"},{default:r(()=>[l(c,{id:"disabledBorderLight","model-value":e.palette["--neon-rgb-disabled-border-light"],"onUpdate:modelValue":a[12]||(a[12]=o=>e.setStyle("--neon-rgb-disabled-border-light",o))},null,8,["model-value"])]),_:1}),l(m,{for:"disabledTextLight",label:"Disabled text light"},{default:r(()=>[l(c,{id:"disabledTextLight","model-value":e.palette["--neon-rgb-disabled-text-light"],"onUpdate:modelValue":a[13]||(a[13]=o=>e.setStyle("--neon-rgb-disabled-text-light",o))},null,8,["model-value"])]),_:1})]),_:1})]),_:1}),l(f,null,{default:r(()=>[l($,null,{default:r(()=>[ce,l(U,null,{target:r(()=>[l(D,{modelValue:e.toggleNeutral,"onUpdate:modelValue":a[14]||(a[14]=o=>e.toggleNeutral=o),label:"Toggle details"},null,8,["modelValue"])]),content:r(()=>[B("Display the WCAG contrast info for small & large text")]),_:1})]),_:1}),ue,l($,{class:u({"palette-creator__palette-group--hide":!e.toggleNeutral}),breakpoint:"desktop"},{default:r(()=>[(s(!0),d(v,null,_(e.neutralPalettes,o=>(s(),F(V,{key:o,class:"palette-creator__palette-group"},{default:r(()=>[i("h3",me,b(o),1),i("div",pe,[(s(!0),d(v,null,_(e.stepsLight,n=>(s(),d("div",{key:`${o}-${n}`},[l(c,{"model-value":e.palette[`--neon-rgb-${o}-${n}`],"onUpdate:modelValue":t=>e.setStyle(`--neon-rgb-${o}-${n}`,t)},null,8,["model-value","onUpdate:modelValue"]),i("span",$e,b(n),1),e.accessibility[`--neon-rgb-${o}-${n}`]?(s(),d("span",{key:0,class:u(e.accessibility[`--neon-rgb-${o}-${n}`].large==="AAA"?"palette-creator__color--large-aaa":"palette-creator__color--large-aa")},b(e.accessibility[`--neon-rgb-${o}-${n}`].large||e.accessibility[`--neon-rgb-${o}-${n}`].ratioLarge),3)):p("",!0),e.accessibility[`--neon-rgb-${o}-${n}`]?(s(),d("span",{key:1,class:u(e.accessibility[`--neon-rgb-${o}-${n}`].normal==="AAA"?"palette-creator__color--normal-aaa":"palette-creator__color--normal-aa")},b(e.accessibility[`--neon-rgb-${o}-${n}`].normal||e.accessibility[`--neon-rgb-${o}-${n}`].ratioNormal),3)):p("",!0)]))),128))]),i("div",ye,[(s(!0),d(v,null,_(e.stepsDark,n=>(s(),d("div",{key:`${o}-${n}`},[l(c,{"model-value":e.palette[`--neon-rgb-${o}-${n}`],"onUpdate:modelValue":t=>e.setStyle(`--neon-rgb-${o}-${n}`,t)},null,8,["model-value","onUpdate:modelValue"]),i("span",he,b(n),1),e.accessibility[`--neon-rgb-${o}-${n}`]?(s(),d("span",{key:0,class:u(e.accessibility[`--neon-rgb-${o}-${n}`].large==="AAA"?"palette-creator__color--large-aaa":"palette-creator__color--large-aa")},b(e.accessibility[`--neon-rgb-${o}-${n}`].large||e.accessibility[`--neon-rgb-${o}-${n}`].ratioLarge),3)):p("",!0),e.accessibility[`--neon-rgb-${o}-${n}`]?(s(),d("span",{key:1,class:u(e.accessibility[`--neon-rgb-${o}-${n}`].normal==="AAA"?"palette-creator__color--normal-aaa":"palette-creator__color--normal-aa")},b(e.accessibility[`--neon-rgb-${o}-${n}`].normal||e.accessibility[`--neon-rgb-${o}-${n}`].ratioNormal),3)):p("",!0)]))),128))])]),_:2},1024))),128))]),_:1},8,["class"])]),_:1}),l(f,null,{default:r(()=>[l($,null,{default:r(()=>[fe,l(U,null,{target:r(()=>[l(D,{modelValue:e.toggleBrand,"onUpdate:modelValue":a[15]||(a[15]=o=>e.toggleBrand=o),label:"Toggle details"},null,8,["modelValue"])]),content:r(()=>[B("Display the WCAG contrast info for small & large text")]),_:1})]),_:1}),_e,l($,{class:u({"palette-creator__palette-group--hide":!e.toggleBrand}),breakpoint:"desktop"},{default:r(()=>[(s(!0),d(v,null,_(e.brandPalettes,o=>(s(),F(V,{key:o,class:"palette-creator__palette-group"},{default:r(()=>[i("h3",ve,b(o),1),l(m,{label:"Generate from"},{default:r(()=>[l(c,{"model-value":e.palette[`--neon-rgb-${o}-l1`],class:"palette-creator__select-reference",size:"s","onUpdate:modelValue":n=>e.generatePalette(o,n)},null,8,["model-value","onUpdate:modelValue"])]),_:2},1024),i("div",ke,[(s(!0),d(v,null,_(e.stepsLight,n=>(s(),d("div",{key:`${o}-${n}`},[l(c,{"model-value":e.palette[`--neon-rgb-${o}-${n}`],"onUpdate:modelValue":t=>e.setStyle(`--neon-rgb-${o}-${n}`,t)},null,8,["model-value","onUpdate:modelValue"]),i("span",Ae,b(n),1),e.accessibility[`--neon-rgb-${o}-${n}`]?(s(),d("span",{key:0,class:u(e.accessibility[`--neon-rgb-${o}-${n}`].large==="AAA"?"palette-creator__color--large-aaa":"palette-creator__color--large-aa")},b(e.accessibility[`--neon-rgb-${o}-${n}`].large||e.accessibility[`--neon-rgb-${o}-${n}`].ratioLarge),3)):p("",!0),e.accessibility[`--neon-rgb-${o}-${n}`]?(s(),d("span",{key:1,class:u(e.accessibility[`--neon-rgb-${o}-${n}`].normal==="AAA"?"palette-creator__color--normal-aaa":"palette-creator__color--normal-aa")},b(e.accessibility[`--neon-rgb-${o}-${n}`].normal||e.accessibility[`--neon-rgb-${o}-${n}`].ratioNormal),3)):p("",!0)]))),128))]),i("div",Ne,[(s(!0),d(v,null,_(e.stepsDark,n=>(s(),d("div",{key:`${o}-${n}`},[l(c,{"model-value":e.palette[`--neon-rgb-${o}-${n}`],"onUpdate:modelValue":t=>e.setStyle(`--neon-rgb-${o}-${n}`,t)},null,8,["model-value","onUpdate:modelValue"]),i("span",Ve,b(n),1),e.accessibility[`--neon-rgb-${o}-${n}`]?(s(),d("span",{key:0,class:u(e.accessibility[`--neon-rgb-${o}-${n}`].large==="AAA"?"palette-creator__color--large-aaa":"palette-creator__color--large-aa")},b(e.accessibility[`--neon-rgb-${o}-${n}`].large||e.accessibility[`--neon-rgb-${o}-${n}`].ratioLarge),3)):p("",!0),e.accessibility[`--neon-rgb-${o}-${n}`]?(s(),d("span",{key:1,class:u(e.accessibility[`--neon-rgb-${o}-${n}`].normal==="AAA"?"palette-creator__color--normal-aaa":"palette-creator__color--normal-aa")},b(e.accessibility[`--neon-rgb-${o}-${n}`].normal||e.accessibility[`--neon-rgb-${o}-${n}`].ratioNormal),3)):p("",!0)]))),128))])]),_:2},1024))),128))]),_:1},8,["class"])]),_:1}),l(f,null,{default:r(()=>[l($,null,{default:r(()=>[we,l(U,null,{target:r(()=>[l(D,{modelValue:e.toggleFunctional,"onUpdate:modelValue":a[16]||(a[16]=o=>e.toggleFunctional=o),label:"Toggle details"},null,8,["modelValue"])]),content:r(()=>[B("Display the WCAG contrast info for small & large text")]),_:1})]),_:1}),Se,l($,{class:u({"palette-creator__palette-group--hide":!e.toggleFunctional}),breakpoint:"desktop"},{default:r(()=>[(s(!0),d(v,null,_(e.functionalPalettes,o=>(s(),F(V,{key:o,class:"palette-creator__palette-group"},{default:r(()=>[i("h3",De,b(o),1),l(m,{label:"Generate from"},{default:r(()=>[l(c,{"model-value":e.palette[`--neon-rgb-${o}-l1`],class:"palette-creator__select-reference",size:"s","onUpdate:modelValue":n=>e.generatePalette(o,n)},null,8,["model-value","onUpdate:modelValue"])]),_:2},1024),i("div",Ue,[(s(!0),d(v,null,_(e.stepsLight,n=>(s(),d("div",{key:`${o}-${n}`},[l(c,{"model-value":e.palette[`--neon-rgb-${o}-${n}`],"onUpdate:modelValue":t=>e.setStyle(`--neon-rgb-${o}-${n}`,t)},null,8,["model-value","onUpdate:modelValue"]),i("span",Ce,b(n),1),e.accessibility[`--neon-rgb-${o}-${n}`]?(s(),d("span",{key:0,class:u(e.accessibility[`--neon-rgb-${o}-${n}`].large==="AAA"?"palette-creator__color--large-aaa":"palette-creator__color--large-aa")},b(e.accessibility[`--neon-rgb-${o}-${n}`].large||e.accessibility[`--neon-rgb-${o}-${n}`].ratioLarge),3)):p("",!0),e.accessibility[`--neon-rgb-${o}-${n}`]?(s(),d("span",{key:1,class:u(e.accessibility[`--neon-rgb-${o}-${n}`].normal==="AAA"?"palette-creator__color--normal-aaa":"palette-creator__color--normal-aa")},b(e.accessibility[`--neon-rgb-${o}-${n}`].normal||e.accessibility[`--neon-rgb-${o}-${n}`].ratioNormal),3)):p("",!0)]))),128))]),i("div",Le,[(s(!0),d(v,null,_(e.stepsDark,n=>(s(),d("div",{key:`${o}-${n}`},[l(c,{"model-value":e.palette[`--neon-rgb-${o}-${n}`],"onUpdate:modelValue":t=>e.setStyle(`--neon-rgb-${o}-${n}`,t)},null,8,["model-value","onUpdate:modelValue"]),i("span",Be,b(n),1),e.accessibility[`--neon-rgb-${o}-${n}`]?(s(),d("span",{key:0,class:u(e.accessibility[`--neon-rgb-${o}-${n}`].large==="AAA"?"palette-creator__color--large-aaa":"palette-creator__color--large-aa")},b(e.accessibility[`--neon-rgb-${o}-${n}`].large||e.accessibility[`--neon-rgb-${o}-${n}`].ratioLarge),3)):p("",!0),e.accessibility[`--neon-rgb-${o}-${n}`]?(s(),d("span",{key:1,class:u(e.accessibility[`--neon-rgb-${o}-${n}`].normal==="AAA"?"palette-creator__color--normal-aaa":"palette-creator__color--normal-aa")},b(e.accessibility[`--neon-rgb-${o}-${n}`].normal||e.accessibility[`--neon-rgb-${o}-${n}`].ratioNormal),3)):p("",!0)]))),128))])]),_:2},1024))),128))]),_:1},8,["class"])]),_:1})]),_:1})]),_:1})):p("",!0)}const Qe=M(te,[["render",Te]]);export{Qe as default};
