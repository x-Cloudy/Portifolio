import{_ as a}from"./index-1f-IaBXP.js";const i=["emoji"];async function r(e,o=!0){const{EmojiDrawer:t}=await a(()=>import("./EmojiDrawer-FBh1RpoZ.js"),__vite__mapDeps([0,1,2]));await e.addShape(i,new t,o)}const n=Object.freeze(Object.defineProperty({__proto__:null,loadEmojiShape:r},Symbol.toStringTag,{value:"Module"}));export{n as i,i as v};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EmojiDrawer-FBh1RpoZ.js","assets/index-1f-IaBXP.js","assets/index-RSL0MxXY.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
