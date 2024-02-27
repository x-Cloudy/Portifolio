import{_ as n}from"./index-7CTeGI4x.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-_enlo_-8.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-HBlSKAtp.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-_enlo_-8.js","assets/PolygonDrawerBase-8pX_7PTr.js","assets/index-7CTeGI4x.js","assets/index--TMEzKw3.css","assets/TriangleDrawer-HBlSKAtp.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
