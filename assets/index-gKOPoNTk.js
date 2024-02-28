import{_ as i}from"./index-2osS1BzG.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-DtZuqghi.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-DtZuqghi.js","assets/ValueWithRandom-Vcns9uVf.js","assets/index-2osS1BzG.js","assets/index-MlkTtLtE.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
