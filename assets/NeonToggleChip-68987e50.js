import{a as c,g as b,_ as C}from"../index.js";import{u as f,v as k,R as y,w as V,D as w,x as r,y as v,F as B,A as $,I as z,H as p,Q as A,z as I,K as a,P as N,J as g}from"./vendor-7a8d752b.js";var u=(e=>(e.ExtraSmall="xs",e.Small="s",e.Medium="m",e.Large="l",e))(u||{});const S=f({name:"NeonToggleChip",components:{NeonIcon:c},props:{modelValue:{type:Boolean,required:!0},label:{type:String},size:{type:String,default:u.Medium},color:{type:String,default:b.Primary},showCheck:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const i=k(),s=y(null),t=l=>{var n;o("update:modelValue",l),(n=s.value)==null||n.blur()};return{sanitizedAttributes:V(()=>{const{onClick:l,type:n,tabindex:D,...h}=i;return{...h}}),toggleChipLabel:s,emitInput:t,toggleChip:()=>{e.disabled||t(!e.modelValue)}}}}),K=["aria-disabled","aria-pressed"],L={class:"neon-toggle-chip__label"},M=["checked","disabled"];function P(e,o,i,s,t,m){const d=w("neon-icon");return r(),v("label",{ref:"toggleChipLabel","aria-disabled":e.disabled,"aria-pressed":e.modelValue,class:N([[`neon-toggle-chip--${e.size}`,`neon-toggle-chip--${e.color}`,{"neon-toggle-chip--disabled":e.disabled,"neon-toggle-chip--checked":e.modelValue,"neon-toggle-chip--show-check":e.showCheck}],"neon-toggle-chip no-style"]),role:"button",tabindex:"0",onKeydown:[o[2]||(o[2]=g((...l)=>e.toggleChip&&e.toggleChip(...l),["enter"])),o[3]||(o[3]=g(a((...l)=>e.toggleChip&&e.toggleChip(...l),["prevent"]),["space"]))]},[e.modelValue&&e.showCheck?(r(),B(d,{key:0,disabled:e.disabled,class:"neon-toggle-chip__checked",name:"check"},null,8,["disabled"])):$("",!0),z(e.$slots,"default",{},()=>[p("span",L,A(e.label),1)]),p("input",I({checked:e.modelValue,disabled:e.disabled,class:"neon-toggle-chip__input",tabindex:"-1",type:"checkbox"},e.sanitizedAttributes,{onClick:o[0]||(o[0]=a((...l)=>e.toggleChip&&e.toggleChip(...l),["prevent","stop"])),onInput:o[1]||(o[1]=a((...l)=>e.toggleChip&&e.toggleChip(...l),["prevent","stop"]))}),null,16,M)],42,K)}const q=C(S,[["render",P]]);export{q as N};
