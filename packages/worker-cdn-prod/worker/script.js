!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){function n(e){return Response.redirect(e)}addEventListener("fetch",e=>{e.respondWith(async function(e){let t;try{const r=await async function(e){console.log("vcl_recv",e);const t=new URL(e.url);switch(t.host){case"antoligy.com":case"ax.gy":return n(t.href.replace(t.host,"alexwilson.tech"))}switch(t.pathname){case"/cv":return n("https://docs.google.com/document/d/1SlrbctqUQlhBtODC8c12Qft66b8j69jV1CSVcrYqdq0/")}return fetch(e)}(e),o=await async function(e,t){console.log("vcl_fetch",e,t);const n=new Headers(t.headers);if(t.status>=500)throw new Error("An error occurred");return new Response(t.body,Object.assign({},t,{headers:n,body:void 0}))}(e,r);t=o.clone()}catch(n){t=await async function(e,t){console.log("vcl_error",e,t);return new Response("\n    <!DOCTYPE html>\n    <HTML>\n      <body>\n        <p>An unexpected error occurred!</p>\n      </body>\n    </HTML>\n    ",{headers:new Headers({"content-type":"text/html"}),status:500,statusText:"INTERNAL SERVER ERROR"})}(e,n)}return async function(e,t){}(),await async function(e,t){if(console.log("vcl_deliver",e,t),t.http=new Headers(t.headers),t.http.has("content-type")&&t.http.get("content-type").includes("text/html")){const e={"Content-Security-Policy":"upgrade-insecure-requests","Strict-Transport-Security":"max-age=1000","X-Xss-Protection":"1; mode=block","X-Frame-Options":"DENY","X-Content-Type-Options":"nosniff","Referrer-Policy":"strict-origin-when-cross-origin"};Object.keys(e).map((n,r)=>{t.http.set(n,e[n])})}return new Response(t.body,Object.assign({},t,{headers:t.http,http:void 0,body:void 0}))}(e,t)}(e.request))})}]);