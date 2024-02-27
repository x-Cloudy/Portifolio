import{_ as o}from"./index-EhDmmMpr.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-sZLjsjci.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-sZLjsjci.js","assets/index-EhDmmMpr.js","assets/index--TMEzKw3.css","assets/ValueWithRandom-k3YYwPnh.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
