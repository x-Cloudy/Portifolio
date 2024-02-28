import{_ as o}from"./index-PWBYALVp.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-z_l-3U6-.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OutOfCanvasUpdater-z_l-3U6-.js","assets/index-PWBYALVp.js","assets/index-SLm8lMyL.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
