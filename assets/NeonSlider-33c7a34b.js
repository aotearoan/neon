import{g as b,_ as N}from"../index.js";import{N as B}from"./NeonNumberUtils-581ff329.js";import{u as V,v as _,w as t,x as s,y as u,Q as r,A as m,H as o,z as h,P as S,a3 as w}from"./vendor-7a8d752b.js";const q=V({name:"NeonSlider",props:{modelValue:{type:Number,required:!0},id:{type:String,required:!1},color:{type:String,default:b.LowContrast},locale:{type:String,default:null},output:{type:Boolean,default:!0},legend:{type:Boolean,default:!0},tooltip:{type:Boolean,default:!0},percentage:{type:Boolean,default:!1},step:{type:Number,required:!1},decimals:{type:Number,required:!1},valueTemplate:{type:String,required:!1},disableFormatting:{type:Boolean,default:!1},min:{type:Number,default:0},max:{type:Number,required:!1},lowerBound:{type:Number,required:!1},upperBound:{type:Number,required:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:l}){const p=_(),f=t(()=>{const{...a}=p;return a}),d=a=>e.disableFormatting?a:B.formatNumber(a,{decimals:e.decimals,format:e.valueTemplate,percentage:e.percentage},e.locale),c=t(()=>d(e.min)),i=t(()=>e.max!==void 0?e.max:e.percentage?1:100),g=t(()=>d(i.value)),y=t(()=>d(e.modelValue)),v=t(()=>e.step!==void 0?e.step:e.percentage?.01:1);return{sanitizedAttributes:f,formattedMin:c,formattedMax:g,formattedValue:y,computedMax:i,computedStep:v,changeValue:a=>{let n=+a.target.value;e.lowerBound!==void 0&&n<e.lowerBound?n=e.lowerBound:e.upperBound!==void 0&&n>e.upperBound&&(n=e.upperBound),l("update:modelValue",n)}}}}),M=["for"],z=["id","value","step","min","max","aria-valuemin","aria-valuemax","aria-valuenow","disabled"],k={key:1,class:"neon-slider__legend"},C={class:"neon-slider__legend-item"},$={class:"neon-slider__legend-item"},A=["for"],F={class:"neon-slider__tooltip-content"},P={class:"neon-slider__tooltip-value"};function T(e,l,p,f,d,c){return s(),u("div",{class:S(["neon-slider",[{"neon-slider--disabled":e.disabled,"neon-slider--no-legend":!e.legend},`neon-slider--${e.color}`]]),style:w("--min: "+e.min+";--max: "+e.computedMax+";--val: "+e.modelValue)},[e.output?(s(),u("output",{key:0,for:e.id,class:"neon-slider__output"},r(e.formattedValue),9,M)):m("",!0),o("input",h({id:e.id,type:"range",value:e.modelValue,step:e.computedStep,min:e.min,max:e.computedMax,"aria-valuemin":e.min,"aria-valuemax":e.computedMax,"aria-valuenow":e.modelValue,disabled:e.disabled,class:"neon-slider__input"},e.sanitizedAttributes,{onInput:l[0]||(l[0]=(...i)=>e.changeValue&&e.changeValue(...i))}),null,16,z),e.legend?(s(),u("div",k,[o("span",C,r(e.formattedMin),1),o("span",$,r(e.formattedMax),1)])):m("",!0),e.tooltip?(s(),u("output",{key:2,for:e.id,class:"neon-slider__tooltip"},[o("div",F,[o("span",P,r(e.formattedValue),1)])],8,A)):m("",!0)],6)}const Q=N(q,[["render",T]]);export{Q as N};
