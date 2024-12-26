import{N as z,a as V,b as S}from"./NeonCardHeader-5e3d5e8c.js";import{N}from"./NeonInline-e4d49a2a.js";import{u as g,R as l,S as v,U as P,x as w,y as $,H as f,I as y,P as E,D as p,F as R,G as a,A,L as n}from"./vendor-7a8d752b.js";import{_,M as L}from"../index.js";import{N as U}from"./NeonToggleChip-68987e50.js";import{C as j}from"./ComponentDocumentation-6caf88ca.js";import{E as B}from"./Editor-1d4a4353.js";import"./NeonLabel-387f69e3.js";import"./NeonNote-2bf2c89c.js";import"./NeonStack-fb7ab566.js";import"./NeonTabs-5786a26a.js";const M=g({name:"NeonSwiper",props:{fade:{type:Boolean,default:!0}},setup(){const e=l(null),o=l(!1),i=l(!1),r=l(!1),d=()=>{e.value?(i.value=e.value.scrollLeft<=0,r.value=e.value.scrollLeft+e.value.clientWidth>e.value.scrollWidth-1):(i.value=!1,r.value=!1)},c=()=>{e.value?o.value=e.value.scrollWidth>e.value.clientWidth:o.value=!1,d()};return v(()=>{var t;window.addEventListener("resize",c,{passive:!0}),(t=e.value)==null||t.addEventListener("scroll",d,{passive:!0}),c()}),P(()=>{var t;window.removeEventListener("resize",c),(t=e.value)==null||t.removeEventListener("scroll",d)}),{isOverflowing:o,isScrollStart:i,isScrollEnd:r,scrollable:e}}}),W={ref:"scrollable",class:"neon-swiper__container"},H=f("div",{class:"neon-swiper__fade-out"},null,-1);function D(e,o,i,r,d,c){return w(),$("div",{class:E([{"neon-swiper--fade":e.fade,"neon-swiper--overflowing":e.isOverflowing,"neon-swiper--start":e.isScrollStart,"neon-swiper--end":e.isScrollEnd},"neon-swiper"])},[f("div",W,[y(e.$slots,"default")],512),H],2)}const I=_(M,[["render",D]]),O=g({name:"Swiper",components:{NeonCard:z,NeonCardBody:V,NeonCardHeader:S,NeonInline:N,NeonSwiper:I,NeonToggleChip:U,ComponentDocumentation:j,Editor:B},setup(){const e=l(null),o=l("Handle horizontally overflowing content"),i=l(!1),r=l(!1),d=l(!1),c=l(!1),t=l(!1),m=`<neon-inline gap="s" breakpoint="">
  <span>Status:</span>
  <neon-swiper>
    <neon-inline gap="s" breakpoint="">
      <neon-toggle-chip v-model="filterAccepted"
                        color="high-contrast"
                        label="Accepted"
                        size="s"
                        :show-check="false"
      />
      <neon-toggle-chip v-model="filterPending"
                        color="high-contrast"
                        label="Pending"
                        size="s"
                        :show-check="false"
      />
      <neon-toggle-chip v-model="filterRejected"
                        color="high-contrast"
                        label="Rejected"
                        size="s"
                        :show-check="false"
      />
      <neon-toggle-chip v-model="filterPaid"
                        color="high-contrast"
                        label="Paid"
                        size="s"
                        :show-check="false"
      />
      <neon-toggle-chip v-model="filterCancelled"
                        color="high-contrast"
                        label="Cancelled"
                        size="s"
                        :show-check="false"
      />
    </neon-inline>
  </neon-swiper>
</neon-inline>`;return v(()=>e.value=L.getComponentConfig("NeonSwiper")),{menuModel:e,headline:o,template:m,filterAccepted:i,filterPending:r,filterRejected:d,filterPaid:c,filterCancelled:t}}}),F=f("p",null," Automatically handle horizontally overflowing content by placing it in a NeonSwiper component allowing for smooth horizontal scrolling with all input devices. Resize your screen to test it out. ",-1),G=f("h2",{class:"neon-h3"},"Example",-1),T=f("span",null,"Status:",-1);function q(e,o,i,r,d,c){const t=p("neon-card-body"),m=p("neon-card-header"),u=p("neon-toggle-chip"),h=p("neon-inline"),b=p("neon-swiper"),C=p("neon-card"),k=p("component-documentation");return e.menuModel?(w(),R(k,{key:0,headline:e.headline,model:e.menuModel},{default:a(()=>[n(C,null,{default:a(()=>[n(t,null,{default:a(()=>[F]),_:1}),n(m,null,{default:a(()=>[G]),_:1}),n(t,null,{default:a(()=>[n(h,{breakpoint:"",gap:"s"},{default:a(()=>[T,n(b,null,{default:a(()=>[n(h,{breakpoint:"",gap:"s"},{default:a(()=>[n(u,{modelValue:e.filterAccepted,"onUpdate:modelValue":o[0]||(o[0]=s=>e.filterAccepted=s),"show-check":!1,color:"high-contrast",label:"Accepted",size:"s"},null,8,["modelValue"]),n(u,{modelValue:e.filterPending,"onUpdate:modelValue":o[1]||(o[1]=s=>e.filterPending=s),"show-check":!1,color:"high-contrast",label:"Pending",size:"s"},null,8,["modelValue"]),n(u,{modelValue:e.filterRejected,"onUpdate:modelValue":o[2]||(o[2]=s=>e.filterRejected=s),"show-check":!1,color:"high-contrast",label:"Rejected",size:"s"},null,8,["modelValue"]),n(u,{modelValue:e.filterPaid,"onUpdate:modelValue":o[3]||(o[3]=s=>e.filterPaid=s),"show-check":!1,color:"high-contrast",label:"Paid",size:"s"},null,8,["modelValue"]),n(u,{modelValue:e.filterCancelled,"onUpdate:modelValue":o[4]||(o[4]=s=>e.filterCancelled=s),"show-check":!1,color:"high-contrast",label:"Cancelled",size:"s"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["headline","model"])):A("",!0)}const te=_(O,[["render",q]]);export{te as default};
