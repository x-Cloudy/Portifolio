import{_ as c}from"./index-waZT2kZE.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-jCvPxgHt.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Attractor-jCvPxgHt.js","assets/ParticlesInteractorBase-0LBpK8Bl.js","assets/index-waZT2kZE.js","assets/index-39oNs0xD.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
