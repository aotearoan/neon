import{N as h,a as N}from"./NeonCardHeader-5e3d5e8c.js";import{B as b,M as v,_ as C}from"../index.js";import{N as y}from"./NeonInline-e4d49a2a.js";import{N as E}from"./NeonStack-fb7ab566.js";import{C as I}from"./ComponentDocumentation-6caf88ca.js";import{E as k}from"./Editor-1d4a4353.js";import{u as V,R as l,S as g,D as o,F as M,G as a,A as B,x as w,L as e,H as d,a2 as p}from"./vendor-7a8d752b.js";import"./NeonLabel-387f69e3.js";import"./NeonNote-2bf2c89c.js";import"./NeonTabs-5786a26a.js";const $=V({name:"ExpansionIndicator",components:{NeonCard:h,NeonCardBody:N,NeonExpansionIndicator:b,NeonStack:E,NeonInline:y,ComponentDocumentation:I,Editor:k},setup(){const n=l(null),s=l("Indicate expanded / collapsed"),i=`<neon-expansion-indicator :expanded="false" />
<neon-expansion-indicator :expanded="true" />
<neon-expansion-indicator :expanded="false" color="primary" />
<div class="example-inverse-bg">
  <neon-expansion-indicator :expanded="false" :inverse="true" />
</div>
<neon-expansion-indicator :disabled="true" />`;return g(()=>n.value=v.getComponentConfig("NeonExpansionIndicator")),{menuModel:n,headline:s,template:i}}}),D=d("p",null,[p(" The "),d("strong",null,"NeonExpansionIndicator"),p(" is a small animated chevron which is used by other components to indicate the expansion of a container. It's unlikely that it would be used on it's own but rather as part of creating a more complex expandable component. ")],-1),S=d("h2",{class:"neon-h3>"},"Examples",-1),T={class:"example-inverse-bg"};function A(n,s,i,F,G,H){const r=o("neon-card-body"),t=o("neon-expansion-indicator"),c=o("neon-inline"),m=o("editor"),u=o("neon-stack"),_=o("neon-card"),f=o("component-documentation");return n.menuModel?(w(),M(f,{key:0,headline:n.headline,model:n.menuModel},{default:a(()=>[e(_,null,{default:a(()=>[e(r,null,{default:a(()=>[D]),_:1}),e(r,null,{default:a(()=>[S,e(u,null,{default:a(()=>[e(c,null,{default:a(()=>[e(t,{expanded:!1}),e(t,{expanded:!0}),e(t,{expanded:!1,color:"primary"}),d("div",T,[e(t,{expanded:!1,inverse:!0})]),e(t,{disabled:!0})]),_:1}),e(m,{modelValue:n.template,"onUpdate:modelValue":s[0]||(s[0]=x=>n.template=x)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["headline","model"])):B("",!0)}const Q=C($,[["render",A]]);export{Q as default};
