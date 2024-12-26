import{M as w,_ as V}from"../index.js";import{C as k}from"./ComponentDocumentation-6caf88ca.js";import{N as C,a as S}from"./NeonCardHeader-5e3d5e8c.js";import{N as T}from"./NeonNote-2bf2c89c.js";import{N as M}from"./NeonStack-fb7ab566.js";import{E as q}from"./Editor-1d4a4353.js";import{u as B,R as p,S as $,D as c,F as g,G as o,A as _,x as v,L as e,H as n,a2 as u}from"./vendor-7a8d752b.js";import"./NeonLabel-387f69e3.js";import"./NeonTabs-5786a26a.js";import"./NeonInline-e4d49a2a.js";const D=B({name:"Note",components:{NeonNote:T,NeonCard:C,NeonCardBody:S,NeonStack:M,ComponentDocumentation:k,Editor:q},setup(){const t=p(null),a=p("Display on page notifications to users"),h=p(!0),m=()=>h.value=!1,b=`<blockquote>
  <span><strong>Note:</strong> Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue
    bottle activated charcoal bicycle rights adaptogen.</span>
</blockquote>`,f=`<neon-note title="Note title">
  <span><strong>Note:</strong> Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue
    bottle activated charcoal bicycle rights adaptogen.</span>
</neon-note>`,s=`<neon-note v-if="noteOpen" :closable="true" @close-note="closeNote()">
  <span><strong>Note:</strong> Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue
    bottle activated charcoal bicycle rights adaptogen.</span>
</neon-note>`,i=`<neon-note :icon="false" color="info" title="Note title">
  <span>Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue
    bottle activated charcoal bicycle rights adaptogen.</span>
</neon-note>
<neon-note :icon="false" color="success" title="Note title">
  <span>Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue
    bottle activated charcoal bicycle rights adaptogen.</span>
</neon-note>
<neon-note color="warn" title="Note with icon">
  <span>Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue
    bottle activated charcoal bicycle rights adaptogen.</span>
</neon-note>
<neon-note color="error" title="Note title and icon"></neon-note>
<neon-note :icon="false" color="brand" title="Note title only"></neon-note>`;return $(()=>t.value=w.getComponentConfig("NeonNote")),{menuModel:t,headline:a,noteOpen:h,blockQuoteTemplate:b,defaultNoteTemplate:f,withCloseTemplate:s,coloredTemplate:i,closeNote:m}}}),U=n("p",null,[n("strong",null,"NeonNote"),u(" is designed to display notes, hints or quotes to the user. Notes are available in all colors and they can also be configured with a close button. ")],-1),O=n("p",null,[u(" By default, "),n("strong",null,"blockquote"),u(" HTML elements are styled as notes in the "),n("em",null,"primary"),u(" color. ")],-1),Q=n("h2",{class:"neon-h3"},"Blockquote",-1),E=n("blockquote",null,[n("span",null,"Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue bottle activated charcoal bicycle rights adaptogen.")],-1),H=n("h2",{class:"neon-h3"},"Default note",-1),L=n("span",null,"Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue bottle activated charcoal bicycle rights adaptogen.",-1),A=n("h2",{class:"neon-h3"},"Note with close",-1),F=n("span",null,"Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue bottle activated charcoal bicycle rights adaptogen.",-1),G=n("h2",{class:"neon-h3"},"Colored notes",-1),R=n("span",null,"Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue bottle activated charcoal bicycle rights adaptogen.",-1),j=n("span",null,"Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue bottle activated charcoal bicycle rights adaptogen.",-1),z=n("span",null,"Shoreditch swag neutra, sriracha vinyl af tacos viral photo booth pinterest blue bottle activated charcoal bicycle rights adaptogen.",-1);function I(t,a,h,m,b,f){const s=c("neon-stack"),i=c("neon-card-body"),d=c("editor"),r=c("neon-note"),N=c("neon-card"),y=c("component-documentation");return t.menuModel?(v(),g(y,{key:0,headline:t.headline,model:t.menuModel},{default:o(()=>[e(N,null,{default:o(()=>[e(i,null,{default:o(()=>[e(s,null,{default:o(()=>[U,O]),_:1})]),_:1}),e(i,null,{default:o(()=>[Q,e(s,null,{default:o(()=>[E,e(d,{modelValue:t.blockQuoteTemplate,"onUpdate:modelValue":a[0]||(a[0]=l=>t.blockQuoteTemplate=l)},null,8,["modelValue"])]),_:1})]),_:1}),e(i,null,{default:o(()=>[H,e(s,null,{default:o(()=>[e(r,{title:"Note title"},{default:o(()=>[L]),_:1}),e(d,{modelValue:t.defaultNoteTemplate,"onUpdate:modelValue":a[1]||(a[1]=l=>t.defaultNoteTemplate=l)},null,8,["modelValue"])]),_:1})]),_:1}),e(i,null,{default:o(()=>[A,e(s,null,{default:o(()=>[t.noteOpen?(v(),g(r,{key:0,closable:!0,onCloseNote:a[2]||(a[2]=l=>t.closeNote())},{default:o(()=>[F]),_:1})):_("",!0),e(d,{modelValue:t.withCloseTemplate,"onUpdate:modelValue":a[3]||(a[3]=l=>t.withCloseTemplate=l)},null,8,["modelValue"])]),_:1})]),_:1}),e(i,null,{default:o(()=>[G,e(s,null,{default:o(()=>[e(r,{icon:!1,color:"info",title:"Note title"},{default:o(()=>[R]),_:1}),e(r,{icon:!1,color:"success",title:"Note title"},{default:o(()=>[j]),_:1}),e(r,{color:"warn",title:"Note with icon"},{default:o(()=>[z]),_:1}),e(r,{color:"error",title:"Note title and icon"}),e(r,{icon:!1,color:"brand",title:"Note title only"}),e(d,{modelValue:t.coloredTemplate,"onUpdate:modelValue":a[4]||(a[4]=l=>t.coloredTemplate=l)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["headline","model"])):_("",!0)}const te=V(D,[["render",I]]);export{te as default};
