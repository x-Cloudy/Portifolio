import{_ as o}from"./index-IiFklpDD.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-vkjaksmu.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OutOfCanvasUpdater-vkjaksmu.js","assets/index-IiFklpDD.js","assets/index-Td1a4l0X.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
