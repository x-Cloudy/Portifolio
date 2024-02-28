import{_ as o}from"./index-IiFklpDD.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-JrZrtK07.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-JrZrtK07.js","assets/index-IiFklpDD.js","assets/index-Td1a4l0X.css","assets/ValueWithRandom-JtGApFo_.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
