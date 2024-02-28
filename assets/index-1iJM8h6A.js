import{_ as i}from"./index-ri-aHBx8.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-89KYjZI5.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-89KYjZI5.js","assets/ValueWithRandom-v8dC3Mtu.js","assets/index-ri-aHBx8.js","assets/index--l6GhqTe.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
