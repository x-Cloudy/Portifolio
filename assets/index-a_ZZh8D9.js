import{_ as i}from"./index-bbwAzwbn.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-lnVQ-xYB.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-lnVQ-xYB.js","assets/ValueWithRandom-290Lg-Lh.js","assets/index-bbwAzwbn.js","assets/index-exgsECYf.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
