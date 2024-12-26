import{N as C,M as N,_ as w}from"../index.js";import{C as k}from"./ComponentDocumentation-6caf88ca.js";import{N as z,a as v,b as V}from"./NeonCardHeader-5e3d5e8c.js";import{N as H}from"./NeonCardFooter-0c3e05d5.js";import{N as B}from"./NeonStack-fb7ab566.js";import{E as A}from"./Editor-1d4a4353.js";import{u as E,R as y,S as T,D as r,F,G as n,A as M,x as U,L as o,H as e,a2 as t}from"./vendor-7a8d752b.js";import"./NeonLabel-387f69e3.js";import"./NeonNote-2bf2c89c.js";import"./NeonInline-e4d49a2a.js";import"./NeonTabs-5786a26a.js";const j=E({name:"Card",components:{NeonCard:z,NeonCardBody:v,NeonCardHeader:V,NeonCardFooter:H,NeonButton:C,NeonStack:B,ComponentDocumentation:k,Editor:A},setup(){const a=y(null),d=y("A component for content layout within a page"),p="/neon/",m=`<neon-card>
  <neon-card-header>
    <h4>Card header</h4>
  </neon-card-header>
  <neon-card-body>
    <p>Card body</p>
  </neon-card-body>
  <neon-card-body>
    <p>Another card body. Cards can also have full width sections without an padding (this is useful for adding images, charts, etc). The following section is full width:</p>
  </neon-card-body>
  <neon-card-body :full-width="true">
    <img :src="baseUrl + 'images/taranaki.jpg'" />
  </neon-card-body>
  <neon-card-body>
    <p>Place card actions inside the <strong>NeonCardFooter</strong> below:</p>
  </neon-card-body>
  <neon-card-footer>
    <neon-button label="Cancel" />
    <neon-button label="Accept" color="primary" />
  </neon-card-footer>
</neon-card>`,h=`<neon-card orientation="horizontal">
  <neon-card-header>
    <h4>Header</h4>
  </neon-card-header>
  <neon-card-body>
    <p>Spicy jalapeno bacon ipsum dolor amet biltong porchetta cupim sausage pork loin. Ham porchetta brisket.</p>
  </neon-card-body>
  <neon-card-footer>
    <neon-button size="s" label="Cancel" />
    <neon-button size="s" label="Accept" color="primary" />
  </neon-card-footer>
</neon-card>`;return T(()=>a.value=N.getComponentConfig("NeonCard")),{menuModel:a,headline:d,horizontalExample:h,verticalExample:m,baseUrl:p}}}),x=e("p",null,[e("strong",null,"NeonCard"),t(" is a key component for the layout of content within pages. Card consist of any number of "),e("strong",null,"NeonCardHeader"),t(", "),e("strong",null,"NeonCardBody"),t(" and "),e("strong",null,"NeonCardFooter"),t(" components. ")],-1),S=e("p",null,[t(" By default cards have a column layout, use the "),e("em",null,"orientation"),t(" property to define horizontal cards (row layout). Horizontal cards will revert to a column layout at a configurable responsive breakpoint. ")],-1),$=e("p",null,[t(" The "),e("strong",null,"NeonCardHeader"),t(" component is designed to be a container for titles as well as secondary actions related to the content displayed in the card. ")],-1),D=e("p",null,[t(" The "),e("strong",null,"NeonCardBody"),t(" component is used for displaying the main content of the card. By default, body sections have padding defined. Use the "),e("em",null,"full-width"),t(" attribute for displaying body content without any padding. This can be useful for display edge-to-edge images, etc.. in cards. ")],-1),P=e("p",null,[t(" The "),e("strong",null,"NeonCardFooter"),t(" is designed to be placed at the bottom of a card and contains the key actions related to the card content. ")],-1),G=e("h2",{class:"neon-h3"},"Vertical card",-1),L=e("h4",null,"Card header",-1),R=e("p",null,"Card body",-1),q=e("p",null," Another card body. Cards can also have full width sections without an padding (this is useful for adding images, charts, etc). The following section is full width: ",-1),I=["src"],J=e("p",null,[t("Place card actions inside the "),e("strong",null,"NeonCardFooter"),t(" below:")],-1),K=e("h2",{class:"neon-h3"},"Horizontal card",-1),O=e("h4",null,"Header",-1),Q=e("p",null," Spicy jalapeno bacon ipsum dolor amet biltong porchetta cupim sausage pork loin. Ham porchetta brisket. ",-1);function W(a,d,p,m,h,X){const c=r("neon-stack"),l=r("neon-card-body"),f=r("neon-card-header"),s=r("neon-button"),_=r("neon-card-footer"),i=r("neon-card"),b=r("editor"),g=r("component-documentation");return a.menuModel?(U(),F(g,{key:0,headline:a.headline,model:a.menuModel},{default:n(()=>[o(i,null,{default:n(()=>[o(l,null,{default:n(()=>[o(c,null,{default:n(()=>[x,S,$,D,P]),_:1})]),_:1}),o(l,null,{default:n(()=>[G,o(c,null,{default:n(()=>[o(i,null,{default:n(()=>[o(f,null,{default:n(()=>[L]),_:1}),o(l,null,{default:n(()=>[R]),_:1}),o(l,null,{default:n(()=>[q]),_:1}),o(l,{"full-width":!0},{default:n(()=>[e("img",{src:a.baseUrl+"images/taranaki.jpg"},null,8,I)]),_:1}),o(l,null,{default:n(()=>[J]),_:1}),o(_,null,{default:n(()=>[o(s,{label:"Cancel"}),o(s,{color:"primary",label:"Accept"})]),_:1})]),_:1}),o(b,{modelValue:a.verticalExample,"onUpdate:modelValue":d[0]||(d[0]=u=>a.verticalExample=u)},null,8,["modelValue"])]),_:1})]),_:1}),o(l,null,{default:n(()=>[K,o(c,null,{default:n(()=>[o(i,{orientation:"horizontal"},{default:n(()=>[o(f,null,{default:n(()=>[O]),_:1}),o(l,null,{default:n(()=>[Q]),_:1}),o(_,null,{default:n(()=>[o(s,{label:"Cancel",size:"s"}),o(s,{color:"primary",label:"Accept",size:"s"})]),_:1})]),_:1}),o(b,{modelValue:a.horizontalExample,"onUpdate:modelValue":d[1]||(d[1]=u=>a.horizontalExample=u)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["headline","model"])):M("",!0)}const io=w(j,[["render",W]]);export{io as default};
