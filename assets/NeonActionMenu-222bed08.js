import{b as u,g as _,_ as p}from"../index.js";import{u as m,D as k,x as o,y as s,H as l,M as y,O as C,L as f,G as b,Q as i,A as h,P as N,J as V,K as v}from"./vendor-7a8d752b.js";const $=m({name:"NeonActionMenu",components:{NeonLink:u},props:{model:{type:Array,required:!0},modelValue:{type:String,required:!0},color:{type:String,default:_.Primary}},emits:["update:modelValue"],setup(n,{emit:t}){return{onClick:a=>{n.modelValue!==a&&t("update:modelValue",a)}}}}),g={class:"neon-action-menu"},w={class:"no-style"},A={class:"neon-action-menu__link-label"},K={key:0,class:"neon-action-menu__link-count"};function L(n,t,c,a,M,S){const r=k("neon-link");return o(),s("nav",g,[l("ul",w,[(o(!0),s(y,null,C(n.model,e=>(o(),s("li",{key:e.key,class:"neon-action-menu__item"},[f(r,{class:N([[{"neon-action-menu__link--selected":e.key===n.modelValue,"neon-action-menu__link--disabled":e.disabled},`neon-action-menu__link--${n.color}`],"neon-action-menu__link"]),"no-style":!0,tabindex:e.disabled?-1:0,"outline-style":"none",onClick:d=>!e.disabled&&n.onClick(e.key),onKeydown:V(v(d=>!e.disabled&&n.onClick(e.key),["prevent"]),["space"])},{default:b(()=>[l("div",A,i(e.label),1),e.count?(o(),s("div",K,i(e.count.toLocaleString()),1)):h("",!0)]),_:2},1032,["class","tabindex","onClick","onKeydown"])]))),128))])])}const x=p($,[["render",L]]);export{x as N};
