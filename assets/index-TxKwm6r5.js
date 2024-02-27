import{_ as n}from"./index-8Oqhvn8s.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-8gcUohMv.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-uoM6yOrB.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-8gcUohMv.js","assets/PolygonDrawerBase-z0a5lgTX.js","assets/index-8Oqhvn8s.js","assets/index-UlB4ifj4.css","assets/TriangleDrawer-uoM6yOrB.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
