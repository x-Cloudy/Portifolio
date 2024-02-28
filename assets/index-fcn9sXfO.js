import{_ as e}from"./index-Q4ZrFPsW.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-k4QACR7m.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ColorUpdater-k4QACR7m.js","assets/index-Q4ZrFPsW.js","assets/index-1CM74HxU.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
