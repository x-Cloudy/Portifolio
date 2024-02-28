import{_ as i}from"./index-Q4ZrFPsW.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-xh4jJ3c9.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-xh4jJ3c9.js","assets/ValueWithRandom-wOf2Cps2.js","assets/index-Q4ZrFPsW.js","assets/index-1CM74HxU.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
