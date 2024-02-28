import{_ as i}from"./index-1f-IaBXP.js";class s{constructor(){this.id="links"}async getPlugin(n){const{LinkInstance:t}=await i(()=>import("./LinkInstance-1C5yKN4D.js"),__vite__mapDeps([0,1,2,3]));return new t(n)}loadOptions(){}needsPlugin(){return!0}}export{s as LinksPlugin};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinkInstance-1C5yKN4D.js","assets/index-1f-IaBXP.js","assets/index-RSL0MxXY.css","assets/CanvasUtils-vweABlUU.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
