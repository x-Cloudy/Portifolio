import{_ as e}from"./index-7CTeGI4x.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-FL6GhKhU.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ColorUpdater-FL6GhKhU.js","assets/index-7CTeGI4x.js","assets/index--TMEzKw3.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
