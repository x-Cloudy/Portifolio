import{_ as i}from"./index-7CTeGI4x.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-MDD1gmFl.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-MDD1gmFl.js","assets/ValueWithRandom-_6M82MrL.js","assets/index-7CTeGI4x.js","assets/index--TMEzKw3.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
