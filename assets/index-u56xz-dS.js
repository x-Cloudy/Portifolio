import{_ as c}from"./index-B9kv_PR0.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-NSNPhyi0.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Attractor-NSNPhyi0.js","assets/ParticlesInteractorBase-0LBpK8Bl.js","assets/index-B9kv_PR0.js","assets/index-w9vZWGvP.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
