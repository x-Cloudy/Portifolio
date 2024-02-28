import{_ as c}from"./index-PWBYALVp.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-p7NHS0qH.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Attractor-p7NHS0qH.js","assets/ParticlesInteractorBase-0LBpK8Bl.js","assets/index-PWBYALVp.js","assets/index-SLm8lMyL.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
