import{_ as a}from"./index-7CTeGI4x.js";async function n(t,o=!0){await t.addInteractor("particlesCollisions",async i=>{const{Collider:r}=await a(()=>import("./Collider-dEOSUiCO.js"),__vite__mapDeps([0,1,2,3]));return new r(i)},o)}export{n as loadParticlesCollisionsInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Collider-dEOSUiCO.js","assets/index-7CTeGI4x.js","assets/index--TMEzKw3.css","assets/ParticlesInteractorBase-0LBpK8Bl.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
