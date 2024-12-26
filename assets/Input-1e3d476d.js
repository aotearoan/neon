import{N as I,a as c,b as D}from"./NeonCardHeader-5e3d5e8c.js";import{d as S,M as k,_ as B}from"../index.js";import{N as $}from"./NeonStack-fb7ab566.js";import{C as H}from"./ComponentDocumentation-6caf88ca.js";import{E as L}from"./Editor-1d4a4353.js";import{u as F,R as a,S as G,D as i,F as R,G as d,A as j,x as q,L as t,H as p,a2 as s}from"./vendor-7a8d752b.js";import"./NeonLabel-387f69e3.js";import"./NeonNote-2bf2c89c.js";import"./NeonInline-e4d49a2a.js";import"./NeonTabs-5786a26a.js";const J=F({name:"Input",components:{ComponentDocumentation:H,Editor:L,NeonCard:I,NeonCardBody:c,NeonCardHeader:D,NeonInput:S,NeonStack:$},setup(){const e=a(null),l=a("HTML input and textarea component"),h=a(""),f=a(""),T=a(""),g=a(""),r=a(""),n=a(""),u=a(""),m=a(""),y=a(""),V=a(""),o=a(""),x=a(""),b=a(""),E=a(""),C=a(""),U=a(""),v=a(""),z=`<neon-input v-model="small"
                      placeholder="Type here"
                      size="s"
                      type="text"
          />
          <neon-input v-model="medium"
                      placeholder="Type here"
                      size="m"
                      type="text"
          />
          <neon-input v-model="large"
                      placeholder="Type here"
                      size="l"
                      type="text"
          />`,N=`<neon-input v-model="inputmodeText" placeholder="Default mode" />
<neon-input v-model="inputmodeEmail" placeholder="Email mode" inputmode="email" type="email" />`,w=`<neon-input v-model="ready"
            placeholder="Type here"
            size="l" state="ready"
            type="text"
/>
<neon-input v-model="loading"
            placeholder="Type here"
            size="l"
            state="loading"
            type="text"
/>
<neon-input v-model="success"
            placeholder="Type here"
            size="l"
            state="success"
            type="text"
/>
<neon-input v-model="error"
            placeholder="Type here"
            size="l"
            state="error"
            type="text"
/>`,M=`<neon-input v-model="lowContrast"
            color="low-contrast"
            placeholder="Type here"
            type="text"
/>
<neon-input v-model="highContrast"
            color="high-contrast"
            placeholder="Type here"
            type="text"
/>
<neon-input v-model="brand"
            color="brand"
            placeholder="Type here"
            type="text"
/>
<neon-input v-model="primary"
            color="primary"
            placeholder="Type here"
            type="text"
/>
<neon-input v-model="info"
            color="info"
            placeholder="Type here"
            type="text"
/>
<neon-input v-model="disabled"
            isabled="disabled"
            placeholder="Type here"
            type="text"
/>`,A=`<neon-input v-model="textArea"
            :maxlength="100"
            :rows="5"
            placeholder="Type here"
            type="text"
/>
<neon-input v-model="textAreaDisabled"
            :maxlength="100"
            :rows="5"
            disabled="disabled"
            placeholder="Type here"
            type="text"
/>`;return G(()=>e.value=k.getComponentConfig("NeonInput")),{menuModel:e,headline:l,small:h,medium:f,large:T,ready:g,loading:r,success:n,error:u,lowContrast:m,highContrast:y,brand:V,primary:o,info:x,disabled:b,textArea:E,textAreaDisabled:C,inputmodeText:U,inputmodeEmail:v,inputSizeExamples:z,inputModeExamples:N,inputStateExamples:w,inputColorExamples:M,textareaExamples:A}}}),K=p("p",null,[s(" The "),p("strong",null,"NeonInput"),s(" component covers the basic input types: "),p("strong",null,"email"),s(", "),p("strong",null,"number"),s(),p("strong",null,"tel"),s(", "),p("strong",null,"text"),s(" & "),p("strong",null,"url"),s(" as well as "),p("strong",null,"textarea"),s(". There are custom components defined for the other input types. ")],-1),O=p("h2",{class:"neon-h3"},"Input sizes",-1),P=p("h2",{class:"neon-h3"},"Input colors",-1),Q=p("h2",{class:"neon-h3"},"Input mode",-1),W=p("h2",{class:"neon-h3"},"Input states",-1),X=p("h2",{class:"neon-h3"},"Textarea examples",-1);function Y(e,l,h,f,T,g){const r=i("neon-card-body"),n=i("neon-input"),u=i("neon-stack"),m=i("editor"),y=i("neon-card"),V=i("component-documentation");return e.menuModel?(q(),R(V,{key:0,headline:e.headline,model:e.menuModel},{default:d(()=>[t(y,null,{default:d(()=>[t(r,null,{default:d(()=>[K]),_:1}),t(r,null,{default:d(()=>[O,t(u,null,{default:d(()=>[t(u,null,{default:d(()=>[t(n,{modelValue:e.small,"onUpdate:modelValue":l[0]||(l[0]=o=>e.small=o),placeholder:"Type here",size:"s",type:"text"},null,8,["modelValue"]),t(n,{modelValue:e.medium,"onUpdate:modelValue":l[1]||(l[1]=o=>e.medium=o),placeholder:"Type here",size:"m",type:"text"},null,8,["modelValue"]),t(n,{modelValue:e.large,"onUpdate:modelValue":l[2]||(l[2]=o=>e.large=o),placeholder:"Type here",size:"l",type:"text"},null,8,["modelValue"])]),_:1}),t(m,{modelValue:e.inputSizeExamples,"onUpdate:modelValue":l[3]||(l[3]=o=>e.inputSizeExamples=o)},null,8,["modelValue"])]),_:1})]),_:1}),t(r,null,{default:d(()=>[P,t(u,null,{default:d(()=>[t(u,null,{default:d(()=>[t(n,{modelValue:e.lowContrast,"onUpdate:modelValue":l[4]||(l[4]=o=>e.lowContrast=o),color:"low-contrast",placeholder:"Type here",type:"text"},null,8,["modelValue"]),t(n,{modelValue:e.highContrast,"onUpdate:modelValue":l[5]||(l[5]=o=>e.highContrast=o),color:"high-contrast",placeholder:"Type here",type:"text"},null,8,["modelValue"]),t(n,{modelValue:e.brand,"onUpdate:modelValue":l[6]||(l[6]=o=>e.brand=o),color:"brand",placeholder:"Type here",type:"text"},null,8,["modelValue"]),t(n,{modelValue:e.primary,"onUpdate:modelValue":l[7]||(l[7]=o=>e.primary=o),color:"primary",placeholder:"Type here",type:"text"},null,8,["modelValue"]),t(n,{modelValue:e.info,"onUpdate:modelValue":l[8]||(l[8]=o=>e.info=o),color:"info",placeholder:"Type here",type:"text"},null,8,["modelValue"]),t(n,{modelValue:e.disabled,"onUpdate:modelValue":l[9]||(l[9]=o=>e.disabled=o),isabled:"disabled",placeholder:"Type here",type:"text"},null,8,["modelValue"])]),_:1}),t(m,{modelValue:e.inputColorExamples,"onUpdate:modelValue":l[10]||(l[10]=o=>e.inputColorExamples=o)},null,8,["modelValue"])]),_:1})]),_:1}),t(r,null,{default:d(()=>[Q,t(u,null,{default:d(()=>[t(u,{gap:"m"},{default:d(()=>[t(n,{modelValue:e.inputmodeText,"onUpdate:modelValue":l[11]||(l[11]=o=>e.inputmodeText=o),placeholder:"Default mode"},null,8,["modelValue"]),t(n,{modelValue:e.inputmodeEmail,"onUpdate:modelValue":l[12]||(l[12]=o=>e.inputmodeEmail=o),inputmode:"email",placeholder:"Email mode",type:"email"},null,8,["modelValue"])]),_:1}),t(m,{modelValue:e.inputModeExamples,"onUpdate:modelValue":l[13]||(l[13]=o=>e.inputModeExamples=o)},null,8,["modelValue"])]),_:1})]),_:1}),t(r,null,{default:d(()=>[W,t(u,null,{default:d(()=>[t(u,null,{default:d(()=>[t(n,{modelValue:e.ready,"onUpdate:modelValue":l[14]||(l[14]=o=>e.ready=o),placeholder:"Type here",size:"l",state:"ready",type:"text"},null,8,["modelValue"]),t(n,{modelValue:e.loading,"onUpdate:modelValue":l[15]||(l[15]=o=>e.loading=o),placeholder:"Type here",size:"l",state:"loading",type:"text"},null,8,["modelValue"]),t(n,{modelValue:e.success,"onUpdate:modelValue":l[16]||(l[16]=o=>e.success=o),placeholder:"Type here",size:"l",state:"success",type:"text"},null,8,["modelValue"]),t(n,{modelValue:e.error,"onUpdate:modelValue":l[17]||(l[17]=o=>e.error=o),placeholder:"Type here",size:"l",state:"error",type:"text"},null,8,["modelValue"])]),_:1}),t(m,{modelValue:e.inputStateExamples,"onUpdate:modelValue":l[18]||(l[18]=o=>e.inputStateExamples=o)},null,8,["modelValue"])]),_:1})]),_:1}),t(r,null,{default:d(()=>[X,t(u,null,{default:d(()=>[t(u,null,{default:d(()=>[t(n,{modelValue:e.textArea,"onUpdate:modelValue":l[19]||(l[19]=o=>e.textArea=o),maxlength:100,rows:5,placeholder:"Type here",type:"text"},null,8,["modelValue"]),t(n,{modelValue:e.textAreaDisabled,"onUpdate:modelValue":l[20]||(l[20]=o=>e.textAreaDisabled=o),maxlength:100,rows:5,disabled:"disabled",placeholder:"Type here",type:"text"},null,8,["modelValue"])]),_:1}),t(m,{modelValue:e.textareaExamples,"onUpdate:modelValue":l[21]||(l[21]=o=>e.textareaExamples=o)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["headline","model"])):j("",!0)}const ue=B(J,[["render",Y]]);export{ue as default};
