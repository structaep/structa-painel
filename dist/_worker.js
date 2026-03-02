var Ma=Object.defineProperty;var dn=e=>{throw TypeError(e)};var za=(e,t,r)=>t in e?Ma(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var B=(e,t,r)=>za(e,typeof t!="symbol"?t+"":t,r),Ct=(e,t,r)=>t.has(e)||dn("Cannot "+r);var E=(e,t,r)=>(Ct(e,t,"read from private field"),r?r.call(e):t.get(e)),H=(e,t,r)=>t.has(e)?dn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),F=(e,t,r,n)=>(Ct(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),U=(e,t,r)=>(Ct(e,t,"access private method"),r);var un=(e,t,r,n)=>({set _(i){F(e,t,i,r)},get _(){return E(e,t,n)}});import yt from"crypto";import pt from"buffer";import Zr from"stream";import Et from"util";var xn=(e,t,r)=>(n,i)=>{let a=-1;return s(0);async function s(l){if(l<=a)throw new Error("next() called multiple times");a=l;let c,f=!1,o;if(e[l]?(o=e[l][0][0],n.req.routeIndex=l):o=l===e.length&&i||void 0,o)try{c=await o(n,()=>s(l+1))}catch(d){if(d instanceof Error&&t)n.error=d,c=await t(d,n),f=!0;else throw d}else n.finalized===!1&&r&&(c=await r(n));return c&&(n.finalized===!1||f)&&(n.res=c),n}},Ha=Symbol(),Ga=async(e,t=Object.create(null))=>{const{all:r=!1,dot:n=!1}=t,a=(e instanceof ea?e.raw.headers:e.headers).get("Content-Type");return a!=null&&a.startsWith("multipart/form-data")||a!=null&&a.startsWith("application/x-www-form-urlencoded")?Va(e,{all:r,dot:n}):{}};async function Va(e,t){const r=await e.formData();return r?Ua(r,t):{}}function Ua(e,t){const r=Object.create(null);return e.forEach((n,i)=>{t.all||i.endsWith("[]")?Xa(r,i,n):r[i]=n}),t.dot&&Object.entries(r).forEach(([n,i])=>{n.includes(".")&&(Ka(r,n,i),delete r[n])}),r}var Xa=(e,t,r)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(r):e[t]=[e[t],r]:t.endsWith("[]")?e[t]=[r]:e[t]=r},Ka=(e,t,r)=>{let n=e;const i=t.split(".");i.forEach((a,s)=>{s===i.length-1?n[a]=r:((!n[a]||typeof n[a]!="object"||Array.isArray(n[a])||n[a]instanceof File)&&(n[a]=Object.create(null)),n=n[a])})},Wi=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},Wa=e=>{const{groups:t,path:r}=Ja(e),n=Wi(r);return Ya(n,t)},Ja=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(r,n)=>{const i=`@${n}`;return t.push([i,r]),i}),{groups:t,path:e}},Ya=(e,t)=>{for(let r=t.length-1;r>=0;r--){const[n]=t[r];for(let i=e.length-1;i>=0;i--)if(e[i].includes(n)){e[i]=e[i].replace(n,t[r][1]);break}}return e},ft={},Za=(e,t)=>{if(e==="*")return"*";const r=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(r){const n=`${e}#${t}`;return ft[n]||(r[2]?ft[n]=t&&t[0]!==":"&&t[0]!=="*"?[n,r[1],new RegExp(`^${r[2]}(?=/${t})`)]:[e,r[1],new RegExp(`^${r[2]}$`)]:ft[n]=[e,r[1],!0]),ft[n]}return null},Qr=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,r=>{try{return t(r)}catch{return r}})}},Qa=e=>Qr(e,decodeURI),Ji=e=>{const t=e.url,r=t.indexOf("/",t.indexOf(":")+4);let n=r;for(;n<t.length;n++){const i=t.charCodeAt(n);if(i===37){const a=t.indexOf("?",n),s=t.indexOf("#",n),l=a===-1?s===-1?void 0:s:s===-1?a:Math.min(a,s),c=t.slice(r,l);return Qa(c.includes("%25")?c.replace(/%25/g,"%2525"):c)}else if(i===63||i===35)break}return t.slice(r,n)},es=e=>{const t=Ji(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},qe=(e,t,...r)=>(r.length&&(t=qe(t,...r)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),Yi=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),r=[];let n="";return t.forEach(i=>{if(i!==""&&!/\:/.test(i))n+="/"+i;else if(/\:/.test(i))if(/\?/.test(i)){r.length===0&&n===""?r.push("/"):r.push(n);const a=i.replace("?","");n+="/"+a,r.push(n)}else n+="/"+i}),r.filter((i,a,s)=>s.indexOf(i)===a)},Ot=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Qr(e,Qi):e):e,Zi=(e,t,r)=>{let n;if(!r&&t&&!/[%+]/.test(t)){let s=e.indexOf("?",8);if(s===-1)return;for(e.startsWith(t,s+1)||(s=e.indexOf(`&${t}`,s+1));s!==-1;){const l=e.charCodeAt(s+t.length+1);if(l===61){const c=s+t.length+2,f=e.indexOf("&",c);return Ot(e.slice(c,f===-1?void 0:f))}else if(l==38||isNaN(l))return"";s=e.indexOf(`&${t}`,s+1)}if(n=/[%+]/.test(e),!n)return}const i={};n??(n=/[%+]/.test(e));let a=e.indexOf("?",8);for(;a!==-1;){const s=e.indexOf("&",a+1);let l=e.indexOf("=",a);l>s&&s!==-1&&(l=-1);let c=e.slice(a+1,l===-1?s===-1?void 0:s:l);if(n&&(c=Ot(c)),a=s,c==="")continue;let f;l===-1?f="":(f=e.slice(l+1,s===-1?void 0:s),n&&(f=Ot(f))),r?(i[c]&&Array.isArray(i[c])||(i[c]=[]),i[c].push(f)):i[c]??(i[c]=f)}return t?i[t]:i},ts=Zi,rs=(e,t)=>Zi(e,t,!0),Qi=decodeURIComponent,hn=e=>Qr(e,Qi),Me,ie,be,ta,ra,Wr,ye,Hi,ea=(Hi=class{constructor(e,t="/",r=[[]]){H(this,be);B(this,"raw");H(this,Me);H(this,ie);B(this,"routeIndex",0);B(this,"path");B(this,"bodyCache",{});H(this,ye,e=>{const{bodyCache:t,raw:r}=this,n=t[e];if(n)return n;const i=Object.keys(t)[0];return i?t[i].then(a=>(i==="json"&&(a=JSON.stringify(a)),new Response(a)[e]())):t[e]=r[e]()});this.raw=e,this.path=t,F(this,ie,r),F(this,Me,{})}param(e){return e?U(this,be,ta).call(this,e):U(this,be,ra).call(this)}query(e){return ts(this.url,e)}queries(e){return rs(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((r,n)=>{t[n]=r}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await Ga(this,e))}json(){return E(this,ye).call(this,"text").then(e=>JSON.parse(e))}text(){return E(this,ye).call(this,"text")}arrayBuffer(){return E(this,ye).call(this,"arrayBuffer")}blob(){return E(this,ye).call(this,"blob")}formData(){return E(this,ye).call(this,"formData")}addValidatedData(e,t){E(this,Me)[e]=t}valid(e){return E(this,Me)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[Ha](){return E(this,ie)}get matchedRoutes(){return E(this,ie)[0].map(([[,e]])=>e)}get routePath(){return E(this,ie)[0].map(([[,e]])=>e)[this.routeIndex].path}},Me=new WeakMap,ie=new WeakMap,be=new WeakSet,ta=function(e){const t=E(this,ie)[0][this.routeIndex][1][e],r=U(this,be,Wr).call(this,t);return r&&/\%/.test(r)?hn(r):r},ra=function(){const e={},t=Object.keys(E(this,ie)[0][this.routeIndex][1]);for(const r of t){const n=U(this,be,Wr).call(this,E(this,ie)[0][this.routeIndex][1][r]);n!==void 0&&(e[r]=/\%/.test(n)?hn(n):n)}return e},Wr=function(e){return E(this,ie)[1]?E(this,ie)[1][e]:e},ye=new WeakMap,Hi),ns={Stringify:1},na=async(e,t,r,n,i)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const a=e.callbacks;return a!=null&&a.length?(i?i[0]+=e:i=[e],Promise.all(a.map(l=>l({phase:t,buffer:i,context:n}))).then(l=>Promise.all(l.filter(Boolean).map(c=>na(c,t,!1,n,i))).then(()=>i[0]))):Promise.resolve(e)},is="text/plain; charset=UTF-8",$t=(e,t)=>({"Content-Type":e,...t}),We=(e,t)=>new Response(e,t),tt,rt,he,ze,pe,te,nt,He,Ge,Oe,it,at,Ee,Fe,Gi,as=(Gi=class{constructor(e,t){H(this,Ee);H(this,tt);H(this,rt);B(this,"env",{});H(this,he);B(this,"finalized",!1);B(this,"error");H(this,ze);H(this,pe);H(this,te);H(this,nt);H(this,He);H(this,Ge);H(this,Oe);H(this,it);H(this,at);B(this,"render",(...e)=>(E(this,He)??F(this,He,t=>this.html(t)),E(this,He).call(this,...e)));B(this,"setLayout",e=>F(this,nt,e));B(this,"getLayout",()=>E(this,nt));B(this,"setRenderer",e=>{F(this,He,e)});B(this,"header",(e,t,r)=>{this.finalized&&F(this,te,We(E(this,te).body,E(this,te)));const n=E(this,te)?E(this,te).headers:E(this,Oe)??F(this,Oe,new Headers);t===void 0?n.delete(e):r!=null&&r.append?n.append(e,t):n.set(e,t)});B(this,"status",e=>{F(this,ze,e)});B(this,"set",(e,t)=>{E(this,he)??F(this,he,new Map),E(this,he).set(e,t)});B(this,"get",e=>E(this,he)?E(this,he).get(e):void 0);B(this,"newResponse",(...e)=>U(this,Ee,Fe).call(this,...e));B(this,"body",(e,t,r)=>U(this,Ee,Fe).call(this,e,t,r));B(this,"text",(e,t,r)=>!E(this,Oe)&&!E(this,ze)&&!t&&!r&&!this.finalized?new Response(e):U(this,Ee,Fe).call(this,e,t,$t(is,r)));B(this,"json",(e,t,r)=>U(this,Ee,Fe).call(this,JSON.stringify(e),t,$t("application/json",r)));B(this,"html",(e,t,r)=>{const n=i=>U(this,Ee,Fe).call(this,i,t,$t("text/html; charset=UTF-8",r));return typeof e=="object"?na(e,ns.Stringify,!1,{}).then(n):n(e)});B(this,"redirect",(e,t)=>{const r=String(e);return this.header("Location",/[^\x00-\xFF]/.test(r)?encodeURI(r):r),this.newResponse(null,t??302)});B(this,"notFound",()=>(E(this,Ge)??F(this,Ge,()=>We()),E(this,Ge).call(this,this)));F(this,tt,e),t&&(F(this,pe,t.executionCtx),this.env=t.env,F(this,Ge,t.notFoundHandler),F(this,at,t.path),F(this,it,t.matchResult))}get req(){return E(this,rt)??F(this,rt,new ea(E(this,tt),E(this,at),E(this,it))),E(this,rt)}get event(){if(E(this,pe)&&"respondWith"in E(this,pe))return E(this,pe);throw Error("This context has no FetchEvent")}get executionCtx(){if(E(this,pe))return E(this,pe);throw Error("This context has no ExecutionContext")}get res(){return E(this,te)||F(this,te,We(null,{headers:E(this,Oe)??F(this,Oe,new Headers)}))}set res(e){if(E(this,te)&&e){e=We(e.body,e);for(const[t,r]of E(this,te).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const n=E(this,te).headers.getSetCookie();e.headers.delete("set-cookie");for(const i of n)e.headers.append("set-cookie",i)}else e.headers.set(t,r)}F(this,te,e),this.finalized=!0}get var(){return E(this,he)?Object.fromEntries(E(this,he)):{}}},tt=new WeakMap,rt=new WeakMap,he=new WeakMap,ze=new WeakMap,pe=new WeakMap,te=new WeakMap,nt=new WeakMap,He=new WeakMap,Ge=new WeakMap,Oe=new WeakMap,it=new WeakMap,at=new WeakMap,Ee=new WeakSet,Fe=function(e,t,r){const n=E(this,te)?new Headers(E(this,te).headers):E(this,Oe)??new Headers;if(typeof t=="object"&&"headers"in t){const a=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[s,l]of a)s.toLowerCase()==="set-cookie"?n.append(s,l):n.set(s,l)}if(r)for(const[a,s]of Object.entries(r))if(typeof s=="string")n.set(a,s);else{n.delete(a);for(const l of s)n.append(a,l)}const i=typeof t=="number"?t:(t==null?void 0:t.status)??E(this,ze);return We(e,{status:i,headers:n})},Gi),J="ALL",ss="all",os=["get","post","put","delete","options","patch"],ia="Can not add a route since the matcher is already built.",aa=class extends Error{},cs="__COMPOSED_HANDLER",fs=e=>e.text("404 Not Found",404),pn=(e,t)=>{if("getResponse"in e){const r=e.getResponse();return t.newResponse(r.body,r)}return console.error(e),t.text("Internal Server Error",500)},ae,Y,sa,se,Te,ut,xt,Ve,ls=(Ve=class{constructor(t={}){H(this,Y);B(this,"get");B(this,"post");B(this,"put");B(this,"delete");B(this,"options");B(this,"patch");B(this,"all");B(this,"on");B(this,"use");B(this,"router");B(this,"getPath");B(this,"_basePath","/");H(this,ae,"/");B(this,"routes",[]);H(this,se,fs);B(this,"errorHandler",pn);B(this,"onError",t=>(this.errorHandler=t,this));B(this,"notFound",t=>(F(this,se,t),this));B(this,"fetch",(t,...r)=>U(this,Y,xt).call(this,t,r[1],r[0],t.method));B(this,"request",(t,r,n,i)=>t instanceof Request?this.fetch(r?new Request(t,r):t,n,i):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${qe("/",t)}`,r),n,i)));B(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(U(this,Y,xt).call(this,t.request,t,void 0,t.request.method))})});[...os,ss].forEach(a=>{this[a]=(s,...l)=>(typeof s=="string"?F(this,ae,s):U(this,Y,Te).call(this,a,E(this,ae),s),l.forEach(c=>{U(this,Y,Te).call(this,a,E(this,ae),c)}),this)}),this.on=(a,s,...l)=>{for(const c of[s].flat()){F(this,ae,c);for(const f of[a].flat())l.map(o=>{U(this,Y,Te).call(this,f.toUpperCase(),E(this,ae),o)})}return this},this.use=(a,...s)=>(typeof a=="string"?F(this,ae,a):(F(this,ae,"*"),s.unshift(a)),s.forEach(l=>{U(this,Y,Te).call(this,J,E(this,ae),l)}),this);const{strict:n,...i}=t;Object.assign(this,i),this.getPath=n??!0?t.getPath??Ji:es}route(t,r){const n=this.basePath(t);return r.routes.map(i=>{var s;let a;r.errorHandler===pn?a=i.handler:(a=async(l,c)=>(await xn([],r.errorHandler)(l,()=>i.handler(l,c))).res,a[cs]=i.handler),U(s=n,Y,Te).call(s,i.method,i.path,a)}),this}basePath(t){const r=U(this,Y,sa).call(this);return r._basePath=qe(this._basePath,t),r}mount(t,r,n){let i,a;n&&(typeof n=="function"?a=n:(a=n.optionHandler,n.replaceRequest===!1?i=c=>c:i=n.replaceRequest));const s=a?c=>{const f=a(c);return Array.isArray(f)?f:[f]}:c=>{let f;try{f=c.executionCtx}catch{}return[c.env,f]};i||(i=(()=>{const c=qe(this._basePath,t),f=c==="/"?0:c.length;return o=>{const d=new URL(o.url);return d.pathname=d.pathname.slice(f)||"/",new Request(d,o)}})());const l=async(c,f)=>{const o=await r(i(c.req.raw),...s(c));if(o)return o;await f()};return U(this,Y,Te).call(this,J,qe(t,"*"),l),this}},ae=new WeakMap,Y=new WeakSet,sa=function(){const t=new Ve({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,F(t,se,E(this,se)),t.routes=this.routes,t},se=new WeakMap,Te=function(t,r,n){t=t.toUpperCase(),r=qe(this._basePath,r);const i={basePath:this._basePath,path:r,method:t,handler:n};this.router.add(t,r,[n,i]),this.routes.push(i)},ut=function(t,r){if(t instanceof Error)return this.errorHandler(t,r);throw t},xt=function(t,r,n,i){if(i==="HEAD")return(async()=>new Response(null,await U(this,Y,xt).call(this,t,r,n,"GET")))();const a=this.getPath(t,{env:n}),s=this.router.match(i,a),l=new as(t,{path:a,matchResult:s,env:n,executionCtx:r,notFoundHandler:E(this,se)});if(s[0].length===1){let f;try{f=s[0][0][0][0](l,async()=>{l.res=await E(this,se).call(this,l)})}catch(o){return U(this,Y,ut).call(this,o,l)}return f instanceof Promise?f.then(o=>o||(l.finalized?l.res:E(this,se).call(this,l))).catch(o=>U(this,Y,ut).call(this,o,l)):f??E(this,se).call(this,l)}const c=xn(s[0],this.errorHandler,E(this,se));return(async()=>{try{const f=await c(l);if(!f.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return f.res}catch(f){return U(this,Y,ut).call(this,f,l)}})()},Ve),oa=[];function ds(e,t){const r=this.buildAllMatchers(),n=((i,a)=>{const s=r[i]||r[J],l=s[2][a];if(l)return l;const c=a.match(s[0]);if(!c)return[[],oa];const f=c.indexOf("",1);return[s[1][f],c]});return this.match=n,n(e,t)}var mt="[^/]+",Ye=".*",Ze="(?:|/.*)",Be=Symbol(),us=new Set(".\\+*[^]$()");function xs(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===Ye||e===Ze?1:t===Ye||t===Ze?-1:e===mt?1:t===mt?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var $e,je,oe,Pe,hs=(Pe=class{constructor(){H(this,$e);H(this,je);H(this,oe,Object.create(null))}insert(t,r,n,i,a){if(t.length===0){if(E(this,$e)!==void 0)throw Be;if(a)return;F(this,$e,r);return}const[s,...l]=t,c=s==="*"?l.length===0?["","",Ye]:["","",mt]:s==="/*"?["","",Ze]:s.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let f;if(c){const o=c[1];let d=c[2]||mt;if(o&&c[2]&&(d===".*"||(d=d.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(d))))throw Be;if(f=E(this,oe)[d],!f){if(Object.keys(E(this,oe)).some(u=>u!==Ye&&u!==Ze))throw Be;if(a)return;f=E(this,oe)[d]=new Pe,o!==""&&F(f,je,i.varIndex++)}!a&&o!==""&&n.push([o,E(f,je)])}else if(f=E(this,oe)[s],!f){if(Object.keys(E(this,oe)).some(o=>o.length>1&&o!==Ye&&o!==Ze))throw Be;if(a)return;f=E(this,oe)[s]=new Pe}f.insert(l,r,n,i,a)}buildRegExpStr(){const r=Object.keys(E(this,oe)).sort(xs).map(n=>{const i=E(this,oe)[n];return(typeof E(i,je)=="number"?`(${n})@${E(i,je)}`:us.has(n)?`\\${n}`:n)+i.buildRegExpStr()});return typeof E(this,$e)=="number"&&r.unshift(`#${E(this,$e)}`),r.length===0?"":r.length===1?r[0]:"(?:"+r.join("|")+")"}},$e=new WeakMap,je=new WeakMap,oe=new WeakMap,Pe),bt,st,Vi,ps=(Vi=class{constructor(){H(this,bt,{varIndex:0});H(this,st,new hs)}insert(e,t,r){const n=[],i=[];for(let s=0;;){let l=!1;if(e=e.replace(/\{[^}]+\}/g,c=>{const f=`@\\${s}`;return i[s]=[f,c],s++,l=!0,f}),!l)break}const a=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let s=i.length-1;s>=0;s--){const[l]=i[s];for(let c=a.length-1;c>=0;c--)if(a[c].indexOf(l)!==-1){a[c]=a[c].replace(l,i[s][1]);break}}return E(this,st).insert(a,t,n,E(this,bt),r),n}buildRegExp(){let e=E(this,st).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const r=[],n=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(i,a,s)=>a!==void 0?(r[++t]=Number(a),"$()"):(s!==void 0&&(n[Number(s)]=++t),"")),[new RegExp(`^${e}`),r,n]}},bt=new WeakMap,st=new WeakMap,Vi),ms=[/^$/,[],Object.create(null)],ht=Object.create(null);function ca(e){return ht[e]??(ht[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,r)=>r?`\\${r}`:"(?:|/.*)")}$`))}function gs(){ht=Object.create(null)}function bs(e){var f;const t=new ps,r=[];if(e.length===0)return ms;const n=e.map(o=>[!/\*|\/:/.test(o[0]),...o]).sort(([o,d],[u,v])=>o?1:u?-1:d.length-v.length),i=Object.create(null);for(let o=0,d=-1,u=n.length;o<u;o++){const[v,g,b]=n[o];v?i[g]=[b.map(([x])=>[x,Object.create(null)]),oa]:d++;let A;try{A=t.insert(g,d,v)}catch(x){throw x===Be?new aa(g):x}v||(r[d]=b.map(([x,p])=>{const m=Object.create(null);for(p-=1;p>=0;p--){const[S,N]=A[p];m[S]=N}return[x,m]}))}const[a,s,l]=t.buildRegExp();for(let o=0,d=r.length;o<d;o++)for(let u=0,v=r[o].length;u<v;u++){const g=(f=r[o][u])==null?void 0:f[1];if(!g)continue;const b=Object.keys(g);for(let A=0,x=b.length;A<x;A++)g[b[A]]=l[g[b[A]]]}const c=[];for(const o in s)c[o]=r[s[o]];return[a,c,i]}function _e(e,t){if(e){for(const r of Object.keys(e).sort((n,i)=>i.length-n.length))if(ca(r).test(t))return[...e[r]]}}var we,Se,vt,fa,Ui,vs=(Ui=class{constructor(){H(this,vt);B(this,"name","RegExpRouter");H(this,we);H(this,Se);B(this,"match",ds);F(this,we,{[J]:Object.create(null)}),F(this,Se,{[J]:Object.create(null)})}add(e,t,r){var l;const n=E(this,we),i=E(this,Se);if(!n||!i)throw new Error(ia);n[e]||[n,i].forEach(c=>{c[e]=Object.create(null),Object.keys(c[J]).forEach(f=>{c[e][f]=[...c[J][f]]})}),t==="/*"&&(t="*");const a=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const c=ca(t);e===J?Object.keys(n).forEach(f=>{var o;(o=n[f])[t]||(o[t]=_e(n[f],t)||_e(n[J],t)||[])}):(l=n[e])[t]||(l[t]=_e(n[e],t)||_e(n[J],t)||[]),Object.keys(n).forEach(f=>{(e===J||e===f)&&Object.keys(n[f]).forEach(o=>{c.test(o)&&n[f][o].push([r,a])})}),Object.keys(i).forEach(f=>{(e===J||e===f)&&Object.keys(i[f]).forEach(o=>c.test(o)&&i[f][o].push([r,a]))});return}const s=Yi(t)||[t];for(let c=0,f=s.length;c<f;c++){const o=s[c];Object.keys(i).forEach(d=>{var u;(e===J||e===d)&&((u=i[d])[o]||(u[o]=[..._e(n[d],o)||_e(n[J],o)||[]]),i[d][o].push([r,a-f+c+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(E(this,Se)).concat(Object.keys(E(this,we))).forEach(t=>{e[t]||(e[t]=U(this,vt,fa).call(this,t))}),F(this,we,F(this,Se,void 0)),gs(),e}},we=new WeakMap,Se=new WeakMap,vt=new WeakSet,fa=function(e){const t=[];let r=e===J;return[E(this,we),E(this,Se)].forEach(n=>{const i=n[e]?Object.keys(n[e]).map(a=>[a,n[e][a]]):[];i.length!==0?(r||(r=!0),t.push(...i)):e!==J&&t.push(...Object.keys(n[J]).map(a=>[a,n[J][a]]))}),r?bs(t):null},Ui),Re,me,Xi,ys=(Xi=class{constructor(e){B(this,"name","SmartRouter");H(this,Re,[]);H(this,me,[]);F(this,Re,e.routers)}add(e,t,r){if(!E(this,me))throw new Error(ia);E(this,me).push([e,t,r])}match(e,t){if(!E(this,me))throw new Error("Fatal error");const r=E(this,Re),n=E(this,me),i=r.length;let a=0,s;for(;a<i;a++){const l=r[a];try{for(let c=0,f=n.length;c<f;c++)l.add(...n[c]);s=l.match(e,t)}catch(c){if(c instanceof aa)continue;throw c}this.match=l.match.bind(l),F(this,Re,[l]),F(this,me,void 0);break}if(a===i)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,s}get activeRouter(){if(E(this,me)||E(this,Re).length!==1)throw new Error("No active router has been determined yet.");return E(this,Re)[0]}},Re=new WeakMap,me=new WeakMap,Xi),Je=Object.create(null),Es=e=>{for(const t in e)return!0;return!1},Ae,Q,Le,Ue,Z,ge,Ce,Xe,ws=(Xe=class{constructor(t,r,n){H(this,ge);H(this,Ae);H(this,Q);H(this,Le);H(this,Ue,0);H(this,Z,Je);if(F(this,Q,n||Object.create(null)),F(this,Ae,[]),t&&r){const i=Object.create(null);i[t]={handler:r,possibleKeys:[],score:0},F(this,Ae,[i])}F(this,Le,[])}insert(t,r,n){F(this,Ue,++un(this,Ue)._);let i=this;const a=Wa(r),s=[];for(let l=0,c=a.length;l<c;l++){const f=a[l],o=a[l+1],d=Za(f,o),u=Array.isArray(d)?d[0]:f;if(u in E(i,Q)){i=E(i,Q)[u],d&&s.push(d[1]);continue}E(i,Q)[u]=new Xe,d&&(E(i,Le).push(d),s.push(d[1])),i=E(i,Q)[u]}return E(i,Ae).push({[t]:{handler:n,possibleKeys:s.filter((l,c,f)=>f.indexOf(l)===c),score:E(this,Ue)}}),i}search(t,r){var o;const n=[];F(this,Z,Je);let a=[this];const s=Wi(r),l=[],c=s.length;let f=null;for(let d=0;d<c;d++){const u=s[d],v=d===c-1,g=[];for(let A=0,x=a.length;A<x;A++){const p=a[A],m=E(p,Q)[u];m&&(F(m,Z,E(p,Z)),v?(E(m,Q)["*"]&&U(this,ge,Ce).call(this,n,E(m,Q)["*"],t,E(p,Z)),U(this,ge,Ce).call(this,n,m,t,E(p,Z))):g.push(m));for(let S=0,N=E(p,Le).length;S<N;S++){const I=E(p,Le)[S],$=E(p,Z)===Je?{}:{...E(p,Z)};if(I==="*"){const G=E(p,Q)["*"];G&&(U(this,ge,Ce).call(this,n,G,t,E(p,Z)),F(G,Z,$),g.push(G));continue}const[R,P,D]=I;if(!u&&!(D instanceof RegExp))continue;const _=E(p,Q)[R];if(D instanceof RegExp){if(f===null){f=new Array(c);let w=r[0]==="/"?1:0;for(let h=0;h<c;h++)f[h]=w,w+=s[h].length+1}const G=r.substring(f[d]),T=D.exec(G);if(T){if($[P]=T[0],U(this,ge,Ce).call(this,n,_,t,E(p,Z),$),Es(E(_,Q))){F(_,Z,$);const w=((o=T[0].match(/\//))==null?void 0:o.length)??0;(l[w]||(l[w]=[])).push(_)}continue}}(D===!0||D.test(u))&&($[P]=u,v?(U(this,ge,Ce).call(this,n,_,t,$,E(p,Z)),E(_,Q)["*"]&&U(this,ge,Ce).call(this,n,E(_,Q)["*"],t,$,E(p,Z))):(F(_,Z,$),g.push(_)))}}const b=l.shift();a=b?g.concat(b):g}return n.length>1&&n.sort((d,u)=>d.score-u.score),[n.map(({handler:d,params:u})=>[d,u])]}},Ae=new WeakMap,Q=new WeakMap,Le=new WeakMap,Ue=new WeakMap,Z=new WeakMap,ge=new WeakSet,Ce=function(t,r,n,i,a){for(let s=0,l=E(r,Ae).length;s<l;s++){const c=E(r,Ae)[s],f=c[n]||c[J],o={};if(f!==void 0&&(f.params=Object.create(null),t.push(f),i!==Je||a&&a!==Je))for(let d=0,u=f.possibleKeys.length;d<u;d++){const v=f.possibleKeys[d],g=o[f.score];f.params[v]=a!=null&&a[v]&&!g?a[v]:i[v]??(a==null?void 0:a[v]),o[f.score]=!0}}},Xe),Ne,Ki,Ss=(Ki=class{constructor(){B(this,"name","TrieRouter");H(this,Ne);F(this,Ne,new ws)}add(e,t,r){const n=Yi(t);if(n){for(let i=0,a=n.length;i<a;i++)E(this,Ne).insert(e,n[i],r);return}E(this,Ne).insert(e,t,r)}match(e,t){return E(this,Ne).search(e,t)}},Ne=new WeakMap,Ki),la=class extends ls{constructor(e={}){super(e),this.router=e.router??new ys({routers:[new vs,new Ss]})}},Rs=e=>{const r={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},n=(a=>typeof a=="string"?a==="*"?()=>a:s=>a===s?s:null:typeof a=="function"?a:s=>a.includes(s)?s:null)(r.origin),i=(a=>typeof a=="function"?a:Array.isArray(a)?()=>a:()=>[])(r.allowMethods);return async function(s,l){var o;function c(d,u){s.res.headers.set(d,u)}const f=await n(s.req.header("origin")||"",s);if(f&&c("Access-Control-Allow-Origin",f),r.credentials&&c("Access-Control-Allow-Credentials","true"),(o=r.exposeHeaders)!=null&&o.length&&c("Access-Control-Expose-Headers",r.exposeHeaders.join(",")),s.req.method==="OPTIONS"){r.origin!=="*"&&c("Vary","Origin"),r.maxAge!=null&&c("Access-Control-Max-Age",r.maxAge.toString());const d=await i(s.req.header("origin")||"",s);d.length&&c("Access-Control-Allow-Methods",d.join(","));let u=r.allowHeaders;if(!(u!=null&&u.length)){const v=s.req.header("Access-Control-Request-Headers");v&&(u=v.split(/\s*,\s*/))}return u!=null&&u.length&&(c("Access-Control-Allow-Headers",u.join(",")),s.res.headers.append("Vary","Access-Control-Request-Headers")),s.res.headers.delete("Content-Length"),s.res.headers.delete("Content-Type"),new Response(null,{headers:s.res.headers,status:204,statusText:"No Content"})}await l(),r.origin!=="*"&&s.header("Vary","Origin",{append:!0})}},As=/^\s*(?:text\/(?!event-stream(?:[;\s]|$))[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i,mn=(e,t=Ts)=>{const r=/\.([a-zA-Z0-9]+?)$/,n=e.match(r);if(!n)return;let i=t[n[1]];return i&&i.startsWith("text")&&(i+="; charset=utf-8"),i},Is={aac:"audio/aac",avi:"video/x-msvideo",avif:"image/avif",av1:"video/av1",bin:"application/octet-stream",bmp:"image/bmp",css:"text/css",csv:"text/csv",eot:"application/vnd.ms-fontobject",epub:"application/epub+zip",gif:"image/gif",gz:"application/gzip",htm:"text/html",html:"text/html",ico:"image/x-icon",ics:"text/calendar",jpeg:"image/jpeg",jpg:"image/jpeg",js:"text/javascript",json:"application/json",jsonld:"application/ld+json",map:"application/json",mid:"audio/x-midi",midi:"audio/x-midi",mjs:"text/javascript",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",oga:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",opus:"audio/opus",otf:"font/otf",pdf:"application/pdf",png:"image/png",rtf:"application/rtf",svg:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",ttf:"font/ttf",txt:"text/plain",wasm:"application/wasm",webm:"video/webm",weba:"audio/webm",webmanifest:"application/manifest+json",webp:"image/webp",woff:"font/woff",woff2:"font/woff2",xhtml:"application/xhtml+xml",xml:"application/xml",zip:"application/zip","3gp":"video/3gpp","3g2":"video/3gpp2",gltf:"model/gltf+json",glb:"model/gltf-binary"},Ts=Is,Cs=(...e)=>{let t=e.filter(i=>i!=="").join("/");t=t.replace(new RegExp("(?<=\\/)\\/+","g"),"");const r=t.split("/"),n=[];for(const i of r)i===".."&&n.length>0&&n.at(-1)!==".."?n.pop():i!=="."&&n.push(i);return n.join("/")||"."},da={br:".br",zstd:".zst",gzip:".gz"},Os=Object.keys(da),$s="index.html",js=e=>{const t=e.root??"./",r=e.path,n=e.join??Cs;return async(i,a)=>{var o,d,u,v;if(i.finalized)return a();let s;if(e.path)s=e.path;else try{if(s=decodeURIComponent(i.req.path),/(?:^|[\/\\])\.\.(?:$|[\/\\])/.test(s))throw new Error}catch{return await((o=e.onNotFound)==null?void 0:o.call(e,i.req.path,i)),a()}let l=n(t,!r&&e.rewriteRequestPath?e.rewriteRequestPath(s):s);e.isDir&&await e.isDir(l)&&(l=n(l,$s));const c=e.getContent;let f=await c(l,i);if(f instanceof Response)return i.newResponse(f.body,f);if(f){const g=e.mimes&&mn(l,e.mimes)||mn(l);if(i.header("Content-Type",g||"application/octet-stream"),e.precompressed&&(!g||As.test(g))){const b=new Set((d=i.req.header("Accept-Encoding"))==null?void 0:d.split(",").map(A=>A.trim()));for(const A of Os){if(!b.has(A))continue;const x=await c(l+da[A],i);if(x){f=x,i.header("Content-Encoding",A),i.header("Vary","Accept-Encoding",{append:!0});break}}}return await((u=e.onFound)==null?void 0:u.call(e,l,i)),i.body(f)}await((v=e.onNotFound)==null?void 0:v.call(e,l,i)),await a()}},Ls=async(e,t)=>{let r;t&&t.manifest?typeof t.manifest=="string"?r=JSON.parse(t.manifest):r=t.manifest:typeof __STATIC_CONTENT_MANIFEST=="string"?r=JSON.parse(__STATIC_CONTENT_MANIFEST):r=__STATIC_CONTENT_MANIFEST;let n;t&&t.namespace?n=t.namespace:n=__STATIC_CONTENT;const i=r[e];if(!i)return null;const a=await n.get(i,{type:"stream"});return a||null},Ns=e=>async function(r,n){return js({...e,getContent:async a=>Ls(a,{manifest:e.manifest,namespace:e.namespace?e.namespace:r.env?r.env.__STATIC_CONTENT:void 0})})(r,n)},Ps=e=>Ns(e),Jr=null;function _s(e){try{return crypto.getRandomValues(new Uint8Array(e))}catch{}try{return yt.randomBytes(e)}catch{}if(!Jr)throw Error("Neither WebCryptoAPI nor a crypto module is available. Use bcrypt.setRandomFallback to set an alternative");return Jr(e)}function Ds(e){Jr=e}function en(e,t){if(e=e||tn,typeof e!="number")throw Error("Illegal arguments: "+typeof e+", "+typeof t);e<4?e=4:e>31&&(e=31);var r=[];return r.push("$2b$"),e<10&&r.push("0"),r.push(e.toString()),r.push("$"),r.push(gt(_s(Qe),Qe)),r.join("")}function ua(e,t,r){if(typeof t=="function"&&(r=t,t=void 0),typeof e=="function"&&(r=e,e=void 0),typeof e>"u")e=tn;else if(typeof e!="number")throw Error("illegal arguments: "+typeof e);function n(i){ce(function(){try{i(null,en(e))}catch(a){i(a)}})}if(r){if(typeof r!="function")throw Error("Illegal callback: "+typeof r);n(r)}else return new Promise(function(i,a){n(function(s,l){if(s){a(s);return}i(l)})})}function xa(e,t){if(typeof t>"u"&&(t=tn),typeof t=="number"&&(t=en(t)),typeof e!="string"||typeof t!="string")throw Error("Illegal arguments: "+typeof e+", "+typeof t);return Yr(e,t)}function ha(e,t,r,n){function i(a){typeof e=="string"&&typeof t=="number"?ua(t,function(s,l){Yr(e,l,a,n)}):typeof e=="string"&&typeof t=="string"?Yr(e,t,a,n):ce(a.bind(this,Error("Illegal arguments: "+typeof e+", "+typeof t)))}if(r){if(typeof r!="function")throw Error("Illegal callback: "+typeof r);i(r)}else return new Promise(function(a,s){i(function(l,c){if(l){s(l);return}a(c)})})}function pa(e,t){for(var r=e.length^t.length,n=0;n<e.length;++n)r|=e.charCodeAt(n)^t.charCodeAt(n);return r===0}function qs(e,t){if(typeof e!="string"||typeof t!="string")throw Error("Illegal arguments: "+typeof e+", "+typeof t);return t.length!==60?!1:pa(xa(e,t.substring(0,t.length-31)),t)}function Fs(e,t,r,n){function i(a){if(typeof e!="string"||typeof t!="string"){ce(a.bind(this,Error("Illegal arguments: "+typeof e+", "+typeof t)));return}if(t.length!==60){ce(a.bind(this,null,!1));return}ha(e,t.substring(0,29),function(s,l){s?a(s):a(null,pa(l,t))},n)}if(r){if(typeof r!="function")throw Error("Illegal callback: "+typeof r);i(r)}else return new Promise(function(a,s){i(function(l,c){if(l){s(l);return}a(c)})})}function Bs(e){if(typeof e!="string")throw Error("Illegal arguments: "+typeof e);return parseInt(e.split("$")[2],10)}function ks(e){if(typeof e!="string")throw Error("Illegal arguments: "+typeof e);if(e.length!==60)throw Error("Illegal hash length: "+e.length+" != 60");return e.substring(0,29)}function Ms(e){if(typeof e!="string")throw Error("Illegal arguments: "+typeof e);return ma(e)>72}var ce=typeof setImmediate=="function"?setImmediate:typeof scheduler=="object"&&typeof scheduler.postTask=="function"?scheduler.postTask.bind(scheduler):setTimeout;function ma(e){for(var t=0,r=0,n=0;n<e.length;++n)r=e.charCodeAt(n),r<128?t+=1:r<2048?t+=2:(r&64512)===55296&&(e.charCodeAt(n+1)&64512)===56320?(++n,t+=4):t+=3;return t}function zs(e){for(var t=0,r,n,i=new Array(ma(e)),a=0,s=e.length;a<s;++a)r=e.charCodeAt(a),r<128?i[t++]=r:r<2048?(i[t++]=r>>6|192,i[t++]=r&63|128):(r&64512)===55296&&((n=e.charCodeAt(a+1))&64512)===56320?(r=65536+((r&1023)<<10)+(n&1023),++a,i[t++]=r>>18|240,i[t++]=r>>12&63|128,i[t++]=r>>6&63|128,i[t++]=r&63|128):(i[t++]=r>>12|224,i[t++]=r>>6&63|128,i[t++]=r&63|128);return i}var De="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),ve=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,54,55,56,57,58,59,60,61,62,63,-1,-1,-1,-1,-1,-1,-1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,-1,-1,-1,-1,-1,-1,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,-1,-1,-1,-1,-1];function gt(e,t){var r=0,n=[],i,a;if(t<=0||t>e.length)throw Error("Illegal len: "+t);for(;r<t;){if(i=e[r++]&255,n.push(De[i>>2&63]),i=(i&3)<<4,r>=t){n.push(De[i&63]);break}if(a=e[r++]&255,i|=a>>4&15,n.push(De[i&63]),i=(a&15)<<2,r>=t){n.push(De[i&63]);break}a=e[r++]&255,i|=a>>6&3,n.push(De[i&63]),n.push(De[a&63])}return n.join("")}function ga(e,t){var r=0,n=e.length,i=0,a=[],s,l,c,f,o,d;if(t<=0)throw Error("Illegal len: "+t);for(;r<n-1&&i<t&&(d=e.charCodeAt(r++),s=d<ve.length?ve[d]:-1,d=e.charCodeAt(r++),l=d<ve.length?ve[d]:-1,!(s==-1||l==-1||(o=s<<2>>>0,o|=(l&48)>>4,a.push(String.fromCharCode(o)),++i>=t||r>=n)||(d=e.charCodeAt(r++),c=d<ve.length?ve[d]:-1,c==-1)||(o=(l&15)<<4>>>0,o|=(c&60)>>2,a.push(String.fromCharCode(o)),++i>=t||r>=n)));)d=e.charCodeAt(r++),f=d<ve.length?ve[d]:-1,o=(c&3)<<6>>>0,o|=f,a.push(String.fromCharCode(o)),++i;var u=[];for(r=0;r<i;r++)u.push(a[r].charCodeAt(0));return u}var Qe=16,tn=10,Hs=16,Gs=100,gn=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],bn=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],ba=[1332899944,1700884034,1701343084,1684370003,1668446532,1869963892];function et(e,t,r,n){var i,a=e[t],s=e[t+1];return a^=r[0],i=n[a>>>24],i+=n[256|a>>16&255],i^=n[512|a>>8&255],i+=n[768|a&255],s^=i^r[1],i=n[s>>>24],i+=n[256|s>>16&255],i^=n[512|s>>8&255],i+=n[768|s&255],a^=i^r[2],i=n[a>>>24],i+=n[256|a>>16&255],i^=n[512|a>>8&255],i+=n[768|a&255],s^=i^r[3],i=n[s>>>24],i+=n[256|s>>16&255],i^=n[512|s>>8&255],i+=n[768|s&255],a^=i^r[4],i=n[a>>>24],i+=n[256|a>>16&255],i^=n[512|a>>8&255],i+=n[768|a&255],s^=i^r[5],i=n[s>>>24],i+=n[256|s>>16&255],i^=n[512|s>>8&255],i+=n[768|s&255],a^=i^r[6],i=n[a>>>24],i+=n[256|a>>16&255],i^=n[512|a>>8&255],i+=n[768|a&255],s^=i^r[7],i=n[s>>>24],i+=n[256|s>>16&255],i^=n[512|s>>8&255],i+=n[768|s&255],a^=i^r[8],i=n[a>>>24],i+=n[256|a>>16&255],i^=n[512|a>>8&255],i+=n[768|a&255],s^=i^r[9],i=n[s>>>24],i+=n[256|s>>16&255],i^=n[512|s>>8&255],i+=n[768|s&255],a^=i^r[10],i=n[a>>>24],i+=n[256|a>>16&255],i^=n[512|a>>8&255],i+=n[768|a&255],s^=i^r[11],i=n[s>>>24],i+=n[256|s>>16&255],i^=n[512|s>>8&255],i+=n[768|s&255],a^=i^r[12],i=n[a>>>24],i+=n[256|a>>16&255],i^=n[512|a>>8&255],i+=n[768|a&255],s^=i^r[13],i=n[s>>>24],i+=n[256|s>>16&255],i^=n[512|s>>8&255],i+=n[768|s&255],a^=i^r[14],i=n[a>>>24],i+=n[256|a>>16&255],i^=n[512|a>>8&255],i+=n[768|a&255],s^=i^r[15],i=n[s>>>24],i+=n[256|s>>16&255],i^=n[512|s>>8&255],i+=n[768|s&255],a^=i^r[16],e[t]=s^r[Hs+1],e[t+1]=a,e}function ke(e,t){for(var r=0,n=0;r<4;++r)n=n<<8|e[t]&255,t=(t+1)%e.length;return{key:n,offp:t}}function vn(e,t,r){for(var n=0,i=[0,0],a=t.length,s=r.length,l,c=0;c<a;c++)l=ke(e,n),n=l.offp,t[c]=t[c]^l.key;for(c=0;c<a;c+=2)i=et(i,0,t,r),t[c]=i[0],t[c+1]=i[1];for(c=0;c<s;c+=2)i=et(i,0,t,r),r[c]=i[0],r[c+1]=i[1]}function Vs(e,t,r,n){for(var i=0,a=[0,0],s=r.length,l=n.length,c,f=0;f<s;f++)c=ke(t,i),i=c.offp,r[f]=r[f]^c.key;for(i=0,f=0;f<s;f+=2)c=ke(e,i),i=c.offp,a[0]^=c.key,c=ke(e,i),i=c.offp,a[1]^=c.key,a=et(a,0,r,n),r[f]=a[0],r[f+1]=a[1];for(f=0;f<l;f+=2)c=ke(e,i),i=c.offp,a[0]^=c.key,c=ke(e,i),i=c.offp,a[1]^=c.key,a=et(a,0,r,n),n[f]=a[0],n[f+1]=a[1]}function yn(e,t,r,n,i){var a=ba.slice(),s=a.length,l;if(r<4||r>31)if(l=Error("Illegal number of rounds (4-31): "+r),n){ce(n.bind(this,l));return}else throw l;if(t.length!==Qe)if(l=Error("Illegal salt length: "+t.length+" != "+Qe),n){ce(n.bind(this,l));return}else throw l;r=1<<r>>>0;var c,f,o=0,d;typeof Int32Array=="function"?(c=new Int32Array(gn),f=new Int32Array(bn)):(c=gn.slice(),f=bn.slice()),Vs(t,e,c,f);function u(){if(i&&i(o/r),o<r)for(var g=Date.now();o<r&&(o=o+1,vn(e,c,f),vn(t,c,f),!(Date.now()-g>Gs)););else{for(o=0;o<64;o++)for(d=0;d<s>>1;d++)et(a,d<<1,c,f);var b=[];for(o=0;o<s;o++)b.push((a[o]>>24&255)>>>0),b.push((a[o]>>16&255)>>>0),b.push((a[o]>>8&255)>>>0),b.push((a[o]&255)>>>0);if(n){n(null,b);return}else return b}n&&ce(u)}if(typeof n<"u")u();else for(var v;;)if(typeof(v=u())<"u")return v||[]}function Yr(e,t,r,n){var i;if(typeof e!="string"||typeof t!="string")if(i=Error("Invalid string / salt: Not a string"),r){ce(r.bind(this,i));return}else throw i;var a,s;if(t.charAt(0)!=="$"||t.charAt(1)!=="2")if(i=Error("Invalid salt version: "+t.substring(0,2)),r){ce(r.bind(this,i));return}else throw i;if(t.charAt(2)==="$")a="\0",s=3;else{if(a=t.charAt(2),a!=="a"&&a!=="b"&&a!=="y"||t.charAt(3)!=="$")if(i=Error("Invalid salt revision: "+t.substring(2,4)),r){ce(r.bind(this,i));return}else throw i;s=4}if(t.charAt(s+2)>"$")if(i=Error("Missing salt rounds"),r){ce(r.bind(this,i));return}else throw i;var l=parseInt(t.substring(s,s+1),10)*10,c=parseInt(t.substring(s+1,s+2),10),f=l+c,o=t.substring(s+3,s+25);e+=a>="a"?"\0":"";var d=zs(e),u=ga(o,Qe);function v(g){var b=[];return b.push("$2"),a>="a"&&b.push(a),b.push("$"),f<10&&b.push("0"),b.push(f.toString()),b.push("$"),b.push(gt(u,u.length)),b.push(gt(g,ba.length*4-1)),b.join("")}if(typeof r>"u")return v(yn(d,u,f));yn(d,u,f,function(g,b){g?r(g,null):r(null,v(b))},n)}function Us(e,t){return gt(e,t)}function Xs(e,t){return ga(e,t)}const Ks={setRandomFallback:Ds,genSaltSync:en,genSalt:ua,hashSync:xa,hash:ha,compareSync:qs,compare:Fs,getRounds:Bs,getSalt:ks,truncates:Ms,encodeBase64:Us,decodeBase64:Xs};function Ws(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xe={},lt={exports:{}};/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */var En;function ot(){return En||(En=1,(function(e,t){var r=pt,n=r.Buffer;function i(s,l){for(var c in s)l[c]=s[c]}n.from&&n.alloc&&n.allocUnsafe&&n.allocUnsafeSlow?e.exports=r:(i(r,t),t.Buffer=a);function a(s,l,c){return n(s,l,c)}a.prototype=Object.create(n.prototype),i(n,a),a.from=function(s,l,c){if(typeof s=="number")throw new TypeError("Argument must not be a number");return n(s,l,c)},a.alloc=function(s,l,c){if(typeof s!="number")throw new TypeError("Argument must be a number");var f=n(s);return l!==void 0?typeof c=="string"?f.fill(l,c):f.fill(l):f.fill(0),f},a.allocUnsafe=function(s){if(typeof s!="number")throw new TypeError("Argument must be a number");return n(s)},a.allocUnsafeSlow=function(s){if(typeof s!="number")throw new TypeError("Argument must be a number");return r.SlowBuffer(s)}})(lt,lt.exports)),lt.exports}var jt,wn;function va(){if(wn)return jt;wn=1;var e=ot().Buffer,t=Zr,r=Et;function n(i){if(this.buffer=null,this.writable=!0,this.readable=!0,!i)return this.buffer=e.alloc(0),this;if(typeof i.pipe=="function")return this.buffer=e.alloc(0),i.pipe(this),this;if(i.length||typeof i=="object")return this.buffer=i,this.writable=!1,process.nextTick((function(){this.emit("end",i),this.readable=!1,this.emit("close")}).bind(this)),this;throw new TypeError("Unexpected data type ("+typeof i+")")}return r.inherits(n,t),n.prototype.write=function(a){this.buffer=e.concat([this.buffer,e.from(a)]),this.emit("data",a)},n.prototype.end=function(a){a&&this.write(a),this.emit("end",a),this.emit("close"),this.writable=!1,this.readable=!1},jt=n,jt}var Lt,Sn;function Js(){if(Sn)return Lt;Sn=1;function e(n){var i=(n/8|0)+(n%8===0?0:1);return i}var t={ES256:e(256),ES384:e(384),ES512:e(521)};function r(n){var i=t[n];if(i)return i;throw new Error('Unknown algorithm "'+n+'"')}return Lt=r,Lt}var Nt,Rn;function Ys(){if(Rn)return Nt;Rn=1;var e=ot().Buffer,t=Js(),r=128,n=0,i=32,a=16,s=2,l=a|i|n<<6,c=s|n<<6;function f(g){return g.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function o(g){if(e.isBuffer(g))return g;if(typeof g=="string")return e.from(g,"base64");throw new TypeError("ECDSA signature must be a Base64 string or a Buffer")}function d(g,b){g=o(g);var A=t(b),x=A+1,p=g.length,m=0;if(g[m++]!==l)throw new Error('Could not find expected "seq"');var S=g[m++];if(S===(r|1)&&(S=g[m++]),p-m<S)throw new Error('"seq" specified length of "'+S+'", only "'+(p-m)+'" remaining');if(g[m++]!==c)throw new Error('Could not find expected "int" for "r"');var N=g[m++];if(p-m-2<N)throw new Error('"r" specified length of "'+N+'", only "'+(p-m-2)+'" available');if(x<N)throw new Error('"r" specified length of "'+N+'", max of "'+x+'" is acceptable');var I=m;if(m+=N,g[m++]!==c)throw new Error('Could not find expected "int" for "s"');var $=g[m++];if(p-m!==$)throw new Error('"s" specified length of "'+$+'", expected "'+(p-m)+'"');if(x<$)throw new Error('"s" specified length of "'+$+'", max of "'+x+'" is acceptable');var R=m;if(m+=$,m!==p)throw new Error('Expected to consume entire buffer, but "'+(p-m)+'" bytes remain');var P=A-N,D=A-$,_=e.allocUnsafe(P+N+D+$);for(m=0;m<P;++m)_[m]=0;g.copy(_,m,I+Math.max(-P,0),I+N),m=A;for(var G=m;m<G+D;++m)_[m]=0;return g.copy(_,m,R+Math.max(-D,0),R+$),_=_.toString("base64"),_=f(_),_}function u(g,b,A){for(var x=0;b+x<A&&g[b+x]===0;)++x;var p=g[b+x]>=r;return p&&--x,x}function v(g,b){g=o(g);var A=t(b),x=g.length;if(x!==A*2)throw new TypeError('"'+b+'" signatures must be "'+A*2+'" bytes, saw "'+x+'"');var p=u(g,0,A),m=u(g,A,g.length),S=A-p,N=A-m,I=2+S+1+1+N,$=I<r,R=e.allocUnsafe(($?2:3)+I),P=0;return R[P++]=l,$?R[P++]=I:(R[P++]=r|1,R[P++]=I&255),R[P++]=c,R[P++]=S,p<0?(R[P++]=0,P+=g.copy(R,P,0,A)):P+=g.copy(R,P,p,A),R[P++]=c,R[P++]=N,m<0?(R[P++]=0,g.copy(R,P,A)):g.copy(R,P,A+m),R}return Nt={derToJose:d,joseToDer:v},Nt}var Pt,An;function Zs(){if(An)return Pt;An=1;var e=pt.Buffer,t=pt.SlowBuffer;Pt=r;function r(a,s){if(!e.isBuffer(a)||!e.isBuffer(s)||a.length!==s.length)return!1;for(var l=0,c=0;c<a.length;c++)l|=a[c]^s[c];return l===0}r.install=function(){e.prototype.equal=t.prototype.equal=function(s){return r(this,s)}};var n=e.prototype.equal,i=t.prototype.equal;return r.restore=function(){e.prototype.equal=n,t.prototype.equal=i},Pt}var _t,In;function ya(){if(In)return _t;In=1;var e=ot().Buffer,t=yt,r=Ys(),n=Et,i=`"%s" is not a valid algorithm.
  Supported algorithms are:
  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".`,a="secret must be a string or buffer",s="key must be a string or a buffer",l="key must be a string, a buffer or an object",c=typeof t.createPublicKey=="function";c&&(s+=" or a KeyObject",a+="or a KeyObject");function f(T){if(!e.isBuffer(T)&&typeof T!="string"&&(!c||typeof T!="object"||typeof T.type!="string"||typeof T.asymmetricKeyType!="string"||typeof T.export!="function"))throw g(s)}function o(T){if(!e.isBuffer(T)&&typeof T!="string"&&typeof T!="object")throw g(l)}function d(T){if(!e.isBuffer(T)){if(typeof T=="string")return T;if(!c||typeof T!="object"||T.type!=="secret"||typeof T.export!="function")throw g(a)}}function u(T){return T.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function v(T){T=T.toString();var w=4-T.length%4;if(w!==4)for(var h=0;h<w;++h)T+="=";return T.replace(/\-/g,"+").replace(/_/g,"/")}function g(T){var w=[].slice.call(arguments,1),h=n.format.bind(n,T).apply(null,w);return new TypeError(h)}function b(T){return e.isBuffer(T)||typeof T=="string"}function A(T){return b(T)||(T=JSON.stringify(T)),T}function x(T){return function(h,C){d(C),h=A(h);var O=t.createHmac("sha"+T,C),j=(O.update(h),O.digest("base64"));return u(j)}}var p,m="timingSafeEqual"in t?function(w,h){return w.byteLength!==h.byteLength?!1:t.timingSafeEqual(w,h)}:function(w,h){return p||(p=Zs()),p(w,h)};function S(T){return function(h,C,O){var j=x(T)(h,O);return m(e.from(C),e.from(j))}}function N(T){return function(h,C){o(C),h=A(h);var O=t.createSign("RSA-SHA"+T),j=(O.update(h),O.sign(C,"base64"));return u(j)}}function I(T){return function(h,C,O){f(O),h=A(h),C=v(C);var j=t.createVerify("RSA-SHA"+T);return j.update(h),j.verify(O,C,"base64")}}function $(T){return function(h,C){o(C),h=A(h);var O=t.createSign("RSA-SHA"+T),j=(O.update(h),O.sign({key:C,padding:t.constants.RSA_PKCS1_PSS_PADDING,saltLength:t.constants.RSA_PSS_SALTLEN_DIGEST},"base64"));return u(j)}}function R(T){return function(h,C,O){f(O),h=A(h),C=v(C);var j=t.createVerify("RSA-SHA"+T);return j.update(h),j.verify({key:O,padding:t.constants.RSA_PKCS1_PSS_PADDING,saltLength:t.constants.RSA_PSS_SALTLEN_DIGEST},C,"base64")}}function P(T){var w=N(T);return function(){var C=w.apply(null,arguments);return C=r.derToJose(C,"ES"+T),C}}function D(T){var w=I(T);return function(C,O,j){O=r.joseToDer(O,"ES"+T).toString("base64");var L=w(C,O,j);return L}}function _(){return function(){return""}}function G(){return function(w,h){return h===""}}return _t=function(w){var h={hs:x,rs:N,ps:$,es:P,none:_},C={hs:S,rs:I,ps:R,es:D,none:G},O=w.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/);if(!O)throw g(i,w);var j=(O[1]||O[3]).toLowerCase(),L=O[2];return{sign:h[j](L),verify:C[j](L)}},_t}var Dt,Tn;function Ea(){if(Tn)return Dt;Tn=1;var e=pt.Buffer;return Dt=function(r){return typeof r=="string"?r:typeof r=="number"||e.isBuffer(r)?r.toString():JSON.stringify(r)},Dt}var qt,Cn;function Qs(){if(Cn)return qt;Cn=1;var e=ot().Buffer,t=va(),r=ya(),n=Zr,i=Ea(),a=Et;function s(o,d){return e.from(o,d).toString("base64").replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function l(o,d,u){u=u||"utf8";var v=s(i(o),"binary"),g=s(i(d),u);return a.format("%s.%s",v,g)}function c(o){var d=o.header,u=o.payload,v=o.secret||o.privateKey,g=o.encoding,b=r(d.alg),A=l(d,u,g),x=b.sign(A,v);return a.format("%s.%s",A,x)}function f(o){var d=o.secret;if(d=d??o.privateKey,d=d??o.key,/^hs/i.test(o.header.alg)===!0&&d==null)throw new TypeError("secret must be a string or buffer or a KeyObject");var u=new t(d);this.readable=!0,this.header=o.header,this.encoding=o.encoding,this.secret=this.privateKey=this.key=u,this.payload=new t(o.payload),this.secret.once("close",(function(){!this.payload.writable&&this.readable&&this.sign()}).bind(this)),this.payload.once("close",(function(){!this.secret.writable&&this.readable&&this.sign()}).bind(this))}return a.inherits(f,n),f.prototype.sign=function(){try{var d=c({header:this.header,payload:this.payload.buffer,secret:this.secret.buffer,encoding:this.encoding});return this.emit("done",d),this.emit("data",d),this.emit("end"),this.readable=!1,d}catch(u){this.readable=!1,this.emit("error",u),this.emit("close")}},f.sign=c,qt=f,qt}var Ft,On;function eo(){if(On)return Ft;On=1;var e=ot().Buffer,t=va(),r=ya(),n=Zr,i=Ea(),a=Et,s=/^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;function l(x){return Object.prototype.toString.call(x)==="[object Object]"}function c(x){if(l(x))return x;try{return JSON.parse(x)}catch{return}}function f(x){var p=x.split(".",1)[0];return c(e.from(p,"base64").toString("binary"))}function o(x){return x.split(".",2).join(".")}function d(x){return x.split(".")[2]}function u(x,p){p=p||"utf8";var m=x.split(".")[1];return e.from(m,"base64").toString(p)}function v(x){return s.test(x)&&!!f(x)}function g(x,p,m){if(!p){var S=new Error("Missing algorithm parameter for jws.verify");throw S.code="MISSING_ALGORITHM",S}x=i(x);var N=d(x),I=o(x),$=r(p);return $.verify(I,N,m)}function b(x,p){if(p=p||{},x=i(x),!v(x))return null;var m=f(x);if(!m)return null;var S=u(x);return(m.typ==="JWT"||p.json)&&(S=JSON.parse(S,p.encoding)),{header:m,payload:S,signature:d(x)}}function A(x){x=x||{};var p=x.secret;if(p=p??x.publicKey,p=p??x.key,/^hs/i.test(x.algorithm)===!0&&p==null)throw new TypeError("secret must be a string or buffer or a KeyObject");var m=new t(p);this.readable=!0,this.algorithm=x.algorithm,this.encoding=x.encoding,this.secret=this.publicKey=this.key=m,this.signature=new t(x.signature),this.secret.once("close",(function(){!this.signature.writable&&this.readable&&this.verify()}).bind(this)),this.signature.once("close",(function(){!this.secret.writable&&this.readable&&this.verify()}).bind(this))}return a.inherits(A,n),A.prototype.verify=function(){try{var p=g(this.signature.buffer,this.algorithm,this.key.buffer),m=b(this.signature.buffer,this.encoding);return this.emit("done",p,m),this.emit("data",p),this.emit("end"),this.readable=!1,p}catch(S){this.readable=!1,this.emit("error",S),this.emit("close")}},A.decode=b,A.isValid=v,A.verify=g,Ft=A,Ft}var $n;function rn(){if($n)return xe;$n=1;var e=Qs(),t=eo(),r=["HS256","HS384","HS512","RS256","RS384","RS512","PS256","PS384","PS512","ES256","ES384","ES512"];return xe.ALGORITHMS=r,xe.sign=e.sign,xe.verify=t.verify,xe.decode=t.decode,xe.isValid=t.isValid,xe.createSign=function(i){return new e(i)},xe.createVerify=function(i){return new t(i)},xe}var Bt,jn;function wa(){if(jn)return Bt;jn=1;var e=rn();return Bt=function(t,r){r=r||{};var n=e.decode(t,r);if(!n)return null;var i=n.payload;if(typeof i=="string")try{var a=JSON.parse(i);a!==null&&typeof a=="object"&&(i=a)}catch{}return r.complete===!0?{header:n.header,payload:i,signature:n.signature}:i},Bt}var kt,Ln;function wt(){if(Ln)return kt;Ln=1;var e=function(t,r){Error.call(this,t),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="JsonWebTokenError",this.message=t,r&&(this.inner=r)};return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,kt=e,kt}var Mt,Nn;function Sa(){if(Nn)return Mt;Nn=1;var e=wt(),t=function(r,n){e.call(this,r),this.name="NotBeforeError",this.date=n};return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Mt=t,Mt}var zt,Pn;function Ra(){if(Pn)return zt;Pn=1;var e=wt(),t=function(r,n){e.call(this,r),this.name="TokenExpiredError",this.expiredAt=n};return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,zt=t,zt}var Ht,_n;function to(){if(_n)return Ht;_n=1;var e=1e3,t=e*60,r=t*60,n=r*24,i=n*7,a=n*365.25;Ht=function(o,d){d=d||{};var u=typeof o;if(u==="string"&&o.length>0)return s(o);if(u==="number"&&isFinite(o))return d.long?c(o):l(o);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(o))};function s(o){if(o=String(o),!(o.length>100)){var d=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(o);if(d){var u=parseFloat(d[1]),v=(d[2]||"ms").toLowerCase();switch(v){case"years":case"year":case"yrs":case"yr":case"y":return u*a;case"weeks":case"week":case"w":return u*i;case"days":case"day":case"d":return u*n;case"hours":case"hour":case"hrs":case"hr":case"h":return u*r;case"minutes":case"minute":case"mins":case"min":case"m":return u*t;case"seconds":case"second":case"secs":case"sec":case"s":return u*e;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return u;default:return}}}}function l(o){var d=Math.abs(o);return d>=n?Math.round(o/n)+"d":d>=r?Math.round(o/r)+"h":d>=t?Math.round(o/t)+"m":d>=e?Math.round(o/e)+"s":o+"ms"}function c(o){var d=Math.abs(o);return d>=n?f(o,d,n,"day"):d>=r?f(o,d,r,"hour"):d>=t?f(o,d,t,"minute"):d>=e?f(o,d,e,"second"):o+" ms"}function f(o,d,u,v){var g=d>=u*1.5;return Math.round(o/u)+" "+v+(g?"s":"")}return Ht}var Gt,Dn;function Aa(){if(Dn)return Gt;Dn=1;var e=to();return Gt=function(t,r){var n=r||Math.floor(Date.now()/1e3);if(typeof t=="string"){var i=e(t);return typeof i>"u"?void 0:Math.floor(n+i/1e3)}else return typeof t=="number"?n+t:void 0},Gt}var dt={exports:{}},Vt,qn;function St(){if(qn)return Vt;qn=1;const e="2.0.0",t=256,r=Number.MAX_SAFE_INTEGER||9007199254740991,n=16,i=t-6;return Vt={MAX_LENGTH:t,MAX_SAFE_COMPONENT_LENGTH:n,MAX_SAFE_BUILD_LENGTH:i,MAX_SAFE_INTEGER:r,RELEASE_TYPES:["major","premajor","minor","preminor","patch","prepatch","prerelease"],SEMVER_SPEC_VERSION:e,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2},Vt}var Ut,Fn;function Rt(){if(Fn)return Ut;Fn=1;var e={};return Ut=typeof process=="object"&&e&&e.NODE_DEBUG&&/\bsemver\b/i.test(e.NODE_DEBUG)?(...r)=>console.error("SEMVER",...r):()=>{},Ut}var Bn;function ct(){return Bn||(Bn=1,(function(e,t){const{MAX_SAFE_COMPONENT_LENGTH:r,MAX_SAFE_BUILD_LENGTH:n,MAX_LENGTH:i}=St(),a=Rt();t=e.exports={};const s=t.re=[],l=t.safeRe=[],c=t.src=[],f=t.safeSrc=[],o=t.t={};let d=0;const u="[a-zA-Z0-9-]",v=[["\\s",1],["\\d",i],[u,n]],g=A=>{for(const[x,p]of v)A=A.split(`${x}*`).join(`${x}{0,${p}}`).split(`${x}+`).join(`${x}{1,${p}}`);return A},b=(A,x,p)=>{const m=g(x),S=d++;a(A,S,x),o[A]=S,c[S]=x,f[S]=m,s[S]=new RegExp(x,p?"g":void 0),l[S]=new RegExp(m,p?"g":void 0)};b("NUMERICIDENTIFIER","0|[1-9]\\d*"),b("NUMERICIDENTIFIERLOOSE","\\d+"),b("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${u}*`),b("MAINVERSION",`(${c[o.NUMERICIDENTIFIER]})\\.(${c[o.NUMERICIDENTIFIER]})\\.(${c[o.NUMERICIDENTIFIER]})`),b("MAINVERSIONLOOSE",`(${c[o.NUMERICIDENTIFIERLOOSE]})\\.(${c[o.NUMERICIDENTIFIERLOOSE]})\\.(${c[o.NUMERICIDENTIFIERLOOSE]})`),b("PRERELEASEIDENTIFIER",`(?:${c[o.NONNUMERICIDENTIFIER]}|${c[o.NUMERICIDENTIFIER]})`),b("PRERELEASEIDENTIFIERLOOSE",`(?:${c[o.NONNUMERICIDENTIFIER]}|${c[o.NUMERICIDENTIFIERLOOSE]})`),b("PRERELEASE",`(?:-(${c[o.PRERELEASEIDENTIFIER]}(?:\\.${c[o.PRERELEASEIDENTIFIER]})*))`),b("PRERELEASELOOSE",`(?:-?(${c[o.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${c[o.PRERELEASEIDENTIFIERLOOSE]})*))`),b("BUILDIDENTIFIER",`${u}+`),b("BUILD",`(?:\\+(${c[o.BUILDIDENTIFIER]}(?:\\.${c[o.BUILDIDENTIFIER]})*))`),b("FULLPLAIN",`v?${c[o.MAINVERSION]}${c[o.PRERELEASE]}?${c[o.BUILD]}?`),b("FULL",`^${c[o.FULLPLAIN]}$`),b("LOOSEPLAIN",`[v=\\s]*${c[o.MAINVERSIONLOOSE]}${c[o.PRERELEASELOOSE]}?${c[o.BUILD]}?`),b("LOOSE",`^${c[o.LOOSEPLAIN]}$`),b("GTLT","((?:<|>)?=?)"),b("XRANGEIDENTIFIERLOOSE",`${c[o.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),b("XRANGEIDENTIFIER",`${c[o.NUMERICIDENTIFIER]}|x|X|\\*`),b("XRANGEPLAIN",`[v=\\s]*(${c[o.XRANGEIDENTIFIER]})(?:\\.(${c[o.XRANGEIDENTIFIER]})(?:\\.(${c[o.XRANGEIDENTIFIER]})(?:${c[o.PRERELEASE]})?${c[o.BUILD]}?)?)?`),b("XRANGEPLAINLOOSE",`[v=\\s]*(${c[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[o.XRANGEIDENTIFIERLOOSE]})(?:${c[o.PRERELEASELOOSE]})?${c[o.BUILD]}?)?)?`),b("XRANGE",`^${c[o.GTLT]}\\s*${c[o.XRANGEPLAIN]}$`),b("XRANGELOOSE",`^${c[o.GTLT]}\\s*${c[o.XRANGEPLAINLOOSE]}$`),b("COERCEPLAIN",`(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`),b("COERCE",`${c[o.COERCEPLAIN]}(?:$|[^\\d])`),b("COERCEFULL",c[o.COERCEPLAIN]+`(?:${c[o.PRERELEASE]})?(?:${c[o.BUILD]})?(?:$|[^\\d])`),b("COERCERTL",c[o.COERCE],!0),b("COERCERTLFULL",c[o.COERCEFULL],!0),b("LONETILDE","(?:~>?)"),b("TILDETRIM",`(\\s*)${c[o.LONETILDE]}\\s+`,!0),t.tildeTrimReplace="$1~",b("TILDE",`^${c[o.LONETILDE]}${c[o.XRANGEPLAIN]}$`),b("TILDELOOSE",`^${c[o.LONETILDE]}${c[o.XRANGEPLAINLOOSE]}$`),b("LONECARET","(?:\\^)"),b("CARETTRIM",`(\\s*)${c[o.LONECARET]}\\s+`,!0),t.caretTrimReplace="$1^",b("CARET",`^${c[o.LONECARET]}${c[o.XRANGEPLAIN]}$`),b("CARETLOOSE",`^${c[o.LONECARET]}${c[o.XRANGEPLAINLOOSE]}$`),b("COMPARATORLOOSE",`^${c[o.GTLT]}\\s*(${c[o.LOOSEPLAIN]})$|^$`),b("COMPARATOR",`^${c[o.GTLT]}\\s*(${c[o.FULLPLAIN]})$|^$`),b("COMPARATORTRIM",`(\\s*)${c[o.GTLT]}\\s*(${c[o.LOOSEPLAIN]}|${c[o.XRANGEPLAIN]})`,!0),t.comparatorTrimReplace="$1$2$3",b("HYPHENRANGE",`^\\s*(${c[o.XRANGEPLAIN]})\\s+-\\s+(${c[o.XRANGEPLAIN]})\\s*$`),b("HYPHENRANGELOOSE",`^\\s*(${c[o.XRANGEPLAINLOOSE]})\\s+-\\s+(${c[o.XRANGEPLAINLOOSE]})\\s*$`),b("STAR","(<|>)?=?\\s*\\*"),b("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),b("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")})(dt,dt.exports)),dt.exports}var Xt,kn;function nn(){if(kn)return Xt;kn=1;const e=Object.freeze({loose:!0}),t=Object.freeze({});return Xt=n=>n?typeof n!="object"?e:n:t,Xt}var Kt,Mn;function Ia(){if(Mn)return Kt;Mn=1;const e=/^[0-9]+$/,t=(n,i)=>{if(typeof n=="number"&&typeof i=="number")return n===i?0:n<i?-1:1;const a=e.test(n),s=e.test(i);return a&&s&&(n=+n,i=+i),n===i?0:a&&!s?-1:s&&!a?1:n<i?-1:1};return Kt={compareIdentifiers:t,rcompareIdentifiers:(n,i)=>t(i,n)},Kt}var Wt,zn;function re(){if(zn)return Wt;zn=1;const e=Rt(),{MAX_LENGTH:t,MAX_SAFE_INTEGER:r}=St(),{safeRe:n,t:i}=ct(),a=nn(),{compareIdentifiers:s}=Ia();class l{constructor(f,o){if(o=a(o),f instanceof l){if(f.loose===!!o.loose&&f.includePrerelease===!!o.includePrerelease)return f;f=f.version}else if(typeof f!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof f}".`);if(f.length>t)throw new TypeError(`version is longer than ${t} characters`);e("SemVer",f,o),this.options=o,this.loose=!!o.loose,this.includePrerelease=!!o.includePrerelease;const d=f.trim().match(o.loose?n[i.LOOSE]:n[i.FULL]);if(!d)throw new TypeError(`Invalid Version: ${f}`);if(this.raw=f,this.major=+d[1],this.minor=+d[2],this.patch=+d[3],this.major>r||this.major<0)throw new TypeError("Invalid major version");if(this.minor>r||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>r||this.patch<0)throw new TypeError("Invalid patch version");d[4]?this.prerelease=d[4].split(".").map(u=>{if(/^[0-9]+$/.test(u)){const v=+u;if(v>=0&&v<r)return v}return u}):this.prerelease=[],this.build=d[5]?d[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(f){if(e("SemVer.compare",this.version,this.options,f),!(f instanceof l)){if(typeof f=="string"&&f===this.version)return 0;f=new l(f,this.options)}return f.version===this.version?0:this.compareMain(f)||this.comparePre(f)}compareMain(f){return f instanceof l||(f=new l(f,this.options)),this.major<f.major?-1:this.major>f.major?1:this.minor<f.minor?-1:this.minor>f.minor?1:this.patch<f.patch?-1:this.patch>f.patch?1:0}comparePre(f){if(f instanceof l||(f=new l(f,this.options)),this.prerelease.length&&!f.prerelease.length)return-1;if(!this.prerelease.length&&f.prerelease.length)return 1;if(!this.prerelease.length&&!f.prerelease.length)return 0;let o=0;do{const d=this.prerelease[o],u=f.prerelease[o];if(e("prerelease compare",o,d,u),d===void 0&&u===void 0)return 0;if(u===void 0)return 1;if(d===void 0)return-1;if(d===u)continue;return s(d,u)}while(++o)}compareBuild(f){f instanceof l||(f=new l(f,this.options));let o=0;do{const d=this.build[o],u=f.build[o];if(e("build compare",o,d,u),d===void 0&&u===void 0)return 0;if(u===void 0)return 1;if(d===void 0)return-1;if(d===u)continue;return s(d,u)}while(++o)}inc(f,o,d){if(f.startsWith("pre")){if(!o&&d===!1)throw new Error("invalid increment argument: identifier is empty");if(o){const u=`-${o}`.match(this.options.loose?n[i.PRERELEASELOOSE]:n[i.PRERELEASE]);if(!u||u[1]!==o)throw new Error(`invalid identifier: ${o}`)}}switch(f){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",o,d);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",o,d);break;case"prepatch":this.prerelease.length=0,this.inc("patch",o,d),this.inc("pre",o,d);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",o,d),this.inc("pre",o,d);break;case"release":if(this.prerelease.length===0)throw new Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{const u=Number(d)?1:0;if(this.prerelease.length===0)this.prerelease=[u];else{let v=this.prerelease.length;for(;--v>=0;)typeof this.prerelease[v]=="number"&&(this.prerelease[v]++,v=-2);if(v===-1){if(o===this.prerelease.join(".")&&d===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(u)}}if(o){let v=[o,u];d===!1&&(v=[o]),s(this.prerelease[0],o)===0?isNaN(this.prerelease[1])&&(this.prerelease=v):this.prerelease=v}break}default:throw new Error(`invalid increment argument: ${f}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}}return Wt=l,Wt}var Jt,Hn;function Ke(){if(Hn)return Jt;Hn=1;const e=re();return Jt=(r,n,i=!1)=>{if(r instanceof e)return r;try{return new e(r,n)}catch(a){if(!i)return null;throw a}},Jt}var Yt,Gn;function ro(){if(Gn)return Yt;Gn=1;const e=Ke();return Yt=(r,n)=>{const i=e(r,n);return i?i.version:null},Yt}var Zt,Vn;function no(){if(Vn)return Zt;Vn=1;const e=Ke();return Zt=(r,n)=>{const i=e(r.trim().replace(/^[=v]+/,""),n);return i?i.version:null},Zt}var Qt,Un;function io(){if(Un)return Qt;Un=1;const e=re();return Qt=(r,n,i,a,s)=>{typeof i=="string"&&(s=a,a=i,i=void 0);try{return new e(r instanceof e?r.version:r,i).inc(n,a,s).version}catch{return null}},Qt}var er,Xn;function ao(){if(Xn)return er;Xn=1;const e=Ke();return er=(r,n)=>{const i=e(r,null,!0),a=e(n,null,!0),s=i.compare(a);if(s===0)return null;const l=s>0,c=l?i:a,f=l?a:i,o=!!c.prerelease.length;if(!!f.prerelease.length&&!o){if(!f.patch&&!f.minor)return"major";if(f.compareMain(c)===0)return f.minor&&!f.patch?"minor":"patch"}const u=o?"pre":"";return i.major!==a.major?u+"major":i.minor!==a.minor?u+"minor":i.patch!==a.patch?u+"patch":"prerelease"},er}var tr,Kn;function so(){if(Kn)return tr;Kn=1;const e=re();return tr=(r,n)=>new e(r,n).major,tr}var rr,Wn;function oo(){if(Wn)return rr;Wn=1;const e=re();return rr=(r,n)=>new e(r,n).minor,rr}var nr,Jn;function co(){if(Jn)return nr;Jn=1;const e=re();return nr=(r,n)=>new e(r,n).patch,nr}var ir,Yn;function fo(){if(Yn)return ir;Yn=1;const e=Ke();return ir=(r,n)=>{const i=e(r,n);return i&&i.prerelease.length?i.prerelease:null},ir}var ar,Zn;function fe(){if(Zn)return ar;Zn=1;const e=re();return ar=(r,n,i)=>new e(r,i).compare(new e(n,i)),ar}var sr,Qn;function lo(){if(Qn)return sr;Qn=1;const e=fe();return sr=(r,n,i)=>e(n,r,i),sr}var or,ei;function uo(){if(ei)return or;ei=1;const e=fe();return or=(r,n)=>e(r,n,!0),or}var cr,ti;function an(){if(ti)return cr;ti=1;const e=re();return cr=(r,n,i)=>{const a=new e(r,i),s=new e(n,i);return a.compare(s)||a.compareBuild(s)},cr}var fr,ri;function xo(){if(ri)return fr;ri=1;const e=an();return fr=(r,n)=>r.sort((i,a)=>e(i,a,n)),fr}var lr,ni;function ho(){if(ni)return lr;ni=1;const e=an();return lr=(r,n)=>r.sort((i,a)=>e(a,i,n)),lr}var dr,ii;function At(){if(ii)return dr;ii=1;const e=fe();return dr=(r,n,i)=>e(r,n,i)>0,dr}var ur,ai;function sn(){if(ai)return ur;ai=1;const e=fe();return ur=(r,n,i)=>e(r,n,i)<0,ur}var xr,si;function Ta(){if(si)return xr;si=1;const e=fe();return xr=(r,n,i)=>e(r,n,i)===0,xr}var hr,oi;function Ca(){if(oi)return hr;oi=1;const e=fe();return hr=(r,n,i)=>e(r,n,i)!==0,hr}var pr,ci;function on(){if(ci)return pr;ci=1;const e=fe();return pr=(r,n,i)=>e(r,n,i)>=0,pr}var mr,fi;function cn(){if(fi)return mr;fi=1;const e=fe();return mr=(r,n,i)=>e(r,n,i)<=0,mr}var gr,li;function Oa(){if(li)return gr;li=1;const e=Ta(),t=Ca(),r=At(),n=on(),i=sn(),a=cn();return gr=(l,c,f,o)=>{switch(c){case"===":return typeof l=="object"&&(l=l.version),typeof f=="object"&&(f=f.version),l===f;case"!==":return typeof l=="object"&&(l=l.version),typeof f=="object"&&(f=f.version),l!==f;case"":case"=":case"==":return e(l,f,o);case"!=":return t(l,f,o);case">":return r(l,f,o);case">=":return n(l,f,o);case"<":return i(l,f,o);case"<=":return a(l,f,o);default:throw new TypeError(`Invalid operator: ${c}`)}},gr}var br,di;function po(){if(di)return br;di=1;const e=re(),t=Ke(),{safeRe:r,t:n}=ct();return br=(a,s)=>{if(a instanceof e)return a;if(typeof a=="number"&&(a=String(a)),typeof a!="string")return null;s=s||{};let l=null;if(!s.rtl)l=a.match(s.includePrerelease?r[n.COERCEFULL]:r[n.COERCE]);else{const v=s.includePrerelease?r[n.COERCERTLFULL]:r[n.COERCERTL];let g;for(;(g=v.exec(a))&&(!l||l.index+l[0].length!==a.length);)(!l||g.index+g[0].length!==l.index+l[0].length)&&(l=g),v.lastIndex=g.index+g[1].length+g[2].length;v.lastIndex=-1}if(l===null)return null;const c=l[2],f=l[3]||"0",o=l[4]||"0",d=s.includePrerelease&&l[5]?`-${l[5]}`:"",u=s.includePrerelease&&l[6]?`+${l[6]}`:"";return t(`${c}.${f}.${o}${d}${u}`,s)},br}var vr,ui;function mo(){if(ui)return vr;ui=1;class e{constructor(){this.max=1e3,this.map=new Map}get(r){const n=this.map.get(r);if(n!==void 0)return this.map.delete(r),this.map.set(r,n),n}delete(r){return this.map.delete(r)}set(r,n){if(!this.delete(r)&&n!==void 0){if(this.map.size>=this.max){const a=this.map.keys().next().value;this.delete(a)}this.map.set(r,n)}return this}}return vr=e,vr}var yr,xi;function le(){if(xi)return yr;xi=1;const e=/\s+/g;class t{constructor(h,C){if(C=i(C),h instanceof t)return h.loose===!!C.loose&&h.includePrerelease===!!C.includePrerelease?h:new t(h.raw,C);if(h instanceof a)return this.raw=h.value,this.set=[[h]],this.formatted=void 0,this;if(this.options=C,this.loose=!!C.loose,this.includePrerelease=!!C.includePrerelease,this.raw=h.trim().replace(e," "),this.set=this.raw.split("||").map(O=>this.parseRange(O.trim())).filter(O=>O.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){const O=this.set[0];if(this.set=this.set.filter(j=>!b(j[0])),this.set.length===0)this.set=[O];else if(this.set.length>1){for(const j of this.set)if(j.length===1&&A(j[0])){this.set=[j];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let h=0;h<this.set.length;h++){h>0&&(this.formatted+="||");const C=this.set[h];for(let O=0;O<C.length;O++)O>0&&(this.formatted+=" "),this.formatted+=C[O].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(h){const O=((this.options.includePrerelease&&v)|(this.options.loose&&g))+":"+h,j=n.get(O);if(j)return j;const L=this.options.loose,k=L?c[f.HYPHENRANGELOOSE]:c[f.HYPHENRANGE];h=h.replace(k,G(this.options.includePrerelease)),s("hyphen replace",h),h=h.replace(c[f.COMPARATORTRIM],o),s("comparator trim",h),h=h.replace(c[f.TILDETRIM],d),s("tilde trim",h),h=h.replace(c[f.CARETTRIM],u),s("caret trim",h);let V=h.split(" ").map(K=>p(K,this.options)).join(" ").split(/\s+/).map(K=>_(K,this.options));L&&(V=V.filter(K=>(s("loose invalid filter",K,this.options),!!K.match(c[f.COMPARATORLOOSE])))),s("range list",V);const z=new Map,X=V.map(K=>new a(K,this.options));for(const K of X){if(b(K))return[K];z.set(K.value,K)}z.size>1&&z.has("")&&z.delete("");const W=[...z.values()];return n.set(O,W),W}intersects(h,C){if(!(h instanceof t))throw new TypeError("a Range is required");return this.set.some(O=>x(O,C)&&h.set.some(j=>x(j,C)&&O.every(L=>j.every(k=>L.intersects(k,C)))))}test(h){if(!h)return!1;if(typeof h=="string")try{h=new l(h,this.options)}catch{return!1}for(let C=0;C<this.set.length;C++)if(T(this.set[C],h,this.options))return!0;return!1}}yr=t;const r=mo(),n=new r,i=nn(),a=It(),s=Rt(),l=re(),{safeRe:c,t:f,comparatorTrimReplace:o,tildeTrimReplace:d,caretTrimReplace:u}=ct(),{FLAG_INCLUDE_PRERELEASE:v,FLAG_LOOSE:g}=St(),b=w=>w.value==="<0.0.0-0",A=w=>w.value==="",x=(w,h)=>{let C=!0;const O=w.slice();let j=O.pop();for(;C&&O.length;)C=O.every(L=>j.intersects(L,h)),j=O.pop();return C},p=(w,h)=>(w=w.replace(c[f.BUILD],""),s("comp",w,h),w=I(w,h),s("caret",w),w=S(w,h),s("tildes",w),w=R(w,h),s("xrange",w),w=D(w,h),s("stars",w),w),m=w=>!w||w.toLowerCase()==="x"||w==="*",S=(w,h)=>w.trim().split(/\s+/).map(C=>N(C,h)).join(" "),N=(w,h)=>{const C=h.loose?c[f.TILDELOOSE]:c[f.TILDE];return w.replace(C,(O,j,L,k,V)=>{s("tilde",w,O,j,L,k,V);let z;return m(j)?z="":m(L)?z=`>=${j}.0.0 <${+j+1}.0.0-0`:m(k)?z=`>=${j}.${L}.0 <${j}.${+L+1}.0-0`:V?(s("replaceTilde pr",V),z=`>=${j}.${L}.${k}-${V} <${j}.${+L+1}.0-0`):z=`>=${j}.${L}.${k} <${j}.${+L+1}.0-0`,s("tilde return",z),z})},I=(w,h)=>w.trim().split(/\s+/).map(C=>$(C,h)).join(" "),$=(w,h)=>{s("caret",w,h);const C=h.loose?c[f.CARETLOOSE]:c[f.CARET],O=h.includePrerelease?"-0":"";return w.replace(C,(j,L,k,V,z)=>{s("caret",w,j,L,k,V,z);let X;return m(L)?X="":m(k)?X=`>=${L}.0.0${O} <${+L+1}.0.0-0`:m(V)?L==="0"?X=`>=${L}.${k}.0${O} <${L}.${+k+1}.0-0`:X=`>=${L}.${k}.0${O} <${+L+1}.0.0-0`:z?(s("replaceCaret pr",z),L==="0"?k==="0"?X=`>=${L}.${k}.${V}-${z} <${L}.${k}.${+V+1}-0`:X=`>=${L}.${k}.${V}-${z} <${L}.${+k+1}.0-0`:X=`>=${L}.${k}.${V}-${z} <${+L+1}.0.0-0`):(s("no pr"),L==="0"?k==="0"?X=`>=${L}.${k}.${V}${O} <${L}.${k}.${+V+1}-0`:X=`>=${L}.${k}.${V}${O} <${L}.${+k+1}.0-0`:X=`>=${L}.${k}.${V} <${+L+1}.0.0-0`),s("caret return",X),X})},R=(w,h)=>(s("replaceXRanges",w,h),w.split(/\s+/).map(C=>P(C,h)).join(" ")),P=(w,h)=>{w=w.trim();const C=h.loose?c[f.XRANGELOOSE]:c[f.XRANGE];return w.replace(C,(O,j,L,k,V,z)=>{s("xRange",w,O,j,L,k,V,z);const X=m(L),W=X||m(k),K=W||m(V),Ie=K;return j==="="&&Ie&&(j=""),z=h.includePrerelease?"-0":"",X?j===">"||j==="<"?O="<0.0.0-0":O="*":j&&Ie?(W&&(k=0),V=0,j===">"?(j=">=",W?(L=+L+1,k=0,V=0):(k=+k+1,V=0)):j==="<="&&(j="<",W?L=+L+1:k=+k+1),j==="<"&&(z="-0"),O=`${j+L}.${k}.${V}${z}`):W?O=`>=${L}.0.0${z} <${+L+1}.0.0-0`:K&&(O=`>=${L}.${k}.0${z} <${L}.${+k+1}.0-0`),s("xRange return",O),O})},D=(w,h)=>(s("replaceStars",w,h),w.trim().replace(c[f.STAR],"")),_=(w,h)=>(s("replaceGTE0",w,h),w.trim().replace(c[h.includePrerelease?f.GTE0PRE:f.GTE0],"")),G=w=>(h,C,O,j,L,k,V,z,X,W,K,Ie)=>(m(O)?C="":m(j)?C=`>=${O}.0.0${w?"-0":""}`:m(L)?C=`>=${O}.${j}.0${w?"-0":""}`:k?C=`>=${C}`:C=`>=${C}${w?"-0":""}`,m(X)?z="":m(W)?z=`<${+X+1}.0.0-0`:m(K)?z=`<${X}.${+W+1}.0-0`:Ie?z=`<=${X}.${W}.${K}-${Ie}`:w?z=`<${X}.${W}.${+K+1}-0`:z=`<=${z}`,`${C} ${z}`.trim()),T=(w,h,C)=>{for(let O=0;O<w.length;O++)if(!w[O].test(h))return!1;if(h.prerelease.length&&!C.includePrerelease){for(let O=0;O<w.length;O++)if(s(w[O].semver),w[O].semver!==a.ANY&&w[O].semver.prerelease.length>0){const j=w[O].semver;if(j.major===h.major&&j.minor===h.minor&&j.patch===h.patch)return!0}return!1}return!0};return yr}var Er,hi;function It(){if(hi)return Er;hi=1;const e=Symbol("SemVer ANY");class t{static get ANY(){return e}constructor(o,d){if(d=r(d),o instanceof t){if(o.loose===!!d.loose)return o;o=o.value}o=o.trim().split(/\s+/).join(" "),s("comparator",o,d),this.options=d,this.loose=!!d.loose,this.parse(o),this.semver===e?this.value="":this.value=this.operator+this.semver.version,s("comp",this)}parse(o){const d=this.options.loose?n[i.COMPARATORLOOSE]:n[i.COMPARATOR],u=o.match(d);if(!u)throw new TypeError(`Invalid comparator: ${o}`);this.operator=u[1]!==void 0?u[1]:"",this.operator==="="&&(this.operator=""),u[2]?this.semver=new l(u[2],this.options.loose):this.semver=e}toString(){return this.value}test(o){if(s("Comparator.test",o,this.options.loose),this.semver===e||o===e)return!0;if(typeof o=="string")try{o=new l(o,this.options)}catch{return!1}return a(o,this.operator,this.semver,this.options)}intersects(o,d){if(!(o instanceof t))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new c(o.value,d).test(this.value):o.operator===""?o.value===""?!0:new c(this.value,d).test(o.semver):(d=r(d),d.includePrerelease&&(this.value==="<0.0.0-0"||o.value==="<0.0.0-0")||!d.includePrerelease&&(this.value.startsWith("<0.0.0")||o.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&o.operator.startsWith(">")||this.operator.startsWith("<")&&o.operator.startsWith("<")||this.semver.version===o.semver.version&&this.operator.includes("=")&&o.operator.includes("=")||a(this.semver,"<",o.semver,d)&&this.operator.startsWith(">")&&o.operator.startsWith("<")||a(this.semver,">",o.semver,d)&&this.operator.startsWith("<")&&o.operator.startsWith(">")))}}Er=t;const r=nn(),{safeRe:n,t:i}=ct(),a=Oa(),s=Rt(),l=re(),c=le();return Er}var wr,pi;function Tt(){if(pi)return wr;pi=1;const e=le();return wr=(r,n,i)=>{try{n=new e(n,i)}catch{return!1}return n.test(r)},wr}var Sr,mi;function go(){if(mi)return Sr;mi=1;const e=le();return Sr=(r,n)=>new e(r,n).set.map(i=>i.map(a=>a.value).join(" ").trim().split(" ")),Sr}var Rr,gi;function bo(){if(gi)return Rr;gi=1;const e=re(),t=le();return Rr=(n,i,a)=>{let s=null,l=null,c=null;try{c=new t(i,a)}catch{return null}return n.forEach(f=>{c.test(f)&&(!s||l.compare(f)===-1)&&(s=f,l=new e(s,a))}),s},Rr}var Ar,bi;function vo(){if(bi)return Ar;bi=1;const e=re(),t=le();return Ar=(n,i,a)=>{let s=null,l=null,c=null;try{c=new t(i,a)}catch{return null}return n.forEach(f=>{c.test(f)&&(!s||l.compare(f)===1)&&(s=f,l=new e(s,a))}),s},Ar}var Ir,vi;function yo(){if(vi)return Ir;vi=1;const e=re(),t=le(),r=At();return Ir=(i,a)=>{i=new t(i,a);let s=new e("0.0.0");if(i.test(s)||(s=new e("0.0.0-0"),i.test(s)))return s;s=null;for(let l=0;l<i.set.length;++l){const c=i.set[l];let f=null;c.forEach(o=>{const d=new e(o.semver.version);switch(o.operator){case">":d.prerelease.length===0?d.patch++:d.prerelease.push(0),d.raw=d.format();case"":case">=":(!f||r(d,f))&&(f=d);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${o.operator}`)}}),f&&(!s||r(s,f))&&(s=f)}return s&&i.test(s)?s:null},Ir}var Tr,yi;function Eo(){if(yi)return Tr;yi=1;const e=le();return Tr=(r,n)=>{try{return new e(r,n).range||"*"}catch{return null}},Tr}var Cr,Ei;function fn(){if(Ei)return Cr;Ei=1;const e=re(),t=It(),{ANY:r}=t,n=le(),i=Tt(),a=At(),s=sn(),l=cn(),c=on();return Cr=(o,d,u,v)=>{o=new e(o,v),d=new n(d,v);let g,b,A,x,p;switch(u){case">":g=a,b=l,A=s,x=">",p=">=";break;case"<":g=s,b=c,A=a,x="<",p="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(i(o,d,v))return!1;for(let m=0;m<d.set.length;++m){const S=d.set[m];let N=null,I=null;if(S.forEach($=>{$.semver===r&&($=new t(">=0.0.0")),N=N||$,I=I||$,g($.semver,N.semver,v)?N=$:A($.semver,I.semver,v)&&(I=$)}),N.operator===x||N.operator===p||(!I.operator||I.operator===x)&&b(o,I.semver))return!1;if(I.operator===p&&A(o,I.semver))return!1}return!0},Cr}var Or,wi;function wo(){if(wi)return Or;wi=1;const e=fn();return Or=(r,n,i)=>e(r,n,">",i),Or}var $r,Si;function So(){if(Si)return $r;Si=1;const e=fn();return $r=(r,n,i)=>e(r,n,"<",i),$r}var jr,Ri;function Ro(){if(Ri)return jr;Ri=1;const e=le();return jr=(r,n,i)=>(r=new e(r,i),n=new e(n,i),r.intersects(n,i)),jr}var Lr,Ai;function Ao(){if(Ai)return Lr;Ai=1;const e=Tt(),t=fe();return Lr=(r,n,i)=>{const a=[];let s=null,l=null;const c=r.sort((u,v)=>t(u,v,i));for(const u of c)e(u,n,i)?(l=u,s||(s=u)):(l&&a.push([s,l]),l=null,s=null);s&&a.push([s,null]);const f=[];for(const[u,v]of a)u===v?f.push(u):!v&&u===c[0]?f.push("*"):v?u===c[0]?f.push(`<=${v}`):f.push(`${u} - ${v}`):f.push(`>=${u}`);const o=f.join(" || "),d=typeof n.raw=="string"?n.raw:String(n);return o.length<d.length?o:n},Lr}var Nr,Ii;function Io(){if(Ii)return Nr;Ii=1;const e=le(),t=It(),{ANY:r}=t,n=Tt(),i=fe(),a=(d,u,v={})=>{if(d===u)return!0;d=new e(d,v),u=new e(u,v);let g=!1;e:for(const b of d.set){for(const A of u.set){const x=c(b,A,v);if(g=g||x!==null,x)continue e}if(g)return!1}return!0},s=[new t(">=0.0.0-0")],l=[new t(">=0.0.0")],c=(d,u,v)=>{if(d===u)return!0;if(d.length===1&&d[0].semver===r){if(u.length===1&&u[0].semver===r)return!0;v.includePrerelease?d=s:d=l}if(u.length===1&&u[0].semver===r){if(v.includePrerelease)return!0;u=l}const g=new Set;let b,A;for(const R of d)R.operator===">"||R.operator===">="?b=f(b,R,v):R.operator==="<"||R.operator==="<="?A=o(A,R,v):g.add(R.semver);if(g.size>1)return null;let x;if(b&&A){if(x=i(b.semver,A.semver,v),x>0)return null;if(x===0&&(b.operator!==">="||A.operator!=="<="))return null}for(const R of g){if(b&&!n(R,String(b),v)||A&&!n(R,String(A),v))return null;for(const P of u)if(!n(R,String(P),v))return!1;return!0}let p,m,S,N,I=A&&!v.includePrerelease&&A.semver.prerelease.length?A.semver:!1,$=b&&!v.includePrerelease&&b.semver.prerelease.length?b.semver:!1;I&&I.prerelease.length===1&&A.operator==="<"&&I.prerelease[0]===0&&(I=!1);for(const R of u){if(N=N||R.operator===">"||R.operator===">=",S=S||R.operator==="<"||R.operator==="<=",b){if($&&R.semver.prerelease&&R.semver.prerelease.length&&R.semver.major===$.major&&R.semver.minor===$.minor&&R.semver.patch===$.patch&&($=!1),R.operator===">"||R.operator===">="){if(p=f(b,R,v),p===R&&p!==b)return!1}else if(b.operator===">="&&!n(b.semver,String(R),v))return!1}if(A){if(I&&R.semver.prerelease&&R.semver.prerelease.length&&R.semver.major===I.major&&R.semver.minor===I.minor&&R.semver.patch===I.patch&&(I=!1),R.operator==="<"||R.operator==="<="){if(m=o(A,R,v),m===R&&m!==A)return!1}else if(A.operator==="<="&&!n(A.semver,String(R),v))return!1}if(!R.operator&&(A||b)&&x!==0)return!1}return!(b&&S&&!A&&x!==0||A&&N&&!b&&x!==0||$||I)},f=(d,u,v)=>{if(!d)return u;const g=i(d.semver,u.semver,v);return g>0?d:g<0||u.operator===">"&&d.operator===">="?u:d},o=(d,u,v)=>{if(!d)return u;const g=i(d.semver,u.semver,v);return g<0?d:g>0||u.operator==="<"&&d.operator==="<="?u:d};return Nr=a,Nr}var Pr,Ti;function ln(){if(Ti)return Pr;Ti=1;const e=ct(),t=St(),r=re(),n=Ia(),i=Ke(),a=ro(),s=no(),l=io(),c=ao(),f=so(),o=oo(),d=co(),u=fo(),v=fe(),g=lo(),b=uo(),A=an(),x=xo(),p=ho(),m=At(),S=sn(),N=Ta(),I=Ca(),$=on(),R=cn(),P=Oa(),D=po(),_=It(),G=le(),T=Tt(),w=go(),h=bo(),C=vo(),O=yo(),j=Eo(),L=fn(),k=wo(),V=So(),z=Ro(),X=Ao(),W=Io();return Pr={parse:i,valid:a,clean:s,inc:l,diff:c,major:f,minor:o,patch:d,prerelease:u,compare:v,rcompare:g,compareLoose:b,compareBuild:A,sort:x,rsort:p,gt:m,lt:S,eq:N,neq:I,gte:$,lte:R,cmp:P,coerce:D,Comparator:_,Range:G,satisfies:T,toComparators:w,maxSatisfying:h,minSatisfying:C,minVersion:O,validRange:j,outside:L,gtr:k,ltr:V,intersects:z,simplifyRange:X,subset:W,SemVer:r,re:e.re,src:e.src,tokens:e.t,SEMVER_SPEC_VERSION:t.SEMVER_SPEC_VERSION,RELEASE_TYPES:t.RELEASE_TYPES,compareIdentifiers:n.compareIdentifiers,rcompareIdentifiers:n.rcompareIdentifiers},Pr}var _r,Ci;function To(){return Ci||(Ci=1,_r=ln().satisfies(process.version,">=15.7.0")),_r}var Dr,Oi;function Co(){return Oi||(Oi=1,Dr=ln().satisfies(process.version,">=16.9.0")),Dr}var qr,$i;function $a(){if($i)return qr;$i=1;const e=To(),t=Co(),r={ec:["ES256","ES384","ES512"],rsa:["RS256","PS256","RS384","PS384","RS512","PS512"],"rsa-pss":["PS256","PS384","PS512"]},n={ES256:"prime256v1",ES384:"secp384r1",ES512:"secp521r1"};return qr=function(i,a){if(!i||!a)return;const s=a.asymmetricKeyType;if(!s)return;const l=r[s];if(!l)throw new Error(`Unknown key type "${s}".`);if(!l.includes(i))throw new Error(`"alg" parameter for "${s}" key type must be one of: ${l.join(", ")}.`);if(e)switch(s){case"ec":const c=a.asymmetricKeyDetails.namedCurve,f=n[i];if(c!==f)throw new Error(`"alg" parameter "${i}" requires curve "${f}".`);break;case"rsa-pss":if(t){const o=parseInt(i.slice(-3),10),{hashAlgorithm:d,mgf1HashAlgorithm:u,saltLength:v}=a.asymmetricKeyDetails;if(d!==`sha${o}`||u!==d)throw new Error(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${i}.`);if(v!==void 0&&v>o>>3)throw new Error(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${i}.`)}break}},qr}var Fr,ji;function ja(){if(ji)return Fr;ji=1;var e=ln();return Fr=e.satisfies(process.version,"^6.12.0 || >=8.0.0"),Fr}var Br,Li;function Oo(){if(Li)return Br;Li=1;const e=wt(),t=Sa(),r=Ra(),n=wa(),i=Aa(),a=$a(),s=ja(),l=rn(),{KeyObject:c,createSecretKey:f,createPublicKey:o}=yt,d=["RS256","RS384","RS512"],u=["ES256","ES384","ES512"],v=["RS256","RS384","RS512"],g=["HS256","HS384","HS512"];return s&&(d.splice(d.length,0,"PS256","PS384","PS512"),v.splice(v.length,0,"PS256","PS384","PS512")),Br=function(b,A,x,p){typeof x=="function"&&!p&&(p=x,x={}),x||(x={}),x=Object.assign({},x);let m;if(p?m=p:m=function(P,D){if(P)throw P;return D},x.clockTimestamp&&typeof x.clockTimestamp!="number")return m(new e("clockTimestamp must be a number"));if(x.nonce!==void 0&&(typeof x.nonce!="string"||x.nonce.trim()===""))return m(new e("nonce must be a non-empty string"));if(x.allowInvalidAsymmetricKeyTypes!==void 0&&typeof x.allowInvalidAsymmetricKeyTypes!="boolean")return m(new e("allowInvalidAsymmetricKeyTypes must be a boolean"));const S=x.clockTimestamp||Math.floor(Date.now()/1e3);if(!b)return m(new e("jwt must be provided"));if(typeof b!="string")return m(new e("jwt must be a string"));const N=b.split(".");if(N.length!==3)return m(new e("jwt malformed"));let I;try{I=n(b,{complete:!0})}catch(P){return m(P)}if(!I)return m(new e("invalid token"));const $=I.header;let R;if(typeof A=="function"){if(!p)return m(new e("verify must be called asynchronous if secret or public key is provided as a callback"));R=A}else R=function(P,D){return D(null,A)};return R($,function(P,D){if(P)return m(new e("error in secret or public key callback: "+P.message));const _=N[2].trim()!=="";if(!_&&D)return m(new e("jwt signature is required"));if(_&&!D)return m(new e("secret or public key must be provided"));if(!_&&!x.algorithms)return m(new e('please specify "none" in "algorithms" to verify unsigned tokens'));if(D!=null&&!(D instanceof c))try{D=o(D)}catch{try{D=f(typeof D=="string"?Buffer.from(D):D)}catch{return m(new e("secretOrPublicKey is not valid key material"))}}if(x.algorithms||(D.type==="secret"?x.algorithms=g:["rsa","rsa-pss"].includes(D.asymmetricKeyType)?x.algorithms=v:D.asymmetricKeyType==="ec"?x.algorithms=u:x.algorithms=d),x.algorithms.indexOf(I.header.alg)===-1)return m(new e("invalid algorithm"));if($.alg.startsWith("HS")&&D.type!=="secret")return m(new e(`secretOrPublicKey must be a symmetric key when using ${$.alg}`));if(/^(?:RS|PS|ES)/.test($.alg)&&D.type!=="public")return m(new e(`secretOrPublicKey must be an asymmetric key when using ${$.alg}`));if(!x.allowInvalidAsymmetricKeyTypes)try{a($.alg,D)}catch(w){return m(w)}let G;try{G=l.verify(b,I.header.alg,D)}catch(w){return m(w)}if(!G)return m(new e("invalid signature"));const T=I.payload;if(typeof T.nbf<"u"&&!x.ignoreNotBefore){if(typeof T.nbf!="number")return m(new e("invalid nbf value"));if(T.nbf>S+(x.clockTolerance||0))return m(new t("jwt not active",new Date(T.nbf*1e3)))}if(typeof T.exp<"u"&&!x.ignoreExpiration){if(typeof T.exp!="number")return m(new e("invalid exp value"));if(S>=T.exp+(x.clockTolerance||0))return m(new r("jwt expired",new Date(T.exp*1e3)))}if(x.audience){const w=Array.isArray(x.audience)?x.audience:[x.audience];if(!(Array.isArray(T.aud)?T.aud:[T.aud]).some(function(O){return w.some(function(j){return j instanceof RegExp?j.test(O):j===O})}))return m(new e("jwt audience invalid. expected: "+w.join(" or ")))}if(x.issuer&&(typeof x.issuer=="string"&&T.iss!==x.issuer||Array.isArray(x.issuer)&&x.issuer.indexOf(T.iss)===-1))return m(new e("jwt issuer invalid. expected: "+x.issuer));if(x.subject&&T.sub!==x.subject)return m(new e("jwt subject invalid. expected: "+x.subject));if(x.jwtid&&T.jti!==x.jwtid)return m(new e("jwt jwtid invalid. expected: "+x.jwtid));if(x.nonce&&T.nonce!==x.nonce)return m(new e("jwt nonce invalid. expected: "+x.nonce));if(x.maxAge){if(typeof T.iat!="number")return m(new e("iat required when maxAge is specified"));const w=i(x.maxAge,T.iat);if(typeof w>"u")return m(new e('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));if(S>=w+(x.clockTolerance||0))return m(new r("maxAge exceeded",new Date(w*1e3)))}if(x.complete===!0){const w=I.signature;return m(null,{header:$,payload:T,signature:w})}return m(null,T)})},Br}var kr,Ni;function $o(){if(Ni)return kr;Ni=1;var e=1/0,t=9007199254740991,r=17976931348623157e292,n=NaN,i="[object Arguments]",a="[object Function]",s="[object GeneratorFunction]",l="[object String]",c="[object Symbol]",f=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,u=/^0o[0-7]+$/i,v=/^(?:0|[1-9]\d*)$/,g=parseInt;function b(y,q){for(var M=-1,ee=y?y.length:0,ne=Array(ee);++M<ee;)ne[M]=q(y[M],M,y);return ne}function A(y,q,M,ee){for(var ne=y.length,ue=M+-1;++ue<ne;)if(q(y[ue],ue,y))return ue;return-1}function x(y,q,M){if(q!==q)return A(y,p,M);for(var ee=M-1,ne=y.length;++ee<ne;)if(y[ee]===q)return ee;return-1}function p(y){return y!==y}function m(y,q){for(var M=-1,ee=Array(y);++M<y;)ee[M]=q(M);return ee}function S(y,q){return b(q,function(M){return y[M]})}function N(y,q){return function(M){return y(q(M))}}var I=Object.prototype,$=I.hasOwnProperty,R=I.toString,P=I.propertyIsEnumerable,D=N(Object.keys,Object),_=Math.max;function G(y,q){var M=j(y)||O(y)?m(y.length,String):[],ee=M.length,ne=!!ee;for(var ue in y)$.call(y,ue)&&!(ne&&(ue=="length"||w(ue,ee)))&&M.push(ue);return M}function T(y){if(!h(y))return D(y);var q=[];for(var M in Object(y))$.call(y,M)&&M!="constructor"&&q.push(M);return q}function w(y,q){return q=q??t,!!q&&(typeof y=="number"||v.test(y))&&y>-1&&y%1==0&&y<q}function h(y){var q=y&&y.constructor,M=typeof q=="function"&&q.prototype||I;return y===M}function C(y,q,M,ee){y=L(y)?y:ka(y),M=M&&!ee?qa(M):0;var ne=y.length;return M<0&&(M=_(ne+M,0)),K(y)?M<=ne&&y.indexOf(q,M)>-1:!!ne&&x(y,q,M)>-1}function O(y){return k(y)&&$.call(y,"callee")&&(!P.call(y,"callee")||R.call(y)==i)}var j=Array.isArray;function L(y){return y!=null&&z(y.length)&&!V(y)}function k(y){return W(y)&&L(y)}function V(y){var q=X(y)?R.call(y):"";return q==a||q==s}function z(y){return typeof y=="number"&&y>-1&&y%1==0&&y<=t}function X(y){var q=typeof y;return!!y&&(q=="object"||q=="function")}function W(y){return!!y&&typeof y=="object"}function K(y){return typeof y=="string"||!j(y)&&W(y)&&R.call(y)==l}function Ie(y){return typeof y=="symbol"||W(y)&&R.call(y)==c}function Da(y){if(!y)return y===0?y:0;if(y=Fa(y),y===e||y===-e){var q=y<0?-1:1;return q*r}return y===y?y:0}function qa(y){var q=Da(y),M=q%1;return q===q?M?q-M:q:0}function Fa(y){if(typeof y=="number")return y;if(Ie(y))return n;if(X(y)){var q=typeof y.valueOf=="function"?y.valueOf():y;y=X(q)?q+"":q}if(typeof y!="string")return y===0?y:+y;y=y.replace(f,"");var M=d.test(y);return M||u.test(y)?g(y.slice(2),M?2:8):o.test(y)?n:+y}function Ba(y){return L(y)?G(y):T(y)}function ka(y){return y?S(y,Ba(y)):[]}return kr=C,kr}var Mr,Pi;function jo(){if(Pi)return Mr;Pi=1;var e="[object Boolean]",t=Object.prototype,r=t.toString;function n(a){return a===!0||a===!1||i(a)&&r.call(a)==e}function i(a){return!!a&&typeof a=="object"}return Mr=n,Mr}var zr,_i;function Lo(){if(_i)return zr;_i=1;var e=1/0,t=17976931348623157e292,r=NaN,n="[object Symbol]",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,f=Object.prototype,o=f.toString;function d(p){return typeof p=="number"&&p==A(p)}function u(p){var m=typeof p;return!!p&&(m=="object"||m=="function")}function v(p){return!!p&&typeof p=="object"}function g(p){return typeof p=="symbol"||v(p)&&o.call(p)==n}function b(p){if(!p)return p===0?p:0;if(p=x(p),p===e||p===-e){var m=p<0?-1:1;return m*t}return p===p?p:0}function A(p){var m=b(p),S=m%1;return m===m?S?m-S:m:0}function x(p){if(typeof p=="number")return p;if(g(p))return r;if(u(p)){var m=typeof p.valueOf=="function"?p.valueOf():p;p=u(m)?m+"":m}if(typeof p!="string")return p===0?p:+p;p=p.replace(i,"");var S=s.test(p);return S||l.test(p)?c(p.slice(2),S?2:8):a.test(p)?r:+p}return zr=d,zr}var Hr,Di;function No(){if(Di)return Hr;Di=1;var e="[object Number]",t=Object.prototype,r=t.toString;function n(a){return!!a&&typeof a=="object"}function i(a){return typeof a=="number"||n(a)&&r.call(a)==e}return Hr=i,Hr}var Gr,qi;function Po(){if(qi)return Gr;qi=1;var e="[object Object]";function t(u){var v=!1;if(u!=null&&typeof u.toString!="function")try{v=!!(u+"")}catch{}return v}function r(u,v){return function(g){return u(v(g))}}var n=Function.prototype,i=Object.prototype,a=n.toString,s=i.hasOwnProperty,l=a.call(Object),c=i.toString,f=r(Object.getPrototypeOf,Object);function o(u){return!!u&&typeof u=="object"}function d(u){if(!o(u)||c.call(u)!=e||t(u))return!1;var v=f(u);if(v===null)return!0;var g=s.call(v,"constructor")&&v.constructor;return typeof g=="function"&&g instanceof g&&a.call(g)==l}return Gr=d,Gr}var Vr,Fi;function _o(){if(Fi)return Vr;Fi=1;var e="[object String]",t=Object.prototype,r=t.toString,n=Array.isArray;function i(s){return!!s&&typeof s=="object"}function a(s){return typeof s=="string"||!n(s)&&i(s)&&r.call(s)==e}return Vr=a,Vr}var Ur,Bi;function Do(){if(Bi)return Ur;Bi=1;var e="Expected a function",t=1/0,r=17976931348623157e292,n=NaN,i="[object Symbol]",a=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt,o=Object.prototype,d=o.toString;function u(S,N){var I;if(typeof N!="function")throw new TypeError(e);return S=p(S),function(){return--S>0&&(I=N.apply(this,arguments)),S<=1&&(N=void 0),I}}function v(S){return u(2,S)}function g(S){var N=typeof S;return!!S&&(N=="object"||N=="function")}function b(S){return!!S&&typeof S=="object"}function A(S){return typeof S=="symbol"||b(S)&&d.call(S)==i}function x(S){if(!S)return S===0?S:0;if(S=m(S),S===t||S===-t){var N=S<0?-1:1;return N*r}return S===S?S:0}function p(S){var N=x(S),I=N%1;return N===N?I?N-I:N:0}function m(S){if(typeof S=="number")return S;if(A(S))return n;if(g(S)){var N=typeof S.valueOf=="function"?S.valueOf():S;S=g(N)?N+"":N}if(typeof S!="string")return S===0?S:+S;S=S.replace(a,"");var I=l.test(S);return I||c.test(S)?f(S.slice(2),I?2:8):s.test(S)?n:+S}return Ur=v,Ur}var Xr,ki;function qo(){if(ki)return Xr;ki=1;const e=Aa(),t=ja(),r=$a(),n=rn(),i=$o(),a=jo(),s=Lo(),l=No(),c=Po(),f=_o(),o=Do(),{KeyObject:d,createSecretKey:u,createPrivateKey:v}=yt,g=["RS256","RS384","RS512","ES256","ES384","ES512","HS256","HS384","HS512","none"];t&&g.splice(3,0,"PS256","PS384","PS512");const b={expiresIn:{isValid:function(I){return s(I)||f(I)&&I},message:'"expiresIn" should be a number of seconds or string representing a timespan'},notBefore:{isValid:function(I){return s(I)||f(I)&&I},message:'"notBefore" should be a number of seconds or string representing a timespan'},audience:{isValid:function(I){return f(I)||Array.isArray(I)},message:'"audience" must be a string or array'},algorithm:{isValid:i.bind(null,g),message:'"algorithm" must be a valid string enum value'},header:{isValid:c,message:'"header" must be an object'},encoding:{isValid:f,message:'"encoding" must be a string'},issuer:{isValid:f,message:'"issuer" must be a string'},subject:{isValid:f,message:'"subject" must be a string'},jwtid:{isValid:f,message:'"jwtid" must be a string'},noTimestamp:{isValid:a,message:'"noTimestamp" must be a boolean'},keyid:{isValid:f,message:'"keyid" must be a string'},mutatePayload:{isValid:a,message:'"mutatePayload" must be a boolean'},allowInsecureKeySizes:{isValid:a,message:'"allowInsecureKeySizes" must be a boolean'},allowInvalidAsymmetricKeyTypes:{isValid:a,message:'"allowInvalidAsymmetricKeyTypes" must be a boolean'}},A={iat:{isValid:l,message:'"iat" should be a number of seconds'},exp:{isValid:l,message:'"exp" should be a number of seconds'},nbf:{isValid:l,message:'"nbf" should be a number of seconds'}};function x(I,$,R,P){if(!c(R))throw new Error('Expected "'+P+'" to be a plain object.');Object.keys(R).forEach(function(D){const _=I[D];if(!_){if(!$)throw new Error('"'+D+'" is not allowed in "'+P+'"');return}if(!_.isValid(R[D]))throw new Error(_.message)})}function p(I){return x(b,!1,I,"options")}function m(I){return x(A,!0,I,"payload")}const S={audience:"aud",issuer:"iss",subject:"sub",jwtid:"jti"},N=["expiresIn","notBefore","noTimestamp","audience","issuer","subject","jwtid"];return Xr=function(I,$,R,P){typeof R=="function"?(P=R,R={}):R=R||{};const D=typeof I=="object"&&!Buffer.isBuffer(I),_=Object.assign({alg:R.algorithm||"HS256",typ:D?"JWT":void 0,kid:R.keyid},R.header);function G(h){if(P)return P(h);throw h}if(!$&&R.algorithm!=="none")return G(new Error("secretOrPrivateKey must have a value"));if($!=null&&!($ instanceof d))try{$=v($)}catch{try{$=u(typeof $=="string"?Buffer.from($):$)}catch{return G(new Error("secretOrPrivateKey is not valid key material"))}}if(_.alg.startsWith("HS")&&$.type!=="secret")return G(new Error(`secretOrPrivateKey must be a symmetric key when using ${_.alg}`));if(/^(?:RS|PS|ES)/.test(_.alg)){if($.type!=="private")return G(new Error(`secretOrPrivateKey must be an asymmetric key when using ${_.alg}`));if(!R.allowInsecureKeySizes&&!_.alg.startsWith("ES")&&$.asymmetricKeyDetails!==void 0&&$.asymmetricKeyDetails.modulusLength<2048)return G(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${_.alg}`))}if(typeof I>"u")return G(new Error("payload is required"));if(D){try{m(I)}catch(h){return G(h)}R.mutatePayload||(I=Object.assign({},I))}else{const h=N.filter(function(C){return typeof R[C]<"u"});if(h.length>0)return G(new Error("invalid "+h.join(",")+" option for "+typeof I+" payload"))}if(typeof I.exp<"u"&&typeof R.expiresIn<"u")return G(new Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));if(typeof I.nbf<"u"&&typeof R.notBefore<"u")return G(new Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));try{p(R)}catch(h){return G(h)}if(!R.allowInvalidAsymmetricKeyTypes)try{r(_.alg,$)}catch(h){return G(h)}const T=I.iat||Math.floor(Date.now()/1e3);if(R.noTimestamp?delete I.iat:D&&(I.iat=T),typeof R.notBefore<"u"){try{I.nbf=e(R.notBefore,T)}catch(h){return G(h)}if(typeof I.nbf>"u")return G(new Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'))}if(typeof R.expiresIn<"u"&&typeof I=="object"){try{I.exp=e(R.expiresIn,T)}catch(h){return G(h)}if(typeof I.exp>"u")return G(new Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'))}Object.keys(S).forEach(function(h){const C=S[h];if(typeof R[h]<"u"){if(typeof I[C]<"u")return G(new Error('Bad "options.'+h+'" option. The payload already has an "'+C+'" property.'));I[C]=R[h]}});const w=R.encoding||"utf8";if(typeof P=="function")P=P&&o(P),n.createSign({header:_,privateKey:$,payload:I,encoding:w}).once("error",P).once("done",function(h){if(!R.allowInsecureKeySizes&&/^(?:RS|PS)/.test(_.alg)&&h.length<256)return P(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${_.alg}`));P(null,h)});else{let h=n.sign({header:_,payload:I,secret:$,encoding:w});if(!R.allowInsecureKeySizes&&/^(?:RS|PS)/.test(_.alg)&&h.length<256)throw new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${_.alg}`);return h}},Xr}var Kr,Mi;function Fo(){return Mi||(Mi=1,Kr={decode:wa(),verify:Oo(),sign:qo(),JsonWebTokenError:wt(),NotBeforeError:Sa(),TokenExpiredError:Ra()}),Kr}var Bo=Fo();const La=Ws(Bo),de=new la,Na="structa-secret-key-2026";de.use("/api/*",Rs());de.use("/static/*",Ps({root:"./public"}));const Pa=async(e,t)=>{const r=e.req.header("Authorization");if(!r||!r.startsWith("Bearer "))return e.json({error:"Token não fornecido"},401);const n=r.substring(7);try{const i=La.verify(n,Na);e.set("user",i),await t()}catch{return e.json({error:"Token inválido"},401)}};de.post("/api/auth/login",async e=>{try{const{email:t,password:r}=await e.req.json();if(!t||!r)return e.json({error:"Email e senha são obrigatórios"},400);const{DB:n}=e.env,i=await n.prepare("SELECT * FROM users WHERE email = ? AND status = ?").bind(t,"active").first();if(!i)return e.json({error:"Credenciais inválidas"},401);if(!await Ks.compare(r,i.password_hash))return e.json({error:"Credenciais inválidas"},401);const s=La.sign({id:i.id,email:i.email,name:i.name,role:i.role},Na,{expiresIn:"8h"});return e.json({token:s,user:{id:i.id,email:i.email,name:i.name,role:i.role}})}catch(t){return console.error("Login error:",t),e.json({error:"Erro ao fazer login"},500)}});de.get("/api/auth/me",Pa,async e=>{const t=e.get("user");return e.json({user:t})});de.get("/api/users",Pa,async e=>{try{if(e.get("user").role!=="admin")return e.json({error:"Acesso negado"},403);const{DB:r}=e.env,{results:n}=await r.prepare("SELECT id, email, name, role, status, created_at FROM users ORDER BY created_at DESC").all();return e.json({users:n})}catch(t){return console.error("List users error:",t),e.json({error:"Erro ao listar usuários"},500)}});de.get("/",e=>e.html(`
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
                overflow: hidden;
            }
            
            .slide-content {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 15px 40px 80px;
                overflow: hidden;
                max-width: 1400px;
                margin: 0 auto;
                width: 100%;
                height: 100vh;
            }
            
            .premium-badge {
                display: inline-block;
                background: linear-gradient(135deg, #C9A56D 0%, #B89558 100%);
                color: white;
                padding: 6px 24px;
                border-radius: 50px;
                font-size: 0.75rem;
                font-weight: 500;
                text-align: center;
                margin: 0 auto 10px;
                box-shadow: 0 3px 12px rgba(201, 165, 109, 0.3);
            }
            
            .logo-section {
                text-align: center;
                margin-bottom: 18px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: 12px;
            }
            
            .logo-section img {
                height: 65px;
                width: auto;
            }
            
            .logo-section .brand-text {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 3px;
            }
            
            .logo-section .company-name {
                font-family: 'Playfair Display', serif;
                font-size: 2.4rem;
                font-weight: 700;
                color: #C9A56D;
                letter-spacing: 0.15em;
                line-height: 1;
            }
            
            .logo-section .tagline {
                font-size: 0.85rem;
                color: #F6F7F8;
                font-weight: 300;
                line-height: 1.2;
            }
            
            .two-columns {
                display: grid;
                grid-template-columns: 320px 1fr;
                gap: 30px;
                margin-bottom: 18px;
                align-items: flex-start;
            }
            
            .photo-column {
                display: flex;
                justify-content: center;
            }
            
            .photo-column img {
                width: 100%;
                max-width: 100%;
                border-radius: 10px;
                box-shadow: 0 6px 24px rgba(0, 0, 0, 0.3);
            }
            
            .combined-text-column {
                color: #F6F7F8;
                font-size: 0.75rem;
                line-height: 1.5;
                font-weight: 300;
            }
            
            .combined-text-column h3 {
                font-family: 'Playfair Display', serif;
                font-size: 1.1rem;
                color: #C9A56D;
                margin-bottom: 4px;
                font-weight: 600;
                line-height: 1.3;
            }
            
            .combined-text-column .subtitle {
                font-size: 0.7rem;
                color: #F6F7F8;
                margin-bottom: 3px;
                line-height: 1.3;
            }
            
            .combined-text-column .credentials {
                font-size: 0.65rem;
                color: rgba(246, 247, 248, 0.7);
                margin-bottom: 10px;
                line-height: 1.2;
            }
            
            .combined-text-column p {
                margin-bottom: 8px;
                text-align: justify;
            }
            
            .combined-text-column strong {
                color: #C9A56D;
                font-weight: 500;
            }
            
            .combined-text-column .divider {
                width: 100%;
                height: 1px;
                background: linear-gradient(to right, transparent, rgba(201, 165, 109, 0.3), transparent);
                margin: 12px 0;
            }
            
            .stats-section {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 15px;
                margin-bottom: 18px;
            }
            
            .stat-card {
                background: transparent;
                border: 1.5px solid rgba(201, 165, 109, 0.6);
                border-radius: 10px;
                padding: 12px 20px;
                text-align: center;
            }
            
            .stat-card .number {
                font-size: 1.5rem;
                font-weight: 700;
                color: #C9A56D;
                margin-bottom: 4px;
                line-height: 1;
            }
            
            .stat-card .label {
                color: #F6F7F8;
                font-size: 0.75rem;
                font-weight: 300;
                line-height: 1.2;
            }
            
            .cta-section {
                background: linear-gradient(135deg, #C9A56D 0%, #B89558 100%);
                border-radius: 12px;
                padding: 20px 30px;
                text-align: center;
            }
            
            .cta-section h2 {
                font-size: 1.3rem;
                font-weight: 700;
                color: #1F3B4D;
                margin-bottom: 8px;
                line-height: 1.2;
            }
            
            .cta-section p {
                font-size: 0.85rem;
                color: #2A2A2A;
                margin-bottom: 15px;
                line-height: 1.4;
            }
            
            .cta-button {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                background: #1F3B4D;
                color: white;
                padding: 12px 30px;
                border-radius: 50px;
                font-size: 0.9rem;
                font-weight: 500;
                text-decoration: none;
                transition: all 0.3s;
                box-shadow: 0 3px 12px rgba(31, 59, 77, 0.3);
            }
            
            .cta-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 5px 16px rgba(31, 59, 77, 0.4);
            }
            
            .slide-navigation {
                position: fixed;
                bottom: 20px;
                right: 20px;
                z-index: 1000;
                display: flex;
                gap: 10px;
            }
            
            .nav-button {
                width: 45px;
                height: 45px;
                border-radius: 50%;
                background: linear-gradient(135deg, #C9A56D 0%, #B89558 100%);
                color: white;
                border: none;
                font-size: 1.2rem;
                cursor: pointer;
                transition: all 0.3s;
                box-shadow: 0 3px 12px rgba(201, 165, 109, 0.4);
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .nav-button:hover {
                transform: scale(1.1);
                box-shadow: 0 5px 16px rgba(201, 165, 109, 0.5);
            }
            
            .nav-button:disabled {
                opacity: 0.3;
                cursor: not-allowed;
            }
            
            .nav-button:disabled:hover {
                transform: none;
            }
            
            .exit-button {
                position: fixed;
                top: 15px;
                right: 15px;
                background: rgba(255, 255, 255, 0.08);
                color: white;
                border: 1px solid rgba(255, 255, 255, 0.2);
                padding: 8px 16px;
                border-radius: 50px;
                font-size: 0.75rem;
                cursor: pointer;
                transition: all 0.3s;
                z-index: 1001;
                display: flex;
                align-items: center;
                gap: 6px;
            }
            
            .exit-button:hover {
                background: rgba(255, 255, 255, 0.15);
            }
            
            /* Responsivo para telas médias */
            @media (max-width: 1200px) {
                .two-columns { 
                    grid-template-columns: 280px 1fr;
                    gap: 25px;
                }
                .combined-text-column { font-size: 0.7rem; }
                .combined-text-column h3 { font-size: 1rem; }
                .logo-section img { height: 55px; }
                .logo-section .company-name { font-size: 2rem; }
                .logo-section .tagline { font-size: 0.8rem; }
            }
            
            /* Responsivo para tablets */
            @media (max-width: 1024px) {
                .slide-content { padding: 15px 30px 70px; }
                .two-columns { 
                    grid-template-columns: 1fr; 
                    gap: 15px;
                    margin-bottom: 15px;
                }
                .photo-column { text-align: center; }
                .photo-column img { max-width: 260px; }
                .stats-section { gap: 12px; margin-bottom: 15px; }
                .logo-section img { height: 50px; }
                .logo-section .company-name { font-size: 1.6rem; }
                .logo-section .tagline { font-size: 0.75rem; }
                .combined-text-column { font-size: 0.7rem; }
                .combined-text-column h3 { font-size: 0.95rem; }
                .cta-section { padding: 16px 25px; }
                .cta-section h2 { font-size: 1.1rem; }
                .cta-section p { font-size: 0.75rem; margin-bottom: 12px; }
                .cta-button { padding: 10px 24px; font-size: 0.85rem; }
            }
            
            /* Responsivo para mobile */
            @media (max-width: 768px) {
                .slide-content { padding: 12px 20px 60px; }
                .premium-badge { padding: 5px 20px; font-size: 0.7rem; margin-bottom: 8px; }
                .logo-section { 
                    flex-direction: column;
                    gap: 6px;
                    margin-bottom: 12px;
                }
                .logo-section img { height: 45px; }
                .logo-section .brand-text { align-items: center; }
                .logo-section .company-name { font-size: 1.4rem; }
                .logo-section .tagline { font-size: 0.7rem; text-align: center; }
                .photo-column img { max-width: 200px; }
                .combined-text-column { font-size: 0.65rem; }
                .combined-text-column p { margin-bottom: 6px; }
                .combined-text-column h3 { font-size: 0.9rem; margin-bottom: 3px; }
                .combined-text-column .subtitle { font-size: 0.65rem; }
                .combined-text-column .credentials { font-size: 0.6rem; margin-bottom: 6px; }
                .combined-text-column .divider { margin: 8px 0; }
                .stats-section { gap: 10px; margin-bottom: 12px; }
                .stat-card { padding: 10px 15px; }
                .stat-card .number { font-size: 1.3rem; }
                .stat-card .label { font-size: 0.7rem; }
                .cta-section { padding: 14px 20px; }
                .cta-section h2 { font-size: 1rem; margin-bottom: 6px; }
                .cta-section p { font-size: 0.7rem; margin-bottom: 10px; }
                .cta-button { padding: 8px 20px; font-size: 0.75rem; gap: 6px; }
                .nav-button { width: 40px; height: 40px; font-size: 1rem; }
                .exit-button { padding: 6px 12px; font-size: 0.7rem; }
            }
            
            /* Responsivo para altura baixa */
            @media (max-height: 750px) {
                .slide-content { padding: 10px 40px 70px; }
                .premium-badge { padding: 5px 20px; font-size: 0.7rem; margin-bottom: 8px; }
                .logo-section { margin-bottom: 12px; gap: 10px; }
                .logo-section img { height: 55px; }
                .logo-section .company-name { font-size: 2rem; }
                .logo-section .tagline { font-size: 0.75rem; }
                .two-columns { gap: 20px; margin-bottom: 12px; }
                .combined-text-column { font-size: 0.7rem; line-height: 1.4; }
                .combined-text-column p { margin-bottom: 6px; }
                .combined-text-column h3 { font-size: 0.95rem; }
                .combined-text-column .divider { margin: 8px 0; }
                .stats-section { margin-bottom: 12px; gap: 12px; }
                .stat-card { padding: 10px 16px; }
                .stat-card .number { font-size: 1.3rem; }
                .stat-card .label { font-size: 0.7rem; }
                .cta-section { padding: 15px 25px; }
                .cta-section h2 { font-size: 1.1rem; margin-bottom: 6px; }
                .cta-section p { font-size: 0.75rem; margin-bottom: 10px; }
                .cta-button { padding: 10px 24px; font-size: 0.85rem; }
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
                    <div class="brand-text">
                        <div class="company-name">STRUCTA</div>
                        <div class="tagline">Engenharia Patrimonial de Alta Performance para médicos.</div>
                    </div>
                </div>
                
                <!-- Duas Colunas: Foto + Textos Combinados -->
                <div class="two-columns">
                    <div class="photo-column">
                        <img src="/static/medico-foto.jpg" alt="Dr. Patrese Luiz Castro Alves">
                    </div>
                    <div class="combined-text-column">
                        <h3>Dr. Patrese Luiz Castro Alves</h3>
                        <div class="subtitle">Médico ultrassonografista há mais de 12 anos.</div>
                        <div class="credentials">CRM/SP 160.340 • RQE 98.523</div>
                        <p>Sou médico por vocação, ultrassonografista por especialização e, acima de tudo, alguém que sempre acreditou que a medicina deve oferecer <strong>dignidade, estabilidade e propósito.</strong></p>
                        
                        <div class="divider"></div>
                        
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
  `}const zi=new la,zo=Object.assign({"/src/index.tsx":de});let _a=!1;for(const[,e]of Object.entries(zo))e&&(zi.all("*",t=>{let r;try{r=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,r)}),zi.notFound(t=>{let r;try{r=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,r)}),_a=!0);if(!_a)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{zi as default};
