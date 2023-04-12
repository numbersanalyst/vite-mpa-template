import{T as r}from"./three.module-b2e604df.js";const n=""+new URL("javascript-8dac5379.svg",import.meta.url).href,l=""+new URL("../vite.svg",import.meta.url).href;function s(t){let e=0;const o=a=>{e=a,t.innerHTML=`count is ${e}`};t.addEventListener("click",()=>o(e+1)),o(0)}document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${l}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${n}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <a href="subpage1/index.html">Subpage1</a>
    <br>
    <a href="subpage2/index.html">Subpage2</a>
  </div>
`;s(document.querySelector("#counter"));console.log(r);
