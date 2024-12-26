import{N as I,a as U,b as E}from"./NeonCardHeader-5e3d5e8c.js";import{N}from"./NeonFilterList-55aeea45.js";import{N as C}from"./NeonStack-fb7ab566.js";import{M as F,_ as z}from"../index.js";import{C as B}from"./ComponentDocumentation-6caf88ca.js";import{E as S}from"./Editor-1d4a4353.js";import{u as _,R as s,S as $,D as p,F as w,G as i,A as D,x as H,L as t,H as n,a2 as A}from"./vendor-7a8d752b.js";import"./NeonLabel-387f69e3.js";import"./NeonNote-2bf2c89c.js";import"./NeonInline-e4d49a2a.js";import"./NeonTabs-5786a26a.js";const T=_({name:"FilterList",components:{NeonCard:I,NeonCardBody:U,NeonCardHeader:E,NeonFilterList:N,NeonStack:C,ComponentDocumentation:B,Editor:S},setup(){const e=s(null),l=s("A list of items to filter by"),m=s([{key:"key1",label:"Item 1",count:5837},{key:"key2",label:"Item 2",count:433},{key:"key3",label:"Item 3",count:327},{key:"key4",label:"Disabled item",count:100,disabled:!0}]),M=s([{key:"key1",label:"Item 1",count:5837},{key:"key2",label:"Item 2",count:433},{key:"key3",label:"Item 3",count:327},{key:"key4",label:"Item 4",count:100},{key:"key5",label:"Item 5",count:5837},{key:"key6",label:"Item 6",count:433},{key:"key7",label:"Item 7",count:327},{key:"key8",label:"Item 8",count:100}]),V=s([m.value[0].key]),k=s([m.value[0].key]),u=s([m.value[0].key]),d=s([m.value[0].key]),a=s([m.value[0].key]),r=s([m.value[0].key]),y=s([m.value[0].key]),f=s([m.value[0].key]),o=s([m.value[0].key]),c=s([m.value[0].key]),h=s([m.value[0].key]),b=`<neon-filter-list v-model="smallModel"
                  :items="items"
                  size="s"
/>
<neon-filter-list v-model="mediumModel"
                  :items="items"
/>
<neon-filter-list v-model="largeModel"
                  :items="items"
                  size="l"
/>`,v=`<neon-filter-list v-model="hcModel"
                  :items="items"
                  color="high-contrast"
/>
<neon-filter-list v-model="brandModel"
                  :items="items"
                  color="brand"
/>
<neon-filter-list v-model="primaryModel"
                  :items="items"
                  color="primary"
/>`,g=`<neon-filter-list v-model="singleModel"
                  :items="items"
                  :multiple="false"
/>
<neon-filter-list v-model="multipleModel"
                  :items="items"
/>`,L=`<neon-filter-list v-model="unlimitedModel"
                  :display-count="0"
                  :items="longItemList"
/>
<neon-filter-list v-model="customLimitModel"
                  :display-count="5"
                  :items="longItemList"
                  color="brand"
/>`;return $(()=>e.value=F.getComponentConfig("NeonFilterList")),{menuModel:e,headline:l,items:m,longItemList:M,sizeExamples:b,colorExamples:v,typeExamples:g,limitExamples:L,smallModel:V,mediumModel:k,largeModel:u,hcModel:d,brandModel:a,primaryModel:r,singleModel:y,multipleModel:f,defaultLimitModel:o,customLimitModel:c,unlimitedModel:h}}}),G=n("p",null,[n("strong",null,"NeonFilterList"),A(" is an alternative component to a select where the values are displayed in a visible list to the user. This component is particularly useful for presenting filters to the user and also provides the option of displaying the item counts with each list item. ")],-1),P=n("h2",{class:"neon-h3"},"Filter list sizes",-1),R=n("h4",null,"Small",-1),j=n("h4",null,"Medium",-1),q=n("h4",null,"Large",-1),J=n("h2",{class:"neon-h3"},"Filter list colors",-1),K=n("h4",null,"High contrast",-1),O=n("h4",null,"Brand",-1),Q=n("h4",null,"Primary",-1),W=n("h2",{class:"neon-h3"},"Filter list selection type",-1),X=n("h4",null,"Single select",-1),Y=n("h4",null,"Multi select",-1),Z=n("h2",{class:"neon-h3"},"Limit items displayed",-1),x=n("h4",null,"Unlimited (default)",-1),ee=n("h4",null,"Limited",-1);function le(e,l,m,M,V,k){const u=p("neon-card-body"),d=p("neon-filter-list"),a=p("neon-stack"),r=p("editor"),y=p("neon-card"),f=p("component-documentation");return e.menuModel?(H(),w(f,{key:0,headline:e.headline,model:e.menuModel},{default:i(()=>[t(y,null,{default:i(()=>[t(u,null,{default:i(()=>[G]),_:1}),t(u,null,{default:i(()=>[P,t(a,null,{default:i(()=>[t(a,null,{default:i(()=>[R,t(d,{modelValue:e.smallModel,"onUpdate:modelValue":l[0]||(l[0]=o=>e.smallModel=o),items:e.items,size:"s"},null,8,["modelValue","items"]),j,t(d,{modelValue:e.mediumModel,"onUpdate:modelValue":l[1]||(l[1]=o=>e.mediumModel=o),items:e.items},null,8,["modelValue","items"]),q,t(d,{modelValue:e.largeModel,"onUpdate:modelValue":l[2]||(l[2]=o=>e.largeModel=o),items:e.items,size:"l"},null,8,["modelValue","items"])]),_:1}),t(r,{modelValue:e.sizeExamples,"onUpdate:modelValue":l[3]||(l[3]=o=>e.sizeExamples=o)},null,8,["modelValue"])]),_:1})]),_:1}),t(u,null,{default:i(()=>[J,t(a,null,{default:i(()=>[t(a,null,{default:i(()=>[K,t(d,{modelValue:e.hcModel,"onUpdate:modelValue":l[4]||(l[4]=o=>e.hcModel=o),items:e.items,color:"high-contrast"},null,8,["modelValue","items"]),O,t(d,{modelValue:e.brandModel,"onUpdate:modelValue":l[5]||(l[5]=o=>e.brandModel=o),items:e.items,color:"brand"},null,8,["modelValue","items"]),Q,t(d,{modelValue:e.primaryModel,"onUpdate:modelValue":l[6]||(l[6]=o=>e.primaryModel=o),items:e.items,color:"primary"},null,8,["modelValue","items"])]),_:1}),t(r,{modelValue:e.colorExamples,"onUpdate:modelValue":l[7]||(l[7]=o=>e.colorExamples=o)},null,8,["modelValue"])]),_:1})]),_:1}),t(u,null,{default:i(()=>[W,t(a,null,{default:i(()=>[t(a,null,{default:i(()=>[X,t(d,{modelValue:e.singleModel,"onUpdate:modelValue":l[8]||(l[8]=o=>e.singleModel=o),items:e.items,multiple:!1},null,8,["modelValue","items"]),Y,t(d,{modelValue:e.multipleModel,"onUpdate:modelValue":l[9]||(l[9]=o=>e.multipleModel=o),items:e.items},null,8,["modelValue","items"])]),_:1}),t(r,{modelValue:e.typeExamples,"onUpdate:modelValue":l[10]||(l[10]=o=>e.typeExamples=o)},null,8,["modelValue"])]),_:1})]),_:1}),t(u,null,{default:i(()=>[Z,t(a,null,{default:i(()=>[t(a,null,{default:i(()=>[x,t(d,{modelValue:e.unlimitedModel,"onUpdate:modelValue":l[11]||(l[11]=o=>e.unlimitedModel=o),"display-count":0,items:e.longItemList},null,8,["modelValue","items"]),ee,t(d,{modelValue:e.customLimitModel,"onUpdate:modelValue":l[12]||(l[12]=o=>e.customLimitModel=o),"display-count":5,items:e.longItemList,color:"brand"},null,8,["modelValue","items"])]),_:1}),t(r,{modelValue:e.limitExamples,"onUpdate:modelValue":l[13]||(l[13]=o=>e.limitExamples=o)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["headline","model"])):D("",!0)}const ye=z(T,[["render",le]]);export{ye as default};
