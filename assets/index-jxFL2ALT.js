import{_ as o}from"./index-B9kv_PR0.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-JWDusDby.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-JWDusDby.js","assets/index-B9kv_PR0.js","assets/index-w9vZWGvP.css","assets/ValueWithRandom-ID0qvcpy.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
