import{_ as e}from"./index-W9UN4inD.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-8bXme-ZQ.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ColorUpdater-8bXme-ZQ.js","assets/index-W9UN4inD.js","assets/index-XI5gB_Q4.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
