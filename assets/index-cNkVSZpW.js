import{_ as o}from"./index-Q4ZrFPsW.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-OWPDNuFE.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-OWPDNuFE.js","assets/index-Q4ZrFPsW.js","assets/index-1CM74HxU.css","assets/ValueWithRandom-wOf2Cps2.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
