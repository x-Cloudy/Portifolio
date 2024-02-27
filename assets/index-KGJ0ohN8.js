import{_ as e}from"./index-8Oqhvn8s.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-rZUxXS9O.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ColorUpdater-rZUxXS9O.js","assets/index-8Oqhvn8s.js","assets/index-UlB4ifj4.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
