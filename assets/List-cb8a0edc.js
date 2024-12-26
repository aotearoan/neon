import{N as k,a as N,b as g}from"./NeonCardHeader-5e3d5e8c.js";import{N as y}from"./NeonList-1ffbbc47.js";import{N as _}from"./NeonStack-fb7ab566.js";import{M as E,_ as L}from"../index.js";import{C as U}from"./ComponentDocumentation-6caf88ca.js";import{E as w}from"./Editor-1d4a4353.js";import{u as z,R as a,S as M,D as i,F as B,G as s,A as $,x as D,L as n,H as t,a2 as b}from"./vendor-7a8d752b.js";import"./NeonLabel-387f69e3.js";import"./NeonNote-2bf2c89c.js";import"./NeonInline-e4d49a2a.js";import"./NeonTabs-5786a26a.js";const H=z({name:"List",components:{NeonCard:k,NeonCardBody:N,NeonCardHeader:g,NeonList:y,NeonStack:_,ComponentDocumentation:U,Editor:w},setup(){const e=a(null),o=a("A vertical list of removable items"),d=a([{key:"key1",label:"Item 1"},{key:"key2",label:"Item 2"},{key:"key3",label:"Item 3"},{key:"key4",label:"Item 4"}]),I=a([...d.value]),c=a([...d.value]),f=a([...d.value]),r=a([...d.value]),m=a([...d.value]),u=a([...d.value]),p=a([...d.value]),C=v=>console.log(`${v} removed`),V=`<neon-list v-model="smallItems"
           size="s"
           @close="onClose"
/>
<neon-list v-model="mediumItems"
           @close="onClose"
/>
<neon-list v-model="largeItems"
           size="l"
           @close="onClose"
/>`,l=`<neon-list v-model="hcItems"
           color="high-contrast"
           @close="onClose"
/>
<neon-list v-model="brandItems"
           color="brand"
           @close="onClose"
/>
<neon-list v-model="warnItems"
           color="warn"
           @close="onClose"
/>`,h='<neon-list v-model="disabledItems" :disabled="true" />';return M(()=>e.value=E.getComponentConfig("NeonList")),{menuModel:e,headline:o,sizeExamples:V,colorExamples:l,stateExamples:h,smallItems:I,mediumItems:c,largeItems:f,hcItems:r,brandItems:m,warnItems:u,disabledItems:p,onClose:C}}}),S=t("p",null,[b(" The "),t("strong",null,"NeonList"),b(" component renders a list of removable items. This can be used as an alternative to removable chips where a vertical list is more appropriate. ")],-1),T=t("h2",{class:"neon-h3"},"List sizes",-1),A=t("h4",null,"Small",-1),F=t("h4",null,"Medium",-1),G=t("h4",null,"Large",-1),R=t("h2",{class:"neon-h3"},"List colors",-1),W=t("h4",null,"High contrast",-1),j=t("h4",null,"Brand",-1),q=t("h4",null,"Warn",-1),J=t("h2",{class:"neon-h3"},"List states",-1),K=t("h4",null,"Disabled",-1);function O(e,o,d,I,c,f){const r=i("neon-card-body"),m=i("neon-list"),u=i("neon-stack"),p=i("editor"),C=i("neon-card"),V=i("component-documentation");return e.menuModel?(D(),B(V,{key:0,headline:e.headline,model:e.menuModel},{default:s(()=>[n(C,null,{default:s(()=>[n(r,null,{default:s(()=>[S]),_:1}),n(r,null,{default:s(()=>[T,n(u,null,{default:s(()=>[n(u,null,{default:s(()=>[A,n(m,{modelValue:e.smallItems,"onUpdate:modelValue":o[0]||(o[0]=l=>e.smallItems=l),size:"s",onClose:e.onClose},null,8,["modelValue","onClose"]),F,n(m,{modelValue:e.mediumItems,"onUpdate:modelValue":o[1]||(o[1]=l=>e.mediumItems=l),onClose:e.onClose},null,8,["modelValue","onClose"]),G,n(m,{modelValue:e.largeItems,"onUpdate:modelValue":o[2]||(o[2]=l=>e.largeItems=l),size:"l",onClose:e.onClose},null,8,["modelValue","onClose"])]),_:1}),n(p,{modelValue:e.sizeExamples,"onUpdate:modelValue":o[3]||(o[3]=l=>e.sizeExamples=l)},null,8,["modelValue"])]),_:1})]),_:1}),n(r,null,{default:s(()=>[R,n(u,null,{default:s(()=>[n(u,null,{default:s(()=>[W,n(m,{modelValue:e.hcItems,"onUpdate:modelValue":o[4]||(o[4]=l=>e.hcItems=l),color:"high-contrast",onClose:e.onClose},null,8,["modelValue","onClose"]),j,n(m,{modelValue:e.brandItems,"onUpdate:modelValue":o[5]||(o[5]=l=>e.brandItems=l),color:"brand",onClose:e.onClose},null,8,["modelValue","onClose"]),q,n(m,{modelValue:e.warnItems,"onUpdate:modelValue":o[6]||(o[6]=l=>e.warnItems=l),color:"warn",onClose:e.onClose},null,8,["modelValue","onClose"])]),_:1}),n(p,{modelValue:e.colorExamples,"onUpdate:modelValue":o[7]||(o[7]=l=>e.colorExamples=l)},null,8,["modelValue"])]),_:1})]),_:1}),n(r,null,{default:s(()=>[J,n(u,null,{default:s(()=>[n(u,null,{default:s(()=>[K,n(m,{modelValue:e.disabledItems,"onUpdate:modelValue":o[8]||(o[8]=l=>e.disabledItems=l),disabled:!0},null,8,["modelValue"])]),_:1}),n(p,{modelValue:e.stateExamples,"onUpdate:modelValue":o[9]||(o[9]=l=>e.stateExamples=l)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["headline","model"])):$("",!0)}const te=L(H,[["render",O]]);export{te as default};
