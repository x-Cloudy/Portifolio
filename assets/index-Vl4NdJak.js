import{_ as i}from"./index-xtUY6rau.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-tUQVO8Zm.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-tUQVO8Zm.js","assets/ValueWithRandom-392J75-y.js","assets/index-xtUY6rau.js","assets/index-yPma1oFy.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
