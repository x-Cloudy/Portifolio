import{_ as i}from"./index-yzeXjn4y.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-EMsJWwH-.js"),__vite__mapDeps([0,1,2,3]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-EMsJWwH-.js","assets/ValueWithRandom-ja-EydBG.js","assets/index-yzeXjn4y.js","assets/index-Tz3HUhTw.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
