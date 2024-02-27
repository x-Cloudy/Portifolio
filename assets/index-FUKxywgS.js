import{_ as o}from"./index-7CTeGI4x.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-l_W7hoGv.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OutOfCanvasUpdater-l_W7hoGv.js","assets/index-7CTeGI4x.js","assets/index--TMEzKw3.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
