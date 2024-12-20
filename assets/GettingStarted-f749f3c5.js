import{N as g}from"./NeonAnchor-bb924e20.js";import{N,a as k,b as y}from"./NeonCardHeader-5e3d5e8c.js";import{b as C,_ as V}from"../index.js";import{N as S}from"./NeonStack-fb7ab566.js";import{E as b}from"./Editor-1d4a4353.js";import{u as B,R as i,D as s,F as T,G as n,x as w,L as e,H as o,a2 as r}from"./vendor-7a8d752b.js";const M=B({name:"GettingStarted",components:{NeonAnchor:g,NeonCard:N,NeonCardBody:k,NeonCardHeader:y,NeonLink:C,NeonStack:S,Editor:b},setup(){const a=i('<html class="app neon neon-mode--dark">'),l=i(`import { NeonButton } from '@aotearoan/neon';

export default defineComponent({
  name: 'SomeComponent',
  components: {
    NeonButton,
  },
  ...
});`),c=i(`@use '@aotearoan/neon/theme' with (
  $neon-components: (
      NeonAlert,
      NeonButton,
      NeonCard,
      NeonCardBody,
      NeonCardFooter,
      NeonCardHeader,
      NeonDrawer,
  ),
);`);return{darkModeExample:a,importComponents:l,allTheSass:c}}}),A=o("h1",null,"Getting Started",-1),E=o("h2",{class:"neon-h4"},"Installation",-1),H=o("p",null,"Install with NPM:",-1),$=o("p",null,"or yarn:",-1),x=o("h2",{class:"neon-h4"},"Javascript/Typescript",-1),G=o("p",null,"Import components and supporting classes like so:",-1),I=o("h2",{class:"neon-h4"},"SASS",-1),L=o("p",null,"Import the theme:",-1),v=o("p",null," Alternatively the theme can be imported with a list of used components to minimise the final package size: ",-1),D=o("h2",{class:"neon-h4"},"HTML",-1),F=o("p",null,[r(" Add the necessary "),o("em",null,"app"),r(" & "),o("em",null,"neon"),r(" styles to the HTML element as well as the light/dark mode, e.g. to set dark mode by default: ")],-1);function U(a,l,c,z,J,P){const h=s("neon-card-header"),_=s("neon-card"),u=s("neon-anchor"),d=s("editor"),t=s("neon-stack"),p=s("neon-card-body"),f=s("neon-link");return w(),T(t,null,{default:n(()=>[e(_,null,{default:n(()=>[e(h,null,{default:n(()=>[A]),_:1})]),_:1}),e(_,null,{default:n(()=>[e(p,null,{default:n(()=>[e(u,{id:"installation"}),E,e(t,null,{default:n(()=>[e(t,{gap:"s"},{default:n(()=>[H,e(d,{language:"bash",modelValue:"npm install @aotearoan/neon"})]),_:1}),e(t,{gap:"s"},{default:n(()=>[$,e(d,{language:"bash",modelValue:"yarn add @aotearoan/neon"})]),_:1})]),_:1})]),_:1}),e(p,null,{default:n(()=>[e(u,{id:"typescript"}),x,e(t,{gap:"s"},{default:n(()=>[G,e(d,{modelValue:a.importComponents,"onUpdate:modelValue":l[0]||(l[0]=m=>a.importComponents=m),language:"typescript"},null,8,["modelValue"])]),_:1})]),_:1}),e(p,null,{default:n(()=>[e(u,{id:"sass"}),I,e(t,null,{default:n(()=>[e(t,{gap:"s"},{default:n(()=>[L,e(d,{language:"scss",modelValue:"@use '@aotearoan/neon/theme';"})]),_:1}),e(t,{gap:"s"},{default:n(()=>[v,e(d,{modelValue:a.allTheSass,"onUpdate:modelValue":l[1]||(l[1]=m=>a.allTheSass=m),language:"scss"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(p,null,{default:n(()=>[D,e(t,null,{default:n(()=>[e(t,{gap:"s"},{default:n(()=>[e(u,{id:"html"}),F,e(d,{modelValue:a.darkModeExample,"onUpdate:modelValue":l[2]||(l[2]=m=>a.darkModeExample=m),language:"html"},null,8,["modelValue"])]),_:1}),o("p",null,[r(" For more information on dynamically changing the mode see "),e(f,{href:"/design/theming#dark-mode"},{default:n(()=>[r("Dark mode")]),_:1}),r(" . ")])]),_:1})]),_:1})]),_:1})]),_:1})}const W=V(M,[["render",U]]);export{W as default};
