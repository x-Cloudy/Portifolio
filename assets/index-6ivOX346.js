import{_ as o}from"./index-bbwAzwbn.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-h7aikqbg.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-h7aikqbg.js","assets/index-bbwAzwbn.js","assets/index-exgsECYf.css","assets/ValueWithRandom-290Lg-Lh.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
