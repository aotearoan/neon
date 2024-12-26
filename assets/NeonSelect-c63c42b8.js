import{a as H,e as R,l as T,g as F,_ as G}from"../index.js";import{N as Q,a as k}from"./NeonDropdown-f9c34229.js";import{N as j}from"./NeonScrollUtils-e1749a09.js";import{u as J,v as W,R as g,w as b,S as X,U as Y,V as Z,D as N,x as a,y as i,L as x,G as ee,H as c,P as C,Q as h,A as w,M as v,O as V,K as le,I as ne,F as P,z as L}from"./vendor-7a8d752b.js";const te=J({name:"NeonSelect",components:{NeonDropdown:Q,NeonIcon:H,NeonSwitch:R},props:{id:{type:String},placeholder:{type:String,required:!0},placeholderAsOption:{type:Boolean,default:!1},placeholderIcon:{type:String,required:!1},options:{type:Array,required:!1},groupedOptions:{type:Array,required:!1},modelValue:{type:[String,Array],required:!0},multiple:{type:Boolean,default:!1},multiselectPlaceholder:{type:String,required:!1},disabled:{type:Boolean,default:!1},size:{type:String,default:T.Medium},color:{type:String,default:F.LowContrast},placement:{type:String,default:k.BottomLeft}},emits:["update:modelValue"],setup(e,{emit:m}){const A=W(),O=g(null),p=g(!1),_=g(e.placement),f=g(null),d=g(-1),s=b(()=>{var l;return e.options?e.options:e.groupedOptions?(l=e.groupedOptions)==null?void 0:l.flatMap(t=>t.options):[]}),o=()=>{if(!e.groupedOptions)switch(_.value){case k.TopLeft:case k.TopRight:case k.LeftBottom:case k.RightBottom:return!0}return!1},n=()=>{var t;const l=(t=O.value)==null?void 0:t.querySelector(".neon-select__option--highlighted");l&&j.scrollIntoView(l)},y=(l,t)=>{const u=d.value+l;u>=0&&u<=s.value.length-1&&(d.value=u,f.value=s.value[d.value].key,t.preventDefault(),setTimeout(n))},S=l=>{m("update:modelValue",l)},I=l=>{if(e.multiple){const t=[...e.modelValue],u=t.findIndex(z=>z===l.key);u>=0?t.splice(u,1):t.push(l.key),S(t)}else e.modelValue!==l.key&&(p.value=!1,S(l.key))},B=l=>{if(p.value)switch(l.code){case"ArrowUp":case"ArrowDown":{const t=o()?-1:1;l.code==="ArrowUp"?y(-1*t,l):y(1*t,l)}break;case"Enter":case"Space":s.value[d.value].disabled||(I(s.value[d.value]),l.preventDefault());break;case"Tab":!l.ctrlKey&&!l.metaKey&&!l.altKey&&(p.value=!1);break}},D=b(()=>e.groupedOptions||[{group:"",options:e.options||[]}]),q=b(()=>{const{...l}=A;return l}),K=b(()=>{if(e.multiple&&e.modelValue.length>0){if(e.multiselectPlaceholder)return e.multiselectPlaceholder;if(e.modelValue.length>1)return`${e.modelValue.length} items selected`;{const l=s.value.find(t=>t.key===e.modelValue[0]);return(l==null?void 0:l.label)||""}}else if(e.modelValue){const l=s.value.find(t=>t.key===e.modelValue);if(l)return l.label}return e.placeholder}),M=b(()=>{if(e.modelValue){const l=s.value.find(t=>t.key===e.modelValue);if(l)return l.icon}return e.placeholderIcon}),U=l=>{const t=Array.from(l.target.options).filter(r=>r.selected).map(r=>r.value),u=s.value.filter(r=>t.indexOf(r.key)>=0),z=e.multiple?u.map(r=>r.key):u[0].key;S(z)},$=l=>{f.value=l,d.value=s.value.findIndex(t=>t.key===l)},E=l=>{_.value=l};return X(()=>{document.addEventListener("keydown",B)}),Y(()=>{document.removeEventListener("keydown",B)}),Z(()=>p.value,l=>{l&&(f.value=s.value[0].key,d.value=0)}),{dropdown:O,open:p,highlightedKey:f,highlightedIndex:d,flattenedOptions:s,computedLabel:K,sanitizedAttributes:q,computedOptions:D,computedIcon:M,clickOption:I,nativeSelectChange:U,changeHighlighted:$,onPlacement:E}}}),oe={class:"neon-select__wrapper"},ae={class:"no-style neon-select__options"},se={class:"neon-select__option-container"},ie={class:"neon-select__option-label"},de=["id","aria-selected","onMouseover","onClick"],ue={class:"neon-select__option-container"},re={class:"neon-select__option-label"},ce=["disabled","multiple"],me=["selected"],pe=["label"],fe=["data-index","disabled","multiple","selected","value"],ye=["data-index","disabled","multiple","selected","value"];function he(e,m,A,O,p,_){const f=N("neon-switch"),d=N("neon-icon"),s=N("neon-dropdown");return a(),i("div",oe,[x(s,L({id:e.id,ref:"dropdown",modelValue:e.open,"onUpdate:modelValue":m[0]||(m[0]=o=>e.open=o),"aria-activedescendant":e.multiple?e.modelValue[0]:e.modelValue,"aria-multiselectable":e.multiple,class:[[`neon-select--${e.color}`,{"neon-select--grouped":e.groupedOptions,"neon-select--multiple":e.multiple}],"neon-select"],color:e.color,disabled:e.disabled,icon:e.computedIcon,label:e.computedLabel,size:e.size,role:"listbox"},e.sanitizedAttributes,{onDropdownPlacement:e.onPlacement}),{default:ee(()=>[c("ul",ae,[e.placeholderAsOption?(a(),i("li",{key:0,class:C([`neon-select__option--${e.size}`,"neon-select__option neon-select__option--disabled neon-select__option-placeholder"])},[c("div",se,[c("span",ie,h(e.placeholder),1)])],2)):w("",!0),(a(!0),i(v,null,V(e.computedOptions,o=>(a(),i(v,null,[o.group!==""?(a(),i("li",{key:o.group,class:"neon-select__option-title"},h(o.group),1)):w("",!0),(a(!0),i(v,null,V(o.options,n=>(a(),i("li",{id:n.key,key:n.key,"aria-selected":e.multiple?e.modelValue.indexOf(n.key)>=0:n.key===e.modelValue,class:C([[{"neon-select__option--disabled":n.disabled,"neon-select__option--separator-before":n.separatorBefore,"neon-select__option--selected":e.multiple?e.modelValue.indexOf(n.key)>=0:n.key===e.modelValue,"neon-select__option--highlighted":n.key===e.highlightedKey},`neon-select__option--${e.size}`],"neon-select__option"]),role:"option",onMouseover:y=>e.changeHighlighted(n.key),onClick:le(y=>!n.disabled&&e.clickOption(n),["stop","prevent"])},[c("div",ue,[ne(e.$slots,"option",{option:n},()=>[e.multiple?(a(),P(f,{key:0,color:e.color,modelValue:e.modelValue.indexOf(n.key)>=0,size:e.size==="l"?"m":"s","switch-style":"checkbox"},null,8,["color","modelValue","size"])):w("",!0),n.icon?(a(),P(d,{key:1,disabled:n.disabled,name:n.icon,class:"neon-select__option-icon"},null,8,["disabled","name"])):w("",!0),c("span",re,h(n.label),1)])])],42,de))),128))],64))),256))])]),_:3},16,["id","modelValue","aria-activedescendant","aria-multiselectable","class","color","disabled","icon","label","size","onDropdownPlacement"]),c("select",L({disabled:e.disabled,multiple:e.multiple,class:"neon-select__native"},e.sanitizedAttributes,{onInput:m[1]||(m[1]=(...o)=>e.nativeSelectChange&&e.nativeSelectChange(...o))}),[c("option",{selected:e.multiple?e.modelValue.length===0:e.modelValue==="",disabled:"",hidden:"",value:""},h(e.placeholder),9,me),e.groupedOptions?(a(!0),i(v,{key:0},V(e.groupedOptions,o=>(a(),i("optgroup",{key:o.group,label:o.group},[(a(!0),i(v,null,V(o.options,(n,y)=>(a(),i("option",{key:`${n.key}-native`,"data-index":y,disabled:n.disabled,multiple:e.multiple,selected:e.multiple?e.modelValue.indexOf(n.key)>=0:n.key===e.modelValue,value:n.key},h(n.label),9,fe))),128))],8,pe))),128)):(a(!0),i(v,{key:1},V(e.options,(o,n)=>(a(),i("option",{key:`${o.key}-native`,"data-index":n,disabled:o.disabled,multiple:e.multiple,selected:e.multiple?e.modelValue.indexOf(o.key)>=0:o.key===e.modelValue,value:o.key},h(o.label),9,ye))),128))],16,ce)])}const Ve=G(te,[["render",he]]);export{Ve as N};
