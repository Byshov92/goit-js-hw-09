function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var r=i("7Y9D8");const l=document.querySelector(".form"),d=document.querySelector('button[type="submit"]');let u={};function a({position:t,delay:n}){const o=Math.random()>.3;setTimeout((()=>new Promise(((e,i)=>{o?e({position:t,delay:n}):i({position:t,delay:n})})).then((({position:t,delay:n})=>{e(r).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(r).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}))),n)}l.addEventListener("input",(function(e){let t=e.target.name,n=e.target.value;u[t]=Number(n)})),d.addEventListener("click",(function(e){e.preventDefault(),function({delay:e,step:t,amount:n}){for(let o=0;o<n;o+=1){let n={};n.position=o+1,n.delay=e+t*o,a(n)}}(u)}));
//# sourceMappingURL=03-promises.98db8c6e.js.map
