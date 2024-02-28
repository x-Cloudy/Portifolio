import{_ as i}from"./index-XsFJRA6V.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-8hX1QL2Q.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-8hX1QL2Q.js","assets/ValueWithRandom-4ZYybYh2.js","assets/index-XsFJRA6V.js","assets/index-V6EPEM2C.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
