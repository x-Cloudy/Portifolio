import{_ as o}from"./index-8Oqhvn8s.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-j-BcBTEB.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-j-BcBTEB.js","assets/index-8Oqhvn8s.js","assets/index-UlB4ifj4.css","assets/ValueWithRandom-jcJ9bpBC.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
