var ka=Object.defineProperty;var ln=e=>{throw TypeError(e)};var Ga=(e,r,t)=>r in e?ka(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var F=(e,r,t)=>Ga(e,typeof r!="symbol"?r+"":r,t),Or=(e,r,t)=>r.has(e)||ln("Cannot "+t);var E=(e,r,t)=>(Or(e,r,"read from private field"),t?t.call(e):r.get(e)),H=(e,r,t)=>r.has(e)?ln("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,t),B=(e,r,t,n)=>(Or(e,r,"write to private field"),n?n.call(e,t):r.set(e,t),t),z=(e,r,t)=>(Or(e,r,"access private method"),t);var dn=(e,r,t,n)=>({set _(s){B(e,r,s,t)},get _(){return E(e,r,n)}});import vr from"crypto";import pr from"buffer";import Zt from"stream";import Er from"util";var xn=(e,r,t)=>(n,s)=>{let a=-1;return i(0);async function i(u){if(u<=a)throw new Error("next() called multiple times");a=u;let c,f=!1,o;if(e[u]?(o=e[u][0][0],n.req.routeIndex=u):o=u===e.length&&s||void 0,o)try{c=await o(n,()=>i(u+1))}catch(l){if(l instanceof Error&&r)n.error=l,c=await r(l,n),f=!0;else throw l}else n.finalized===!1&&t&&(c=await t(n));return c&&(n.finalized===!1||f)&&(n.res=c),n}},Ha=Symbol(),Va=async(e,r=Object.create(null))=>{const{all:t=!1,dot:n=!1}=r,a=(e instanceof ea?e.raw.headers:e.headers).get("Content-Type");return a!=null&&a.startsWith("multipart/form-data")||a!=null&&a.startsWith("application/x-www-form-urlencoded")?Ua(e,{all:t,dot:n}):{}};async function Ua(e,r){const t=await e.formData();return t?za(t,r):{}}function za(e,r){const t=Object.create(null);return e.forEach((n,s)=>{r.all||s.endsWith("[]")?Ka(t,s,n):t[s]=n}),r.dot&&Object.entries(t).forEach(([n,s])=>{n.includes(".")&&(Xa(t,n,s),delete t[n])}),t}var Ka=(e,r,t)=>{e[r]!==void 0?Array.isArray(e[r])?e[r].push(t):e[r]=[e[r],t]:r.endsWith("[]")?e[r]=[t]:e[r]=t},Xa=(e,r,t)=>{let n=e;const s=r.split(".");s.forEach((a,i)=>{i===s.length-1?n[a]=t:((!n[a]||typeof n[a]!="object"||Array.isArray(n[a])||n[a]instanceof File)&&(n[a]=Object.create(null)),n=n[a])})},Ws=e=>{const r=e.split("/");return r[0]===""&&r.shift(),r},Wa=e=>{const{groups:r,path:t}=Ja(e),n=Ws(t);return Ya(n,r)},Ja=e=>{const r=[];return e=e.replace(/\{[^}]+\}/g,(t,n)=>{const s=`@${n}`;return r.push([s,t]),s}),{groups:r,path:e}},Ya=(e,r)=>{for(let t=r.length-1;t>=0;t--){const[n]=r[t];for(let s=e.length-1;s>=0;s--)if(e[s].includes(n)){e[s]=e[s].replace(n,r[t][1]);break}}return e},fr={},Za=(e,r)=>{if(e==="*")return"*";const t=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(t){const n=`${e}#${r}`;return fr[n]||(t[2]?fr[n]=r&&r[0]!==":"&&r[0]!=="*"?[n,t[1],new RegExp(`^${t[2]}(?=/${r})`)]:[e,t[1],new RegExp(`^${t[2]}$`)]:fr[n]=[e,t[1],!0]),fr[n]}return null},Qt=(e,r)=>{try{return r(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,t=>{try{return r(t)}catch{return t}})}},Qa=e=>Qt(e,decodeURI),Js=e=>{const r=e.url,t=r.indexOf("/",r.indexOf(":")+4);let n=t;for(;n<r.length;n++){const s=r.charCodeAt(n);if(s===37){const a=r.indexOf("?",n),i=r.indexOf("#",n),u=a===-1?i===-1?void 0:i:i===-1?a:Math.min(a,i),c=r.slice(t,u);return Qa(c.includes("%25")?c.replace(/%25/g,"%2525"):c)}else if(s===63||s===35)break}return r.slice(t,n)},ei=e=>{const r=Js(e);return r.length>1&&r.at(-1)==="/"?r.slice(0,-1):r},De=(e,r,...t)=>(t.length&&(r=De(r,...t)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${r==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(r==null?void 0:r[0])==="/"?r.slice(1):r}`}`),Ys=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const r=e.split("/"),t=[];let n="";return r.forEach(s=>{if(s!==""&&!/\:/.test(s))n+="/"+s;else if(/\:/.test(s))if(/\?/.test(s)){t.length===0&&n===""?t.push("/"):t.push(n);const a=s.replace("?","");n+="/"+a,t.push(n)}else n+="/"+s}),t.filter((s,a,i)=>i.indexOf(s)===a)},$r=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Qt(e,Qs):e):e,Zs=(e,r,t)=>{let n;if(!t&&r&&!/[%+]/.test(r)){let i=e.indexOf("?",8);if(i===-1)return;for(e.startsWith(r,i+1)||(i=e.indexOf(`&${r}`,i+1));i!==-1;){const u=e.charCodeAt(i+r.length+1);if(u===61){const c=i+r.length+2,f=e.indexOf("&",c);return $r(e.slice(c,f===-1?void 0:f))}else if(u==38||isNaN(u))return"";i=e.indexOf(`&${r}`,i+1)}if(n=/[%+]/.test(e),!n)return}const s={};n??(n=/[%+]/.test(e));let a=e.indexOf("?",8);for(;a!==-1;){const i=e.indexOf("&",a+1);let u=e.indexOf("=",a);u>i&&i!==-1&&(u=-1);let c=e.slice(a+1,u===-1?i===-1?void 0:i:u);if(n&&(c=$r(c)),a=i,c==="")continue;let f;u===-1?f="":(f=e.slice(u+1,i===-1?void 0:i),n&&(f=$r(f))),t?(s[c]&&Array.isArray(s[c])||(s[c]=[]),s[c].push(f)):s[c]??(s[c]=f)}return r?s[r]:s},ri=Zs,ti=(e,r)=>Zs(e,r,!0),Qs=decodeURIComponent,hn=e=>Qt(e,Qs),ke,se,be,ra,ta,Wt,ye,Hs,ea=(Hs=class{constructor(e,r="/",t=[[]]){H(this,be);F(this,"raw");H(this,ke);H(this,se);F(this,"routeIndex",0);F(this,"path");F(this,"bodyCache",{});H(this,ye,e=>{const{bodyCache:r,raw:t}=this,n=r[e];if(n)return n;const s=Object.keys(r)[0];return s?r[s].then(a=>(s==="json"&&(a=JSON.stringify(a)),new Response(a)[e]())):r[e]=t[e]()});this.raw=e,this.path=r,B(this,se,t),B(this,ke,{})}param(e){return e?z(this,be,ra).call(this,e):z(this,be,ta).call(this)}query(e){return ri(this.url,e)}queries(e){return ti(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const r={};return this.raw.headers.forEach((t,n)=>{r[n]=t}),r}async parseBody(e){var r;return(r=this.bodyCache).parsedBody??(r.parsedBody=await Va(this,e))}json(){return E(this,ye).call(this,"text").then(e=>JSON.parse(e))}text(){return E(this,ye).call(this,"text")}arrayBuffer(){return E(this,ye).call(this,"arrayBuffer")}blob(){return E(this,ye).call(this,"blob")}formData(){return E(this,ye).call(this,"formData")}addValidatedData(e,r){E(this,ke)[e]=r}valid(e){return E(this,ke)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[Ha](){return E(this,se)}get matchedRoutes(){return E(this,se)[0].map(([[,e]])=>e)}get routePath(){return E(this,se)[0].map(([[,e]])=>e)[this.routeIndex].path}},ke=new WeakMap,se=new WeakMap,be=new WeakSet,ra=function(e){const r=E(this,se)[0][this.routeIndex][1][e],t=z(this,be,Wt).call(this,r);return t&&/\%/.test(t)?hn(t):t},ta=function(){const e={},r=Object.keys(E(this,se)[0][this.routeIndex][1]);for(const t of r){const n=z(this,be,Wt).call(this,E(this,se)[0][this.routeIndex][1][t]);n!==void 0&&(e[t]=/\%/.test(n)?hn(n):n)}return e},Wt=function(e){return E(this,se)[1]?E(this,se)[1][e]:e},ye=new WeakMap,Hs),ni={Stringify:1},na=async(e,r,t,n,s)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const a=e.callbacks;return a!=null&&a.length?(s?s[0]+=e:s=[e],Promise.all(a.map(u=>u({phase:r,buffer:s,context:n}))).then(u=>Promise.all(u.filter(Boolean).map(c=>na(c,r,!1,n,s))).then(()=>s[0]))):Promise.resolve(e)},si="text/plain; charset=UTF-8",Cr=(e,r)=>({"Content-Type":e,...r}),We=(e,r)=>new Response(e,r),rr,tr,xe,Ge,he,re,nr,He,Ve,$e,sr,ar,ve,Be,Vs,ai=(Vs=class{constructor(e,r){H(this,ve);H(this,rr);H(this,tr);F(this,"env",{});H(this,xe);F(this,"finalized",!1);F(this,"error");H(this,Ge);H(this,he);H(this,re);H(this,nr);H(this,He);H(this,Ve);H(this,$e);H(this,sr);H(this,ar);F(this,"render",(...e)=>(E(this,He)??B(this,He,r=>this.html(r)),E(this,He).call(this,...e)));F(this,"setLayout",e=>B(this,nr,e));F(this,"getLayout",()=>E(this,nr));F(this,"setRenderer",e=>{B(this,He,e)});F(this,"header",(e,r,t)=>{this.finalized&&B(this,re,We(E(this,re).body,E(this,re)));const n=E(this,re)?E(this,re).headers:E(this,$e)??B(this,$e,new Headers);r===void 0?n.delete(e):t!=null&&t.append?n.append(e,r):n.set(e,r)});F(this,"status",e=>{B(this,Ge,e)});F(this,"set",(e,r)=>{E(this,xe)??B(this,xe,new Map),E(this,xe).set(e,r)});F(this,"get",e=>E(this,xe)?E(this,xe).get(e):void 0);F(this,"newResponse",(...e)=>z(this,ve,Be).call(this,...e));F(this,"body",(e,r,t)=>z(this,ve,Be).call(this,e,r,t));F(this,"text",(e,r,t)=>!E(this,$e)&&!E(this,Ge)&&!r&&!t&&!this.finalized?new Response(e):z(this,ve,Be).call(this,e,r,Cr(si,t)));F(this,"json",(e,r,t)=>z(this,ve,Be).call(this,JSON.stringify(e),r,Cr("application/json",t)));F(this,"html",(e,r,t)=>{const n=s=>z(this,ve,Be).call(this,s,r,Cr("text/html; charset=UTF-8",t));return typeof e=="object"?na(e,ni.Stringify,!1,{}).then(n):n(e)});F(this,"redirect",(e,r)=>{const t=String(e);return this.header("Location",/[^\x00-\xFF]/.test(t)?encodeURI(t):t),this.newResponse(null,r??302)});F(this,"notFound",()=>(E(this,Ve)??B(this,Ve,()=>We()),E(this,Ve).call(this,this)));B(this,rr,e),r&&(B(this,he,r.executionCtx),this.env=r.env,B(this,Ve,r.notFoundHandler),B(this,ar,r.path),B(this,sr,r.matchResult))}get req(){return E(this,tr)??B(this,tr,new ea(E(this,rr),E(this,ar),E(this,sr))),E(this,tr)}get event(){if(E(this,he)&&"respondWith"in E(this,he))return E(this,he);throw Error("This context has no FetchEvent")}get executionCtx(){if(E(this,he))return E(this,he);throw Error("This context has no ExecutionContext")}get res(){return E(this,re)||B(this,re,We(null,{headers:E(this,$e)??B(this,$e,new Headers)}))}set res(e){if(E(this,re)&&e){e=We(e.body,e);for(const[r,t]of E(this,re).headers.entries())if(r!=="content-type")if(r==="set-cookie"){const n=E(this,re).headers.getSetCookie();e.headers.delete("set-cookie");for(const s of n)e.headers.append("set-cookie",s)}else e.headers.set(r,t)}B(this,re,e),this.finalized=!0}get var(){return E(this,xe)?Object.fromEntries(E(this,xe)):{}}},rr=new WeakMap,tr=new WeakMap,xe=new WeakMap,Ge=new WeakMap,he=new WeakMap,re=new WeakMap,nr=new WeakMap,He=new WeakMap,Ve=new WeakMap,$e=new WeakMap,sr=new WeakMap,ar=new WeakMap,ve=new WeakSet,Be=function(e,r,t){const n=E(this,re)?new Headers(E(this,re).headers):E(this,$e)??new Headers;if(typeof r=="object"&&"headers"in r){const a=r.headers instanceof Headers?r.headers:new Headers(r.headers);for(const[i,u]of a)i.toLowerCase()==="set-cookie"?n.append(i,u):n.set(i,u)}if(t)for(const[a,i]of Object.entries(t))if(typeof i=="string")n.set(a,i);else{n.delete(a);for(const u of i)n.append(a,u)}const s=typeof r=="number"?r:(r==null?void 0:r.status)??E(this,Ge);return We(e,{status:s,headers:n})},Vs),J="ALL",ii="all",oi=["get","post","put","delete","options","patch"],sa="Can not add a route since the matcher is already built.",aa=class extends Error{},ci="__COMPOSED_HANDLER",fi=e=>e.text("404 Not Found",404),pn=(e,r)=>{if("getResponse"in e){const t=e.getResponse();return r.newResponse(t.body,t)}return console.error(e),r.text("Internal Server Error",500)},ae,Y,ia,ie,Te,dr,xr,Ue,ui=(Ue=class{constructor(r={}){H(this,Y);F(this,"get");F(this,"post");F(this,"put");F(this,"delete");F(this,"options");F(this,"patch");F(this,"all");F(this,"on");F(this,"use");F(this,"router");F(this,"getPath");F(this,"_basePath","/");H(this,ae,"/");F(this,"routes",[]);H(this,ie,fi);F(this,"errorHandler",pn);F(this,"onError",r=>(this.errorHandler=r,this));F(this,"notFound",r=>(B(this,ie,r),this));F(this,"fetch",(r,...t)=>z(this,Y,xr).call(this,r,t[1],t[0],r.method));F(this,"request",(r,t,n,s)=>r instanceof Request?this.fetch(t?new Request(r,t):r,n,s):(r=r.toString(),this.fetch(new Request(/^https?:\/\//.test(r)?r:`http://localhost${De("/",r)}`,t),n,s)));F(this,"fire",()=>{addEventListener("fetch",r=>{r.respondWith(z(this,Y,xr).call(this,r.request,r,void 0,r.request.method))})});[...oi,ii].forEach(a=>{this[a]=(i,...u)=>(typeof i=="string"?B(this,ae,i):z(this,Y,Te).call(this,a,E(this,ae),i),u.forEach(c=>{z(this,Y,Te).call(this,a,E(this,ae),c)}),this)}),this.on=(a,i,...u)=>{for(const c of[i].flat()){B(this,ae,c);for(const f of[a].flat())u.map(o=>{z(this,Y,Te).call(this,f.toUpperCase(),E(this,ae),o)})}return this},this.use=(a,...i)=>(typeof a=="string"?B(this,ae,a):(B(this,ae,"*"),i.unshift(a)),i.forEach(u=>{z(this,Y,Te).call(this,J,E(this,ae),u)}),this);const{strict:n,...s}=r;Object.assign(this,s),this.getPath=n??!0?r.getPath??Js:ei}route(r,t){const n=this.basePath(r);return t.routes.map(s=>{var i;let a;t.errorHandler===pn?a=s.handler:(a=async(u,c)=>(await xn([],t.errorHandler)(u,()=>s.handler(u,c))).res,a[ci]=s.handler),z(i=n,Y,Te).call(i,s.method,s.path,a)}),this}basePath(r){const t=z(this,Y,ia).call(this);return t._basePath=De(this._basePath,r),t}mount(r,t,n){let s,a;n&&(typeof n=="function"?a=n:(a=n.optionHandler,n.replaceRequest===!1?s=c=>c:s=n.replaceRequest));const i=a?c=>{const f=a(c);return Array.isArray(f)?f:[f]}:c=>{let f;try{f=c.executionCtx}catch{}return[c.env,f]};s||(s=(()=>{const c=De(this._basePath,r),f=c==="/"?0:c.length;return o=>{const l=new URL(o.url);return l.pathname=l.pathname.slice(f)||"/",new Request(l,o)}})());const u=async(c,f)=>{const o=await t(s(c.req.raw),...i(c));if(o)return o;await f()};return z(this,Y,Te).call(this,J,De(r,"*"),u),this}},ae=new WeakMap,Y=new WeakSet,ia=function(){const r=new Ue({router:this.router,getPath:this.getPath});return r.errorHandler=this.errorHandler,B(r,ie,E(this,ie)),r.routes=this.routes,r},ie=new WeakMap,Te=function(r,t,n){r=r.toUpperCase(),t=De(this._basePath,t);const s={basePath:this._basePath,path:t,method:r,handler:n};this.router.add(r,t,[n,s]),this.routes.push(s)},dr=function(r,t){if(r instanceof Error)return this.errorHandler(r,t);throw r},xr=function(r,t,n,s){if(s==="HEAD")return(async()=>new Response(null,await z(this,Y,xr).call(this,r,t,n,"GET")))();const a=this.getPath(r,{env:n}),i=this.router.match(s,a),u=new ai(r,{path:a,matchResult:i,env:n,executionCtx:t,notFoundHandler:E(this,ie)});if(i[0].length===1){let f;try{f=i[0][0][0][0](u,async()=>{u.res=await E(this,ie).call(this,u)})}catch(o){return z(this,Y,dr).call(this,o,u)}return f instanceof Promise?f.then(o=>o||(u.finalized?u.res:E(this,ie).call(this,u))).catch(o=>z(this,Y,dr).call(this,o,u)):f??E(this,ie).call(this,u)}const c=xn(i[0],this.errorHandler,E(this,ie));return(async()=>{try{const f=await c(u);if(!f.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return f.res}catch(f){return z(this,Y,dr).call(this,f,u)}})()},Ue),oa=[];function li(e,r){const t=this.buildAllMatchers(),n=((s,a)=>{const i=t[s]||t[J],u=i[2][a];if(u)return u;const c=a.match(i[0]);if(!c)return[[],oa];const f=c.indexOf("",1);return[i[1][f],c]});return this.match=n,n(e,r)}var mr="[^/]+",Ye=".*",Ze="(?:|/.*)",Fe=Symbol(),di=new Set(".\\+*[^]$()");function xi(e,r){return e.length===1?r.length===1?e<r?-1:1:-1:r.length===1||e===Ye||e===Ze?1:r===Ye||r===Ze?-1:e===mr?1:r===mr?-1:e.length===r.length?e<r?-1:1:r.length-e.length}var Ce,je,oe,_e,hi=(_e=class{constructor(){H(this,Ce);H(this,je);H(this,oe,Object.create(null))}insert(r,t,n,s,a){if(r.length===0){if(E(this,Ce)!==void 0)throw Fe;if(a)return;B(this,Ce,t);return}const[i,...u]=r,c=i==="*"?u.length===0?["","",Ye]:["","",mr]:i==="/*"?["","",Ze]:i.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let f;if(c){const o=c[1];let l=c[2]||mr;if(o&&c[2]&&(l===".*"||(l=l.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(l))))throw Fe;if(f=E(this,oe)[l],!f){if(Object.keys(E(this,oe)).some(d=>d!==Ye&&d!==Ze))throw Fe;if(a)return;f=E(this,oe)[l]=new _e,o!==""&&B(f,je,s.varIndex++)}!a&&o!==""&&n.push([o,E(f,je)])}else if(f=E(this,oe)[i],!f){if(Object.keys(E(this,oe)).some(o=>o.length>1&&o!==Ye&&o!==Ze))throw Fe;if(a)return;f=E(this,oe)[i]=new _e}f.insert(u,t,n,s,a)}buildRegExpStr(){const t=Object.keys(E(this,oe)).sort(xi).map(n=>{const s=E(this,oe)[n];return(typeof E(s,je)=="number"?`(${n})@${E(s,je)}`:di.has(n)?`\\${n}`:n)+s.buildRegExpStr()});return typeof E(this,Ce)=="number"&&t.unshift(`#${E(this,Ce)}`),t.length===0?"":t.length===1?t[0]:"(?:"+t.join("|")+")"}},Ce=new WeakMap,je=new WeakMap,oe=new WeakMap,_e),gr,ir,Us,pi=(Us=class{constructor(){H(this,gr,{varIndex:0});H(this,ir,new hi)}insert(e,r,t){const n=[],s=[];for(let i=0;;){let u=!1;if(e=e.replace(/\{[^}]+\}/g,c=>{const f=`@\\${i}`;return s[i]=[f,c],i++,u=!0,f}),!u)break}const a=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let i=s.length-1;i>=0;i--){const[u]=s[i];for(let c=a.length-1;c>=0;c--)if(a[c].indexOf(u)!==-1){a[c]=a[c].replace(u,s[i][1]);break}}return E(this,ir).insert(a,r,n,E(this,gr),t),n}buildRegExp(){let e=E(this,ir).buildRegExpStr();if(e==="")return[/^$/,[],[]];let r=0;const t=[],n=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(s,a,i)=>a!==void 0?(t[++r]=Number(a),"$()"):(i!==void 0&&(n[Number(i)]=++r),"")),[new RegExp(`^${e}`),t,n]}},gr=new WeakMap,ir=new WeakMap,Us),mi=[/^$/,[],Object.create(null)],hr=Object.create(null);function ca(e){return hr[e]??(hr[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(r,t)=>t?`\\${t}`:"(?:|/.*)")}$`))}function bi(){hr=Object.create(null)}function gi(e){var f;const r=new pi,t=[];if(e.length===0)return mi;const n=e.map(o=>[!/\*|\/:/.test(o[0]),...o]).sort(([o,l],[d,y])=>o?1:d?-1:l.length-y.length),s=Object.create(null);for(let o=0,l=-1,d=n.length;o<d;o++){const[y,b,g]=n[o];y?s[b]=[g.map(([x])=>[x,Object.create(null)]),oa]:l++;let A;try{A=r.insert(b,l,y)}catch(x){throw x===Fe?new aa(b):x}y||(t[l]=g.map(([x,p])=>{const m=Object.create(null);for(p-=1;p>=0;p--){const[R,N]=A[p];m[R]=N}return[x,m]}))}const[a,i,u]=r.buildRegExp();for(let o=0,l=t.length;o<l;o++)for(let d=0,y=t[o].length;d<y;d++){const b=(f=t[o][d])==null?void 0:f[1];if(!b)continue;const g=Object.keys(b);for(let A=0,x=g.length;A<x;A++)b[g[A]]=u[b[g[A]]]}const c=[];for(const o in i)c[o]=t[i[o]];return[a,c,s]}function Pe(e,r){if(e){for(const t of Object.keys(e).sort((n,s)=>s.length-n.length))if(ca(t).test(r))return[...e[t]]}}var Ee,we,yr,fa,zs,yi=(zs=class{constructor(){H(this,yr);F(this,"name","RegExpRouter");H(this,Ee);H(this,we);F(this,"match",li);B(this,Ee,{[J]:Object.create(null)}),B(this,we,{[J]:Object.create(null)})}add(e,r,t){var u;const n=E(this,Ee),s=E(this,we);if(!n||!s)throw new Error(sa);n[e]||[n,s].forEach(c=>{c[e]=Object.create(null),Object.keys(c[J]).forEach(f=>{c[e][f]=[...c[J][f]]})}),r==="/*"&&(r="*");const a=(r.match(/\/:/g)||[]).length;if(/\*$/.test(r)){const c=ca(r);e===J?Object.keys(n).forEach(f=>{var o;(o=n[f])[r]||(o[r]=Pe(n[f],r)||Pe(n[J],r)||[])}):(u=n[e])[r]||(u[r]=Pe(n[e],r)||Pe(n[J],r)||[]),Object.keys(n).forEach(f=>{(e===J||e===f)&&Object.keys(n[f]).forEach(o=>{c.test(o)&&n[f][o].push([t,a])})}),Object.keys(s).forEach(f=>{(e===J||e===f)&&Object.keys(s[f]).forEach(o=>c.test(o)&&s[f][o].push([t,a]))});return}const i=Ys(r)||[r];for(let c=0,f=i.length;c<f;c++){const o=i[c];Object.keys(s).forEach(l=>{var d;(e===J||e===l)&&((d=s[l])[o]||(d[o]=[...Pe(n[l],o)||Pe(n[J],o)||[]]),s[l][o].push([t,a-f+c+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(E(this,we)).concat(Object.keys(E(this,Ee))).forEach(r=>{e[r]||(e[r]=z(this,yr,fa).call(this,r))}),B(this,Ee,B(this,we,void 0)),bi(),e}},Ee=new WeakMap,we=new WeakMap,yr=new WeakSet,fa=function(e){const r=[];let t=e===J;return[E(this,Ee),E(this,we)].forEach(n=>{const s=n[e]?Object.keys(n[e]).map(a=>[a,n[e][a]]):[];s.length!==0?(t||(t=!0),r.push(...s)):e!==J&&r.push(...Object.keys(n[J]).map(a=>[a,n[J][a]]))}),t?gi(r):null},zs),Re,pe,Ks,vi=(Ks=class{constructor(e){F(this,"name","SmartRouter");H(this,Re,[]);H(this,pe,[]);B(this,Re,e.routers)}add(e,r,t){if(!E(this,pe))throw new Error(sa);E(this,pe).push([e,r,t])}match(e,r){if(!E(this,pe))throw new Error("Fatal error");const t=E(this,Re),n=E(this,pe),s=t.length;let a=0,i;for(;a<s;a++){const u=t[a];try{for(let c=0,f=n.length;c<f;c++)u.add(...n[c]);i=u.match(e,r)}catch(c){if(c instanceof aa)continue;throw c}this.match=u.match.bind(u),B(this,Re,[u]),B(this,pe,void 0);break}if(a===s)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,i}get activeRouter(){if(E(this,pe)||E(this,Re).length!==1)throw new Error("No active router has been determined yet.");return E(this,Re)[0]}},Re=new WeakMap,pe=new WeakMap,Ks),Je=Object.create(null),Ei=e=>{for(const r in e)return!0;return!1},Se,Q,Le,ze,Z,me,Oe,Ke,wi=(Ke=class{constructor(r,t,n){H(this,me);H(this,Se);H(this,Q);H(this,Le);H(this,ze,0);H(this,Z,Je);if(B(this,Q,n||Object.create(null)),B(this,Se,[]),r&&t){const s=Object.create(null);s[r]={handler:t,possibleKeys:[],score:0},B(this,Se,[s])}B(this,Le,[])}insert(r,t,n){B(this,ze,++dn(this,ze)._);let s=this;const a=Wa(t),i=[];for(let u=0,c=a.length;u<c;u++){const f=a[u],o=a[u+1],l=Za(f,o),d=Array.isArray(l)?l[0]:f;if(d in E(s,Q)){s=E(s,Q)[d],l&&i.push(l[1]);continue}E(s,Q)[d]=new Ke,l&&(E(s,Le).push(l),i.push(l[1])),s=E(s,Q)[d]}return E(s,Se).push({[r]:{handler:n,possibleKeys:i.filter((u,c,f)=>f.indexOf(u)===c),score:E(this,ze)}}),s}search(r,t){var o;const n=[];B(this,Z,Je);let a=[this];const i=Ws(t),u=[],c=i.length;let f=null;for(let l=0;l<c;l++){const d=i[l],y=l===c-1,b=[];for(let A=0,x=a.length;A<x;A++){const p=a[A],m=E(p,Q)[d];m&&(B(m,Z,E(p,Z)),y?(E(m,Q)["*"]&&z(this,me,Oe).call(this,n,E(m,Q)["*"],r,E(p,Z)),z(this,me,Oe).call(this,n,m,r,E(p,Z))):b.push(m));for(let R=0,N=E(p,Le).length;R<N;R++){const I=E(p,Le)[R],C=E(p,Z)===Je?{}:{...E(p,Z)};if(I==="*"){const V=E(p,Q)["*"];V&&(z(this,me,Oe).call(this,n,V,r,E(p,Z)),B(V,Z,C),b.push(V));continue}const[S,_,q]=I;if(!d&&!(q instanceof RegExp))continue;const P=E(p,Q)[S];if(q instanceof RegExp){if(f===null){f=new Array(c);let w=t[0]==="/"?1:0;for(let h=0;h<c;h++)f[h]=w,w+=i[h].length+1}const V=t.substring(f[l]),T=q.exec(V);if(T){if(C[_]=T[0],z(this,me,Oe).call(this,n,P,r,E(p,Z),C),Ei(E(P,Q))){B(P,Z,C);const w=((o=T[0].match(/\//))==null?void 0:o.length)??0;(u[w]||(u[w]=[])).push(P)}continue}}(q===!0||q.test(d))&&(C[_]=d,y?(z(this,me,Oe).call(this,n,P,r,C,E(p,Z)),E(P,Q)["*"]&&z(this,me,Oe).call(this,n,E(P,Q)["*"],r,C,E(p,Z))):(B(P,Z,C),b.push(P)))}}const g=u.shift();a=g?b.concat(g):b}return n.length>1&&n.sort((l,d)=>l.score-d.score),[n.map(({handler:l,params:d})=>[l,d])]}},Se=new WeakMap,Q=new WeakMap,Le=new WeakMap,ze=new WeakMap,Z=new WeakMap,me=new WeakSet,Oe=function(r,t,n,s,a){for(let i=0,u=E(t,Se).length;i<u;i++){const c=E(t,Se)[i],f=c[n]||c[J],o={};if(f!==void 0&&(f.params=Object.create(null),r.push(f),s!==Je||a&&a!==Je))for(let l=0,d=f.possibleKeys.length;l<d;l++){const y=f.possibleKeys[l],b=o[f.score];f.params[y]=a!=null&&a[y]&&!b?a[y]:s[y]??(a==null?void 0:a[y]),o[f.score]=!0}}},Ke),Ne,Xs,Ri=(Xs=class{constructor(){F(this,"name","TrieRouter");H(this,Ne);B(this,Ne,new wi)}add(e,r,t){const n=Ys(r);if(n){for(let s=0,a=n.length;s<a;s++)E(this,Ne).insert(e,n[s],t);return}E(this,Ne).insert(e,r,t)}match(e,r){return E(this,Ne).search(e,r)}},Ne=new WeakMap,Xs),ua=class extends ui{constructor(e={}){super(e),this.router=e.router??new vi({routers:[new yi,new Ri]})}},Si=e=>{const t={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},n=(a=>typeof a=="string"?a==="*"?()=>a:i=>a===i?i:null:typeof a=="function"?a:i=>a.includes(i)?i:null)(t.origin),s=(a=>typeof a=="function"?a:Array.isArray(a)?()=>a:()=>[])(t.allowMethods);return async function(i,u){var o;function c(l,d){i.res.headers.set(l,d)}const f=await n(i.req.header("origin")||"",i);if(f&&c("Access-Control-Allow-Origin",f),t.credentials&&c("Access-Control-Allow-Credentials","true"),(o=t.exposeHeaders)!=null&&o.length&&c("Access-Control-Expose-Headers",t.exposeHeaders.join(",")),i.req.method==="OPTIONS"){t.origin!=="*"&&c("Vary","Origin"),t.maxAge!=null&&c("Access-Control-Max-Age",t.maxAge.toString());const l=await s(i.req.header("origin")||"",i);l.length&&c("Access-Control-Allow-Methods",l.join(","));let d=t.allowHeaders;if(!(d!=null&&d.length)){const y=i.req.header("Access-Control-Request-Headers");y&&(d=y.split(/\s*,\s*/))}return d!=null&&d.length&&(c("Access-Control-Allow-Headers",d.join(",")),i.res.headers.append("Vary","Access-Control-Request-Headers")),i.res.headers.delete("Content-Length"),i.res.headers.delete("Content-Type"),new Response(null,{headers:i.res.headers,status:204,statusText:"No Content"})}await u(),t.origin!=="*"&&i.header("Vary","Origin",{append:!0})}},Ai=/^\s*(?:text\/(?!event-stream(?:[;\s]|$))[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i,mn=(e,r=Ti)=>{const t=/\.([a-zA-Z0-9]+?)$/,n=e.match(t);if(!n)return;let s=r[n[1]];return s&&s.startsWith("text")&&(s+="; charset=utf-8"),s},Ii={aac:"audio/aac",avi:"video/x-msvideo",avif:"image/avif",av1:"video/av1",bin:"application/octet-stream",bmp:"image/bmp",css:"text/css",csv:"text/csv",eot:"application/vnd.ms-fontobject",epub:"application/epub+zip",gif:"image/gif",gz:"application/gzip",htm:"text/html",html:"text/html",ico:"image/x-icon",ics:"text/calendar",jpeg:"image/jpeg",jpg:"image/jpeg",js:"text/javascript",json:"application/json",jsonld:"application/ld+json",map:"application/json",mid:"audio/x-midi",midi:"audio/x-midi",mjs:"text/javascript",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",oga:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",opus:"audio/opus",otf:"font/otf",pdf:"application/pdf",png:"image/png",rtf:"application/rtf",svg:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",ttf:"font/ttf",txt:"text/plain",wasm:"application/wasm",webm:"video/webm",weba:"audio/webm",webmanifest:"application/manifest+json",webp:"image/webp",woff:"font/woff",woff2:"font/woff2",xhtml:"application/xhtml+xml",xml:"application/xml",zip:"application/zip","3gp":"video/3gpp","3g2":"video/3gpp2",gltf:"model/gltf+json",glb:"model/gltf-binary"},Ti=Ii,Oi=(...e)=>{let r=e.filter(s=>s!=="").join("/");r=r.replace(new RegExp("(?<=\\/)\\/+","g"),"");const t=r.split("/"),n=[];for(const s of t)s===".."&&n.length>0&&n.at(-1)!==".."?n.pop():s!=="."&&n.push(s);return n.join("/")||"."},la={br:".br",zstd:".zst",gzip:".gz"},$i=Object.keys(la),Ci="index.html",ji=e=>{const r=e.root??"./",t=e.path,n=e.join??Oi;return async(s,a)=>{var o,l,d,y;if(s.finalized)return a();let i;if(e.path)i=e.path;else try{if(i=decodeURIComponent(s.req.path),/(?:^|[\/\\])\.\.(?:$|[\/\\])/.test(i))throw new Error}catch{return await((o=e.onNotFound)==null?void 0:o.call(e,s.req.path,s)),a()}let u=n(r,!t&&e.rewriteRequestPath?e.rewriteRequestPath(i):i);e.isDir&&await e.isDir(u)&&(u=n(u,Ci));const c=e.getContent;let f=await c(u,s);if(f instanceof Response)return s.newResponse(f.body,f);if(f){const b=e.mimes&&mn(u,e.mimes)||mn(u);if(s.header("Content-Type",b||"application/octet-stream"),e.precompressed&&(!b||Ai.test(b))){const g=new Set((l=s.req.header("Accept-Encoding"))==null?void 0:l.split(",").map(A=>A.trim()));for(const A of $i){if(!g.has(A))continue;const x=await c(u+la[A],s);if(x){f=x,s.header("Content-Encoding",A),s.header("Vary","Accept-Encoding",{append:!0});break}}}return await((d=e.onFound)==null?void 0:d.call(e,u,s)),s.body(f)}await((y=e.onNotFound)==null?void 0:y.call(e,u,s)),await a()}},Li=async(e,r)=>{let t;r&&r.manifest?typeof r.manifest=="string"?t=JSON.parse(r.manifest):t=r.manifest:typeof __STATIC_CONTENT_MANIFEST=="string"?t=JSON.parse(__STATIC_CONTENT_MANIFEST):t=__STATIC_CONTENT_MANIFEST;let n;r&&r.namespace?n=r.namespace:n=__STATIC_CONTENT;const s=t[e];if(!s)return null;const a=await n.get(s,{type:"stream"});return a||null},Ni=e=>async function(t,n){return ji({...e,getContent:async a=>Li(a,{manifest:e.manifest,namespace:e.namespace?e.namespace:t.env?t.env.__STATIC_CONTENT:void 0})})(t,n)},_i=e=>Ni(e),Jt=null;function Pi(e){try{return crypto.getRandomValues(new Uint8Array(e))}catch{}try{return vr.randomBytes(e)}catch{}if(!Jt)throw Error("Neither WebCryptoAPI nor a crypto module is available. Use bcrypt.setRandomFallback to set an alternative");return Jt(e)}function qi(e){Jt=e}function en(e,r){if(e=e||rn,typeof e!="number")throw Error("Illegal arguments: "+typeof e+", "+typeof r);e<4?e=4:e>31&&(e=31);var t=[];return t.push("$2b$"),e<10&&t.push("0"),t.push(e.toString()),t.push("$"),t.push(br(Pi(Qe),Qe)),t.join("")}function da(e,r,t){if(typeof r=="function"&&(t=r,r=void 0),typeof e=="function"&&(t=e,e=void 0),typeof e>"u")e=rn;else if(typeof e!="number")throw Error("illegal arguments: "+typeof e);function n(s){ce(function(){try{s(null,en(e))}catch(a){s(a)}})}if(t){if(typeof t!="function")throw Error("Illegal callback: "+typeof t);n(t)}else return new Promise(function(s,a){n(function(i,u){if(i){a(i);return}s(u)})})}function xa(e,r){if(typeof r>"u"&&(r=rn),typeof r=="number"&&(r=en(r)),typeof e!="string"||typeof r!="string")throw Error("Illegal arguments: "+typeof e+", "+typeof r);return Yt(e,r)}function ha(e,r,t,n){function s(a){typeof e=="string"&&typeof r=="number"?da(r,function(i,u){Yt(e,u,a,n)}):typeof e=="string"&&typeof r=="string"?Yt(e,r,a,n):ce(a.bind(this,Error("Illegal arguments: "+typeof e+", "+typeof r)))}if(t){if(typeof t!="function")throw Error("Illegal callback: "+typeof t);s(t)}else return new Promise(function(a,i){s(function(u,c){if(u){i(u);return}a(c)})})}function pa(e,r){for(var t=e.length^r.length,n=0;n<e.length;++n)t|=e.charCodeAt(n)^r.charCodeAt(n);return t===0}function Di(e,r){if(typeof e!="string"||typeof r!="string")throw Error("Illegal arguments: "+typeof e+", "+typeof r);return r.length!==60?!1:pa(xa(e,r.substring(0,r.length-31)),r)}function Bi(e,r,t,n){function s(a){if(typeof e!="string"||typeof r!="string"){ce(a.bind(this,Error("Illegal arguments: "+typeof e+", "+typeof r)));return}if(r.length!==60){ce(a.bind(this,null,!1));return}ha(e,r.substring(0,29),function(i,u){i?a(i):a(null,pa(u,r))},n)}if(t){if(typeof t!="function")throw Error("Illegal callback: "+typeof t);s(t)}else return new Promise(function(a,i){s(function(u,c){if(u){i(u);return}a(c)})})}function Fi(e){if(typeof e!="string")throw Error("Illegal arguments: "+typeof e);return parseInt(e.split("$")[2],10)}function Mi(e){if(typeof e!="string")throw Error("Illegal arguments: "+typeof e);if(e.length!==60)throw Error("Illegal hash length: "+e.length+" != 60");return e.substring(0,29)}function ki(e){if(typeof e!="string")throw Error("Illegal arguments: "+typeof e);return ma(e)>72}var ce=typeof setImmediate=="function"?setImmediate:typeof scheduler=="object"&&typeof scheduler.postTask=="function"?scheduler.postTask.bind(scheduler):setTimeout;function ma(e){for(var r=0,t=0,n=0;n<e.length;++n)t=e.charCodeAt(n),t<128?r+=1:t<2048?r+=2:(t&64512)===55296&&(e.charCodeAt(n+1)&64512)===56320?(++n,r+=4):r+=3;return r}function Gi(e){for(var r=0,t,n,s=new Array(ma(e)),a=0,i=e.length;a<i;++a)t=e.charCodeAt(a),t<128?s[r++]=t:t<2048?(s[r++]=t>>6|192,s[r++]=t&63|128):(t&64512)===55296&&((n=e.charCodeAt(a+1))&64512)===56320?(t=65536+((t&1023)<<10)+(n&1023),++a,s[r++]=t>>18|240,s[r++]=t>>12&63|128,s[r++]=t>>6&63|128,s[r++]=t&63|128):(s[r++]=t>>12|224,s[r++]=t>>6&63|128,s[r++]=t&63|128);return s}var qe="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),ge=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,54,55,56,57,58,59,60,61,62,63,-1,-1,-1,-1,-1,-1,-1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,-1,-1,-1,-1,-1,-1,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,-1,-1,-1,-1,-1];function br(e,r){var t=0,n=[],s,a;if(r<=0||r>e.length)throw Error("Illegal len: "+r);for(;t<r;){if(s=e[t++]&255,n.push(qe[s>>2&63]),s=(s&3)<<4,t>=r){n.push(qe[s&63]);break}if(a=e[t++]&255,s|=a>>4&15,n.push(qe[s&63]),s=(a&15)<<2,t>=r){n.push(qe[s&63]);break}a=e[t++]&255,s|=a>>6&3,n.push(qe[s&63]),n.push(qe[a&63])}return n.join("")}function ba(e,r){var t=0,n=e.length,s=0,a=[],i,u,c,f,o,l;if(r<=0)throw Error("Illegal len: "+r);for(;t<n-1&&s<r&&(l=e.charCodeAt(t++),i=l<ge.length?ge[l]:-1,l=e.charCodeAt(t++),u=l<ge.length?ge[l]:-1,!(i==-1||u==-1||(o=i<<2>>>0,o|=(u&48)>>4,a.push(String.fromCharCode(o)),++s>=r||t>=n)||(l=e.charCodeAt(t++),c=l<ge.length?ge[l]:-1,c==-1)||(o=(u&15)<<4>>>0,o|=(c&60)>>2,a.push(String.fromCharCode(o)),++s>=r||t>=n)));)l=e.charCodeAt(t++),f=l<ge.length?ge[l]:-1,o=(c&3)<<6>>>0,o|=f,a.push(String.fromCharCode(o)),++s;var d=[];for(t=0;t<s;t++)d.push(a[t].charCodeAt(0));return d}var Qe=16,rn=10,Hi=16,Vi=100,bn=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],gn=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],ga=[1332899944,1700884034,1701343084,1684370003,1668446532,1869963892];function er(e,r,t,n){var s,a=e[r],i=e[r+1];return a^=t[0],s=n[a>>>24],s+=n[256|a>>16&255],s^=n[512|a>>8&255],s+=n[768|a&255],i^=s^t[1],s=n[i>>>24],s+=n[256|i>>16&255],s^=n[512|i>>8&255],s+=n[768|i&255],a^=s^t[2],s=n[a>>>24],s+=n[256|a>>16&255],s^=n[512|a>>8&255],s+=n[768|a&255],i^=s^t[3],s=n[i>>>24],s+=n[256|i>>16&255],s^=n[512|i>>8&255],s+=n[768|i&255],a^=s^t[4],s=n[a>>>24],s+=n[256|a>>16&255],s^=n[512|a>>8&255],s+=n[768|a&255],i^=s^t[5],s=n[i>>>24],s+=n[256|i>>16&255],s^=n[512|i>>8&255],s+=n[768|i&255],a^=s^t[6],s=n[a>>>24],s+=n[256|a>>16&255],s^=n[512|a>>8&255],s+=n[768|a&255],i^=s^t[7],s=n[i>>>24],s+=n[256|i>>16&255],s^=n[512|i>>8&255],s+=n[768|i&255],a^=s^t[8],s=n[a>>>24],s+=n[256|a>>16&255],s^=n[512|a>>8&255],s+=n[768|a&255],i^=s^t[9],s=n[i>>>24],s+=n[256|i>>16&255],s^=n[512|i>>8&255],s+=n[768|i&255],a^=s^t[10],s=n[a>>>24],s+=n[256|a>>16&255],s^=n[512|a>>8&255],s+=n[768|a&255],i^=s^t[11],s=n[i>>>24],s+=n[256|i>>16&255],s^=n[512|i>>8&255],s+=n[768|i&255],a^=s^t[12],s=n[a>>>24],s+=n[256|a>>16&255],s^=n[512|a>>8&255],s+=n[768|a&255],i^=s^t[13],s=n[i>>>24],s+=n[256|i>>16&255],s^=n[512|i>>8&255],s+=n[768|i&255],a^=s^t[14],s=n[a>>>24],s+=n[256|a>>16&255],s^=n[512|a>>8&255],s+=n[768|a&255],i^=s^t[15],s=n[i>>>24],s+=n[256|i>>16&255],s^=n[512|i>>8&255],s+=n[768|i&255],a^=s^t[16],e[r]=i^t[Hi+1],e[r+1]=a,e}function Me(e,r){for(var t=0,n=0;t<4;++t)n=n<<8|e[r]&255,r=(r+1)%e.length;return{key:n,offp:r}}function yn(e,r,t){for(var n=0,s=[0,0],a=r.length,i=t.length,u,c=0;c<a;c++)u=Me(e,n),n=u.offp,r[c]=r[c]^u.key;for(c=0;c<a;c+=2)s=er(s,0,r,t),r[c]=s[0],r[c+1]=s[1];for(c=0;c<i;c+=2)s=er(s,0,r,t),t[c]=s[0],t[c+1]=s[1]}function Ui(e,r,t,n){for(var s=0,a=[0,0],i=t.length,u=n.length,c,f=0;f<i;f++)c=Me(r,s),s=c.offp,t[f]=t[f]^c.key;for(s=0,f=0;f<i;f+=2)c=Me(e,s),s=c.offp,a[0]^=c.key,c=Me(e,s),s=c.offp,a[1]^=c.key,a=er(a,0,t,n),t[f]=a[0],t[f+1]=a[1];for(f=0;f<u;f+=2)c=Me(e,s),s=c.offp,a[0]^=c.key,c=Me(e,s),s=c.offp,a[1]^=c.key,a=er(a,0,t,n),n[f]=a[0],n[f+1]=a[1]}function vn(e,r,t,n,s){var a=ga.slice(),i=a.length,u;if(t<4||t>31)if(u=Error("Illegal number of rounds (4-31): "+t),n){ce(n.bind(this,u));return}else throw u;if(r.length!==Qe)if(u=Error("Illegal salt length: "+r.length+" != "+Qe),n){ce(n.bind(this,u));return}else throw u;t=1<<t>>>0;var c,f,o=0,l;typeof Int32Array=="function"?(c=new Int32Array(bn),f=new Int32Array(gn)):(c=bn.slice(),f=gn.slice()),Ui(r,e,c,f);function d(){if(s&&s(o/t),o<t)for(var b=Date.now();o<t&&(o=o+1,yn(e,c,f),yn(r,c,f),!(Date.now()-b>Vi)););else{for(o=0;o<64;o++)for(l=0;l<i>>1;l++)er(a,l<<1,c,f);var g=[];for(o=0;o<i;o++)g.push((a[o]>>24&255)>>>0),g.push((a[o]>>16&255)>>>0),g.push((a[o]>>8&255)>>>0),g.push((a[o]&255)>>>0);if(n){n(null,g);return}else return g}n&&ce(d)}if(typeof n<"u")d();else for(var y;;)if(typeof(y=d())<"u")return y||[]}function Yt(e,r,t,n){var s;if(typeof e!="string"||typeof r!="string")if(s=Error("Invalid string / salt: Not a string"),t){ce(t.bind(this,s));return}else throw s;var a,i;if(r.charAt(0)!=="$"||r.charAt(1)!=="2")if(s=Error("Invalid salt version: "+r.substring(0,2)),t){ce(t.bind(this,s));return}else throw s;if(r.charAt(2)==="$")a="\0",i=3;else{if(a=r.charAt(2),a!=="a"&&a!=="b"&&a!=="y"||r.charAt(3)!=="$")if(s=Error("Invalid salt revision: "+r.substring(2,4)),t){ce(t.bind(this,s));return}else throw s;i=4}if(r.charAt(i+2)>"$")if(s=Error("Missing salt rounds"),t){ce(t.bind(this,s));return}else throw s;var u=parseInt(r.substring(i,i+1),10)*10,c=parseInt(r.substring(i+1,i+2),10),f=u+c,o=r.substring(i+3,i+25);e+=a>="a"?"\0":"";var l=Gi(e),d=ba(o,Qe);function y(b){var g=[];return g.push("$2"),a>="a"&&g.push(a),g.push("$"),f<10&&g.push("0"),g.push(f.toString()),g.push("$"),g.push(br(d,d.length)),g.push(br(b,ga.length*4-1)),g.join("")}if(typeof t>"u")return y(vn(l,d,f));vn(l,d,f,function(b,g){b?t(b,null):t(null,y(g))},n)}function zi(e,r){return br(e,r)}function Ki(e,r){return ba(e,r)}const Xi={setRandomFallback:qi,genSaltSync:en,genSalt:da,hashSync:xa,hash:ha,compareSync:Di,compare:Bi,getRounds:Fi,getSalt:Mi,truncates:ki,encodeBase64:zi,decodeBase64:Ki};function Wi(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var de={},ur={exports:{}};/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */var En;function or(){return En||(En=1,(function(e,r){var t=pr,n=t.Buffer;function s(i,u){for(var c in i)u[c]=i[c]}n.from&&n.alloc&&n.allocUnsafe&&n.allocUnsafeSlow?e.exports=t:(s(t,r),r.Buffer=a);function a(i,u,c){return n(i,u,c)}a.prototype=Object.create(n.prototype),s(n,a),a.from=function(i,u,c){if(typeof i=="number")throw new TypeError("Argument must not be a number");return n(i,u,c)},a.alloc=function(i,u,c){if(typeof i!="number")throw new TypeError("Argument must be a number");var f=n(i);return u!==void 0?typeof c=="string"?f.fill(u,c):f.fill(u):f.fill(0),f},a.allocUnsafe=function(i){if(typeof i!="number")throw new TypeError("Argument must be a number");return n(i)},a.allocUnsafeSlow=function(i){if(typeof i!="number")throw new TypeError("Argument must be a number");return t.SlowBuffer(i)}})(ur,ur.exports)),ur.exports}var jr,wn;function ya(){if(wn)return jr;wn=1;var e=or().Buffer,r=Zt,t=Er;function n(s){if(this.buffer=null,this.writable=!0,this.readable=!0,!s)return this.buffer=e.alloc(0),this;if(typeof s.pipe=="function")return this.buffer=e.alloc(0),s.pipe(this),this;if(s.length||typeof s=="object")return this.buffer=s,this.writable=!1,process.nextTick((function(){this.emit("end",s),this.readable=!1,this.emit("close")}).bind(this)),this;throw new TypeError("Unexpected data type ("+typeof s+")")}return t.inherits(n,r),n.prototype.write=function(a){this.buffer=e.concat([this.buffer,e.from(a)]),this.emit("data",a)},n.prototype.end=function(a){a&&this.write(a),this.emit("end",a),this.emit("close"),this.writable=!1,this.readable=!1},jr=n,jr}var Lr,Rn;function Ji(){if(Rn)return Lr;Rn=1;function e(n){var s=(n/8|0)+(n%8===0?0:1);return s}var r={ES256:e(256),ES384:e(384),ES512:e(521)};function t(n){var s=r[n];if(s)return s;throw new Error('Unknown algorithm "'+n+'"')}return Lr=t,Lr}var Nr,Sn;function Yi(){if(Sn)return Nr;Sn=1;var e=or().Buffer,r=Ji(),t=128,n=0,s=32,a=16,i=2,u=a|s|n<<6,c=i|n<<6;function f(b){return b.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function o(b){if(e.isBuffer(b))return b;if(typeof b=="string")return e.from(b,"base64");throw new TypeError("ECDSA signature must be a Base64 string or a Buffer")}function l(b,g){b=o(b);var A=r(g),x=A+1,p=b.length,m=0;if(b[m++]!==u)throw new Error('Could not find expected "seq"');var R=b[m++];if(R===(t|1)&&(R=b[m++]),p-m<R)throw new Error('"seq" specified length of "'+R+'", only "'+(p-m)+'" remaining');if(b[m++]!==c)throw new Error('Could not find expected "int" for "r"');var N=b[m++];if(p-m-2<N)throw new Error('"r" specified length of "'+N+'", only "'+(p-m-2)+'" available');if(x<N)throw new Error('"r" specified length of "'+N+'", max of "'+x+'" is acceptable');var I=m;if(m+=N,b[m++]!==c)throw new Error('Could not find expected "int" for "s"');var C=b[m++];if(p-m!==C)throw new Error('"s" specified length of "'+C+'", expected "'+(p-m)+'"');if(x<C)throw new Error('"s" specified length of "'+C+'", max of "'+x+'" is acceptable');var S=m;if(m+=C,m!==p)throw new Error('Expected to consume entire buffer, but "'+(p-m)+'" bytes remain');var _=A-N,q=A-C,P=e.allocUnsafe(_+N+q+C);for(m=0;m<_;++m)P[m]=0;b.copy(P,m,I+Math.max(-_,0),I+N),m=A;for(var V=m;m<V+q;++m)P[m]=0;return b.copy(P,m,S+Math.max(-q,0),S+C),P=P.toString("base64"),P=f(P),P}function d(b,g,A){for(var x=0;g+x<A&&b[g+x]===0;)++x;var p=b[g+x]>=t;return p&&--x,x}function y(b,g){b=o(b);var A=r(g),x=b.length;if(x!==A*2)throw new TypeError('"'+g+'" signatures must be "'+A*2+'" bytes, saw "'+x+'"');var p=d(b,0,A),m=d(b,A,b.length),R=A-p,N=A-m,I=2+R+1+1+N,C=I<t,S=e.allocUnsafe((C?2:3)+I),_=0;return S[_++]=u,C?S[_++]=I:(S[_++]=t|1,S[_++]=I&255),S[_++]=c,S[_++]=R,p<0?(S[_++]=0,_+=b.copy(S,_,0,A)):_+=b.copy(S,_,p,A),S[_++]=c,S[_++]=N,m<0?(S[_++]=0,b.copy(S,_,A)):b.copy(S,_,A+m),S}return Nr={derToJose:l,joseToDer:y},Nr}var _r,An;function Zi(){if(An)return _r;An=1;var e=pr.Buffer,r=pr.SlowBuffer;_r=t;function t(a,i){if(!e.isBuffer(a)||!e.isBuffer(i)||a.length!==i.length)return!1;for(var u=0,c=0;c<a.length;c++)u|=a[c]^i[c];return u===0}t.install=function(){e.prototype.equal=r.prototype.equal=function(i){return t(this,i)}};var n=e.prototype.equal,s=r.prototype.equal;return t.restore=function(){e.prototype.equal=n,r.prototype.equal=s},_r}var Pr,In;function va(){if(In)return Pr;In=1;var e=or().Buffer,r=vr,t=Yi(),n=Er,s=`"%s" is not a valid algorithm.
  Supported algorithms are:
  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".`,a="secret must be a string or buffer",i="key must be a string or a buffer",u="key must be a string, a buffer or an object",c=typeof r.createPublicKey=="function";c&&(i+=" or a KeyObject",a+="or a KeyObject");function f(T){if(!e.isBuffer(T)&&typeof T!="string"&&(!c||typeof T!="object"||typeof T.type!="string"||typeof T.asymmetricKeyType!="string"||typeof T.export!="function"))throw b(i)}function o(T){if(!e.isBuffer(T)&&typeof T!="string"&&typeof T!="object")throw b(u)}function l(T){if(!e.isBuffer(T)){if(typeof T=="string")return T;if(!c||typeof T!="object"||T.type!=="secret"||typeof T.export!="function")throw b(a)}}function d(T){return T.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function y(T){T=T.toString();var w=4-T.length%4;if(w!==4)for(var h=0;h<w;++h)T+="=";return T.replace(/\-/g,"+").replace(/_/g,"/")}function b(T){var w=[].slice.call(arguments,1),h=n.format.bind(n,T).apply(null,w);return new TypeError(h)}function g(T){return e.isBuffer(T)||typeof T=="string"}function A(T){return g(T)||(T=JSON.stringify(T)),T}function x(T){return function(h,O){l(O),h=A(h);var $=r.createHmac("sha"+T,O),j=($.update(h),$.digest("base64"));return d(j)}}var p,m="timingSafeEqual"in r?function(w,h){return w.byteLength!==h.byteLength?!1:r.timingSafeEqual(w,h)}:function(w,h){return p||(p=Zi()),p(w,h)};function R(T){return function(h,O,$){var j=x(T)(h,$);return m(e.from(O),e.from(j))}}function N(T){return function(h,O){o(O),h=A(h);var $=r.createSign("RSA-SHA"+T),j=($.update(h),$.sign(O,"base64"));return d(j)}}function I(T){return function(h,O,$){f($),h=A(h),O=y(O);var j=r.createVerify("RSA-SHA"+T);return j.update(h),j.verify($,O,"base64")}}function C(T){return function(h,O){o(O),h=A(h);var $=r.createSign("RSA-SHA"+T),j=($.update(h),$.sign({key:O,padding:r.constants.RSA_PKCS1_PSS_PADDING,saltLength:r.constants.RSA_PSS_SALTLEN_DIGEST},"base64"));return d(j)}}function S(T){return function(h,O,$){f($),h=A(h),O=y(O);var j=r.createVerify("RSA-SHA"+T);return j.update(h),j.verify({key:$,padding:r.constants.RSA_PKCS1_PSS_PADDING,saltLength:r.constants.RSA_PSS_SALTLEN_DIGEST},O,"base64")}}function _(T){var w=N(T);return function(){var O=w.apply(null,arguments);return O=t.derToJose(O,"ES"+T),O}}function q(T){var w=I(T);return function(O,$,j){$=t.joseToDer($,"ES"+T).toString("base64");var L=w(O,$,j);return L}}function P(){return function(){return""}}function V(){return function(w,h){return h===""}}return Pr=function(w){var h={hs:x,rs:N,ps:C,es:_,none:P},O={hs:R,rs:I,ps:S,es:q,none:V},$=w.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/);if(!$)throw b(s,w);var j=($[1]||$[3]).toLowerCase(),L=$[2];return{sign:h[j](L),verify:O[j](L)}},Pr}var qr,Tn;function Ea(){if(Tn)return qr;Tn=1;var e=pr.Buffer;return qr=function(t){return typeof t=="string"?t:typeof t=="number"||e.isBuffer(t)?t.toString():JSON.stringify(t)},qr}var Dr,On;function Qi(){if(On)return Dr;On=1;var e=or().Buffer,r=ya(),t=va(),n=Zt,s=Ea(),a=Er;function i(o,l){return e.from(o,l).toString("base64").replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function u(o,l,d){d=d||"utf8";var y=i(s(o),"binary"),b=i(s(l),d);return a.format("%s.%s",y,b)}function c(o){var l=o.header,d=o.payload,y=o.secret||o.privateKey,b=o.encoding,g=t(l.alg),A=u(l,d,b),x=g.sign(A,y);return a.format("%s.%s",A,x)}function f(o){var l=o.secret;if(l=l??o.privateKey,l=l??o.key,/^hs/i.test(o.header.alg)===!0&&l==null)throw new TypeError("secret must be a string or buffer or a KeyObject");var d=new r(l);this.readable=!0,this.header=o.header,this.encoding=o.encoding,this.secret=this.privateKey=this.key=d,this.payload=new r(o.payload),this.secret.once("close",(function(){!this.payload.writable&&this.readable&&this.sign()}).bind(this)),this.payload.once("close",(function(){!this.secret.writable&&this.readable&&this.sign()}).bind(this))}return a.inherits(f,n),f.prototype.sign=function(){try{var l=c({header:this.header,payload:this.payload.buffer,secret:this.secret.buffer,encoding:this.encoding});return this.emit("done",l),this.emit("data",l),this.emit("end"),this.readable=!1,l}catch(d){this.readable=!1,this.emit("error",d),this.emit("close")}},f.sign=c,Dr=f,Dr}var Br,$n;function eo(){if($n)return Br;$n=1;var e=or().Buffer,r=ya(),t=va(),n=Zt,s=Ea(),a=Er,i=/^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;function u(x){return Object.prototype.toString.call(x)==="[object Object]"}function c(x){if(u(x))return x;try{return JSON.parse(x)}catch{return}}function f(x){var p=x.split(".",1)[0];return c(e.from(p,"base64").toString("binary"))}function o(x){return x.split(".",2).join(".")}function l(x){return x.split(".")[2]}function d(x,p){p=p||"utf8";var m=x.split(".")[1];return e.from(m,"base64").toString(p)}function y(x){return i.test(x)&&!!f(x)}function b(x,p,m){if(!p){var R=new Error("Missing algorithm parameter for jws.verify");throw R.code="MISSING_ALGORITHM",R}x=s(x);var N=l(x),I=o(x),C=t(p);return C.verify(I,N,m)}function g(x,p){if(p=p||{},x=s(x),!y(x))return null;var m=f(x);if(!m)return null;var R=d(x);return(m.typ==="JWT"||p.json)&&(R=JSON.parse(R,p.encoding)),{header:m,payload:R,signature:l(x)}}function A(x){x=x||{};var p=x.secret;if(p=p??x.publicKey,p=p??x.key,/^hs/i.test(x.algorithm)===!0&&p==null)throw new TypeError("secret must be a string or buffer or a KeyObject");var m=new r(p);this.readable=!0,this.algorithm=x.algorithm,this.encoding=x.encoding,this.secret=this.publicKey=this.key=m,this.signature=new r(x.signature),this.secret.once("close",(function(){!this.signature.writable&&this.readable&&this.verify()}).bind(this)),this.signature.once("close",(function(){!this.secret.writable&&this.readable&&this.verify()}).bind(this))}return a.inherits(A,n),A.prototype.verify=function(){try{var p=b(this.signature.buffer,this.algorithm,this.key.buffer),m=g(this.signature.buffer,this.encoding);return this.emit("done",p,m),this.emit("data",p),this.emit("end"),this.readable=!1,p}catch(R){this.readable=!1,this.emit("error",R),this.emit("close")}},A.decode=g,A.isValid=y,A.verify=b,Br=A,Br}var Cn;function tn(){if(Cn)return de;Cn=1;var e=Qi(),r=eo(),t=["HS256","HS384","HS512","RS256","RS384","RS512","PS256","PS384","PS512","ES256","ES384","ES512"];return de.ALGORITHMS=t,de.sign=e.sign,de.verify=r.verify,de.decode=r.decode,de.isValid=r.isValid,de.createSign=function(s){return new e(s)},de.createVerify=function(s){return new r(s)},de}var Fr,jn;function wa(){if(jn)return Fr;jn=1;var e=tn();return Fr=function(r,t){t=t||{};var n=e.decode(r,t);if(!n)return null;var s=n.payload;if(typeof s=="string")try{var a=JSON.parse(s);a!==null&&typeof a=="object"&&(s=a)}catch{}return t.complete===!0?{header:n.header,payload:s,signature:n.signature}:s},Fr}var Mr,Ln;function wr(){if(Ln)return Mr;Ln=1;var e=function(r,t){Error.call(this,r),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="JsonWebTokenError",this.message=r,t&&(this.inner=t)};return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,Mr=e,Mr}var kr,Nn;function Ra(){if(Nn)return kr;Nn=1;var e=wr(),r=function(t,n){e.call(this,t),this.name="NotBeforeError",this.date=n};return r.prototype=Object.create(e.prototype),r.prototype.constructor=r,kr=r,kr}var Gr,_n;function Sa(){if(_n)return Gr;_n=1;var e=wr(),r=function(t,n){e.call(this,t),this.name="TokenExpiredError",this.expiredAt=n};return r.prototype=Object.create(e.prototype),r.prototype.constructor=r,Gr=r,Gr}var Hr,Pn;function ro(){if(Pn)return Hr;Pn=1;var e=1e3,r=e*60,t=r*60,n=t*24,s=n*7,a=n*365.25;Hr=function(o,l){l=l||{};var d=typeof o;if(d==="string"&&o.length>0)return i(o);if(d==="number"&&isFinite(o))return l.long?c(o):u(o);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(o))};function i(o){if(o=String(o),!(o.length>100)){var l=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(o);if(l){var d=parseFloat(l[1]),y=(l[2]||"ms").toLowerCase();switch(y){case"years":case"year":case"yrs":case"yr":case"y":return d*a;case"weeks":case"week":case"w":return d*s;case"days":case"day":case"d":return d*n;case"hours":case"hour":case"hrs":case"hr":case"h":return d*t;case"minutes":case"minute":case"mins":case"min":case"m":return d*r;case"seconds":case"second":case"secs":case"sec":case"s":return d*e;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return d;default:return}}}}function u(o){var l=Math.abs(o);return l>=n?Math.round(o/n)+"d":l>=t?Math.round(o/t)+"h":l>=r?Math.round(o/r)+"m":l>=e?Math.round(o/e)+"s":o+"ms"}function c(o){var l=Math.abs(o);return l>=n?f(o,l,n,"day"):l>=t?f(o,l,t,"hour"):l>=r?f(o,l,r,"minute"):l>=e?f(o,l,e,"second"):o+" ms"}function f(o,l,d,y){var b=l>=d*1.5;return Math.round(o/d)+" "+y+(b?"s":"")}return Hr}var Vr,qn;function Aa(){if(qn)return Vr;qn=1;var e=ro();return Vr=function(r,t){var n=t||Math.floor(Date.now()/1e3);if(typeof r=="string"){var s=e(r);return typeof s>"u"?void 0:Math.floor(n+s/1e3)}else return typeof r=="number"?n+r:void 0},Vr}var lr={exports:{}},Ur,Dn;function Rr(){if(Dn)return Ur;Dn=1;const e="2.0.0",r=256,t=Number.MAX_SAFE_INTEGER||9007199254740991,n=16,s=r-6;return Ur={MAX_LENGTH:r,MAX_SAFE_COMPONENT_LENGTH:n,MAX_SAFE_BUILD_LENGTH:s,MAX_SAFE_INTEGER:t,RELEASE_TYPES:["major","premajor","minor","preminor","patch","prepatch","prerelease"],SEMVER_SPEC_VERSION:e,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2},Ur}var zr,Bn;function Sr(){if(Bn)return zr;Bn=1;var e={};return zr=typeof process=="object"&&e&&e.NODE_DEBUG&&/\bsemver\b/i.test(e.NODE_DEBUG)?(...t)=>console.error("SEMVER",...t):()=>{},zr}var Fn;function cr(){return Fn||(Fn=1,(function(e,r){const{MAX_SAFE_COMPONENT_LENGTH:t,MAX_SAFE_BUILD_LENGTH:n,MAX_LENGTH:s}=Rr(),a=Sr();r=e.exports={};const i=r.re=[],u=r.safeRe=[],c=r.src=[],f=r.safeSrc=[],o=r.t={};let l=0;const d="[a-zA-Z0-9-]",y=[["\\s",1],["\\d",s],[d,n]],b=A=>{for(const[x,p]of y)A=A.split(`${x}*`).join(`${x}{0,${p}}`).split(`${x}+`).join(`${x}{1,${p}}`);return A},g=(A,x,p)=>{const m=b(x),R=l++;a(A,R,x),o[A]=R,c[R]=x,f[R]=m,i[R]=new RegExp(x,p?"g":void 0),u[R]=new RegExp(m,p?"g":void 0)};g("NUMERICIDENTIFIER","0|[1-9]\\d*"),g("NUMERICIDENTIFIERLOOSE","\\d+"),g("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${d}*`),g("MAINVERSION",`(${c[o.NUMERICIDENTIFIER]})\\.(${c[o.NUMERICIDENTIFIER]})\\.(${c[o.NUMERICIDENTIFIER]})`),g("MAINVERSIONLOOSE",`(${c[o.NUMERICIDENTIFIERLOOSE]})\\.(${c[o.NUMERICIDENTIFIERLOOSE]})\\.(${c[o.NUMERICIDENTIFIERLOOSE]})`),g("PRERELEASEIDENTIFIER",`(?:${c[o.NONNUMERICIDENTIFIER]}|${c[o.NUMERICIDENTIFIER]})`),g("PRERELEASEIDENTIFIERLOOSE",`(?:${c[o.NONNUMERICIDENTIFIER]}|${c[o.NUMERICIDENTIFIERLOOSE]})`),g("PRERELEASE",`(?:-(${c[o.PRERELEASEIDENTIFIER]}(?:\\.${c[o.PRERELEASEIDENTIFIER]})*))`),g("PRERELEASELOOSE",`(?:-?(${c[o.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${c[o.PRERELEASEIDENTIFIERLOOSE]})*))`),g("BUILDIDENTIFIER",`${d}+`),g("BUILD",`(?:\\+(${c[o.BUILDIDENTIFIER]}(?:\\.${c[o.BUILDIDENTIFIER]})*))`),g("FULLPLAIN",`v?${c[o.MAINVERSION]}${c[o.PRERELEASE]}?${c[o.BUILD]}?`),g("FULL",`^${c[o.FULLPLAIN]}$`),g("LOOSEPLAIN",`[v=\\s]*${c[o.MAINVERSIONLOOSE]}${c[o.PRERELEASELOOSE]}?${c[o.BUILD]}?`),g("LOOSE",`^${c[o.LOOSEPLAIN]}$`),g("GTLT","((?:<|>)?=?)"),g("XRANGEIDENTIFIERLOOSE",`${c[o.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),g("XRANGEIDENTIFIER",`${c[o.NUMERICIDENTIFIER]}|x|X|\\*`),g("XRANGEPLAIN",`[v=\\s]*(${c[o.XRANGEIDENTIFIER]})(?:\\.(${c[o.XRANGEIDENTIFIER]})(?:\\.(${c[o.XRANGEIDENTIFIER]})(?:${c[o.PRERELEASE]})?${c[o.BUILD]}?)?)?`),g("XRANGEPLAINLOOSE",`[v=\\s]*(${c[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[o.XRANGEIDENTIFIERLOOSE]})(?:${c[o.PRERELEASELOOSE]})?${c[o.BUILD]}?)?)?`),g("XRANGE",`^${c[o.GTLT]}\\s*${c[o.XRANGEPLAIN]}$`),g("XRANGELOOSE",`^${c[o.GTLT]}\\s*${c[o.XRANGEPLAINLOOSE]}$`),g("COERCEPLAIN",`(^|[^\\d])(\\d{1,${t}})(?:\\.(\\d{1,${t}}))?(?:\\.(\\d{1,${t}}))?`),g("COERCE",`${c[o.COERCEPLAIN]}(?:$|[^\\d])`),g("COERCEFULL",c[o.COERCEPLAIN]+`(?:${c[o.PRERELEASE]})?(?:${c[o.BUILD]})?(?:$|[^\\d])`),g("COERCERTL",c[o.COERCE],!0),g("COERCERTLFULL",c[o.COERCEFULL],!0),g("LONETILDE","(?:~>?)"),g("TILDETRIM",`(\\s*)${c[o.LONETILDE]}\\s+`,!0),r.tildeTrimReplace="$1~",g("TILDE",`^${c[o.LONETILDE]}${c[o.XRANGEPLAIN]}$`),g("TILDELOOSE",`^${c[o.LONETILDE]}${c[o.XRANGEPLAINLOOSE]}$`),g("LONECARET","(?:\\^)"),g("CARETTRIM",`(\\s*)${c[o.LONECARET]}\\s+`,!0),r.caretTrimReplace="$1^",g("CARET",`^${c[o.LONECARET]}${c[o.XRANGEPLAIN]}$`),g("CARETLOOSE",`^${c[o.LONECARET]}${c[o.XRANGEPLAINLOOSE]}$`),g("COMPARATORLOOSE",`^${c[o.GTLT]}\\s*(${c[o.LOOSEPLAIN]})$|^$`),g("COMPARATOR",`^${c[o.GTLT]}\\s*(${c[o.FULLPLAIN]})$|^$`),g("COMPARATORTRIM",`(\\s*)${c[o.GTLT]}\\s*(${c[o.LOOSEPLAIN]}|${c[o.XRANGEPLAIN]})`,!0),r.comparatorTrimReplace="$1$2$3",g("HYPHENRANGE",`^\\s*(${c[o.XRANGEPLAIN]})\\s+-\\s+(${c[o.XRANGEPLAIN]})\\s*$`),g("HYPHENRANGELOOSE",`^\\s*(${c[o.XRANGEPLAINLOOSE]})\\s+-\\s+(${c[o.XRANGEPLAINLOOSE]})\\s*$`),g("STAR","(<|>)?=?\\s*\\*"),g("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),g("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")})(lr,lr.exports)),lr.exports}var Kr,Mn;function nn(){if(Mn)return Kr;Mn=1;const e=Object.freeze({loose:!0}),r=Object.freeze({});return Kr=n=>n?typeof n!="object"?e:n:r,Kr}var Xr,kn;function Ia(){if(kn)return Xr;kn=1;const e=/^[0-9]+$/,r=(n,s)=>{if(typeof n=="number"&&typeof s=="number")return n===s?0:n<s?-1:1;const a=e.test(n),i=e.test(s);return a&&i&&(n=+n,s=+s),n===s?0:a&&!i?-1:i&&!a?1:n<s?-1:1};return Xr={compareIdentifiers:r,rcompareIdentifiers:(n,s)=>r(s,n)},Xr}var Wr,Gn;function te(){if(Gn)return Wr;Gn=1;const e=Sr(),{MAX_LENGTH:r,MAX_SAFE_INTEGER:t}=Rr(),{safeRe:n,t:s}=cr(),a=nn(),{compareIdentifiers:i}=Ia();class u{constructor(f,o){if(o=a(o),f instanceof u){if(f.loose===!!o.loose&&f.includePrerelease===!!o.includePrerelease)return f;f=f.version}else if(typeof f!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof f}".`);if(f.length>r)throw new TypeError(`version is longer than ${r} characters`);e("SemVer",f,o),this.options=o,this.loose=!!o.loose,this.includePrerelease=!!o.includePrerelease;const l=f.trim().match(o.loose?n[s.LOOSE]:n[s.FULL]);if(!l)throw new TypeError(`Invalid Version: ${f}`);if(this.raw=f,this.major=+l[1],this.minor=+l[2],this.patch=+l[3],this.major>t||this.major<0)throw new TypeError("Invalid major version");if(this.minor>t||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>t||this.patch<0)throw new TypeError("Invalid patch version");l[4]?this.prerelease=l[4].split(".").map(d=>{if(/^[0-9]+$/.test(d)){const y=+d;if(y>=0&&y<t)return y}return d}):this.prerelease=[],this.build=l[5]?l[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(f){if(e("SemVer.compare",this.version,this.options,f),!(f instanceof u)){if(typeof f=="string"&&f===this.version)return 0;f=new u(f,this.options)}return f.version===this.version?0:this.compareMain(f)||this.comparePre(f)}compareMain(f){return f instanceof u||(f=new u(f,this.options)),this.major<f.major?-1:this.major>f.major?1:this.minor<f.minor?-1:this.minor>f.minor?1:this.patch<f.patch?-1:this.patch>f.patch?1:0}comparePre(f){if(f instanceof u||(f=new u(f,this.options)),this.prerelease.length&&!f.prerelease.length)return-1;if(!this.prerelease.length&&f.prerelease.length)return 1;if(!this.prerelease.length&&!f.prerelease.length)return 0;let o=0;do{const l=this.prerelease[o],d=f.prerelease[o];if(e("prerelease compare",o,l,d),l===void 0&&d===void 0)return 0;if(d===void 0)return 1;if(l===void 0)return-1;if(l===d)continue;return i(l,d)}while(++o)}compareBuild(f){f instanceof u||(f=new u(f,this.options));let o=0;do{const l=this.build[o],d=f.build[o];if(e("build compare",o,l,d),l===void 0&&d===void 0)return 0;if(d===void 0)return 1;if(l===void 0)return-1;if(l===d)continue;return i(l,d)}while(++o)}inc(f,o,l){if(f.startsWith("pre")){if(!o&&l===!1)throw new Error("invalid increment argument: identifier is empty");if(o){const d=`-${o}`.match(this.options.loose?n[s.PRERELEASELOOSE]:n[s.PRERELEASE]);if(!d||d[1]!==o)throw new Error(`invalid identifier: ${o}`)}}switch(f){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",o,l);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",o,l);break;case"prepatch":this.prerelease.length=0,this.inc("patch",o,l),this.inc("pre",o,l);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",o,l),this.inc("pre",o,l);break;case"release":if(this.prerelease.length===0)throw new Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{const d=Number(l)?1:0;if(this.prerelease.length===0)this.prerelease=[d];else{let y=this.prerelease.length;for(;--y>=0;)typeof this.prerelease[y]=="number"&&(this.prerelease[y]++,y=-2);if(y===-1){if(o===this.prerelease.join(".")&&l===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(d)}}if(o){let y=[o,d];l===!1&&(y=[o]),i(this.prerelease[0],o)===0?isNaN(this.prerelease[1])&&(this.prerelease=y):this.prerelease=y}break}default:throw new Error(`invalid increment argument: ${f}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}}return Wr=u,Wr}var Jr,Hn;function Xe(){if(Hn)return Jr;Hn=1;const e=te();return Jr=(t,n,s=!1)=>{if(t instanceof e)return t;try{return new e(t,n)}catch(a){if(!s)return null;throw a}},Jr}var Yr,Vn;function to(){if(Vn)return Yr;Vn=1;const e=Xe();return Yr=(t,n)=>{const s=e(t,n);return s?s.version:null},Yr}var Zr,Un;function no(){if(Un)return Zr;Un=1;const e=Xe();return Zr=(t,n)=>{const s=e(t.trim().replace(/^[=v]+/,""),n);return s?s.version:null},Zr}var Qr,zn;function so(){if(zn)return Qr;zn=1;const e=te();return Qr=(t,n,s,a,i)=>{typeof s=="string"&&(i=a,a=s,s=void 0);try{return new e(t instanceof e?t.version:t,s).inc(n,a,i).version}catch{return null}},Qr}var et,Kn;function ao(){if(Kn)return et;Kn=1;const e=Xe();return et=(t,n)=>{const s=e(t,null,!0),a=e(n,null,!0),i=s.compare(a);if(i===0)return null;const u=i>0,c=u?s:a,f=u?a:s,o=!!c.prerelease.length;if(!!f.prerelease.length&&!o){if(!f.patch&&!f.minor)return"major";if(f.compareMain(c)===0)return f.minor&&!f.patch?"minor":"patch"}const d=o?"pre":"";return s.major!==a.major?d+"major":s.minor!==a.minor?d+"minor":s.patch!==a.patch?d+"patch":"prerelease"},et}var rt,Xn;function io(){if(Xn)return rt;Xn=1;const e=te();return rt=(t,n)=>new e(t,n).major,rt}var tt,Wn;function oo(){if(Wn)return tt;Wn=1;const e=te();return tt=(t,n)=>new e(t,n).minor,tt}var nt,Jn;function co(){if(Jn)return nt;Jn=1;const e=te();return nt=(t,n)=>new e(t,n).patch,nt}var st,Yn;function fo(){if(Yn)return st;Yn=1;const e=Xe();return st=(t,n)=>{const s=e(t,n);return s&&s.prerelease.length?s.prerelease:null},st}var at,Zn;function fe(){if(Zn)return at;Zn=1;const e=te();return at=(t,n,s)=>new e(t,s).compare(new e(n,s)),at}var it,Qn;function uo(){if(Qn)return it;Qn=1;const e=fe();return it=(t,n,s)=>e(n,t,s),it}var ot,es;function lo(){if(es)return ot;es=1;const e=fe();return ot=(t,n)=>e(t,n,!0),ot}var ct,rs;function sn(){if(rs)return ct;rs=1;const e=te();return ct=(t,n,s)=>{const a=new e(t,s),i=new e(n,s);return a.compare(i)||a.compareBuild(i)},ct}var ft,ts;function xo(){if(ts)return ft;ts=1;const e=sn();return ft=(t,n)=>t.sort((s,a)=>e(s,a,n)),ft}var ut,ns;function ho(){if(ns)return ut;ns=1;const e=sn();return ut=(t,n)=>t.sort((s,a)=>e(a,s,n)),ut}var lt,ss;function Ar(){if(ss)return lt;ss=1;const e=fe();return lt=(t,n,s)=>e(t,n,s)>0,lt}var dt,as;function an(){if(as)return dt;as=1;const e=fe();return dt=(t,n,s)=>e(t,n,s)<0,dt}var xt,is;function Ta(){if(is)return xt;is=1;const e=fe();return xt=(t,n,s)=>e(t,n,s)===0,xt}var ht,os;function Oa(){if(os)return ht;os=1;const e=fe();return ht=(t,n,s)=>e(t,n,s)!==0,ht}var pt,cs;function on(){if(cs)return pt;cs=1;const e=fe();return pt=(t,n,s)=>e(t,n,s)>=0,pt}var mt,fs;function cn(){if(fs)return mt;fs=1;const e=fe();return mt=(t,n,s)=>e(t,n,s)<=0,mt}var bt,us;function $a(){if(us)return bt;us=1;const e=Ta(),r=Oa(),t=Ar(),n=on(),s=an(),a=cn();return bt=(u,c,f,o)=>{switch(c){case"===":return typeof u=="object"&&(u=u.version),typeof f=="object"&&(f=f.version),u===f;case"!==":return typeof u=="object"&&(u=u.version),typeof f=="object"&&(f=f.version),u!==f;case"":case"=":case"==":return e(u,f,o);case"!=":return r(u,f,o);case">":return t(u,f,o);case">=":return n(u,f,o);case"<":return s(u,f,o);case"<=":return a(u,f,o);default:throw new TypeError(`Invalid operator: ${c}`)}},bt}var gt,ls;function po(){if(ls)return gt;ls=1;const e=te(),r=Xe(),{safeRe:t,t:n}=cr();return gt=(a,i)=>{if(a instanceof e)return a;if(typeof a=="number"&&(a=String(a)),typeof a!="string")return null;i=i||{};let u=null;if(!i.rtl)u=a.match(i.includePrerelease?t[n.COERCEFULL]:t[n.COERCE]);else{const y=i.includePrerelease?t[n.COERCERTLFULL]:t[n.COERCERTL];let b;for(;(b=y.exec(a))&&(!u||u.index+u[0].length!==a.length);)(!u||b.index+b[0].length!==u.index+u[0].length)&&(u=b),y.lastIndex=b.index+b[1].length+b[2].length;y.lastIndex=-1}if(u===null)return null;const c=u[2],f=u[3]||"0",o=u[4]||"0",l=i.includePrerelease&&u[5]?`-${u[5]}`:"",d=i.includePrerelease&&u[6]?`+${u[6]}`:"";return r(`${c}.${f}.${o}${l}${d}`,i)},gt}var yt,ds;function mo(){if(ds)return yt;ds=1;class e{constructor(){this.max=1e3,this.map=new Map}get(t){const n=this.map.get(t);if(n!==void 0)return this.map.delete(t),this.map.set(t,n),n}delete(t){return this.map.delete(t)}set(t,n){if(!this.delete(t)&&n!==void 0){if(this.map.size>=this.max){const a=this.map.keys().next().value;this.delete(a)}this.map.set(t,n)}return this}}return yt=e,yt}var vt,xs;function ue(){if(xs)return vt;xs=1;const e=/\s+/g;class r{constructor(h,O){if(O=s(O),h instanceof r)return h.loose===!!O.loose&&h.includePrerelease===!!O.includePrerelease?h:new r(h.raw,O);if(h instanceof a)return this.raw=h.value,this.set=[[h]],this.formatted=void 0,this;if(this.options=O,this.loose=!!O.loose,this.includePrerelease=!!O.includePrerelease,this.raw=h.trim().replace(e," "),this.set=this.raw.split("||").map($=>this.parseRange($.trim())).filter($=>$.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){const $=this.set[0];if(this.set=this.set.filter(j=>!g(j[0])),this.set.length===0)this.set=[$];else if(this.set.length>1){for(const j of this.set)if(j.length===1&&A(j[0])){this.set=[j];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let h=0;h<this.set.length;h++){h>0&&(this.formatted+="||");const O=this.set[h];for(let $=0;$<O.length;$++)$>0&&(this.formatted+=" "),this.formatted+=O[$].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(h){const $=((this.options.includePrerelease&&y)|(this.options.loose&&b))+":"+h,j=n.get($);if(j)return j;const L=this.options.loose,M=L?c[f.HYPHENRANGELOOSE]:c[f.HYPHENRANGE];h=h.replace(M,V(this.options.includePrerelease)),i("hyphen replace",h),h=h.replace(c[f.COMPARATORTRIM],o),i("comparator trim",h),h=h.replace(c[f.TILDETRIM],l),i("tilde trim",h),h=h.replace(c[f.CARETTRIM],d),i("caret trim",h);let U=h.split(" ").map(X=>p(X,this.options)).join(" ").split(/\s+/).map(X=>P(X,this.options));L&&(U=U.filter(X=>(i("loose invalid filter",X,this.options),!!X.match(c[f.COMPARATORLOOSE])))),i("range list",U);const G=new Map,K=U.map(X=>new a(X,this.options));for(const X of K){if(g(X))return[X];G.set(X.value,X)}G.size>1&&G.has("")&&G.delete("");const W=[...G.values()];return n.set($,W),W}intersects(h,O){if(!(h instanceof r))throw new TypeError("a Range is required");return this.set.some($=>x($,O)&&h.set.some(j=>x(j,O)&&$.every(L=>j.every(M=>L.intersects(M,O)))))}test(h){if(!h)return!1;if(typeof h=="string")try{h=new u(h,this.options)}catch{return!1}for(let O=0;O<this.set.length;O++)if(T(this.set[O],h,this.options))return!0;return!1}}vt=r;const t=mo(),n=new t,s=nn(),a=Ir(),i=Sr(),u=te(),{safeRe:c,t:f,comparatorTrimReplace:o,tildeTrimReplace:l,caretTrimReplace:d}=cr(),{FLAG_INCLUDE_PRERELEASE:y,FLAG_LOOSE:b}=Rr(),g=w=>w.value==="<0.0.0-0",A=w=>w.value==="",x=(w,h)=>{let O=!0;const $=w.slice();let j=$.pop();for(;O&&$.length;)O=$.every(L=>j.intersects(L,h)),j=$.pop();return O},p=(w,h)=>(w=w.replace(c[f.BUILD],""),i("comp",w,h),w=I(w,h),i("caret",w),w=R(w,h),i("tildes",w),w=S(w,h),i("xrange",w),w=q(w,h),i("stars",w),w),m=w=>!w||w.toLowerCase()==="x"||w==="*",R=(w,h)=>w.trim().split(/\s+/).map(O=>N(O,h)).join(" "),N=(w,h)=>{const O=h.loose?c[f.TILDELOOSE]:c[f.TILDE];return w.replace(O,($,j,L,M,U)=>{i("tilde",w,$,j,L,M,U);let G;return m(j)?G="":m(L)?G=`>=${j}.0.0 <${+j+1}.0.0-0`:m(M)?G=`>=${j}.${L}.0 <${j}.${+L+1}.0-0`:U?(i("replaceTilde pr",U),G=`>=${j}.${L}.${M}-${U} <${j}.${+L+1}.0-0`):G=`>=${j}.${L}.${M} <${j}.${+L+1}.0-0`,i("tilde return",G),G})},I=(w,h)=>w.trim().split(/\s+/).map(O=>C(O,h)).join(" "),C=(w,h)=>{i("caret",w,h);const O=h.loose?c[f.CARETLOOSE]:c[f.CARET],$=h.includePrerelease?"-0":"";return w.replace(O,(j,L,M,U,G)=>{i("caret",w,j,L,M,U,G);let K;return m(L)?K="":m(M)?K=`>=${L}.0.0${$} <${+L+1}.0.0-0`:m(U)?L==="0"?K=`>=${L}.${M}.0${$} <${L}.${+M+1}.0-0`:K=`>=${L}.${M}.0${$} <${+L+1}.0.0-0`:G?(i("replaceCaret pr",G),L==="0"?M==="0"?K=`>=${L}.${M}.${U}-${G} <${L}.${M}.${+U+1}-0`:K=`>=${L}.${M}.${U}-${G} <${L}.${+M+1}.0-0`:K=`>=${L}.${M}.${U}-${G} <${+L+1}.0.0-0`):(i("no pr"),L==="0"?M==="0"?K=`>=${L}.${M}.${U}${$} <${L}.${M}.${+U+1}-0`:K=`>=${L}.${M}.${U}${$} <${L}.${+M+1}.0-0`:K=`>=${L}.${M}.${U} <${+L+1}.0.0-0`),i("caret return",K),K})},S=(w,h)=>(i("replaceXRanges",w,h),w.split(/\s+/).map(O=>_(O,h)).join(" ")),_=(w,h)=>{w=w.trim();const O=h.loose?c[f.XRANGELOOSE]:c[f.XRANGE];return w.replace(O,($,j,L,M,U,G)=>{i("xRange",w,$,j,L,M,U,G);const K=m(L),W=K||m(M),X=W||m(U),Ie=X;return j==="="&&Ie&&(j=""),G=h.includePrerelease?"-0":"",K?j===">"||j==="<"?$="<0.0.0-0":$="*":j&&Ie?(W&&(M=0),U=0,j===">"?(j=">=",W?(L=+L+1,M=0,U=0):(M=+M+1,U=0)):j==="<="&&(j="<",W?L=+L+1:M=+M+1),j==="<"&&(G="-0"),$=`${j+L}.${M}.${U}${G}`):W?$=`>=${L}.0.0${G} <${+L+1}.0.0-0`:X&&($=`>=${L}.${M}.0${G} <${L}.${+M+1}.0-0`),i("xRange return",$),$})},q=(w,h)=>(i("replaceStars",w,h),w.trim().replace(c[f.STAR],"")),P=(w,h)=>(i("replaceGTE0",w,h),w.trim().replace(c[h.includePrerelease?f.GTE0PRE:f.GTE0],"")),V=w=>(h,O,$,j,L,M,U,G,K,W,X,Ie)=>(m($)?O="":m(j)?O=`>=${$}.0.0${w?"-0":""}`:m(L)?O=`>=${$}.${j}.0${w?"-0":""}`:M?O=`>=${O}`:O=`>=${O}${w?"-0":""}`,m(K)?G="":m(W)?G=`<${+K+1}.0.0-0`:m(X)?G=`<${K}.${+W+1}.0-0`:Ie?G=`<=${K}.${W}.${X}-${Ie}`:w?G=`<${K}.${W}.${+X+1}-0`:G=`<=${G}`,`${O} ${G}`.trim()),T=(w,h,O)=>{for(let $=0;$<w.length;$++)if(!w[$].test(h))return!1;if(h.prerelease.length&&!O.includePrerelease){for(let $=0;$<w.length;$++)if(i(w[$].semver),w[$].semver!==a.ANY&&w[$].semver.prerelease.length>0){const j=w[$].semver;if(j.major===h.major&&j.minor===h.minor&&j.patch===h.patch)return!0}return!1}return!0};return vt}var Et,hs;function Ir(){if(hs)return Et;hs=1;const e=Symbol("SemVer ANY");class r{static get ANY(){return e}constructor(o,l){if(l=t(l),o instanceof r){if(o.loose===!!l.loose)return o;o=o.value}o=o.trim().split(/\s+/).join(" "),i("comparator",o,l),this.options=l,this.loose=!!l.loose,this.parse(o),this.semver===e?this.value="":this.value=this.operator+this.semver.version,i("comp",this)}parse(o){const l=this.options.loose?n[s.COMPARATORLOOSE]:n[s.COMPARATOR],d=o.match(l);if(!d)throw new TypeError(`Invalid comparator: ${o}`);this.operator=d[1]!==void 0?d[1]:"",this.operator==="="&&(this.operator=""),d[2]?this.semver=new u(d[2],this.options.loose):this.semver=e}toString(){return this.value}test(o){if(i("Comparator.test",o,this.options.loose),this.semver===e||o===e)return!0;if(typeof o=="string")try{o=new u(o,this.options)}catch{return!1}return a(o,this.operator,this.semver,this.options)}intersects(o,l){if(!(o instanceof r))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new c(o.value,l).test(this.value):o.operator===""?o.value===""?!0:new c(this.value,l).test(o.semver):(l=t(l),l.includePrerelease&&(this.value==="<0.0.0-0"||o.value==="<0.0.0-0")||!l.includePrerelease&&(this.value.startsWith("<0.0.0")||o.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&o.operator.startsWith(">")||this.operator.startsWith("<")&&o.operator.startsWith("<")||this.semver.version===o.semver.version&&this.operator.includes("=")&&o.operator.includes("=")||a(this.semver,"<",o.semver,l)&&this.operator.startsWith(">")&&o.operator.startsWith("<")||a(this.semver,">",o.semver,l)&&this.operator.startsWith("<")&&o.operator.startsWith(">")))}}Et=r;const t=nn(),{safeRe:n,t:s}=cr(),a=$a(),i=Sr(),u=te(),c=ue();return Et}var wt,ps;function Tr(){if(ps)return wt;ps=1;const e=ue();return wt=(t,n,s)=>{try{n=new e(n,s)}catch{return!1}return n.test(t)},wt}var Rt,ms;function bo(){if(ms)return Rt;ms=1;const e=ue();return Rt=(t,n)=>new e(t,n).set.map(s=>s.map(a=>a.value).join(" ").trim().split(" ")),Rt}var St,bs;function go(){if(bs)return St;bs=1;const e=te(),r=ue();return St=(n,s,a)=>{let i=null,u=null,c=null;try{c=new r(s,a)}catch{return null}return n.forEach(f=>{c.test(f)&&(!i||u.compare(f)===-1)&&(i=f,u=new e(i,a))}),i},St}var At,gs;function yo(){if(gs)return At;gs=1;const e=te(),r=ue();return At=(n,s,a)=>{let i=null,u=null,c=null;try{c=new r(s,a)}catch{return null}return n.forEach(f=>{c.test(f)&&(!i||u.compare(f)===1)&&(i=f,u=new e(i,a))}),i},At}var It,ys;function vo(){if(ys)return It;ys=1;const e=te(),r=ue(),t=Ar();return It=(s,a)=>{s=new r(s,a);let i=new e("0.0.0");if(s.test(i)||(i=new e("0.0.0-0"),s.test(i)))return i;i=null;for(let u=0;u<s.set.length;++u){const c=s.set[u];let f=null;c.forEach(o=>{const l=new e(o.semver.version);switch(o.operator){case">":l.prerelease.length===0?l.patch++:l.prerelease.push(0),l.raw=l.format();case"":case">=":(!f||t(l,f))&&(f=l);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${o.operator}`)}}),f&&(!i||t(i,f))&&(i=f)}return i&&s.test(i)?i:null},It}var Tt,vs;function Eo(){if(vs)return Tt;vs=1;const e=ue();return Tt=(t,n)=>{try{return new e(t,n).range||"*"}catch{return null}},Tt}var Ot,Es;function fn(){if(Es)return Ot;Es=1;const e=te(),r=Ir(),{ANY:t}=r,n=ue(),s=Tr(),a=Ar(),i=an(),u=cn(),c=on();return Ot=(o,l,d,y)=>{o=new e(o,y),l=new n(l,y);let b,g,A,x,p;switch(d){case">":b=a,g=u,A=i,x=">",p=">=";break;case"<":b=i,g=c,A=a,x="<",p="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(s(o,l,y))return!1;for(let m=0;m<l.set.length;++m){const R=l.set[m];let N=null,I=null;if(R.forEach(C=>{C.semver===t&&(C=new r(">=0.0.0")),N=N||C,I=I||C,b(C.semver,N.semver,y)?N=C:A(C.semver,I.semver,y)&&(I=C)}),N.operator===x||N.operator===p||(!I.operator||I.operator===x)&&g(o,I.semver))return!1;if(I.operator===p&&A(o,I.semver))return!1}return!0},Ot}var $t,ws;function wo(){if(ws)return $t;ws=1;const e=fn();return $t=(t,n,s)=>e(t,n,">",s),$t}var Ct,Rs;function Ro(){if(Rs)return Ct;Rs=1;const e=fn();return Ct=(t,n,s)=>e(t,n,"<",s),Ct}var jt,Ss;function So(){if(Ss)return jt;Ss=1;const e=ue();return jt=(t,n,s)=>(t=new e(t,s),n=new e(n,s),t.intersects(n,s)),jt}var Lt,As;function Ao(){if(As)return Lt;As=1;const e=Tr(),r=fe();return Lt=(t,n,s)=>{const a=[];let i=null,u=null;const c=t.sort((d,y)=>r(d,y,s));for(const d of c)e(d,n,s)?(u=d,i||(i=d)):(u&&a.push([i,u]),u=null,i=null);i&&a.push([i,null]);const f=[];for(const[d,y]of a)d===y?f.push(d):!y&&d===c[0]?f.push("*"):y?d===c[0]?f.push(`<=${y}`):f.push(`${d} - ${y}`):f.push(`>=${d}`);const o=f.join(" || "),l=typeof n.raw=="string"?n.raw:String(n);return o.length<l.length?o:n},Lt}var Nt,Is;function Io(){if(Is)return Nt;Is=1;const e=ue(),r=Ir(),{ANY:t}=r,n=Tr(),s=fe(),a=(l,d,y={})=>{if(l===d)return!0;l=new e(l,y),d=new e(d,y);let b=!1;e:for(const g of l.set){for(const A of d.set){const x=c(g,A,y);if(b=b||x!==null,x)continue e}if(b)return!1}return!0},i=[new r(">=0.0.0-0")],u=[new r(">=0.0.0")],c=(l,d,y)=>{if(l===d)return!0;if(l.length===1&&l[0].semver===t){if(d.length===1&&d[0].semver===t)return!0;y.includePrerelease?l=i:l=u}if(d.length===1&&d[0].semver===t){if(y.includePrerelease)return!0;d=u}const b=new Set;let g,A;for(const S of l)S.operator===">"||S.operator===">="?g=f(g,S,y):S.operator==="<"||S.operator==="<="?A=o(A,S,y):b.add(S.semver);if(b.size>1)return null;let x;if(g&&A){if(x=s(g.semver,A.semver,y),x>0)return null;if(x===0&&(g.operator!==">="||A.operator!=="<="))return null}for(const S of b){if(g&&!n(S,String(g),y)||A&&!n(S,String(A),y))return null;for(const _ of d)if(!n(S,String(_),y))return!1;return!0}let p,m,R,N,I=A&&!y.includePrerelease&&A.semver.prerelease.length?A.semver:!1,C=g&&!y.includePrerelease&&g.semver.prerelease.length?g.semver:!1;I&&I.prerelease.length===1&&A.operator==="<"&&I.prerelease[0]===0&&(I=!1);for(const S of d){if(N=N||S.operator===">"||S.operator===">=",R=R||S.operator==="<"||S.operator==="<=",g){if(C&&S.semver.prerelease&&S.semver.prerelease.length&&S.semver.major===C.major&&S.semver.minor===C.minor&&S.semver.patch===C.patch&&(C=!1),S.operator===">"||S.operator===">="){if(p=f(g,S,y),p===S&&p!==g)return!1}else if(g.operator===">="&&!n(g.semver,String(S),y))return!1}if(A){if(I&&S.semver.prerelease&&S.semver.prerelease.length&&S.semver.major===I.major&&S.semver.minor===I.minor&&S.semver.patch===I.patch&&(I=!1),S.operator==="<"||S.operator==="<="){if(m=o(A,S,y),m===S&&m!==A)return!1}else if(A.operator==="<="&&!n(A.semver,String(S),y))return!1}if(!S.operator&&(A||g)&&x!==0)return!1}return!(g&&R&&!A&&x!==0||A&&N&&!g&&x!==0||C||I)},f=(l,d,y)=>{if(!l)return d;const b=s(l.semver,d.semver,y);return b>0?l:b<0||d.operator===">"&&l.operator===">="?d:l},o=(l,d,y)=>{if(!l)return d;const b=s(l.semver,d.semver,y);return b<0?l:b>0||d.operator==="<"&&l.operator==="<="?d:l};return Nt=a,Nt}var _t,Ts;function un(){if(Ts)return _t;Ts=1;const e=cr(),r=Rr(),t=te(),n=Ia(),s=Xe(),a=to(),i=no(),u=so(),c=ao(),f=io(),o=oo(),l=co(),d=fo(),y=fe(),b=uo(),g=lo(),A=sn(),x=xo(),p=ho(),m=Ar(),R=an(),N=Ta(),I=Oa(),C=on(),S=cn(),_=$a(),q=po(),P=Ir(),V=ue(),T=Tr(),w=bo(),h=go(),O=yo(),$=vo(),j=Eo(),L=fn(),M=wo(),U=Ro(),G=So(),K=Ao(),W=Io();return _t={parse:s,valid:a,clean:i,inc:u,diff:c,major:f,minor:o,patch:l,prerelease:d,compare:y,rcompare:b,compareLoose:g,compareBuild:A,sort:x,rsort:p,gt:m,lt:R,eq:N,neq:I,gte:C,lte:S,cmp:_,coerce:q,Comparator:P,Range:V,satisfies:T,toComparators:w,maxSatisfying:h,minSatisfying:O,minVersion:$,validRange:j,outside:L,gtr:M,ltr:U,intersects:G,simplifyRange:K,subset:W,SemVer:t,re:e.re,src:e.src,tokens:e.t,SEMVER_SPEC_VERSION:r.SEMVER_SPEC_VERSION,RELEASE_TYPES:r.RELEASE_TYPES,compareIdentifiers:n.compareIdentifiers,rcompareIdentifiers:n.rcompareIdentifiers},_t}var Pt,Os;function To(){return Os||(Os=1,Pt=un().satisfies(process.version,">=15.7.0")),Pt}var qt,$s;function Oo(){return $s||($s=1,qt=un().satisfies(process.version,">=16.9.0")),qt}var Dt,Cs;function Ca(){if(Cs)return Dt;Cs=1;const e=To(),r=Oo(),t={ec:["ES256","ES384","ES512"],rsa:["RS256","PS256","RS384","PS384","RS512","PS512"],"rsa-pss":["PS256","PS384","PS512"]},n={ES256:"prime256v1",ES384:"secp384r1",ES512:"secp521r1"};return Dt=function(s,a){if(!s||!a)return;const i=a.asymmetricKeyType;if(!i)return;const u=t[i];if(!u)throw new Error(`Unknown key type "${i}".`);if(!u.includes(s))throw new Error(`"alg" parameter for "${i}" key type must be one of: ${u.join(", ")}.`);if(e)switch(i){case"ec":const c=a.asymmetricKeyDetails.namedCurve,f=n[s];if(c!==f)throw new Error(`"alg" parameter "${s}" requires curve "${f}".`);break;case"rsa-pss":if(r){const o=parseInt(s.slice(-3),10),{hashAlgorithm:l,mgf1HashAlgorithm:d,saltLength:y}=a.asymmetricKeyDetails;if(l!==`sha${o}`||d!==l)throw new Error(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${s}.`);if(y!==void 0&&y>o>>3)throw new Error(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${s}.`)}break}},Dt}var Bt,js;function ja(){if(js)return Bt;js=1;var e=un();return Bt=e.satisfies(process.version,"^6.12.0 || >=8.0.0"),Bt}var Ft,Ls;function $o(){if(Ls)return Ft;Ls=1;const e=wr(),r=Ra(),t=Sa(),n=wa(),s=Aa(),a=Ca(),i=ja(),u=tn(),{KeyObject:c,createSecretKey:f,createPublicKey:o}=vr,l=["RS256","RS384","RS512"],d=["ES256","ES384","ES512"],y=["RS256","RS384","RS512"],b=["HS256","HS384","HS512"];return i&&(l.splice(l.length,0,"PS256","PS384","PS512"),y.splice(y.length,0,"PS256","PS384","PS512")),Ft=function(g,A,x,p){typeof x=="function"&&!p&&(p=x,x={}),x||(x={}),x=Object.assign({},x);let m;if(p?m=p:m=function(_,q){if(_)throw _;return q},x.clockTimestamp&&typeof x.clockTimestamp!="number")return m(new e("clockTimestamp must be a number"));if(x.nonce!==void 0&&(typeof x.nonce!="string"||x.nonce.trim()===""))return m(new e("nonce must be a non-empty string"));if(x.allowInvalidAsymmetricKeyTypes!==void 0&&typeof x.allowInvalidAsymmetricKeyTypes!="boolean")return m(new e("allowInvalidAsymmetricKeyTypes must be a boolean"));const R=x.clockTimestamp||Math.floor(Date.now()/1e3);if(!g)return m(new e("jwt must be provided"));if(typeof g!="string")return m(new e("jwt must be a string"));const N=g.split(".");if(N.length!==3)return m(new e("jwt malformed"));let I;try{I=n(g,{complete:!0})}catch(_){return m(_)}if(!I)return m(new e("invalid token"));const C=I.header;let S;if(typeof A=="function"){if(!p)return m(new e("verify must be called asynchronous if secret or public key is provided as a callback"));S=A}else S=function(_,q){return q(null,A)};return S(C,function(_,q){if(_)return m(new e("error in secret or public key callback: "+_.message));const P=N[2].trim()!=="";if(!P&&q)return m(new e("jwt signature is required"));if(P&&!q)return m(new e("secret or public key must be provided"));if(!P&&!x.algorithms)return m(new e('please specify "none" in "algorithms" to verify unsigned tokens'));if(q!=null&&!(q instanceof c))try{q=o(q)}catch{try{q=f(typeof q=="string"?Buffer.from(q):q)}catch{return m(new e("secretOrPublicKey is not valid key material"))}}if(x.algorithms||(q.type==="secret"?x.algorithms=b:["rsa","rsa-pss"].includes(q.asymmetricKeyType)?x.algorithms=y:q.asymmetricKeyType==="ec"?x.algorithms=d:x.algorithms=l),x.algorithms.indexOf(I.header.alg)===-1)return m(new e("invalid algorithm"));if(C.alg.startsWith("HS")&&q.type!=="secret")return m(new e(`secretOrPublicKey must be a symmetric key when using ${C.alg}`));if(/^(?:RS|PS|ES)/.test(C.alg)&&q.type!=="public")return m(new e(`secretOrPublicKey must be an asymmetric key when using ${C.alg}`));if(!x.allowInvalidAsymmetricKeyTypes)try{a(C.alg,q)}catch(w){return m(w)}let V;try{V=u.verify(g,I.header.alg,q)}catch(w){return m(w)}if(!V)return m(new e("invalid signature"));const T=I.payload;if(typeof T.nbf<"u"&&!x.ignoreNotBefore){if(typeof T.nbf!="number")return m(new e("invalid nbf value"));if(T.nbf>R+(x.clockTolerance||0))return m(new r("jwt not active",new Date(T.nbf*1e3)))}if(typeof T.exp<"u"&&!x.ignoreExpiration){if(typeof T.exp!="number")return m(new e("invalid exp value"));if(R>=T.exp+(x.clockTolerance||0))return m(new t("jwt expired",new Date(T.exp*1e3)))}if(x.audience){const w=Array.isArray(x.audience)?x.audience:[x.audience];if(!(Array.isArray(T.aud)?T.aud:[T.aud]).some(function($){return w.some(function(j){return j instanceof RegExp?j.test($):j===$})}))return m(new e("jwt audience invalid. expected: "+w.join(" or ")))}if(x.issuer&&(typeof x.issuer=="string"&&T.iss!==x.issuer||Array.isArray(x.issuer)&&x.issuer.indexOf(T.iss)===-1))return m(new e("jwt issuer invalid. expected: "+x.issuer));if(x.subject&&T.sub!==x.subject)return m(new e("jwt subject invalid. expected: "+x.subject));if(x.jwtid&&T.jti!==x.jwtid)return m(new e("jwt jwtid invalid. expected: "+x.jwtid));if(x.nonce&&T.nonce!==x.nonce)return m(new e("jwt nonce invalid. expected: "+x.nonce));if(x.maxAge){if(typeof T.iat!="number")return m(new e("iat required when maxAge is specified"));const w=s(x.maxAge,T.iat);if(typeof w>"u")return m(new e('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));if(R>=w+(x.clockTolerance||0))return m(new t("maxAge exceeded",new Date(w*1e3)))}if(x.complete===!0){const w=I.signature;return m(null,{header:C,payload:T,signature:w})}return m(null,T)})},Ft}var Mt,Ns;function Co(){if(Ns)return Mt;Ns=1;var e=1/0,r=9007199254740991,t=17976931348623157e292,n=NaN,s="[object Arguments]",a="[object Function]",i="[object GeneratorFunction]",u="[object String]",c="[object Symbol]",f=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,d=/^0o[0-7]+$/i,y=/^(?:0|[1-9]\d*)$/,b=parseInt;function g(v,D){for(var k=-1,ee=v?v.length:0,ne=Array(ee);++k<ee;)ne[k]=D(v[k],k,v);return ne}function A(v,D,k,ee){for(var ne=v.length,le=k+-1;++le<ne;)if(D(v[le],le,v))return le;return-1}function x(v,D,k){if(D!==D)return A(v,p,k);for(var ee=k-1,ne=v.length;++ee<ne;)if(v[ee]===D)return ee;return-1}function p(v){return v!==v}function m(v,D){for(var k=-1,ee=Array(v);++k<v;)ee[k]=D(k);return ee}function R(v,D){return g(D,function(k){return v[k]})}function N(v,D){return function(k){return v(D(k))}}var I=Object.prototype,C=I.hasOwnProperty,S=I.toString,_=I.propertyIsEnumerable,q=N(Object.keys,Object),P=Math.max;function V(v,D){var k=j(v)||$(v)?m(v.length,String):[],ee=k.length,ne=!!ee;for(var le in v)C.call(v,le)&&!(ne&&(le=="length"||w(le,ee)))&&k.push(le);return k}function T(v){if(!h(v))return q(v);var D=[];for(var k in Object(v))C.call(v,k)&&k!="constructor"&&D.push(k);return D}function w(v,D){return D=D??r,!!D&&(typeof v=="number"||y.test(v))&&v>-1&&v%1==0&&v<D}function h(v){var D=v&&v.constructor,k=typeof D=="function"&&D.prototype||I;return v===k}function O(v,D,k,ee){v=L(v)?v:Ma(v),k=k&&!ee?Da(k):0;var ne=v.length;return k<0&&(k=P(ne+k,0)),X(v)?k<=ne&&v.indexOf(D,k)>-1:!!ne&&x(v,D,k)>-1}function $(v){return M(v)&&C.call(v,"callee")&&(!_.call(v,"callee")||S.call(v)==s)}var j=Array.isArray;function L(v){return v!=null&&G(v.length)&&!U(v)}function M(v){return W(v)&&L(v)}function U(v){var D=K(v)?S.call(v):"";return D==a||D==i}function G(v){return typeof v=="number"&&v>-1&&v%1==0&&v<=r}function K(v){var D=typeof v;return!!v&&(D=="object"||D=="function")}function W(v){return!!v&&typeof v=="object"}function X(v){return typeof v=="string"||!j(v)&&W(v)&&S.call(v)==u}function Ie(v){return typeof v=="symbol"||W(v)&&S.call(v)==c}function qa(v){if(!v)return v===0?v:0;if(v=Ba(v),v===e||v===-e){var D=v<0?-1:1;return D*t}return v===v?v:0}function Da(v){var D=qa(v),k=D%1;return D===D?k?D-k:D:0}function Ba(v){if(typeof v=="number")return v;if(Ie(v))return n;if(K(v)){var D=typeof v.valueOf=="function"?v.valueOf():v;v=K(D)?D+"":D}if(typeof v!="string")return v===0?v:+v;v=v.replace(f,"");var k=l.test(v);return k||d.test(v)?b(v.slice(2),k?2:8):o.test(v)?n:+v}function Fa(v){return L(v)?V(v):T(v)}function Ma(v){return v?R(v,Fa(v)):[]}return Mt=O,Mt}var kt,_s;function jo(){if(_s)return kt;_s=1;var e="[object Boolean]",r=Object.prototype,t=r.toString;function n(a){return a===!0||a===!1||s(a)&&t.call(a)==e}function s(a){return!!a&&typeof a=="object"}return kt=n,kt}var Gt,Ps;function Lo(){if(Ps)return Gt;Ps=1;var e=1/0,r=17976931348623157e292,t=NaN,n="[object Symbol]",s=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt,f=Object.prototype,o=f.toString;function l(p){return typeof p=="number"&&p==A(p)}function d(p){var m=typeof p;return!!p&&(m=="object"||m=="function")}function y(p){return!!p&&typeof p=="object"}function b(p){return typeof p=="symbol"||y(p)&&o.call(p)==n}function g(p){if(!p)return p===0?p:0;if(p=x(p),p===e||p===-e){var m=p<0?-1:1;return m*r}return p===p?p:0}function A(p){var m=g(p),R=m%1;return m===m?R?m-R:m:0}function x(p){if(typeof p=="number")return p;if(b(p))return t;if(d(p)){var m=typeof p.valueOf=="function"?p.valueOf():p;p=d(m)?m+"":m}if(typeof p!="string")return p===0?p:+p;p=p.replace(s,"");var R=i.test(p);return R||u.test(p)?c(p.slice(2),R?2:8):a.test(p)?t:+p}return Gt=l,Gt}var Ht,qs;function No(){if(qs)return Ht;qs=1;var e="[object Number]",r=Object.prototype,t=r.toString;function n(a){return!!a&&typeof a=="object"}function s(a){return typeof a=="number"||n(a)&&t.call(a)==e}return Ht=s,Ht}var Vt,Ds;function _o(){if(Ds)return Vt;Ds=1;var e="[object Object]";function r(d){var y=!1;if(d!=null&&typeof d.toString!="function")try{y=!!(d+"")}catch{}return y}function t(d,y){return function(b){return d(y(b))}}var n=Function.prototype,s=Object.prototype,a=n.toString,i=s.hasOwnProperty,u=a.call(Object),c=s.toString,f=t(Object.getPrototypeOf,Object);function o(d){return!!d&&typeof d=="object"}function l(d){if(!o(d)||c.call(d)!=e||r(d))return!1;var y=f(d);if(y===null)return!0;var b=i.call(y,"constructor")&&y.constructor;return typeof b=="function"&&b instanceof b&&a.call(b)==u}return Vt=l,Vt}var Ut,Bs;function Po(){if(Bs)return Ut;Bs=1;var e="[object String]",r=Object.prototype,t=r.toString,n=Array.isArray;function s(i){return!!i&&typeof i=="object"}function a(i){return typeof i=="string"||!n(i)&&s(i)&&t.call(i)==e}return Ut=a,Ut}var zt,Fs;function qo(){if(Fs)return zt;Fs=1;var e="Expected a function",r=1/0,t=17976931348623157e292,n=NaN,s="[object Symbol]",a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt,o=Object.prototype,l=o.toString;function d(R,N){var I;if(typeof N!="function")throw new TypeError(e);return R=p(R),function(){return--R>0&&(I=N.apply(this,arguments)),R<=1&&(N=void 0),I}}function y(R){return d(2,R)}function b(R){var N=typeof R;return!!R&&(N=="object"||N=="function")}function g(R){return!!R&&typeof R=="object"}function A(R){return typeof R=="symbol"||g(R)&&l.call(R)==s}function x(R){if(!R)return R===0?R:0;if(R=m(R),R===r||R===-r){var N=R<0?-1:1;return N*t}return R===R?R:0}function p(R){var N=x(R),I=N%1;return N===N?I?N-I:N:0}function m(R){if(typeof R=="number")return R;if(A(R))return n;if(b(R)){var N=typeof R.valueOf=="function"?R.valueOf():R;R=b(N)?N+"":N}if(typeof R!="string")return R===0?R:+R;R=R.replace(a,"");var I=u.test(R);return I||c.test(R)?f(R.slice(2),I?2:8):i.test(R)?n:+R}return zt=y,zt}var Kt,Ms;function Do(){if(Ms)return Kt;Ms=1;const e=Aa(),r=ja(),t=Ca(),n=tn(),s=Co(),a=jo(),i=Lo(),u=No(),c=_o(),f=Po(),o=qo(),{KeyObject:l,createSecretKey:d,createPrivateKey:y}=vr,b=["RS256","RS384","RS512","ES256","ES384","ES512","HS256","HS384","HS512","none"];r&&b.splice(3,0,"PS256","PS384","PS512");const g={expiresIn:{isValid:function(I){return i(I)||f(I)&&I},message:'"expiresIn" should be a number of seconds or string representing a timespan'},notBefore:{isValid:function(I){return i(I)||f(I)&&I},message:'"notBefore" should be a number of seconds or string representing a timespan'},audience:{isValid:function(I){return f(I)||Array.isArray(I)},message:'"audience" must be a string or array'},algorithm:{isValid:s.bind(null,b),message:'"algorithm" must be a valid string enum value'},header:{isValid:c,message:'"header" must be an object'},encoding:{isValid:f,message:'"encoding" must be a string'},issuer:{isValid:f,message:'"issuer" must be a string'},subject:{isValid:f,message:'"subject" must be a string'},jwtid:{isValid:f,message:'"jwtid" must be a string'},noTimestamp:{isValid:a,message:'"noTimestamp" must be a boolean'},keyid:{isValid:f,message:'"keyid" must be a string'},mutatePayload:{isValid:a,message:'"mutatePayload" must be a boolean'},allowInsecureKeySizes:{isValid:a,message:'"allowInsecureKeySizes" must be a boolean'},allowInvalidAsymmetricKeyTypes:{isValid:a,message:'"allowInvalidAsymmetricKeyTypes" must be a boolean'}},A={iat:{isValid:u,message:'"iat" should be a number of seconds'},exp:{isValid:u,message:'"exp" should be a number of seconds'},nbf:{isValid:u,message:'"nbf" should be a number of seconds'}};function x(I,C,S,_){if(!c(S))throw new Error('Expected "'+_+'" to be a plain object.');Object.keys(S).forEach(function(q){const P=I[q];if(!P){if(!C)throw new Error('"'+q+'" is not allowed in "'+_+'"');return}if(!P.isValid(S[q]))throw new Error(P.message)})}function p(I){return x(g,!1,I,"options")}function m(I){return x(A,!0,I,"payload")}const R={audience:"aud",issuer:"iss",subject:"sub",jwtid:"jti"},N=["expiresIn","notBefore","noTimestamp","audience","issuer","subject","jwtid"];return Kt=function(I,C,S,_){typeof S=="function"?(_=S,S={}):S=S||{};const q=typeof I=="object"&&!Buffer.isBuffer(I),P=Object.assign({alg:S.algorithm||"HS256",typ:q?"JWT":void 0,kid:S.keyid},S.header);function V(h){if(_)return _(h);throw h}if(!C&&S.algorithm!=="none")return V(new Error("secretOrPrivateKey must have a value"));if(C!=null&&!(C instanceof l))try{C=y(C)}catch{try{C=d(typeof C=="string"?Buffer.from(C):C)}catch{return V(new Error("secretOrPrivateKey is not valid key material"))}}if(P.alg.startsWith("HS")&&C.type!=="secret")return V(new Error(`secretOrPrivateKey must be a symmetric key when using ${P.alg}`));if(/^(?:RS|PS|ES)/.test(P.alg)){if(C.type!=="private")return V(new Error(`secretOrPrivateKey must be an asymmetric key when using ${P.alg}`));if(!S.allowInsecureKeySizes&&!P.alg.startsWith("ES")&&C.asymmetricKeyDetails!==void 0&&C.asymmetricKeyDetails.modulusLength<2048)return V(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${P.alg}`))}if(typeof I>"u")return V(new Error("payload is required"));if(q){try{m(I)}catch(h){return V(h)}S.mutatePayload||(I=Object.assign({},I))}else{const h=N.filter(function(O){return typeof S[O]<"u"});if(h.length>0)return V(new Error("invalid "+h.join(",")+" option for "+typeof I+" payload"))}if(typeof I.exp<"u"&&typeof S.expiresIn<"u")return V(new Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));if(typeof I.nbf<"u"&&typeof S.notBefore<"u")return V(new Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));try{p(S)}catch(h){return V(h)}if(!S.allowInvalidAsymmetricKeyTypes)try{t(P.alg,C)}catch(h){return V(h)}const T=I.iat||Math.floor(Date.now()/1e3);if(S.noTimestamp?delete I.iat:q&&(I.iat=T),typeof S.notBefore<"u"){try{I.nbf=e(S.notBefore,T)}catch(h){return V(h)}if(typeof I.nbf>"u")return V(new Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'))}if(typeof S.expiresIn<"u"&&typeof I=="object"){try{I.exp=e(S.expiresIn,T)}catch(h){return V(h)}if(typeof I.exp>"u")return V(new Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'))}Object.keys(R).forEach(function(h){const O=R[h];if(typeof S[h]<"u"){if(typeof I[O]<"u")return V(new Error('Bad "options.'+h+'" option. The payload already has an "'+O+'" property.'));I[O]=S[h]}});const w=S.encoding||"utf8";if(typeof _=="function")_=_&&o(_),n.createSign({header:P,privateKey:C,payload:I,encoding:w}).once("error",_).once("done",function(h){if(!S.allowInsecureKeySizes&&/^(?:RS|PS)/.test(P.alg)&&h.length<256)return _(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${P.alg}`));_(null,h)});else{let h=n.sign({header:P,payload:I,secret:C,encoding:w});if(!S.allowInsecureKeySizes&&/^(?:RS|PS)/.test(P.alg)&&h.length<256)throw new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${P.alg}`);return h}},Kt}var Xt,ks;function Bo(){return ks||(ks=1,Xt={decode:wa(),verify:$o(),sign:Do(),JsonWebTokenError:wr(),NotBeforeError:Ra(),TokenExpiredError:Sa()}),Xt}var Fo=Bo();const La=Wi(Fo),Ae=new ua,Na="structa-secret-key-2026";Ae.use("/api/*",Si());Ae.use("/static/*",_i({root:"./public"}));const _a=async(e,r)=>{const t=e.req.header("Authorization");if(!t||!t.startsWith("Bearer "))return e.json({error:"Token não fornecido"},401);const n=t.substring(7);try{const s=La.verify(n,Na);e.set("user",s),await r()}catch{return e.json({error:"Token inválido"},401)}};Ae.post("/api/auth/login",async e=>{try{const{email:r,password:t}=await e.req.json();if(!r||!t)return e.json({error:"Email e senha são obrigatórios"},400);const{DB:n}=e.env,s=await n.prepare("SELECT * FROM users WHERE email = ? AND status = ?").bind(r,"active").first();if(!s)return e.json({error:"Credenciais inválidas"},401);if(!await Xi.compare(t,s.password_hash))return e.json({error:"Credenciais inválidas"},401);const i=La.sign({id:s.id,email:s.email,name:s.name,role:s.role},Na,{expiresIn:"8h"});return e.json({token:i,user:{id:s.id,email:s.email,name:s.name,role:s.role}})}catch(r){return console.error("Login error:",r),e.json({error:"Erro ao fazer login"},500)}});Ae.get("/api/auth/me",_a,async e=>{const r=e.get("user");return e.json({user:r})});Ae.get("/api/users",_a,async e=>{try{if(e.get("user").role!=="admin")return e.json({error:"Acesso negado"},403);const{DB:t}=e.env,{results:n}=await t.prepare("SELECT id, email, name, role, status, created_at FROM users ORDER BY created_at DESC").all();return e.json({users:n})}catch(r){return console.error("List users error:",r),e.json({error:"Erro ao listar usuários"},500)}});Ae.get("/",e=>e.html(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Structa Engenharia Patrimonial - Painel Administrativo</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Poppins', sans-serif;
                background: linear-gradient(135deg, #1F3B4D 0%, #365C73 100%);
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .logo-text {
                font-family: 'Playfair Display', serif;
                font-weight: 600;
                letter-spacing: 0.22em;
                color: #C9A56D;
                font-size: 2rem;
            }
            
            .login-card {
                background: #F6F7F8;
                border-radius: 16px;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                overflow: hidden;
                max-width: 450px;
                width: 90%;
                margin: 20px;
            }
            
            @media (max-width: 640px) {
                .logo-text {
                    font-size: 1.5rem;
                }
                
                .logo-image {
                    height: 60px !important;
                }
                
                .login-card {
                    width: 95%;
                    margin: 10px;
                }
                
                .login-header {
                    padding: 30px 20px !important;
                }
                
                .login-body {
                    padding: 30px 20px !important;
                }
            }
            
            .login-header {
                background: linear-gradient(135deg, #1F3B4D 0%, #2A4A5C 100%);
                padding: 40px 30px;
                text-align: center;
            }
            
            .logo-container {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 15px;
                margin-bottom: 15px;
            }
            
            .logo-image {
                height: 80px;
                width: auto;
                filter: drop-shadow(0 2px 8px rgba(201, 165, 109, 0.3));
            }
            
            .login-body {
                padding: 40px 30px;
            }
            
            .form-group {
                margin-bottom: 24px;
            }
            
            .form-label {
                display: block;
                color: #2A2A2A;
                font-weight: 500;
                margin-bottom: 8px;
                font-size: 0.9rem;
            }
            
            .form-input {
                width: 100%;
                padding: 14px 16px;
                border: 2px solid #E0E0E0;
                border-radius: 8px;
                font-size: 0.95rem;
                transition: all 0.3s;
                font-family: 'Poppins', sans-serif;
            }
            
            .form-input:focus {
                outline: none;
                border-color: #C9A56D;
                box-shadow: 0 0 0 3px rgba(201, 165, 109, 0.1);
            }
            
            .btn-login {
                width: 100%;
                padding: 14px;
                background: linear-gradient(135deg, #C9A56D 0%, #B89558 100%);
                color: #F6F7F8;
                border: none;
                border-radius: 8px;
                font-weight: 600;
                font-size: 1rem;
                cursor: pointer;
                transition: all 0.3s;
                font-family: 'Poppins', sans-serif;
            }
            
            .btn-login:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 20px rgba(201, 165, 109, 0.4);
            }
            
            .btn-login:active {
                transform: translateY(0);
            }
            
            .btn-login:disabled {
                opacity: 0.6;
                cursor: not-allowed;
            }
            
            .error-message {
                background: #FEE;
                color: #C33;
                padding: 12px;
                border-radius: 6px;
                margin-bottom: 20px;
                font-size: 0.9rem;
                display: none;
            }
            
            .success-message {
                background: #EFE;
                color: #3C3;
                padding: 12px;
                border-radius: 6px;
                margin-bottom: 20px;
                font-size: 0.9rem;
                display: none;
            }
            
            .forgot-password {
                text-align: center;
                margin-top: 16px;
            }
            
            .forgot-password a {
                color: #1F3B4D;
                text-decoration: none;
                font-size: 0.9rem;
                transition: color 0.3s;
            }
            
            .forgot-password a:hover {
                color: #C9A56D;
            }
        </style>
    </head>
    <body>
        <div class="login-card">
            <div class="login-header">
                <div class="logo-container">
                    <img src="/static/logo-structa.png" alt="Structa" class="logo-image">
                    <h1 class="logo-text">STRUCTA</h1>
                </div>
                <p style="color: #C9A56D; margin-top: 10px; font-size: 0.9rem; line-height: 1.4;">
                    Engenharia Patrimonial<br>de Alta Performance
                </p>
                <p style="color: #F6F7F8; margin-top: 12px; font-size: 0.85rem; opacity: 0.9;">
                    Painel Administrativo
                </p>
            </div>
            
            <div class="login-body">
                <div id="errorMessage" class="error-message"></div>
                <div id="successMessage" class="success-message"></div>
                
                <form id="loginForm">
                    <div class="form-group">
                        <label class="form-label">
                            <i class="fas fa-user" style="color: #C9A56D; margin-right: 5px;"></i>
                            Usuário
                        </label>
                        <input 
                            type="text" 
                            id="email" 
                            class="form-input" 
                            placeholder="Digite seu usuário"
                            required
                            autocomplete="username"
                        >
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">
                            <i class="fas fa-lock" style="color: #C9A56D; margin-right: 5px;"></i>
                            Senha
                        </label>
                        <input 
                            type="password" 
                            id="password" 
                            class="form-input" 
                            placeholder="Digite sua senha"
                            required
                            autocomplete="current-password"
                        >
                    </div>
                    
                    <button type="submit" class="btn-login" id="loginButton">
                        <i class="fas fa-sign-in-alt" style="margin-right: 8px;"></i>
                        Entrar
                    </button>
                    
                    <div class="forgot-password">
                        <a href="#" onclick="handleForgotPassword(event)">
                            <i class="fas fa-question-circle" style="margin-right: 5px;"></i>
                            Esqueci minha senha
                        </a>
                    </div>
                </form>
            </div>
        </div>
        
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"><\/script>
        <script>
            const loginForm = document.getElementById('loginForm');
            const loginButton = document.getElementById('loginButton');
            const errorMessage = document.getElementById('errorMessage');
            const successMessage = document.getElementById('successMessage');
            
            function showError(message) {
                errorMessage.textContent = message;
                errorMessage.style.display = 'block';
                successMessage.style.display = 'none';
            }
            
            function showSuccess(message) {
                successMessage.textContent = message;
                successMessage.style.display = 'block';
                errorMessage.style.display = 'none';
            }
            
            function hideMessages() {
                errorMessage.style.display = 'none';
                successMessage.style.display = 'none';
            }
            
            function handleForgotPassword(event) {
                event.preventDefault();
                alert('Para recuperar sua senha, entre em contato com o administrador do sistema.

Email: suporte@structaep.com.br');
            }
            
            loginForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                hideMessages();
                
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                
                loginButton.disabled = true;
                loginButton.innerHTML = '<i class="fas fa-spinner fa-spin" style="margin-right: 8px;"></i>Entrando...';
                
                try {
                    const response = await axios.post('/api/auth/login', {
                        email,
                        password
                    });
                    
                    if (response.data.token) {
                        localStorage.setItem('token', response.data.token);
                        localStorage.setItem('user', JSON.stringify(response.data.user));
                        
                        showSuccess('Login realizado com sucesso! Redirecionando...');
                        
                        setTimeout(() => {
                            window.location.href = '/dashboard';
                        }, 1000);
                    }
                } catch (error) {
                    console.error('Login error:', error);
                    if (error.response?.data?.error) {
                        showError(error.response.data.error);
                    } else {
                        showError('Erro ao fazer login. Tente novamente.');
                    }
                } finally {
                    loginButton.disabled = false;
                    loginButton.innerHTML = '<i class="fas fa-sign-in-alt" style="margin-right: 8px;"></i>Entrar';
                }
            });
            
            // Limpar mensagens quando o usuário começar a digitar
            document.getElementById('email').addEventListener('input', hideMessages);
            document.getElementById('password').addEventListener('input', hideMessages);
        <\/script>
    </body>
    </html>
  `));Ae.get("/dashboard",e=>e.html(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dashboard - Structa Painel</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"><\/script>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Poppins', sans-serif;
                background: #F6F7F8;
            }
            
            .sidebar {
                position: fixed;
                left: 0;
                top: 0;
                height: 100vh;
                width: 280px;
                background: linear-gradient(180deg, #1F3B4D 0%, #2A4A5C 100%);
                box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);
                transition: transform 0.3s ease;
                z-index: 1000;
                overflow-y: auto;
            }
            
            .sidebar-header {
                padding: 24px 20px;
                border-bottom: 1px solid rgba(201, 165, 109, 0.2);
                display: flex;
                align-items: center;
                gap: 12px;
            }
            
            .sidebar-logo {
                height: 40px;
                width: auto;
            }
            
            .sidebar-title {
                font-family: 'Playfair Display', serif;
                font-weight: 600;
                letter-spacing: 0.15em;
                color: #C9A56D;
                font-size: 1.3rem;
            }
            
            .sidebar-menu {
                padding: 20px 0;
            }
            
            .menu-item {
                display: flex;
                align-items: center;
                padding: 14px 24px;
                color: #F6F7F8;
                text-decoration: none;
                transition: all 0.3s;
                cursor: pointer;
                border-left: 3px solid transparent;
            }
            
            .menu-item:hover {
                background: rgba(201, 165, 109, 0.1);
                border-left-color: #C9A56D;
            }
            
            .menu-item.active {
                background: rgba(201, 165, 109, 0.15);
                border-left-color: #C9A56D;
                color: #C9A56D;
            }
            
            .menu-item i {
                width: 24px;
                margin-right: 12px;
                text-align: center;
            }
            
            .main-content {
                margin-left: 280px;
                min-height: 100vh;
                transition: margin-left 0.3s ease;
            }
            
            .top-bar {
                background: white;
                padding: 20px 32px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .user-info {
                display: flex;
                align-items: center;
                gap: 12px;
            }
            
            .user-avatar {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                background: linear-gradient(135deg, #C9A56D 0%, #B89558 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: 600;
            }
            
            .content-area {
                padding: 32px;
            }
            
            .stats-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 24px;
                margin-bottom: 32px;
            }
            
            .stat-card {
                background: white;
                padding: 24px;
                border-radius: 12px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
                transition: transform 0.3s, box-shadow 0.3s;
            }
            
            .stat-card:hover {
                transform: translateY(-4px);
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            }
            
            .stat-icon {
                width: 56px;
                height: 56px;
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
                margin-bottom: 16px;
            }
            
            .stat-value {
                font-size: 2rem;
                font-weight: 700;
                color: #1F3B4D;
                margin-bottom: 8px;
            }
            
            .stat-label {
                color: #666;
                font-size: 0.9rem;
            }
            
            .chart-container {
                background: white;
                padding: 24px;
                border-radius: 12px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
                margin-bottom: 24px;
            }
            
            .mobile-menu-btn {
                display: none;
                position: fixed;
                bottom: 24px;
                right: 24px;
                width: 56px;
                height: 56px;
                background: linear-gradient(135deg, #C9A56D 0%, #B89558 100%);
                border-radius: 50%;
                border: none;
                color: white;
                font-size: 20px;
                box-shadow: 0 4px 12px rgba(201, 165, 109, 0.4);
                cursor: pointer;
                z-index: 999;
            }
            
            @media (max-width: 768px) {
                .sidebar {
                    transform: translateX(-100%);
                }
                
                .sidebar.active {
                    transform: translateX(0);
                }
                
                .main-content {
                    margin-left: 0;
                }
                
                .mobile-menu-btn {
                    display: block;
                }
                
                .top-bar {
                    padding: 16px 20px;
                }
                
                .content-area {
                    padding: 20px;
                }
                
                .stats-grid {
                    grid-template-columns: 1fr;
                }
            }
        </style>
    </head>
    <body>
        <!-- Sidebar -->
        <div class="sidebar" id="sidebar">
            <div class="sidebar-header">
                <img src="/static/logo-structa.png" alt="Structa" class="sidebar-logo">
                <div class="sidebar-title">STRUCTA</div>
            </div>
            
            <nav class="sidebar-menu">
                <a href="/dashboard" class="menu-item active">
                    <i class="fas fa-chart-line"></i>
                    <span>Dashboard</span>
                </a>
                <a href="/vendas" class="menu-item">
                    <i class="fas fa-handshake"></i>
                    <span>Apresentação de Vendas</span>
                </a>
                <a href="/clientes" class="menu-item">
                    <i class="fas fa-users"></i>
                    <span>Clientes</span>
                </a>
                <a href="/cadastro-vendas" class="menu-item">
                    <i class="fas fa-file-invoice-dollar"></i>
                    <span>Cadastrar Vendas</span>
                </a>
                <a href="/relatorios" class="menu-item">
                    <i class="fas fa-chart-bar"></i>
                    <span>Relatórios</span>
                </a>
                <a href="/configuracoes" class="menu-item">
                    <i class="fas fa-cog"></i>
                    <span>Configurações</span>
                </a>
                <a onclick="logout()" class="menu-item" style="margin-top: auto; border-top: 1px solid rgba(201, 165, 109, 0.2);">
                    <i class="fas fa-sign-out-alt"></i>
                    <span>Sair</span>
                </a>
            </nav>
        </div>
        
        <!-- Main Content -->
        <div class="main-content">
            <!-- Top Bar -->
            <div class="top-bar">
                <h1 style="font-size: 1.5rem; font-weight: 600; color: #1F3B4D;">Dashboard</h1>
                <div class="user-info">
                    <div>
                        <div style="font-weight: 600; color: #1F3B4D; text-align: right;" id="userName">Carregando...</div>
                        <div style="font-size: 0.85rem; color: #666; text-align: right;" id="userRole">Admin</div>
                    </div>
                    <div class="user-avatar" id="userAvatar">A</div>
                </div>
            </div>
            
            <!-- Content Area -->
            <div class="content-area">
                <!-- Stats Grid -->
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-icon" style="background: rgba(76, 175, 80, 0.1); color: #4CAF50;">
                            <i class="fas fa-dollar-sign"></i>
                        </div>
                        <div class="stat-value">R$ 0,00</div>
                        <div class="stat-label">Vendas do Mês</div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-icon" style="background: rgba(33, 150, 243, 0.1); color: #2196F3;">
                            <i class="fas fa-users"></i>
                        </div>
                        <div class="stat-value">0</div>
                        <div class="stat-label">Clientes Ativos</div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-icon" style="background: rgba(255, 152, 0, 0.1); color: #FF9800;">
                            <i class="fas fa-handshake"></i>
                        </div>
                        <div class="stat-value">0</div>
                        <div class="stat-label">Negociações</div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-icon" style="background: rgba(156, 39, 176, 0.1); color: #9C27B0;">
                            <i class="fas fa-chart-line"></i>
                        </div>
                        <div class="stat-value">0%</div>
                        <div class="stat-label">Taxa de Conversão</div>
                    </div>
                </div>
                
                <!-- Charts -->
                <div class="chart-container">
                    <h2 style="font-size: 1.2rem; font-weight: 600; color: #1F3B4D; margin-bottom: 20px;">
                        Vendas por Mês
                    </h2>
                    <canvas id="salesChart" height="80"></canvas>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
                    <div class="chart-container">
                        <h2 style="font-size: 1.2rem; font-weight: 600; color: #1F3B4D; margin-bottom: 20px;">
                            Tipos de Consórcio
                        </h2>
                        <canvas id="consortiumChart"></canvas>
                    </div>
                    
                    <div class="chart-container">
                        <h2 style="font-size: 1.2rem; font-weight: 600; color: #1F3B4D; margin-bottom: 20px;">
                            Status das Vendas
                        </h2>
                        <canvas id="statusChart"></canvas>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Mobile Menu Button -->
        <button class="mobile-menu-btn" onclick="toggleSidebar()">
            <i class="fas fa-bars"></i>
        </button>
        
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"><\/script>
        <script>
            // Auth check
            const token = localStorage.getItem('token');
            const user = JSON.parse(localStorage.getItem('user') || '{}');
            
            if (!token) {
                window.location.href = '/';
            } else {
                document.getElementById('userName').textContent = user.name || 'Usuário';
                document.getElementById('userRole').textContent = user.role === 'admin' ? 'Administrador' : 'Vendedor';
                document.getElementById('userAvatar').textContent = (user.name || 'U')[0].toUpperCase();
            }
            
            function logout() {
                if (confirm('Deseja realmente sair?')) {
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    window.location.href = '/';
                }
            }
            
            function toggleSidebar() {
                document.getElementById('sidebar').classList.toggle('active');
            }
            
            // Charts
            const salesCtx = document.getElementById('salesChart').getContext('2d');
            new Chart(salesCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                    datasets: [{
                        label: 'Vendas (R$)',
                        data: [0, 0, 0, 0, 0, 0],
                        borderColor: '#C9A56D',
                        backgroundColor: 'rgba(201, 165, 109, 0.1)',
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
            
            const consortiumCtx = document.getElementById('consortiumChart').getContext('2d');
            new Chart(consortiumCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Imóvel', 'Veículo', 'Outros'],
                    datasets: [{
                        data: [0, 0, 0],
                        backgroundColor: ['#1F3B4D', '#C9A56D', '#365C73']
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true
                }
            });
            
            const statusCtx = document.getElementById('statusChart').getContext('2d');
            new Chart(statusCtx, {
                type: 'pie',
                data: {
                    labels: ['Ativas', 'Pendentes', 'Canceladas'],
                    datasets: [{
                        data: [0, 0, 0],
                        backgroundColor: ['#4CAF50', '#FF9800', '#F44336']
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true
                }
            });
        <\/script>
    </body>
    </html>
  `));const Gs=new ua,Mo=Object.assign({"/src/index.tsx":Ae});let Pa=!1;for(const[,e]of Object.entries(Mo))e&&(Gs.all("*",r=>{let t;try{t=r.executionCtx}catch{}return e.fetch(r.req.raw,r.env,t)}),Gs.notFound(r=>{let t;try{t=r.executionCtx}catch{}return e.fetch(r.req.raw,r.env,t)}),Pa=!0);if(!Pa)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{Gs as default};
