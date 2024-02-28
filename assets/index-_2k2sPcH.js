import{_ as i}from"./index-WeW3GjI3.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-dXbdDAHz.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-dXbdDAHz.js","assets/ValueWithRandom-o862r9ew.js","assets/index-WeW3GjI3.js","assets/index-TWMtywKX.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
