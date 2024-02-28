import{_ as e}from"./index-h0Q0DYPJ.js";class a{constructor(){this.factor=3,this.radius=200}load(r){r&&(r.factor!==void 0&&(this.factor=r.factor),r.radius!==void 0&&(this.radius=r.radius))}}async function s(t,r=!0){await t.addInteractor("externalSlow",async o=>{const{Slower:i}=await e(()=>import("./Slower-mX9vyNcx.js"),__vite__mapDeps([0,1,2,3]));return new i(o)},r)}export{a as Slow,s as loadExternalSlowInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Slower-mX9vyNcx.js","assets/ExternalInteractorBase-St1QSTOy.js","assets/index-h0Q0DYPJ.js","assets/index-gw9q-9Y1.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
