import{N as g,a as N}from"./NeonCardHeader-5e3d5e8c.js";import{F as C,M as y,_ as v}from"../index.js";import{N as w}from"./NeonStack-fb7ab566.js";import{C as z}from"./ComponentDocumentation-6caf88ca.js";import{E}from"./Editor-1d4a4353.js";import{u as U,R as p,S as M,D as m,F as T,G as a,A as S,x as F,L as l,H as t,Q as s,a2 as f}from"./vendor-7a8d752b.js";import"./NeonLabel-387f69e3.js";import"./NeonNote-2bf2c89c.js";import"./NeonInline-e4d49a2a.js";import"./NeonTabs-5786a26a.js";const P=U({name:"ExpansionPanel",components:{NeonCard:g,NeonCardBody:N,NeonExpansionPanel:C,NeonStack:w,ComponentDocumentation:z,Editor:E},setup(){const e=p(null),n=p("Expandable/collapsible container for content"),b=p(!1),V=p(!1),h=p(!1),k=p(!1),u=p(!1),d=p(!1),i=p(!1),r=p(!1),c=`Spicy jalapeno bacon ipsum dolor amet biltong porchetta cupim sausage pork loin. Ham porchetta
brisket, kielbasa ham hock sirloin ground round strip steak jowl jerky short ribs pork loin frankfurter.`,x=`<neon-expansion-panel v-model="expanded1"
                      label="Small"
                      size="s"
>
  <p>{{ content }}</p>
</neon-expansion-panel>
<neon-expansion-panel v-model="expanded2"
                      label="Medium"
                      size="m"
>
  <p>{{ content }}</p>
</neon-expansion-panel>
<neon-expansion-panel v-model="expanded3"
                      label="Large"
                      size="l"
>
  <p>{{ content }}</p>
</neon-expansion-panel>`,o=`<neon-expansion-panel v-model="expanded4"
                      icon="contrast"
                      label="With icon"
>
  <p>{{ content }}</p>
</neon-expansion-panel>
<neon-expansion-panel v-model="expanded5"
                      color="success"
                      icon="contrast"
                      label="Colored label"
>
  <p>{{ content }}</p>
</neon-expansion-panel>
<neon-expansion-panel v-model="expanded6"
                      :full-width="true"
                      label="Full width"
>
  <p>{{ content }}</p>
</neon-expansion-panel>
<neon-expansion-panel v-model="expanded7"
                      :disabled="true"
                      label="Disabled"
>
  <p>{{ content }}</p>
</neon-expansion-panel>
<neon-expansion-panel v-model="expanded8"
                      label="From bottom"
                      position="bottom"
>
  <p>{{ content }}</p>
</neon-expansion-panel>`;return M(()=>e.value=y.getComponentConfig("NeonExpansionPanel")),{menuModel:e,headline:n,sizesTemplate:x,moreTemplate:o,content:c,expanded1:b,expanded2:V,expanded3:h,expanded4:k,expanded5:u,expanded6:d,expanded7:i,expanded8:r}}}),D=t("p",null,[f(" The "),t("strong",null,"NeonExpansionPanel"),f(" is used to show and hide content that may be less important or too large to display on screen all the time. It can also be used to expand lists of items, e.g. "),t("em",null,"Show more"),f(". "),t("strong",null,"NeonExpansionPanel"),f(" consists of a button which, when clicked, toggles the open/closed state of the expansion panel and a slot for the content to display on expansion. ")],-1),B=t("h2",{class:"neon-h3"},"Expansion panel sizes",-1),$=t("h2",{class:"neon-h3"},"More styles",-1);function j(e,n,b,V,h,k){const u=m("neon-card-body"),d=m("neon-expansion-panel"),i=m("neon-stack"),r=m("editor"),c=m("neon-card"),x=m("component-documentation");return e.menuModel?(F(),T(x,{key:0,headline:e.headline,model:e.menuModel},{default:a(()=>[l(c,null,{default:a(()=>[l(u,null,{default:a(()=>[D]),_:1}),l(u,null,{default:a(()=>[B,l(i,null,{default:a(()=>[l(i,{class:"example-expansion-panel"},{default:a(()=>[l(d,{modelValue:e.expanded1,"onUpdate:modelValue":n[0]||(n[0]=o=>e.expanded1=o),label:"Small",size:"s"},{default:a(()=>[t("p",null,s(e.content),1)]),_:1},8,["modelValue"]),l(d,{modelValue:e.expanded2,"onUpdate:modelValue":n[1]||(n[1]=o=>e.expanded2=o),label:"Medium",size:"m"},{default:a(()=>[t("p",null,s(e.content),1)]),_:1},8,["modelValue"]),l(d,{modelValue:e.expanded3,"onUpdate:modelValue":n[2]||(n[2]=o=>e.expanded3=o),label:"Large",size:"l"},{default:a(()=>[t("p",null,s(e.content),1)]),_:1},8,["modelValue"])]),_:1}),l(r,{modelValue:e.sizesTemplate,"onUpdate:modelValue":n[3]||(n[3]=o=>e.sizesTemplate=o)},null,8,["modelValue"])]),_:1})]),_:1}),l(u,null,{default:a(()=>[$,l(i,null,{default:a(()=>[l(i,{class:"example-expansion-panel"},{default:a(()=>[l(d,{modelValue:e.expanded4,"onUpdate:modelValue":n[4]||(n[4]=o=>e.expanded4=o),icon:"contrast",label:"With icon"},{default:a(()=>[t("p",null,s(e.content),1)]),_:1},8,["modelValue"]),l(d,{modelValue:e.expanded5,"onUpdate:modelValue":n[5]||(n[5]=o=>e.expanded5=o),color:"success",icon:"contrast",label:"Colored label"},{default:a(()=>[t("p",null,s(e.content),1)]),_:1},8,["modelValue"]),l(d,{modelValue:e.expanded6,"onUpdate:modelValue":n[6]||(n[6]=o=>e.expanded6=o),"full-width":!0,label:"Full width"},{default:a(()=>[t("p",null,s(e.content),1)]),_:1},8,["modelValue"]),l(d,{modelValue:e.expanded7,"onUpdate:modelValue":n[7]||(n[7]=o=>e.expanded7=o),disabled:!0,label:"Disabled"},{default:a(()=>[t("p",null,s(e.content),1)]),_:1},8,["modelValue"]),l(d,{modelValue:e.expanded8,"onUpdate:modelValue":n[8]||(n[8]=o=>e.expanded8=o),label:"From bottom",position:"bottom"},{default:a(()=>[t("p",null,s(e.content),1)]),_:1},8,["modelValue"])]),_:1}),l(r,{modelValue:e.moreTemplate,"onUpdate:modelValue":n[9]||(n[9]=o=>e.moreTemplate=o)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["headline","model"])):S("",!0)}const K=v(P,[["render",j]]);export{K as default};
