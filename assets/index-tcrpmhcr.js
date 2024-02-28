import{_ as i}from"./index-IiFklpDD.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-eILyVcat.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-eILyVcat.js","assets/ValueWithRandom-JtGApFo_.js","assets/index-IiFklpDD.js","assets/index-Td1a4l0X.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
