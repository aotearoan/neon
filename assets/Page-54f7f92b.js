import{N as y,a as C,b}from"./NeonCardHeader-0e07b06c.js";import{q as k,r as G,u as M,v as V,w,s as P,M as S,_ as T}from"../index.js";import{C as A}from"./ComponentDocumentation-ff2d7d8a.js";import{E as B}from"./Editor-b0914283.js";import{u as $,R as l,S as x,D as o,F as D,G as n,A as E,x as H,L as e,H as a}from"./vendor-7a8d752b.js";import"./NeonLabel-b5124cd8.js";import"./NeonNote-1fc9d984.js";import"./NeonTabs-e718f442.js";const R=$({name:"Page",components:{NeonCard:y,NeonCardBody:C,NeonCardHeader:b,NeonGrid:k,NeonGridArea:G,NeonPage:M,NeonSideNav:V,NeonTopNav:w,ComponentDocumentation:A,Editor:B},setup(){const t=l(null),s=l("The basic container for a page"),r=`<neon-page>
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
</neon-page>`,p=[{breakpoint:P.All,grid:[["section-content"]]}];return x(()=>t.value=S.getComponentConfig("NeonPage")),{menuModel:t,headline:s,layouts:p,template:r}}}),q=a("p",null,' A "page" component, this is defined as a wrapper around the contents (NeonGrid, etc) and footer which provides the correct responsive layout accounting for NeonTopNav and NeonSideNav components being used. ',-1),F=a("h2",{class:"neon-h3"},"Page example",-1),L={class:"example__output--fixed-content"},U=a("span",null,"Top Nav content",-1),j=a("span",null,"Side nav content",-1),z=a("span",null,"Grid area",-1);function I(t,s,r,p,J,K){const d=o("neon-card-body"),c=o("neon-card-header"),i=o("neon-top-nav"),_=o("neon-side-nav"),m=o("neon-grid-area"),u=o("neon-grid"),f=o("neon-page"),v=o("editor"),g=o("neon-card"),N=o("component-documentation");return t.menuModel?(H(),D(N,{key:0,headline:t.headline,model:t.menuModel},{default:n(()=>[e(g,null,{default:n(()=>[e(d,null,{default:n(()=>[q]),_:1}),e(c,null,{default:n(()=>[F]),_:1}),e(d,{"full-width":!0},{default:n(()=>[a("div",L,[e(f,null,{"top-nav":n(()=>[e(i,null,{default:n(()=>[U]),_:1})]),content:n(()=>[e(_,null,{sticky:n(()=>[j]),_:1}),e(u,{id:"content",layouts:t.layouts},{default:n(()=>[e(m,{id:"section-content"},{default:n(()=>[z]),_:1})]),_:1},8,["layouts"])]),_:1})])]),_:1}),e(d,null,{default:n(()=>[e(v,{modelValue:t.template,"onUpdate:modelValue":s[0]||(s[0]=h=>t.template=h)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["headline","model"])):E("",!0)}const on=T(R,[["render",I]]);export{on as default};
