import{_ as o}from"./index-W9UN4inD.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-liGccLzc.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-liGccLzc.js","assets/index-W9UN4inD.js","assets/index-XI5gB_Q4.css","assets/ValueWithRandom-K0PnU_Qg.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
