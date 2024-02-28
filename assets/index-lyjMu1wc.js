import{_ as o}from"./index-xtUY6rau.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-RYp2sLoO.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-RYp2sLoO.js","assets/index-xtUY6rau.js","assets/index-yPma1oFy.css","assets/ValueWithRandom-392J75-y.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
