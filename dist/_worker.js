var za=Object.defineProperty;var li=e=>{throw TypeError(e)};var Ma=(e,t,r)=>t in e?za(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var F=(e,t,r)=>Ma(e,typeof t!="symbol"?t+"":t,r),Ct=(e,t,r)=>t.has(e)||li("Cannot "+r);var w=(e,t,r)=>(Ct(e,t,"read from private field"),r?r.call(e):t.get(e)),G=(e,t,r)=>t.has(e)?li("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),q=(e,t,r,i)=>(Ct(e,t,"write to private field"),i?i.call(e,r):t.set(e,r),r),U=(e,t,r)=>(Ct(e,t,"access private method"),r);var di=(e,t,r,i)=>({set _(n){q(e,t,n,r)},get _(){return w(e,t,i)}});import yt from"crypto";import ht from"buffer";import Zr from"stream";import wt from"util";var ui=(e,t,r)=>(i,n)=>{let a=-1;return s(0);async function s(l){if(l<=a)throw new Error("next() called multiple times");a=l;let c,f=!1,o;if(e[l]?(o=e[l][0][0],i.req.routeIndex=l):o=l===e.length&&n||void 0,o)try{c=await o(i,()=>s(l+1))}catch(d){if(d instanceof Error&&t)i.error=d,c=await t(d,i),f=!0;else throw d}else i.finalized===!1&&r&&(c=await r(i));return c&&(i.finalized===!1||f)&&(i.res=c),i}},Ga=Symbol(),Ha=async(e,t=Object.create(null))=>{const{all:r=!1,dot:i=!1}=t,a=(e instanceof ea?e.raw.headers:e.headers).get("Content-Type");return a!=null&&a.startsWith("multipart/form-data")||a!=null&&a.startsWith("application/x-www-form-urlencoded")?Va(e,{all:r,dot:i}):{}};async function Va(e,t){const r=await e.formData();return r?Ua(r,t):{}}function Ua(e,t){const r=Object.create(null);return e.forEach((i,n)=>{t.all||n.endsWith("[]")?Xa(r,n,i):r[n]=i}),t.dot&&Object.entries(r).forEach(([i,n])=>{i.includes(".")&&(Ka(r,i,n),delete r[i])}),r}var Xa=(e,t,r)=>{e[t]!==void 0?Array.isArray(e[t])?e[t].push(r):e[t]=[e[t],r]:t.endsWith("[]")?e[t]=[r]:e[t]=r},Ka=(e,t,r)=>{let i=e;const n=t.split(".");n.forEach((a,s)=>{s===n.length-1?i[a]=r:((!i[a]||typeof i[a]!="object"||Array.isArray(i[a])||i[a]instanceof File)&&(i[a]=Object.create(null)),i=i[a])})},Wn=e=>{const t=e.split("/");return t[0]===""&&t.shift(),t},Wa=e=>{const{groups:t,path:r}=Ya(e),i=Wn(r);return Ja(i,t)},Ya=e=>{const t=[];return e=e.replace(/\{[^}]+\}/g,(r,i)=>{const n=`@${i}`;return t.push([n,r]),n}),{groups:t,path:e}},Ja=(e,t)=>{for(let r=t.length-1;r>=0;r--){const[i]=t[r];for(let n=e.length-1;n>=0;n--)if(e[n].includes(i)){e[n]=e[n].replace(i,t[r][1]);break}}return e},ft={},Za=(e,t)=>{if(e==="*")return"*";const r=e.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);if(r){const i=`${e}#${t}`;return ft[i]||(r[2]?ft[i]=t&&t[0]!==":"&&t[0]!=="*"?[i,r[1],new RegExp(`^${r[2]}(?=/${t})`)]:[e,r[1],new RegExp(`^${r[2]}$`)]:ft[i]=[e,r[1],!0]),ft[i]}return null},Qr=(e,t)=>{try{return t(e)}catch{return e.replace(/(?:%[0-9A-Fa-f]{2})+/g,r=>{try{return t(r)}catch{return r}})}},Qa=e=>Qr(e,decodeURI),Yn=e=>{const t=e.url,r=t.indexOf("/",t.indexOf(":")+4);let i=r;for(;i<t.length;i++){const n=t.charCodeAt(i);if(n===37){const a=t.indexOf("?",i),s=t.indexOf("#",i),l=a===-1?s===-1?void 0:s:s===-1?a:Math.min(a,s),c=t.slice(r,l);return Qa(c.includes("%25")?c.replace(/%25/g,"%2525"):c)}else if(n===63||n===35)break}return t.slice(r,i)},es=e=>{const t=Yn(e);return t.length>1&&t.at(-1)==="/"?t.slice(0,-1):t},_e=(e,t,...r)=>(r.length&&(t=_e(t,...r)),`${(e==null?void 0:e[0])==="/"?"":"/"}${e}${t==="/"?"":`${(e==null?void 0:e.at(-1))==="/"?"":"/"}${(t==null?void 0:t[0])==="/"?t.slice(1):t}`}`),Jn=e=>{if(e.charCodeAt(e.length-1)!==63||!e.includes(":"))return null;const t=e.split("/"),r=[];let i="";return t.forEach(n=>{if(n!==""&&!/\:/.test(n))i+="/"+n;else if(/\:/.test(n))if(/\?/.test(n)){r.length===0&&i===""?r.push("/"):r.push(i);const a=n.replace("?","");i+="/"+a,r.push(i)}else i+="/"+n}),r.filter((n,a,s)=>s.indexOf(n)===a)},Ot=e=>/[%+]/.test(e)?(e.indexOf("+")!==-1&&(e=e.replace(/\+/g," ")),e.indexOf("%")!==-1?Qr(e,Qn):e):e,Zn=(e,t,r)=>{let i;if(!r&&t&&!/[%+]/.test(t)){let s=e.indexOf("?",8);if(s===-1)return;for(e.startsWith(t,s+1)||(s=e.indexOf(`&${t}`,s+1));s!==-1;){const l=e.charCodeAt(s+t.length+1);if(l===61){const c=s+t.length+2,f=e.indexOf("&",c);return Ot(e.slice(c,f===-1?void 0:f))}else if(l==38||isNaN(l))return"";s=e.indexOf(`&${t}`,s+1)}if(i=/[%+]/.test(e),!i)return}const n={};i??(i=/[%+]/.test(e));let a=e.indexOf("?",8);for(;a!==-1;){const s=e.indexOf("&",a+1);let l=e.indexOf("=",a);l>s&&s!==-1&&(l=-1);let c=e.slice(a+1,l===-1?s===-1?void 0:s:l);if(i&&(c=Ot(c)),a=s,c==="")continue;let f;l===-1?f="":(f=e.slice(l+1,s===-1?void 0:s),i&&(f=Ot(f))),r?(n[c]&&Array.isArray(n[c])||(n[c]=[]),n[c].push(f)):n[c]??(n[c]=f)}return t?n[t]:n},ts=Zn,rs=(e,t)=>Zn(e,t,!0),Qn=decodeURIComponent,pi=e=>Qr(e,Qn),ze,ne,be,ta,ra,Wr,ye,Gn,ea=(Gn=class{constructor(e,t="/",r=[[]]){G(this,be);F(this,"raw");G(this,ze);G(this,ne);F(this,"routeIndex",0);F(this,"path");F(this,"bodyCache",{});G(this,ye,e=>{const{bodyCache:t,raw:r}=this,i=t[e];if(i)return i;const n=Object.keys(t)[0];return n?t[n].then(a=>(n==="json"&&(a=JSON.stringify(a)),new Response(a)[e]())):t[e]=r[e]()});this.raw=e,this.path=t,q(this,ne,r),q(this,ze,{})}param(e){return e?U(this,be,ta).call(this,e):U(this,be,ra).call(this)}query(e){return ts(this.url,e)}queries(e){return rs(this.url,e)}header(e){if(e)return this.raw.headers.get(e)??void 0;const t={};return this.raw.headers.forEach((r,i)=>{t[i]=r}),t}async parseBody(e){var t;return(t=this.bodyCache).parsedBody??(t.parsedBody=await Ha(this,e))}json(){return w(this,ye).call(this,"text").then(e=>JSON.parse(e))}text(){return w(this,ye).call(this,"text")}arrayBuffer(){return w(this,ye).call(this,"arrayBuffer")}blob(){return w(this,ye).call(this,"blob")}formData(){return w(this,ye).call(this,"formData")}addValidatedData(e,t){w(this,ze)[e]=t}valid(e){return w(this,ze)[e]}get url(){return this.raw.url}get method(){return this.raw.method}get[Ga](){return w(this,ne)}get matchedRoutes(){return w(this,ne)[0].map(([[,e]])=>e)}get routePath(){return w(this,ne)[0].map(([[,e]])=>e)[this.routeIndex].path}},ze=new WeakMap,ne=new WeakMap,be=new WeakSet,ta=function(e){const t=w(this,ne)[0][this.routeIndex][1][e],r=U(this,be,Wr).call(this,t);return r&&/\%/.test(r)?pi(r):r},ra=function(){const e={},t=Object.keys(w(this,ne)[0][this.routeIndex][1]);for(const r of t){const i=U(this,be,Wr).call(this,w(this,ne)[0][this.routeIndex][1][r]);i!==void 0&&(e[r]=/\%/.test(i)?pi(i):i)}return e},Wr=function(e){return w(this,ne)[1]?w(this,ne)[1][e]:e},ye=new WeakMap,Gn),is={Stringify:1},ia=async(e,t,r,i,n)=>{typeof e=="object"&&!(e instanceof String)&&(e instanceof Promise||(e=e.toString()),e instanceof Promise&&(e=await e));const a=e.callbacks;return a!=null&&a.length?(n?n[0]+=e:n=[e],Promise.all(a.map(l=>l({phase:t,buffer:n,context:i}))).then(l=>Promise.all(l.filter(Boolean).map(c=>ia(c,t,!1,i,n))).then(()=>n[0]))):Promise.resolve(e)},ns="text/plain; charset=UTF-8",Lt=(e,t)=>({"Content-Type":e,...t}),We=(e,t)=>new Response(e,t),tt,rt,xe,Me,he,te,it,Ge,He,Oe,nt,at,we,qe,Hn,as=(Hn=class{constructor(e,t){G(this,we);G(this,tt);G(this,rt);F(this,"env",{});G(this,xe);F(this,"finalized",!1);F(this,"error");G(this,Me);G(this,he);G(this,te);G(this,it);G(this,Ge);G(this,He);G(this,Oe);G(this,nt);G(this,at);F(this,"render",(...e)=>(w(this,Ge)??q(this,Ge,t=>this.html(t)),w(this,Ge).call(this,...e)));F(this,"setLayout",e=>q(this,it,e));F(this,"getLayout",()=>w(this,it));F(this,"setRenderer",e=>{q(this,Ge,e)});F(this,"header",(e,t,r)=>{this.finalized&&q(this,te,We(w(this,te).body,w(this,te)));const i=w(this,te)?w(this,te).headers:w(this,Oe)??q(this,Oe,new Headers);t===void 0?i.delete(e):r!=null&&r.append?i.append(e,t):i.set(e,t)});F(this,"status",e=>{q(this,Me,e)});F(this,"set",(e,t)=>{w(this,xe)??q(this,xe,new Map),w(this,xe).set(e,t)});F(this,"get",e=>w(this,xe)?w(this,xe).get(e):void 0);F(this,"newResponse",(...e)=>U(this,we,qe).call(this,...e));F(this,"body",(e,t,r)=>U(this,we,qe).call(this,e,t,r));F(this,"text",(e,t,r)=>!w(this,Oe)&&!w(this,Me)&&!t&&!r&&!this.finalized?new Response(e):U(this,we,qe).call(this,e,t,Lt(ns,r)));F(this,"json",(e,t,r)=>U(this,we,qe).call(this,JSON.stringify(e),t,Lt("application/json",r)));F(this,"html",(e,t,r)=>{const i=n=>U(this,we,qe).call(this,n,t,Lt("text/html; charset=UTF-8",r));return typeof e=="object"?ia(e,is.Stringify,!1,{}).then(i):i(e)});F(this,"redirect",(e,t)=>{const r=String(e);return this.header("Location",/[^\x00-\xFF]/.test(r)?encodeURI(r):r),this.newResponse(null,t??302)});F(this,"notFound",()=>(w(this,He)??q(this,He,()=>We()),w(this,He).call(this,this)));q(this,tt,e),t&&(q(this,he,t.executionCtx),this.env=t.env,q(this,He,t.notFoundHandler),q(this,at,t.path),q(this,nt,t.matchResult))}get req(){return w(this,rt)??q(this,rt,new ea(w(this,tt),w(this,at),w(this,nt))),w(this,rt)}get event(){if(w(this,he)&&"respondWith"in w(this,he))return w(this,he);throw Error("This context has no FetchEvent")}get executionCtx(){if(w(this,he))return w(this,he);throw Error("This context has no ExecutionContext")}get res(){return w(this,te)||q(this,te,We(null,{headers:w(this,Oe)??q(this,Oe,new Headers)}))}set res(e){if(w(this,te)&&e){e=We(e.body,e);for(const[t,r]of w(this,te).headers.entries())if(t!=="content-type")if(t==="set-cookie"){const i=w(this,te).headers.getSetCookie();e.headers.delete("set-cookie");for(const n of i)e.headers.append("set-cookie",n)}else e.headers.set(t,r)}q(this,te,e),this.finalized=!0}get var(){return w(this,xe)?Object.fromEntries(w(this,xe)):{}}},tt=new WeakMap,rt=new WeakMap,xe=new WeakMap,Me=new WeakMap,he=new WeakMap,te=new WeakMap,it=new WeakMap,Ge=new WeakMap,He=new WeakMap,Oe=new WeakMap,nt=new WeakMap,at=new WeakMap,we=new WeakSet,qe=function(e,t,r){const i=w(this,te)?new Headers(w(this,te).headers):w(this,Oe)??new Headers;if(typeof t=="object"&&"headers"in t){const a=t.headers instanceof Headers?t.headers:new Headers(t.headers);for(const[s,l]of a)s.toLowerCase()==="set-cookie"?i.append(s,l):i.set(s,l)}if(r)for(const[a,s]of Object.entries(r))if(typeof s=="string")i.set(a,s);else{i.delete(a);for(const l of s)i.append(a,l)}const n=typeof t=="number"?t:(t==null?void 0:t.status)??w(this,Me);return We(e,{status:n,headers:i})},Hn),Y="ALL",ss="all",os=["get","post","put","delete","options","patch"],na="Can not add a route since the matcher is already built.",aa=class extends Error{},cs="__COMPOSED_HANDLER",fs=e=>e.text("404 Not Found",404),xi=(e,t)=>{if("getResponse"in e){const r=e.getResponse();return t.newResponse(r.body,r)}return console.error(e),t.text("Internal Server Error",500)},se,J,sa,oe,Te,ut,pt,Ve,ls=(Ve=class{constructor(t={}){G(this,J);F(this,"get");F(this,"post");F(this,"put");F(this,"delete");F(this,"options");F(this,"patch");F(this,"all");F(this,"on");F(this,"use");F(this,"router");F(this,"getPath");F(this,"_basePath","/");G(this,se,"/");F(this,"routes",[]);G(this,oe,fs);F(this,"errorHandler",xi);F(this,"onError",t=>(this.errorHandler=t,this));F(this,"notFound",t=>(q(this,oe,t),this));F(this,"fetch",(t,...r)=>U(this,J,pt).call(this,t,r[1],r[0],t.method));F(this,"request",(t,r,i,n)=>t instanceof Request?this.fetch(r?new Request(t,r):t,i,n):(t=t.toString(),this.fetch(new Request(/^https?:\/\//.test(t)?t:`http://localhost${_e("/",t)}`,r),i,n)));F(this,"fire",()=>{addEventListener("fetch",t=>{t.respondWith(U(this,J,pt).call(this,t.request,t,void 0,t.request.method))})});[...os,ss].forEach(a=>{this[a]=(s,...l)=>(typeof s=="string"?q(this,se,s):U(this,J,Te).call(this,a,w(this,se),s),l.forEach(c=>{U(this,J,Te).call(this,a,w(this,se),c)}),this)}),this.on=(a,s,...l)=>{for(const c of[s].flat()){q(this,se,c);for(const f of[a].flat())l.map(o=>{U(this,J,Te).call(this,f.toUpperCase(),w(this,se),o)})}return this},this.use=(a,...s)=>(typeof a=="string"?q(this,se,a):(q(this,se,"*"),s.unshift(a)),s.forEach(l=>{U(this,J,Te).call(this,Y,w(this,se),l)}),this);const{strict:i,...n}=t;Object.assign(this,n),this.getPath=i??!0?t.getPath??Yn:es}route(t,r){const i=this.basePath(t);return r.routes.map(n=>{var s;let a;r.errorHandler===xi?a=n.handler:(a=async(l,c)=>(await ui([],r.errorHandler)(l,()=>n.handler(l,c))).res,a[cs]=n.handler),U(s=i,J,Te).call(s,n.method,n.path,a)}),this}basePath(t){const r=U(this,J,sa).call(this);return r._basePath=_e(this._basePath,t),r}mount(t,r,i){let n,a;i&&(typeof i=="function"?a=i:(a=i.optionHandler,i.replaceRequest===!1?n=c=>c:n=i.replaceRequest));const s=a?c=>{const f=a(c);return Array.isArray(f)?f:[f]}:c=>{let f;try{f=c.executionCtx}catch{}return[c.env,f]};n||(n=(()=>{const c=_e(this._basePath,t),f=c==="/"?0:c.length;return o=>{const d=new URL(o.url);return d.pathname=d.pathname.slice(f)||"/",new Request(d,o)}})());const l=async(c,f)=>{const o=await r(n(c.req.raw),...s(c));if(o)return o;await f()};return U(this,J,Te).call(this,Y,_e(t,"*"),l),this}},se=new WeakMap,J=new WeakSet,sa=function(){const t=new Ve({router:this.router,getPath:this.getPath});return t.errorHandler=this.errorHandler,q(t,oe,w(this,oe)),t.routes=this.routes,t},oe=new WeakMap,Te=function(t,r,i){t=t.toUpperCase(),r=_e(this._basePath,r);const n={basePath:this._basePath,path:r,method:t,handler:i};this.router.add(t,r,[i,n]),this.routes.push(n)},ut=function(t,r){if(t instanceof Error)return this.errorHandler(t,r);throw t},pt=function(t,r,i,n){if(n==="HEAD")return(async()=>new Response(null,await U(this,J,pt).call(this,t,r,i,"GET")))();const a=this.getPath(t,{env:i}),s=this.router.match(n,a),l=new as(t,{path:a,matchResult:s,env:i,executionCtx:r,notFoundHandler:w(this,oe)});if(s[0].length===1){let f;try{f=s[0][0][0][0](l,async()=>{l.res=await w(this,oe).call(this,l)})}catch(o){return U(this,J,ut).call(this,o,l)}return f instanceof Promise?f.then(o=>o||(l.finalized?l.res:w(this,oe).call(this,l))).catch(o=>U(this,J,ut).call(this,o,l)):f??w(this,oe).call(this,l)}const c=ui(s[0],this.errorHandler,w(this,oe));return(async()=>{try{const f=await c(l);if(!f.finalized)throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");return f.res}catch(f){return U(this,J,ut).call(this,f,l)}})()},Ve),oa=[];function ds(e,t){const r=this.buildAllMatchers(),i=((n,a)=>{const s=r[n]||r[Y],l=s[2][a];if(l)return l;const c=a.match(s[0]);if(!c)return[[],oa];const f=c.indexOf("",1);return[s[1][f],c]});return this.match=i,i(e,t)}var mt="[^/]+",Je=".*",Ze="(?:|/.*)",Fe=Symbol(),us=new Set(".\\+*[^]$()");function ps(e,t){return e.length===1?t.length===1?e<t?-1:1:-1:t.length===1||e===Je||e===Ze?1:t===Je||t===Ze?-1:e===mt?1:t===mt?-1:e.length===t.length?e<t?-1:1:t.length-e.length}var Le,je,ce,Ne,xs=(Ne=class{constructor(){G(this,Le);G(this,je);G(this,ce,Object.create(null))}insert(t,r,i,n,a){if(t.length===0){if(w(this,Le)!==void 0)throw Fe;if(a)return;q(this,Le,r);return}const[s,...l]=t,c=s==="*"?l.length===0?["","",Je]:["","",mt]:s==="/*"?["","",Ze]:s.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);let f;if(c){const o=c[1];let d=c[2]||mt;if(o&&c[2]&&(d===".*"||(d=d.replace(/^\((?!\?:)(?=[^)]+\)$)/,"(?:"),/\((?!\?:)/.test(d))))throw Fe;if(f=w(this,ce)[d],!f){if(Object.keys(w(this,ce)).some(u=>u!==Je&&u!==Ze))throw Fe;if(a)return;f=w(this,ce)[d]=new Ne,o!==""&&q(f,je,n.varIndex++)}!a&&o!==""&&i.push([o,w(f,je)])}else if(f=w(this,ce)[s],!f){if(Object.keys(w(this,ce)).some(o=>o.length>1&&o!==Je&&o!==Ze))throw Fe;if(a)return;f=w(this,ce)[s]=new Ne}f.insert(l,r,i,n,a)}buildRegExpStr(){const r=Object.keys(w(this,ce)).sort(ps).map(i=>{const n=w(this,ce)[i];return(typeof w(n,je)=="number"?`(${i})@${w(n,je)}`:us.has(i)?`\\${i}`:i)+n.buildRegExpStr()});return typeof w(this,Le)=="number"&&r.unshift(`#${w(this,Le)}`),r.length===0?"":r.length===1?r[0]:"(?:"+r.join("|")+")"}},Le=new WeakMap,je=new WeakMap,ce=new WeakMap,Ne),bt,st,Vn,hs=(Vn=class{constructor(){G(this,bt,{varIndex:0});G(this,st,new xs)}insert(e,t,r){const i=[],n=[];for(let s=0;;){let l=!1;if(e=e.replace(/\{[^}]+\}/g,c=>{const f=`@\\${s}`;return n[s]=[f,c],s++,l=!0,f}),!l)break}const a=e.match(/(?::[^\/]+)|(?:\/\*$)|./g)||[];for(let s=n.length-1;s>=0;s--){const[l]=n[s];for(let c=a.length-1;c>=0;c--)if(a[c].indexOf(l)!==-1){a[c]=a[c].replace(l,n[s][1]);break}}return w(this,st).insert(a,t,i,w(this,bt),r),i}buildRegExp(){let e=w(this,st).buildRegExpStr();if(e==="")return[/^$/,[],[]];let t=0;const r=[],i=[];return e=e.replace(/#(\d+)|@(\d+)|\.\*\$/g,(n,a,s)=>a!==void 0?(r[++t]=Number(a),"$()"):(s!==void 0&&(i[Number(s)]=++t),"")),[new RegExp(`^${e}`),r,i]}},bt=new WeakMap,st=new WeakMap,Vn),ms=[/^$/,[],Object.create(null)],xt=Object.create(null);function ca(e){return xt[e]??(xt[e]=new RegExp(e==="*"?"":`^${e.replace(/\/\*$|([.\\+*[^\]$()])/g,(t,r)=>r?`\\${r}`:"(?:|/.*)")}$`))}function gs(){xt=Object.create(null)}function bs(e){var f;const t=new hs,r=[];if(e.length===0)return ms;const i=e.map(o=>[!/\*|\/:/.test(o[0]),...o]).sort(([o,d],[u,v])=>o?1:u?-1:d.length-v.length),n=Object.create(null);for(let o=0,d=-1,u=i.length;o<u;o++){const[v,g,b]=i[o];v?n[g]=[b.map(([p])=>[p,Object.create(null)]),oa]:d++;let A;try{A=t.insert(g,d,v)}catch(p){throw p===Fe?new aa(g):p}v||(r[d]=b.map(([p,h])=>{const m=Object.create(null);for(h-=1;h>=0;h--){const[S,P]=A[h];m[S]=P}return[p,m]}))}const[a,s,l]=t.buildRegExp();for(let o=0,d=r.length;o<d;o++)for(let u=0,v=r[o].length;u<v;u++){const g=(f=r[o][u])==null?void 0:f[1];if(!g)continue;const b=Object.keys(g);for(let A=0,p=b.length;A<p;A++)g[b[A]]=l[g[b[A]]]}const c=[];for(const o in s)c[o]=r[s[o]];return[a,c,n]}function De(e,t){if(e){for(const r of Object.keys(e).sort((i,n)=>n.length-i.length))if(ca(r).test(t))return[...e[r]]}}var Ee,Se,vt,fa,Un,vs=(Un=class{constructor(){G(this,vt);F(this,"name","RegExpRouter");G(this,Ee);G(this,Se);F(this,"match",ds);q(this,Ee,{[Y]:Object.create(null)}),q(this,Se,{[Y]:Object.create(null)})}add(e,t,r){var l;const i=w(this,Ee),n=w(this,Se);if(!i||!n)throw new Error(na);i[e]||[i,n].forEach(c=>{c[e]=Object.create(null),Object.keys(c[Y]).forEach(f=>{c[e][f]=[...c[Y][f]]})}),t==="/*"&&(t="*");const a=(t.match(/\/:/g)||[]).length;if(/\*$/.test(t)){const c=ca(t);e===Y?Object.keys(i).forEach(f=>{var o;(o=i[f])[t]||(o[t]=De(i[f],t)||De(i[Y],t)||[])}):(l=i[e])[t]||(l[t]=De(i[e],t)||De(i[Y],t)||[]),Object.keys(i).forEach(f=>{(e===Y||e===f)&&Object.keys(i[f]).forEach(o=>{c.test(o)&&i[f][o].push([r,a])})}),Object.keys(n).forEach(f=>{(e===Y||e===f)&&Object.keys(n[f]).forEach(o=>c.test(o)&&n[f][o].push([r,a]))});return}const s=Jn(t)||[t];for(let c=0,f=s.length;c<f;c++){const o=s[c];Object.keys(n).forEach(d=>{var u;(e===Y||e===d)&&((u=n[d])[o]||(u[o]=[...De(i[d],o)||De(i[Y],o)||[]]),n[d][o].push([r,a-f+c+1]))})}}buildAllMatchers(){const e=Object.create(null);return Object.keys(w(this,Se)).concat(Object.keys(w(this,Ee))).forEach(t=>{e[t]||(e[t]=U(this,vt,fa).call(this,t))}),q(this,Ee,q(this,Se,void 0)),gs(),e}},Ee=new WeakMap,Se=new WeakMap,vt=new WeakSet,fa=function(e){const t=[];let r=e===Y;return[w(this,Ee),w(this,Se)].forEach(i=>{const n=i[e]?Object.keys(i[e]).map(a=>[a,i[e][a]]):[];n.length!==0?(r||(r=!0),t.push(...n)):e!==Y&&t.push(...Object.keys(i[Y]).map(a=>[a,i[Y][a]]))}),r?bs(t):null},Un),Re,me,Xn,ys=(Xn=class{constructor(e){F(this,"name","SmartRouter");G(this,Re,[]);G(this,me,[]);q(this,Re,e.routers)}add(e,t,r){if(!w(this,me))throw new Error(na);w(this,me).push([e,t,r])}match(e,t){if(!w(this,me))throw new Error("Fatal error");const r=w(this,Re),i=w(this,me),n=r.length;let a=0,s;for(;a<n;a++){const l=r[a];try{for(let c=0,f=i.length;c<f;c++)l.add(...i[c]);s=l.match(e,t)}catch(c){if(c instanceof aa)continue;throw c}this.match=l.match.bind(l),q(this,Re,[l]),q(this,me,void 0);break}if(a===n)throw new Error("Fatal error");return this.name=`SmartRouter + ${this.activeRouter.name}`,s}get activeRouter(){if(w(this,me)||w(this,Re).length!==1)throw new Error("No active router has been determined yet.");return w(this,Re)[0]}},Re=new WeakMap,me=new WeakMap,Xn),Ye=Object.create(null),ws=e=>{for(const t in e)return!0;return!1},Ae,Q,$e,Ue,Z,ge,Ce,Xe,Es=(Xe=class{constructor(t,r,i){G(this,ge);G(this,Ae);G(this,Q);G(this,$e);G(this,Ue,0);G(this,Z,Ye);if(q(this,Q,i||Object.create(null)),q(this,Ae,[]),t&&r){const n=Object.create(null);n[t]={handler:r,possibleKeys:[],score:0},q(this,Ae,[n])}q(this,$e,[])}insert(t,r,i){q(this,Ue,++di(this,Ue)._);let n=this;const a=Wa(r),s=[];for(let l=0,c=a.length;l<c;l++){const f=a[l],o=a[l+1],d=Za(f,o),u=Array.isArray(d)?d[0]:f;if(u in w(n,Q)){n=w(n,Q)[u],d&&s.push(d[1]);continue}w(n,Q)[u]=new Xe,d&&(w(n,$e).push(d),s.push(d[1])),n=w(n,Q)[u]}return w(n,Ae).push({[t]:{handler:i,possibleKeys:s.filter((l,c,f)=>f.indexOf(l)===c),score:w(this,Ue)}}),n}search(t,r){var o;const i=[];q(this,Z,Ye);let a=[this];const s=Wn(r),l=[],c=s.length;let f=null;for(let d=0;d<c;d++){const u=s[d],v=d===c-1,g=[];for(let A=0,p=a.length;A<p;A++){const h=a[A],m=w(h,Q)[u];m&&(q(m,Z,w(h,Z)),v?(w(m,Q)["*"]&&U(this,ge,Ce).call(this,i,w(m,Q)["*"],t,w(h,Z)),U(this,ge,Ce).call(this,i,m,t,w(h,Z))):g.push(m));for(let S=0,P=w(h,$e).length;S<P;S++){const I=w(h,$e)[S],L=w(h,Z)===Ye?{}:{...w(h,Z)};if(I==="*"){const H=w(h,Q)["*"];H&&(U(this,ge,Ce).call(this,i,H,t,w(h,Z)),q(H,Z,L),g.push(H));continue}const[R,N,k]=I;if(!u&&!(k instanceof RegExp))continue;const D=w(h,Q)[R];if(k instanceof RegExp){if(f===null){f=new Array(c);let E=r[0]==="/"?1:0;for(let x=0;x<c;x++)f[x]=E,E+=s[x].length+1}const H=r.substring(f[d]),T=k.exec(H);if(T){if(L[N]=T[0],U(this,ge,Ce).call(this,i,D,t,w(h,Z),L),ws(w(D,Q))){q(D,Z,L);const E=((o=T[0].match(/\//))==null?void 0:o.length)??0;(l[E]||(l[E]=[])).push(D)}continue}}(k===!0||k.test(u))&&(L[N]=u,v?(U(this,ge,Ce).call(this,i,D,t,L,w(h,Z)),w(D,Q)["*"]&&U(this,ge,Ce).call(this,i,w(D,Q)["*"],t,L,w(h,Z))):(q(D,Z,L),g.push(D)))}}const b=l.shift();a=b?g.concat(b):g}return i.length>1&&i.sort((d,u)=>d.score-u.score),[i.map(({handler:d,params:u})=>[d,u])]}},Ae=new WeakMap,Q=new WeakMap,$e=new WeakMap,Ue=new WeakMap,Z=new WeakMap,ge=new WeakSet,Ce=function(t,r,i,n,a){for(let s=0,l=w(r,Ae).length;s<l;s++){const c=w(r,Ae)[s],f=c[i]||c[Y],o={};if(f!==void 0&&(f.params=Object.create(null),t.push(f),n!==Ye||a&&a!==Ye))for(let d=0,u=f.possibleKeys.length;d<u;d++){const v=f.possibleKeys[d],g=o[f.score];f.params[v]=a!=null&&a[v]&&!g?a[v]:n[v]??(a==null?void 0:a[v]),o[f.score]=!0}}},Xe),Pe,Kn,Ss=(Kn=class{constructor(){F(this,"name","TrieRouter");G(this,Pe);q(this,Pe,new Es)}add(e,t,r){const i=Jn(t);if(i){for(let n=0,a=i.length;n<a;n++)w(this,Pe).insert(e,i[n],r);return}w(this,Pe).insert(e,t,r)}match(e,t){return w(this,Pe).search(e,t)}},Pe=new WeakMap,Kn),la=class extends ls{constructor(e={}){super(e),this.router=e.router??new ys({routers:[new vs,new Ss]})}},Rs=e=>{const r={...{origin:"*",allowMethods:["GET","HEAD","PUT","POST","DELETE","PATCH"],allowHeaders:[],exposeHeaders:[]},...e},i=(a=>typeof a=="string"?a==="*"?()=>a:s=>a===s?s:null:typeof a=="function"?a:s=>a.includes(s)?s:null)(r.origin),n=(a=>typeof a=="function"?a:Array.isArray(a)?()=>a:()=>[])(r.allowMethods);return async function(s,l){var o;function c(d,u){s.res.headers.set(d,u)}const f=await i(s.req.header("origin")||"",s);if(f&&c("Access-Control-Allow-Origin",f),r.credentials&&c("Access-Control-Allow-Credentials","true"),(o=r.exposeHeaders)!=null&&o.length&&c("Access-Control-Expose-Headers",r.exposeHeaders.join(",")),s.req.method==="OPTIONS"){r.origin!=="*"&&c("Vary","Origin"),r.maxAge!=null&&c("Access-Control-Max-Age",r.maxAge.toString());const d=await n(s.req.header("origin")||"",s);d.length&&c("Access-Control-Allow-Methods",d.join(","));let u=r.allowHeaders;if(!(u!=null&&u.length)){const v=s.req.header("Access-Control-Request-Headers");v&&(u=v.split(/\s*,\s*/))}return u!=null&&u.length&&(c("Access-Control-Allow-Headers",u.join(",")),s.res.headers.append("Vary","Access-Control-Request-Headers")),s.res.headers.delete("Content-Length"),s.res.headers.delete("Content-Type"),new Response(null,{headers:s.res.headers,status:204,statusText:"No Content"})}await l(),r.origin!=="*"&&s.header("Vary","Origin",{append:!0})}},As=/^\s*(?:text\/(?!event-stream(?:[;\s]|$))[^;\s]+|application\/(?:javascript|json|xml|xml-dtd|ecmascript|dart|postscript|rtf|tar|toml|vnd\.dart|vnd\.ms-fontobject|vnd\.ms-opentype|wasm|x-httpd-php|x-javascript|x-ns-proxy-autoconfig|x-sh|x-tar|x-virtualbox-hdd|x-virtualbox-ova|x-virtualbox-ovf|x-virtualbox-vbox|x-virtualbox-vdi|x-virtualbox-vhd|x-virtualbox-vmdk|x-www-form-urlencoded)|font\/(?:otf|ttf)|image\/(?:bmp|vnd\.adobe\.photoshop|vnd\.microsoft\.icon|vnd\.ms-dds|x-icon|x-ms-bmp)|message\/rfc822|model\/gltf-binary|x-shader\/x-fragment|x-shader\/x-vertex|[^;\s]+?\+(?:json|text|xml|yaml))(?:[;\s]|$)/i,hi=(e,t=Ts)=>{const r=/\.([a-zA-Z0-9]+?)$/,i=e.match(r);if(!i)return;let n=t[i[1]];return n&&n.startsWith("text")&&(n+="; charset=utf-8"),n},Is={aac:"audio/aac",avi:"video/x-msvideo",avif:"image/avif",av1:"video/av1",bin:"application/octet-stream",bmp:"image/bmp",css:"text/css",csv:"text/csv",eot:"application/vnd.ms-fontobject",epub:"application/epub+zip",gif:"image/gif",gz:"application/gzip",htm:"text/html",html:"text/html",ico:"image/x-icon",ics:"text/calendar",jpeg:"image/jpeg",jpg:"image/jpeg",js:"text/javascript",json:"application/json",jsonld:"application/ld+json",map:"application/json",mid:"audio/x-midi",midi:"audio/x-midi",mjs:"text/javascript",mp3:"audio/mpeg",mp4:"video/mp4",mpeg:"video/mpeg",oga:"audio/ogg",ogv:"video/ogg",ogx:"application/ogg",opus:"audio/opus",otf:"font/otf",pdf:"application/pdf",png:"image/png",rtf:"application/rtf",svg:"image/svg+xml",tif:"image/tiff",tiff:"image/tiff",ts:"video/mp2t",ttf:"font/ttf",txt:"text/plain",wasm:"application/wasm",webm:"video/webm",weba:"audio/webm",webmanifest:"application/manifest+json",webp:"image/webp",woff:"font/woff",woff2:"font/woff2",xhtml:"application/xhtml+xml",xml:"application/xml",zip:"application/zip","3gp":"video/3gpp","3g2":"video/3gpp2",gltf:"model/gltf+json",glb:"model/gltf-binary"},Ts=Is,Cs=(...e)=>{let t=e.filter(n=>n!=="").join("/");t=t.replace(new RegExp("(?<=\\/)\\/+","g"),"");const r=t.split("/"),i=[];for(const n of r)n===".."&&i.length>0&&i.at(-1)!==".."?i.pop():n!=="."&&i.push(n);return i.join("/")||"."},da={br:".br",zstd:".zst",gzip:".gz"},Os=Object.keys(da),Ls="index.html",js=e=>{const t=e.root??"./",r=e.path,i=e.join??Cs;return async(n,a)=>{var o,d,u,v;if(n.finalized)return a();let s;if(e.path)s=e.path;else try{if(s=decodeURIComponent(n.req.path),/(?:^|[\/\\])\.\.(?:$|[\/\\])/.test(s))throw new Error}catch{return await((o=e.onNotFound)==null?void 0:o.call(e,n.req.path,n)),a()}let l=i(t,!r&&e.rewriteRequestPath?e.rewriteRequestPath(s):s);e.isDir&&await e.isDir(l)&&(l=i(l,Ls));const c=e.getContent;let f=await c(l,n);if(f instanceof Response)return n.newResponse(f.body,f);if(f){const g=e.mimes&&hi(l,e.mimes)||hi(l);if(n.header("Content-Type",g||"application/octet-stream"),e.precompressed&&(!g||As.test(g))){const b=new Set((d=n.req.header("Accept-Encoding"))==null?void 0:d.split(",").map(A=>A.trim()));for(const A of Os){if(!b.has(A))continue;const p=await c(l+da[A],n);if(p){f=p,n.header("Content-Encoding",A),n.header("Vary","Accept-Encoding",{append:!0});break}}}return await((u=e.onFound)==null?void 0:u.call(e,l,n)),n.body(f)}await((v=e.onNotFound)==null?void 0:v.call(e,l,n)),await a()}},$s=async(e,t)=>{let r;t&&t.manifest?typeof t.manifest=="string"?r=JSON.parse(t.manifest):r=t.manifest:typeof __STATIC_CONTENT_MANIFEST=="string"?r=JSON.parse(__STATIC_CONTENT_MANIFEST):r=__STATIC_CONTENT_MANIFEST;let i;t&&t.namespace?i=t.namespace:i=__STATIC_CONTENT;const n=r[e];if(!n)return null;const a=await i.get(n,{type:"stream"});return a||null},Ps=e=>async function(r,i){return js({...e,getContent:async a=>$s(a,{manifest:e.manifest,namespace:e.namespace?e.namespace:r.env?r.env.__STATIC_CONTENT:void 0})})(r,i)},Ns=e=>Ps(e),Yr=null;function Ds(e){try{return crypto.getRandomValues(new Uint8Array(e))}catch{}try{return yt.randomBytes(e)}catch{}if(!Yr)throw Error("Neither WebCryptoAPI nor a crypto module is available. Use bcrypt.setRandomFallback to set an alternative");return Yr(e)}function ks(e){Yr=e}function ei(e,t){if(e=e||ti,typeof e!="number")throw Error("Illegal arguments: "+typeof e+", "+typeof t);e<4?e=4:e>31&&(e=31);var r=[];return r.push("$2b$"),e<10&&r.push("0"),r.push(e.toString()),r.push("$"),r.push(gt(Ds(Qe),Qe)),r.join("")}function ua(e,t,r){if(typeof t=="function"&&(r=t,t=void 0),typeof e=="function"&&(r=e,e=void 0),typeof e>"u")e=ti;else if(typeof e!="number")throw Error("illegal arguments: "+typeof e);function i(n){fe(function(){try{n(null,ei(e))}catch(a){n(a)}})}if(r){if(typeof r!="function")throw Error("Illegal callback: "+typeof r);i(r)}else return new Promise(function(n,a){i(function(s,l){if(s){a(s);return}n(l)})})}function pa(e,t){if(typeof t>"u"&&(t=ti),typeof t=="number"&&(t=ei(t)),typeof e!="string"||typeof t!="string")throw Error("Illegal arguments: "+typeof e+", "+typeof t);return Jr(e,t)}function xa(e,t,r,i){function n(a){typeof e=="string"&&typeof t=="number"?ua(t,function(s,l){Jr(e,l,a,i)}):typeof e=="string"&&typeof t=="string"?Jr(e,t,a,i):fe(a.bind(this,Error("Illegal arguments: "+typeof e+", "+typeof t)))}if(r){if(typeof r!="function")throw Error("Illegal callback: "+typeof r);n(r)}else return new Promise(function(a,s){n(function(l,c){if(l){s(l);return}a(c)})})}function ha(e,t){for(var r=e.length^t.length,i=0;i<e.length;++i)r|=e.charCodeAt(i)^t.charCodeAt(i);return r===0}function _s(e,t){if(typeof e!="string"||typeof t!="string")throw Error("Illegal arguments: "+typeof e+", "+typeof t);return t.length!==60?!1:ha(pa(e,t.substring(0,t.length-31)),t)}function qs(e,t,r,i){function n(a){if(typeof e!="string"||typeof t!="string"){fe(a.bind(this,Error("Illegal arguments: "+typeof e+", "+typeof t)));return}if(t.length!==60){fe(a.bind(this,null,!1));return}xa(e,t.substring(0,29),function(s,l){s?a(s):a(null,ha(l,t))},i)}if(r){if(typeof r!="function")throw Error("Illegal callback: "+typeof r);n(r)}else return new Promise(function(a,s){n(function(l,c){if(l){s(l);return}a(c)})})}function Fs(e){if(typeof e!="string")throw Error("Illegal arguments: "+typeof e);return parseInt(e.split("$")[2],10)}function Bs(e){if(typeof e!="string")throw Error("Illegal arguments: "+typeof e);if(e.length!==60)throw Error("Illegal hash length: "+e.length+" != 60");return e.substring(0,29)}function zs(e){if(typeof e!="string")throw Error("Illegal arguments: "+typeof e);return ma(e)>72}var fe=typeof setImmediate=="function"?setImmediate:typeof scheduler=="object"&&typeof scheduler.postTask=="function"?scheduler.postTask.bind(scheduler):setTimeout;function ma(e){for(var t=0,r=0,i=0;i<e.length;++i)r=e.charCodeAt(i),r<128?t+=1:r<2048?t+=2:(r&64512)===55296&&(e.charCodeAt(i+1)&64512)===56320?(++i,t+=4):t+=3;return t}function Ms(e){for(var t=0,r,i,n=new Array(ma(e)),a=0,s=e.length;a<s;++a)r=e.charCodeAt(a),r<128?n[t++]=r:r<2048?(n[t++]=r>>6|192,n[t++]=r&63|128):(r&64512)===55296&&((i=e.charCodeAt(a+1))&64512)===56320?(r=65536+((r&1023)<<10)+(i&1023),++a,n[t++]=r>>18|240,n[t++]=r>>12&63|128,n[t++]=r>>6&63|128,n[t++]=r&63|128):(n[t++]=r>>12|224,n[t++]=r>>6&63|128,n[t++]=r&63|128);return n}var ke="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),ve=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,54,55,56,57,58,59,60,61,62,63,-1,-1,-1,-1,-1,-1,-1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,-1,-1,-1,-1,-1,-1,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,-1,-1,-1,-1,-1];function gt(e,t){var r=0,i=[],n,a;if(t<=0||t>e.length)throw Error("Illegal len: "+t);for(;r<t;){if(n=e[r++]&255,i.push(ke[n>>2&63]),n=(n&3)<<4,r>=t){i.push(ke[n&63]);break}if(a=e[r++]&255,n|=a>>4&15,i.push(ke[n&63]),n=(a&15)<<2,r>=t){i.push(ke[n&63]);break}a=e[r++]&255,n|=a>>6&3,i.push(ke[n&63]),i.push(ke[a&63])}return i.join("")}function ga(e,t){var r=0,i=e.length,n=0,a=[],s,l,c,f,o,d;if(t<=0)throw Error("Illegal len: "+t);for(;r<i-1&&n<t&&(d=e.charCodeAt(r++),s=d<ve.length?ve[d]:-1,d=e.charCodeAt(r++),l=d<ve.length?ve[d]:-1,!(s==-1||l==-1||(o=s<<2>>>0,o|=(l&48)>>4,a.push(String.fromCharCode(o)),++n>=t||r>=i)||(d=e.charCodeAt(r++),c=d<ve.length?ve[d]:-1,c==-1)||(o=(l&15)<<4>>>0,o|=(c&60)>>2,a.push(String.fromCharCode(o)),++n>=t||r>=i)));)d=e.charCodeAt(r++),f=d<ve.length?ve[d]:-1,o=(c&3)<<6>>>0,o|=f,a.push(String.fromCharCode(o)),++n;var u=[];for(r=0;r<n;r++)u.push(a[r].charCodeAt(0));return u}var Qe=16,ti=10,Gs=16,Hs=100,mi=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],gi=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],ba=[1332899944,1700884034,1701343084,1684370003,1668446532,1869963892];function et(e,t,r,i){var n,a=e[t],s=e[t+1];return a^=r[0],n=i[a>>>24],n+=i[256|a>>16&255],n^=i[512|a>>8&255],n+=i[768|a&255],s^=n^r[1],n=i[s>>>24],n+=i[256|s>>16&255],n^=i[512|s>>8&255],n+=i[768|s&255],a^=n^r[2],n=i[a>>>24],n+=i[256|a>>16&255],n^=i[512|a>>8&255],n+=i[768|a&255],s^=n^r[3],n=i[s>>>24],n+=i[256|s>>16&255],n^=i[512|s>>8&255],n+=i[768|s&255],a^=n^r[4],n=i[a>>>24],n+=i[256|a>>16&255],n^=i[512|a>>8&255],n+=i[768|a&255],s^=n^r[5],n=i[s>>>24],n+=i[256|s>>16&255],n^=i[512|s>>8&255],n+=i[768|s&255],a^=n^r[6],n=i[a>>>24],n+=i[256|a>>16&255],n^=i[512|a>>8&255],n+=i[768|a&255],s^=n^r[7],n=i[s>>>24],n+=i[256|s>>16&255],n^=i[512|s>>8&255],n+=i[768|s&255],a^=n^r[8],n=i[a>>>24],n+=i[256|a>>16&255],n^=i[512|a>>8&255],n+=i[768|a&255],s^=n^r[9],n=i[s>>>24],n+=i[256|s>>16&255],n^=i[512|s>>8&255],n+=i[768|s&255],a^=n^r[10],n=i[a>>>24],n+=i[256|a>>16&255],n^=i[512|a>>8&255],n+=i[768|a&255],s^=n^r[11],n=i[s>>>24],n+=i[256|s>>16&255],n^=i[512|s>>8&255],n+=i[768|s&255],a^=n^r[12],n=i[a>>>24],n+=i[256|a>>16&255],n^=i[512|a>>8&255],n+=i[768|a&255],s^=n^r[13],n=i[s>>>24],n+=i[256|s>>16&255],n^=i[512|s>>8&255],n+=i[768|s&255],a^=n^r[14],n=i[a>>>24],n+=i[256|a>>16&255],n^=i[512|a>>8&255],n+=i[768|a&255],s^=n^r[15],n=i[s>>>24],n+=i[256|s>>16&255],n^=i[512|s>>8&255],n+=i[768|s&255],a^=n^r[16],e[t]=s^r[Gs+1],e[t+1]=a,e}function Be(e,t){for(var r=0,i=0;r<4;++r)i=i<<8|e[t]&255,t=(t+1)%e.length;return{key:i,offp:t}}function bi(e,t,r){for(var i=0,n=[0,0],a=t.length,s=r.length,l,c=0;c<a;c++)l=Be(e,i),i=l.offp,t[c]=t[c]^l.key;for(c=0;c<a;c+=2)n=et(n,0,t,r),t[c]=n[0],t[c+1]=n[1];for(c=0;c<s;c+=2)n=et(n,0,t,r),r[c]=n[0],r[c+1]=n[1]}function Vs(e,t,r,i){for(var n=0,a=[0,0],s=r.length,l=i.length,c,f=0;f<s;f++)c=Be(t,n),n=c.offp,r[f]=r[f]^c.key;for(n=0,f=0;f<s;f+=2)c=Be(e,n),n=c.offp,a[0]^=c.key,c=Be(e,n),n=c.offp,a[1]^=c.key,a=et(a,0,r,i),r[f]=a[0],r[f+1]=a[1];for(f=0;f<l;f+=2)c=Be(e,n),n=c.offp,a[0]^=c.key,c=Be(e,n),n=c.offp,a[1]^=c.key,a=et(a,0,r,i),i[f]=a[0],i[f+1]=a[1]}function vi(e,t,r,i,n){var a=ba.slice(),s=a.length,l;if(r<4||r>31)if(l=Error("Illegal number of rounds (4-31): "+r),i){fe(i.bind(this,l));return}else throw l;if(t.length!==Qe)if(l=Error("Illegal salt length: "+t.length+" != "+Qe),i){fe(i.bind(this,l));return}else throw l;r=1<<r>>>0;var c,f,o=0,d;typeof Int32Array=="function"?(c=new Int32Array(mi),f=new Int32Array(gi)):(c=mi.slice(),f=gi.slice()),Vs(t,e,c,f);function u(){if(n&&n(o/r),o<r)for(var g=Date.now();o<r&&(o=o+1,bi(e,c,f),bi(t,c,f),!(Date.now()-g>Hs)););else{for(o=0;o<64;o++)for(d=0;d<s>>1;d++)et(a,d<<1,c,f);var b=[];for(o=0;o<s;o++)b.push((a[o]>>24&255)>>>0),b.push((a[o]>>16&255)>>>0),b.push((a[o]>>8&255)>>>0),b.push((a[o]&255)>>>0);if(i){i(null,b);return}else return b}i&&fe(u)}if(typeof i<"u")u();else for(var v;;)if(typeof(v=u())<"u")return v||[]}function Jr(e,t,r,i){var n;if(typeof e!="string"||typeof t!="string")if(n=Error("Invalid string / salt: Not a string"),r){fe(r.bind(this,n));return}else throw n;var a,s;if(t.charAt(0)!=="$"||t.charAt(1)!=="2")if(n=Error("Invalid salt version: "+t.substring(0,2)),r){fe(r.bind(this,n));return}else throw n;if(t.charAt(2)==="$")a="\0",s=3;else{if(a=t.charAt(2),a!=="a"&&a!=="b"&&a!=="y"||t.charAt(3)!=="$")if(n=Error("Invalid salt revision: "+t.substring(2,4)),r){fe(r.bind(this,n));return}else throw n;s=4}if(t.charAt(s+2)>"$")if(n=Error("Missing salt rounds"),r){fe(r.bind(this,n));return}else throw n;var l=parseInt(t.substring(s,s+1),10)*10,c=parseInt(t.substring(s+1,s+2),10),f=l+c,o=t.substring(s+3,s+25);e+=a>="a"?"\0":"";var d=Ms(e),u=ga(o,Qe);function v(g){var b=[];return b.push("$2"),a>="a"&&b.push(a),b.push("$"),f<10&&b.push("0"),b.push(f.toString()),b.push("$"),b.push(gt(u,u.length)),b.push(gt(g,ba.length*4-1)),b.join("")}if(typeof r>"u")return v(vi(d,u,f));vi(d,u,f,function(g,b){g?r(g,null):r(null,v(b))},i)}function Us(e,t){return gt(e,t)}function Xs(e,t){return ga(e,t)}const Ks={setRandomFallback:ks,genSaltSync:ei,genSalt:ua,hashSync:pa,hash:xa,compareSync:_s,compare:qs,getRounds:Fs,getSalt:Bs,truncates:zs,encodeBase64:Us,decodeBase64:Xs};function Ws(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var pe={},lt={exports:{}};/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */var yi;function ot(){return yi||(yi=1,(function(e,t){var r=ht,i=r.Buffer;function n(s,l){for(var c in s)l[c]=s[c]}i.from&&i.alloc&&i.allocUnsafe&&i.allocUnsafeSlow?e.exports=r:(n(r,t),t.Buffer=a);function a(s,l,c){return i(s,l,c)}a.prototype=Object.create(i.prototype),n(i,a),a.from=function(s,l,c){if(typeof s=="number")throw new TypeError("Argument must not be a number");return i(s,l,c)},a.alloc=function(s,l,c){if(typeof s!="number")throw new TypeError("Argument must be a number");var f=i(s);return l!==void 0?typeof c=="string"?f.fill(l,c):f.fill(l):f.fill(0),f},a.allocUnsafe=function(s){if(typeof s!="number")throw new TypeError("Argument must be a number");return i(s)},a.allocUnsafeSlow=function(s){if(typeof s!="number")throw new TypeError("Argument must be a number");return r.SlowBuffer(s)}})(lt,lt.exports)),lt.exports}var jt,wi;function va(){if(wi)return jt;wi=1;var e=ot().Buffer,t=Zr,r=wt;function i(n){if(this.buffer=null,this.writable=!0,this.readable=!0,!n)return this.buffer=e.alloc(0),this;if(typeof n.pipe=="function")return this.buffer=e.alloc(0),n.pipe(this),this;if(n.length||typeof n=="object")return this.buffer=n,this.writable=!1,process.nextTick((function(){this.emit("end",n),this.readable=!1,this.emit("close")}).bind(this)),this;throw new TypeError("Unexpected data type ("+typeof n+")")}return r.inherits(i,t),i.prototype.write=function(a){this.buffer=e.concat([this.buffer,e.from(a)]),this.emit("data",a)},i.prototype.end=function(a){a&&this.write(a),this.emit("end",a),this.emit("close"),this.writable=!1,this.readable=!1},jt=i,jt}var $t,Ei;function Ys(){if(Ei)return $t;Ei=1;function e(i){var n=(i/8|0)+(i%8===0?0:1);return n}var t={ES256:e(256),ES384:e(384),ES512:e(521)};function r(i){var n=t[i];if(n)return n;throw new Error('Unknown algorithm "'+i+'"')}return $t=r,$t}var Pt,Si;function Js(){if(Si)return Pt;Si=1;var e=ot().Buffer,t=Ys(),r=128,i=0,n=32,a=16,s=2,l=a|n|i<<6,c=s|i<<6;function f(g){return g.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function o(g){if(e.isBuffer(g))return g;if(typeof g=="string")return e.from(g,"base64");throw new TypeError("ECDSA signature must be a Base64 string or a Buffer")}function d(g,b){g=o(g);var A=t(b),p=A+1,h=g.length,m=0;if(g[m++]!==l)throw new Error('Could not find expected "seq"');var S=g[m++];if(S===(r|1)&&(S=g[m++]),h-m<S)throw new Error('"seq" specified length of "'+S+'", only "'+(h-m)+'" remaining');if(g[m++]!==c)throw new Error('Could not find expected "int" for "r"');var P=g[m++];if(h-m-2<P)throw new Error('"r" specified length of "'+P+'", only "'+(h-m-2)+'" available');if(p<P)throw new Error('"r" specified length of "'+P+'", max of "'+p+'" is acceptable');var I=m;if(m+=P,g[m++]!==c)throw new Error('Could not find expected "int" for "s"');var L=g[m++];if(h-m!==L)throw new Error('"s" specified length of "'+L+'", expected "'+(h-m)+'"');if(p<L)throw new Error('"s" specified length of "'+L+'", max of "'+p+'" is acceptable');var R=m;if(m+=L,m!==h)throw new Error('Expected to consume entire buffer, but "'+(h-m)+'" bytes remain');var N=A-P,k=A-L,D=e.allocUnsafe(N+P+k+L);for(m=0;m<N;++m)D[m]=0;g.copy(D,m,I+Math.max(-N,0),I+P),m=A;for(var H=m;m<H+k;++m)D[m]=0;return g.copy(D,m,R+Math.max(-k,0),R+L),D=D.toString("base64"),D=f(D),D}function u(g,b,A){for(var p=0;b+p<A&&g[b+p]===0;)++p;var h=g[b+p]>=r;return h&&--p,p}function v(g,b){g=o(g);var A=t(b),p=g.length;if(p!==A*2)throw new TypeError('"'+b+'" signatures must be "'+A*2+'" bytes, saw "'+p+'"');var h=u(g,0,A),m=u(g,A,g.length),S=A-h,P=A-m,I=2+S+1+1+P,L=I<r,R=e.allocUnsafe((L?2:3)+I),N=0;return R[N++]=l,L?R[N++]=I:(R[N++]=r|1,R[N++]=I&255),R[N++]=c,R[N++]=S,h<0?(R[N++]=0,N+=g.copy(R,N,0,A)):N+=g.copy(R,N,h,A),R[N++]=c,R[N++]=P,m<0?(R[N++]=0,g.copy(R,N,A)):g.copy(R,N,A+m),R}return Pt={derToJose:d,joseToDer:v},Pt}var Nt,Ri;function Zs(){if(Ri)return Nt;Ri=1;var e=ht.Buffer,t=ht.SlowBuffer;Nt=r;function r(a,s){if(!e.isBuffer(a)||!e.isBuffer(s)||a.length!==s.length)return!1;for(var l=0,c=0;c<a.length;c++)l|=a[c]^s[c];return l===0}r.install=function(){e.prototype.equal=t.prototype.equal=function(s){return r(this,s)}};var i=e.prototype.equal,n=t.prototype.equal;return r.restore=function(){e.prototype.equal=i,t.prototype.equal=n},Nt}var Dt,Ai;function ya(){if(Ai)return Dt;Ai=1;var e=ot().Buffer,t=yt,r=Js(),i=wt,n=`"%s" is not a valid algorithm.
  Supported algorithms are:
  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".`,a="secret must be a string or buffer",s="key must be a string or a buffer",l="key must be a string, a buffer or an object",c=typeof t.createPublicKey=="function";c&&(s+=" or a KeyObject",a+="or a KeyObject");function f(T){if(!e.isBuffer(T)&&typeof T!="string"&&(!c||typeof T!="object"||typeof T.type!="string"||typeof T.asymmetricKeyType!="string"||typeof T.export!="function"))throw g(s)}function o(T){if(!e.isBuffer(T)&&typeof T!="string"&&typeof T!="object")throw g(l)}function d(T){if(!e.isBuffer(T)){if(typeof T=="string")return T;if(!c||typeof T!="object"||T.type!=="secret"||typeof T.export!="function")throw g(a)}}function u(T){return T.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function v(T){T=T.toString();var E=4-T.length%4;if(E!==4)for(var x=0;x<E;++x)T+="=";return T.replace(/\-/g,"+").replace(/_/g,"/")}function g(T){var E=[].slice.call(arguments,1),x=i.format.bind(i,T).apply(null,E);return new TypeError(x)}function b(T){return e.isBuffer(T)||typeof T=="string"}function A(T){return b(T)||(T=JSON.stringify(T)),T}function p(T){return function(x,C){d(C),x=A(x);var O=t.createHmac("sha"+T,C),j=(O.update(x),O.digest("base64"));return u(j)}}var h,m="timingSafeEqual"in t?function(E,x){return E.byteLength!==x.byteLength?!1:t.timingSafeEqual(E,x)}:function(E,x){return h||(h=Zs()),h(E,x)};function S(T){return function(x,C,O){var j=p(T)(x,O);return m(e.from(C),e.from(j))}}function P(T){return function(x,C){o(C),x=A(x);var O=t.createSign("RSA-SHA"+T),j=(O.update(x),O.sign(C,"base64"));return u(j)}}function I(T){return function(x,C,O){f(O),x=A(x),C=v(C);var j=t.createVerify("RSA-SHA"+T);return j.update(x),j.verify(O,C,"base64")}}function L(T){return function(x,C){o(C),x=A(x);var O=t.createSign("RSA-SHA"+T),j=(O.update(x),O.sign({key:C,padding:t.constants.RSA_PKCS1_PSS_PADDING,saltLength:t.constants.RSA_PSS_SALTLEN_DIGEST},"base64"));return u(j)}}function R(T){return function(x,C,O){f(O),x=A(x),C=v(C);var j=t.createVerify("RSA-SHA"+T);return j.update(x),j.verify({key:O,padding:t.constants.RSA_PKCS1_PSS_PADDING,saltLength:t.constants.RSA_PSS_SALTLEN_DIGEST},C,"base64")}}function N(T){var E=P(T);return function(){var C=E.apply(null,arguments);return C=r.derToJose(C,"ES"+T),C}}function k(T){var E=I(T);return function(C,O,j){O=r.joseToDer(O,"ES"+T).toString("base64");var $=E(C,O,j);return $}}function D(){return function(){return""}}function H(){return function(E,x){return x===""}}return Dt=function(E){var x={hs:p,rs:P,ps:L,es:N,none:D},C={hs:S,rs:I,ps:R,es:k,none:H},O=E.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/);if(!O)throw g(n,E);var j=(O[1]||O[3]).toLowerCase(),$=O[2];return{sign:x[j]($),verify:C[j]($)}},Dt}var kt,Ii;function wa(){if(Ii)return kt;Ii=1;var e=ht.Buffer;return kt=function(r){return typeof r=="string"?r:typeof r=="number"||e.isBuffer(r)?r.toString():JSON.stringify(r)},kt}var _t,Ti;function Qs(){if(Ti)return _t;Ti=1;var e=ot().Buffer,t=va(),r=ya(),i=Zr,n=wa(),a=wt;function s(o,d){return e.from(o,d).toString("base64").replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function l(o,d,u){u=u||"utf8";var v=s(n(o),"binary"),g=s(n(d),u);return a.format("%s.%s",v,g)}function c(o){var d=o.header,u=o.payload,v=o.secret||o.privateKey,g=o.encoding,b=r(d.alg),A=l(d,u,g),p=b.sign(A,v);return a.format("%s.%s",A,p)}function f(o){var d=o.secret;if(d=d??o.privateKey,d=d??o.key,/^hs/i.test(o.header.alg)===!0&&d==null)throw new TypeError("secret must be a string or buffer or a KeyObject");var u=new t(d);this.readable=!0,this.header=o.header,this.encoding=o.encoding,this.secret=this.privateKey=this.key=u,this.payload=new t(o.payload),this.secret.once("close",(function(){!this.payload.writable&&this.readable&&this.sign()}).bind(this)),this.payload.once("close",(function(){!this.secret.writable&&this.readable&&this.sign()}).bind(this))}return a.inherits(f,i),f.prototype.sign=function(){try{var d=c({header:this.header,payload:this.payload.buffer,secret:this.secret.buffer,encoding:this.encoding});return this.emit("done",d),this.emit("data",d),this.emit("end"),this.readable=!1,d}catch(u){this.readable=!1,this.emit("error",u),this.emit("close")}},f.sign=c,_t=f,_t}var qt,Ci;function eo(){if(Ci)return qt;Ci=1;var e=ot().Buffer,t=va(),r=ya(),i=Zr,n=wa(),a=wt,s=/^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;function l(p){return Object.prototype.toString.call(p)==="[object Object]"}function c(p){if(l(p))return p;try{return JSON.parse(p)}catch{return}}function f(p){var h=p.split(".",1)[0];return c(e.from(h,"base64").toString("binary"))}function o(p){return p.split(".",2).join(".")}function d(p){return p.split(".")[2]}function u(p,h){h=h||"utf8";var m=p.split(".")[1];return e.from(m,"base64").toString(h)}function v(p){return s.test(p)&&!!f(p)}function g(p,h,m){if(!h){var S=new Error("Missing algorithm parameter for jws.verify");throw S.code="MISSING_ALGORITHM",S}p=n(p);var P=d(p),I=o(p),L=r(h);return L.verify(I,P,m)}function b(p,h){if(h=h||{},p=n(p),!v(p))return null;var m=f(p);if(!m)return null;var S=u(p);return(m.typ==="JWT"||h.json)&&(S=JSON.parse(S,h.encoding)),{header:m,payload:S,signature:d(p)}}function A(p){p=p||{};var h=p.secret;if(h=h??p.publicKey,h=h??p.key,/^hs/i.test(p.algorithm)===!0&&h==null)throw new TypeError("secret must be a string or buffer or a KeyObject");var m=new t(h);this.readable=!0,this.algorithm=p.algorithm,this.encoding=p.encoding,this.secret=this.publicKey=this.key=m,this.signature=new t(p.signature),this.secret.once("close",(function(){!this.signature.writable&&this.readable&&this.verify()}).bind(this)),this.signature.once("close",(function(){!this.secret.writable&&this.readable&&this.verify()}).bind(this))}return a.inherits(A,i),A.prototype.verify=function(){try{var h=g(this.signature.buffer,this.algorithm,this.key.buffer),m=b(this.signature.buffer,this.encoding);return this.emit("done",h,m),this.emit("data",h),this.emit("end"),this.readable=!1,h}catch(S){this.readable=!1,this.emit("error",S),this.emit("close")}},A.decode=b,A.isValid=v,A.verify=g,qt=A,qt}var Oi;function ri(){if(Oi)return pe;Oi=1;var e=Qs(),t=eo(),r=["HS256","HS384","HS512","RS256","RS384","RS512","PS256","PS384","PS512","ES256","ES384","ES512"];return pe.ALGORITHMS=r,pe.sign=e.sign,pe.verify=t.verify,pe.decode=t.decode,pe.isValid=t.isValid,pe.createSign=function(n){return new e(n)},pe.createVerify=function(n){return new t(n)},pe}var Ft,Li;function Ea(){if(Li)return Ft;Li=1;var e=ri();return Ft=function(t,r){r=r||{};var i=e.decode(t,r);if(!i)return null;var n=i.payload;if(typeof n=="string")try{var a=JSON.parse(n);a!==null&&typeof a=="object"&&(n=a)}catch{}return r.complete===!0?{header:i.header,payload:n,signature:i.signature}:n},Ft}var Bt,ji;function Et(){if(ji)return Bt;ji=1;var e=function(t,r){Error.call(this,t),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="JsonWebTokenError",this.message=t,r&&(this.inner=r)};return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,Bt=e,Bt}var zt,$i;function Sa(){if($i)return zt;$i=1;var e=Et(),t=function(r,i){e.call(this,r),this.name="NotBeforeError",this.date=i};return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,zt=t,zt}var Mt,Pi;function Ra(){if(Pi)return Mt;Pi=1;var e=Et(),t=function(r,i){e.call(this,r),this.name="TokenExpiredError",this.expiredAt=i};return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Mt=t,Mt}var Gt,Ni;function to(){if(Ni)return Gt;Ni=1;var e=1e3,t=e*60,r=t*60,i=r*24,n=i*7,a=i*365.25;Gt=function(o,d){d=d||{};var u=typeof o;if(u==="string"&&o.length>0)return s(o);if(u==="number"&&isFinite(o))return d.long?c(o):l(o);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(o))};function s(o){if(o=String(o),!(o.length>100)){var d=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(o);if(d){var u=parseFloat(d[1]),v=(d[2]||"ms").toLowerCase();switch(v){case"years":case"year":case"yrs":case"yr":case"y":return u*a;case"weeks":case"week":case"w":return u*n;case"days":case"day":case"d":return u*i;case"hours":case"hour":case"hrs":case"hr":case"h":return u*r;case"minutes":case"minute":case"mins":case"min":case"m":return u*t;case"seconds":case"second":case"secs":case"sec":case"s":return u*e;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return u;default:return}}}}function l(o){var d=Math.abs(o);return d>=i?Math.round(o/i)+"d":d>=r?Math.round(o/r)+"h":d>=t?Math.round(o/t)+"m":d>=e?Math.round(o/e)+"s":o+"ms"}function c(o){var d=Math.abs(o);return d>=i?f(o,d,i,"day"):d>=r?f(o,d,r,"hour"):d>=t?f(o,d,t,"minute"):d>=e?f(o,d,e,"second"):o+" ms"}function f(o,d,u,v){var g=d>=u*1.5;return Math.round(o/u)+" "+v+(g?"s":"")}return Gt}var Ht,Di;function Aa(){if(Di)return Ht;Di=1;var e=to();return Ht=function(t,r){var i=r||Math.floor(Date.now()/1e3);if(typeof t=="string"){var n=e(t);return typeof n>"u"?void 0:Math.floor(i+n/1e3)}else return typeof t=="number"?i+t:void 0},Ht}var dt={exports:{}},Vt,ki;function St(){if(ki)return Vt;ki=1;const e="2.0.0",t=256,r=Number.MAX_SAFE_INTEGER||9007199254740991,i=16,n=t-6;return Vt={MAX_LENGTH:t,MAX_SAFE_COMPONENT_LENGTH:i,MAX_SAFE_BUILD_LENGTH:n,MAX_SAFE_INTEGER:r,RELEASE_TYPES:["major","premajor","minor","preminor","patch","prepatch","prerelease"],SEMVER_SPEC_VERSION:e,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2},Vt}var Ut,_i;function Rt(){if(_i)return Ut;_i=1;var e={};return Ut=typeof process=="object"&&e&&e.NODE_DEBUG&&/\bsemver\b/i.test(e.NODE_DEBUG)?(...r)=>console.error("SEMVER",...r):()=>{},Ut}var qi;function ct(){return qi||(qi=1,(function(e,t){const{MAX_SAFE_COMPONENT_LENGTH:r,MAX_SAFE_BUILD_LENGTH:i,MAX_LENGTH:n}=St(),a=Rt();t=e.exports={};const s=t.re=[],l=t.safeRe=[],c=t.src=[],f=t.safeSrc=[],o=t.t={};let d=0;const u="[a-zA-Z0-9-]",v=[["\\s",1],["\\d",n],[u,i]],g=A=>{for(const[p,h]of v)A=A.split(`${p}*`).join(`${p}{0,${h}}`).split(`${p}+`).join(`${p}{1,${h}}`);return A},b=(A,p,h)=>{const m=g(p),S=d++;a(A,S,p),o[A]=S,c[S]=p,f[S]=m,s[S]=new RegExp(p,h?"g":void 0),l[S]=new RegExp(m,h?"g":void 0)};b("NUMERICIDENTIFIER","0|[1-9]\\d*"),b("NUMERICIDENTIFIERLOOSE","\\d+"),b("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${u}*`),b("MAINVERSION",`(${c[o.NUMERICIDENTIFIER]})\\.(${c[o.NUMERICIDENTIFIER]})\\.(${c[o.NUMERICIDENTIFIER]})`),b("MAINVERSIONLOOSE",`(${c[o.NUMERICIDENTIFIERLOOSE]})\\.(${c[o.NUMERICIDENTIFIERLOOSE]})\\.(${c[o.NUMERICIDENTIFIERLOOSE]})`),b("PRERELEASEIDENTIFIER",`(?:${c[o.NONNUMERICIDENTIFIER]}|${c[o.NUMERICIDENTIFIER]})`),b("PRERELEASEIDENTIFIERLOOSE",`(?:${c[o.NONNUMERICIDENTIFIER]}|${c[o.NUMERICIDENTIFIERLOOSE]})`),b("PRERELEASE",`(?:-(${c[o.PRERELEASEIDENTIFIER]}(?:\\.${c[o.PRERELEASEIDENTIFIER]})*))`),b("PRERELEASELOOSE",`(?:-?(${c[o.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${c[o.PRERELEASEIDENTIFIERLOOSE]})*))`),b("BUILDIDENTIFIER",`${u}+`),b("BUILD",`(?:\\+(${c[o.BUILDIDENTIFIER]}(?:\\.${c[o.BUILDIDENTIFIER]})*))`),b("FULLPLAIN",`v?${c[o.MAINVERSION]}${c[o.PRERELEASE]}?${c[o.BUILD]}?`),b("FULL",`^${c[o.FULLPLAIN]}$`),b("LOOSEPLAIN",`[v=\\s]*${c[o.MAINVERSIONLOOSE]}${c[o.PRERELEASELOOSE]}?${c[o.BUILD]}?`),b("LOOSE",`^${c[o.LOOSEPLAIN]}$`),b("GTLT","((?:<|>)?=?)"),b("XRANGEIDENTIFIERLOOSE",`${c[o.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),b("XRANGEIDENTIFIER",`${c[o.NUMERICIDENTIFIER]}|x|X|\\*`),b("XRANGEPLAIN",`[v=\\s]*(${c[o.XRANGEIDENTIFIER]})(?:\\.(${c[o.XRANGEIDENTIFIER]})(?:\\.(${c[o.XRANGEIDENTIFIER]})(?:${c[o.PRERELEASE]})?${c[o.BUILD]}?)?)?`),b("XRANGEPLAINLOOSE",`[v=\\s]*(${c[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[o.XRANGEIDENTIFIERLOOSE]})(?:${c[o.PRERELEASELOOSE]})?${c[o.BUILD]}?)?)?`),b("XRANGE",`^${c[o.GTLT]}\\s*${c[o.XRANGEPLAIN]}$`),b("XRANGELOOSE",`^${c[o.GTLT]}\\s*${c[o.XRANGEPLAINLOOSE]}$`),b("COERCEPLAIN",`(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`),b("COERCE",`${c[o.COERCEPLAIN]}(?:$|[^\\d])`),b("COERCEFULL",c[o.COERCEPLAIN]+`(?:${c[o.PRERELEASE]})?(?:${c[o.BUILD]})?(?:$|[^\\d])`),b("COERCERTL",c[o.COERCE],!0),b("COERCERTLFULL",c[o.COERCEFULL],!0),b("LONETILDE","(?:~>?)"),b("TILDETRIM",`(\\s*)${c[o.LONETILDE]}\\s+`,!0),t.tildeTrimReplace="$1~",b("TILDE",`^${c[o.LONETILDE]}${c[o.XRANGEPLAIN]}$`),b("TILDELOOSE",`^${c[o.LONETILDE]}${c[o.XRANGEPLAINLOOSE]}$`),b("LONECARET","(?:\\^)"),b("CARETTRIM",`(\\s*)${c[o.LONECARET]}\\s+`,!0),t.caretTrimReplace="$1^",b("CARET",`^${c[o.LONECARET]}${c[o.XRANGEPLAIN]}$`),b("CARETLOOSE",`^${c[o.LONECARET]}${c[o.XRANGEPLAINLOOSE]}$`),b("COMPARATORLOOSE",`^${c[o.GTLT]}\\s*(${c[o.LOOSEPLAIN]})$|^$`),b("COMPARATOR",`^${c[o.GTLT]}\\s*(${c[o.FULLPLAIN]})$|^$`),b("COMPARATORTRIM",`(\\s*)${c[o.GTLT]}\\s*(${c[o.LOOSEPLAIN]}|${c[o.XRANGEPLAIN]})`,!0),t.comparatorTrimReplace="$1$2$3",b("HYPHENRANGE",`^\\s*(${c[o.XRANGEPLAIN]})\\s+-\\s+(${c[o.XRANGEPLAIN]})\\s*$`),b("HYPHENRANGELOOSE",`^\\s*(${c[o.XRANGEPLAINLOOSE]})\\s+-\\s+(${c[o.XRANGEPLAINLOOSE]})\\s*$`),b("STAR","(<|>)?=?\\s*\\*"),b("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),b("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")})(dt,dt.exports)),dt.exports}var Xt,Fi;function ii(){if(Fi)return Xt;Fi=1;const e=Object.freeze({loose:!0}),t=Object.freeze({});return Xt=i=>i?typeof i!="object"?e:i:t,Xt}var Kt,Bi;function Ia(){if(Bi)return Kt;Bi=1;const e=/^[0-9]+$/,t=(i,n)=>{if(typeof i=="number"&&typeof n=="number")return i===n?0:i<n?-1:1;const a=e.test(i),s=e.test(n);return a&&s&&(i=+i,n=+n),i===n?0:a&&!s?-1:s&&!a?1:i<n?-1:1};return Kt={compareIdentifiers:t,rcompareIdentifiers:(i,n)=>t(n,i)},Kt}var Wt,zi;function re(){if(zi)return Wt;zi=1;const e=Rt(),{MAX_LENGTH:t,MAX_SAFE_INTEGER:r}=St(),{safeRe:i,t:n}=ct(),a=ii(),{compareIdentifiers:s}=Ia();class l{constructor(f,o){if(o=a(o),f instanceof l){if(f.loose===!!o.loose&&f.includePrerelease===!!o.includePrerelease)return f;f=f.version}else if(typeof f!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof f}".`);if(f.length>t)throw new TypeError(`version is longer than ${t} characters`);e("SemVer",f,o),this.options=o,this.loose=!!o.loose,this.includePrerelease=!!o.includePrerelease;const d=f.trim().match(o.loose?i[n.LOOSE]:i[n.FULL]);if(!d)throw new TypeError(`Invalid Version: ${f}`);if(this.raw=f,this.major=+d[1],this.minor=+d[2],this.patch=+d[3],this.major>r||this.major<0)throw new TypeError("Invalid major version");if(this.minor>r||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>r||this.patch<0)throw new TypeError("Invalid patch version");d[4]?this.prerelease=d[4].split(".").map(u=>{if(/^[0-9]+$/.test(u)){const v=+u;if(v>=0&&v<r)return v}return u}):this.prerelease=[],this.build=d[5]?d[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(f){if(e("SemVer.compare",this.version,this.options,f),!(f instanceof l)){if(typeof f=="string"&&f===this.version)return 0;f=new l(f,this.options)}return f.version===this.version?0:this.compareMain(f)||this.comparePre(f)}compareMain(f){return f instanceof l||(f=new l(f,this.options)),this.major<f.major?-1:this.major>f.major?1:this.minor<f.minor?-1:this.minor>f.minor?1:this.patch<f.patch?-1:this.patch>f.patch?1:0}comparePre(f){if(f instanceof l||(f=new l(f,this.options)),this.prerelease.length&&!f.prerelease.length)return-1;if(!this.prerelease.length&&f.prerelease.length)return 1;if(!this.prerelease.length&&!f.prerelease.length)return 0;let o=0;do{const d=this.prerelease[o],u=f.prerelease[o];if(e("prerelease compare",o,d,u),d===void 0&&u===void 0)return 0;if(u===void 0)return 1;if(d===void 0)return-1;if(d===u)continue;return s(d,u)}while(++o)}compareBuild(f){f instanceof l||(f=new l(f,this.options));let o=0;do{const d=this.build[o],u=f.build[o];if(e("build compare",o,d,u),d===void 0&&u===void 0)return 0;if(u===void 0)return 1;if(d===void 0)return-1;if(d===u)continue;return s(d,u)}while(++o)}inc(f,o,d){if(f.startsWith("pre")){if(!o&&d===!1)throw new Error("invalid increment argument: identifier is empty");if(o){const u=`-${o}`.match(this.options.loose?i[n.PRERELEASELOOSE]:i[n.PRERELEASE]);if(!u||u[1]!==o)throw new Error(`invalid identifier: ${o}`)}}switch(f){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",o,d);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",o,d);break;case"prepatch":this.prerelease.length=0,this.inc("patch",o,d),this.inc("pre",o,d);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",o,d),this.inc("pre",o,d);break;case"release":if(this.prerelease.length===0)throw new Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{const u=Number(d)?1:0;if(this.prerelease.length===0)this.prerelease=[u];else{let v=this.prerelease.length;for(;--v>=0;)typeof this.prerelease[v]=="number"&&(this.prerelease[v]++,v=-2);if(v===-1){if(o===this.prerelease.join(".")&&d===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(u)}}if(o){let v=[o,u];d===!1&&(v=[o]),s(this.prerelease[0],o)===0?isNaN(this.prerelease[1])&&(this.prerelease=v):this.prerelease=v}break}default:throw new Error(`invalid increment argument: ${f}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}}return Wt=l,Wt}var Yt,Mi;function Ke(){if(Mi)return Yt;Mi=1;const e=re();return Yt=(r,i,n=!1)=>{if(r instanceof e)return r;try{return new e(r,i)}catch(a){if(!n)return null;throw a}},Yt}var Jt,Gi;function ro(){if(Gi)return Jt;Gi=1;const e=Ke();return Jt=(r,i)=>{const n=e(r,i);return n?n.version:null},Jt}var Zt,Hi;function io(){if(Hi)return Zt;Hi=1;const e=Ke();return Zt=(r,i)=>{const n=e(r.trim().replace(/^[=v]+/,""),i);return n?n.version:null},Zt}var Qt,Vi;function no(){if(Vi)return Qt;Vi=1;const e=re();return Qt=(r,i,n,a,s)=>{typeof n=="string"&&(s=a,a=n,n=void 0);try{return new e(r instanceof e?r.version:r,n).inc(i,a,s).version}catch{return null}},Qt}var er,Ui;function ao(){if(Ui)return er;Ui=1;const e=Ke();return er=(r,i)=>{const n=e(r,null,!0),a=e(i,null,!0),s=n.compare(a);if(s===0)return null;const l=s>0,c=l?n:a,f=l?a:n,o=!!c.prerelease.length;if(!!f.prerelease.length&&!o){if(!f.patch&&!f.minor)return"major";if(f.compareMain(c)===0)return f.minor&&!f.patch?"minor":"patch"}const u=o?"pre":"";return n.major!==a.major?u+"major":n.minor!==a.minor?u+"minor":n.patch!==a.patch?u+"patch":"prerelease"},er}var tr,Xi;function so(){if(Xi)return tr;Xi=1;const e=re();return tr=(r,i)=>new e(r,i).major,tr}var rr,Ki;function oo(){if(Ki)return rr;Ki=1;const e=re();return rr=(r,i)=>new e(r,i).minor,rr}var ir,Wi;function co(){if(Wi)return ir;Wi=1;const e=re();return ir=(r,i)=>new e(r,i).patch,ir}var nr,Yi;function fo(){if(Yi)return nr;Yi=1;const e=Ke();return nr=(r,i)=>{const n=e(r,i);return n&&n.prerelease.length?n.prerelease:null},nr}var ar,Ji;function le(){if(Ji)return ar;Ji=1;const e=re();return ar=(r,i,n)=>new e(r,n).compare(new e(i,n)),ar}var sr,Zi;function lo(){if(Zi)return sr;Zi=1;const e=le();return sr=(r,i,n)=>e(i,r,n),sr}var or,Qi;function uo(){if(Qi)return or;Qi=1;const e=le();return or=(r,i)=>e(r,i,!0),or}var cr,en;function ni(){if(en)return cr;en=1;const e=re();return cr=(r,i,n)=>{const a=new e(r,n),s=new e(i,n);return a.compare(s)||a.compareBuild(s)},cr}var fr,tn;function po(){if(tn)return fr;tn=1;const e=ni();return fr=(r,i)=>r.sort((n,a)=>e(n,a,i)),fr}var lr,rn;function xo(){if(rn)return lr;rn=1;const e=ni();return lr=(r,i)=>r.sort((n,a)=>e(a,n,i)),lr}var dr,nn;function At(){if(nn)return dr;nn=1;const e=le();return dr=(r,i,n)=>e(r,i,n)>0,dr}var ur,an;function ai(){if(an)return ur;an=1;const e=le();return ur=(r,i,n)=>e(r,i,n)<0,ur}var pr,sn;function Ta(){if(sn)return pr;sn=1;const e=le();return pr=(r,i,n)=>e(r,i,n)===0,pr}var xr,on;function Ca(){if(on)return xr;on=1;const e=le();return xr=(r,i,n)=>e(r,i,n)!==0,xr}var hr,cn;function si(){if(cn)return hr;cn=1;const e=le();return hr=(r,i,n)=>e(r,i,n)>=0,hr}var mr,fn;function oi(){if(fn)return mr;fn=1;const e=le();return mr=(r,i,n)=>e(r,i,n)<=0,mr}var gr,ln;function Oa(){if(ln)return gr;ln=1;const e=Ta(),t=Ca(),r=At(),i=si(),n=ai(),a=oi();return gr=(l,c,f,o)=>{switch(c){case"===":return typeof l=="object"&&(l=l.version),typeof f=="object"&&(f=f.version),l===f;case"!==":return typeof l=="object"&&(l=l.version),typeof f=="object"&&(f=f.version),l!==f;case"":case"=":case"==":return e(l,f,o);case"!=":return t(l,f,o);case">":return r(l,f,o);case">=":return i(l,f,o);case"<":return n(l,f,o);case"<=":return a(l,f,o);default:throw new TypeError(`Invalid operator: ${c}`)}},gr}var br,dn;function ho(){if(dn)return br;dn=1;const e=re(),t=Ke(),{safeRe:r,t:i}=ct();return br=(a,s)=>{if(a instanceof e)return a;if(typeof a=="number"&&(a=String(a)),typeof a!="string")return null;s=s||{};let l=null;if(!s.rtl)l=a.match(s.includePrerelease?r[i.COERCEFULL]:r[i.COERCE]);else{const v=s.includePrerelease?r[i.COERCERTLFULL]:r[i.COERCERTL];let g;for(;(g=v.exec(a))&&(!l||l.index+l[0].length!==a.length);)(!l||g.index+g[0].length!==l.index+l[0].length)&&(l=g),v.lastIndex=g.index+g[1].length+g[2].length;v.lastIndex=-1}if(l===null)return null;const c=l[2],f=l[3]||"0",o=l[4]||"0",d=s.includePrerelease&&l[5]?`-${l[5]}`:"",u=s.includePrerelease&&l[6]?`+${l[6]}`:"";return t(`${c}.${f}.${o}${d}${u}`,s)},br}var vr,un;function mo(){if(un)return vr;un=1;class e{constructor(){this.max=1e3,this.map=new Map}get(r){const i=this.map.get(r);if(i!==void 0)return this.map.delete(r),this.map.set(r,i),i}delete(r){return this.map.delete(r)}set(r,i){if(!this.delete(r)&&i!==void 0){if(this.map.size>=this.max){const a=this.map.keys().next().value;this.delete(a)}this.map.set(r,i)}return this}}return vr=e,vr}var yr,pn;function de(){if(pn)return yr;pn=1;const e=/\s+/g;class t{constructor(x,C){if(C=n(C),x instanceof t)return x.loose===!!C.loose&&x.includePrerelease===!!C.includePrerelease?x:new t(x.raw,C);if(x instanceof a)return this.raw=x.value,this.set=[[x]],this.formatted=void 0,this;if(this.options=C,this.loose=!!C.loose,this.includePrerelease=!!C.includePrerelease,this.raw=x.trim().replace(e," "),this.set=this.raw.split("||").map(O=>this.parseRange(O.trim())).filter(O=>O.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){const O=this.set[0];if(this.set=this.set.filter(j=>!b(j[0])),this.set.length===0)this.set=[O];else if(this.set.length>1){for(const j of this.set)if(j.length===1&&A(j[0])){this.set=[j];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let x=0;x<this.set.length;x++){x>0&&(this.formatted+="||");const C=this.set[x];for(let O=0;O<C.length;O++)O>0&&(this.formatted+=" "),this.formatted+=C[O].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(x){const O=((this.options.includePrerelease&&v)|(this.options.loose&&g))+":"+x,j=i.get(O);if(j)return j;const $=this.options.loose,B=$?c[f.HYPHENRANGELOOSE]:c[f.HYPHENRANGE];x=x.replace(B,H(this.options.includePrerelease)),s("hyphen replace",x),x=x.replace(c[f.COMPARATORTRIM],o),s("comparator trim",x),x=x.replace(c[f.TILDETRIM],d),s("tilde trim",x),x=x.replace(c[f.CARETTRIM],u),s("caret trim",x);let V=x.split(" ").map(K=>h(K,this.options)).join(" ").split(/\s+/).map(K=>D(K,this.options));$&&(V=V.filter(K=>(s("loose invalid filter",K,this.options),!!K.match(c[f.COMPARATORLOOSE])))),s("range list",V);const M=new Map,X=V.map(K=>new a(K,this.options));for(const K of X){if(b(K))return[K];M.set(K.value,K)}M.size>1&&M.has("")&&M.delete("");const W=[...M.values()];return i.set(O,W),W}intersects(x,C){if(!(x instanceof t))throw new TypeError("a Range is required");return this.set.some(O=>p(O,C)&&x.set.some(j=>p(j,C)&&O.every($=>j.every(B=>$.intersects(B,C)))))}test(x){if(!x)return!1;if(typeof x=="string")try{x=new l(x,this.options)}catch{return!1}for(let C=0;C<this.set.length;C++)if(T(this.set[C],x,this.options))return!0;return!1}}yr=t;const r=mo(),i=new r,n=ii(),a=It(),s=Rt(),l=re(),{safeRe:c,t:f,comparatorTrimReplace:o,tildeTrimReplace:d,caretTrimReplace:u}=ct(),{FLAG_INCLUDE_PRERELEASE:v,FLAG_LOOSE:g}=St(),b=E=>E.value==="<0.0.0-0",A=E=>E.value==="",p=(E,x)=>{let C=!0;const O=E.slice();let j=O.pop();for(;C&&O.length;)C=O.every($=>j.intersects($,x)),j=O.pop();return C},h=(E,x)=>(E=E.replace(c[f.BUILD],""),s("comp",E,x),E=I(E,x),s("caret",E),E=S(E,x),s("tildes",E),E=R(E,x),s("xrange",E),E=k(E,x),s("stars",E),E),m=E=>!E||E.toLowerCase()==="x"||E==="*",S=(E,x)=>E.trim().split(/\s+/).map(C=>P(C,x)).join(" "),P=(E,x)=>{const C=x.loose?c[f.TILDELOOSE]:c[f.TILDE];return E.replace(C,(O,j,$,B,V)=>{s("tilde",E,O,j,$,B,V);let M;return m(j)?M="":m($)?M=`>=${j}.0.0 <${+j+1}.0.0-0`:m(B)?M=`>=${j}.${$}.0 <${j}.${+$+1}.0-0`:V?(s("replaceTilde pr",V),M=`>=${j}.${$}.${B}-${V} <${j}.${+$+1}.0-0`):M=`>=${j}.${$}.${B} <${j}.${+$+1}.0-0`,s("tilde return",M),M})},I=(E,x)=>E.trim().split(/\s+/).map(C=>L(C,x)).join(" "),L=(E,x)=>{s("caret",E,x);const C=x.loose?c[f.CARETLOOSE]:c[f.CARET],O=x.includePrerelease?"-0":"";return E.replace(C,(j,$,B,V,M)=>{s("caret",E,j,$,B,V,M);let X;return m($)?X="":m(B)?X=`>=${$}.0.0${O} <${+$+1}.0.0-0`:m(V)?$==="0"?X=`>=${$}.${B}.0${O} <${$}.${+B+1}.0-0`:X=`>=${$}.${B}.0${O} <${+$+1}.0.0-0`:M?(s("replaceCaret pr",M),$==="0"?B==="0"?X=`>=${$}.${B}.${V}-${M} <${$}.${B}.${+V+1}-0`:X=`>=${$}.${B}.${V}-${M} <${$}.${+B+1}.0-0`:X=`>=${$}.${B}.${V}-${M} <${+$+1}.0.0-0`):(s("no pr"),$==="0"?B==="0"?X=`>=${$}.${B}.${V}${O} <${$}.${B}.${+V+1}-0`:X=`>=${$}.${B}.${V}${O} <${$}.${+B+1}.0-0`:X=`>=${$}.${B}.${V} <${+$+1}.0.0-0`),s("caret return",X),X})},R=(E,x)=>(s("replaceXRanges",E,x),E.split(/\s+/).map(C=>N(C,x)).join(" ")),N=(E,x)=>{E=E.trim();const C=x.loose?c[f.XRANGELOOSE]:c[f.XRANGE];return E.replace(C,(O,j,$,B,V,M)=>{s("xRange",E,O,j,$,B,V,M);const X=m($),W=X||m(B),K=W||m(V),Ie=K;return j==="="&&Ie&&(j=""),M=x.includePrerelease?"-0":"",X?j===">"||j==="<"?O="<0.0.0-0":O="*":j&&Ie?(W&&(B=0),V=0,j===">"?(j=">=",W?($=+$+1,B=0,V=0):(B=+B+1,V=0)):j==="<="&&(j="<",W?$=+$+1:B=+B+1),j==="<"&&(M="-0"),O=`${j+$}.${B}.${V}${M}`):W?O=`>=${$}.0.0${M} <${+$+1}.0.0-0`:K&&(O=`>=${$}.${B}.0${M} <${$}.${+B+1}.0-0`),s("xRange return",O),O})},k=(E,x)=>(s("replaceStars",E,x),E.trim().replace(c[f.STAR],"")),D=(E,x)=>(s("replaceGTE0",E,x),E.trim().replace(c[x.includePrerelease?f.GTE0PRE:f.GTE0],"")),H=E=>(x,C,O,j,$,B,V,M,X,W,K,Ie)=>(m(O)?C="":m(j)?C=`>=${O}.0.0${E?"-0":""}`:m($)?C=`>=${O}.${j}.0${E?"-0":""}`:B?C=`>=${C}`:C=`>=${C}${E?"-0":""}`,m(X)?M="":m(W)?M=`<${+X+1}.0.0-0`:m(K)?M=`<${X}.${+W+1}.0-0`:Ie?M=`<=${X}.${W}.${K}-${Ie}`:E?M=`<${X}.${W}.${+K+1}-0`:M=`<=${M}`,`${C} ${M}`.trim()),T=(E,x,C)=>{for(let O=0;O<E.length;O++)if(!E[O].test(x))return!1;if(x.prerelease.length&&!C.includePrerelease){for(let O=0;O<E.length;O++)if(s(E[O].semver),E[O].semver!==a.ANY&&E[O].semver.prerelease.length>0){const j=E[O].semver;if(j.major===x.major&&j.minor===x.minor&&j.patch===x.patch)return!0}return!1}return!0};return yr}var wr,xn;function It(){if(xn)return wr;xn=1;const e=Symbol("SemVer ANY");class t{static get ANY(){return e}constructor(o,d){if(d=r(d),o instanceof t){if(o.loose===!!d.loose)return o;o=o.value}o=o.trim().split(/\s+/).join(" "),s("comparator",o,d),this.options=d,this.loose=!!d.loose,this.parse(o),this.semver===e?this.value="":this.value=this.operator+this.semver.version,s("comp",this)}parse(o){const d=this.options.loose?i[n.COMPARATORLOOSE]:i[n.COMPARATOR],u=o.match(d);if(!u)throw new TypeError(`Invalid comparator: ${o}`);this.operator=u[1]!==void 0?u[1]:"",this.operator==="="&&(this.operator=""),u[2]?this.semver=new l(u[2],this.options.loose):this.semver=e}toString(){return this.value}test(o){if(s("Comparator.test",o,this.options.loose),this.semver===e||o===e)return!0;if(typeof o=="string")try{o=new l(o,this.options)}catch{return!1}return a(o,this.operator,this.semver,this.options)}intersects(o,d){if(!(o instanceof t))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new c(o.value,d).test(this.value):o.operator===""?o.value===""?!0:new c(this.value,d).test(o.semver):(d=r(d),d.includePrerelease&&(this.value==="<0.0.0-0"||o.value==="<0.0.0-0")||!d.includePrerelease&&(this.value.startsWith("<0.0.0")||o.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&o.operator.startsWith(">")||this.operator.startsWith("<")&&o.operator.startsWith("<")||this.semver.version===o.semver.version&&this.operator.includes("=")&&o.operator.includes("=")||a(this.semver,"<",o.semver,d)&&this.operator.startsWith(">")&&o.operator.startsWith("<")||a(this.semver,">",o.semver,d)&&this.operator.startsWith("<")&&o.operator.startsWith(">")))}}wr=t;const r=ii(),{safeRe:i,t:n}=ct(),a=Oa(),s=Rt(),l=re(),c=de();return wr}var Er,hn;function Tt(){if(hn)return Er;hn=1;const e=de();return Er=(r,i,n)=>{try{i=new e(i,n)}catch{return!1}return i.test(r)},Er}var Sr,mn;function go(){if(mn)return Sr;mn=1;const e=de();return Sr=(r,i)=>new e(r,i).set.map(n=>n.map(a=>a.value).join(" ").trim().split(" ")),Sr}var Rr,gn;function bo(){if(gn)return Rr;gn=1;const e=re(),t=de();return Rr=(i,n,a)=>{let s=null,l=null,c=null;try{c=new t(n,a)}catch{return null}return i.forEach(f=>{c.test(f)&&(!s||l.compare(f)===-1)&&(s=f,l=new e(s,a))}),s},Rr}var Ar,bn;function vo(){if(bn)return Ar;bn=1;const e=re(),t=de();return Ar=(i,n,a)=>{let s=null,l=null,c=null;try{c=new t(n,a)}catch{return null}return i.forEach(f=>{c.test(f)&&(!s||l.compare(f)===1)&&(s=f,l=new e(s,a))}),s},Ar}var Ir,vn;function yo(){if(vn)return Ir;vn=1;const e=re(),t=de(),r=At();return Ir=(n,a)=>{n=new t(n,a);let s=new e("0.0.0");if(n.test(s)||(s=new e("0.0.0-0"),n.test(s)))return s;s=null;for(let l=0;l<n.set.length;++l){const c=n.set[l];let f=null;c.forEach(o=>{const d=new e(o.semver.version);switch(o.operator){case">":d.prerelease.length===0?d.patch++:d.prerelease.push(0),d.raw=d.format();case"":case">=":(!f||r(d,f))&&(f=d);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${o.operator}`)}}),f&&(!s||r(s,f))&&(s=f)}return s&&n.test(s)?s:null},Ir}var Tr,yn;function wo(){if(yn)return Tr;yn=1;const e=de();return Tr=(r,i)=>{try{return new e(r,i).range||"*"}catch{return null}},Tr}var Cr,wn;function ci(){if(wn)return Cr;wn=1;const e=re(),t=It(),{ANY:r}=t,i=de(),n=Tt(),a=At(),s=ai(),l=oi(),c=si();return Cr=(o,d,u,v)=>{o=new e(o,v),d=new i(d,v);let g,b,A,p,h;switch(u){case">":g=a,b=l,A=s,p=">",h=">=";break;case"<":g=s,b=c,A=a,p="<",h="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(n(o,d,v))return!1;for(let m=0;m<d.set.length;++m){const S=d.set[m];let P=null,I=null;if(S.forEach(L=>{L.semver===r&&(L=new t(">=0.0.0")),P=P||L,I=I||L,g(L.semver,P.semver,v)?P=L:A(L.semver,I.semver,v)&&(I=L)}),P.operator===p||P.operator===h||(!I.operator||I.operator===p)&&b(o,I.semver))return!1;if(I.operator===h&&A(o,I.semver))return!1}return!0},Cr}var Or,En;function Eo(){if(En)return Or;En=1;const e=ci();return Or=(r,i,n)=>e(r,i,">",n),Or}var Lr,Sn;function So(){if(Sn)return Lr;Sn=1;const e=ci();return Lr=(r,i,n)=>e(r,i,"<",n),Lr}var jr,Rn;function Ro(){if(Rn)return jr;Rn=1;const e=de();return jr=(r,i,n)=>(r=new e(r,n),i=new e(i,n),r.intersects(i,n)),jr}var $r,An;function Ao(){if(An)return $r;An=1;const e=Tt(),t=le();return $r=(r,i,n)=>{const a=[];let s=null,l=null;const c=r.sort((u,v)=>t(u,v,n));for(const u of c)e(u,i,n)?(l=u,s||(s=u)):(l&&a.push([s,l]),l=null,s=null);s&&a.push([s,null]);const f=[];for(const[u,v]of a)u===v?f.push(u):!v&&u===c[0]?f.push("*"):v?u===c[0]?f.push(`<=${v}`):f.push(`${u} - ${v}`):f.push(`>=${u}`);const o=f.join(" || "),d=typeof i.raw=="string"?i.raw:String(i);return o.length<d.length?o:i},$r}var Pr,In;function Io(){if(In)return Pr;In=1;const e=de(),t=It(),{ANY:r}=t,i=Tt(),n=le(),a=(d,u,v={})=>{if(d===u)return!0;d=new e(d,v),u=new e(u,v);let g=!1;e:for(const b of d.set){for(const A of u.set){const p=c(b,A,v);if(g=g||p!==null,p)continue e}if(g)return!1}return!0},s=[new t(">=0.0.0-0")],l=[new t(">=0.0.0")],c=(d,u,v)=>{if(d===u)return!0;if(d.length===1&&d[0].semver===r){if(u.length===1&&u[0].semver===r)return!0;v.includePrerelease?d=s:d=l}if(u.length===1&&u[0].semver===r){if(v.includePrerelease)return!0;u=l}const g=new Set;let b,A;for(const R of d)R.operator===">"||R.operator===">="?b=f(b,R,v):R.operator==="<"||R.operator==="<="?A=o(A,R,v):g.add(R.semver);if(g.size>1)return null;let p;if(b&&A){if(p=n(b.semver,A.semver,v),p>0)return null;if(p===0&&(b.operator!==">="||A.operator!=="<="))return null}for(const R of g){if(b&&!i(R,String(b),v)||A&&!i(R,String(A),v))return null;for(const N of u)if(!i(R,String(N),v))return!1;return!0}let h,m,S,P,I=A&&!v.includePrerelease&&A.semver.prerelease.length?A.semver:!1,L=b&&!v.includePrerelease&&b.semver.prerelease.length?b.semver:!1;I&&I.prerelease.length===1&&A.operator==="<"&&I.prerelease[0]===0&&(I=!1);for(const R of u){if(P=P||R.operator===">"||R.operator===">=",S=S||R.operator==="<"||R.operator==="<=",b){if(L&&R.semver.prerelease&&R.semver.prerelease.length&&R.semver.major===L.major&&R.semver.minor===L.minor&&R.semver.patch===L.patch&&(L=!1),R.operator===">"||R.operator===">="){if(h=f(b,R,v),h===R&&h!==b)return!1}else if(b.operator===">="&&!i(b.semver,String(R),v))return!1}if(A){if(I&&R.semver.prerelease&&R.semver.prerelease.length&&R.semver.major===I.major&&R.semver.minor===I.minor&&R.semver.patch===I.patch&&(I=!1),R.operator==="<"||R.operator==="<="){if(m=o(A,R,v),m===R&&m!==A)return!1}else if(A.operator==="<="&&!i(A.semver,String(R),v))return!1}if(!R.operator&&(A||b)&&p!==0)return!1}return!(b&&S&&!A&&p!==0||A&&P&&!b&&p!==0||L||I)},f=(d,u,v)=>{if(!d)return u;const g=n(d.semver,u.semver,v);return g>0?d:g<0||u.operator===">"&&d.operator===">="?u:d},o=(d,u,v)=>{if(!d)return u;const g=n(d.semver,u.semver,v);return g<0?d:g>0||u.operator==="<"&&d.operator==="<="?u:d};return Pr=a,Pr}var Nr,Tn;function fi(){if(Tn)return Nr;Tn=1;const e=ct(),t=St(),r=re(),i=Ia(),n=Ke(),a=ro(),s=io(),l=no(),c=ao(),f=so(),o=oo(),d=co(),u=fo(),v=le(),g=lo(),b=uo(),A=ni(),p=po(),h=xo(),m=At(),S=ai(),P=Ta(),I=Ca(),L=si(),R=oi(),N=Oa(),k=ho(),D=It(),H=de(),T=Tt(),E=go(),x=bo(),C=vo(),O=yo(),j=wo(),$=ci(),B=Eo(),V=So(),M=Ro(),X=Ao(),W=Io();return Nr={parse:n,valid:a,clean:s,inc:l,diff:c,major:f,minor:o,patch:d,prerelease:u,compare:v,rcompare:g,compareLoose:b,compareBuild:A,sort:p,rsort:h,gt:m,lt:S,eq:P,neq:I,gte:L,lte:R,cmp:N,coerce:k,Comparator:D,Range:H,satisfies:T,toComparators:E,maxSatisfying:x,minSatisfying:C,minVersion:O,validRange:j,outside:$,gtr:B,ltr:V,intersects:M,simplifyRange:X,subset:W,SemVer:r,re:e.re,src:e.src,tokens:e.t,SEMVER_SPEC_VERSION:t.SEMVER_SPEC_VERSION,RELEASE_TYPES:t.RELEASE_TYPES,compareIdentifiers:i.compareIdentifiers,rcompareIdentifiers:i.rcompareIdentifiers},Nr}var Dr,Cn;function To(){return Cn||(Cn=1,Dr=fi().satisfies(process.version,">=15.7.0")),Dr}var kr,On;function Co(){return On||(On=1,kr=fi().satisfies(process.version,">=16.9.0")),kr}var _r,Ln;function La(){if(Ln)return _r;Ln=1;const e=To(),t=Co(),r={ec:["ES256","ES384","ES512"],rsa:["RS256","PS256","RS384","PS384","RS512","PS512"],"rsa-pss":["PS256","PS384","PS512"]},i={ES256:"prime256v1",ES384:"secp384r1",ES512:"secp521r1"};return _r=function(n,a){if(!n||!a)return;const s=a.asymmetricKeyType;if(!s)return;const l=r[s];if(!l)throw new Error(`Unknown key type "${s}".`);if(!l.includes(n))throw new Error(`"alg" parameter for "${s}" key type must be one of: ${l.join(", ")}.`);if(e)switch(s){case"ec":const c=a.asymmetricKeyDetails.namedCurve,f=i[n];if(c!==f)throw new Error(`"alg" parameter "${n}" requires curve "${f}".`);break;case"rsa-pss":if(t){const o=parseInt(n.slice(-3),10),{hashAlgorithm:d,mgf1HashAlgorithm:u,saltLength:v}=a.asymmetricKeyDetails;if(d!==`sha${o}`||u!==d)throw new Error(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${n}.`);if(v!==void 0&&v>o>>3)throw new Error(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${n}.`)}break}},_r}var qr,jn;function ja(){if(jn)return qr;jn=1;var e=fi();return qr=e.satisfies(process.version,"^6.12.0 || >=8.0.0"),qr}var Fr,$n;function Oo(){if($n)return Fr;$n=1;const e=Et(),t=Sa(),r=Ra(),i=Ea(),n=Aa(),a=La(),s=ja(),l=ri(),{KeyObject:c,createSecretKey:f,createPublicKey:o}=yt,d=["RS256","RS384","RS512"],u=["ES256","ES384","ES512"],v=["RS256","RS384","RS512"],g=["HS256","HS384","HS512"];return s&&(d.splice(d.length,0,"PS256","PS384","PS512"),v.splice(v.length,0,"PS256","PS384","PS512")),Fr=function(b,A,p,h){typeof p=="function"&&!h&&(h=p,p={}),p||(p={}),p=Object.assign({},p);let m;if(h?m=h:m=function(N,k){if(N)throw N;return k},p.clockTimestamp&&typeof p.clockTimestamp!="number")return m(new e("clockTimestamp must be a number"));if(p.nonce!==void 0&&(typeof p.nonce!="string"||p.nonce.trim()===""))return m(new e("nonce must be a non-empty string"));if(p.allowInvalidAsymmetricKeyTypes!==void 0&&typeof p.allowInvalidAsymmetricKeyTypes!="boolean")return m(new e("allowInvalidAsymmetricKeyTypes must be a boolean"));const S=p.clockTimestamp||Math.floor(Date.now()/1e3);if(!b)return m(new e("jwt must be provided"));if(typeof b!="string")return m(new e("jwt must be a string"));const P=b.split(".");if(P.length!==3)return m(new e("jwt malformed"));let I;try{I=i(b,{complete:!0})}catch(N){return m(N)}if(!I)return m(new e("invalid token"));const L=I.header;let R;if(typeof A=="function"){if(!h)return m(new e("verify must be called asynchronous if secret or public key is provided as a callback"));R=A}else R=function(N,k){return k(null,A)};return R(L,function(N,k){if(N)return m(new e("error in secret or public key callback: "+N.message));const D=P[2].trim()!=="";if(!D&&k)return m(new e("jwt signature is required"));if(D&&!k)return m(new e("secret or public key must be provided"));if(!D&&!p.algorithms)return m(new e('please specify "none" in "algorithms" to verify unsigned tokens'));if(k!=null&&!(k instanceof c))try{k=o(k)}catch{try{k=f(typeof k=="string"?Buffer.from(k):k)}catch{return m(new e("secretOrPublicKey is not valid key material"))}}if(p.algorithms||(k.type==="secret"?p.algorithms=g:["rsa","rsa-pss"].includes(k.asymmetricKeyType)?p.algorithms=v:k.asymmetricKeyType==="ec"?p.algorithms=u:p.algorithms=d),p.algorithms.indexOf(I.header.alg)===-1)return m(new e("invalid algorithm"));if(L.alg.startsWith("HS")&&k.type!=="secret")return m(new e(`secretOrPublicKey must be a symmetric key when using ${L.alg}`));if(/^(?:RS|PS|ES)/.test(L.alg)&&k.type!=="public")return m(new e(`secretOrPublicKey must be an asymmetric key when using ${L.alg}`));if(!p.allowInvalidAsymmetricKeyTypes)try{a(L.alg,k)}catch(E){return m(E)}let H;try{H=l.verify(b,I.header.alg,k)}catch(E){return m(E)}if(!H)return m(new e("invalid signature"));const T=I.payload;if(typeof T.nbf<"u"&&!p.ignoreNotBefore){if(typeof T.nbf!="number")return m(new e("invalid nbf value"));if(T.nbf>S+(p.clockTolerance||0))return m(new t("jwt not active",new Date(T.nbf*1e3)))}if(typeof T.exp<"u"&&!p.ignoreExpiration){if(typeof T.exp!="number")return m(new e("invalid exp value"));if(S>=T.exp+(p.clockTolerance||0))return m(new r("jwt expired",new Date(T.exp*1e3)))}if(p.audience){const E=Array.isArray(p.audience)?p.audience:[p.audience];if(!(Array.isArray(T.aud)?T.aud:[T.aud]).some(function(O){return E.some(function(j){return j instanceof RegExp?j.test(O):j===O})}))return m(new e("jwt audience invalid. expected: "+E.join(" or ")))}if(p.issuer&&(typeof p.issuer=="string"&&T.iss!==p.issuer||Array.isArray(p.issuer)&&p.issuer.indexOf(T.iss)===-1))return m(new e("jwt issuer invalid. expected: "+p.issuer));if(p.subject&&T.sub!==p.subject)return m(new e("jwt subject invalid. expected: "+p.subject));if(p.jwtid&&T.jti!==p.jwtid)return m(new e("jwt jwtid invalid. expected: "+p.jwtid));if(p.nonce&&T.nonce!==p.nonce)return m(new e("jwt nonce invalid. expected: "+p.nonce));if(p.maxAge){if(typeof T.iat!="number")return m(new e("iat required when maxAge is specified"));const E=n(p.maxAge,T.iat);if(typeof E>"u")return m(new e('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));if(S>=E+(p.clockTolerance||0))return m(new r("maxAge exceeded",new Date(E*1e3)))}if(p.complete===!0){const E=I.signature;return m(null,{header:L,payload:T,signature:E})}return m(null,T)})},Fr}var Br,Pn;function Lo(){if(Pn)return Br;Pn=1;var e=1/0,t=9007199254740991,r=17976931348623157e292,i=NaN,n="[object Arguments]",a="[object Function]",s="[object GeneratorFunction]",l="[object String]",c="[object Symbol]",f=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,u=/^0o[0-7]+$/i,v=/^(?:0|[1-9]\d*)$/,g=parseInt;function b(y,_){for(var z=-1,ee=y?y.length:0,ie=Array(ee);++z<ee;)ie[z]=_(y[z],z,y);return ie}function A(y,_,z,ee){for(var ie=y.length,ue=z+-1;++ue<ie;)if(_(y[ue],ue,y))return ue;return-1}function p(y,_,z){if(_!==_)return A(y,h,z);for(var ee=z-1,ie=y.length;++ee<ie;)if(y[ee]===_)return ee;return-1}function h(y){return y!==y}function m(y,_){for(var z=-1,ee=Array(y);++z<y;)ee[z]=_(z);return ee}function S(y,_){return b(_,function(z){return y[z]})}function P(y,_){return function(z){return y(_(z))}}var I=Object.prototype,L=I.hasOwnProperty,R=I.toString,N=I.propertyIsEnumerable,k=P(Object.keys,Object),D=Math.max;function H(y,_){var z=j(y)||O(y)?m(y.length,String):[],ee=z.length,ie=!!ee;for(var ue in y)L.call(y,ue)&&!(ie&&(ue=="length"||E(ue,ee)))&&z.push(ue);return z}function T(y){if(!x(y))return k(y);var _=[];for(var z in Object(y))L.call(y,z)&&z!="constructor"&&_.push(z);return _}function E(y,_){return _=_??t,!!_&&(typeof y=="number"||v.test(y))&&y>-1&&y%1==0&&y<_}function x(y){var _=y&&y.constructor,z=typeof _=="function"&&_.prototype||I;return y===z}function C(y,_,z,ee){y=$(y)?y:Ba(y),z=z&&!ee?_a(z):0;var ie=y.length;return z<0&&(z=D(ie+z,0)),K(y)?z<=ie&&y.indexOf(_,z)>-1:!!ie&&p(y,_,z)>-1}function O(y){return B(y)&&L.call(y,"callee")&&(!N.call(y,"callee")||R.call(y)==n)}var j=Array.isArray;function $(y){return y!=null&&M(y.length)&&!V(y)}function B(y){return W(y)&&$(y)}function V(y){var _=X(y)?R.call(y):"";return _==a||_==s}function M(y){return typeof y=="number"&&y>-1&&y%1==0&&y<=t}function X(y){var _=typeof y;return!!y&&(_=="object"||_=="function")}function W(y){return!!y&&typeof y=="object"}function K(y){return typeof y=="string"||!j(y)&&W(y)&&R.call(y)==l}function Ie(y){return typeof y=="symbol"||W(y)&&R.call(y)==c}function ka(y){if(!y)return y===0?y:0;if(y=qa(y),y===e||y===-e){var _=y<0?-1:1;return _*r}return y===y?y:0}function _a(y){var _=ka(y),z=_%1;return _===_?z?_-z:_:0}function qa(y){if(typeof y=="number")return y;if(Ie(y))return i;if(X(y)){var _=typeof y.valueOf=="function"?y.valueOf():y;y=X(_)?_+"":_}if(typeof y!="string")return y===0?y:+y;y=y.replace(f,"");var z=d.test(y);return z||u.test(y)?g(y.slice(2),z?2:8):o.test(y)?i:+y}function Fa(y){return $(y)?H(y):T(y)}function Ba(y){return y?S(y,Fa(y)):[]}return Br=C,Br}var zr,Nn;function jo(){if(Nn)return zr;Nn=1;var e="[object Boolean]",t=Object.prototype,r=t.toString;function i(a){return a===!0||a===!1||n(a)&&r.call(a)==e}function n(a){return!!a&&typeof a=="object"}return zr=i,zr}var Mr,Dn;function $o(){if(Dn)return Mr;Dn=1;var e=1/0,t=17976931348623157e292,r=NaN,i="[object Symbol]",n=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,f=Object.prototype,o=f.toString;function d(h){return typeof h=="number"&&h==A(h)}function u(h){var m=typeof h;return!!h&&(m=="object"||m=="function")}function v(h){return!!h&&typeof h=="object"}function g(h){return typeof h=="symbol"||v(h)&&o.call(h)==i}function b(h){if(!h)return h===0?h:0;if(h=p(h),h===e||h===-e){var m=h<0?-1:1;return m*t}return h===h?h:0}function A(h){var m=b(h),S=m%1;return m===m?S?m-S:m:0}function p(h){if(typeof h=="number")return h;if(g(h))return r;if(u(h)){var m=typeof h.valueOf=="function"?h.valueOf():h;h=u(m)?m+"":m}if(typeof h!="string")return h===0?h:+h;h=h.replace(n,"");var S=s.test(h);return S||l.test(h)?c(h.slice(2),S?2:8):a.test(h)?r:+h}return Mr=d,Mr}var Gr,kn;function Po(){if(kn)return Gr;kn=1;var e="[object Number]",t=Object.prototype,r=t.toString;function i(a){return!!a&&typeof a=="object"}function n(a){return typeof a=="number"||i(a)&&r.call(a)==e}return Gr=n,Gr}var Hr,_n;function No(){if(_n)return Hr;_n=1;var e="[object Object]";function t(u){var v=!1;if(u!=null&&typeof u.toString!="function")try{v=!!(u+"")}catch{}return v}function r(u,v){return function(g){return u(v(g))}}var i=Function.prototype,n=Object.prototype,a=i.toString,s=n.hasOwnProperty,l=a.call(Object),c=n.toString,f=r(Object.getPrototypeOf,Object);function o(u){return!!u&&typeof u=="object"}function d(u){if(!o(u)||c.call(u)!=e||t(u))return!1;var v=f(u);if(v===null)return!0;var g=s.call(v,"constructor")&&v.constructor;return typeof g=="function"&&g instanceof g&&a.call(g)==l}return Hr=d,Hr}var Vr,qn;function Do(){if(qn)return Vr;qn=1;var e="[object String]",t=Object.prototype,r=t.toString,i=Array.isArray;function n(s){return!!s&&typeof s=="object"}function a(s){return typeof s=="string"||!i(s)&&n(s)&&r.call(s)==e}return Vr=a,Vr}var Ur,Fn;function ko(){if(Fn)return Ur;Fn=1;var e="Expected a function",t=1/0,r=17976931348623157e292,i=NaN,n="[object Symbol]",a=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt,o=Object.prototype,d=o.toString;function u(S,P){var I;if(typeof P!="function")throw new TypeError(e);return S=h(S),function(){return--S>0&&(I=P.apply(this,arguments)),S<=1&&(P=void 0),I}}function v(S){return u(2,S)}function g(S){var P=typeof S;return!!S&&(P=="object"||P=="function")}function b(S){return!!S&&typeof S=="object"}function A(S){return typeof S=="symbol"||b(S)&&d.call(S)==n}function p(S){if(!S)return S===0?S:0;if(S=m(S),S===t||S===-t){var P=S<0?-1:1;return P*r}return S===S?S:0}function h(S){var P=p(S),I=P%1;return P===P?I?P-I:P:0}function m(S){if(typeof S=="number")return S;if(A(S))return i;if(g(S)){var P=typeof S.valueOf=="function"?S.valueOf():S;S=g(P)?P+"":P}if(typeof S!="string")return S===0?S:+S;S=S.replace(a,"");var I=l.test(S);return I||c.test(S)?f(S.slice(2),I?2:8):s.test(S)?i:+S}return Ur=v,Ur}var Xr,Bn;function _o(){if(Bn)return Xr;Bn=1;const e=Aa(),t=ja(),r=La(),i=ri(),n=Lo(),a=jo(),s=$o(),l=Po(),c=No(),f=Do(),o=ko(),{KeyObject:d,createSecretKey:u,createPrivateKey:v}=yt,g=["RS256","RS384","RS512","ES256","ES384","ES512","HS256","HS384","HS512","none"];t&&g.splice(3,0,"PS256","PS384","PS512");const b={expiresIn:{isValid:function(I){return s(I)||f(I)&&I},message:'"expiresIn" should be a number of seconds or string representing a timespan'},notBefore:{isValid:function(I){return s(I)||f(I)&&I},message:'"notBefore" should be a number of seconds or string representing a timespan'},audience:{isValid:function(I){return f(I)||Array.isArray(I)},message:'"audience" must be a string or array'},algorithm:{isValid:n.bind(null,g),message:'"algorithm" must be a valid string enum value'},header:{isValid:c,message:'"header" must be an object'},encoding:{isValid:f,message:'"encoding" must be a string'},issuer:{isValid:f,message:'"issuer" must be a string'},subject:{isValid:f,message:'"subject" must be a string'},jwtid:{isValid:f,message:'"jwtid" must be a string'},noTimestamp:{isValid:a,message:'"noTimestamp" must be a boolean'},keyid:{isValid:f,message:'"keyid" must be a string'},mutatePayload:{isValid:a,message:'"mutatePayload" must be a boolean'},allowInsecureKeySizes:{isValid:a,message:'"allowInsecureKeySizes" must be a boolean'},allowInvalidAsymmetricKeyTypes:{isValid:a,message:'"allowInvalidAsymmetricKeyTypes" must be a boolean'}},A={iat:{isValid:l,message:'"iat" should be a number of seconds'},exp:{isValid:l,message:'"exp" should be a number of seconds'},nbf:{isValid:l,message:'"nbf" should be a number of seconds'}};function p(I,L,R,N){if(!c(R))throw new Error('Expected "'+N+'" to be a plain object.');Object.keys(R).forEach(function(k){const D=I[k];if(!D){if(!L)throw new Error('"'+k+'" is not allowed in "'+N+'"');return}if(!D.isValid(R[k]))throw new Error(D.message)})}function h(I){return p(b,!1,I,"options")}function m(I){return p(A,!0,I,"payload")}const S={audience:"aud",issuer:"iss",subject:"sub",jwtid:"jti"},P=["expiresIn","notBefore","noTimestamp","audience","issuer","subject","jwtid"];return Xr=function(I,L,R,N){typeof R=="function"?(N=R,R={}):R=R||{};const k=typeof I=="object"&&!Buffer.isBuffer(I),D=Object.assign({alg:R.algorithm||"HS256",typ:k?"JWT":void 0,kid:R.keyid},R.header);function H(x){if(N)return N(x);throw x}if(!L&&R.algorithm!=="none")return H(new Error("secretOrPrivateKey must have a value"));if(L!=null&&!(L instanceof d))try{L=v(L)}catch{try{L=u(typeof L=="string"?Buffer.from(L):L)}catch{return H(new Error("secretOrPrivateKey is not valid key material"))}}if(D.alg.startsWith("HS")&&L.type!=="secret")return H(new Error(`secretOrPrivateKey must be a symmetric key when using ${D.alg}`));if(/^(?:RS|PS|ES)/.test(D.alg)){if(L.type!=="private")return H(new Error(`secretOrPrivateKey must be an asymmetric key when using ${D.alg}`));if(!R.allowInsecureKeySizes&&!D.alg.startsWith("ES")&&L.asymmetricKeyDetails!==void 0&&L.asymmetricKeyDetails.modulusLength<2048)return H(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${D.alg}`))}if(typeof I>"u")return H(new Error("payload is required"));if(k){try{m(I)}catch(x){return H(x)}R.mutatePayload||(I=Object.assign({},I))}else{const x=P.filter(function(C){return typeof R[C]<"u"});if(x.length>0)return H(new Error("invalid "+x.join(",")+" option for "+typeof I+" payload"))}if(typeof I.exp<"u"&&typeof R.expiresIn<"u")return H(new Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));if(typeof I.nbf<"u"&&typeof R.notBefore<"u")return H(new Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));try{h(R)}catch(x){return H(x)}if(!R.allowInvalidAsymmetricKeyTypes)try{r(D.alg,L)}catch(x){return H(x)}const T=I.iat||Math.floor(Date.now()/1e3);if(R.noTimestamp?delete I.iat:k&&(I.iat=T),typeof R.notBefore<"u"){try{I.nbf=e(R.notBefore,T)}catch(x){return H(x)}if(typeof I.nbf>"u")return H(new Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'))}if(typeof R.expiresIn<"u"&&typeof I=="object"){try{I.exp=e(R.expiresIn,T)}catch(x){return H(x)}if(typeof I.exp>"u")return H(new Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'))}Object.keys(S).forEach(function(x){const C=S[x];if(typeof R[x]<"u"){if(typeof I[C]<"u")return H(new Error('Bad "options.'+x+'" option. The payload already has an "'+C+'" property.'));I[C]=R[x]}});const E=R.encoding||"utf8";if(typeof N=="function")N=N&&o(N),i.createSign({header:D,privateKey:L,payload:I,encoding:E}).once("error",N).once("done",function(x){if(!R.allowInsecureKeySizes&&/^(?:RS|PS)/.test(D.alg)&&x.length<256)return N(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${D.alg}`));N(null,x)});else{let x=i.sign({header:D,payload:I,secret:L,encoding:E});if(!R.allowInsecureKeySizes&&/^(?:RS|PS)/.test(D.alg)&&x.length<256)throw new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${D.alg}`);return x}},Xr}var Kr,zn;function qo(){return zn||(zn=1,Kr={decode:Ea(),verify:Oo(),sign:_o(),JsonWebTokenError:Et(),NotBeforeError:Sa(),TokenExpiredError:Ra()}),Kr}var Fo=qo();const $a=Ws(Fo),ae=new la,Pa="structa-secret-key-2026";ae.use("/api/*",Rs());ae.use("/static/*",Ns({root:"./public"}));const Na=async(e,t)=>{const r=e.req.header("Authorization");if(!r||!r.startsWith("Bearer "))return e.json({error:"Token não fornecido"},401);const i=r.substring(7);try{const n=$a.verify(i,Pa);e.set("user",n),await t()}catch{return e.json({error:"Token inválido"},401)}};ae.post("/api/auth/login",async e=>{try{const{email:t,password:r}=await e.req.json();if(!t||!r)return e.json({error:"Email e senha são obrigatórios"},400);const{DB:i}=e.env,n=await i.prepare("SELECT * FROM users WHERE email = ? AND status = ?").bind(t,"active").first();if(!n)return e.json({error:"Credenciais inválidas"},401);if(!await Ks.compare(r,n.password_hash))return e.json({error:"Credenciais inválidas"},401);const s=$a.sign({id:n.id,email:n.email,name:n.name,role:n.role},Pa,{expiresIn:"8h"});return e.json({token:s,user:{id:n.id,email:n.email,name:n.name,role:n.role}})}catch(t){return console.error("Login error:",t),e.json({error:"Erro ao fazer login"},500)}});ae.get("/api/auth/me",Na,async e=>{const t=e.get("user");return e.json({user:t})});ae.get("/api/users",Na,async e=>{try{if(e.get("user").role!=="admin")return e.json({error:"Acesso negado"},403);const{DB:r}=e.env,{results:i}=await r.prepare("SELECT id, email, name, role, status, created_at FROM users ORDER BY created_at DESC").all();return e.json({users:i})}catch(t){return console.error("List users error:",t),e.json({error:"Erro ao listar usuários"},500)}});ae.get("/",e=>e.html(`
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
  `));ae.get("/dashboard",e=>e.html(`
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
  `));ae.get("/vendas",e=>e.html(`
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
        ${Bo()}
        
        <div class="main-content">
            ${zo("Apresentação de Vendas")}
            
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
  `));ae.get("/vendas/apresentacao",e=>e.html(`
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
                window.location.href = '/vendas/apresentacao/slide2';
            }
            
            function previousSlide() {
                // Slide 1 não tem slide anterior
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
  `));ae.get("/vendas/apresentacao/slide2",e=>e.html(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Slide 2 - Presença Nacional | Structa</title>
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
                overflow-y: auto;
                max-width: 1400px;
                margin: 0 auto;
                width: 100%;
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
                margin: 0 auto 12px;
                box-shadow: 0 3px 12px rgba(201, 165, 109, 0.3);
            }
            
            .main-title {
                font-family: 'Playfair Display', serif;
                font-size: 2rem;
                font-weight: 700;
                color: #C9A56D;
                text-align: center;
                margin-bottom: 10px;
                line-height: 1.2;
            }
            
            .subtitle {
                font-size: 0.9rem;
                color: #F6F7F8;
                text-align: center;
                margin-bottom: 15px;
                line-height: 1.5;
                max-width: 900px;
                margin-left: auto;
                margin-right: auto;
            }
            
            .divider {
                width: 100%;
                max-width: 800px;
                height: 1px;
                background: linear-gradient(to right, transparent, rgba(201, 165, 109, 0.4), transparent);
                margin: 15px auto;
            }
            
            .cities-container {
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(201, 165, 109, 0.2);
                border-radius: 12px;
                padding: 20px;
                margin-bottom: 20px;
            }
            
            .cities-title {
                font-family: 'Playfair Display', serif;
                font-size: 1.3rem;
                color: #C9A56D;
                text-align: center;
                margin-bottom: 15px;
                font-weight: 600;
            }
            
            .cities-grid {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 12px;
                margin-bottom: 10px;
            }
            
            .city-card {
                background: rgba(246, 247, 248, 0.08);
                border: 1px solid rgba(201, 165, 109, 0.15);
                border-radius: 8px;
                padding: 12px;
                display: flex;
                align-items: center;
                gap: 8px;
                transition: all 0.3s;
            }
            
            .city-card:hover {
                background: rgba(201, 165, 109, 0.1);
                border-color: rgba(201, 165, 109, 0.3);
                transform: translateY(-2px);
            }
            
            .city-card i {
                color: #C9A56D;
                font-size: 0.9rem;
            }
            
            .city-info {
                flex: 1;
            }
            
            .city-name {
                font-size: 0.8rem;
                font-weight: 600;
                color: #F6F7F8;
                margin-bottom: 2px;
            }
            
            .city-region {
                font-size: 0.65rem;
                color: rgba(246, 247, 248, 0.7);
            }
            
            .benefits-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 20px;
                margin-bottom: 20px;
            }
            
            .benefit-card {
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(201, 165, 109, 0.2);
                border-radius: 12px;
                padding: 20px;
                text-align: center;
                transition: all 0.3s;
            }
            
            .benefit-card:hover {
                background: rgba(201, 165, 109, 0.08);
                transform: translateY(-3px);
                box-shadow: 0 6px 20px rgba(201, 165, 109, 0.15);
            }
            
            .benefit-icon {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: linear-gradient(135deg, #C9A56D 0%, #B89558 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 12px;
                font-size: 1.5rem;
                color: white;
            }
            
            .benefit-title {
                font-size: 0.85rem;
                font-weight: 600;
                color: #C9A56D;
                margin-bottom: 6px;
                line-height: 1.3;
            }
            
            .benefit-text {
                font-size: 0.7rem;
                color: rgba(246, 247, 248, 0.8);
                line-height: 1.4;
            }
            
            .navigation-buttons {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 20px;
                margin-top: 15px;
            }
            
            .nav-btn {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                padding: 12px 30px;
                border-radius: 50px;
                font-size: 0.85rem;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.3s;
                border: none;
                text-decoration: none;
            }
            
            .nav-btn-back {
                background: rgba(255, 255, 255, 0.1);
                color: white;
                border: 1px solid rgba(255, 255, 255, 0.2);
            }
            
            .nav-btn-back:hover {
                background: rgba(255, 255, 255, 0.15);
            }
            
            .nav-btn-next {
                background: linear-gradient(135deg, #C9A56D 0%, #B89558 100%);
                color: white;
                box-shadow: 0 4px 15px rgba(201, 165, 109, 0.3);
            }
            
            .nav-btn-next:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(201, 165, 109, 0.4);
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
            
            /* Responsivo */
            @media (max-width: 1024px) {
                .slide-content { padding: 15px 30px 70px; }
                .main-title { font-size: 1.6rem; }
                .subtitle { font-size: 0.85rem; }
                .cities-grid { grid-template-columns: repeat(3, 1fr); gap: 10px; }
                .benefits-grid { grid-template-columns: 1fr; gap: 15px; }
            }
            
            @media (max-width: 768px) {
                .slide-content { padding: 12px 20px 60px; }
                .premium-badge { padding: 5px 20px; font-size: 0.7rem; }
                .main-title { font-size: 1.3rem; }
                .subtitle { font-size: 0.75rem; }
                .cities-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; }
                .city-card { padding: 10px; }
                .city-name { font-size: 0.75rem; }
                .city-region { font-size: 0.6rem; }
                .benefit-icon { width: 50px; height: 50px; font-size: 1.2rem; }
                .benefit-title { font-size: 0.8rem; }
                .benefit-text { font-size: 0.65rem; }
                .nav-btn { padding: 10px 20px; font-size: 0.75rem; }
            }
            
            @media (max-height: 750px) {
                .slide-content { padding: 10px 30px 60px; }
                .premium-badge { margin-bottom: 8px; }
                .main-title { font-size: 1.5rem; margin-bottom: 8px; }
                .subtitle { font-size: 0.8rem; margin-bottom: 12px; }
                .divider { margin: 12px auto; }
                .cities-container { padding: 15px; margin-bottom: 15px; }
                .cities-title { font-size: 1.1rem; margin-bottom: 12px; }
                .benefit-card { padding: 15px; }
                .benefit-icon { width: 50px; height: 50px; }
            }
        </style>
    </head>
    <body>
        <div class="slide-container">
            <button class="exit-button" onclick="window.location.href='/vendas'">
                <i class="fas fa-times"></i> Sair da Apresentação
            </button>
            
            <div class="slide-content">
                <!-- Badge -->
                <div style="text-align: center;">
                    <div class="premium-badge">Presença Nacional</div>
                </div>
                
                <!-- Título -->
                <h1 class="main-title">Onde estamos mudando o jogo no mercado imobiliário</h1>
                
                <!-- Subtítulo -->
                <p class="subtitle">Atuamos em mais de 14 estados e já ajudamos milhares de brasileiros a conquistar seus imóveis com inteligência financeira.</p>
                
                <!-- Divisor -->
                <div class="divider"></div>
                
                <!-- Container de Cidades -->
                <div class="cities-container">
                    <h2 class="cities-title">Os melhores investimentos imobiliários em todo o Brasil</h2>
                    
                    <div class="cities-grid">
                        <div class="city-card">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="city-info">
                                <div class="city-name">São Paulo</div>
                                <div class="city-region">Sudeste</div>
                            </div>
                        </div>
                        <div class="city-card">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="city-info">
                                <div class="city-name">Rio de Janeiro</div>
                                <div class="city-region">Sudeste</div>
                            </div>
                        </div>
                        <div class="city-card">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="city-info">
                                <div class="city-name">Minas Gerais</div>
                                <div class="city-region">Sudeste</div>
                            </div>
                        </div>
                        <div class="city-card">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="city-info">
                                <div class="city-name">Distrito Federal</div>
                                <div class="city-region">Centro-Oeste</div>
                            </div>
                        </div>
                        <div class="city-card">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="city-info">
                                <div class="city-name">Goiás</div>
                                <div class="city-region">Centro-Oeste</div>
                            </div>
                        </div>
                        <div class="city-card">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="city-info">
                                <div class="city-name">Paraná</div>
                                <div class="city-region">Sul</div>
                            </div>
                        </div>
                        <div class="city-card">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="city-info">
                                <div class="city-name">Santa Catarina</div>
                                <div class="city-region">Sul</div>
                            </div>
                        </div>
                        <div class="city-card">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="city-info">
                                <div class="city-name">Rio Grande do Sul</div>
                                <div class="city-region">Sul</div>
                            </div>
                        </div>
                        <div class="city-card">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="city-info">
                                <div class="city-name">Bahia</div>
                                <div class="city-region">Nordeste</div>
                            </div>
                        </div>
                        <div class="city-card">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="city-info">
                                <div class="city-name">Ceará</div>
                                <div class="city-region">Nordeste</div>
                            </div>
                        </div>
                        <div class="city-card">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="city-info">
                                <div class="city-name">Paraíba</div>
                                <div class="city-region">Nordeste</div>
                            </div>
                        </div>
                        <div class="city-card">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="city-info">
                                <div class="city-name">Rio Grande do Norte</div>
                                <div class="city-region">Nordeste</div>
                            </div>
                        </div>
                        <div class="city-card">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="city-info">
                                <div class="city-name">Pernambuco</div>
                                <div class="city-region">Nordeste</div>
                            </div>
                        </div>
                        <div class="city-card">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="city-info">
                                <div class="city-name">Alagoas</div>
                                <div class="city-region">Nordeste</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Benefícios -->
                <div class="benefits-grid">
                    <div class="benefit-card">
                        <div class="benefit-icon">
                            <i class="fas fa-check"></i>
                        </div>
                        <div class="benefit-title">Presença em mais de 14 estados brasileiros</div>
                        <div class="benefit-text">Cobertura nacional estratégica</div>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-icon">
                            <i class="fas fa-building"></i>
                        </div>
                        <div class="benefit-title">Suporte completo na locação</div>
                        <div class="benefit-text">Gestão end-to-end dos seus investimentos</div>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-icon">
                            <i class="fas fa-star"></i>
                        </div>
                        <div class="benefit-title">Oportunidades selecionadas</div>
                        <div class="benefit-text">Os melhores investimentos em cada região</div>
                    </div>
                </div>
                
                <!-- Navegação -->
                <div class="navigation-buttons">
                    <button class="nav-btn nav-btn-back" onclick="previousSlide()">
                        <i class="fas fa-arrow-left"></i> Voltar
                    </button>
                    <button class="nav-btn nav-btn-next" onclick="nextSlide()">
                        O que estão falando sobre nós <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
        
        <script>
            function nextSlide() {
                window.location.href = '/vendas/apresentacao/slide3';
            }
            
            function previousSlide() {
                window.location.href = '/vendas/apresentacao';
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
  `));ae.get("/vendas/apresentacao/slide3",e=>e.html(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Slide 3 - Nossa Metodologia | Structa</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
                font-family: 'Poppins', sans-serif;
                background: #F6F7F8;
                overflow: hidden;
            }
            
            .slide-container {
                width: 100vw;
                height: 100vh;
                display: flex;
                flex-direction: column;
                position: relative;
                overflow: hidden;
                background: #F6F7F8;
            }
            
            .slide-content {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 20px 40px 100px;
                overflow-y: auto;
                max-width: 1200px;
                margin: 0 auto;
                width: 100%;
            }
            
            .methodology-badge {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                background: rgba(201, 165, 109, 0.1);
                color: #C9A56D;
                padding: 8px 20px;
                border-radius: 50px;
                font-size: 0.75rem;
                font-weight: 500;
                margin: 0 auto 15px;
                border: 1px solid rgba(201, 165, 109, 0.3);
            }
            
            .main-title {
                font-family: 'Playfair Display', serif;
                font-size: 2.2rem;
                font-weight: 700;
                color: #365C73;
                text-align: center;
                margin-bottom: 8px;
                line-height: 1.2;
            }
            
            .subtitle {
                font-size: 1rem;
                color: #C9A56D;
                text-align: center;
                font-weight: 600;
                margin-bottom: 8px;
            }
            
            .description {
                font-size: 0.85rem;
                color: #666;
                text-align: center;
                margin-bottom: 20px;
                line-height: 1.5;
            }
            
            .progress-indicator {
                width: 100%;
                height: 1px;
                background: #E0E0E0;
                margin: 20px 0;
                position: relative;
            }
            
            .progress-dot {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                width: 12px;
                height: 12px;
                background: #C9A56D;
                border-radius: 50%;
                transition: all 0.3s;
            }
            
            .timeline-container {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 30px;
                position: relative;
            }
            
            .timeline-line {
                position: absolute;
                top: 20px;
                left: 60px;
                right: 60px;
                height: 2px;
                background: #E0E0E0;
                z-index: 0;
            }
            
            .timeline-progress {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                background: #C9A56D;
                transition: width 0.5s ease;
            }
            
            .timeline-step {
                display: flex;
                flex-direction: column;
                align-items: center;
                z-index: 1;
                cursor: pointer;
                transition: all 0.3s;
            }
            
            .timeline-circle {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: #E8E8E8;
                color: #999;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 700;
                font-size: 1.1rem;
                margin-bottom: 8px;
                transition: all 0.3s;
                border: 3px solid transparent;
            }
            
            .timeline-step.active .timeline-circle {
                background: #C9A56D;
                color: white;
                border-color: #C9A56D;
                box-shadow: 0 4px 12px rgba(201, 165, 109, 0.4);
            }
            
            .timeline-step.completed .timeline-circle {
                background: #C9A56D;
                color: white;
            }
            
            .timeline-step.completed .timeline-circle i {
                font-size: 1.2rem;
            }
            
            .timeline-label {
                font-size: 0.75rem;
                font-weight: 600;
                color: #999;
                text-align: center;
                max-width: 120px;
                line-height: 1.2;
            }
            
            .timeline-step.active .timeline-label {
                color: #C9A56D;
            }
            
            .timeline-step.completed .timeline-label {
                color: #C9A56D;
            }
            
            .content-card {
                background: white;
                border-radius: 16px;
                padding: 40px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                margin-bottom: 30px;
                transition: opacity 0.3s ease;
            }
            
            .card-header {
                text-align: center;
                margin-bottom: 30px;
            }
            
            .card-label {
                font-size: 0.75rem;
                color: #365C73;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 12px;
            }
            
            .card-icon {
                width: 70px;
                height: 70px;
                border-radius: 50%;
                background: rgba(201, 165, 109, 0.1);
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 15px;
            }
            
            .card-icon i {
                font-size: 2rem;
                color: #C9A56D;
            }
            
            .card-title {
                font-family: 'Playfair Display', serif;
                font-size: 1.6rem;
                color: #365C73;
                font-weight: 700;
                margin-bottom: 10px;
            }
            
            .card-subtitle {
                font-size: 0.9rem;
                color: #666;
                line-height: 1.5;
            }
            
            .card-section-title {
                font-size: 0.9rem;
                color: #365C73;
                font-weight: 600;
                margin-bottom: 15px;
                margin-top: 25px;
            }
            
            .benefits-list {
                list-style: none;
                padding: 0;
            }
            
            .benefits-list li {
                display: flex;
                align-items: flex-start;
                gap: 12px;
                margin-bottom: 12px;
                font-size: 0.85rem;
                color: #555;
                line-height: 1.5;
            }
            
            .benefits-list li i {
                color: #C9A56D;
                margin-top: 3px;
                font-size: 0.9rem;
            }
            
            .action-button {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                background: linear-gradient(135deg, #C9A56D 0%, #B89558 100%);
                color: white;
                padding: 14px 32px;
                border-radius: 50px;
                font-size: 0.9rem;
                font-weight: 500;
                text-decoration: none;
                transition: all 0.3s;
                border: none;
                cursor: pointer;
                margin: 20px auto 0;
                box-shadow: 0 4px 15px rgba(201, 165, 109, 0.3);
            }
            
            .action-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(201, 165, 109, 0.4);
            }
            
            .navigation-buttons {
                position: fixed;
                bottom: 30px;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                gap: 20px;
                z-index: 1000;
            }
            
            .nav-btn {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                padding: 12px 30px;
                border-radius: 50px;
                font-size: 0.85rem;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.3s;
                border: none;
            }
            
            .nav-btn-back {
                background: white;
                color: #365C73;
                border: 1px solid #E0E0E0;
            }
            
            .nav-btn-back:hover {
                background: #F6F7F8;
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            }
            
            .nav-btn-next {
                background: #365C73;
                color: white;
                border: 1px solid #365C73;
            }
            
            .nav-btn-next:hover {
                background: #2A4A5E;
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(54, 92, 115, 0.3);
            }
            
            .exit-button {
                position: fixed;
                top: 15px;
                right: 15px;
                background: rgba(0, 0, 0, 0.05);
                color: #365C73;
                border: 1px solid rgba(0, 0, 0, 0.1);
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
                background: rgba(0, 0, 0, 0.1);
            }
            
            /* Responsivo */
            @media (max-width: 1024px) {
                .slide-content { padding: 15px 30px 90px; }
                .main-title { font-size: 1.8rem; }
                .content-card { padding: 30px; }
            }
            
            @media (max-width: 768px) {
                .slide-content { padding: 12px 20px 80px; }
                .main-title { font-size: 1.5rem; }
                .subtitle { font-size: 0.9rem; }
                .description { font-size: 0.8rem; }
                .timeline-container { flex-direction: column; gap: 15px; }
                .timeline-line { display: none; }
                .timeline-circle { width: 40px; height: 40px; font-size: 0.9rem; }
                .timeline-label { font-size: 0.7rem; max-width: 100px; }
                .content-card { padding: 25px; }
                .card-title { font-size: 1.3rem; }
                .nav-btn { padding: 10px 24px; font-size: 0.75rem; }
            }
            
            @media (max-height: 750px) {
                .slide-content { padding: 10px 30px 80px; }
                .main-title { font-size: 1.8rem; margin-bottom: 6px; }
                .timeline-container { margin-bottom: 20px; }
                .content-card { padding: 30px; margin-bottom: 20px; }
            }
        </style>
    </head>
    <body>
        <div class="slide-container">
            <button class="exit-button" onclick="window.location.href='/vendas'">
                <i class="fas fa-times"></i> Sair da Apresentação
            </button>
            
            <div class="slide-content">
                <!-- Badge -->
                <div style="text-align: center;">
                    <div class="methodology-badge">
                        <i class="fas fa-cog"></i>
                        <span>NOSSA METODOLOGIA</span>
                    </div>
                </div>
                
                <!-- Título -->
                <h1 class="main-title">Como trabalhamos na STRUCTA</h1>
                <p class="subtitle">Consultoria de ponta a ponta</p>
                <p class="description">Acompanhamos toda sua jornada de investimento imobiliário, da análise inicial à rentabilidade mensal.</p>
                
                <!-- Progress Indicator -->
                <div class="progress-indicator">
                    <div class="progress-dot" id="progressDot"></div>
                </div>
                
                <!-- Timeline -->
                <div class="timeline-container">
                    <div class="timeline-line">
                        <div class="timeline-progress" id="timelineProgress"></div>
                    </div>
                    
                    <div class="timeline-step" id="step1" onclick="goToPhase(1)">
                        <div class="timeline-circle">
                            <span class="step-number">1</span>
                            <i class="fas fa-check" style="display: none;"></i>
                        </div>
                        <div class="timeline-label">HOJE</div>
                    </div>
                    
                    <div class="timeline-step" id="step2" onclick="goToPhase(2)">
                        <div class="timeline-circle">
                            <span class="step-number">2</span>
                            <i class="fas fa-check" style="display: none;"></i>
                        </div>
                        <div class="timeline-label">COMPRA DO IMÓVEL</div>
                    </div>
                    
                    <div class="timeline-step" id="step3" onclick="goToPhase(3)">
                        <div class="timeline-circle">
                            <span class="step-number">3</span>
                            <i class="fas fa-check" style="display: none;"></i>
                        </div>
                        <div class="timeline-label">RENDA VITALÍCIA</div>
                    </div>
                </div>
                
                <!-- Content Card -->
                <div class="content-card" id="contentCard">
                    <div class="card-header">
                        <div class="card-label" id="cardLabel">HOJE</div>
                        <div class="card-icon" id="cardIcon">
                            <i class="fas fa-credit-card"></i>
                        </div>
                        <h2 class="card-title" id="cardTitle">Obtenção do crédito</h2>
                        <p class="card-subtitle" id="cardSubtitle">Auxiliamos você a escolher o melhor caminho para comprar seu imóvel</p>
                    </div>
                    
                    <div>
                        <p class="card-section-title">O suporte que torna sua jornada mais fácil:</p>
                        <ul class="benefits-list" id="benefitsList">
                            <li><i class="fas fa-check-circle"></i> Análise detalhada do seu perfil financeiro</li>
                            <li><i class="fas fa-check-circle"></i> Seleção estratégica do crédito ideal</li>
                            <li><i class="fas fa-check-circle"></i> Formalização e segurança na contratação</li>
                            <li><i class="fas fa-check-circle"></i> Relatório de viabilidade personalizado</li>
                            <li><i class="fas fa-check-circle"></i> Acompanhamento consultivo em cada passo</li>
                        </ul>
                        
                        <div style="text-align: center;">
                            <button class="action-button" id="actionButton" onclick="handleNext()">
                                Avançar para Escolha do Imóvel <i class="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Navegação -->
            <div class="navigation-buttons">
                <button class="nav-btn nav-btn-back" onclick="handleBack()">
                    <i class="fas fa-arrow-left"></i> Voltar
                </button>
                <button class="nav-btn nav-btn-next" onclick="goToNextSlide()">
                    Próximo Slide <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
        
        <script>
            let currentPhase = 1;
            const totalPhases = 3;
            
            const phaseData = {
                1: {
                    label: 'HOJE',
                    icon: 'fa-credit-card',
                    title: 'Obtenção do crédito',
                    subtitle: 'Auxiliamos você a escolher o melhor caminho para comprar seu imóvel',
                    benefits: [
                        'Análise detalhada do seu perfil financeiro',
                        'Seleção estratégica do crédito ideal',
                        'Formalização e segurança na contratação',
                        'Relatório de viabilidade personalizado',
                        'Acompanhamento consultivo em cada passo'
                    ],
                    buttonText: 'Avançar para Escolha do Imóvel'
                },
                2: {
                    label: 'COMPRA DO IMÓVEL',
                    icon: 'fa-home',
                    title: 'Escolha do imóvel ideal',
                    subtitle: 'Selecionamos imóveis com alto potencial de valorização e rentabilidade',
                    benefits: [
                        'Liberação do crédito',
                        'Estudo de rentabilidade',
                        'Escolha do imóvel',
                        'Compra do imóvel',
                        'Decoração e mobília'
                    ],
                    buttonText: 'Avançar para Rentabilização'
                },
                3: {
                    label: 'RENDA VITALÍCIA',
                    icon: 'fa-chart-line',
                    title: 'Locação com alta rentabilidade',
                    subtitle: 'Gerenciamos a locação para garantir renda mensal acima da média do mercado',
                    benefits: [
                        'Anúncio nas plataformas',
                        'Gestão do preço dinâmico',
                        'Check-in e checkout',
                        'Limpeza e manutenção',
                        'Gestão completa da locação'
                    ],
                    buttonText: 'Entenda nosso Método'
                }
            };
            
            function updateContent() {
                const data = phaseData[currentPhase];
                const card = document.getElementById('contentCard');
                
                card.style.opacity = '0';
                
                setTimeout(() => {
                    document.getElementById('cardLabel').textContent = data.label;
                    document.getElementById('cardIcon').innerHTML = \`<i class="fas \${data.icon}"></i>\`;
                    document.getElementById('cardTitle').textContent = data.title;
                    document.getElementById('cardSubtitle').textContent = data.subtitle;
                    document.getElementById('actionButton').innerHTML = \`\${data.buttonText} <i class="fas fa-arrow-right"></i>\`;
                    
                    const benefitsList = document.getElementById('benefitsList');
                    benefitsList.innerHTML = '';
                    data.benefits.forEach(benefit => {
                        const li = document.createElement('li');
                        li.innerHTML = \`<i class="fas fa-check-circle"></i> \${benefit}\`;
                        benefitsList.appendChild(li);
                    });
                    
                    card.style.opacity = '1';
                }, 300);
            }
            
            function updateTimeline() {
                // Atualiza steps
                for (let i = 1; i <= totalPhases; i++) {
                    const step = document.getElementById(\`step\${i}\`);
                    const circle = step.querySelector('.timeline-circle');
                    const number = circle.querySelector('.step-number');
                    const check = circle.querySelector('i');
                    
                    step.classList.remove('active', 'completed');
                    
                    if (i < currentPhase) {
                        step.classList.add('completed');
                        number.style.display = 'none';
                        check.style.display = 'block';
                    } else if (i === currentPhase) {
                        step.classList.add('active');
                        number.style.display = 'block';
                        check.style.display = 'none';
                    } else {
                        number.style.display = 'block';
                        check.style.display = 'none';
                    }
                }
                
                // Atualiza progress line
                const progress = ((currentPhase - 1) / (totalPhases - 1)) * 100;
                document.getElementById('timelineProgress').style.width = progress + '%';
                
                // Atualiza progress dot
                const dotPosition = ((currentPhase - 1) / (totalPhases - 1)) * 100;
                document.getElementById('progressDot').style.left = dotPosition + '%';
            }
            
            function goToPhase(phase) {
                if (phase >= 1 && phase <= totalPhases) {
                    currentPhase = phase;
                    updateContent();
                    updateTimeline();
                }
            }
            
            function handleNext() {
                if (currentPhase < totalPhases) {
                    currentPhase++;
                    updateContent();
                    updateTimeline();
                } else {
                    goToNextSlide();
                }
            }
            
            function handleBack() {
                if (currentPhase > 1) {
                    currentPhase--;
                    updateContent();
                    updateTimeline();
                } else {
                    window.location.href = '/vendas/apresentacao/slide2';
                }
            }
            
            function goToNextSlide() {
                alert('Próximo slide será implementado!');
                // window.location.href = '/vendas/apresentacao/slide4';
            }
            
            // Navegação por teclado
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight' || e.key === ' ') {
                    e.preventDefault();
                    handleNext();
                }
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    handleBack();
                }
                if (e.key === 'Escape') {
                    window.location.href = '/vendas';
                }
            });
            
            // Inicializa
            updateContent();
            updateTimeline();
        <\/script>
    </body>
    </html>
  `));function Bo(){return`
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
  `}function zo(e){return`
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
  `}const Mn=new la,Mo=Object.assign({"/src/index.tsx":ae});let Da=!1;for(const[,e]of Object.entries(Mo))e&&(Mn.all("*",t=>{let r;try{r=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,r)}),Mn.notFound(t=>{let r;try{r=t.executionCtx}catch{}return e.fetch(t.req.raw,t.env,r)}),Da=!0);if(!Da)throw new Error("Can't import modules from ['/src/index.ts','/src/index.tsx','/app/server.ts']");export{Mn as default};
