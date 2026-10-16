const destinations = [ 
    { id: 1, ville: "Santorin", pays: "Grèce", prix: 1200, duree: 7, 
disponible: true }, 
    { id: 2, ville: "Bali", pays: "Indonésie", prix: 1800, duree: 10, 
disponible: true }, 
    { id: 3, ville: "Istanbul", pays: "Turquie", prix: 750, duree: 5, 
disponible: false }, 
    { id: 4, ville: "Rome", pays: "Italie", prix: 950, duree: 4, 
disponible: true }, 
    { id: 5, ville: "Tokyo", pays: "Japon", prix: 2500, duree: 12, 
disponible: true }, 
    { id: 6, ville: "Djerba", pays: "Tunisie", prix: 500, duree: 6, 
disponible: false } 
]; 
let d1=destinations.forEach(D=>console.log(D.ville))
console.log(d1)
const villes=destinations.map(B=>B.ville)
console.log(villes)
const prix=destinations.filter(b=>b.prix<1500)
console.log(prix)
const id3=destinations.find(d=>d.id===3)
console.log(id3)
const findindex=destinations.findIndex(d=>d.ville==="Tokyo")
console.log(findindex)
const ex=destinations.some(d=>d.disponible)
console.log(ex)
let somme=destinations.reduce((s,d)=>s=s+d.prix,0)
console.log(somme)


const t=[10,12,15,10,3]
const [a,b]=t
console.log(a,b)

const produit={id:1,nom:"souris",prix:20,stock:15};
const {nom, designation,prixx}=produit
console.log(designation,prixx);
const panier=[{id:1,nom:"souris",prix:20,stock:15},{id:2,nom:"pc",prix:350,stock:10}]
const nomprix=panier.map(({nom,prix})=>({nom,prix}))
console.log(nomprix)
const nproduit={id:4,nom:"ecouteur",prix:30,stock:5};
const nvpanier=[...panier,nproduit];
console.log(nvpanier)

const destinationsEurope = ["Rome", "Paris", "Madrid"]; 
const destinationsAsie = ["Tokyo", "Bali", "Bangkok"];

const copie=[...destinationsEurope]
console.log(copie)
const fusion=[...destinationsEurope,...destinationsAsie]
console.log(fusion)
const ajout=["lisbon",...destinationsEurope];
const ajoutfin=[...destinationsEurope,"london"]

