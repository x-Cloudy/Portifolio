import{_ as n}from"./index-XsFJRA6V.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-Tr2X3Xz-.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-JY-GT-Gw.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-Tr2X3Xz-.js","assets/PolygonDrawerBase-b5xKhB3x.js","assets/index-XsFJRA6V.js","assets/index-V6EPEM2C.css","assets/TriangleDrawer-JY-GT-Gw.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
