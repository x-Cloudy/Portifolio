import{_ as o}from"./index-xtUY6rau.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-XyU28cPs.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OutOfCanvasUpdater-XyU28cPs.js","assets/index-xtUY6rau.js","assets/index-yPma1oFy.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
