const double=(a)=>a*2;
console.log(double(2));
const calctva=(p,t)=>p*t;
const cal2=(p)=>{if(p>100) return 0.1*p ; else return p*0.2 ;}
const cal3=(p)=> p>100 ? 0.1*p :0.05*p;

console.log(calctva(12,0.2))
console.log(cal2(120))
console.log(cal3(12))

const nombres=[1,14,20,3]
let doubles = nombres.map(n=>n*2)
console.log(doubles);
let d2=nombres.forEach(n=>console.log(n*2))

let paires=nombres.filter(n=> n% 2==0)
console.log(paires)
