import{_ as o}from"./index-7CTeGI4x.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-BZ-fI8Gq.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-BZ-fI8Gq.js","assets/index-7CTeGI4x.js","assets/index--TMEzKw3.css","assets/ValueWithRandom-_6M82MrL.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
