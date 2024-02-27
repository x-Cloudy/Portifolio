import{_ as n}from"./index-w3SGEzri.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-Otc_Do7Z.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-7edCwBDh.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-Otc_Do7Z.js","assets/PolygonDrawerBase-5v5a0rYu.js","assets/index-w3SGEzri.js","assets/index-Fkkpg_Me.css","assets/TriangleDrawer-7edCwBDh.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
