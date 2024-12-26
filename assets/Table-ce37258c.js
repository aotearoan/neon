import{N as h,a as f,b as N}from"./NeonCardHeader-5e3d5e8c.js";import{N as b}from"./NeonNote-2bf2c89c.js";import{N as V}from"./NeonStack-fb7ab566.js";import{C}from"./ComponentDocumentation-6caf88ca.js";import{E as y}from"./Editor-1d4a4353.js";import{M as k,_ as M}from"../index.js";import{u as T,R as s,S as g,D as t,F as v,G as n,A as w,x as B,L as a,H as e,a2 as S}from"./vendor-7a8d752b.js";import"./NeonInline-e4d49a2a.js";import"./NeonLabel-387f69e3.js";import"./NeonTabs-5786a26a.js";const $=T({name:"Table",components:{NeonCard:h,NeonCardBody:f,NeonCardHeader:N,NeonNote:b,NeonStack:V,ComponentDocumentation:C,Editor:y},setup(){const o=s(null),l=s("CSS table styles"),d=`<table>
  <thead>
    <tr>
      <th>header 1</th>
      <th>header 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Value 1</td>
      <td>Value 2</td>
    </tr>
    <tr>
      <td>Value 3</td>
      <td>Value 4</td>
    </tr>
  </tbody>
</table>`;return g(()=>o.value=k.getComponentConfig("NeonTable")),{menuModel:o,headline:l,template:d}}}),H=e("span",null,[e("strong",null,"Note:"),S(" There is no table component in Neon. However, Neon does provide styling for tables. ")],-1),x=e("h2",{class:"neon-h3"},"Table style example",-1),D=e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"header 1"),e("th",null,"header 2")])]),e("tbody",null,[e("tr",null,[e("td",null,"Value 1"),e("td",null,"Value 2")]),e("tr",null,[e("td",null,"Value 3"),e("td",null,"Value 4")])])],-1);function E(o,l,d,A,F,G){const u=t("neon-note"),m=t("editor"),r=t("neon-stack"),c=t("neon-card-body"),p=t("neon-card"),i=t("component-documentation");return o.menuModel?(B(),v(i,{key:0,headline:o.headline,model:o.menuModel,"show-api-docs":!1},{default:n(()=>[a(r,null,{default:n(()=>[a(u,{color:"warn"},{default:n(()=>[H]),_:1}),a(p,null,{default:n(()=>[a(c,null,{default:n(()=>[x,a(r,null,{default:n(()=>[D,a(m,{modelValue:o.template,"onUpdate:modelValue":l[0]||(l[0]=_=>o.template=_)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["headline","model"])):w("",!0)}const P=M($,[["render",E]]);export{P as default};
