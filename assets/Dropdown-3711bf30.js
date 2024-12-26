import{N as q,a as T}from"./NeonCardHeader-5e3d5e8c.js";import{N as z}from"./NeonDropdown-f9c34229.js";import{N as k}from"./NeonInline-e4d49a2a.js";import{N as I}from"./NeonStack-fb7ab566.js";import{C as M}from"./ComponentDocumentation-6caf88ca.js";import{E as H}from"./Editor-1d4a4353.js";import{M as W,_ as X}from"../index.js";import{u as $,R as r,S as L,D as i,F as A,G as e,A as P,x as F,L as o,H as t,a2 as f}from"./vendor-7a8d752b.js";import"./NeonPlacementUtils-e254198c.js";import"./NeonBadge-0890751f.js";import"./NeonColorUtils-3abbbd7e.js";import"./NeonLabel-387f69e3.js";import"./NeonNote-2bf2c89c.js";import"./NeonTabs-5786a26a.js";const G=$({name:"Dropdown",components:{NeonCard:q,NeonCardBody:T,NeonDropdown:z,NeonStack:I,NeonInline:k,ComponentDocumentation:M,Editor:H},setup(){const n=r(null),l=r("Display content in a popup over the page"),c=r(!1),y=r(!1),O=r(!1),V=r(!1),s=r(!1),a=r(!1),p=r(!1),u=r(!1),m=r(!1),b=r(!1),w=r(!1),d=r(!1),g=r(!1),h=r(!1),D=r(!1),_=r(!1),v=`<neon-dropdown v-model="sOpen" label="Small" size="s">
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>
<neon-dropdown v-model="mOpen" label="Medium" size="m">
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>
<neon-dropdown v-model="lOpen" label="Large" size="l">
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>`,E=`<neon-dropdown v-model="solidButtonOpen"
               dropdown-style="solid-button"
               label="Solid"
>
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>
<neon-dropdown v-model="textOpen"
               dropdown-style="text-button"
               label="Text"
>
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>`,U=`<neon-dropdown v-model="badgeSquareOpen"
               dropdown-style="square-badge"
               label="XD"
>
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>
<neon-dropdown v-model="badgeCircularOpen"
               dropdown-style="circular-badge"
               label="XD"
>
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>`,S=`<neon-dropdown v-model="withIconOpen"
               icon="plus"
               label="With icon"
>
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>
<neon-dropdown v-model="iconOnlyOpen" icon="plus">
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>
<neon-dropdown v-model="badgeSquareOpen"
               dropdown-style="square-badge"
               icon="user"
>
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>
<neon-dropdown v-model="noIndicatorOpen"
               :indicator="false"
               label="No indicator"
>
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>`,N=`<neon-dropdown v-model="primaryOpen"
               color="primary"
               label="Primary"
>
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>
<neon-dropdown v-model="warnTextOpen"
               color="warn"
               dropdown-style="text-button"
               label="Warning"
>
  <neon-card-body>
    <p>Dropdown contents</p>
  </neon-card-body>
</neon-dropdown>`,B=`<neon-dropdown v-model="blOpen" label="Bottom left aligned">
  <neon-card-body>
    <p>Bacon ipsum dolor amet t-bone ribeye</p>
  </neon-card-body>
</neon-dropdown>
<neon-dropdown v-model="trOpen"
               label="Top right aligned"
               placement="top-right"
>
  <neon-card-body>
    <p>Bacon ipsum dolor amet t-bone ribeye</p>
  </neon-card-body>
</neon-dropdown>`,C=`<neon-dropdown v-model="hoverOpen"
               :open-on-hover="true"
               dropdown-style="text-button"
               label="Open on hover"
>
  <neon-card-body>
    <p>Bacon ipsum dolor amet t-bone ribeye</p>
  </neon-card-body>
</neon-dropdown>`;return L(()=>n.value=W.getComponentConfig("NeonDropdown")),{menuModel:n,headline:l,sizeExamples:v,colorExamples:N,iconExamples:S,buttonStyleExamples:E,badgeStyleExamples:U,positionExamples:B,openOnHoverExample:C,sOpen:c,mOpen:y,lOpen:O,disabledOpen:V,withIconOpen:s,iconOnlyOpen:a,noIndicatorOpen:p,textOpen:u,solidButtonOpen:m,primaryOpen:b,warnTextOpen:w,badgeSquareOpen:d,badgeCircularOpen:g,trOpen:h,blOpen:D,hoverOpen:_}}}),R=t("p",null," A general purpose dropdown component. This component consists of a button, to trigger the dropdown to open, and the dropdown content which is displayed above the page when the user clicks the button. ",-1),j=t("p",null," This can be useful for secondary (perhaps more complex) actions for which there is not enough space on the page or the action is asynchronous allowing the user to perform the action and continue what they were doing. Examples are providing links to copy and letting the user send feedback. ",-1),J=t("p",null,[t("strong",null,"NeonDropdown"),f(" is the basis for the "),t("strong",null,"NeonDropdownMenu"),f(" component and the "),t("strong",null,"NeonSelect"),f(" form component. ")],-1),K=t("h2",{class:"neon-h3"},"Dropdown sizes",-1),Q=t("p",null,"Dropdown contents",-1),Y=t("p",null,"Dropdown contents",-1),Z=t("p",null,"Dropdown contents",-1),x=t("h2",{class:"neon-h3"},"Dropdown colors",-1),oo=t("p",null,"Dropdown contents",-1),eo=t("p",null,"Dropdown contents",-1),no=t("h2",{class:"neon-h3"},"Dropdown with icons",-1),lo=t("p",null,"Dropdown contents",-1),to=t("p",null,"Dropdown contents",-1),ao=t("p",null,"Dropdown contents",-1),po=t("p",null,"Dropdown contents",-1),ro=t("h2",{class:"neon-h3"},"Dropdown button styles",-1),so=t("p",null,"Dropdown contents",-1),uo=t("p",null,"Dropdown contents",-1),mo=t("h2",{class:"neon-h3"},"Dropdown badge styles",-1),io=t("p",null,"Dropdown contents",-1),bo=t("p",null,"Dropdown contents",-1),wo=t("h2",{class:"neon-h3"},"Dropdown positions",-1),fo=t("p",null,"Bacon ipsum dolor amet t-bone ribeye",-1),co=t("p",null,"Bacon ipsum dolor amet t-bone ribeye",-1),yo=t("h2",{class:"neon-h3"},"Dropdown open on hover",-1),Oo=t("p",null,"Bacon ipsum dolor amet t-bone ribeye",-1);function Vo(n,l,c,y,O,V){const s=i("neon-stack"),a=i("neon-card-body"),p=i("neon-dropdown"),u=i("neon-inline"),m=i("editor"),b=i("neon-card"),w=i("component-documentation");return n.menuModel?(F(),A(w,{key:0,headline:n.headline,model:n.menuModel},{default:e(()=>[o(b,null,{default:e(()=>[o(a,null,{default:e(()=>[o(s,null,{default:e(()=>[R,j,J]),_:1})]),_:1}),o(a,null,{default:e(()=>[K,o(s,null,{default:e(()=>[o(u,null,{default:e(()=>[o(p,{modelValue:n.sOpen,"onUpdate:modelValue":l[0]||(l[0]=d=>n.sOpen=d),label:"Small",size:"s"},{default:e(()=>[o(a,null,{default:e(()=>[Q]),_:1})]),_:1},8,["modelValue"]),o(p,{modelValue:n.mOpen,"onUpdate:modelValue":l[1]||(l[1]=d=>n.mOpen=d),label:"Medium",size:"m"},{default:e(()=>[o(a,null,{default:e(()=>[Y]),_:1})]),_:1},8,["modelValue"]),o(p,{modelValue:n.lOpen,"onUpdate:modelValue":l[2]||(l[2]=d=>n.lOpen=d),label:"Large",size:"l"},{default:e(()=>[o(a,null,{default:e(()=>[Z]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(m,{modelValue:n.sizeExamples,"onUpdate:modelValue":l[3]||(l[3]=d=>n.sizeExamples=d)},null,8,["modelValue"])]),_:1})]),_:1}),o(a,null,{default:e(()=>[x,o(s,null,{default:e(()=>[o(u,null,{default:e(()=>[o(p,{modelValue:n.primaryOpen,"onUpdate:modelValue":l[4]||(l[4]=d=>n.primaryOpen=d),color:"primary",label:"Primary"},{default:e(()=>[o(a,null,{default:e(()=>[oo]),_:1})]),_:1},8,["modelValue"]),o(p,{modelValue:n.warnTextOpen,"onUpdate:modelValue":l[5]||(l[5]=d=>n.warnTextOpen=d),color:"warn","dropdown-style":"text-button",label:"Warning"},{default:e(()=>[o(a,null,{default:e(()=>[eo]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(m,{modelValue:n.colorExamples,"onUpdate:modelValue":l[6]||(l[6]=d=>n.colorExamples=d)},null,8,["modelValue"])]),_:1})]),_:1}),o(a,null,{default:e(()=>[no,o(s,null,{default:e(()=>[o(u,null,{default:e(()=>[o(p,{modelValue:n.withIconOpen,"onUpdate:modelValue":l[7]||(l[7]=d=>n.withIconOpen=d),icon:"plus",label:"With icon"},{default:e(()=>[o(a,null,{default:e(()=>[lo]),_:1})]),_:1},8,["modelValue"]),o(p,{modelValue:n.iconOnlyOpen,"onUpdate:modelValue":l[8]||(l[8]=d=>n.iconOnlyOpen=d),icon:"plus"},{default:e(()=>[o(a,null,{default:e(()=>[to]),_:1})]),_:1},8,["modelValue"]),o(p,{modelValue:n.badgeSquareOpen,"onUpdate:modelValue":l[9]||(l[9]=d=>n.badgeSquareOpen=d),"dropdown-style":"square-badge",icon:"user"},{default:e(()=>[o(a,null,{default:e(()=>[ao]),_:1})]),_:1},8,["modelValue"]),o(p,{modelValue:n.noIndicatorOpen,"onUpdate:modelValue":l[10]||(l[10]=d=>n.noIndicatorOpen=d),indicator:!1,label:"No indicator"},{default:e(()=>[o(a,null,{default:e(()=>[po]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(m,{modelValue:n.iconExamples,"onUpdate:modelValue":l[11]||(l[11]=d=>n.iconExamples=d)},null,8,["modelValue"])]),_:1})]),_:1}),o(a,null,{default:e(()=>[ro,o(s,null,{default:e(()=>[o(u,null,{default:e(()=>[o(p,{modelValue:n.solidButtonOpen,"onUpdate:modelValue":l[12]||(l[12]=d=>n.solidButtonOpen=d),"dropdown-style":"solid-button",label:"Solid"},{default:e(()=>[o(a,null,{default:e(()=>[so]),_:1})]),_:1},8,["modelValue"]),o(p,{modelValue:n.textOpen,"onUpdate:modelValue":l[13]||(l[13]=d=>n.textOpen=d),"dropdown-style":"text-button",label:"Text"},{default:e(()=>[o(a,null,{default:e(()=>[uo]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(m,{modelValue:n.buttonStyleExamples,"onUpdate:modelValue":l[14]||(l[14]=d=>n.buttonStyleExamples=d)},null,8,["modelValue"])]),_:1})]),_:1}),o(a,null,{default:e(()=>[mo,o(s,null,{default:e(()=>[o(u,null,{default:e(()=>[o(p,{modelValue:n.badgeSquareOpen,"onUpdate:modelValue":l[15]||(l[15]=d=>n.badgeSquareOpen=d),"dropdown-style":"square-badge",label:"XD"},{default:e(()=>[o(a,null,{default:e(()=>[io]),_:1})]),_:1},8,["modelValue"]),o(p,{modelValue:n.badgeCircularOpen,"onUpdate:modelValue":l[16]||(l[16]=d=>n.badgeCircularOpen=d),"dropdown-style":"circular-badge",label:"XD"},{default:e(()=>[o(a,null,{default:e(()=>[bo]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(m,{modelValue:n.badgeStyleExamples,"onUpdate:modelValue":l[17]||(l[17]=d=>n.badgeStyleExamples=d)},null,8,["modelValue"])]),_:1})]),_:1}),o(a,null,{default:e(()=>[wo,o(s,null,{default:e(()=>[o(u,null,{default:e(()=>[o(p,{modelValue:n.blOpen,"onUpdate:modelValue":l[18]||(l[18]=d=>n.blOpen=d),label:"Bottom left aligned"},{default:e(()=>[o(a,null,{default:e(()=>[fo]),_:1})]),_:1},8,["modelValue"]),o(p,{modelValue:n.trOpen,"onUpdate:modelValue":l[19]||(l[19]=d=>n.trOpen=d),label:"Top right aligned",placement:"top-right"},{default:e(()=>[o(a,null,{default:e(()=>[co]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(m,{modelValue:n.positionExamples,"onUpdate:modelValue":l[20]||(l[20]=d=>n.positionExamples=d)},null,8,["modelValue"])]),_:1})]),_:1}),o(a,null,{default:e(()=>[yo,o(s,null,{default:e(()=>[o(u,null,{default:e(()=>[o(p,{modelValue:n.hoverOpen,"onUpdate:modelValue":l[21]||(l[21]=d=>n.hoverOpen=d),"open-on-hover":!0,"dropdown-style":"text-button",label:"Open on hover"},{default:e(()=>[o(a,null,{default:e(()=>[Oo]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(m,{modelValue:n.openOnHoverExample,"onUpdate:modelValue":l[22]||(l[22]=d=>n.openOnHoverExample=d)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["headline","model"])):P("",!0)}const ko=X(G,[["render",Vo]]);export{ko as default};
