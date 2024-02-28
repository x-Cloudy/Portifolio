import{_ as o}from"./index-2osS1BzG.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-HPoonobA.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-HPoonobA.js","assets/index-2osS1BzG.js","assets/index-MlkTtLtE.css","assets/ValueWithRandom-Vcns9uVf.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
