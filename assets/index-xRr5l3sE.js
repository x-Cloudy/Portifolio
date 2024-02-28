import{_ as c}from"./index-lhfsSpBe.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-FMErD0-O.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Attractor-FMErD0-O.js","assets/ParticlesInteractorBase-0LBpK8Bl.js","assets/index-lhfsSpBe.js","assets/index-bje2tFVb.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
