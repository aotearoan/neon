import{N as M,a as _,b as w}from"./NeonCardHeader-5e3d5e8c.js";import{N as R}from"./NeonRangeSlider-64e4f827.js";import{N as F}from"./NeonStack-fb7ab566.js";import{M as k,_ as B}from"../index.js";import{C as $}from"./ComponentDocumentation-6caf88ca.js";import{E as D}from"./Editor-1d4a4353.js";import{u as T,R as i,S as h,D as u,F as H,G as d,A as I,x as L,L as l,H as a,a2 as p}from"./vendor-7a8d752b.js";import"./NeonNumberUtils-581ff329.js";import"./NeonSlider-33c7a34b.js";import"./NeonLabel-387f69e3.js";import"./NeonNote-2bf2c89c.js";import"./NeonInline-e4d49a2a.js";import"./NeonTabs-5786a26a.js";const W=T({name:"RangeSlider",components:{ComponentDocumentation:$,Editor:D,NeonCard:M,NeonCardBody:_,NeonCardHeader:w,NeonRangeSlider:R,NeonStack:F},setup(){const e=i(null),o=i("Select a range of discrete values"),V=i([20,80]),f=i([-50,50]),b=i([20,80]),v=i([20,80]),s=i([20,80]),t=i([.25,.75]),r=i([21.5,82.5]),m=i([2015,2020]),g=i([75.25,125.75]),S=i([20,80]),n=i([20,80]),c=i([20,80]),y=i([20,80]),U=`<neon-range-slider id="basicSliderId" v-model="basicSlider" />
<neon-range-slider :max="100" :min="-100" v-model="minMaxSlider" :step="10" />
<neon-range-slider :disabled="true" v-model="disabledSlider" />`,N=`<neon-range-slider v-model="percentageSlider" :percentage="true" />
<neon-range-slider v-model="decimalSlider" :decimals="2" />
<neon-range-slider v-model="noFormattingSlider" :disable-formatting="true" :max="2050" :min="2000" />
<neon-range-slider v-model="templateSlider"
                   :decimals="2"
                   :max="200.0"
                   :step="0.5"
                   value-template="\${value}"
/>`,E=`<neon-range-slider v-model="primarySlider" color="primary" />
<neon-range-slider v-model="brandSlider" color="brand" />
<neon-range-slider v-model="warnSlider" color="warn" />`,C=`<neon-range-slider v-model="outputSlider" :output="false" />
<neon-range-slider v-model="legendSlider" :legend="false" />
<neon-range-slider v-model="tooltipSlider" :tooltip="false" />`;return h(()=>e.value=k.getComponentConfig("NeonRangeSlider")),{menuModel:e,headline:o,basicSlider:V,minMaxSlider:f,outputSlider:b,legendSlider:v,tooltipSlider:s,percentageSlider:t,decimalSlider:r,noFormattingSlider:m,templateSlider:g,disabledSlider:S,primarySlider:n,brandSlider:c,warnSlider:y,coreExamples:U,formattingExamples:N,colorExamples:E,displayExamples:C}}}),A=a("p",null,[p(" The "),a("strong",null,"NeonRangeSlider"),p(" is an input control for allowing users to select a discrete range of values. "),a("strong",null,"NeonRangeSlider"),p(" supports the same color, formatting and display options available on "),a("strong",null,"NeonSlider"),p(". ")],-1),G=a("h2",{class:"neon-h3"},"Basic usage",-1),O=a("label",null,"Basic range slider",-1),P=a("label",null,"With Min, max and step",-1),j=a("label",null,"Disabled",-1),q=a("h2",{class:"neon-h3"},"Formatting options",-1),z=a("label",null,"Percentage",-1),J=a("label",null,"Decimal values",-1),K=a("label",null,"Formatting disabled (e.g. year)",-1),Q=a("label",null,"With template (e.g. currency)",-1),X=a("h2",{class:"neon-h3"},"Range slider colors",-1),Y=a("h2",{class:"neon-h3"},"Display options",-1),Z=a("label",null,"Output hidden",-1),x=a("label",null,"Legend hidden",-1),ee=a("label",null,"Tooltip hidden",-1);function le(e,o,V,f,b,v){const s=u("neon-card-body"),t=u("neon-range-slider"),r=u("neon-stack"),m=u("editor"),g=u("neon-card"),S=u("component-documentation");return e.menuModel?(L(),H(S,{key:0,headline:e.headline,model:e.menuModel,class:"slider-examples"},{default:d(()=>[l(g,null,{default:d(()=>[l(s,null,{default:d(()=>[A]),_:1}),l(s,null,{default:d(()=>[G,l(r,null,{default:d(()=>[l(r,{gap:"s"},{default:d(()=>[O,l(t,{id:"basicSliderId",modelValue:e.basicSlider,"onUpdate:modelValue":o[0]||(o[0]=n=>e.basicSlider=n)},null,8,["modelValue"])]),_:1}),l(r,{gap:"s"},{default:d(()=>[P,l(t,{modelValue:e.minMaxSlider,"onUpdate:modelValue":o[1]||(o[1]=n=>e.minMaxSlider=n),max:100,min:-100,step:10},null,8,["modelValue"])]),_:1}),l(r,{gap:"s"},{default:d(()=>[j,l(t,{modelValue:e.disabledSlider,"onUpdate:modelValue":o[2]||(o[2]=n=>e.disabledSlider=n),disabled:!0},null,8,["modelValue"])]),_:1}),l(m,{modelValue:e.coreExamples,"onUpdate:modelValue":o[3]||(o[3]=n=>e.coreExamples=n)},null,8,["modelValue"])]),_:1})]),_:1}),l(s,null,{default:d(()=>[q,l(r,null,{default:d(()=>[l(r,{gap:"s"},{default:d(()=>[z,l(t,{modelValue:e.percentageSlider,"onUpdate:modelValue":o[4]||(o[4]=n=>e.percentageSlider=n),percentage:!0},null,8,["modelValue"])]),_:1}),l(r,{gap:"s"},{default:d(()=>[J,l(t,{modelValue:e.decimalSlider,"onUpdate:modelValue":o[5]||(o[5]=n=>e.decimalSlider=n),decimals:2},null,8,["modelValue"])]),_:1}),l(r,{gap:"s"},{default:d(()=>[K,l(t,{modelValue:e.noFormattingSlider,"onUpdate:modelValue":o[6]||(o[6]=n=>e.noFormattingSlider=n),"disable-formatting":!0,max:2050,min:2e3},null,8,["modelValue"])]),_:1}),l(r,{gap:"s"},{default:d(()=>[Q,l(t,{modelValue:e.templateSlider,"onUpdate:modelValue":o[7]||(o[7]=n=>e.templateSlider=n),decimals:2,max:200,step:.5,"value-template":"${value}"},null,8,["modelValue"])]),_:1}),l(m,{modelValue:e.formattingExamples,"onUpdate:modelValue":o[8]||(o[8]=n=>e.formattingExamples=n)},null,8,["modelValue"])]),_:1})]),_:1}),l(s,null,{default:d(()=>[X,l(r,null,{default:d(()=>[l(r,null,{default:d(()=>[l(t,{modelValue:e.primarySlider,"onUpdate:modelValue":o[9]||(o[9]=n=>e.primarySlider=n),color:"primary"},null,8,["modelValue"]),l(t,{modelValue:e.brandSlider,"onUpdate:modelValue":o[10]||(o[10]=n=>e.brandSlider=n),color:"brand"},null,8,["modelValue"]),l(t,{modelValue:e.warnSlider,"onUpdate:modelValue":o[11]||(o[11]=n=>e.warnSlider=n),color:"warn"},null,8,["modelValue"])]),_:1}),l(m,{modelValue:e.colorExamples,"onUpdate:modelValue":o[12]||(o[12]=n=>e.colorExamples=n)},null,8,["modelValue"])]),_:1})]),_:1}),l(s,null,{default:d(()=>[Y,l(r,null,{default:d(()=>[l(r,{gap:"s"},{default:d(()=>[Z,l(t,{modelValue:e.outputSlider,"onUpdate:modelValue":o[13]||(o[13]=n=>e.outputSlider=n),output:!1},null,8,["modelValue"])]),_:1}),l(r,{gap:"s"},{default:d(()=>[x,l(t,{modelValue:e.legendSlider,"onUpdate:modelValue":o[14]||(o[14]=n=>e.legendSlider=n),legend:!1},null,8,["modelValue"])]),_:1}),l(r,{gap:"s"},{default:d(()=>[ee,l(t,{modelValue:e.tooltipSlider,"onUpdate:modelValue":o[15]||(o[15]=n=>e.tooltipSlider=n),tooltip:!1},null,8,["modelValue"])]),_:1}),l(m,{modelValue:e.displayExamples,"onUpdate:modelValue":o[16]||(o[16]=n=>e.displayExamples=n)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["headline","model"])):I("",!0)}const Ve=B(W,[["render",le]]);export{Ve as default};
