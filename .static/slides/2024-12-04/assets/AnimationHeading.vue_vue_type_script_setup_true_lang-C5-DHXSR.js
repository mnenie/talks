import{d as v,t as h,z as r,E as p,ae as g,at as x,B as c,o as n,b as l,e as k,F as S,ag as w,h as A,x as b,i as B}from"./modules/vue-D3qxR5f9.js";import{u as E}from"./slidev/context-GOTNTqTI.js";import{a as z}from"./index-5mDXr6ea.js";import{t as $}from"./bundle-mjs-Dnoi3Axr.js";const N=v({__name:"AnimationHeading",props:{words:{},filter:{type:Boolean,default:!0},duration:{default:.7},index:{}},setup(t){E();const o=z(),s=h(null),u=r(()=>t.words.split(" ")),f=r(()=>({opacity:0,filter:t.filter?"blur(10px)":"none",transition:`opacity ${t.duration}s, filter ${t.duration}s`})),d=()=>{if(s.value){const e=s.value.querySelectorAll("h1");e.forEach(a=>{a.style.opacity="0",a.style.filter=t.filter?"blur(10px)":"none"}),e.forEach((a,i)=>{setTimeout(()=>{a.style.opacity="1",a.style.filter=t.filter?"blur(0px)":"none"},i*200)})}},m=()=>{s.value&&s.value.querySelectorAll("h1").forEach(a=>{a.style.opacity="0"})};return p(()=>o.clicks.value,e=>{e===t.index?d():e>t.index&&m()},{immediate:!0,flush:"post"}),(e,a)=>g((n(),l("div",{class:B(c($)("leading-snug tracking-wide",e.$attrs.class))},[k("div",{ref_key:"scope",ref:s},[(n(!0),l(S,null,w(u.value,(i,y)=>(n(),l("h1",{key:i+y,class:"inline-block",style:A(f.value)},b(i)+"  ",5))),128))],512)],2)),[[x,c(o).clicks.value===e.index]])}});export{N as _};