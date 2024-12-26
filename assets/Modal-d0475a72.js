import{N as M,M as y,_ as v}from"../index.js";import{N as O,a as $,b as B}from"./NeonCardHeader-5e3d5e8c.js";import{N as S}from"./NeonCardFooter-0c3e05d5.js";import{N as V}from"./NeonInline-e4d49a2a.js";import{N as j}from"./NeonModal-a695c2d2.js";import{N as w}from"./NeonStack-fb7ab566.js";import{C as A}from"./ComponentDocumentation-6caf88ca.js";import{E as D}from"./Editor-1d4a4353.js";import{u as T,R as p,S as z,D as a,F as E,G as t,A as F,x as H,L as e,H as r}from"./vendor-7a8d752b.js";import"./NeonLabel-387f69e3.js";import"./NeonNote-2bf2c89c.js";import"./NeonTabs-5786a26a.js";const P=T({name:"Modal",components:{NeonButton:M,NeonModal:j,NeonCard:O,NeonCardBody:$,NeonCardFooter:S,NeonCardHeader:B,NeonStack:w,NeonInline:V,ComponentDocumentation:A,Editor:D},setup(){const o=p(null),n=p("Display modal content over the page"),d=p(!1),c=u=>{d.value=u},m=`<neon-button label="Open modal" @click="toggleOpen(true)"></neon-button>
  <neon-modal :open="open" @close="toggleOpen(false)">
    <neon-card size="m">
      <neon-card-header>
        <h3>Modal title</h3>
      </neon-card-header>
      <neon-card-body>
        <h6>Modal content goes here</h6>
        <p>
          Bacon ipsum dolor amet venison pig ball tip salami pork chop, drumstick tenderloin sirloin pork loin.
          Shoulder ham venison pork leberkas. Shankle pork loin pork belly turducken rump landjaeger pastrami
          tongue leberkas picanha t-bone alcatra fatback meatball. T-bone tenderloin landjaeger beef pork chop.
          Picanha ham hock t-bone, tenderloin flank frankfurter pig filet mignon bacon chuck.
        </p>
      </neon-card-body>
      <neon-card-footer>
        <neon-button label="Cancel" button-style="text" @click="toggleOpen(false)" />
        <neon-button label="Accept" color="primary" @click="toggleOpen(false)" />
      </neon-card-footer>
    </neon-card>
  </neon-modal>`;return z(()=>o.value=y.getComponentConfig("NeonModal")),{menuModel:o,headline:n,open:d,template:m,toggleOpen:c}}}),q=r("p",null," A modal dialog component. This will be rendered above the content of the main window and can either be dismissed by the user or configured to require user interaction before dismissal. ",-1),G=r("h2",{class:"neon-h3"},"Modal example",-1),I=r("h3",null,"Modal title",-1),L=r("h6",null,"Modal content goes here",-1),R=r("p",null," Bacon ipsum dolor amet venison pig ball tip salami pork chop, drumstick tenderloin sirloin pork loin. Shoulder ham venison pork leberkas. Shankle pork loin pork belly turducken rump landjaeger pastrami tongue leberkas picanha t-bone alcatra fatback meatball. T-bone tenderloin landjaeger beef pork chop. Picanha ham hock t-bone, tenderloin flank frankfurter pig filet mignon bacon chuck. ",-1);function U(o,n,d,c,m,u){const s=a("neon-card-body"),i=a("neon-button"),b=a("neon-card-header"),k=a("neon-card-footer"),f=a("neon-card"),_=a("neon-modal"),h=a("neon-inline"),g=a("editor"),C=a("neon-stack"),N=a("component-documentation");return o.menuModel?(H(),E(N,{key:0,headline:o.headline,model:o.menuModel},{default:t(()=>[e(f,null,{default:t(()=>[e(s,null,{default:t(()=>[q]),_:1}),e(s,null,{default:t(()=>[G,e(C,null,{default:t(()=>[e(h,null,{default:t(()=>[e(i,{label:"Open modal",onClick:n[0]||(n[0]=l=>o.toggleOpen(!0))}),e(_,{open:o.open,onClose:n[3]||(n[3]=l=>o.toggleOpen(!1))},{default:t(()=>[e(f,{size:"m"},{default:t(()=>[e(b,null,{default:t(()=>[I]),_:1}),e(s,null,{default:t(()=>[L,R]),_:1}),e(k,null,{default:t(()=>[e(i,{"button-style":"text",label:"Cancel",onClick:n[1]||(n[1]=l=>o.toggleOpen(!1))}),e(i,{color:"primary",label:"Accept",onClick:n[2]||(n[2]=l=>o.toggleOpen(!1))})]),_:1})]),_:1})]),_:1},8,["open"])]),_:1}),e(g,{modelValue:o.template,"onUpdate:modelValue":n[4]||(n[4]=l=>o.template=l)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["headline","model"])):F("",!0)}const ae=v(P,[["render",U]]);export{ae as default};
