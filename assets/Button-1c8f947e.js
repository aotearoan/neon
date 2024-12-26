import{N as E,M as x,_ as V}from"../index.js";import{N,a as C}from"./NeonCardHeader-5e3d5e8c.js";import{N as B}from"./NeonInline-e4d49a2a.js";import{N as v}from"./NeonNote-2bf2c89c.js";import{N as S}from"./NeonStack-fb7ab566.js";import{C as k}from"./ComponentDocumentation-6caf88ca.js";import{E as L}from"./Editor-1d4a4353.js";import{u as M,R as y,S as I,D as c,F as U,G as l,A as z,x as D,L as o,H as t,a2 as b}from"./vendor-7a8d752b.js";import"./NeonLabel-387f69e3.js";import"./NeonTabs-5786a26a.js";const P=M({name:"Button",components:{NeonCard:N,NeonCardBody:C,NeonButton:E,NeonNote:v,NeonStack:S,NeonInline:B,ComponentDocumentation:k,Editor:L},setup(){const n=y(null),a=y("Styled HTML buttons"),p=`<neon-button size="s" label="Small button" />
<neon-button size="m" label="Medium button" />
<neon-button size="l" label="Large button" />`,f=`<neon-button color="low-contrast" label="Low contrast" />
<neon-button color="neutral" label="Neutral" />
<neon-button color="high-contrast" label="High contrast" />
<div class="example--padded example--info">
  <neon-button :inverse="true" label="Inverse" />
</div>`,h=`<neon-button color="brand" label="Brand" />
<neon-button color="primary" label="Primary" />`,_=`<neon-button color="info" label="Info" />
<neon-button color="success" label="Success" />
<neon-button color="warn" label="Warn" />
<neon-button color="error" label="Error" />`,u=`<neon-note color="warn">
  <p>Use with care! It is recommended to avoid using too many variations of these buttons on a single site.</p>
</neon-note>
<br />
<neon-inline class="example--wrap">
  <neon-button color="primary" alternate-color="primary" label="Primary" />
  <neon-button color="success" alternate-color="info" label="Success" />
  <neon-button color="brand" alternate-color="primary" label="Mixed" />
  <neon-button color="brand" alternate-color="info" :circular="true" icon="plus" />
</neon-inline>`,e=`<neon-button button-style="solid" label="Solid button" />
<neon-button button-style="outline" label="Outline button" />
<neon-button button-style="text" label="Text button" />
<neon-note color="info">
  <span><strong>Note:</strong> add an <em>href</em> to buttons and they will be rendered as links</span>
</neon-note>
<neon-button target="_blank" href="/" label="Link button" />
<neon-button :full-width="true" button-style="outline" label="Full width button" />`,d=`<neon-button icon="plus" label="With icon" />
<neon-button icon="plus" icon-position="right" label="Positioned right" />`,i=`<neon-button icon="plus" />
<neon-button :circular="true" icon="plus" />`,r=`<neon-button :disabled="true" label="Disabled solid" button-style="solid" />
<neon-button :disabled="true" label="Disabled outline" button-style="outline" />
<neon-button :disabled="true" label="Disabled text" button-style="text" />
<neon-button state="loading" color="primary" label="Loading" />
<neon-button state="loading" color="primary" label="Loading button with icon" icon="plus" />
<neon-button state="success" color="primary" label="Success" />
<neon-button
  state="success"
  color="primary"
  label="Success button with icon"
  icon="plus"
/>
<neon-button state="error" color="error" label="Error" />
<neon-button
  state="error"
  color="error"
  label="Error button with icon"
  icon="plus"
/>`;return I(()=>n.value=x.getComponentConfig("NeonButton")),{menuModel:n,headline:a,sizeExamples:p,neutralColorExamples:f,brandColorExamples:h,functionalColorExamples:_,gradientExamples:u,styleExamples:e,withIconExamples:d,iconOnlyExamples:i,stateExamples:r}}}),T=t("p",null,[t("strong",null,"NeonButton"),b(" is a wrapper around HTML button elements which provides multiple styles, colors and extra functionality. For example, adding an "),t("em",null,"href"),b(" to a button will render it semantically as a link. There are also multiple supported button states, which can be useful for indicating success, error and loading states. ")],-1),F=t("h2",{class:"neon-h3"},"Button sizes",-1),H=t("h2",{class:"neon-h3"},"Neutral colors",-1),O={class:"example--padded example--info"},W=t("h2",{class:"neon-h3"},"Brand colors",-1),$=t("h2",{class:"neon-h3"},"Functional colors",-1),G=t("h2",{class:"neon-h3"},"Gradient buttons",-1),A=t("p",null," Use with care! It is recommended to avoid using too many variations of these buttons on a single site. ",-1),R=t("br",null,null,-1),j=t("h2",{class:"neon-h3"},"Button styles",-1),q=t("span",null,[t("strong",null,"Note:"),b(" add an "),t("em",null,"href"),b(" to buttons and they will be rendered as links")],-1),J=t("h2",{class:"neon-h3"},"Buttons with icons",-1),K=t("h2",{class:"neon-h3"},"Icon only buttons",-1),Q=t("h2",{class:"neon-h3"},"Button states",-1),X=t("span",null,[t("strong",null,"Note:"),b(" add button states ("),t("strong",null,"loading, success, error"),b(") to indicate the result of actions. Buttons will be disabled until set back to the "),t("strong",null,"ready"),b(" state. ")],-1);function Y(n,a,p,f,h,_){const u=c("neon-card-body"),e=c("neon-button"),d=c("neon-inline"),i=c("editor"),r=c("neon-stack"),m=c("neon-note"),g=c("neon-card"),w=c("component-documentation");return n.menuModel?(D(),U(w,{key:0,headline:n.headline,model:n.menuModel},{default:l(()=>[o(g,null,{default:l(()=>[o(u,null,{default:l(()=>[T]),_:1}),o(u,null,{default:l(()=>[F,o(r,null,{default:l(()=>[o(d,null,{default:l(()=>[o(e,{label:"Small button",size:"s"}),o(e,{label:"Medium button",size:"m"}),o(e,{label:"Large button",size:"l"})]),_:1}),o(i,{modelValue:n.sizeExamples,"onUpdate:modelValue":a[0]||(a[0]=s=>n.sizeExamples=s)},null,8,["modelValue"])]),_:1})]),_:1}),o(u,null,{default:l(()=>[H,o(r,null,{default:l(()=>[o(d,{class:"example--wrap"},{default:l(()=>[o(e,{color:"low-contrast",label:"Low contrast"}),o(e,{color:"neutral",label:"Neutral"}),o(e,{color:"high-contrast",label:"High contrast"}),t("div",O,[o(e,{inverse:!0,label:"Inverse"})])]),_:1}),o(i,{modelValue:n.neutralColorExamples,"onUpdate:modelValue":a[1]||(a[1]=s=>n.neutralColorExamples=s)},null,8,["modelValue"])]),_:1})]),_:1}),o(u,null,{default:l(()=>[W,o(r,null,{default:l(()=>[o(d,{class:"example--wrap"},{default:l(()=>[o(e,{color:"brand",label:"Brand"}),o(e,{color:"primary",label:"Primary"})]),_:1}),o(i,{modelValue:n.brandColorExamples,"onUpdate:modelValue":a[2]||(a[2]=s=>n.brandColorExamples=s)},null,8,["modelValue"])]),_:1})]),_:1}),o(u,null,{default:l(()=>[$,o(r,null,{default:l(()=>[o(d,{class:"example--wrap"},{default:l(()=>[o(e,{color:"info",label:"Info"}),o(e,{color:"success",label:"Success"}),o(e,{color:"warn",label:"Warn"}),o(e,{color:"error",label:"Error"})]),_:1}),o(i,{modelValue:n.functionalColorExamples,"onUpdate:modelValue":a[3]||(a[3]=s=>n.functionalColorExamples=s)},null,8,["modelValue"])]),_:1})]),_:1}),o(u,null,{default:l(()=>[G,o(r,null,{default:l(()=>[t("div",null,[o(m,{color:"warn"},{default:l(()=>[A]),_:1}),R,o(d,{class:"example--wrap"},{default:l(()=>[o(e,{"alternate-color":"primary",color:"primary",label:"Primary"}),o(e,{"alternate-color":"info",color:"success",label:"Success"}),o(e,{"alternate-color":"primary",color:"brand",label:"Mixed"}),o(e,{circular:!0,"alternate-color":"info",color:"brand",icon:"plus"})]),_:1})]),o(i,{modelValue:n.gradientExamples,"onUpdate:modelValue":a[4]||(a[4]=s=>n.gradientExamples=s)},null,8,["modelValue"])]),_:1})]),_:1}),o(u,null,{default:l(()=>[j,o(r,null,{default:l(()=>[o(r,null,{default:l(()=>[o(e,{"button-style":"solid",label:"Solid button"}),o(e,{"button-style":"outline",label:"Outline button"}),o(e,{"button-style":"text",label:"Text button"}),o(m,{color:"info"},{default:l(()=>[q]),_:1}),o(e,{href:"/",label:"Link button",target:"_blank"}),o(e,{"full-width":!0,"button-style":"outline",label:"Full width button"})]),_:1}),o(i,{modelValue:n.styleExamples,"onUpdate:modelValue":a[5]||(a[5]=s=>n.styleExamples=s)},null,8,["modelValue"])]),_:1})]),_:1}),o(u,null,{default:l(()=>[J,o(r,null,{default:l(()=>[o(d,null,{default:l(()=>[o(e,{icon:"plus",label:"With icon"}),o(e,{icon:"plus","icon-position":"right",label:"Positioned right"})]),_:1}),o(i,{modelValue:n.withIconExamples,"onUpdate:modelValue":a[6]||(a[6]=s=>n.withIconExamples=s)},null,8,["modelValue"])]),_:1})]),_:1}),o(u,null,{default:l(()=>[K,o(r,null,{default:l(()=>[o(d,null,{default:l(()=>[o(e,{icon:"plus"}),o(e,{circular:!0,icon:"plus"})]),_:1}),o(i,{modelValue:n.iconOnlyExamples,"onUpdate:modelValue":a[7]||(a[7]=s=>n.iconOnlyExamples=s)},null,8,["modelValue"])]),_:1})]),_:1}),o(u,null,{default:l(()=>[Q,o(r,null,{default:l(()=>[o(r,null,{default:l(()=>[o(m,{color:"info"},{default:l(()=>[X]),_:1}),o(e,{disabled:!0,"button-style":"solid",label:"Disabled solid"}),o(e,{disabled:!0,"button-style":"outline",label:"Disabled outline"}),o(e,{disabled:!0,"button-style":"text",label:"Disabled text"}),o(e,{color:"primary",label:"Loading",state:"loading"}),o(e,{color:"primary",icon:"plus",label:"Loading button with icon",state:"loading"}),o(e,{color:"primary",label:"Success",state:"success"}),o(e,{color:"primary",icon:"plus",label:"Success button with icon",state:"success"}),o(e,{color:"error",label:"Error",state:"error"}),o(e,{color:"error",icon:"plus",label:"Error button with icon",state:"error"})]),_:1}),o(i,{modelValue:n.stateExamples,"onUpdate:modelValue":a[8]||(a[8]=s=>n.stateExamples=s)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["headline","model"])):z("",!0)}const io=V(P,[["render",Y]]);export{io as default};
