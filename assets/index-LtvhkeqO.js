import{_ as o}from"./index-bLOz_Jlz.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-rzZ_1E4c.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-rzZ_1E4c.js","assets/index-bLOz_Jlz.js","assets/index-M-jPVBeo.css","assets/ValueWithRandom-q5qm7za2.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
