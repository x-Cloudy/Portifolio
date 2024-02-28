import{_ as i}from"./index-mpfTI0sg.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-dk4XgWlf.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-dk4XgWlf.js","assets/ValueWithRandom-FGvmYAoC.js","assets/index-mpfTI0sg.js","assets/index-3FOnTscJ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
