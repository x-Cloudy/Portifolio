import{_ as i}from"./index-W9UN4inD.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-7VIyVvqS.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-7VIyVvqS.js","assets/ValueWithRandom-K0PnU_Qg.js","assets/index-W9UN4inD.js","assets/index-XI5gB_Q4.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
