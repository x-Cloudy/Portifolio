import{_ as i}from"./index-lhfsSpBe.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-li8UseEW.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-li8UseEW.js","assets/ValueWithRandom-V2sRIG5a.js","assets/index-lhfsSpBe.js","assets/index-bje2tFVb.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
