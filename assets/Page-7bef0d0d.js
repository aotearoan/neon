import{N as y,a as C,b}from"./NeonCardHeader-5e3d5e8c.js";import{r as k,s as G,v as M,w as V,x as w,t as P,M as S,_ as T}from"../index.js";import{C as A}from"./ComponentDocumentation-6caf88ca.js";import{E as B}from"./Editor-1d4a4353.js";import{u as $,R as l,S as x,D as o,F as D,G as n,A as E,x as H,L as e,H as a}from"./vendor-7a8d752b.js";import"./NeonLabel-387f69e3.js";import"./NeonNote-2bf2c89c.js";import"./NeonInline-e4d49a2a.js";import"./NeonStack-fb7ab566.js";import"./NeonTabs-5786a26a.js";const R=$({name:"Page",components:{NeonCard:y,NeonCardBody:C,NeonCardHeader:b,NeonGrid:k,NeonGridArea:G,NeonPage:M,NeonSideNav:V,NeonTopNav:w,ComponentDocumentation:A,Editor:B},setup(){const t=l(null),s=l("The basic container for a page"),r=`<neon-page>
  <template #top-nav>
    <neon-top-nav>
      <span>Top Nav content</span>
    </neon-top-nav>
  </template>
  <template #content>
    <neon-side-nav>
      <template #sticky>
        <span>Side nav content</span>
      </template>
    </neon-side-nav>
    <neon-grid id="content" :layouts="layouts">
      <neon-grid-area id="section-content">
        <span>Grid area</span>
      </neon-grid-area>
    </neon-grid>
  </template>
</neon-page>`,p=[{breakpoint:P.All,grid:[["section-content"]]}];return x(()=>t.value=S.getComponentConfig("NeonPage")),{menuModel:t,headline:s,layouts:p,template:r}}}),F=a("p",null,' A "page" component, this is defined as a wrapper around the contents (NeonGrid, etc) and footer which provides the correct responsive layout accounting for NeonTopNav and NeonSideNav components being used. ',-1),L=a("h2",{class:"neon-h3"},"Page example",-1),U={class:"example__output--fixed-content"},j=a("span",null,"Top Nav content",-1),q=a("span",null,"Side nav content",-1),z=a("span",null,"Grid area",-1);function I(t,s,r,p,J,K){const d=o("neon-card-body"),i=o("neon-card-header"),c=o("neon-top-nav"),m=o("neon-side-nav"),_=o("neon-grid-area"),u=o("neon-grid"),f=o("neon-page"),v=o("editor"),g=o("neon-card"),N=o("component-documentation");return t.menuModel?(H(),D(N,{key:0,headline:t.headline,model:t.menuModel},{default:n(()=>[e(g,null,{default:n(()=>[e(d,null,{default:n(()=>[F]),_:1}),e(i,null,{default:n(()=>[L]),_:1}),e(d,{"full-width":!0},{default:n(()=>[a("div",U,[e(f,null,{"top-nav":n(()=>[e(c,null,{default:n(()=>[j]),_:1})]),content:n(()=>[e(m,null,{sticky:n(()=>[q]),_:1}),e(u,{id:"content",layouts:t.layouts},{default:n(()=>[e(_,{id:"section-content"},{default:n(()=>[z]),_:1})]),_:1},8,["layouts"])]),_:1})])]),_:1}),e(d,null,{default:n(()=>[e(v,{modelValue:t.template,"onUpdate:modelValue":s[0]||(s[0]=h=>t.template=h)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["headline","model"])):E("",!0)}const an=T(R,[["render",I]]);export{an as default};
