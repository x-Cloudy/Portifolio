import{_ as n}from"./index-B9kv_PR0.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-IMDdmrcJ.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-ENokwdl6.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-IMDdmrcJ.js","assets/PolygonDrawerBase-WBrokvMO.js","assets/index-B9kv_PR0.js","assets/index-w9vZWGvP.css","assets/TriangleDrawer-ENokwdl6.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
