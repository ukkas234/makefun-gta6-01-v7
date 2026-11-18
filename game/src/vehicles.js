export const cars=[{name:'Dock Runner',color:'#e06d50',speed:255,armor:1},{name:'Marina GT',color:'#54c9a3',speed:310,armor:.9},{name:'Old Town Hauler',color:'#dfb85c',speed:215,armor:1.35}];
export function initGarage(save){return {selected:save?.garage?.selected??0,owned:save?.garage?.owned??[true,false,false],engine:save?.garage?.engine??0,armor:save?.garage?.armor??0}}
export function upgrade(v,type){if(type==='engine')v.engine=Math.min(3,v.engine+1);if(type==='armor')v.armor=Math.min(3,v.armor+1)}
