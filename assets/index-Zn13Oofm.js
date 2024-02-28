import{_ as c}from"./index-h0Q0DYPJ.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor--N2bcmPT.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Attractor--N2bcmPT.js","assets/ParticlesInteractorBase-0LBpK8Bl.js","assets/index-h0Q0DYPJ.js","assets/index-gw9q-9Y1.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
