import{_ as o}from"./index-swAVIUpY.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-CUvJSP7I.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-CUvJSP7I.js","assets/index-swAVIUpY.js","assets/index-M-jPVBeo.css","assets/ValueWithRandom-2IPJsyZ6.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
