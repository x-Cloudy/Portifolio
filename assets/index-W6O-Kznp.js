import{_ as s}from"./index-B9kv_PR0.js";class o{constructor(){this.distance=200,this.duration=.4,this.easing="ease-out-quad",this.factor=1,this.maxSpeed=50,this.speed=1}load(e){e&&(e.distance!==void 0&&(this.distance=e.distance),e.duration!==void 0&&(this.duration=e.duration),e.easing!==void 0&&(this.easing=e.easing),e.factor!==void 0&&(this.factor=e.factor),e.maxSpeed!==void 0&&(this.maxSpeed=e.maxSpeed),e.speed!==void 0&&(this.speed=e.speed))}}async function d(t,e=!0){await t.addInteractor("externalAttract",async i=>{const{Attractor:n}=await s(()=>import("./Attractor-fRDDq9So.js"),__vite__mapDeps([0,1,2,3,4]));return new n(t,i)},e)}export{o as Attract,d as loadExternalAttractInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Attractor-fRDDq9So.js","assets/Ranges-Yefpbb-0.js","assets/index-B9kv_PR0.js","assets/index-w9vZWGvP.css","assets/ExternalInteractorBase-St1QSTOy.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
