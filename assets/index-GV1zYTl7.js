import{_ as n}from"./index-Q4ZrFPsW.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-hFhcBH-g.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-AGkChjdI.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-hFhcBH-g.js","assets/PolygonDrawerBase-zo0eSnaF.js","assets/index-Q4ZrFPsW.js","assets/index-1CM74HxU.css","assets/TriangleDrawer-AGkChjdI.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
