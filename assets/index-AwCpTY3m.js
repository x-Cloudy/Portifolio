import{_ as o}from"./index-h0Q0DYPJ.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-EKS5mZwL.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OutOfCanvasUpdater-EKS5mZwL.js","assets/index-h0Q0DYPJ.js","assets/index-gw9q-9Y1.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
