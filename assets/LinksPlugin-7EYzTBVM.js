import{_ as i}from"./index--cURtcJr.js";class s{constructor(){this.id="links"}async getPlugin(n){const{LinkInstance:t}=await i(()=>import("./LinkInstance-pECwjA_m.js"),__vite__mapDeps([0,1,2,3]));return new t(n)}loadOptions(){}needsPlugin(){return!0}}export{s as LinksPlugin};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinkInstance-pECwjA_m.js","assets/index--cURtcJr.js","assets/index-M-jPVBeo.css","assets/CanvasUtils-tgwXO-UL.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}