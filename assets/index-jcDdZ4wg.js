import{_ as o}from"./index-B9kv_PR0.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-ImYCBBEK.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OutOfCanvasUpdater-ImYCBBEK.js","assets/index-B9kv_PR0.js","assets/index-w9vZWGvP.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
