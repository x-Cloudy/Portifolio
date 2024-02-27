import{s as o,_ as r}from"./index-W9UN4inD.js";class s{constructor(){this.quantity=2}load(t){if(!t)return;const e=t.quantity;e!==void 0&&(this.quantity=o(e))}}async function u(n,t=!0){await n.addInteractor("externalRemove",async e=>{const{Remover:a}=await r(()=>import("./Remover-zdI2R4Dl.js"),__vite__mapDeps([0,1,2,3]));return new a(e)},t)}export{s as Remove,u as loadExternalRemoveInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Remover-zdI2R4Dl.js","assets/ExternalInteractorBase-St1QSTOy.js","assets/index-W9UN4inD.js","assets/index-XI5gB_Q4.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
