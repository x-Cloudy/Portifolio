import{_ as e}from"./index-mpfTI0sg.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-3lURfS3g.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ColorUpdater-3lURfS3g.js","assets/index-mpfTI0sg.js","assets/index-3FOnTscJ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}