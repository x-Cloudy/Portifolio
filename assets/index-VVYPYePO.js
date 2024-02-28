import{_ as o}from"./index-lhfsSpBe.js";class i{constructor(){this.distance=200}load(n){n&&n.distance!==void 0&&(this.distance=n.distance)}}async function a(t,n=!0){await t.addInteractor("externalBounce",async e=>{const{Bouncer:r}=await o(()=>import("./Bouncer-tG8sj0-a.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},n)}export{i as Bounce,a as loadExternalBounceInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Bouncer-tG8sj0-a.js","assets/index-lhfsSpBe.js","assets/index-bje2tFVb.css","assets/Ranges-HyvIY6mH.js","assets/ExternalInteractorBase-St1QSTOy.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
