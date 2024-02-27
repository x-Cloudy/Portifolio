import{_ as a}from"./index-yzeXjn4y.js";async function n(t,o=!0){await t.addInteractor("particlesCollisions",async i=>{const{Collider:r}=await a(()=>import("./Collider-vf8Y1YUh.js"),__vite__mapDeps([0,1,2,3]));return new r(i)},o)}export{n as loadParticlesCollisionsInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Collider-vf8Y1YUh.js","assets/index-yzeXjn4y.js","assets/index-Tz3HUhTw.css","assets/ParticlesInteractorBase-0LBpK8Bl.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
