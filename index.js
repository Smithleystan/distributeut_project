
//Création du tableau de boisson//

function Boisson(numero,marque, prix){
    this.numero = numero 
    this.marque = marque,
    this.prix = prix
}

let boisson = []

boisson.push(new Boisson ("1","Coca", 0.80)) 
boisson.push(new Boisson("2","Fanta", 0.70)) 
boisson.push(new Boisson("3","IceTea", 0.70)) 
boisson.push( new Boisson("4","oasis", 0.9)) 
boisson.push( new Boisson("5","orangina", 0.7)) 
boisson.push( new Boisson("6","Powerade", 0.8)) 
boisson.push( new Boisson("7","Lorina", 0.8)) 
boisson.push( new Boisson("8","Finley", 0.7)) 
boisson.push( new Boisson("9","sprite", 1)) 
boisson.push( new Boisson("10","7UP", 1.2)) 
boisson.push( new Boisson("11","Schweppes", 1.2)) 
boisson.push( new Boisson("12","Pepsi", 1.5)) 
boisson.push( new Boisson("13","Gini", 0.8)) 
boisson.push( new Boisson("14","Champomy", 2)) 

//affichage des boissons et leurs prix 
// console.log('liste des boissons : ')
// for(j=0; j<14; j++){
//     console.log(` ${boisson[j].numero}   ${boisson[j].marque} :   ${boisson[j].prix}€`)
// }

let i =0
let reste
let resteAPayer 

let Answer = window.prompt("Quelle boisson voulez vous ?")
let answer =parseInt(Answer)
while(answer != boisson[i].numero){
    i++
}
console.log(boisson[i].marque)

console.log(`${boisson[i].marque}   :   ${boisson[i].prix} €`)

 Answer = window.prompt(`inserez le montant de ${boisson[i].marque}  : `)
 let monnaie =Number(Answer)

if (monnaie< boisson[i].prix ){

    while (monnaie< Number(boisson[i].prix)){
        let monnais = parseFloat(monnaie)
        resteAPayer = Number(boisson[i].prix) - monnais 
        alert(`Montant insuffisant. il manque ${parseFloat(resteAPayer).toFixed(2)} ` )
        Answer = window.prompt(`inserez le reste à payer  ${parseFloat(resteAPayer).toFixed(2)} : `)
        let restant = Number(Answer)
        monnais = monnais + restant
        monnaie = monnais
        
    
     }
        
}else{
    alert(`vous avez inseré ${monnaie} €`)
    if (monnaie > boisson[i].prix){
        reste = monnaie-boisson[i].prix
        rendu = parseFloat(reste).toFixed(2)
        console.log(`nous vous rendons ${rendu} €`)
        console.log(`votre ${boisson[i].marque} est pret`)
    
    }           

    else{

        rendu = 0
        console.log(`vous avez inseré le bon montant qui est de ${monnaie} €`)
        console.log(`votre ${boisson[i].marque} est pret`)
    
    }
}

