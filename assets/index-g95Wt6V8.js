import{_ as o}from"./index-mpfTI0sg.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-fla7Yq-M.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OutOfCanvasUpdater-fla7Yq-M.js","assets/index-mpfTI0sg.js","assets/index-3FOnTscJ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
