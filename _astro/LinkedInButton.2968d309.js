import{j as n}from"./jsx-runtime.391947bd.js";import{r as c}from"./index.ed373d49.js";import{a as x,T as E}from"./jwt.1b92699e.js";import{S as b}from"./spinner.6a5ba5e9.js";import{a as w}from"./http.64a7434f.js";const L={src:"/_astro/linkedin.f7c52848.svg",width:100,height:100,format:"svg"},l="linkedInRedirectAt",d="linkedInLastPage";function C(v){const[i,t]=c.useState(!1),[m,o]=c.useState(""),f=i?b:L;c.useEffect(()=>{const e=new URLSearchParams(window.location.search),a=e.get("code"),r=e.get("state"),I=e.get("provider");!a||!r||I!=="linkedin"||(t(!0),w(`https://api.roadmap.sh/v1-linkedin-callback${window.location.search}`).then(({response:s,error:S})=>{if(!s?.token){o(S?.message||"Something went wrong."),t(!1);return}let g="/";const h=localStorage.getItem(l),p=localStorage.getItem(d);if(h&&p){const k=parseInt(h,10);Date.now()-k<30*1e3&&(g=p)}localStorage.removeItem(l),localStorage.removeItem(d),x.set(E,s.token,{path:"/",expires:30,domain:".roadmap.sh"}),window.location.href=g}).catch(s=>{o("Something went wrong. Please try again later."),t(!1)}))},[]);const u=()=>{t(!0),w("https://api.roadmap.sh/v1-linkedin-login").then(({response:e,error:a})=>{if(!e?.loginUrl){o(a?.message||"Something went wrong."),t(!1);return}if(!["/login","/signup"].includes(window.location.pathname)){const r=["/respond-invite","/befriend"].includes(window.location.pathname)?window.location.pathname+window.location.search:window.location.pathname;localStorage.setItem(l,Date.now().toString()),localStorage.setItem(d,r)}window.location.href=e.loginUrl}).catch(e=>{o("Something went wrong. Please try again later."),t(!1)})};return n.jsxs(n.Fragment,{children:[n.jsxs("button",{className:"inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60",disabled:i,onClick:u,children:[n.jsx("img",{src:f.src,alt:"Google",className:`h-[18px] w-[18px] ${i?"animate-spin":""}`}),"Continue with LinkedIn"]}),m&&n.jsx("p",{className:"mb-2 mt-1 text-sm font-medium text-red-600",children:m})]})}export{C as LinkedInButton};
