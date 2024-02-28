import{_ as o}from"./index-XsFJRA6V.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-ddBiMHKd.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OutOfCanvasUpdater-ddBiMHKd.js","assets/index-XsFJRA6V.js","assets/index-V6EPEM2C.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
