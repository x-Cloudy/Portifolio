import{_ as n}from"./index-W9UN4inD.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-jSAt48CA.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-ObHDMX9f.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-jSAt48CA.js","assets/PolygonDrawerBase-e5xbR-lx.js","assets/index-W9UN4inD.js","assets/index-XI5gB_Q4.css","assets/TriangleDrawer-ObHDMX9f.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
