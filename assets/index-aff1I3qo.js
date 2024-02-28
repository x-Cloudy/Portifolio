import{_ as o}from"./index-swAVIUpY.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-ORW5fyc3.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OutOfCanvasUpdater-ORW5fyc3.js","assets/index-swAVIUpY.js","assets/index-M-jPVBeo.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
