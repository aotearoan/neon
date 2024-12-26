import{N as f,M as b,_ as v}from"../index.js";import{N as T,a as y}from"./NeonCardHeader-5e3d5e8c.js";import{N}from"./NeonStack-fb7ab566.js";import{N as j}from"./NeonTooltip-33b31c3f.js";import{C}from"./ComponentDocumentation-6caf88ca.js";import{E as H}from"./Editor-1d4a4353.js";import{u as V,R as _,S as w,D as a,F as M,G as o,A as S,x as B,L as n,H as t,a2 as e}from"./vendor-7a8d752b.js";import"./NeonPlacementUtils-e254198c.js";import"./NeonLabel-387f69e3.js";import"./NeonNote-2bf2c89c.js";import"./NeonInline-e4d49a2a.js";import"./NeonTabs-5786a26a.js";const P=V({name:"Tooltip",components:{NeonTooltip:j,NeonButton:f,NeonCard:T,NeonCardBody:y,NeonStack:N,ComponentDocumentation:C,Editor:H},setup(){const l=_(null),s=_("Contextual information popups"),c=`<div>
  <p>Hover over
  <neon-tooltip>
    <template #target>
      <strong>me</strong>
    </template>
    <template #content>
      <span>Tooltip content</span>
    </template>
  </neon-tooltip> to see the tooltip style.</p>
  <p>Hover over
  <neon-tooltip tooltip-style="popover">
    <template #target>
      <strong>me</strong>
    </template>
    <template #content>
      <span class="neon-h6" role="heading" aria-level="6">Popover content</span>
      <p>Spicy jalapeno bacon ipsum dolor amet biltong porchetta cupim sausage pork loin. Ham porchetta brisket,
      kielbasa ham hock sirloin ground round strip steak jowl jerky short ribs pork loin frankfurter.</p>
    </template>
  </neon-tooltip> to see the popover style.</p>
  <br />
  <neon-tooltip tooltip-style="popover" outline-style="border" outline-color="low-contrast">
    <template #target>
      <neon-button size="s" label="Hover me" />
    </template>
    <template #content>
      <span class="neon-h6" role="heading" aria-level="6">Popover content</span>
      <p>Spicy jalapeno bacon ipsum dolor amet biltong porchetta cupim sausage pork loin. Ham porchetta brisket,
      kielbasa ham hock sirloin ground round strip steak jowl jerky short ribs pork loin frankfurter.</p>
    </template>
  </neon-tooltip>
</div>`,u=`<div>
  <!-- top -->
  <p>Tooltip placement
  <neon-tooltip>
    <template #target>
      <strong>top</strong>
    </template>
    <template #content>
      <span>Tooltip content</span>
    </template>
  </neon-tooltip>.</p>
  <!-- left -->
  <p>Tooltip placement
  <neon-tooltip placement="left">
    <template #target>
      <strong>left</strong>
    </template>
    <template #content>
      <span>Tooltip content</span>
    </template>
  </neon-tooltip>.</p>
  <!-- bottom -->
  <p>Tooltip placement
  <neon-tooltip placement="bottom">
    <template #target>
      <strong>bottom</strong>
    </template>
    <template #content>
      <span>Tooltip content</span>
    </template>
  </neon-tooltip>.</p>
  <!-- right -->
  <p>Tooltip placement
  <neon-tooltip placement="right">
    <template #target>
      <strong>right</strong>
    </template>
    <template #content>
      <span>Tooltip content</span>
    </template>
  </neon-tooltip>.</p>
</div>`;return w(()=>l.value=b.getComponentConfig("NeonTooltip")),{menuModel:l,headline:s,styleTemplate:c,placementTemplate:u}}}),U=t("p",null,[e(" Use "),t("strong",null,"NeonTooltip"),e(" to display tooltips or popovers. It is recommended that tooltip content should be kept to a single line. Use the popover style for larger content. ")],-1),$=t("p",null,[e("To use "),t("strong",null,"NeonTooltip"),e(" provide the "),t("em",null,"target"),e(" and "),t("em",null,"content"),e(" slots.")],-1),z=t("h2",{class:"neon-h3"},"Tooltip styles",-1),D=t("strong",null,"me",-1),E=t("span",null,"Tooltip content",-1),A=t("strong",null,"me",-1),F=t("span",{class:"neon-h6",role:"heading","aria-level":"6"},"Popover content",-1),G=t("p",null," Spicy jalapeno bacon ipsum dolor amet biltong porchetta cupim sausage pork loin. Ham porchetta brisket, kielbasa ham hock sirloin ground round strip steak jowl jerky short ribs pork loin frankfurter. ",-1),I=t("br",null,null,-1),L=t("span",{class:"neon-h6",role:"heading","aria-level":"6"},"Popover content",-1),R=t("p",null," Spicy jalapeno bacon ipsum dolor amet biltong porchetta cupim sausage pork loin. Ham porchetta brisket, kielbasa ham hock sirloin ground round strip steak jowl jerky short ribs pork loin frankfurter. ",-1),q=t("h2",{class:"neon-h3"},"Tooltip placement",-1),x=t("strong",null,"top",-1),J=t("span",null,"Tooltip content",-1),K=t("strong",null,"left",-1),O=t("span",null,"Tooltip content",-1),Q=t("strong",null,"bottom",-1),W=t("span",null,"Tooltip content",-1),X=t("strong",null,"right",-1),Y=t("span",null,"Tooltip content",-1);function Z(l,s,c,u,tt,ot){const r=a("neon-stack"),i=a("neon-card-body"),p=a("neon-tooltip"),h=a("neon-button"),d=a("editor"),g=a("neon-card"),k=a("component-documentation");return l.menuModel?(B(),M(k,{key:0,model:l.menuModel,headline:l.headline},{default:o(()=>[n(g,null,{default:o(()=>[n(i,null,{default:o(()=>[n(r,null,{default:o(()=>[U,$]),_:1})]),_:1}),n(i,null,{default:o(()=>[z,n(r,null,{default:o(()=>[t("div",null,[t("p",null,[e(" Hover over "),n(p,null,{target:o(()=>[D]),content:o(()=>[E]),_:1}),e(" to see the tooltip style. ")]),t("p",null,[e(" Hover over "),n(p,{"tooltip-style":"popover"},{target:o(()=>[A]),content:o(()=>[F,G]),_:1}),e(" to see the popover style. ")]),I,n(p,{"tooltip-style":"popover","outline-style":"border","outline-color":"low-contrast"},{target:o(()=>[n(h,{size:"s",label:"Hover me"})]),content:o(()=>[L,R]),_:1})]),n(d,{modelValue:l.styleTemplate,"onUpdate:modelValue":s[0]||(s[0]=m=>l.styleTemplate=m)},null,8,["modelValue"])]),_:1})]),_:1}),n(i,null,{default:o(()=>[q,n(r,null,{default:o(()=>[t("div",null,[t("p",null,[e(" Tooltip placement "),n(p,null,{target:o(()=>[x]),content:o(()=>[J]),_:1}),e(". ")]),t("p",null,[e(" Tooltip placement "),n(p,{placement:"left"},{target:o(()=>[K]),content:o(()=>[O]),_:1}),e(". ")]),t("p",null,[e(" Tooltip placement "),n(p,{placement:"bottom"},{target:o(()=>[Q]),content:o(()=>[W]),_:1}),e(". ")]),t("p",null,[e(" Tooltip placement "),n(p,{placement:"right"},{target:o(()=>[X]),content:o(()=>[Y]),_:1}),e(". ")])]),n(d,{modelValue:l.placementTemplate,"onUpdate:modelValue":s[1]||(s[1]=m=>l.placementTemplate=m)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","headline"])):S("",!0)}const _t=v(P,[["render",Z]]);export{_t as default};
