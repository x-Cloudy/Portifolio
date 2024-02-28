import{_ as i}from"./index-PWBYALVp.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-BckmGDse.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-BckmGDse.js","assets/ValueWithRandom-lwm4J8SK.js","assets/index-PWBYALVp.js","assets/index-SLm8lMyL.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
