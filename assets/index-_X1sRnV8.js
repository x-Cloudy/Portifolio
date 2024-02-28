import{_ as o}from"./index-Q4ZrFPsW.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-o9Su1s0r.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OutOfCanvasUpdater-o9Su1s0r.js","assets/index-Q4ZrFPsW.js","assets/index-1CM74HxU.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
