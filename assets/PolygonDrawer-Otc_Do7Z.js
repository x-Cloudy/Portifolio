import{P as n}from"./PolygonDrawerBase-5v5a0rYu.js";import"./index-w3SGEzri.js";const o=3.5,s=2.66,a=3;class g extends n{getCenter(t,e){return{x:-e/(t.sides/o),y:-e/(s/o)}}getSidesData(t,e){const r=t.sides;return{count:{denominator:1,numerator:r},length:e*s/(r/a)}}}export{g as PolygonDrawer};
