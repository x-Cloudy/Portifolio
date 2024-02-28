import{_ as i}from"./index-waZT2kZE.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-rqoNKfjG.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-rqoNKfjG.js","assets/ValueWithRandom-eVQxaTvM.js","assets/index-waZT2kZE.js","assets/index-39oNs0xD.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
