import{_ as i}from"./index-1f-IaBXP.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-gzHRGurX.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-gzHRGurX.js","assets/ValueWithRandom-lNWYGV1g.js","assets/index-1f-IaBXP.js","assets/index-RSL0MxXY.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
