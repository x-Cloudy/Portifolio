import{_ as o}from"./index-XuQXaglJ.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-NjGUMeEV.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-NjGUMeEV.js","assets/index-XuQXaglJ.js","assets/index-M-jPVBeo.css","assets/ValueWithRandom-gsj_FKGJ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
