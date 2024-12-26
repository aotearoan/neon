import{N as k,a as C,g as o,_ as b}from"../index.js";import{N as h}from"./NeonInline-e4d49a2a.js";import{N as w}from"./NeonStack-fb7ab566.js";import{u as g,w as B,D as n,x as t,y as r,H as S,L as c,G as i,F as u,A as s,Q as $,I as v,J as m,K as I,P as K}from"./vendor-7a8d752b.js";const L=g({name:"NeonNote",components:{NeonButton:k,NeonIcon:C,NeonInline:h,NeonStack:w},props:{title:{type:String},color:{type:String,default:o.LowContrast},closable:{type:Boolean,default:!1},icon:{type:Boolean,default:!0},ariaLabelCloseNote:{type:String,default:"Close note"}},emits:["close-note"],setup(e,{emit:a,slots:l}){return{iconName:B(()=>{if(e.icon)switch(e.color){case o.Info:return"info-circle";case o.Success:return"check-circle";case o.Warn:return"exclamation-circle";case o.Error:return"times-circle";default:return}}),slots:l,closeNote:()=>{a("close-note")}}}}),V={class:"neon-note__container"},z={key:1,class:"neon-note__title"};function D(e,a,l,p,d,E){const N=n("neon-icon"),f=n("neon-inline"),_=n("neon-stack"),y=n("neon-button");return t(),r("div",{class:K([[`neon-note--${e.color}`,{"neon-note--with-title":e.title,"neon-note--with-title-only":e.title&&!e.slots.default}],"neon-note"]),role:"note"},[S("div",V,[c(_,{gap:"s"},{default:i(()=>[c(f,{gap:"s"},{default:i(()=>[e.iconName?(t(),u(N,{key:0,color:e.color,name:e.iconName,class:"neon-note__icon"},null,8,["color","name"])):s("",!0),e.title?(t(),r("span",z,$(e.title),1)):s("",!0)]),_:1}),v(e.$slots,"default")]),_:3})]),e.closable?(t(),u(y,{key:0,"aria-label":e.ariaLabelCloseNote,circular:!0,transparent:!0,"button-style":"text",class:"neon-note__close",icon:"times",size:"s",tabindex:"0",onClick:e.closeNote,onKeydown:[m(e.closeNote,["enter"]),m(I(e.closeNote,["stop"]),["space"])]},null,8,["aria-label","onClick","onKeydown"])):s("",!0)],2)}const J=b(L,[["render",D]]);export{J as N};
