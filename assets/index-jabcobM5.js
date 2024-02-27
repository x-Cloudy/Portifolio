import{_ as c}from"./index-7CTeGI4x.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-9H9ouoCY.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Attractor-9H9ouoCY.js","assets/ParticlesInteractorBase-0LBpK8Bl.js","assets/index-7CTeGI4x.js","assets/index--TMEzKw3.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
