import{_ as r}from"./index-1f-IaBXP.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-dOSmKHui.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-dOSmKHui.js","assets/index-1f-IaBXP.js","assets/index-RSL0MxXY.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
