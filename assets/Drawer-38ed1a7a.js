import{C as O}from"./ComponentDocumentation-6caf88ca.js";import{E as w}from"./Editor-1d4a4353.js";import{N as C,p as T,M as y,_ as L}from"../index.js";import{N as _,a as B}from"./NeonCardHeader-5e3d5e8c.js";import{N as M}from"./NeonInline-e4d49a2a.js";import{N}from"./NeonStack-fb7ab566.js";import{u as $,R as d,S as R,D as r,F as H,G as t,A as D,x as V,L as o,H as p}from"./vendor-7a8d752b.js";import"./NeonLabel-387f69e3.js";import"./NeonNote-2bf2c89c.js";import"./NeonTabs-5786a26a.js";const S=$({name:"Drawer",components:{NeonButton:C,NeonDrawer:T,NeonCard:_,NeonCardBody:B,NeonStack:N,NeonInline:M,ComponentDocumentation:O,Editor:w},setup(){const e=d(null),n=d("Slide-out panel for content"),u=d(!1),h=l=>{u.value=l},f=d(!1),v=l=>{f.value=l},m=d(!1),s=l=>{m.value=l},i=d(!1),c=l=>{i.value=l},b=`<h6>Drawer content goes here</h6>
<p>
  Bacon ipsum dolor amet venison pig ball tip salami pork chop, drumstick tenderloin sirloin pork loin.
  Shoulder ham venison pork leberkas. Shankle pork loin pork belly turducken rump landjaeger pastrami
  tongue leberkas picanha t-bone alcatra fatback meatball. T-bone tenderloin landjaeger beef pork chop.
  Picanha ham hock t-bone, tenderloin flank frankfurter pig filet mignon bacon chuck.
</p>
<p>
  Ribeye chicken t-bone burgdoggen kevin shank shankle. Turkey venison pastrami short loin shankle sausage
  prosciutto. Hamburger pancetta ribeye, ham ground round capicola shank beef. Flank shoulder strip steak
  rump venison short loin corned beef. Ground round turkey bresaola meatball pork loin, buffalo chuck pork
  ribeye kielbasa.
</p>`,k=`<!-- Left -->
<neon-button label="Open left" @click="onOpenLeft(true)"></neon-button>
<neon-drawer :open="openLeft" position="left" @close="onOpenLeft(false)">
  <div v-html="contents"></div>
</neon-drawer>
<!-- Right -->
<neon-button label="Open right" @click="onOpenRight(true)"></neon-button>
<neon-drawer :open="openRight" position="right" @close="onOpenRight(false)">
  <div v-html="contents"></div>
</neon-drawer>
<!-- Top (overlay = false) -->
<neon-button label="Open top" @click="onOpenTop(true)"></neon-button>
<neon-drawer :open="openTop" position="top" @close="onOpenTop(false)" :overlay="false">
  <div v-html="contents"></div>
</neon-drawer>
<!-- Bottom -->
<neon-button label="Open bottom" @click="onOpenBottom(true)"></neon-button>
<neon-drawer :dismissible="false" :open="openBottom" position="bottom">
  <div v-html="contents"></div>
  <br />
  <neon-button style="align-self: flex-end" label="Close" @click="onOpenBottom(false)" />
</neon-drawer>`;return R(()=>e.value=y.getComponentConfig("NeonDrawer")),{menuModel:e,headline:n,openLeft:u,openRight:f,openTop:m,openBottom:i,contents:b,template:k,onOpenLeft:h,onOpenRight:v,onOpenTop:s,onOpenBottom:c}}}),E=p("p",null," A drawer is a slide out panel for representing data which may be secondary or not fit on the main screen. Examples are a responsive navigation menu, more details of a selected item on the page. Drawers can be opened from top, bottom, left or right and an overlay covers the screen to focus more attention on the drawer contents. ",-1),j=p("h2",{class:"neon-h3"},"Drawer examples",-1),A=["innerHTML"],F=["innerHTML"],G=["innerHTML"],I=["innerHTML"],P=p("br",null,null,-1);function U(e,n,u,h,f,v){const m=r("neon-card-body"),s=r("neon-button"),i=r("neon-drawer"),c=r("neon-inline"),b=r("editor"),k=r("neon-stack"),l=r("neon-card"),g=r("component-documentation");return e.menuModel?(V(),H(g,{key:0,headline:e.headline,model:e.menuModel},{default:t(()=>[o(l,null,{default:t(()=>[o(m,null,{default:t(()=>[E]),_:1}),o(m,null,{default:t(()=>[j,o(k,null,{default:t(()=>[o(c,{gap:"m"},{default:t(()=>[o(s,{label:"Open left",onClick:n[0]||(n[0]=a=>e.onOpenLeft(!0))}),o(i,{open:e.openLeft,position:"left",onClose:n[1]||(n[1]=a=>e.onOpenLeft(!1))},{default:t(()=>[p("div",{innerHTML:e.contents},null,8,A)]),_:1},8,["open"]),o(s,{label:"Open right",onClick:n[2]||(n[2]=a=>e.onOpenRight(!0))}),o(i,{open:e.openRight,position:"right",onClose:n[3]||(n[3]=a=>e.onOpenRight(!1))},{default:t(()=>[p("div",{innerHTML:e.contents},null,8,F)]),_:1},8,["open"]),o(s,{label:"Open top",onClick:n[4]||(n[4]=a=>e.onOpenTop(!0))}),o(i,{open:e.openTop,overlay:!1,position:"top",onClose:n[5]||(n[5]=a=>e.onOpenTop(!1))},{default:t(()=>[p("div",{innerHTML:e.contents},null,8,G)]),_:1},8,["open"]),o(s,{label:"Open bottom",onClick:n[6]||(n[6]=a=>e.onOpenBottom(!0))}),o(i,{dismissible:!1,open:e.openBottom,position:"bottom"},{default:t(()=>[p("div",{innerHTML:e.contents},null,8,I),P,o(s,{label:"Close",style:{"align-self":"flex-end"},onClick:n[7]||(n[7]=a=>e.onOpenBottom(!1))})]),_:1},8,["open"])]),_:1}),o(b,{modelValue:e.template,"onUpdate:modelValue":n[8]||(n[8]=a=>e.template=a)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["headline","model"])):D("",!0)}const ee=L(S,[["render",U]]);export{ee as default};
