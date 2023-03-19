import{N as U,A as _,r as C,a1 as me,E as J,w as ge,a2 as Q,f as h,D as E,e as l,G as N,H as ee,B as ye,a3 as pe,a4 as he,k as y,C as te,K as be,g as ne,l as Se,s as xe,a5 as oe,d as z,y as T,a6 as B,M as Ce,a7 as Y}from"./index.fca033b6.js";const Ie=["top","bottom"],$e=["start","end","left","right"];function Re(e,t){let[n,o]=e.split(" ");return o||(o=U(Ie,n)?"start":U($e,n)?"top":"center"),{side:Z(n,t),align:Z(o,t)}}function Z(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function se(e){const t=_("useRender");t.render=e}function we(e){const t=C(),n=C();if(me){const o=new ResizeObserver(s=>{e==null||e(s,o),s.length&&(n.value=s[0].contentRect)});J(()=>{o.disconnect()}),ge(t,(s,a)=>{a&&(o.unobserve(a),n.value=void 0),s&&o.observe(s)},{flush:"post"})}return{resizeRef:t,contentRect:Q(n)}}const M=Symbol.for("vuetify:layout"),ae=Symbol.for("vuetify:layout-item"),F=1e3,ke=h({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Ve=h({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function Le(){const e=E(M);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Oe(e){var f;const t=E(M);if(!t)throw new Error("[Vuetify] Could not find injected layout");const n=(f=e.id)!=null?f:`layout-item-${ye()}`,o=_("useLayoutItem");te(ae,{id:n});const s=C(!1);pe(()=>s.value=!0),he(()=>s.value=!1);const{layoutItemStyles:a,layoutItemScrimStyles:u}=t.register(o,{...e,active:l(()=>s.value?!1:e.active.value),id:n});return J(()=>t.unregister(n)),{layoutItemStyles:a,layoutRect:t.layoutRect,layoutItemScrimStyles:u}}const Ne=(e,t,n,o)=>{let s={top:0,left:0,right:0,bottom:0};const a=[{id:"",layer:{...s}}];for(const u of e){const f=t.get(u),d=n.get(u),b=o.get(u);if(!f||!d||!b)continue;const S={...s,[f.value]:parseInt(s[f.value],10)+(b.value?parseInt(d.value,10):0)};a.push({id:u,layer:S}),s=S}return a};function Be(e){const t=E(M,null),n=l(()=>t?t.rootZIndex.value-100:F),o=C([]),s=N(new Map),a=N(new Map),u=N(new Map),f=N(new Map),d=N(new Map),{resizeRef:b,contentRect:S}=we(),le=l(()=>{var i;const r=new Map,v=(i=e.overlaps)!=null?i:[];for(const p of v.filter(c=>c.includes(":"))){const[c,m]=p.split(":");if(!o.value.includes(c)||!o.value.includes(m))continue;const x=s.get(c),w=s.get(m),k=a.get(c),P=a.get(m);!x||!w||!k||!P||(r.set(m,{position:x.value,amount:parseInt(k.value,10)}),r.set(c,{position:w.value,amount:-parseInt(P.value,10)}))}return r}),I=l(()=>{const r=[...new Set([...u.values()].map(i=>i.value))].sort((i,p)=>i-p),v=[];for(const i of r){const p=o.value.filter(c=>{var m;return((m=u.get(c))==null?void 0:m.value)===i});v.push(...p)}return Ne(v,s,a,f)}),W=l(()=>!Array.from(d.values()).some(r=>r.value)),$=l(()=>I.value[I.value.length-1].layer),ue=l(()=>({"--v-layout-left":y($.value.left),"--v-layout-right":y($.value.right),"--v-layout-top":y($.value.top),"--v-layout-bottom":y($.value.bottom),...W.value?void 0:{transition:"none"}})),R=l(()=>I.value.slice(1).map((r,v)=>{let{id:i}=r;const{layer:p}=I.value[v],c=a.get(i),m=s.get(i);return{id:i,...p,size:Number(c.value),position:m.value}})),D=r=>R.value.find(v=>v.id===r),A=_("createLayout"),j=C(!1);ee(()=>{j.value=!0}),te(M,{register:(r,v)=>{let{id:i,order:p,position:c,layoutSize:m,elementSize:x,active:w,disableTransitions:k,absolute:P}=v;u.set(i,p),s.set(i,c),a.set(i,m),f.set(i,w),k&&d.set(i,k);const K=be(ae,A==null?void 0:A.vnode).indexOf(r);K>-1?o.value.splice(K,0,i):o.value.push(i);const X=l(()=>R.value.findIndex(L=>L.id===i)),H=l(()=>n.value+I.value.length*2-X.value*2),de=l(()=>{const L=c.value==="left"||c.value==="right",V=c.value==="right",ve=c.value==="bottom",q={[c.value]:0,zIndex:H.value,transform:`translate${L?"X":"Y"}(${(w.value?0:-110)*(V||ve?-1:1)}%)`,position:P.value||n.value!==F?"absolute":"fixed",...W.value?void 0:{transition:"none"}};if(!j.value)return q;const g=R.value[X.value];if(!g)throw new Error(`[Vuetify] Could not find layout item "${i}"`);const O=le.value.get(i);return O&&(g[O.position]+=O.amount),{...q,height:L?`calc(100% - ${g.top}px - ${g.bottom}px)`:x.value?`${x.value}px`:void 0,left:V?void 0:`${g.left}px`,right:V?`${g.right}px`:void 0,top:c.value!=="bottom"?`${g.top}px`:void 0,bottom:c.value!=="top"?`${g.bottom}px`:void 0,width:L?x.value?`${x.value}px`:void 0:`calc(100% - ${g.left}px - ${g.right}px)`}}),fe=l(()=>({zIndex:H.value-1}));return{layoutItemStyles:de,layoutItemScrimStyles:fe,zIndex:H}},unregister:r=>{u.delete(r),s.delete(r),a.delete(r),f.delete(r),d.delete(r),o.value=o.value.filter(v=>v!==r)},mainRect:$,mainStyles:ue,getLayoutItem:D,items:R,layoutRect:S,rootZIndex:n});const re=l(()=>["v-layout",{"v-layout--full-height":e.fullHeight}]),ce=l(()=>({zIndex:n.value,position:t?"relative":void 0,overflow:t?"hidden":void 0}));return{layoutClasses:re,layoutStyles:ce,getLayoutItem:D,items:R,layoutRect:S,layoutRef:b}}const _e=(e,t)=>{const n=e.__vccOpts||e;for(const[o,s]of t)n[o]=s;return n};const Ee=ne()({name:"VApp",props:{...ke({fullHeight:!0}),...Se()},setup(e,t){let{slots:n}=t;const o=xe(e),{layoutClasses:s,layoutStyles:a,getLayoutItem:u,items:f,layoutRef:d}=Be(e),{rtlClasses:b}=oe();return se(()=>{var S;return z("div",{ref:d,class:["v-application",o.themeClasses.value,s.value,b.value],style:a.value},[z("div",{class:"v-application__wrap"},[(S=n.default)==null?void 0:S.call(n)])])}),{getLayoutItem:u,items:f,theme:o}}}),Te=h({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function We(e){return{dimensionStyles:l(()=>({height:y(e.height),maxHeight:y(e.maxHeight),maxWidth:y(e.maxWidth),minHeight:y(e.minHeight),minWidth:y(e.minWidth),width:y(e.width)}))}}const Pe=h({tag:{type:String,default:"div"}},"tag"),De=h({border:[Boolean,Number,String]},"border");function je(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return{borderClasses:l(()=>{const o=B(e)?e.value:e.border,s=[];if(o===!0||o==="")s.push(`${t}--border`);else if(typeof o=="string"||o===0)for(const a of String(o).split(" "))s.push(`border-${a}`);return s})}}const Ke=h({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function Xe(e){return{elevationClasses:l(()=>{const n=B(e)?e.value:e.elevation,o=[];return n==null||o.push(`elevation-${n}`),o})}}const qe=h({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function Ue(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return{roundedClasses:l(()=>{const o=B(e)?e.value:e.rounded,s=[];if(o===!0||o==="")s.push(`${t}--rounded`);else if(typeof o=="string"||o===0)for(const a of String(o).split(" "))s.push(`rounded-${a}`);return s})}}function ie(e){return Ce(()=>{const t=[],n={};return e.value.background&&(Y(e.value.background)?n.backgroundColor=e.value.background:t.push(`bg-${e.value.background}`)),e.value.text&&(Y(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}})}function Ye(e,t){const n=l(()=>({text:B(e)?e.value:t?e[t]:null})),{colorClasses:o,colorStyles:s}=ie(n);return{textColorClasses:o,textColorStyles:s}}function Ze(e,t){const n=l(()=>({background:B(e)?e.value:t?e[t]:null})),{colorClasses:o,colorStyles:s}=ie(n);return{backgroundColorClasses:o,backgroundColorStyles:s}}function ze(){const e=C(!1);return ee(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:l(()=>e.value?void 0:{transition:"none !important"}),isBooted:Q(e)}}const G={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Fe=h({location:String},"location");function Ge(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:o}=oe();return{locationStyles:l(()=>{if(!e.location)return{};const{side:a,align:u}=Re(e.location.split(" ").length>1?e.location:`${e.location} center`,o.value);function f(b){return n?n(b):0}const d={};return a!=="center"&&(t?d[G[a]]=`calc(100% - ${f(a)}px)`:d[a]=0),u!=="center"?t?d[G[u]]=`calc(100% - ${f(u)}px)`:d[u]=0:(a==="center"?d.top=d.left="50%":d[{top:"left",bottom:"left",left:"top",right:"top"}[a]]="50%",d.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[a]),d})}}const Me=["static","relative","fixed","absolute","sticky"],Je=h({position:{type:String,validator:e=>Me.includes(e)}},"position");function Qe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return{positionClasses:l(()=>e.position?`${t}--${e.position}`:void 0)}}const et=ne()({name:"VMain",props:{scrollable:Boolean,...Pe({tag:"main"})},setup(e,t){let{slots:n}=t;const{mainStyles:o}=Le(),{ssrBootStyles:s}=ze();return se(()=>z(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable}],style:[o.value,s.value]},{default:()=>{var a,u;return[e.scrollable?z("div",{class:"v-main__scroller"},[(a=n.default)==null?void 0:a.call(n)]):(u=n.default)==null?void 0:u.call(n)]}})),{}}});export{Ee as V,_e as _,se as a,Pe as b,De as c,Ke as d,qe as e,Ze as f,je as g,Xe as h,Ue as i,Ve as j,ze as k,Oe as l,Te as m,ie as n,Ye as o,we as p,Fe as q,Je as r,Ge as s,Qe as t,We as u,et as v};
