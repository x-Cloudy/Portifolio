import{_ as c}from"./index-yzeXjn4y.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-zqeDdtUL.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Attractor-zqeDdtUL.js","assets/ParticlesInteractorBase-0LBpK8Bl.js","assets/index-yzeXjn4y.js","assets/index-Tz3HUhTw.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
