import{N as v,a as I,b}from"./NeonCardHeader-5e3d5e8c.js";import{a as S,b as V,M as C,c as G,_ as T}from"../index.js";import{N as M}from"./NeonNote-2bf2c89c.js";import{N as B}from"./NeonStack-fb7ab566.js";import{C as R}from"./ComponentDocumentation-6caf88ca.js";import{E as $}from"./Editor-1d4a4353.js";import{u as D,R as g,w as E,S as F,D as a,F as L,G as n,A as U,x as m,L as e,H as o,a2 as t,y,O as x,M as z,Q as A}from"./vendor-7a8d752b.js";import"./NeonInline-e4d49a2a.js";import"./NeonLabel-387f69e3.js";import"./NeonTabs-5786a26a.js";const H=D({name:"Icon",components:{NeonCard:v,NeonCardBody:I,NeonCardHeader:b,NeonIcon:S,NeonLink:V,NeonNote:M,NeonStack:B,ComponentDocumentation:R,Editor:$},setup(){const s=g(null),r=g("Display icons and other SVGs"),p=`<neon-icon name="contrast" />
<neon-icon color="primary" name="contrast" />
<neon-icon :disabled="true" name="contrast" />`,h=E(()=>G.list());return F(()=>s.value=C.getComponentConfig("NeonIcon")),{menuModel:s,headline:r,template:p,icons:h}}}),P=o("h2",{class:"neon-h3"},"Icon colors",-1),q={class:"icons-wrapper"},O=o("p",null,[t(" A component for rendering SVG images. These images are generally, but not limited to, "),o("em",null,"icons"),t(". This component can render any SVG of any size. Size is not restricted in the NeonIcon component but rather in the components using the icons. Generally, when talking about icons, this component is only used to build other components. But you may also find it useful for rendering SVG images, e.g. illustrations. ")],-1),Q=o("p",null,[t(" There is an icon registry where strings containing SVGs can be registered with a name and that name can be used with the NeonIcon component to render the image. Use the classes "),o("em",null,"neon-svg-fill"),t(" and "),o("em",null,"neon-svg--stroke"),t(" in the SVG elements to automatically apply the functional colors. ")],-1),j=o("p",null," This provides the advantage of only registering the icons you actually need, dynamically switching colors in Typescript/CSS without using a large icon font and not having to duplicate icon images to support multiple color variations (including light and dark modes). ",-1),J=o("span",null,[o("strong",null,"Important:"),t(" Set the width and height of SVGs to 100% so they scale correctly.")],-1),K=o("h2",{class:"neon-h3"},"Icon registration",-1),W=o("h2",{class:"neon-h3"},"Provided Icons",-1),X=o("p",null," The set of provided icons is the set of icons required for components or used in the showcase examples. This set is intentionally kept small so that it is easier to replace this set with custom icons. Plus the additional benefit is that only those icons which are necessary are included in the final application payload. ",-1);function Y(s,r,p,h,Z,ee){const c=a("neon-icon"),N=a("editor"),u=a("neon-stack"),l=a("neon-card-body"),d=a("neon-card"),w=a("neon-note"),_=a("neon-card-header"),f=a("neon-link"),k=a("component-documentation");return s.menuModel?(m(),L(k,{key:0,headline:s.headline,model:s.menuModel},{default:n(()=>[e(d,null,{default:n(()=>[e(l,null,{default:n(()=>[P,e(u,null,{default:n(()=>[o("div",q,[e(c,{name:"contrast"}),e(c,{color:"primary",name:"contrast"}),e(c,{disabled:!0,name:"contrast"})]),e(N,{modelValue:s.template,"onUpdate:modelValue":r[0]||(r[0]=i=>s.template=i)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),description:n(()=>[e(u,null,{default:n(()=>[e(d,null,{default:n(()=>[e(l,null,{default:n(()=>[e(u,null,{default:n(()=>[O,Q,j,e(w,{color:"warn"},{default:n(()=>[J]),_:1})]),_:1})]),_:1})]),_:1}),e(d,null,{default:n(()=>[e(_,null,{default:n(()=>[K]),_:1}),e(l,null,{default:n(()=>[o("p",null,[t(" Use the utility class "),e(f,{href:"/utils/NeonIconRegistry"},{default:n(()=>[t("NeonIconRegistry")]),_:1}),t(" to register new icons or overwrite the provided icons. For examples of usage (including adding the neon-svg--* classes) please see "),e(f,{href:"/utils/RegisterIcons"},{default:n(()=>[t("RegisterIcons")]),_:1}),t(" . ")])]),_:1})]),_:1}),e(d,null,{default:n(()=>[e(_,null,{default:n(()=>[W]),_:1}),e(l,null,{default:n(()=>[X]),_:1}),e(l,{class:"icons-wrapper"},{default:n(()=>[(m(!0),y(z,null,x(s.icons,i=>(m(),y("div",{key:`icon-${i}`,class:"icon-container"},[e(c,{name:i},null,8,["name"]),o("label",null,A(i),1)]))),128))]),_:1})]),_:1})]),_:1})]),_:1},8,["headline","model"])):U("",!0)}const ue=T(H,[["render",Y]]);export{ue as default};
