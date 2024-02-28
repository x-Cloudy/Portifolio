import{_ as o}from"./index-1f-IaBXP.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-kjYcrhVd.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OutOfCanvasUpdater-kjYcrhVd.js","assets/index-1f-IaBXP.js","assets/index-RSL0MxXY.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
