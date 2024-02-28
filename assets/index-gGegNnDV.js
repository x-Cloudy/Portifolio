import{_ as i}from"./index-B9kv_PR0.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-tTgJRCmn.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-tTgJRCmn.js","assets/ValueWithRandom-ID0qvcpy.js","assets/index-B9kv_PR0.js","assets/index-w9vZWGvP.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
