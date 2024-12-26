import{N as k,a as v,b as G}from"./NeonCardHeader-5e3d5e8c.js";import{r as C,s as w,b as V,t as x,M as T,_ as A}from"../index.js";import{N as S}from"./NeonStack-fb7ab566.js";import{C as M}from"./ComponentDocumentation-6caf88ca.js";import{E}from"./Editor-1d4a4353.js";import{u as R,R as d,S as B,D as r,F as L,G as n,A as U,x as $,L as o,H as e,a2 as t}from"./vendor-7a8d752b.js";import"./NeonLabel-387f69e3.js";import"./NeonNote-2bf2c89c.js";import"./NeonInline-e4d49a2a.js";import"./NeonTabs-5786a26a.js";const H=R({name:"Grid",components:{NeonCard:k,NeonCardBody:v,NeonCardHeader:G,NeonGrid:C,NeonGridArea:w,NeonLink:V,NeonStack:S,ComponentDocumentation:M,Editor:E},setup(){const a=d(null),i=d("Use CSS grid for page content"),p=[{breakpoint:x.All,grid:[["section-content"]]}],u=`<neon-grid id="content" :layouts="layouts">
  <neon-grid-area id="section-content">
    <span>Grid area (scroll me)</span>
  </neon-grid-area>
</neon-grid>`,c=d(`const layouts = [
  {
    breakpoint: NeonResponsive.LargerThanTablet,
    grid: [['area1', 'area2', 'area3', 'area4']],
  },
  {
    breakpoint: NeonResponsive.Tablet,
    grid: [
      ['area1', 'area1', 'area2'],
      ['area3', 'area4', 'area4'],
    ],
  },
  {
    breakpoint: NeonResponsive.MobileLarge,
    grid: [
      ['area1'],
      ['area2'],
      ['area3'],
      ['area4'],
    ],
  },
];`);return B(()=>a.value=T.getComponentConfig("NeonGrid")),{menuModel:a,headline:i,template:u,layoutExample:c,layouts:p}}}),D=e("h2",{class:"neon-h3"},"Grid example",-1),F={class:"example__output--fixed-content"},j=e("span",null,"Grid area (scroll me)",-1),q=e("p",null," A CSS grid component for top level layout within a page. This component provides functionality to dynamically generate the grid CSS and inject it into the page as well as defining the grid for different responsive breakpoints. The defined grid can be updated programmatically which is useful for adding/removing items from the grid. ",-1),z=e("p",null," NeonGrid provides a slot for a set of NeonGridArea components, defining the contents for the various grid areas on the page. ",-1),P=e("em",null,"layouts",-1),I=e("em",null,"All",-1),J=e("p",null,[t(" Here is an example layout for a grid with 4 NeonGridAreas with ids "),e("em",null,"area1"),t(", "),e("em",null,"area2"),t(", "),e("em",null,"area3"),t(", "),e("em",null,"area4"),t(": ")],-1),K=e("p",null," This is a very simple example where the grid is a single row at larger sizes, wraps to a 2x3 grid on tablet (with area1 and area4 taking up two columns and area2 and area3 taking only one column), then a single column on mobile. ",-1),O=e("p",null," This approach can be used to create very complex layouts that differ immensely at responsive breakpoints. For example, grid areas can be: added, removed, reordered or even change shape at specific breakpoints. ",-1);function Q(a,i,p,u,c,W){const f=r("neon-card-header"),g=r("neon-grid-area"),h=r("neon-grid"),s=r("neon-card-body"),m=r("editor"),_=r("neon-card"),y=r("neon-link"),N=r("neon-stack"),b=r("component-documentation");return a.menuModel?($(),L(b,{key:0,headline:a.headline,model:a.menuModel},{default:n(()=>[o(_,null,{default:n(()=>[o(f,null,{default:n(()=>[D]),_:1}),o(s,{"full-width":!0},{default:n(()=>[e("div",F,[o(h,{id:"content",layouts:a.layouts},{default:n(()=>[o(g,{id:"section-content"},{default:n(()=>[j]),_:1})]),_:1},8,["layouts"])])]),_:1}),o(s,null,{default:n(()=>[o(m,{modelValue:a.template,"onUpdate:modelValue":i[0]||(i[0]=l=>a.template=l)},null,8,["modelValue"])]),_:1})]),_:1})]),description:n(()=>[o(_,null,{default:n(()=>[o(s,null,{default:n(()=>[o(N,null,{default:n(()=>[q,z,e("p",null,[t(" Place "),o(y,{href:"/layout/grid#api"},{default:n(()=>[t("NeonGridArea")]),_:1}),t(" components inside the NeonGrid default slot, providing each with a unique id. Then create the "),P,t(" property of NeonGrid, using these ids, describing the desired layouts at different breakpoints. Use the "),I,t(" breakpoint to define a single global layout. ")]),J,o(m,{modelValue:a.layoutExample,"onUpdate:modelValue":i[1]||(i[1]=l=>a.layoutExample=l),language:"typescript"},null,8,["modelValue"]),K,O]),_:1})]),_:1})]),_:1})]),_:1},8,["headline","model"])):U("",!0)}const se=A(H,[["render",Q]]);export{se as default};
