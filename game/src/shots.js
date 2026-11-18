export function makeEffects(){return []}
export function burst(list,x,y,color,count=9){for(let i=0;i<count;i++){const a=Math.random()*Math.PI*2,s=30+Math.random()*150;list.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:.22+Math.random()*.45,max:.5,color,r:2+Math.random()*3})}}
export function updateEffects(list,dt){for(let i=list.length-1;i>=0;i--){const p=list[i];p.x+=p.vx*dt;p.y+=p.vy*dt;p.vx*=.91;p.vy*=.91;p.life-=dt;if(p.life<=0)list.splice(i,1)}}
