import{_ as n}from"./index-PWBYALVp.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-6XdET_BN.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-Z2L46sn1.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-6XdET_BN.js","assets/PolygonDrawerBase-suu9fU5B.js","assets/index-PWBYALVp.js","assets/index-SLm8lMyL.css","assets/TriangleDrawer-Z2L46sn1.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
