var Ms=Object.defineProperty;var dn=e=>{throw TypeError(e)};var Hs=(e,r,t)=>r in e?Ms(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var B=(e,r,t)=>Hs(e,typeof r!="symbol"?r+"":r,t),Cr=(e,r,t)=>r.has(e)||dn("Cannot "+t);var E=(e,r,t)=>(Cr(e,r,"read from private field"),t?t.call(e):r.get(e)),G=(e,r,t)=>r.has(e)?dn("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,t),F=(e,r,t,n)=>(Cr(e,r,"write to private field"),n?n.call(e,t):r.set(e,t),t),z=(e,r,t)=>(Cr(e,r,"access private method"),t);var un=(e,r,t,n)=>({set _(a){F(e,r,a,t)},get _(){return E(e,r,n)}});import yr from"crypto";import pr from"buffer";import Zt from"stream";import Er from"util";var xn=(e,r,t)=>(n,a)=>{let s=-1;return i(0);async function i(l){if(l<=s)throw new Error("next() called multiple times");s=l;let c,f=!1,o;if(e[l]?(o=e[l][0][0],n.req.routeIndex=l):o=l===e.length&&a||void 0,o)try{c=await o(n,()=>i(l+1))}catch(d){if(d instanceof Error&&r)n.error=d,c=await r(d,n),f=!0;else throw d}else n.finalized===!1&&t&&(c=await t(n));return c&&(n.finalized===!1||f)&&(n.res=c),n}},Gs=Symbol(),Vs=async(e,r=Object.create(null))=>{const{all:t=!1,dot:n=!1}=r,s=(e instanceof es?e.raw.headers:e.headers).get("Content-Type");return s!=null&&s.startsWith("multipart/form-data")||s!=null&&s.startsWith("application/x-www-form-urlencoded")?Us(e,{all:t,dot:n}):{}};async function Us(e,r){const t=await e.formData();return t?zs(t,r):{}}function zs(e,r){const t=Object.create(null);return e.forEach((n,a)=>{r.all||a.endsWith("[]")?Xs(t,a,n):t[a]=n}),r.dot&&Object.entries(t).forEach(([n,a])=>{n.includes(".")&&(Ks(t,n,a),delete t[n])}),t}var Xs=(e,r,t)=>{e[r]!==void 0?Array.isArray(e[r])?e[r].push(t):e[r]=[e[r],t]:r.endsWith("[]")?e[r]=[t]:e[r]=t},Ks=(e,r,t)=>{let n=e;const a=r.split(".");a.forEach((s,i)=>{i===a.length-1?n[s]=t:((!n[s]||typeof n[s]!="object"||Array.isArray(n[s])||n[s]instanceof File)&&(n[s]=Object.create(null)),n=n[s])})},Wa=e=>{const r=e.split("/");return r[0]===""&&r.shift(),r},Ws=e=>{const{groups:r,path:t}=Js(e),n=Wa(t);return Ys(n,r)},Js=e=>{const r=[];return e=e.replace(/\{[^}]+\}/g,(t,n)=>{const a=`@${n}`;return r.push([a,t]),a}),{groups:r,path:e}},Ys=(e,r)=>{for(let t=r.length-1;t>=0;t--){const[n]=r[t];for(let a=e.length-1;a>=0;a--)if(e[a].includes(n)){e[a]=e[a].replace(n,r[t][1]);break}}return e},fr={},Zs=(e,r)=>{if(e==="*")return"*";const t=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(t){const n=`${e}#${r}`;return fr[n]||(t[2]?fr[n]=r&&r[0]!==":"&&r[0]!=="*"?[n,t[1],new RegExp(`^${t[2]}(?=/${r})`)]:[e,t[1],new RegExp(`^${t[2]}$`)]:fr[n]=[e,t[1],!0]),fr[n]}return null},Qt=(e,r)=>{try{return r(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,t=>{try{return r(t)}catch{return t}})}},Qs=e=>Qt(e,decodeURI),Ja=e=>{const r=e.url,t=r.indexOf("/",r.indexOf(":")+4);let n=t;for(;n<r.length;n++){const a=r.charCodeAt(n);if(a===37){const s=r.indexOf("?",n),i=r.indexOf("#",n),l=s===-1?i===-1?void 0:i:i===-1?s:Math.min(s,i),c=r.slice(t,l);return Qs(c.includes("%25")?c.replace(/%25/g,"%2525"):c)}else if(a===63||a===35)break}return r.slice(t,n)},ei=e=>{const r=Ja(e);return r.length>1&&r.at(-1)==="/"?r.slice(0,-1):r},qe=(e,r,...t)=>(t.length&&(r=qe(r,...t)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${r==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(r==null?void 0:r[0])==="/"?r.slice(1):r}`}`),Ya=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const r=e.split("/"),t=[];let n="";return r.forEach(a=>{if(a!==""&&!/\:/.test(a))n+="/"+a;else if(/\:/.test(a))if(/\?/.test(a)){t.length===0&&n===""?t.push("/"):t.push(n);const s=a.replace("?","");n+="/"+s,t.push(n)}else n+="/"+a}),t.filter((a,s,i)=>i.indexOf(a)===s)},Or=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Qt(e,Qa):e):e,Za=(e,r,t)=>{let n;if(!t&&r&&!/[%+]/.test(r)){let i=e.indexOf("?",8);if(i===-1)return;for(e.startsWith(r,i+1)||(i=e.indexOf(`&${r}`,i+1));i!==-1;){const l=e.charCodeAt(i+r.length+1);if(l===61){const c=i+r.length+2,f=e.indexOf("&",c);return Or(e.slice(c,f===-1?void 0:f))}else if(l==38||isNaN(l))return"";i=e.indexOf(`&${r}`,i+1)}if(n=/[%+]/.test(e),!n)return}const a={};n??(n=/[%+]/.test(e));let s=e.indexOf("?",8);for(;s!==-1;){const i=e.indexOf("&",s+1);let l=e.indexOf("=",s);l>i&&i!==-1&&(l=-1);let c=e.slice(s+1,l===-1?i===-1?void 0:i:l);if(n&&(c=Or(c)),s=i,c==="")continue;let f;l===-1?f="":(f=e.slice(l+1,i===-1?void 0:i),n&&(f=Or(f))),t?(a[c]&&Array.isArray(a[c])||(a[c]=[]),a[c].push(f)):a[c]??(a[c]=f)}return r?a[r]:a},ri=Za,ti=(e,r)=>Za(e,r,!0),Qa=decodeURIComponent,hn=e=>Qt(e,Qa),Me,ae,be,rs,ts,Wt,ye,Ga,es=(Ga=class{constructor(e,r="/",t=[[]]){G(this,be);B(this,"raw");G(this,Me);G(this,ae);B(this,"routeIndex",0);B(this,"path");B(this,"bodyCache",{});G(this,ye,e=>{const{bodyCache:r,raw:t}=this,n=r[e];if(n)return n;const a=Object.keys(r)[0];return a?r[a].then(s=>(a==="json"&&(s=JSON.stringify(s)),new Response(s)[e]())):r[e]=t[e]()});this.raw=e,this.path=r,F(this,ae,t),F(this,Me,{})}param(e){return e?z(this,be,rs).call(this,e):z(this,be,ts).call(this)}query(e){return ri(this.url,e)}queries(e){return ti(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const r={};return this.raw.headers.forEach((t,n)=>{r[n]=t}),r}async parseBody(e){var r;return(r=this.bodyCache).parsedBody??(r.parsedBody=await Vs(this,e))}json(){return E(this,ye).call(this,"text").then(e=>JSON.parse(e))}text(){return E(this,ye).call(this,"text")}arrayBuffer(){return E(this,ye).call(this,"arrayBuffer")}blob(){return E(this,ye).call(this,"blob")}formData(){return E(this,ye).call(this,"formData")}addValidatedData(e,r){E(this,Me)[e]=r}valid(e){return E(this,Me)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[Gs](){return E(this,ae)}get matchedRoutes(){return E(this,ae)[0].map(([[,e]])=>e)}get routePath(){return E(this,ae)[0].map(([[,e]])=>e)[this.routeIndex].path}},Me=new WeakMap,ae=new WeakMap,be=new WeakSet,rs=function(e){const r=E(this,ae)[0][this.routeIndex][1][e],t=z(this,be,Wt).call(this,r);return t&&/\%/.test(t)?hn(t):t},ts=function(){const e={},r=Object.keys(E(this,ae)[0][this.routeIndex][1]);for(const t of r){const n=z(this,be,Wt).call(this,E(this,ae)[0][this.routeIndex][1][t]);n!==void 0&&(e[t]=/\%/.test(n)?hn(n):n)}return e},Wt=function(e){return E(this,ae)[1]?E(this,ae)[1][e]:e},ye=new WeakMap,Ga),ni={Stringify:1},ns=async(e,r,t,n,a)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const s=e.callbacks;return s!=null&&s.length?(a?a[0]+=e:a=[e],Promise.all(s.map(l=>l({phase:r,buffer:a,context:n}))).then(l=>Promise.all(l.filter(Boolean).map(c=>ns(c,r,!1,n,a))).then(()=>a[0]))):Promise.resolve(e)},ai="text/plain; charset=UTF-8",$r=(e,r)=>({"Content-Type":e,...r}),We=(e,r)=>new Response(e,r),rr,tr,he,He,pe,re,nr,Ge,Ve,Oe,ar,sr,Ee,Fe,Va,si=(Va=class{constructor(e,r){G(this,Ee);G(this,rr);G(this,tr);B(this,"env",{});G(this,he);B(this,"finalized",!1);B(this,"error");G(this,He);G(this,pe);G(this,re);G(this,nr);G(this,Ge);G(this,Ve);G(this,Oe);G(this,ar);G(this,sr);B(this,"render",(...e)=>(E(this,Ge)??F(this,Ge,r=>this.html(r)),E(this,Ge).call(this,...e)));B(this,"setLayout",e=>F(this,nr,e));B(this,"getLayout",()=>E(this,nr));B(this,"setRenderer",e=>{F(this,Ge,e)});B(this,"header",(e,r,t)=>{this.finalized&&F(this,re,We(E(this,re).body,E(this,re)));const n=E(this,re)?E(this,re).headers:E(this,Oe)??F(this,Oe,new Headers);r===void 0?n.delete(e):t!=null&&t.append?n.append(e,r):n.set(e,r)});B(this,"status",e=>{F(this,He,e)});B(this,"set",(e,r)=>{E(this,he)??F(this,he,new Map),E(this,he).set(e,r)});B(this,"get",e=>E(this,he)?E(this,he).get(e):void 0);B(this,"newResponse",(...e)=>z(this,Ee,Fe).call(this,...e));B(this,"body",(e,r,t)=>z(this,Ee,Fe).call(this,e,r,t));B(this,"text",(e,r,t)=>!E(this,Oe)&&!E(this,He)&&!r&&!t&&!this.finalized?new Response(e):z(this,Ee,Fe).call(this,e,r,$r(ai,t)));B(this,"json",(e,r,t)=>z(this,Ee,Fe).call(this,JSON.stringify(e),r,$r("application/json",t)));B(this,"html",(e,r,t)=>{const n=a=>z(this,Ee,Fe).call(this,a,r,$r("text/html; charset=UTF-8",t));return typeof e=="object"?ns(e,ni.Stringify,!1,{}).then(n):n(e)});B(this,"redirect",(e,r)=>{const t=String(e);return this.header("Location",/[^\x00-\xFF]/.test(t)?encodeURI(t):t),this.newResponse(null,r??302)});B(this,"notFound",()=>(E(this,Ve)??F(this,Ve,()=>We()),E(this,Ve).call(this,this)));F(this,rr,e),r&&(F(this,pe,r.executionCtx),this.env=r.env,F(this,Ve,r.notFoundHandler),F(this,sr,r.path),F(this,ar,r.matchResult))}get req(){return E(this,tr)??F(this,tr,new es(E(this,rr),E(this,sr),E(this,ar))),E(this,tr)}get event(){if(E(this,pe)&&"respondWith"in E(this,pe))return E(this,pe);throw Error("This context has no FetchEvent")}get executionCtx(){if(E(this,pe))return E(this,pe);throw Error("This context has no ExecutionContext")}get res(){return E(this,re)||F(this,re,We(null,{headers:E(this,Oe)??F(this,Oe,new Headers)}))}set res(e){if(E(this,re)&&e){e=We(e.body,e);for(const[r,t]of E(this,re).headers.entries())if(r!=="content-type")if(r==="set-cookie"){const n=E(this,re).headers.getSetCookie();e.headers.delete("set-cookie");for(const a of n)e.headers.append("set-cookie",a)}else e.headers.set(r,t)}F(this,re,e),this.finalized=!0}get var(){return E(this,he)?Object.fromEntries(E(this,he)):{}}},rr=new WeakMap,tr=new WeakMap,he=new WeakMap,He=new WeakMap,pe=new WeakMap,re=new WeakMap,nr=new WeakMap,Ge=new WeakMap,Ve=new WeakMap,Oe=new WeakMap,ar=new WeakMap,sr=new WeakMap,Ee=new WeakSet,Fe=function(e,r,t){const n=E(this,re)?new Headers(E(this,re).headers):E(this,Oe)??new Headers;if(typeof r=="object"&&"headers"in r){const s=r.headers instanceof Headers?r.headers:new Headers(r.headers);for(const[i,l]of s)i.toLowerCase()==="set-cookie"?n.append(i,l):n.set(i,l)}if(t)for(const[s,i]of Object.entries(t))if(typeof i=="string")n.set(s,i);else{n.delete(s);for(const l of i)n.append(s,l)}const a=typeof r=="number"?r:(r==null?void 0:r.status)??E(this,He);return We(e,{status:a,headers:n})},Va),J="ALL",ii="all",oi=["get","post","put","delete","options","patch"],as="Can not add a route since the matcher is already built.",ss=class extends Error{},ci="__COMPOSED_HANDLER",fi=e=>e.text("404 Not Found",404),pn=(e,r)=>{if("getResponse"in e){const t=e.getResponse();return r.newResponse(t.body,t)}return console.error(e),r.text("Internal Server Error",500)},se,Y,is,ie,Te,ur,xr,Ue,li=(Ue=class{constructor(r={}){G(this,Y);B(this,"get");B(this,"post");B(this,"put");B(this,"delete");B(this,"options");B(this,"patch");B(this,"all");B(this,"on");B(this,"use");B(this,"router");B(this,"getPath");B(this,"_basePath","/");G(this,se,"/");B(this,"routes",[]);G(this,ie,fi);B(this,"errorHandler",pn);B(this,"onError",r=>(this.errorHandler=r,this));B(this,"notFound",r=>(F(this,ie,r),this));B(this,"fetch",(r,...t)=>z(this,Y,xr).call(this,r,t[1],t[0],r.method));B(this,"request",(r,t,n,a)=>r instanceof Request?this.fetch(t?new Request(r,t):r,n,a):(r=r.toString(),this.fetch(new Request(/^https?:\/\//.test(r)?r:`http://localhost${qe("/",r)}`,t),n,a)));B(this,"fire",()=>{addEventListener("fetch",r=>{r.respondWith(z(this,Y,xr).call(this,r.request,r,void 0,r.request.method))})});[...oi,ii].forEach(s=>{this[s]=(i,...l)=>(typeof i=="string"?F(this,se,i):z(this,Y,Te).call(this,s,E(this,se),i),l.forEach(c=>{z(this,Y,Te).call(this,s,E(this,se),c)}),this)}),this.on=(s,i,...l)=>{for(const c of[i].flat()){F(this,se,c);for(const f of[s].flat())l.map(o=>{z(this,Y,Te).call(this,f.toUpperCase(),E(this,se),o)})}return this},this.use=(s,...i)=>(typeof s=="string"?F(this,se,s):(F(this,se,"*"),i.unshift(s)),i.forEach(l=>{z(this,Y,Te).call(this,J,E(this,se),l)}),this);const{strict:n,...a}=r;Object.assign(this,a),this.getPath=n??!0?r.getPath??Ja:ei}route(r,t){const n=this.basePath(r);return t.routes.map(a=>{var i;let s;t.errorHandler===pn?s=a.handler:(s=async(l,c)=>(await xn([],t.errorHandler)(l,()=>a.handler(l,c))).res,s[ci]=a.handler),z(i=n,Y,Te).call(i,a.method,a.path,s)}),this}basePath(r){const t=z(this,Y,is).call(this);return t._basePath=qe(this._basePath,r),t}mount(r,t,n){let a,s;n&&(typeof n=="function"?s=n:(s=n.optionHandler,n.replaceRequest===!1?a=c=>c:a=n.replaceRequest));const i=s?c=>{const f=s(c);return Array.isArray(f)?f:[f]}:c=>{let f;try{f=c.executionCtx}catch{}return[c.env,f]};a||(a=(()=>{const c=qe(this._basePath,r),f=c==="/"?0:c.length;return o=>{const d=new URL(o.url);return d.pathname=d.pathname.slice(f)||"/",new Request(d,o)}})());const l=async(c,f)=>{const o=await t(a(c.req.raw),...i(c));if(o)return o;await f()};return z(this,Y,Te).call(this,J,qe(r,"*"),l),this}},se=new WeakMap,Y=new WeakSet,is=function(){const r=new Ue({router:this.router,getPath:this.getPath});return r.errorHandler=this.errorHandler,F(r,ie,E(this,ie)),r.routes=this.routes,r},ie=new WeakMap,Te=function(r,t,n){r=r.toUpperCase(),t=qe(this._basePath,t);const a={basePath:this._basePath,path:t,method:r,handler:n};this.router.add(r,t,[n,a]),this.routes.push(a)},ur=function(r,t){if(r instanceof Error)return this.errorHandler(r,t);throw r},xr=function(r,t,n,a){if(a==="HEAD")return(async()=>new Response(null,await z(this,Y,xr).call(this,r,t,n,"GET")))();const s=this.getPath(r,{env:n}),i=this.router.match(a,s),l=new si(r,{path:s,matchResult:i,env:n,executionCtx:t,notFoundHandler:E(this,ie)});if(i[0].length===1){let f;try{f=i[0][0][0][0](l,async()=>{l.res=await E(this,ie).call(this,l)})}catch(o){return z(this,Y,ur).call(this,o,l)}return f instanceof Promise?f.then(o=>o||(l.finalized?l.res:E(this,ie).call(this,l))).catch(o=>z(this,Y,ur).call(this,o,l)):f??E(this,ie).call(this,l)}const c=xn(i[0],this.errorHandler,E(this,ie));return(async()=>{try{const f=await c(l);if(!f.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return f.res}catch(f){return z(this,Y,ur).call(this,f,l)}})()},Ue),os=[];function di(e,r){const t=this.buildAllMatchers(),n=((a,s)=>{const i=t[a]||t[J],l=i[2][s];if(l)return l;const c=s.match(i[0]);if(!c)return[[],os];const f=c.indexOf("",1);return[i[1][f],c]});return this.match=n,n(e,r)}var mr="[^/]+",Ye=".*",Ze="(?:|/.*)",Be=Symbol(),ui=new Set(".\\+*[^]$()");function xi(e,r){return e.length===1?r.length===1?e<r?-1:1:-1:r.length===1||e===Ye||e===Ze?1:r===Ye||r===Ze?-1:e===mr?1:r===mr?-1:e.length===r.length?e<r?-1:1:r.length-e.length}var $e,je,oe,Pe,hi=(Pe=class{constructor(){G(this,$e);G(this,je);G(this,oe,Object.create(null))}insert(r,t,n,a,s){if(r.length===0){if(E(this,$e)!==void 0)throw Be;if(s)return;F(this,$e,t);return}const[i,...l]=r,c=i==="*"?l.length===0?["","",Ye]:["","",mr]:i==="/*"?["","",Ze]:i.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let f;if(c){const o=c[1];let d=c[2]||mr;if(o&&c[2]&&(d===".*"||(d=d.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(d))))throw Be;if(f=E(this,oe)[d],!f){if(Object.keys(E(this,oe)).some(u=>u!==Ye&&u!==Ze))throw Be;if(s)return;f=E(this,oe)[d]=new Pe,o!==""&&F(f,je,a.varIndex++)}!s&&o!==""&&n.push([o,E(f,je)])}else if(f=E(this,oe)[i],!f){if(Object.keys(E(this,oe)).some(o=>o.length>1&&o!==Ye&&o!==Ze))throw Be;if(s)return;f=E(this,oe)[i]=new Pe}f.insert(l,t,n,a,s)}buildRegExpStr(){const t=Object.keys(E(this,oe)).sort(xi).map(n=>{const a=E(this,oe)[n];return(typeof E(a,je)=="number"?`(${n})@${E(a,je)}`:ui.has(n)?`\\${n}`:n)+a.buildRegExpStr()});return typeof E(this,$e)=="number"&&t.unshift(`#${E(this,$e)}`),t.length===0?"":t.length===1?t[0]:"(?:"+t.join("|")+")"}},$e=new WeakMap,je=new WeakMap,oe=new WeakMap,Pe),br,ir,Ua,pi=(Ua=class{constructor(){G(this,br,{varIndex:0});G(this,ir,new hi)}insert(e,r,t){const n=[],a=[];for(let i=0;;){let l=!1;if(e=e.replace(/\{[^}]+\}/g,c=>{const f=`@\\${i}`;return a[i]=[f,c],i++,l=!0,f}),!l)break}const s=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let i=a.length-1;i>=0;i--){const[l]=a[i];for(let c=s.length-1;c>=0;c--)if(s[c].indexOf(l)!==-1){s[c]=s[c].replace(l,a[i][1]);break}}return E(this,ir).insert(s,r,n,E(this,br),t),n}buildRegExp(){let e=E(this,ir).buildRegExpStr();if(e==="")return[/^$/,[],[]];let r=0;const t=[],n=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(a,s,i)=>s!==void 0?(t[++r]=Number(s),"$()"):(i!==void 0&&(n[Number(i)]=++r),"")),[new RegExp(`^${e}`),t,n]}},br=new WeakMap,ir=new WeakMap,Ua),mi=[/^$/,[],Object.create(null)],hr=Object.create(null);function cs(e){return hr[e]??(hr[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(r,t)=>t?`\\${t}`:"(?:|/.*)")}$`))}function gi(){hr=Object.create(null)}function bi(e){var f;const r=new pi,t=[];if(e.length===0)return mi;const n=e.map(o=>[!/\*|\/:/.test(o[0]),...o]).sort(([o,d],[u,v])=>o?1:u?-1:d.length-v.length),a=Object.create(null);for(let o=0,d=-1,u=n.length;o<u;o++){const[v,g,b]=n[o];v?a[g]=[b.map(([x])=>[x,Object.create(null)]),os]:d++;let A;try{A=r.insert(g,d,v)}catch(x){throw x===Be?new ss(g):x}v||(t[d]=b.map(([x,p])=>{const m=Object.create(null);for(p-=1;p>=0;p--){const[S,N]=A[p];m[S]=N}return[x,m]}))}const[s,i,l]=r.buildRegExp();for(let o=0,d=t.length;o<d;o++)for(let u=0,v=t[o].length;u<v;u++){const g=(f=t[o][u])==null?void 0:f[1];if(!g)continue;const b=Object.keys(g);for(let A=0,x=b.length;A<x;A++)g[b[A]]=l[g[b[A]]]}const c=[];for(const o in i)c[o]=t[i[o]];return[s,c,a]}function _e(e,r){if(e){for(const t of Object.keys(e).sort((n,a)=>a.length-n.length))if(cs(t).test(r))return[...e[t]]}}var we,Se,vr,fs,za,vi=(za=class{constructor(){G(this,vr);B(this,"name","RegExpRouter");G(this,we);G(this,Se);B(this,"match",di);F(this,we,{[J]:Object.create(null)}),F(this,Se,{[J]:Object.create(null)})}add(e,r,t){var l;const n=E(this,we),a=E(this,Se);if(!n||!a)throw new Error(as);n[e]||[n,a].forEach(c=>{c[e]=Object.create(null),Object.keys(c[J]).forEach(f=>{c[e][f]=[...c[J][f]]})}),r==="/*"&&(r="*");const s=(r.match(/\/:/g)||[]).length;if(/\*$/.test(r)){const c=cs(r);e===J?Object.keys(n).forEach(f=>{var o;(o=n[f])[r]||(o[r]=_e(n[f],r)||_e(n[J],r)||[])}):(l=n[e])[r]||(l[r]=_e(n[e],r)||_e(n[J],r)||[]),Object.keys(n).forEach(f=>{(e===J||e===f)&&Object.keys(n[f]).forEach(o=>{c.test(o)&&n[f][o].push([t,s])})}),Object.keys(a).forEach(f=>{(e===J||e===f)&&Object.keys(a[f]).forEach(o=>c.test(o)&&a[f][o].push([t,s]))});return}const i=Ya(r)||[r];for(let c=0,f=i.length;c<f;c++){const o=i[c];Object.keys(a).forEach(d=>{var u;(e===J||e===d)&&((u=a[d])[o]||(u[o]=[..._e(n[d],o)||_e(n[J],o)||[]]),a[d][o].push([t,s-f+c+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(E(this,Se)).concat(Object.keys(E(this,we))).forEach(r=>{e[r]||(e[r]=z(this,vr,fs).call(this,r))}),F(this,we,F(this,Se,void 0)),gi(),e}},we=new WeakMap,Se=new WeakMap,vr=new WeakSet,fs=function(e){const r=[];let t=e===J;return[E(this,we),E(this,Se)].forEach(n=>{const a=n[e]?Object.keys(n[e]).map(s=>[s,n[e][s]]):[];a.length!==0?(t||(t=!0),r.push(...a)):e!==J&&r.push(...Object.keys(n[J]).map(s=>[s,n[J][s]]))}),t?bi(r):null},za),Re,me,Xa,yi=(Xa=class{constructor(e){B(this,"name","SmartRouter");G(this,Re,[]);G(this,me,[]);F(this,Re,e.routers)}add(e,r,t){if(!E(this,me))throw new Error(as);E(this,me).push([e,r,t])}match(e,r){if(!E(this,me))throw new Error("Fatal error");const t=E(this,Re),n=E(this,me),a=t.length;let s=0,i;for(;s<a;s++){const l=t[s];try{for(let c=0,f=n.length;c<f;c++)l.add(...n[c]);i=l.match(e,r)}catch(c){if(c instanceof ss)continue;throw c}this.match=l.match.bind(l),F(this,Re,[l]),F(this,me,void 0);break}if(s===a)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,i}get activeRouter(){if(E(this,me)||E(this,Re).length!==1)throw new Error("No active router has been determined yet.");return E(this,Re)[0]}},Re=new WeakMap,me=new WeakMap,Xa),Je=Object.create(null),Ei=e=>{for(const r in e)return!0;return!1},Ae,Q,Le,ze,Z,ge,Ce,Xe,wi=(Xe=class{constructor(r,t,n){G(this,ge);G(this,Ae);G(this,Q);G(this,Le);G(this,ze,0);G(this,Z,Je);if(F(this,Q,n||Object.create(null)),F(this,Ae,[]),r&&t){const a=Object.create(null);a[r]={handler:t,possibleKeys:[],score:0},F(this,Ae,[a])}F(this,Le,[])}insert(r,t,n){F(this,ze,++un(this,ze)._);let a=this;const s=Ws(t),i=[];for(let l=0,c=s.length;l<c;l++){const f=s[l],o=s[l+1],d=Zs(f,o),u=Array.isArray(d)?d[0]:f;if(u in E(a,Q)){a=E(a,Q)[u],d&&i.push(d[1]);continue}E(a,Q)[u]=new Xe,d&&(E(a,Le).push(d),i.push(d[1])),a=E(a,Q)[u]}return E(a,Ae).push({[r]:{handler:n,possibleKeys:i.filter((l,c,f)=>f.indexOf(l)===c),score:E(this,ze)}}),a}search(r,t){var o;const n=[];F(this,Z,Je);let s=[this];const i=Wa(t),l=[],c=i.length;let f=null;for(let d=0;d<c;d++){const u=i[d],v=d===c-1,g=[];for(let A=0,x=s.length;A<x;A++){const p=s[A],m=E(p,Q)[u];m&&(F(m,Z,E(p,Z)),v?(E(m,Q)["*"]&&z(this,ge,Ce).call(this,n,E(m,Q)["*"],r,E(p,Z)),z(this,ge,Ce).call(this,n,m,r,E(p,Z))):g.push(m));for(let S=0,N=E(p,Le).length;S<N;S++){const I=E(p,Le)[S],$=E(p,Z)===Je?{}:{...E(p,Z)};if(I==="*"){const V=E(p,Q)["*"];V&&(z(this,ge,Ce).call(this,n,V,r,E(p,Z)),F(V,Z,$),g.push(V));continue}const[R,P,D]=I;if(!u&&!(D instanceof RegExp))continue;const _=E(p,Q)[R];if(D instanceof RegExp){if(f===null){f=new Array(c);let w=t[0]==="/"?1:0;for(let h=0;h<c;h++)f[h]=w,w+=i[h].length+1}const V=t.substring(f[d]),T=D.exec(V);if(T){if($[P]=T[0],z(this,ge,Ce).call(this,n,_,r,E(p,Z),$),Ei(E(_,Q))){F(_,Z,$);const w=((o=T[0].match(/\//))==null?void 0:o.length)??0;(l[w]||(l[w]=[])).push(_)}continue}}(D===!0||D.test(u))&&($[P]=u,v?(z(this,ge,Ce).call(this,n,_,r,$,E(p,Z)),E(_,Q)["*"]&&z(this,ge,Ce).call(this,n,E(_,Q)["*"],r,$,E(p,Z))):(F(_,Z,$),g.push(_)))}}const b=l.shift();s=b?g.concat(b):g}return n.length>1&&n.sort((d,u)=>d.score-u.score),[n.map(({handler:d,params:u})=>[d,u])]}},Ae=new WeakMap,Q=new WeakMap,Le=new WeakMap,ze=new WeakMap,Z=new WeakMap,ge=new WeakSet,Ce=function(r,t,n,a,s){for(let i=0,l=E(t,Ae).length;i<l;i++){const c=E(t,Ae)[i],f=c[n]||c[J],o={};if(f!==void 0&&(f.params=Object.create(null),r.push(f),a!==Je||s&&s!==Je))for(let d=0,u=f.possibleKeys.length;d<u;d++){const v=f.possibleKeys[d],g=o[f.score];f.params[v]=s!=null&&s[v]&&!g?s[v]:a[v]??(s==null?void 0:s[v]),o[f.score]=!0}}},Xe),Ne,Ka,Si=(Ka=class{constructor(){B(this,"name","TrieRouter");G(this,Ne);F(this,Ne,new wi)}add(e,r,t){const n=Ya(r);if(n){for(let a=0,s=n.length;a<s;a++)E(this,Ne).insert(e,n[a],t);return}E(this,Ne).insert(e,r,t)}match(e,r){return E(this,Ne).search(e,r)}},Ne=new WeakMap,Ka),ls=class extends li{constructor(e={}){super(e),this.router=e.router??new yi({routers:[new vi,new Si]})}},Ri=e=>{const t={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},n=(s=>typeof s=="string"?s==="*"?()=>s:i=>s===i?i:null:typeof s=="function"?s:i=>s.includes(i)?i:null)(t.origin),a=(s=>typeof s=="function"?s:Array.isArray(s)?()=>s:()=>[])(t.allowMethods);return async function(i,l){var o;function c(d,u){i.res.headers.set(d,u)}const f=await n(i.req.header("origin")||"",i);if(f&&c("Access-Control-Allow-Origin",f),t.credentials&&c("Access-Control-Allow-Credentials","true"),(o=t.exposeHeaders)!=null&&o.length&&c("Access-Control-Expose-Headers",t.exposeHeaders.join(",")),i.req.method==="OPTIONS"){t.origin!=="*"&&c("Vary","Origin"),t.maxAge!=null&&c("Access-Control-Max-Age",t.maxAge.toString());const d=await a(i.req.header("origin")||"",i);d.length&&c("Access-Control-Allow-Methods",d.join(","));let u=t.allowHeaders;if(!(u!=null&&u.length)){const v=i.req.header("Access-Control-Request-Headers");v&&(u=v.split(/\s*,\s*/))}return u!=null&&u.length&&(c("Access-Control-Allow-Headers",u.join(",")),i.res.headers.append("Vary","Access-Control-Request-Headers")),i.res.headers.delete("Content-Length"),i.res.headers.delete("Content-Type"),new Response(null,{headers:i.res.headers,status:204,statusText:"No Content"})}await l(),t.origin!=="*"&&i.header("Vary","Origin",{append:!0})}},Ai=/^\s*(?:text\/(?!event-stream(?:[;\s]|$))[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i,mn=(e,r=Ti)=>{const t=/\.([a-zA-Z0-9]+?)$/,n=e.match(t);if(!n)return;let a=r[n[1]];return a&&a.startsWith("text")&&(a+="; charset=utf-8"),a},Ii={aac:"audio/aac",avi:"video/x-msvideo",avif:"image/avif",av1:"video/av1",bin:"application/octet-stream",bmp:"image/bmp",css:"text/css",csv:"text/csv",eot:"application/vnd.ms-fontobject",epub:"application/epub+zip",gif:"image/gif",gz:"application/gzip",htm:"text/html",html:"text/html",ico:"image/x-icon",ics:"text/calendar",jpeg:"image/jpeg",jpg:"image/jpeg",js:"text/javascript",json:"application/json",jsonld:"application/ld+json",map:"application/json",mid:"audio/x-midi",midi:"audio/x-midi",mjs:"text/javascript",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",oga:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",opus:"audio/opus",otf:"font/otf",pdf:"application/pdf",png:"image/png",rtf:"application/rtf",svg:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",ttf:"font/ttf",txt:"text/plain",wasm:"application/wasm",webm:"video/webm",weba:"audio/webm",webmanifest:"application/manifest+json",webp:"image/webp",woff:"font/woff",woff2:"font/woff2",xhtml:"application/xhtml+xml",xml:"application/xml",zip:"application/zip","3gp":"video/3gpp","3g2":"video/3gpp2",gltf:"model/gltf+json",glb:"model/gltf-binary"},Ti=Ii,Ci=(...e)=>{let r=e.filter(a=>a!=="").join("/");r=r.replace(new RegExp("(?<=\\/)\\/+","g"),"");const t=r.split("/"),n=[];for(const a of t)a===".."&&n.length>0&&n.at(-1)!==".."?n.pop():a!=="."&&n.push(a);return n.join("/")||"."},ds={br:".br",zstd:".zst",gzip:".gz"},Oi=Object.keys(ds),$i="index.html",ji=e=>{const r=e.root??"./",t=e.path,n=e.join??Ci;return async(a,s)=>{var o,d,u,v;if(a.finalized)return s();let i;if(e.path)i=e.path;else try{if(i=decodeURIComponent(a.req.path),/(?:^|[\/\\])\.\.(?:$|[\/\\])/.test(i))throw new Error}catch{return await((o=e.onNotFound)==null?void 0:o.call(e,a.req.path,a)),s()}let l=n(r,!t&&e.rewriteRequestPath?e.rewriteRequestPath(i):i);e.isDir&&await e.isDir(l)&&(l=n(l,$i));const c=e.getContent;let f=await c(l,a);if(f instanceof Response)return a.newResponse(f.body,f);if(f){const g=e.mimes&&mn(l,e.mimes)||mn(l);if(a.header("Content-Type",g||"application/octet-stream"),e.precompressed&&(!g||Ai.test(g))){const b=new Set((d=a.req.header("Accept-Encoding"))==null?void 0:d.split(",").map(A=>A.trim()));for(const A of Oi){if(!b.has(A))continue;const x=await c(l+ds[A],a);if(x){f=x,a.header("Content-Encoding",A),a.header("Vary","Accept-Encoding",{append:!0});break}}}return await((u=e.onFound)==null?void 0:u.call(e,l,a)),a.body(f)}await((v=e.onNotFound)==null?void 0:v.call(e,l,a)),await s()}},Li=async(e,r)=>{let t;r&&r.manifest?typeof r.manifest=="string"?t=JSON.parse(r.manifest):t=r.manifest:typeof __STATIC_CONTENT_MANIFEST=="string"?t=JSON.parse(__STATIC_CONTENT_MANIFEST):t=__STATIC_CONTENT_MANIFEST;let n;r&&r.namespace?n=r.namespace:n=__STATIC_CONTENT;const a=t[e];if(!a)return null;const s=await n.get(a,{type:"stream"});return s||null},Ni=e=>async function(t,n){return ji({...e,getContent:async s=>Li(s,{manifest:e.manifest,namespace:e.namespace?e.namespace:t.env?t.env.__STATIC_CONTENT:void 0})})(t,n)},Pi=e=>Ni(e),Jt=null;function _i(e){try{return crypto.getRandomValues(new Uint8Array(e))}catch{}try{return yr.randomBytes(e)}catch{}if(!Jt)throw Error("Neither WebCryptoAPI nor a crypto module is available. Use bcrypt.setRandomFallback to set an alternative");return Jt(e)}function Di(e){Jt=e}function en(e,r){if(e=e||rn,typeof e!="number")throw Error("Illegal arguments: "+typeof e+", "+typeof r);e<4?e=4:e>31&&(e=31);var t=[];return t.push("$2b$"),e<10&&t.push("0"),t.push(e.toString()),t.push("$"),t.push(gr(_i(Qe),Qe)),t.join("")}function us(e,r,t){if(typeof r=="function"&&(t=r,r=void 0),typeof e=="function"&&(t=e,e=void 0),typeof e>"u")e=rn;else if(typeof e!="number")throw Error("illegal arguments: "+typeof e);function n(a){ce(function(){try{a(null,en(e))}catch(s){a(s)}})}if(t){if(typeof t!="function")throw Error("Illegal callback: "+typeof t);n(t)}else return new Promise(function(a,s){n(function(i,l){if(i){s(i);return}a(l)})})}function xs(e,r){if(typeof r>"u"&&(r=rn),typeof r=="number"&&(r=en(r)),typeof e!="string"||typeof r!="string")throw Error("Illegal arguments: "+typeof e+", "+typeof r);return Yt(e,r)}function hs(e,r,t,n){function a(s){typeof e=="string"&&typeof r=="number"?us(r,function(i,l){Yt(e,l,s,n)}):typeof e=="string"&&typeof r=="string"?Yt(e,r,s,n):ce(s.bind(this,Error("Illegal arguments: "+typeof e+", "+typeof r)))}if(t){if(typeof t!="function")throw Error("Illegal callback: "+typeof t);a(t)}else return new Promise(function(s,i){a(function(l,c){if(l){i(l);return}s(c)})})}function ps(e,r){for(var t=e.length^r.length,n=0;n<e.length;++n)t|=e.charCodeAt(n)^r.charCodeAt(n);return t===0}function qi(e,r){if(typeof e!="string"||typeof r!="string")throw Error("Illegal arguments: "+typeof e+", "+typeof r);return r.length!==60?!1:ps(xs(e,r.substring(0,r.length-31)),r)}function Fi(e,r,t,n){function a(s){if(typeof e!="string"||typeof r!="string"){ce(s.bind(this,Error("Illegal arguments: "+typeof e+", "+typeof r)));return}if(r.length!==60){ce(s.bind(this,null,!1));return}hs(e,r.substring(0,29),function(i,l){i?s(i):s(null,ps(l,r))},n)}if(t){if(typeof t!="function")throw Error("Illegal callback: "+typeof t);a(t)}else return new Promise(function(s,i){a(function(l,c){if(l){i(l);return}s(c)})})}function Bi(e){if(typeof e!="string")throw Error("Illegal arguments: "+typeof e);return parseInt(e.split("$")[2],10)}function ki(e){if(typeof e!="string")throw Error("Illegal arguments: "+typeof e);if(e.length!==60)throw Error("Illegal hash length: "+e.length+" != 60");return e.substring(0,29)}function Mi(e){if(typeof e!="string")throw Error("Illegal arguments: "+typeof e);return ms(e)>72}var ce=typeof setImmediate=="function"?setImmediate:typeof scheduler=="object"&&typeof scheduler.postTask=="function"?scheduler.postTask.bind(scheduler):setTimeout;function ms(e){for(var r=0,t=0,n=0;n<e.length;++n)t=e.charCodeAt(n),t<128?r+=1:t<2048?r+=2:(t&64512)===55296&&(e.charCodeAt(n+1)&64512)===56320?(++n,r+=4):r+=3;return r}function Hi(e){for(var r=0,t,n,a=new Array(ms(e)),s=0,i=e.length;s<i;++s)t=e.charCodeAt(s),t<128?a[r++]=t:t<2048?(a[r++]=t>>6|192,a[r++]=t&63|128):(t&64512)===55296&&((n=e.charCodeAt(s+1))&64512)===56320?(t=65536+((t&1023)<<10)+(n&1023),++s,a[r++]=t>>18|240,a[r++]=t>>12&63|128,a[r++]=t>>6&63|128,a[r++]=t&63|128):(a[r++]=t>>12|224,a[r++]=t>>6&63|128,a[r++]=t&63|128);return a}var De="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),ve=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,54,55,56,57,58,59,60,61,62,63,-1,-1,-1,-1,-1,-1,-1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,-1,-1,-1,-1,-1,-1,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,-1,-1,-1,-1,-1];function gr(e,r){var t=0,n=[],a,s;if(r<=0||r>e.length)throw Error("Illegal len: "+r);for(;t<r;){if(a=e[t++]&255,n.push(De[a>>2&63]),a=(a&3)<<4,t>=r){n.push(De[a&63]);break}if(s=e[t++]&255,a|=s>>4&15,n.push(De[a&63]),a=(s&15)<<2,t>=r){n.push(De[a&63]);break}s=e[t++]&255,a|=s>>6&3,n.push(De[a&63]),n.push(De[s&63])}return n.join("")}function gs(e,r){var t=0,n=e.length,a=0,s=[],i,l,c,f,o,d;if(r<=0)throw Error("Illegal len: "+r);for(;t<n-1&&a<r&&(d=e.charCodeAt(t++),i=d<ve.length?ve[d]:-1,d=e.charCodeAt(t++),l=d<ve.length?ve[d]:-1,!(i==-1||l==-1||(o=i<<2>>>0,o|=(l&48)>>4,s.push(String.fromCharCode(o)),++a>=r||t>=n)||(d=e.charCodeAt(t++),c=d<ve.length?ve[d]:-1,c==-1)||(o=(l&15)<<4>>>0,o|=(c&60)>>2,s.push(String.fromCharCode(o)),++a>=r||t>=n)));)d=e.charCodeAt(t++),f=d<ve.length?ve[d]:-1,o=(c&3)<<6>>>0,o|=f,s.push(String.fromCharCode(o)),++a;var u=[];for(t=0;t<a;t++)u.push(s[t].charCodeAt(0));return u}var Qe=16,rn=10,Gi=16,Vi=100,gn=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],bn=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],bs=[1332899944,1700884034,1701343084,1684370003,1668446532,1869963892];function er(e,r,t,n){var a,s=e[r],i=e[r+1];return s^=t[0],a=n[s>>>24],a+=n[256|s>>16&255],a^=n[512|s>>8&255],a+=n[768|s&255],i^=a^t[1],a=n[i>>>24],a+=n[256|i>>16&255],a^=n[512|i>>8&255],a+=n[768|i&255],s^=a^t[2],a=n[s>>>24],a+=n[256|s>>16&255],a^=n[512|s>>8&255],a+=n[768|s&255],i^=a^t[3],a=n[i>>>24],a+=n[256|i>>16&255],a^=n[512|i>>8&255],a+=n[768|i&255],s^=a^t[4],a=n[s>>>24],a+=n[256|s>>16&255],a^=n[512|s>>8&255],a+=n[768|s&255],i^=a^t[5],a=n[i>>>24],a+=n[256|i>>16&255],a^=n[512|i>>8&255],a+=n[768|i&255],s^=a^t[6],a=n[s>>>24],a+=n[256|s>>16&255],a^=n[512|s>>8&255],a+=n[768|s&255],i^=a^t[7],a=n[i>>>24],a+=n[256|i>>16&255],a^=n[512|i>>8&255],a+=n[768|i&255],s^=a^t[8],a=n[s>>>24],a+=n[256|s>>16&255],a^=n[512|s>>8&255],a+=n[768|s&255],i^=a^t[9],a=n[i>>>24],a+=n[256|i>>16&255],a^=n[512|i>>8&255],a+=n[768|i&255],s^=a^t[10],a=n[s>>>24],a+=n[256|s>>16&255],a^=n[512|s>>8&255],a+=n[768|s&255],i^=a^t[11],a=n[i>>>24],a+=n[256|i>>16&255],a^=n[512|i>>8&255],a+=n[768|i&255],s^=a^t[12],a=n[s>>>24],a+=n[256|s>>16&255],a^=n[512|s>>8&255],a+=n[768|s&255],i^=a^t[13],a=n[i>>>24],a+=n[256|i>>16&255],a^=n[512|i>>8&255],a+=n[768|i&255],s^=a^t[14],a=n[s>>>24],a+=n[256|s>>16&255],a^=n[512|s>>8&255],a+=n[768|s&255],i^=a^t[15],a=n[i>>>24],a+=n[256|i>>16&255],a^=n[512|i>>8&255],a+=n[768|i&255],s^=a^t[16],e[r]=i^t[Gi+1],e[r+1]=s,e}function ke(e,r){for(var t=0,n=0;t<4;++t)n=n<<8|e[r]&255,r=(r+1)%e.length;return{key:n,offp:r}}function vn(e,r,t){for(var n=0,a=[0,0],s=r.length,i=t.length,l,c=0;c<s;c++)l=ke(e,n),n=l.offp,r[c]=r[c]^l.key;for(c=0;c<s;c+=2)a=er(a,0,r,t),r[c]=a[0],r[c+1]=a[1];for(c=0;c<i;c+=2)a=er(a,0,r,t),t[c]=a[0],t[c+1]=a[1]}function Ui(e,r,t,n){for(var a=0,s=[0,0],i=t.length,l=n.length,c,f=0;f<i;f++)c=ke(r,a),a=c.offp,t[f]=t[f]^c.key;for(a=0,f=0;f<i;f+=2)c=ke(e,a),a=c.offp,s[0]^=c.key,c=ke(e,a),a=c.offp,s[1]^=c.key,s=er(s,0,t,n),t[f]=s[0],t[f+1]=s[1];for(f=0;f<l;f+=2)c=ke(e,a),a=c.offp,s[0]^=c.key,c=ke(e,a),a=c.offp,s[1]^=c.key,s=er(s,0,t,n),n[f]=s[0],n[f+1]=s[1]}function yn(e,r,t,n,a){var s=bs.slice(),i=s.length,l;if(t<4||t>31)if(l=Error("Illegal number of rounds (4-31): "+t),n){ce(n.bind(this,l));return}else throw l;if(r.length!==Qe)if(l=Error("Illegal salt length: "+r.length+" != "+Qe),n){ce(n.bind(this,l));return}else throw l;t=1<<t>>>0;var c,f,o=0,d;typeof Int32Array=="function"?(c=new Int32Array(gn),f=new Int32Array(bn)):(c=gn.slice(),f=bn.slice()),Ui(r,e,c,f);function u(){if(a&&a(o/t),o<t)for(var g=Date.now();o<t&&(o=o+1,vn(e,c,f),vn(r,c,f),!(Date.now()-g>Vi)););else{for(o=0;o<64;o++)for(d=0;d<i>>1;d++)er(s,d<<1,c,f);var b=[];for(o=0;o<i;o++)b.push((s[o]>>24&255)>>>0),b.push((s[o]>>16&255)>>>0),b.push((s[o]>>8&255)>>>0),b.push((s[o]&255)>>>0);if(n){n(null,b);return}else return b}n&&ce(u)}if(typeof n<"u")u();else for(var v;;)if(typeof(v=u())<"u")return v||[]}function Yt(e,r,t,n){var a;if(typeof e!="string"||typeof r!="string")if(a=Error("Invalid string / salt: Not a string"),t){ce(t.bind(this,a));return}else throw a;var s,i;if(r.charAt(0)!=="$"||r.charAt(1)!=="2")if(a=Error("Invalid salt version: "+r.substring(0,2)),t){ce(t.bind(this,a));return}else throw a;if(r.charAt(2)==="$")s="\0",i=3;else{if(s=r.charAt(2),s!=="a"&&s!=="b"&&s!=="y"||r.charAt(3)!=="$")if(a=Error("Invalid salt revision: "+r.substring(2,4)),t){ce(t.bind(this,a));return}else throw a;i=4}if(r.charAt(i+2)>"$")if(a=Error("Missing salt rounds"),t){ce(t.bind(this,a));return}else throw a;var l=parseInt(r.substring(i,i+1),10)*10,c=parseInt(r.substring(i+1,i+2),10),f=l+c,o=r.substring(i+3,i+25);e+=s>="a"?"\0":"";var d=Hi(e),u=gs(o,Qe);function v(g){var b=[];return b.push("$2"),s>="a"&&b.push(s),b.push("$"),f<10&&b.push("0"),b.push(f.toString()),b.push("$"),b.push(gr(u,u.length)),b.push(gr(g,bs.length*4-1)),b.join("")}if(typeof t>"u")return v(yn(d,u,f));yn(d,u,f,function(g,b){g?t(g,null):t(null,v(b))},n)}function zi(e,r){return gr(e,r)}function Xi(e,r){return gs(e,r)}const Ki={setRandomFallback:Di,genSaltSync:en,genSalt:us,hashSync:xs,hash:hs,compareSync:qi,compare:Fi,getRounds:Bi,getSalt:ki,truncates:Mi,encodeBase64:zi,decodeBase64:Xi};function Wi(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xe={},lr={exports:{}};/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */var En;function or(){return En||(En=1,(function(e,r){var t=pr,n=t.Buffer;function a(i,l){for(var c in i)l[c]=i[c]}n.from&&n.alloc&&n.allocUnsafe&&n.allocUnsafeSlow?e.exports=t:(a(t,r),r.Buffer=s);function s(i,l,c){return n(i,l,c)}s.prototype=Object.create(n.prototype),a(n,s),s.from=function(i,l,c){if(typeof i=="number")throw new TypeError("Argument must not be a number");return n(i,l,c)},s.alloc=function(i,l,c){if(typeof i!="number")throw new TypeError("Argument must be a number");var f=n(i);return l!==void 0?typeof c=="string"?f.fill(l,c):f.fill(l):f.fill(0),f},s.allocUnsafe=function(i){if(typeof i!="number")throw new TypeError("Argument must be a number");return n(i)},s.allocUnsafeSlow=function(i){if(typeof i!="number")throw new TypeError("Argument must be a number");return t.SlowBuffer(i)}})(lr,lr.exports)),lr.exports}var jr,wn;function vs(){if(wn)return jr;wn=1;var e=or().Buffer,r=Zt,t=Er;function n(a){if(this.buffer=null,this.writable=!0,this.readable=!0,!a)return this.buffer=e.alloc(0),this;if(typeof a.pipe=="function")return this.buffer=e.alloc(0),a.pipe(this),this;if(a.length||typeof a=="object")return this.buffer=a,this.writable=!1,process.nextTick((function(){this.emit("end",a),this.readable=!1,this.emit("close")}).bind(this)),this;throw new TypeError("Unexpected data type ("+typeof a+")")}return t.inherits(n,r),n.prototype.write=function(s){this.buffer=e.concat([this.buffer,e.from(s)]),this.emit("data",s)},n.prototype.end=function(s){s&&this.write(s),this.emit("end",s),this.emit("close"),this.writable=!1,this.readable=!1},jr=n,jr}var Lr,Sn;function Ji(){if(Sn)return Lr;Sn=1;function e(n){var a=(n/8|0)+(n%8===0?0:1);return a}var r={ES256:e(256),ES384:e(384),ES512:e(521)};function t(n){var a=r[n];if(a)return a;throw new Error('Unknown algorithm "'+n+'"')}return Lr=t,Lr}var Nr,Rn;function Yi(){if(Rn)return Nr;Rn=1;var e=or().Buffer,r=Ji(),t=128,n=0,a=32,s=16,i=2,l=s|a|n<<6,c=i|n<<6;function f(g){return g.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function o(g){if(e.isBuffer(g))return g;if(typeof g=="string")return e.from(g,"base64");throw new TypeError("ECDSA signature must be a Base64 string or a Buffer")}function d(g,b){g=o(g);var A=r(b),x=A+1,p=g.length,m=0;if(g[m++]!==l)throw new Error('Could not find expected "seq"');var S=g[m++];if(S===(t|1)&&(S=g[m++]),p-m<S)throw new Error('"seq" specified length of "'+S+'", only "'+(p-m)+'" remaining');if(g[m++]!==c)throw new Error('Could not find expected "int" for "r"');var N=g[m++];if(p-m-2<N)throw new Error('"r" specified length of "'+N+'", only "'+(p-m-2)+'" available');if(x<N)throw new Error('"r" specified length of "'+N+'", max of "'+x+'" is acceptable');var I=m;if(m+=N,g[m++]!==c)throw new Error('Could not find expected "int" for "s"');var $=g[m++];if(p-m!==$)throw new Error('"s" specified length of "'+$+'", expected "'+(p-m)+'"');if(x<$)throw new Error('"s" specified length of "'+$+'", max of "'+x+'" is acceptable');var R=m;if(m+=$,m!==p)throw new Error('Expected to consume entire buffer, but "'+(p-m)+'" bytes remain');var P=A-N,D=A-$,_=e.allocUnsafe(P+N+D+$);for(m=0;m<P;++m)_[m]=0;g.copy(_,m,I+Math.max(-P,0),I+N),m=A;for(var V=m;m<V+D;++m)_[m]=0;return g.copy(_,m,R+Math.max(-D,0),R+$),_=_.toString("base64"),_=f(_),_}function u(g,b,A){for(var x=0;b+x<A&&g[b+x]===0;)++x;var p=g[b+x]>=t;return p&&--x,x}function v(g,b){g=o(g);var A=r(b),x=g.length;if(x!==A*2)throw new TypeError('"'+b+'" signatures must be "'+A*2+'" bytes, saw "'+x+'"');var p=u(g,0,A),m=u(g,A,g.length),S=A-p,N=A-m,I=2+S+1+1+N,$=I<t,R=e.allocUnsafe(($?2:3)+I),P=0;return R[P++]=l,$?R[P++]=I:(R[P++]=t|1,R[P++]=I&255),R[P++]=c,R[P++]=S,p<0?(R[P++]=0,P+=g.copy(R,P,0,A)):P+=g.copy(R,P,p,A),R[P++]=c,R[P++]=N,m<0?(R[P++]=0,g.copy(R,P,A)):g.copy(R,P,A+m),R}return Nr={derToJose:d,joseToDer:v},Nr}var Pr,An;function Zi(){if(An)return Pr;An=1;var e=pr.Buffer,r=pr.SlowBuffer;Pr=t;function t(s,i){if(!e.isBuffer(s)||!e.isBuffer(i)||s.length!==i.length)return!1;for(var l=0,c=0;c<s.length;c++)l|=s[c]^i[c];return l===0}t.install=function(){e.prototype.equal=r.prototype.equal=function(i){return t(this,i)}};var n=e.prototype.equal,a=r.prototype.equal;return t.restore=function(){e.prototype.equal=n,r.prototype.equal=a},Pr}var _r,In;function ys(){if(In)return _r;In=1;var e=or().Buffer,r=yr,t=Yi(),n=Er,a=`"%s" is not a valid algorithm.
  Supported algorithms are:
  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".`,s="secret must be a string or buffer",i="key must be a string or a buffer",l="key must be a string, a buffer or an object",c=typeof r.createPublicKey=="function";c&&(i+=" or a KeyObject",s+="or a KeyObject");function f(T){if(!e.isBuffer(T)&&typeof T!="string"&&(!c||typeof T!="object"||typeof T.type!="string"||typeof T.asymmetricKeyType!="string"||typeof T.export!="function"))throw g(i)}function o(T){if(!e.isBuffer(T)&&typeof T!="string"&&typeof T!="object")throw g(l)}function d(T){if(!e.isBuffer(T)){if(typeof T=="string")return T;if(!c||typeof T!="object"||T.type!=="secret"||typeof T.export!="function")throw g(s)}}function u(T){return T.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function v(T){T=T.toString();var w=4-T.length%4;if(w!==4)for(var h=0;h<w;++h)T+="=";return T.replace(/\-/g,"+").replace(/_/g,"/")}function g(T){var w=[].slice.call(arguments,1),h=n.format.bind(n,T).apply(null,w);return new TypeError(h)}function b(T){return e.isBuffer(T)||typeof T=="string"}function A(T){return b(T)||(T=JSON.stringify(T)),T}function x(T){return function(h,C){d(C),h=A(h);var O=r.createHmac("sha"+T,C),j=(O.update(h),O.digest("base64"));return u(j)}}var p,m="timingSafeEqual"in r?function(w,h){return w.byteLength!==h.byteLength?!1:r.timingSafeEqual(w,h)}:function(w,h){return p||(p=Zi()),p(w,h)};function S(T){return function(h,C,O){var j=x(T)(h,O);return m(e.from(C),e.from(j))}}function N(T){return function(h,C){o(C),h=A(h);var O=r.createSign("RSA-SHA"+T),j=(O.update(h),O.sign(C,"base64"));return u(j)}}function I(T){return function(h,C,O){f(O),h=A(h),C=v(C);var j=r.createVerify("RSA-SHA"+T);return j.update(h),j.verify(O,C,"base64")}}function $(T){return function(h,C){o(C),h=A(h);var O=r.createSign("RSA-SHA"+T),j=(O.update(h),O.sign({key:C,padding:r.constants.RSA_PKCS1_PSS_PADDING,saltLength:r.constants.RSA_PSS_SALTLEN_DIGEST},"base64"));return u(j)}}function R(T){return function(h,C,O){f(O),h=A(h),C=v(C);var j=r.createVerify("RSA-SHA"+T);return j.update(h),j.verify({key:O,padding:r.constants.RSA_PKCS1_PSS_PADDING,saltLength:r.constants.RSA_PSS_SALTLEN_DIGEST},C,"base64")}}function P(T){var w=N(T);return function(){var C=w.apply(null,arguments);return C=t.derToJose(C,"ES"+T),C}}function D(T){var w=I(T);return function(C,O,j){O=t.joseToDer(O,"ES"+T).toString("base64");var L=w(C,O,j);return L}}function _(){return function(){return""}}function V(){return function(w,h){return h===""}}return _r=function(w){var h={hs:x,rs:N,ps:$,es:P,none:_},C={hs:S,rs:I,ps:R,es:D,none:V},O=w.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/);if(!O)throw g(a,w);var j=(O[1]||O[3]).toLowerCase(),L=O[2];return{sign:h[j](L),verify:C[j](L)}},_r}var Dr,Tn;function Es(){if(Tn)return Dr;Tn=1;var e=pr.Buffer;return Dr=function(t){return typeof t=="string"?t:typeof t=="number"||e.isBuffer(t)?t.toString():JSON.stringify(t)},Dr}var qr,Cn;function Qi(){if(Cn)return qr;Cn=1;var e=or().Buffer,r=vs(),t=ys(),n=Zt,a=Es(),s=Er;function i(o,d){return e.from(o,d).toString("base64").replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function l(o,d,u){u=u||"utf8";var v=i(a(o),"binary"),g=i(a(d),u);return s.format("%s.%s",v,g)}function c(o){var d=o.header,u=o.payload,v=o.secret||o.privateKey,g=o.encoding,b=t(d.alg),A=l(d,u,g),x=b.sign(A,v);return s.format("%s.%s",A,x)}function f(o){var d=o.secret;if(d=d??o.privateKey,d=d??o.key,/^hs/i.test(o.header.alg)===!0&&d==null)throw new TypeError("secret must be a string or buffer or a KeyObject");var u=new r(d);this.readable=!0,this.header=o.header,this.encoding=o.encoding,this.secret=this.privateKey=this.key=u,this.payload=new r(o.payload),this.secret.once("close",(function(){!this.payload.writable&&this.readable&&this.sign()}).bind(this)),this.payload.once("close",(function(){!this.secret.writable&&this.readable&&this.sign()}).bind(this))}return s.inherits(f,n),f.prototype.sign=function(){try{var d=c({header:this.header,payload:this.payload.buffer,secret:this.secret.buffer,encoding:this.encoding});return this.emit("done",d),this.emit("data",d),this.emit("end"),this.readable=!1,d}catch(u){this.readable=!1,this.emit("error",u),this.emit("close")}},f.sign=c,qr=f,qr}var Fr,On;function eo(){if(On)return Fr;On=1;var e=or().Buffer,r=vs(),t=ys(),n=Zt,a=Es(),s=Er,i=/^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;function l(x){return Object.prototype.toString.call(x)==="[object Object]"}function c(x){if(l(x))return x;try{return JSON.parse(x)}catch{return}}function f(x){var p=x.split(".",1)[0];return c(e.from(p,"base64").toString("binary"))}function o(x){return x.split(".",2).join(".")}function d(x){return x.split(".")[2]}function u(x,p){p=p||"utf8";var m=x.split(".")[1];return e.from(m,"base64").toString(p)}function v(x){return i.test(x)&&!!f(x)}function g(x,p,m){if(!p){var S=new Error("Missing algorithm parameter for jws.verify");throw S.code="MISSING_ALGORITHM",S}x=a(x);var N=d(x),I=o(x),$=t(p);return $.verify(I,N,m)}function b(x,p){if(p=p||{},x=a(x),!v(x))return null;var m=f(x);if(!m)return null;var S=u(x);return(m.typ==="JWT"||p.json)&&(S=JSON.parse(S,p.encoding)),{header:m,payload:S,signature:d(x)}}function A(x){x=x||{};var p=x.secret;if(p=p??x.publicKey,p=p??x.key,/^hs/i.test(x.algorithm)===!0&&p==null)throw new TypeError("secret must be a string or buffer or a KeyObject");var m=new r(p);this.readable=!0,this.algorithm=x.algorithm,this.encoding=x.encoding,this.secret=this.publicKey=this.key=m,this.signature=new r(x.signature),this.secret.once("close",(function(){!this.signature.writable&&this.readable&&this.verify()}).bind(this)),this.signature.once("close",(function(){!this.secret.writable&&this.readable&&this.verify()}).bind(this))}return s.inherits(A,n),A.prototype.verify=function(){try{var p=g(this.signature.buffer,this.algorithm,this.key.buffer),m=b(this.signature.buffer,this.encoding);return this.emit("done",p,m),this.emit("data",p),this.emit("end"),this.readable=!1,p}catch(S){this.readable=!1,this.emit("error",S),this.emit("close")}},A.decode=b,A.isValid=v,A.verify=g,Fr=A,Fr}var $n;function tn(){if($n)return xe;$n=1;var e=Qi(),r=eo(),t=["HS256","HS384","HS512","RS256","RS384","RS512","PS256","PS384","PS512","ES256","ES384","ES512"];return xe.ALGORITHMS=t,xe.sign=e.sign,xe.verify=r.verify,xe.decode=r.decode,xe.isValid=r.isValid,xe.createSign=function(a){return new e(a)},xe.createVerify=function(a){return new r(a)},xe}var Br,jn;function ws(){if(jn)return Br;jn=1;var e=tn();return Br=function(r,t){t=t||{};var n=e.decode(r,t);if(!n)return null;var a=n.payload;if(typeof a=="string")try{var s=JSON.parse(a);s!==null&&typeof s=="object"&&(a=s)}catch{}return t.complete===!0?{header:n.header,payload:a,signature:n.signature}:a},Br}var kr,Ln;function wr(){if(Ln)return kr;Ln=1;var e=function(r,t){Error.call(this,r),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="JsonWebTokenError",this.message=r,t&&(this.inner=t)};return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,kr=e,kr}var Mr,Nn;function Ss(){if(Nn)return Mr;Nn=1;var e=wr(),r=function(t,n){e.call(this,t),this.name="NotBeforeError",this.date=n};return r.prototype=Object.create(e.prototype),r.prototype.constructor=r,Mr=r,Mr}var Hr,Pn;function Rs(){if(Pn)return Hr;Pn=1;var e=wr(),r=function(t,n){e.call(this,t),this.name="TokenExpiredError",this.expiredAt=n};return r.prototype=Object.create(e.prototype),r.prototype.constructor=r,Hr=r,Hr}var Gr,_n;function ro(){if(_n)return Gr;_n=1;var e=1e3,r=e*60,t=r*60,n=t*24,a=n*7,s=n*365.25;Gr=function(o,d){d=d||{};var u=typeof o;if(u==="string"&&o.length>0)return i(o);if(u==="number"&&isFinite(o))return d.long?c(o):l(o);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(o))};function i(o){if(o=String(o),!(o.length>100)){var d=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(o);if(d){var u=parseFloat(d[1]),v=(d[2]||"ms").toLowerCase();switch(v){case"years":case"year":case"yrs":case"yr":case"y":return u*s;case"weeks":case"week":case"w":return u*a;case"days":case"day":case"d":return u*n;case"hours":case"hour":case"hrs":case"hr":case"h":return u*t;case"minutes":case"minute":case"mins":case"min":case"m":return u*r;case"seconds":case"second":case"secs":case"sec":case"s":return u*e;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return u;default:return}}}}function l(o){var d=Math.abs(o);return d>=n?Math.round(o/n)+"d":d>=t?Math.round(o/t)+"h":d>=r?Math.round(o/r)+"m":d>=e?Math.round(o/e)+"s":o+"ms"}function c(o){var d=Math.abs(o);return d>=n?f(o,d,n,"day"):d>=t?f(o,d,t,"hour"):d>=r?f(o,d,r,"minute"):d>=e?f(o,d,e,"second"):o+" ms"}function f(o,d,u,v){var g=d>=u*1.5;return Math.round(o/u)+" "+v+(g?"s":"")}return Gr}var Vr,Dn;function As(){if(Dn)return Vr;Dn=1;var e=ro();return Vr=function(r,t){var n=t||Math.floor(Date.now()/1e3);if(typeof r=="string"){var a=e(r);return typeof a>"u"?void 0:Math.floor(n+a/1e3)}else return typeof r=="number"?n+r:void 0},Vr}var dr={exports:{}},Ur,qn;function Sr(){if(qn)return Ur;qn=1;const e="2.0.0",r=256,t=Number.MAX_SAFE_INTEGER||9007199254740991,n=16,a=r-6;return Ur={MAX_LENGTH:r,MAX_SAFE_COMPONENT_LENGTH:n,MAX_SAFE_BUILD_LENGTH:a,MAX_SAFE_INTEGER:t,RELEASE_TYPES:["major","premajor","minor","preminor","patch","prepatch","prerelease"],SEMVER_SPEC_VERSION:e,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2},Ur}var zr,Fn;function Rr(){if(Fn)return zr;Fn=1;var e={};return zr=typeof process=="object"&&e&&e.NODE_DEBUG&&/\bsemver\b/i.test(e.NODE_DEBUG)?(...t)=>console.error("SEMVER",...t):()=>{},zr}var Bn;function cr(){return Bn||(Bn=1,(function(e,r){const{MAX_SAFE_COMPONENT_LENGTH:t,MAX_SAFE_BUILD_LENGTH:n,MAX_LENGTH:a}=Sr(),s=Rr();r=e.exports={};const i=r.re=[],l=r.safeRe=[],c=r.src=[],f=r.safeSrc=[],o=r.t={};let d=0;const u="[a-zA-Z0-9-]",v=[["\\s",1],["\\d",a],[u,n]],g=A=>{for(const[x,p]of v)A=A.split(`${x}*`).join(`${x}{0,${p}}`).split(`${x}+`).join(`${x}{1,${p}}`);return A},b=(A,x,p)=>{const m=g(x),S=d++;s(A,S,x),o[A]=S,c[S]=x,f[S]=m,i[S]=new RegExp(x,p?"g":void 0),l[S]=new RegExp(m,p?"g":void 0)};b("NUMERICIDENTIFIER","0|[1-9]\\d*"),b("NUMERICIDENTIFIERLOOSE","\\d+"),b("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${u}*`),b("MAINVERSION",`(${c[o.NUMERICIDENTIFIER]})\\.(${c[o.NUMERICIDENTIFIER]})\\.(${c[o.NUMERICIDENTIFIER]})`),b("MAINVERSIONLOOSE",`(${c[o.NUMERICIDENTIFIERLOOSE]})\\.(${c[o.NUMERICIDENTIFIERLOOSE]})\\.(${c[o.NUMERICIDENTIFIERLOOSE]})`),b("PRERELEASEIDENTIFIER",`(?:${c[o.NONNUMERICIDENTIFIER]}|${c[o.NUMERICIDENTIFIER]})`),b("PRERELEASEIDENTIFIERLOOSE",`(?:${c[o.NONNUMERICIDENTIFIER]}|${c[o.NUMERICIDENTIFIERLOOSE]})`),b("PRERELEASE",`(?:-(${c[o.PRERELEASEIDENTIFIER]}(?:\\.${c[o.PRERELEASEIDENTIFIER]})*))`),b("PRERELEASELOOSE",`(?:-?(${c[o.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${c[o.PRERELEASEIDENTIFIERLOOSE]})*))`),b("BUILDIDENTIFIER",`${u}+`),b("BUILD",`(?:\\+(${c[o.BUILDIDENTIFIER]}(?:\\.${c[o.BUILDIDENTIFIER]})*))`),b("FULLPLAIN",`v?${c[o.MAINVERSION]}${c[o.PRERELEASE]}?${c[o.BUILD]}?`),b("FULL",`^${c[o.FULLPLAIN]}$`),b("LOOSEPLAIN",`[v=\\s]*${c[o.MAINVERSIONLOOSE]}${c[o.PRERELEASELOOSE]}?${c[o.BUILD]}?`),b("LOOSE",`^${c[o.LOOSEPLAIN]}$`),b("GTLT","((?:<|>)?=?)"),b("XRANGEIDENTIFIERLOOSE",`${c[o.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),b("XRANGEIDENTIFIER",`${c[o.NUMERICIDENTIFIER]}|x|X|\\*`),b("XRANGEPLAIN",`[v=\\s]*(${c[o.XRANGEIDENTIFIER]})(?:\\.(${c[o.XRANGEIDENTIFIER]})(?:\\.(${c[o.XRANGEIDENTIFIER]})(?:${c[o.PRERELEASE]})?${c[o.BUILD]}?)?)?`),b("XRANGEPLAINLOOSE",`[v=\\s]*(${c[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[o.XRANGEIDENTIFIERLOOSE]})(?:${c[o.PRERELEASELOOSE]})?${c[o.BUILD]}?)?)?`),b("XRANGE",`^${c[o.GTLT]}\\s*${c[o.XRANGEPLAIN]}$`),b("XRANGELOOSE",`^${c[o.GTLT]}\\s*${c[o.XRANGEPLAINLOOSE]}$`),b("COERCEPLAIN",`(^|[^\\d])(\\d{1,${t}})(?:\\.(\\d{1,${t}}))?(?:\\.(\\d{1,${t}}))?`),b("COERCE",`${c[o.COERCEPLAIN]}(?:$|[^\\d])`),b("COERCEFULL",c[o.COERCEPLAIN]+`(?:${c[o.PRERELEASE]})?(?:${c[o.BUILD]})?(?:$|[^\\d])`),b("COERCERTL",c[o.COERCE],!0),b("COERCERTLFULL",c[o.COERCEFULL],!0),b("LONETILDE","(?:~>?)"),b("TILDETRIM",`(\\s*)${c[o.LONETILDE]}\\s+`,!0),r.tildeTrimReplace="$1~",b("TILDE",`^${c[o.LONETILDE]}${c[o.XRANGEPLAIN]}$`),b("TILDELOOSE",`^${c[o.LONETILDE]}${c[o.XRANGEPLAINLOOSE]}$`),b("LONECARET","(?:\\^)"),b("CARETTRIM",`(\\s*)${c[o.LONECARET]}\\s+`,!0),r.caretTrimReplace="$1^",b("CARET",`^${c[o.LONECARET]}${c[o.XRANGEPLAIN]}$`),b("CARETLOOSE",`^${c[o.LONECARET]}${c[o.XRANGEPLAINLOOSE]}$`),b("COMPARATORLOOSE",`^${c[o.GTLT]}\\s*(${c[o.LOOSEPLAIN]})$|^$`),b("COMPARATOR",`^${c[o.GTLT]}\\s*(${c[o.FULLPLAIN]})$|^$`),b("COMPARATORTRIM",`(\\s*)${c[o.GTLT]}\\s*(${c[o.LOOSEPLAIN]}|${c[o.XRANGEPLAIN]})`,!0),r.comparatorTrimReplace="$1$2$3",b("HYPHENRANGE",`^\\s*(${c[o.XRANGEPLAIN]})\\s+-\\s+(${c[o.XRANGEPLAIN]})\\s*$`),b("HYPHENRANGELOOSE",`^\\s*(${c[o.XRANGEPLAINLOOSE]})\\s+-\\s+(${c[o.XRANGEPLAINLOOSE]})\\s*$`),b("STAR","(<|>)?=?\\s*\\*"),b("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),b("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")})(dr,dr.exports)),dr.exports}var Xr,kn;function nn(){if(kn)return Xr;kn=1;const e=Object.freeze({loose:!0}),r=Object.freeze({});return Xr=n=>n?typeof n!="object"?e:n:r,Xr}var Kr,Mn;function Is(){if(Mn)return Kr;Mn=1;const e=/^[0-9]+$/,r=(n,a)=>{if(typeof n=="number"&&typeof a=="number")return n===a?0:n<a?-1:1;const s=e.test(n),i=e.test(a);return s&&i&&(n=+n,a=+a),n===a?0:s&&!i?-1:i&&!s?1:n<a?-1:1};return Kr={compareIdentifiers:r,rcompareIdentifiers:(n,a)=>r(a,n)},Kr}var Wr,Hn;function te(){if(Hn)return Wr;Hn=1;const e=Rr(),{MAX_LENGTH:r,MAX_SAFE_INTEGER:t}=Sr(),{safeRe:n,t:a}=cr(),s=nn(),{compareIdentifiers:i}=Is();class l{constructor(f,o){if(o=s(o),f instanceof l){if(f.loose===!!o.loose&&f.includePrerelease===!!o.includePrerelease)return f;f=f.version}else if(typeof f!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof f}".`);if(f.length>r)throw new TypeError(`version is longer than ${r} characters`);e("SemVer",f,o),this.options=o,this.loose=!!o.loose,this.includePrerelease=!!o.includePrerelease;const d=f.trim().match(o.loose?n[a.LOOSE]:n[a.FULL]);if(!d)throw new TypeError(`Invalid Version: ${f}`);if(this.raw=f,this.major=+d[1],this.minor=+d[2],this.patch=+d[3],this.major>t||this.major<0)throw new TypeError("Invalid major version");if(this.minor>t||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>t||this.patch<0)throw new TypeError("Invalid patch version");d[4]?this.prerelease=d[4].split(".").map(u=>{if(/^[0-9]+$/.test(u)){const v=+u;if(v>=0&&v<t)return v}return u}):this.prerelease=[],this.build=d[5]?d[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(f){if(e("SemVer.compare",this.version,this.options,f),!(f instanceof l)){if(typeof f=="string"&&f===this.version)return 0;f=new l(f,this.options)}return f.version===this.version?0:this.compareMain(f)||this.comparePre(f)}compareMain(f){return f instanceof l||(f=new l(f,this.options)),this.major<f.major?-1:this.major>f.major?1:this.minor<f.minor?-1:this.minor>f.minor?1:this.patch<f.patch?-1:this.patch>f.patch?1:0}comparePre(f){if(f instanceof l||(f=new l(f,this.options)),this.prerelease.length&&!f.prerelease.length)return-1;if(!this.prerelease.length&&f.prerelease.length)return 1;if(!this.prerelease.length&&!f.prerelease.length)return 0;let o=0;do{const d=this.prerelease[o],u=f.prerelease[o];if(e("prerelease compare",o,d,u),d===void 0&&u===void 0)return 0;if(u===void 0)return 1;if(d===void 0)return-1;if(d===u)continue;return i(d,u)}while(++o)}compareBuild(f){f instanceof l||(f=new l(f,this.options));let o=0;do{const d=this.build[o],u=f.build[o];if(e("build compare",o,d,u),d===void 0&&u===void 0)return 0;if(u===void 0)return 1;if(d===void 0)return-1;if(d===u)continue;return i(d,u)}while(++o)}inc(f,o,d){if(f.startsWith("pre")){if(!o&&d===!1)throw new Error("invalid increment argument: identifier is empty");if(o){const u=`-${o}`.match(this.options.loose?n[a.PRERELEASELOOSE]:n[a.PRERELEASE]);if(!u||u[1]!==o)throw new Error(`invalid identifier: ${o}`)}}switch(f){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",o,d);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",o,d);break;case"prepatch":this.prerelease.length=0,this.inc("patch",o,d),this.inc("pre",o,d);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",o,d),this.inc("pre",o,d);break;case"release":if(this.prerelease.length===0)throw new Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{const u=Number(d)?1:0;if(this.prerelease.length===0)this.prerelease=[u];else{let v=this.prerelease.length;for(;--v>=0;)typeof this.prerelease[v]=="number"&&(this.prerelease[v]++,v=-2);if(v===-1){if(o===this.prerelease.join(".")&&d===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(u)}}if(o){let v=[o,u];d===!1&&(v=[o]),i(this.prerelease[0],o)===0?isNaN(this.prerelease[1])&&(this.prerelease=v):this.prerelease=v}break}default:throw new Error(`invalid increment argument: ${f}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}}return Wr=l,Wr}var Jr,Gn;function Ke(){if(Gn)return Jr;Gn=1;const e=te();return Jr=(t,n,a=!1)=>{if(t instanceof e)return t;try{return new e(t,n)}catch(s){if(!a)return null;throw s}},Jr}var Yr,Vn;function to(){if(Vn)return Yr;Vn=1;const e=Ke();return Yr=(t,n)=>{const a=e(t,n);return a?a.version:null},Yr}var Zr,Un;function no(){if(Un)return Zr;Un=1;const e=Ke();return Zr=(t,n)=>{const a=e(t.trim().replace(/^[=v]+/,""),n);return a?a.version:null},Zr}var Qr,zn;function ao(){if(zn)return Qr;zn=1;const e=te();return Qr=(t,n,a,s,i)=>{typeof a=="string"&&(i=s,s=a,a=void 0);try{return new e(t instanceof e?t.version:t,a).inc(n,s,i).version}catch{return null}},Qr}var et,Xn;function so(){if(Xn)return et;Xn=1;const e=Ke();return et=(t,n)=>{const a=e(t,null,!0),s=e(n,null,!0),i=a.compare(s);if(i===0)return null;const l=i>0,c=l?a:s,f=l?s:a,o=!!c.prerelease.length;if(!!f.prerelease.length&&!o){if(!f.patch&&!f.minor)return"major";if(f.compareMain(c)===0)return f.minor&&!f.patch?"minor":"patch"}const u=o?"pre":"";return a.major!==s.major?u+"major":a.minor!==s.minor?u+"minor":a.patch!==s.patch?u+"patch":"prerelease"},et}var rt,Kn;function io(){if(Kn)return rt;Kn=1;const e=te();return rt=(t,n)=>new e(t,n).major,rt}var tt,Wn;function oo(){if(Wn)return tt;Wn=1;const e=te();return tt=(t,n)=>new e(t,n).minor,tt}var nt,Jn;function co(){if(Jn)return nt;Jn=1;const e=te();return nt=(t,n)=>new e(t,n).patch,nt}var at,Yn;function fo(){if(Yn)return at;Yn=1;const e=Ke();return at=(t,n)=>{const a=e(t,n);return a&&a.prerelease.length?a.prerelease:null},at}var st,Zn;function fe(){if(Zn)return st;Zn=1;const e=te();return st=(t,n,a)=>new e(t,a).compare(new e(n,a)),st}var it,Qn;function lo(){if(Qn)return it;Qn=1;const e=fe();return it=(t,n,a)=>e(n,t,a),it}var ot,ea;function uo(){if(ea)return ot;ea=1;const e=fe();return ot=(t,n)=>e(t,n,!0),ot}var ct,ra;function an(){if(ra)return ct;ra=1;const e=te();return ct=(t,n,a)=>{const s=new e(t,a),i=new e(n,a);return s.compare(i)||s.compareBuild(i)},ct}var ft,ta;function xo(){if(ta)return ft;ta=1;const e=an();return ft=(t,n)=>t.sort((a,s)=>e(a,s,n)),ft}var lt,na;function ho(){if(na)return lt;na=1;const e=an();return lt=(t,n)=>t.sort((a,s)=>e(s,a,n)),lt}var dt,aa;function Ar(){if(aa)return dt;aa=1;const e=fe();return dt=(t,n,a)=>e(t,n,a)>0,dt}var ut,sa;function sn(){if(sa)return ut;sa=1;const e=fe();return ut=(t,n,a)=>e(t,n,a)<0,ut}var xt,ia;function Ts(){if(ia)return xt;ia=1;const e=fe();return xt=(t,n,a)=>e(t,n,a)===0,xt}var ht,oa;function Cs(){if(oa)return ht;oa=1;const e=fe();return ht=(t,n,a)=>e(t,n,a)!==0,ht}var pt,ca;function on(){if(ca)return pt;ca=1;const e=fe();return pt=(t,n,a)=>e(t,n,a)>=0,pt}var mt,fa;function cn(){if(fa)return mt;fa=1;const e=fe();return mt=(t,n,a)=>e(t,n,a)<=0,mt}var gt,la;function Os(){if(la)return gt;la=1;const e=Ts(),r=Cs(),t=Ar(),n=on(),a=sn(),s=cn();return gt=(l,c,f,o)=>{switch(c){case"===":return typeof l=="object"&&(l=l.version),typeof f=="object"&&(f=f.version),l===f;case"!==":return typeof l=="object"&&(l=l.version),typeof f=="object"&&(f=f.version),l!==f;case"":case"=":case"==":return e(l,f,o);case"!=":return r(l,f,o);case">":return t(l,f,o);case">=":return n(l,f,o);case"<":return a(l,f,o);case"<=":return s(l,f,o);default:throw new TypeError(`Invalid operator: ${c}`)}},gt}var bt,da;function po(){if(da)return bt;da=1;const e=te(),r=Ke(),{safeRe:t,t:n}=cr();return bt=(s,i)=>{if(s instanceof e)return s;if(typeof s=="number"&&(s=String(s)),typeof s!="string")return null;i=i||{};let l=null;if(!i.rtl)l=s.match(i.includePrerelease?t[n.COERCEFULL]:t[n.COERCE]);else{const v=i.includePrerelease?t[n.COERCERTLFULL]:t[n.COERCERTL];let g;for(;(g=v.exec(s))&&(!l||l.index+l[0].length!==s.length);)(!l||g.index+g[0].length!==l.index+l[0].length)&&(l=g),v.lastIndex=g.index+g[1].length+g[2].length;v.lastIndex=-1}if(l===null)return null;const c=l[2],f=l[3]||"0",o=l[4]||"0",d=i.includePrerelease&&l[5]?`-${l[5]}`:"",u=i.includePrerelease&&l[6]?`+${l[6]}`:"";return r(`${c}.${f}.${o}${d}${u}`,i)},bt}var vt,ua;function mo(){if(ua)return vt;ua=1;class e{constructor(){this.max=1e3,this.map=new Map}get(t){const n=this.map.get(t);if(n!==void 0)return this.map.delete(t),this.map.set(t,n),n}delete(t){return this.map.delete(t)}set(t,n){if(!this.delete(t)&&n!==void 0){if(this.map.size>=this.max){const s=this.map.keys().next().value;this.delete(s)}this.map.set(t,n)}return this}}return vt=e,vt}var yt,xa;function le(){if(xa)return yt;xa=1;const e=/\s+/g;class r{constructor(h,C){if(C=a(C),h instanceof r)return h.loose===!!C.loose&&h.includePrerelease===!!C.includePrerelease?h:new r(h.raw,C);if(h instanceof s)return this.raw=h.value,this.set=[[h]],this.formatted=void 0,this;if(this.options=C,this.loose=!!C.loose,this.includePrerelease=!!C.includePrerelease,this.raw=h.trim().replace(e," "),this.set=this.raw.split("||").map(O=>this.parseRange(O.trim())).filter(O=>O.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){const O=this.set[0];if(this.set=this.set.filter(j=>!b(j[0])),this.set.length===0)this.set=[O];else if(this.set.length>1){for(const j of this.set)if(j.length===1&&A(j[0])){this.set=[j];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let h=0;h<this.set.length;h++){h>0&&(this.formatted+="||");const C=this.set[h];for(let O=0;O<C.length;O++)O>0&&(this.formatted+=" "),this.formatted+=C[O].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(h){const O=((this.options.includePrerelease&&v)|(this.options.loose&&g))+":"+h,j=n.get(O);if(j)return j;const L=this.options.loose,k=L?c[f.HYPHENRANGELOOSE]:c[f.HYPHENRANGE];h=h.replace(k,V(this.options.includePrerelease)),i("hyphen replace",h),h=h.replace(c[f.COMPARATORTRIM],o),i("comparator trim",h),h=h.replace(c[f.TILDETRIM],d),i("tilde trim",h),h=h.replace(c[f.CARETTRIM],u),i("caret trim",h);let U=h.split(" ").map(K=>p(K,this.options)).join(" ").split(/\s+/).map(K=>_(K,this.options));L&&(U=U.filter(K=>(i("loose invalid filter",K,this.options),!!K.match(c[f.COMPARATORLOOSE])))),i("range list",U);const H=new Map,X=U.map(K=>new s(K,this.options));for(const K of X){if(b(K))return[K];H.set(K.value,K)}H.size>1&&H.has("")&&H.delete("");const W=[...H.values()];return n.set(O,W),W}intersects(h,C){if(!(h instanceof r))throw new TypeError("a Range is required");return this.set.some(O=>x(O,C)&&h.set.some(j=>x(j,C)&&O.every(L=>j.every(k=>L.intersects(k,C)))))}test(h){if(!h)return!1;if(typeof h=="string")try{h=new l(h,this.options)}catch{return!1}for(let C=0;C<this.set.length;C++)if(T(this.set[C],h,this.options))return!0;return!1}}yt=r;const t=mo(),n=new t,a=nn(),s=Ir(),i=Rr(),l=te(),{safeRe:c,t:f,comparatorTrimReplace:o,tildeTrimReplace:d,caretTrimReplace:u}=cr(),{FLAG_INCLUDE_PRERELEASE:v,FLAG_LOOSE:g}=Sr(),b=w=>w.value==="<0.0.0-0",A=w=>w.value==="",x=(w,h)=>{let C=!0;const O=w.slice();let j=O.pop();for(;C&&O.length;)C=O.every(L=>j.intersects(L,h)),j=O.pop();return C},p=(w,h)=>(w=w.replace(c[f.BUILD],""),i("comp",w,h),w=I(w,h),i("caret",w),w=S(w,h),i("tildes",w),w=R(w,h),i("xrange",w),w=D(w,h),i("stars",w),w),m=w=>!w||w.toLowerCase()==="x"||w==="*",S=(w,h)=>w.trim().split(/\s+/).map(C=>N(C,h)).join(" "),N=(w,h)=>{const C=h.loose?c[f.TILDELOOSE]:c[f.TILDE];return w.replace(C,(O,j,L,k,U)=>{i("tilde",w,O,j,L,k,U);let H;return m(j)?H="":m(L)?H=`>=${j}.0.0 <${+j+1}.0.0-0`:m(k)?H=`>=${j}.${L}.0 <${j}.${+L+1}.0-0`:U?(i("replaceTilde pr",U),H=`>=${j}.${L}.${k}-${U} <${j}.${+L+1}.0-0`):H=`>=${j}.${L}.${k} <${j}.${+L+1}.0-0`,i("tilde return",H),H})},I=(w,h)=>w.trim().split(/\s+/).map(C=>$(C,h)).join(" "),$=(w,h)=>{i("caret",w,h);const C=h.loose?c[f.CARETLOOSE]:c[f.CARET],O=h.includePrerelease?"-0":"";return w.replace(C,(j,L,k,U,H)=>{i("caret",w,j,L,k,U,H);let X;return m(L)?X="":m(k)?X=`>=${L}.0.0${O} <${+L+1}.0.0-0`:m(U)?L==="0"?X=`>=${L}.${k}.0${O} <${L}.${+k+1}.0-0`:X=`>=${L}.${k}.0${O} <${+L+1}.0.0-0`:H?(i("replaceCaret pr",H),L==="0"?k==="0"?X=`>=${L}.${k}.${U}-${H} <${L}.${k}.${+U+1}-0`:X=`>=${L}.${k}.${U}-${H} <${L}.${+k+1}.0-0`:X=`>=${L}.${k}.${U}-${H} <${+L+1}.0.0-0`):(i("no pr"),L==="0"?k==="0"?X=`>=${L}.${k}.${U}${O} <${L}.${k}.${+U+1}-0`:X=`>=${L}.${k}.${U}${O} <${L}.${+k+1}.0-0`:X=`>=${L}.${k}.${U} <${+L+1}.0.0-0`),i("caret return",X),X})},R=(w,h)=>(i("replaceXRanges",w,h),w.split(/\s+/).map(C=>P(C,h)).join(" ")),P=(w,h)=>{w=w.trim();const C=h.loose?c[f.XRANGELOOSE]:c[f.XRANGE];return w.replace(C,(O,j,L,k,U,H)=>{i("xRange",w,O,j,L,k,U,H);const X=m(L),W=X||m(k),K=W||m(U),Ie=K;return j==="="&&Ie&&(j=""),H=h.includePrerelease?"-0":"",X?j===">"||j==="<"?O="<0.0.0-0":O="*":j&&Ie?(W&&(k=0),U=0,j===">"?(j=">=",W?(L=+L+1,k=0,U=0):(k=+k+1,U=0)):j==="<="&&(j="<",W?L=+L+1:k=+k+1),j==="<"&&(H="-0"),O=`${j+L}.${k}.${U}${H}`):W?O=`>=${L}.0.0${H} <${+L+1}.0.0-0`:K&&(O=`>=${L}.${k}.0${H} <${L}.${+k+1}.0-0`),i("xRange return",O),O})},D=(w,h)=>(i("replaceStars",w,h),w.trim().replace(c[f.STAR],"")),_=(w,h)=>(i("replaceGTE0",w,h),w.trim().replace(c[h.includePrerelease?f.GTE0PRE:f.GTE0],"")),V=w=>(h,C,O,j,L,k,U,H,X,W,K,Ie)=>(m(O)?C="":m(j)?C=`>=${O}.0.0${w?"-0":""}`:m(L)?C=`>=${O}.${j}.0${w?"-0":""}`:k?C=`>=${C}`:C=`>=${C}${w?"-0":""}`,m(X)?H="":m(W)?H=`<${+X+1}.0.0-0`:m(K)?H=`<${X}.${+W+1}.0-0`:Ie?H=`<=${X}.${W}.${K}-${Ie}`:w?H=`<${X}.${W}.${+K+1}-0`:H=`<=${H}`,`${C} ${H}`.trim()),T=(w,h,C)=>{for(let O=0;O<w.length;O++)if(!w[O].test(h))return!1;if(h.prerelease.length&&!C.includePrerelease){for(let O=0;O<w.length;O++)if(i(w[O].semver),w[O].semver!==s.ANY&&w[O].semver.prerelease.length>0){const j=w[O].semver;if(j.major===h.major&&j.minor===h.minor&&j.patch===h.patch)return!0}return!1}return!0};return yt}var Et,ha;function Ir(){if(ha)return Et;ha=1;const e=Symbol("SemVer ANY");class r{static get ANY(){return e}constructor(o,d){if(d=t(d),o instanceof r){if(o.loose===!!d.loose)return o;o=o.value}o=o.trim().split(/\s+/).join(" "),i("comparator",o,d),this.options=d,this.loose=!!d.loose,this.parse(o),this.semver===e?this.value="":this.value=this.operator+this.semver.version,i("comp",this)}parse(o){const d=this.options.loose?n[a.COMPARATORLOOSE]:n[a.COMPARATOR],u=o.match(d);if(!u)throw new TypeError(`Invalid comparator: ${o}`);this.operator=u[1]!==void 0?u[1]:"",this.operator==="="&&(this.operator=""),u[2]?this.semver=new l(u[2],this.options.loose):this.semver=e}toString(){return this.value}test(o){if(i("Comparator.test",o,this.options.loose),this.semver===e||o===e)return!0;if(typeof o=="string")try{o=new l(o,this.options)}catch{return!1}return s(o,this.operator,this.semver,this.options)}intersects(o,d){if(!(o instanceof r))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new c(o.value,d).test(this.value):o.operator===""?o.value===""?!0:new c(this.value,d).test(o.semver):(d=t(d),d.includePrerelease&&(this.value==="<0.0.0-0"||o.value==="<0.0.0-0")||!d.includePrerelease&&(this.value.startsWith("<0.0.0")||o.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&o.operator.startsWith(">")||this.operator.startsWith("<")&&o.operator.startsWith("<")||this.semver.version===o.semver.version&&this.operator.includes("=")&&o.operator.includes("=")||s(this.semver,"<",o.semver,d)&&this.operator.startsWith(">")&&o.operator.startsWith("<")||s(this.semver,">",o.semver,d)&&this.operator.startsWith("<")&&o.operator.startsWith(">")))}}Et=r;const t=nn(),{safeRe:n,t:a}=cr(),s=Os(),i=Rr(),l=te(),c=le();return Et}var wt,pa;function Tr(){if(pa)return wt;pa=1;const e=le();return wt=(t,n,a)=>{try{n=new e(n,a)}catch{return!1}return n.test(t)},wt}var St,ma;function go(){if(ma)return St;ma=1;const e=le();return St=(t,n)=>new e(t,n).set.map(a=>a.map(s=>s.value).join(" ").trim().split(" ")),St}var Rt,ga;function bo(){if(ga)return Rt;ga=1;const e=te(),r=le();return Rt=(n,a,s)=>{let i=null,l=null,c=null;try{c=new r(a,s)}catch{return null}return n.forEach(f=>{c.test(f)&&(!i||l.compare(f)===-1)&&(i=f,l=new e(i,s))}),i},Rt}var At,ba;function vo(){if(ba)return At;ba=1;const e=te(),r=le();return At=(n,a,s)=>{let i=null,l=null,c=null;try{c=new r(a,s)}catch{return null}return n.forEach(f=>{c.test(f)&&(!i||l.compare(f)===1)&&(i=f,l=new e(i,s))}),i},At}var It,va;function yo(){if(va)return It;va=1;const e=te(),r=le(),t=Ar();return It=(a,s)=>{a=new r(a,s);let i=new e("0.0.0");if(a.test(i)||(i=new e("0.0.0-0"),a.test(i)))return i;i=null;for(let l=0;l<a.set.length;++l){const c=a.set[l];let f=null;c.forEach(o=>{const d=new e(o.semver.version);switch(o.operator){case">":d.prerelease.length===0?d.patch++:d.prerelease.push(0),d.raw=d.format();case"":case">=":(!f||t(d,f))&&(f=d);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${o.operator}`)}}),f&&(!i||t(i,f))&&(i=f)}return i&&a.test(i)?i:null},It}var Tt,ya;function Eo(){if(ya)return Tt;ya=1;const e=le();return Tt=(t,n)=>{try{return new e(t,n).range||"*"}catch{return null}},Tt}var Ct,Ea;function fn(){if(Ea)return Ct;Ea=1;const e=te(),r=Ir(),{ANY:t}=r,n=le(),a=Tr(),s=Ar(),i=sn(),l=cn(),c=on();return Ct=(o,d,u,v)=>{o=new e(o,v),d=new n(d,v);let g,b,A,x,p;switch(u){case">":g=s,b=l,A=i,x=">",p=">=";break;case"<":g=i,b=c,A=s,x="<",p="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(a(o,d,v))return!1;for(let m=0;m<d.set.length;++m){const S=d.set[m];let N=null,I=null;if(S.forEach($=>{$.semver===t&&($=new r(">=0.0.0")),N=N||$,I=I||$,g($.semver,N.semver,v)?N=$:A($.semver,I.semver,v)&&(I=$)}),N.operator===x||N.operator===p||(!I.operator||I.operator===x)&&b(o,I.semver))return!1;if(I.operator===p&&A(o,I.semver))return!1}return!0},Ct}var Ot,wa;function wo(){if(wa)return Ot;wa=1;const e=fn();return Ot=(t,n,a)=>e(t,n,">",a),Ot}var $t,Sa;function So(){if(Sa)return $t;Sa=1;const e=fn();return $t=(t,n,a)=>e(t,n,"<",a),$t}var jt,Ra;function Ro(){if(Ra)return jt;Ra=1;const e=le();return jt=(t,n,a)=>(t=new e(t,a),n=new e(n,a),t.intersects(n,a)),jt}var Lt,Aa;function Ao(){if(Aa)return Lt;Aa=1;const e=Tr(),r=fe();return Lt=(t,n,a)=>{const s=[];let i=null,l=null;const c=t.sort((u,v)=>r(u,v,a));for(const u of c)e(u,n,a)?(l=u,i||(i=u)):(l&&s.push([i,l]),l=null,i=null);i&&s.push([i,null]);const f=[];for(const[u,v]of s)u===v?f.push(u):!v&&u===c[0]?f.push("*"):v?u===c[0]?f.push(`<=${v}`):f.push(`${u} - ${v}`):f.push(`>=${u}`);const o=f.join(" || "),d=typeof n.raw=="string"?n.raw:String(n);return o.length<d.length?o:n},Lt}var Nt,Ia;function Io(){if(Ia)return Nt;Ia=1;const e=le(),r=Ir(),{ANY:t}=r,n=Tr(),a=fe(),s=(d,u,v={})=>{if(d===u)return!0;d=new e(d,v),u=new e(u,v);let g=!1;e:for(const b of d.set){for(const A of u.set){const x=c(b,A,v);if(g=g||x!==null,x)continue e}if(g)return!1}return!0},i=[new r(">=0.0.0-0")],l=[new r(">=0.0.0")],c=(d,u,v)=>{if(d===u)return!0;if(d.length===1&&d[0].semver===t){if(u.length===1&&u[0].semver===t)return!0;v.includePrerelease?d=i:d=l}if(u.length===1&&u[0].semver===t){if(v.includePrerelease)return!0;u=l}const g=new Set;let b,A;for(const R of d)R.operator===">"||R.operator===">="?b=f(b,R,v):R.operator==="<"||R.operator==="<="?A=o(A,R,v):g.add(R.semver);if(g.size>1)return null;let x;if(b&&A){if(x=a(b.semver,A.semver,v),x>0)return null;if(x===0&&(b.operator!==">="||A.operator!=="<="))return null}for(const R of g){if(b&&!n(R,String(b),v)||A&&!n(R,String(A),v))return null;for(const P of u)if(!n(R,String(P),v))return!1;return!0}let p,m,S,N,I=A&&!v.includePrerelease&&A.semver.prerelease.length?A.semver:!1,$=b&&!v.includePrerelease&&b.semver.prerelease.length?b.semver:!1;I&&I.prerelease.length===1&&A.operator==="<"&&I.prerelease[0]===0&&(I=!1);for(const R of u){if(N=N||R.operator===">"||R.operator===">=",S=S||R.operator==="<"||R.operator==="<=",b){if($&&R.semver.prerelease&&R.semver.prerelease.length&&R.semver.major===$.major&&R.semver.minor===$.minor&&R.semver.patch===$.patch&&($=!1),R.operator===">"||R.operator===">="){if(p=f(b,R,v),p===R&&p!==b)return!1}else if(b.operator===">="&&!n(b.semver,String(R),v))return!1}if(A){if(I&&R.semver.prerelease&&R.semver.prerelease.length&&R.semver.major===I.major&&R.semver.minor===I.minor&&R.semver.patch===I.patch&&(I=!1),R.operator==="<"||R.operator==="<="){if(m=o(A,R,v),m===R&&m!==A)return!1}else if(A.operator==="<="&&!n(A.semver,String(R),v))return!1}if(!R.operator&&(A||b)&&x!==0)return!1}return!(b&&S&&!A&&x!==0||A&&N&&!b&&x!==0||$||I)},f=(d,u,v)=>{if(!d)return u;const g=a(d.semver,u.semver,v);return g>0?d:g<0||u.operator===">"&&d.operator===">="?u:d},o=(d,u,v)=>{if(!d)return u;const g=a(d.semver,u.semver,v);return g<0?d:g>0||u.operator==="<"&&d.operator==="<="?u:d};return Nt=s,Nt}var Pt,Ta;function ln(){if(Ta)return Pt;Ta=1;const e=cr(),r=Sr(),t=te(),n=Is(),a=Ke(),s=to(),i=no(),l=ao(),c=so(),f=io(),o=oo(),d=co(),u=fo(),v=fe(),g=lo(),b=uo(),A=an(),x=xo(),p=ho(),m=Ar(),S=sn(),N=Ts(),I=Cs(),$=on(),R=cn(),P=Os(),D=po(),_=Ir(),V=le(),T=Tr(),w=go(),h=bo(),C=vo(),O=yo(),j=Eo(),L=fn(),k=wo(),U=So(),H=Ro(),X=Ao(),W=Io();return Pt={parse:a,valid:s,clean:i,inc:l,diff:c,major:f,minor:o,patch:d,prerelease:u,compare:v,rcompare:g,compareLoose:b,compareBuild:A,sort:x,rsort:p,gt:m,lt:S,eq:N,neq:I,gte:$,lte:R,cmp:P,coerce:D,Comparator:_,Range:V,satisfies:T,toComparators:w,maxSatisfying:h,minSatisfying:C,minVersion:O,validRange:j,outside:L,gtr:k,ltr:U,intersects:H,simplifyRange:X,subset:W,SemVer:t,re:e.re,src:e.src,tokens:e.t,SEMVER_SPEC_VERSION:r.SEMVER_SPEC_VERSION,RELEASE_TYPES:r.RELEASE_TYPES,compareIdentifiers:n.compareIdentifiers,rcompareIdentifiers:n.rcompareIdentifiers},Pt}var _t,Ca;function To(){return Ca||(Ca=1,_t=ln().satisfies(process.version,">=15.7.0")),_t}var Dt,Oa;function Co(){return Oa||(Oa=1,Dt=ln().satisfies(process.version,">=16.9.0")),Dt}var qt,$a;function $s(){if($a)return qt;$a=1;const e=To(),r=Co(),t={ec:["ES256","ES384","ES512"],rsa:["RS256","PS256","RS384","PS384","RS512","PS512"],"rsa-pss":["PS256","PS384","PS512"]},n={ES256:"prime256v1",ES384:"secp384r1",ES512:"secp521r1"};return qt=function(a,s){if(!a||!s)return;const i=s.asymmetricKeyType;if(!i)return;const l=t[i];if(!l)throw new Error(`Unknown key type "${i}".`);if(!l.includes(a))throw new Error(`"alg" parameter for "${i}" key type must be one of: ${l.join(", ")}.`);if(e)switch(i){case"ec":const c=s.asymmetricKeyDetails.namedCurve,f=n[a];if(c!==f)throw new Error(`"alg" parameter "${a}" requires curve "${f}".`);break;case"rsa-pss":if(r){const o=parseInt(a.slice(-3),10),{hashAlgorithm:d,mgf1HashAlgorithm:u,saltLength:v}=s.asymmetricKeyDetails;if(d!==`sha${o}`||u!==d)throw new Error(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${a}.`);if(v!==void 0&&v>o>>3)throw new Error(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${a}.`)}break}},qt}var Ft,ja;function js(){if(ja)return Ft;ja=1;var e=ln();return Ft=e.satisfies(process.version,"^6.12.0 || >=8.0.0"),Ft}var Bt,La;function Oo(){if(La)return Bt;La=1;const e=wr(),r=Ss(),t=Rs(),n=ws(),a=As(),s=$s(),i=js(),l=tn(),{KeyObject:c,createSecretKey:f,createPublicKey:o}=yr,d=["RS256","RS384","RS512"],u=["ES256","ES384","ES512"],v=["RS256","RS384","RS512"],g=["HS256","HS384","HS512"];return i&&(d.splice(d.length,0,"PS256","PS384","PS512"),v.splice(v.length,0,"PS256","PS384","PS512")),Bt=function(b,A,x,p){typeof x=="function"&&!p&&(p=x,x={}),x||(x={}),x=Object.assign({},x);let m;if(p?m=p:m=function(P,D){if(P)throw P;return D},x.clockTimestamp&&typeof x.clockTimestamp!="number")return m(new e("clockTimestamp must be a number"));if(x.nonce!==void 0&&(typeof x.nonce!="string"||x.nonce.trim()===""))return m(new e("nonce must be a non-empty string"));if(x.allowInvalidAsymmetricKeyTypes!==void 0&&typeof x.allowInvalidAsymmetricKeyTypes!="boolean")return m(new e("allowInvalidAsymmetricKeyTypes must be a boolean"));const S=x.clockTimestamp||Math.floor(Date.now()/1e3);if(!b)return m(new e("jwt must be provided"));if(typeof b!="string")return m(new e("jwt must be a string"));const N=b.split(".");if(N.length!==3)return m(new e("jwt malformed"));let I;try{I=n(b,{complete:!0})}catch(P){return m(P)}if(!I)return m(new e("invalid token"));const $=I.header;let R;if(typeof A=="function"){if(!p)return m(new e("verify must be called asynchronous if secret or public key is provided as a callback"));R=A}else R=function(P,D){return D(null,A)};return R($,function(P,D){if(P)return m(new e("error in secret or public key callback: "+P.message));const _=N[2].trim()!=="";if(!_&&D)return m(new e("jwt signature is required"));if(_&&!D)return m(new e("secret or public key must be provided"));if(!_&&!x.algorithms)return m(new e('please specify "none" in "algorithms" to verify unsigned tokens'));if(D!=null&&!(D instanceof c))try{D=o(D)}catch{try{D=f(typeof D=="string"?Buffer.from(D):D)}catch{return m(new e("secretOrPublicKey is not valid key material"))}}if(x.algorithms||(D.type==="secret"?x.algorithms=g:["rsa","rsa-pss"].includes(D.asymmetricKeyType)?x.algorithms=v:D.asymmetricKeyType==="ec"?x.algorithms=u:x.algorithms=d),x.algorithms.indexOf(I.header.alg)===-1)return m(new e("invalid algorithm"));if($.alg.startsWith("HS")&&D.type!=="secret")return m(new e(`secretOrPublicKey must be a symmetric key when using ${$.alg}`));if(/^(?:RS|PS|ES)/.test($.alg)&&D.type!=="public")return m(new e(`secretOrPublicKey must be an asymmetric key when using ${$.alg}`));if(!x.allowInvalidAsymmetricKeyTypes)try{s($.alg,D)}catch(w){return m(w)}let V;try{V=l.verify(b,I.header.alg,D)}catch(w){return m(w)}if(!V)return m(new e("invalid signature"));const T=I.payload;if(typeof T.nbf<"u"&&!x.ignoreNotBefore){if(typeof T.nbf!="number")return m(new e("invalid nbf value"));if(T.nbf>S+(x.clockTolerance||0))return m(new r("jwt not active",new Date(T.nbf*1e3)))}if(typeof T.exp<"u"&&!x.ignoreExpiration){if(typeof T.exp!="number")return m(new e("invalid exp value"));if(S>=T.exp+(x.clockTolerance||0))return m(new t("jwt expired",new Date(T.exp*1e3)))}if(x.audience){const w=Array.isArray(x.audience)?x.audience:[x.audience];if(!(Array.isArray(T.aud)?T.aud:[T.aud]).some(function(O){return w.some(function(j){return j instanceof RegExp?j.test(O):j===O})}))return m(new e("jwt audience invalid. expected: "+w.join(" or ")))}if(x.issuer&&(typeof x.issuer=="string"&&T.iss!==x.issuer||Array.isArray(x.issuer)&&x.issuer.indexOf(T.iss)===-1))return m(new e("jwt issuer invalid. expected: "+x.issuer));if(x.subject&&T.sub!==x.subject)return m(new e("jwt subject invalid. expected: "+x.subject));if(x.jwtid&&T.jti!==x.jwtid)return m(new e("jwt jwtid invalid. expected: "+x.jwtid));if(x.nonce&&T.nonce!==x.nonce)return m(new e("jwt nonce invalid. expected: "+x.nonce));if(x.maxAge){if(typeof T.iat!="number")return m(new e("iat required when maxAge is specified"));const w=a(x.maxAge,T.iat);if(typeof w>"u")return m(new e('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));if(S>=w+(x.clockTolerance||0))return m(new t("maxAge exceeded",new Date(w*1e3)))}if(x.complete===!0){const w=I.signature;return m(null,{header:$,payload:T,signature:w})}return m(null,T)})},Bt}var kt,Na;function $o(){if(Na)return kt;Na=1;var e=1/0,r=9007199254740991,t=17976931348623157e292,n=NaN,a="[object Arguments]",s="[object Function]",i="[object GeneratorFunction]",l="[object String]",c="[object Symbol]",f=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,u=/^0o[0-7]+$/i,v=/^(?:0|[1-9]\d*)$/,g=parseInt;function b(y,q){for(var M=-1,ee=y?y.length:0,ne=Array(ee);++M<ee;)ne[M]=q(y[M],M,y);return ne}function A(y,q,M,ee){for(var ne=y.length,ue=M+-1;++ue<ne;)if(q(y[ue],ue,y))return ue;return-1}function x(y,q,M){if(q!==q)return A(y,p,M);for(var ee=M-1,ne=y.length;++ee<ne;)if(y[ee]===q)return ee;return-1}function p(y){return y!==y}function m(y,q){for(var M=-1,ee=Array(y);++M<y;)ee[M]=q(M);return ee}function S(y,q){return b(q,function(M){return y[M]})}function N(y,q){return function(M){return y(q(M))}}var I=Object.prototype,$=I.hasOwnProperty,R=I.toString,P=I.propertyIsEnumerable,D=N(Object.keys,Object),_=Math.max;function V(y,q){var M=j(y)||O(y)?m(y.length,String):[],ee=M.length,ne=!!ee;for(var ue in y)$.call(y,ue)&&!(ne&&(ue=="length"||w(ue,ee)))&&M.push(ue);return M}function T(y){if(!h(y))return D(y);var q=[];for(var M in Object(y))$.call(y,M)&&M!="constructor"&&q.push(M);return q}function w(y,q){return q=q??r,!!q&&(typeof y=="number"||v.test(y))&&y>-1&&y%1==0&&y<q}function h(y){var q=y&&y.constructor,M=typeof q=="function"&&q.prototype||I;return y===M}function C(y,q,M,ee){y=L(y)?y:ks(y),M=M&&!ee?qs(M):0;var ne=y.length;return M<0&&(M=_(ne+M,0)),K(y)?M<=ne&&y.indexOf(q,M)>-1:!!ne&&x(y,q,M)>-1}function O(y){return k(y)&&$.call(y,"callee")&&(!P.call(y,"callee")||R.call(y)==a)}var j=Array.isArray;function L(y){return y!=null&&H(y.length)&&!U(y)}function k(y){return W(y)&&L(y)}function U(y){var q=X(y)?R.call(y):"";return q==s||q==i}function H(y){return typeof y=="number"&&y>-1&&y%1==0&&y<=r}function X(y){var q=typeof y;return!!y&&(q=="object"||q=="function")}function W(y){return!!y&&typeof y=="object"}function K(y){return typeof y=="string"||!j(y)&&W(y)&&R.call(y)==l}function Ie(y){return typeof y=="symbol"||W(y)&&R.call(y)==c}function Ds(y){if(!y)return y===0?y:0;if(y=Fs(y),y===e||y===-e){var q=y<0?-1:1;return q*t}return y===y?y:0}function qs(y){var q=Ds(y),M=q%1;return q===q?M?q-M:q:0}function Fs(y){if(typeof y=="number")return y;if(Ie(y))return n;if(X(y)){var q=typeof y.valueOf=="function"?y.valueOf():y;y=X(q)?q+"":q}if(typeof y!="string")return y===0?y:+y;y=y.replace(f,"");var M=d.test(y);return M||u.test(y)?g(y.slice(2),M?2:8):o.test(y)?n:+y}function Bs(y){return L(y)?V(y):T(y)}function ks(y){return y?S(y,Bs(y)):[]}return kt=C,kt}var Mt,Pa;function jo(){if(Pa)return Mt;Pa=1;var e="[object Boolean]",r=Object.prototype,t=r.toString;function n(s){return s===!0||s===!1||a(s)&&t.call(s)==e}function a(s){return!!s&&typeof s=="object"}return Mt=n,Mt}var Ht,_a;function Lo(){if(_a)return Ht;_a=1;var e=1/0,r=17976931348623157e292,t=NaN,n="[object Symbol]",a=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,f=Object.prototype,o=f.toString;function d(p){return typeof p=="number"&&p==A(p)}function u(p){var m=typeof p;return!!p&&(m=="object"||m=="function")}function v(p){return!!p&&typeof p=="object"}function g(p){return typeof p=="symbol"||v(p)&&o.call(p)==n}function b(p){if(!p)return p===0?p:0;if(p=x(p),p===e||p===-e){var m=p<0?-1:1;return m*r}return p===p?p:0}function A(p){var m=b(p),S=m%1;return m===m?S?m-S:m:0}function x(p){if(typeof p=="number")return p;if(g(p))return t;if(u(p)){var m=typeof p.valueOf=="function"?p.valueOf():p;p=u(m)?m+"":m}if(typeof p!="string")return p===0?p:+p;p=p.replace(a,"");var S=i.test(p);return S||l.test(p)?c(p.slice(2),S?2:8):s.test(p)?t:+p}return Ht=d,Ht}var Gt,Da;function No(){if(Da)return Gt;Da=1;var e="[object Number]",r=Object.prototype,t=r.toString;function n(s){return!!s&&typeof s=="object"}function a(s){return typeof s=="number"||n(s)&&t.call(s)==e}return Gt=a,Gt}var Vt,qa;function Po(){if(qa)return Vt;qa=1;var e="[object Object]";function r(u){var v=!1;if(u!=null&&typeof u.toString!="function")try{v=!!(u+"")}catch{}return v}function t(u,v){return function(g){return u(v(g))}}var n=Function.prototype,a=Object.prototype,s=n.toString,i=a.hasOwnProperty,l=s.call(Object),c=a.toString,f=t(Object.getPrototypeOf,Object);function o(u){return!!u&&typeof u=="object"}function d(u){if(!o(u)||c.call(u)!=e||r(u))return!1;var v=f(u);if(v===null)return!0;var g=i.call(v,"constructor")&&v.constructor;return typeof g=="function"&&g instanceof g&&s.call(g)==l}return Vt=d,Vt}var Ut,Fa;function _o(){if(Fa)return Ut;Fa=1;var e="[object String]",r=Object.prototype,t=r.toString,n=Array.isArray;function a(i){return!!i&&typeof i=="object"}function s(i){return typeof i=="string"||!n(i)&&a(i)&&t.call(i)==e}return Ut=s,Ut}var zt,Ba;function Do(){if(Ba)return zt;Ba=1;var e="Expected a function",r=1/0,t=17976931348623157e292,n=NaN,a="[object Symbol]",s=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt,o=Object.prototype,d=o.toString;function u(S,N){var I;if(typeof N!="function")throw new TypeError(e);return S=p(S),function(){return--S>0&&(I=N.apply(this,arguments)),S<=1&&(N=void 0),I}}function v(S){return u(2,S)}function g(S){var N=typeof S;return!!S&&(N=="object"||N=="function")}function b(S){return!!S&&typeof S=="object"}function A(S){return typeof S=="symbol"||b(S)&&d.call(S)==a}function x(S){if(!S)return S===0?S:0;if(S=m(S),S===r||S===-r){var N=S<0?-1:1;return N*t}return S===S?S:0}function p(S){var N=x(S),I=N%1;return N===N?I?N-I:N:0}function m(S){if(typeof S=="number")return S;if(A(S))return n;if(g(S)){var N=typeof S.valueOf=="function"?S.valueOf():S;S=g(N)?N+"":N}if(typeof S!="string")return S===0?S:+S;S=S.replace(s,"");var I=l.test(S);return I||c.test(S)?f(S.slice(2),I?2:8):i.test(S)?n:+S}return zt=v,zt}var Xt,ka;function qo(){if(ka)return Xt;ka=1;const e=As(),r=js(),t=$s(),n=tn(),a=$o(),s=jo(),i=Lo(),l=No(),c=Po(),f=_o(),o=Do(),{KeyObject:d,createSecretKey:u,createPrivateKey:v}=yr,g=["RS256","RS384","RS512","ES256","ES384","ES512","HS256","HS384","HS512","none"];r&&g.splice(3,0,"PS256","PS384","PS512");const b={expiresIn:{isValid:function(I){return i(I)||f(I)&&I},message:'"expiresIn" should be a number of seconds or string representing a timespan'},notBefore:{isValid:function(I){return i(I)||f(I)&&I},message:'"notBefore" should be a number of seconds or string representing a timespan'},audience:{isValid:function(I){return f(I)||Array.isArray(I)},message:'"audience" must be a string or array'},algorithm:{isValid:a.bind(null,g),message:'"algorithm" must be a valid string enum value'},header:{isValid:c,message:'"header" must be an object'},encoding:{isValid:f,message:'"encoding" must be a string'},issuer:{isValid:f,message:'"issuer" must be a string'},subject:{isValid:f,message:'"subject" must be a string'},jwtid:{isValid:f,message:'"jwtid" must be a string'},noTimestamp:{isValid:s,message:'"noTimestamp" must be a boolean'},keyid:{isValid:f,message:'"keyid" must be a string'},mutatePayload:{isValid:s,message:'"mutatePayload" must be a boolean'},allowInsecureKeySizes:{isValid:s,message:'"allowInsecureKeySizes" must be a boolean'},allowInvalidAsymmetricKeyTypes:{isValid:s,message:'"allowInvalidAsymmetricKeyTypes" must be a boolean'}},A={iat:{isValid:l,message:'"iat" should be a number of seconds'},exp:{isValid:l,message:'"exp" should be a number of seconds'},nbf:{isValid:l,message:'"nbf" should be a number of seconds'}};function x(I,$,R,P){if(!c(R))throw new Error('Expected "'+P+'" to be a plain object.');Object.keys(R).forEach(function(D){const _=I[D];if(!_){if(!$)throw new Error('"'+D+'" is not allowed in "'+P+'"');return}if(!_.isValid(R[D]))throw new Error(_.message)})}function p(I){return x(b,!1,I,"options")}function m(I){return x(A,!0,I,"payload")}const S={audience:"aud",issuer:"iss",subject:"sub",jwtid:"jti"},N=["expiresIn","notBefore","noTimestamp","audience","issuer","subject","jwtid"];return Xt=function(I,$,R,P){typeof R=="function"?(P=R,R={}):R=R||{};const D=typeof I=="object"&&!Buffer.isBuffer(I),_=Object.assign({alg:R.algorithm||"HS256",typ:D?"JWT":void 0,kid:R.keyid},R.header);function V(h){if(P)return P(h);throw h}if(!$&&R.algorithm!=="none")return V(new Error("secretOrPrivateKey must have a value"));if($!=null&&!($ instanceof d))try{$=v($)}catch{try{$=u(typeof $=="string"?Buffer.from($):$)}catch{return V(new Error("secretOrPrivateKey is not valid key material"))}}if(_.alg.startsWith("HS")&&$.type!=="secret")return V(new Error(`secretOrPrivateKey must be a symmetric key when using ${_.alg}`));if(/^(?:RS|PS|ES)/.test(_.alg)){if($.type!=="private")return V(new Error(`secretOrPrivateKey must be an asymmetric key when using ${_.alg}`));if(!R.allowInsecureKeySizes&&!_.alg.startsWith("ES")&&$.asymmetricKeyDetails!==void 0&&$.asymmetricKeyDetails.modulusLength<2048)return V(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${_.alg}`))}if(typeof I>"u")return V(new Error("payload is required"));if(D){try{m(I)}catch(h){return V(h)}R.mutatePayload||(I=Object.assign({},I))}else{const h=N.filter(function(C){return typeof R[C]<"u"});if(h.length>0)return V(new Error("invalid "+h.join(",")+" option for "+typeof I+" payload"))}if(typeof I.exp<"u"&&typeof R.expiresIn<"u")return V(new Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));if(typeof I.nbf<"u"&&typeof R.notBefore<"u")return V(new Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));try{p(R)}catch(h){return V(h)}if(!R.allowInvalidAsymmetricKeyTypes)try{t(_.alg,$)}catch(h){return V(h)}const T=I.iat||Math.floor(Date.now()/1e3);if(R.noTimestamp?delete I.iat:D&&(I.iat=T),typeof R.notBefore<"u"){try{I.nbf=e(R.notBefore,T)}catch(h){return V(h)}if(typeof I.nbf>"u")return V(new Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'))}if(typeof R.expiresIn<"u"&&typeof I=="object"){try{I.exp=e(R.expiresIn,T)}catch(h){return V(h)}if(typeof I.exp>"u")return V(new Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'))}Object.keys(S).forEach(function(h){const C=S[h];if(typeof R[h]<"u"){if(typeof I[C]<"u")return V(new Error('Bad "options.'+h+'" option. The payload already has an "'+C+'" property.'));I[C]=R[h]}});const w=R.encoding||"utf8";if(typeof P=="function")P=P&&o(P),n.createSign({header:_,privateKey:$,payload:I,encoding:w}).once("error",P).once("done",function(h){if(!R.allowInsecureKeySizes&&/^(?:RS|PS)/.test(_.alg)&&h.length<256)return P(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${_.alg}`));P(null,h)});else{let h=n.sign({header:_,payload:I,secret:$,encoding:w});if(!R.allowInsecureKeySizes&&/^(?:RS|PS)/.test(_.alg)&&h.length<256)throw new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${_.alg}`);return h}},Xt}var Kt,Ma;function Fo(){return Ma||(Ma=1,Kt={decode:ws(),verify:Oo(),sign:qo(),JsonWebTokenError:wr(),NotBeforeError:Ss(),TokenExpiredError:Rs()}),Kt}var Bo=Fo();const Ls=Wi(Bo),de=new ls,Ns="structa-secret-key-2026";de.use("/api/*",Ri());de.use("/static/*",Pi({root:"./public"}));const Ps=async(e,r)=>{const t=e.req.header("Authorization");if(!t||!t.startsWith("Bearer "))return e.json({error:"Token não fornecido"},401);const n=t.substring(7);try{const a=Ls.verify(n,Ns);e.set("user",a),await r()}catch{return e.json({error:"Token inválido"},401)}};de.post("/api/auth/login",async e=>{try{const{email:r,password:t}=await e.req.json();if(!r||!t)return e.json({error:"Email e senha são obrigatórios"},400);const{DB:n}=e.env,a=await n.prepare("SELECT * FROM users WHERE email = ? AND status = ?").bind(r,"active").first();if(!a)return e.json({error:"Credenciais inválidas"},401);if(!await Ki.compare(t,a.password_hash))return e.json({error:"Credenciais inválidas"},401);const i=Ls.sign({id:a.id,email:a.email,name:a.name,role:a.role},Ns,{expiresIn:"8h"});return e.json({token:i,user:{id:a.id,email:a.email,name:a.name,role:a.role}})}catch(r){return console.error("Login error:",r),e.json({error:"Erro ao fazer login"},500)}});de.get("/api/auth/me",Ps,async e=>{const r=e.get("user");return e.json({user:r})});de.get("/api/users",Ps,async e=>{try{if(e.get("user").role!=="admin")return e.json({error:"Acesso negado"},403);const{DB:t}=e.env,{results:n}=await t.prepare("SELECT id, email, name, role, status, created_at FROM users ORDER BY created_at DESC").all();return e.json({users:n})}catch(r){return console.error("List users error:",r),e.json({error:"Erro ao listar usuários"},500)}});de.get("/",e=>e.html(`
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
                alert('Para recuperar sua senha, entre em contato com o administrador do sistema.\\n\\nEmail: suporte@structaep.com.br');
            }
            
            loginForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                hideMessages();
                
                console.log('Form submitted!');
                
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                
                console.log('Email:', email, 'Password length:', password.length);
                
                if (!email || !password) {
                    showError('Por favor, preencha todos os campos.');
                    return;
                }
                
                loginButton.disabled = true;
                loginButton.innerHTML = '<i class="fas fa-spinner fa-spin" style="margin-right: 8px;"></i>Entrando...';
                
                try {
                    console.log('Sending login request...');
                    const response = await axios.post('/api/auth/login', {
                        email,
                        password
                    });
                    
                    console.log('Response received:', response.data);
                    
                    if (response.data.token) {
                        localStorage.setItem('token', response.data.token);
                        localStorage.setItem('user', JSON.stringify(response.data.user));
                        
                        showSuccess('Login realizado com sucesso! Redirecionando...');
                        console.log('Redirecting to dashboard...');
                        
                        setTimeout(() => {
                            window.location.href = '/dashboard';
                        }, 1000);
                    } else {
                        showError('Resposta inválida do servidor.');
                    }
                } catch (error) {
                    console.error('Login error:', error);
                    console.error('Error details:', error.response);
                    if (error.response?.data?.error) {
                        showError(error.response.data.error);
                    } else if (error.message) {
                        showError('Erro: ' + error.message);
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
  `));de.get("/dashboard",e=>e.html(`
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
  `));de.get("/vendas",e=>e.html(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Apresentação de Vendas - Structa</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { font-family: 'Poppins', sans-serif; background: #F6F7F8; }
            
            .sidebar {
                position: fixed; left: 0; top: 0; height: 100vh; width: 280px;
                background: linear-gradient(180deg, #1F3B4D 0%, #2A4A5C 100%);
                box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1); transition: transform 0.3s ease;
                z-index: 1000; overflow-y: auto;
            }
            .sidebar-header {
                padding: 24px 20px; border-bottom: 1px solid rgba(201, 165, 109, 0.2);
                display: flex; align-items: center; gap: 12px;
            }
            .sidebar-logo { height: 40px; width: auto; }
            .sidebar-title {
                font-family: 'Playfair Display', serif; font-weight: 600;
                letter-spacing: 0.15em; color: #C9A56D; font-size: 1.3rem;
            }
            .sidebar-menu { padding: 20px 0; }
            .menu-item {
                display: flex; align-items: center; padding: 14px 24px; color: #F6F7F8;
                text-decoration: none; transition: all 0.3s; cursor: pointer;
                border-left: 3px solid transparent;
            }
            .menu-item:hover { background: rgba(201, 165, 109, 0.1); border-left-color: #C9A56D; }
            .menu-item.active { background: rgba(201, 165, 109, 0.15); border-left-color: #C9A56D; color: #C9A56D; }
            .menu-item i { width: 24px; margin-right: 12px; text-align: center; }
            
            .main-content { margin-left: 280px; min-height: 100vh; transition: margin-left 0.3s ease; }
            .top-bar {
                background: white; padding: 20px 32px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
                display: flex; justify-content: space-between; align-items: center;
            }
            .user-info { display: flex; align-items: center; gap: 12px; }
            .user-avatar {
                width: 40px; height: 40px; border-radius: 50%;
                background: linear-gradient(135deg, #C9A56D 0%, #B89558 100%);
                display: flex; align-items: center; justify-content: center;
                color: white; font-weight: 600;
            }
            .content-area { padding: 32px; }
            
            .page-container {
                min-height: calc(100vh - 80px);
                background: #F6F7F8;
                padding: 40px 20px;
            }
            .card-option {
                background: white;
                border-radius: 16px;
                padding: 40px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.08);
                transition: all 0.3s;
                cursor: pointer;
                border: 3px solid transparent;
            }
            .card-option:hover {
                transform: translateY(-8px);
                box-shadow: 0 12px 40px rgba(201, 165, 109, 0.2);
                border-color: #C9A56D;
            }
            .icon-circle {
                width: 80px;
                height: 80px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 2rem;
                margin: 0 auto 24px;
            }
            
            @media (max-width: 768px) {
                .sidebar { transform: translateX(-100%); }
                .sidebar.active { transform: translateX(0); }
                .main-content { margin-left: 0; }
            }
        </style>
    </head>
    <body>
        ${ko()}
        
        <div class="main-content">
            ${Mo("Apresentação de Vendas")}
            
            <div class="content-area">
                <div class="page-container">
                    <h1 style="font-size: 2rem; font-weight: 700; color: #1F3B4D; text-align: center; margin-bottom: 16px;">
                        Apresentação Interativa de Vendas
                    </h1>
                    <p style="text-align: center; color: #666; margin-bottom: 48px; font-size: 1.1rem;">
                        Escolha uma opção para continuar
                    </p>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px; max-width: 900px; margin: 0 auto;">
                        <div class="card-option" onclick="window.location.href='/vendas/apresentacao'">
                            <div class="icon-circle" style="background: linear-gradient(135deg, #1F3B4D 0%, #365C73 100%); color: white;">
                                <i class="fas fa-play"></i>
                            </div>
                            <h2 style="font-size: 1.5rem; font-weight: 600; color: #1F3B4D; text-align: center; margin-bottom: 12px;">
                                Iniciar Apresentação
                            </h2>
                            <p style="color: #666; text-align: center; line-height: 1.6;">
                                Inicie o modo apresentação em tela cheia com navegação por slides
                            </p>
                        </div>
                        
                        <div class="card-option" onclick="window.location.href='/vendas/configuracoes'">
                            <div class="icon-circle" style="background: linear-gradient(135deg, #C9A56D 0%, #B89558 100%); color: white;">
                                <i class="fas fa-cog"></i>
                            </div>
                            <h2 style="font-size: 1.5rem; font-weight: 600; color: #1F3B4D; text-align: center; margin-bottom: 12px;">
                                Configurações
                            </h2>
                            <p style="color: #666; text-align: center; line-height: 1.6;">
                                Gerencie os slides, ative ou desative slides específicos
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"><\/script>
        <script>
            const token = localStorage.getItem('token');
            if (!token) window.location.href = '/';
            
            function logout() {
                if (confirm('Deseja realmente sair?')) {
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    window.location.href = '/';
                }
            }
        <\/script>
    </body>
    </html>
  `));de.get("/vendas/apresentacao",e=>e.html(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Apresentação Structa</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
                font-family: 'Poppins', sans-serif;
                background: #1F3B4D;
                overflow: hidden;
            }
            
            .slide-container {
                width: 100vw;
                height: 100vh;
                display: flex;
                flex-direction: column;
                position: relative;
            }
            
            .slide-content {
                flex: 1;
                display: flex;
                flex-direction: column;
                padding: 60px 80px;
                overflow-y: auto;
            }
            
            .premium-badge {
                display: inline-block;
                background: linear-gradient(135deg, #C9A56D 0%, #B89558 100%);
                color: white;
                padding: 12px 40px;
                border-radius: 50px;
                font-size: 1.1rem;
                font-weight: 600;
                text-align: center;
                margin: 0 auto 40px;
                box-shadow: 0 4px 15px rgba(201, 165, 109, 0.3);
            }
            
            .logo-section {
                text-align: center;
                margin-bottom: 60px;
            }
            
            .logo-section img {
                height: 80px;
                width: auto;
                margin-bottom: 20px;
            }
            
            .logo-section .company-name {
                font-family: 'Playfair Display', serif;
                font-size: 3rem;
                font-weight: 700;
                color: #C9A56D;
                letter-spacing: 0.15em;
                margin-bottom: 12px;
            }
            
            .logo-section .tagline {
                font-size: 1.3rem;
                color: #F6F7F8;
                font-weight: 300;
            }
            
            .two-columns {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 60px;
                margin-bottom: 60px;
                align-items: center;
            }
            
            .photo-column img {
                width: 100%;
                max-width: 500px;
                border-radius: 20px;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
            }
            
            .text-column {
                color: #F6F7F8;
                font-size: 1.15rem;
                line-height: 1.9;
                font-weight: 300;
            }
            
            .text-column p {
                margin-bottom: 20px;
            }
            
            .text-column strong {
                color: #C9A56D;
                font-weight: 600;
            }
            
            .stats-section {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 40px;
                margin-bottom: 60px;
                max-width: 900px;
                margin-left: auto;
                margin-right: auto;
            }
            
            .stat-card {
                background: rgba(201, 165, 109, 0.1);
                border: 2px solid #C9A56D;
                border-radius: 16px;
                padding: 30px;
                text-align: center;
            }
            
            .stat-card .number {
                font-size: 2.5rem;
                font-weight: 700;
                color: #C9A56D;
                margin-bottom: 8px;
            }
            
            .stat-card .label {
                color: #F6F7F8;
                font-size: 1.1rem;
            }
            
            .cta-section {
                background: linear-gradient(135deg, #C9A56D 0%, #B89558 100%);
                border-radius: 20px;
                padding: 50px;
                text-align: center;
                max-width: 1000px;
                margin: 0 auto;
            }
            
            .cta-section h2 {
                font-size: 2.2rem;
                font-weight: 700;
                color: #1F3B4D;
                margin-bottom: 16px;
            }
            
            .cta-section p {
                font-size: 1.2rem;
                color: #2A2A2A;
                margin-bottom: 32px;
                line-height: 1.6;
            }
            
            .cta-button {
                display: inline-block;
                background: #1F3B4D;
                color: white;
                padding: 18px 50px;
                border-radius: 50px;
                font-size: 1.2rem;
                font-weight: 600;
                text-decoration: none;
                transition: all 0.3s;
                box-shadow: 0 4px 15px rgba(31, 59, 77, 0.3);
            }
            
            .cta-button:hover {
                transform: translateY(-4px);
                box-shadow: 0 8px 25px rgba(31, 59, 77, 0.4);
            }
            
            .slide-navigation {
                position: fixed;
                bottom: 40px;
                right: 40px;
                display: flex;
                gap: 16px;
                z-index: 1000;
            }
            
            .nav-button {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: linear-gradient(135deg, #C9A56D 0%, #B89558 100%);
                color: white;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                transition: all 0.3s;
                box-shadow: 0 4px 15px rgba(201, 165, 109, 0.4);
            }
            
            .nav-button:hover {
                transform: scale(1.1);
            }
            
            .nav-button:disabled {
                opacity: 0.3;
                cursor: not-allowed;
            }
            
            .exit-button {
                position: fixed;
                top: 30px;
                right: 30px;
                background: rgba(255, 255, 255, 0.1);
                color: white;
                border: 2px solid rgba(255, 255, 255, 0.3);
                padding: 12px 24px;
                border-radius: 50px;
                font-size: 1rem;
                cursor: pointer;
                transition: all 0.3s;
            }
            
            .exit-button:hover {
                background: rgba(255, 255, 255, 0.2);
            }
            
            @media (max-width: 1024px) {
                .slide-content { padding: 40px; }
                .two-columns { grid-template-columns: 1fr; gap: 40px; }
                .stats-section { grid-template-columns: 1fr; }
                .logo-section .company-name { font-size: 2rem; }
                .logo-section .tagline { font-size: 1.1rem; }
            }
        </style>
    </head>
    <body>
        <div class="slide-container">
            <button class="exit-button" onclick="window.location.href='/vendas'">
                <i class="fas fa-times"></i> Sair da Apresentação
            </button>
            
            <div class="slide-content">
                <!-- Badge Premium -->
                <div style="text-align: center;">
                    <div class="premium-badge">Consultoria Premium</div>
                </div>
                
                <!-- Logo e Nome -->
                <div class="logo-section">
                    <img src="/static/logo-structa.png" alt="Structa">
                    <div class="company-name">STRUCTA</div>
                    <div class="tagline">Engenharia Patrimonial de Alta Performance para médicos.</div>
                </div>
                
                <!-- Duas Colunas -->
                <div class="two-columns">
                    <div class="photo-column">
                        <img src="/static/medico-foto.jpg" alt="Profissional">
                    </div>
                    <div class="text-column">
                        <p>Quando vi que funcionava, percebi algo importante:</p>
                        <p><strong>Muitos médicos vivem exatamente o que eu vivi.</strong><br>
                        Trabalham muito. Constroem pouco.<br>
                        Dependem exclusivamente da própria agenda.</p>
                        <p>Foi então que decidi compartilhar esse caminho.</p>
                        <p>Hoje, além de médico, atuo ajudando colegas a estruturarem patrimônio com <strong>estratégia, clareza e visão de longo prazo.</strong></p>
                        <p><strong>Não se trata de promessas rápidas.</strong><br>
                        Se trata de construção sólida.</p>
                        <p><strong>Não se trata de abandonar a medicina.</strong><br>
                        Se trata de não depender exclusivamente dela.</p>
                    </div>
                </div>
                
                <!-- Stats -->
                <div class="stats-section">
                    <div class="stat-card">
                        <div class="number">+R$ 100Mi</div>
                        <div class="label">em Créditos Gerenciados</div>
                    </div>
                    <div class="stat-card">
                        <div class="number">97,8%</div>
                        <div class="label">de Satisfação</div>
                    </div>
                </div>
                
                <!-- CTA -->
                <div class="cta-section">
                    <h2>Pronto para transformar seu futuro financeiro?</h2>
                    <p>Descubra como nossa metodologia pode gerar renda passiva consistente e construir seu patrimônio de forma inteligente</p>
                    <a href="#" class="cta-button" onclick="nextSlide(); return false;">
                        Pronto para conhecer nosso ecossistema <i class="fas fa-arrow-right" style="margin-left: 10px;"></i>
                    </a>
                </div>
            </div>
            
            <!-- Navegação -->
            <div class="slide-navigation">
                <button class="nav-button" onclick="previousSlide()" disabled>
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="nav-button" onclick="nextSlide()">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
        
        <script>
            function nextSlide() {
                alert('Próximo slide será implementado! Por enquanto, este é o slide 1.');
                // window.location.href = '/vendas/apresentacao/slide2';
            }
            
            function previousSlide() {
                // window.location.href = '/vendas/apresentacao';
            }
            
            // Navegação por teclado
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
                if (e.key === 'ArrowLeft') previousSlide();
                if (e.key === 'Escape') window.location.href = '/vendas';
            });
        <\/script>
    </body>
    </html>
  `));function ko(){return`
    <div class="sidebar" id="sidebar">
        <div class="sidebar-header">
            <img src="/static/logo-structa.png" alt="Structa" class="sidebar-logo">
            <div class="sidebar-title">STRUCTA</div>
        </div>
        
        <nav class="sidebar-menu">
            <a href="/dashboard" class="menu-item">
                <i class="fas fa-chart-line"></i>
                <span>Dashboard</span>
            </a>
            <a href="/vendas" class="menu-item active">
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
  `}function Mo(e){return`
    <div class="top-bar">
        <h1 style="font-size: 1.5rem; font-weight: 600; color: #1F3B4D;">${e}</h1>
        <div class="user-info">
            <div>
                <div style="font-weight: 600; color: #1F3B4D; text-align: right;" id="userName">Admin</div>
                <div style="font-size: 0.85rem; color: #666; text-align: right;">Administrador</div>
            </div>
            <div class="user-avatar">A</div>
        </div>
    </div>
  `}const Ha=new ls,Ho=Object.assign({"/src/index.tsx":de});let _s=!1;for(const[,e]of Object.entries(Ho))e&&(Ha.all("*",r=>{let t;try{t=r.executionCtx}catch{}return e.fetch(r.req.raw,r.env,t)}),Ha.notFound(r=>{let t;try{t=r.executionCtx}catch{}return e.fetch(r.req.raw,r.env,t)}),_s=!0);if(!_s)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{Ha as default};
