import{_ as c}from"./index-WeW3GjI3.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-yfvFTeRH.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Attractor-yfvFTeRH.js","assets/ParticlesInteractorBase-0LBpK8Bl.js","assets/index-WeW3GjI3.js","assets/index-TWMtywKX.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
