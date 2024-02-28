import{_ as i}from"./index-h0Q0DYPJ.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-EKC1VfUe.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-EKC1VfUe.js","assets/ValueWithRandom-s_xrwvEK.js","assets/index-h0Q0DYPJ.js","assets/index-gw9q-9Y1.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
