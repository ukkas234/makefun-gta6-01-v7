import {places} from './world.js';
export const story=[
['The Debt','They put a red notice on the garage. Mika needs surgery by Friday. I am done asking the courts. Take the Meridian courier van. Bring it home, Nara.','Steal the courier van','garage','We have one thing they can’t repossess: each other.'],
['First Blood','Cash drop at the Docks, then cut through Old Town. Eyes are everywhere. Don’t let them box you in.','Rob the cash drop, then escape','escape','The city saw us. I can feel it looking back.'],
['The Informant','My contact has the route schedule. Police are searching the last robbery. Stay out of their sight and get him out.','Reach the dock worker','contact','He’s safe. For one night, that is enough.'],
['The Garage','A pink slip in the back room. The car is ours. Respray it and they lose our trail.','Claim a getaway car','garage','A clean plate. A little more room to breathe.'],
['The Warehouse','The ledger proves Meridian owns the police. Cameras watch every loading door. Move when their sweep turns away.','Steal the ledger','warehouse','Proof is heavier than gold. Keep it close.'],
['The Betrayal','Someone inside tipped them off. Roadblocks are going up. I’m coming with you. We leave together.','Escape the ambush together','escape','You came back for me. That is the whole story.'],
['The Big Chase','The helicopter is on us. Get the ledger to the journalist in Marina. Don’t stop.','Deliver the ledger to the journalist','journalist','The whole city heard it. Keep driving.'],
['The Broadcast','One last climb to the tower. When we send it, everyone will know what they did.','Broadcast the ledger','tower','They can’t erase the truth. We’re going home.']];
export function missionTarget(i){return [places.garage,places.drop,places.contact,places.garage,places.warehouse,places.escape,places.journalist,places.tower][i]}
export function freshMissions(saved){return {index:saved?.mission??0,done:!!saved?.done,phase:0,active:false,toast:''}}
