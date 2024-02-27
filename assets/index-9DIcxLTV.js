import{_ as i}from"./index-w3SGEzri.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-fT0UVjgP.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-fT0UVjgP.js","assets/ValueWithRandom-SEiYFIsy.js","assets/index-w3SGEzri.js","assets/index-Fkkpg_Me.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
