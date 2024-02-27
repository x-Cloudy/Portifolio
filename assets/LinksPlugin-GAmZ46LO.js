import{_ as i}from"./index-8Oqhvn8s.js";class s{constructor(){this.id="links"}async getPlugin(n){const{LinkInstance:t}=await i(()=>import("./LinkInstance-JFU7ZI-S.js"),__vite__mapDeps([0,1,2,3]));return new t(n)}loadOptions(){}needsPlugin(){return!0}}export{s as LinksPlugin};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinkInstance-JFU7ZI-S.js","assets/index-8Oqhvn8s.js","assets/index-UlB4ifj4.css","assets/CanvasUtils-LDQcZ__o.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
