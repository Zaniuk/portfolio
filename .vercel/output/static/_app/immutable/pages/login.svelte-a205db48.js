import{S as P,i as D,s as T,e as s,t as I,k as g,c as l,a as x,h as L,d as f,m as Y,b as e,g as S,J as a,n as Z,w as $}from"../chunks/index-a7bc1a45.js";import{g as j}from"../chunks/navigation-0e6511d1.js";import"../chunks/singletons-d1fb5791.js";function q(B){let t,r,i,k,c,o,n,b,m,E,z,p,_,w,u;return{c(){t=s("form"),r=s("label"),i=s("p"),k=I("Email"),c=g(),o=s("input"),n=g(),b=s("label"),m=s("p"),E=I("Password"),z=g(),p=s("input"),_=g(),w=s("label"),u=s("input"),this.h()},l(h){t=l(h,"FORM",{class:!0});var d=x(t);r=l(d,"LABEL",{class:!0});var y=x(r);i=l(y,"P",{id:!0,class:!0});var A=x(i);k=L(A,"Email"),A.forEach(f),c=Y(y),o=l(y,"INPUT",{id:!0,type:!0,class:!0}),y.forEach(f),n=Y(d),b=l(d,"LABEL",{class:!0});var v=x(b);m=l(v,"P",{id:!0,class:!0});var C=x(m);E=L(C,"Password"),C.forEach(f),z=Y(v),p=l(v,"INPUT",{id:!0,type:!0,class:!0}),v.forEach(f),_=Y(d),w=l(d,"LABEL",{class:!0});var F=x(w);u=l(F,"INPUT",{id:!0,type:!0,class:!0}),F.forEach(f),d.forEach(f),this.h()},h(){e(i,"id","p-email"),e(i,"class","svelte-1xl8yxm"),e(o,"id","email"),e(o,"type","email"),o.required=!0,e(o,"class","svelte-1xl8yxm"),e(r,"class","svelte-1xl8yxm"),e(m,"id","p-pass"),e(m,"class","svelte-1xl8yxm"),e(p,"id","password"),e(p,"type","password"),p.required=!0,e(p,"class","svelte-1xl8yxm"),e(b,"class","svelte-1xl8yxm"),e(u,"id","submit"),e(u,"type","submit"),u.value="Login",e(u,"class","svelte-1xl8yxm"),e(w,"class","svelte-1xl8yxm"),e(t,"class","svelte-1xl8yxm")},m(h,d){S(h,t,d),a(t,r),a(r,i),a(i,k),a(r,c),a(r,o),a(t,n),a(t,b),a(b,m),a(m,E),a(b,z),a(b,p),a(t,_),a(t,w),a(w,u)},p:Z,i:Z,o:Z,d(h){h&&f(t)}}}function M(B){return $(()=>{let t=document.getElementById("submit"),r=document.getElementById("email"),i=document.getElementById("password");async function k(){const c={method:"POST",headers:{"Content-Type":"application/json"},body:`{"email":"${r.value}","password":"${i.value}"}`};return await await fetch("https://portfolio-backend-production-0477.up.railway.app/login",c).then(n=>n.json())}t.addEventListener("click",async c=>{c.preventDefault(),k().then(o=>{const n=o.token;n?(sessionStorage.setItem("token",n),j("/create")):console.error("error")})})}),[]}class J extends P{constructor(t){super(),D(this,t,M,q,T,{})}}export{J as default};