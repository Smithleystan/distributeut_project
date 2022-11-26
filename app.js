const readline = require('readline')
const {stdin : input, stdout : output}  = require('process')
const { Console } = require('console')
const rl = readline.createInterface(input, output)

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




console.log("Bonjour !!!")
console.log('Voici la liste des boissons')

//affichage des boissons et leurs prix 
console.log('liste des boissons : ')
for(j=0; j<14; j++){
    console.log(` ${boisson[j].numero}   ${boisson[j].marque} :   ${boisson[j].prix}€`)
}

let i =0
let reste
let resteAPayer 

// choix de la boisson par le client.
rl.question('Quelle boisson voulez vous ? :  \n', choix=>{
    while(choix != boisson[i].numero){
        i++
    }
//ici on demande au client d'inserer la monnaie en fonction  du prix de la boisson
    console.log(`${boisson[i].marque}   :   ${boisson[i].prix} €`)
    rl.question(`inserez le montant de ${boisson[i].marque}  : `, monnaie=>{
        if (monnaie< boisson[i].prix){
            let monnais = Number(monnaie)
            resteAPayer = boisson[i].prix - monnais            
            rl.setPrompt(`Montant insuffisant. il manque ${Number(resteAPayer).toFixed(2)} € : \n ` )
            rl.prompt()
                rl.on('line', answer =>{
                    monnais = monnais + Number(answer)
                    

                    //ici le client insere une somme inferieur au prix. on lui demande d'inseret le reste
                    if(answer < boisson[i].prix && monnais < boisson[i].prix){
                        resteAPayer = boisson[i].prix - monnais

                        rl.setPrompt(`Montant insuffisant. il manque ${Number(resteAPayer).toFixed(2)} € \n`)
                        rl.prompt()


                    // ici le client insere plus que le prix. on lui rends sa monnaie 

                    }else if (monnais > boisson[i].prix){
                        reste = monnais - boisson[i].prix
                        rendu = Number(reste).toFixed(2)
                        console.log(`nous vous rendons ${rendu} €`)
                        console.log(`votre ${boisson[i].marque} est pret`)
                        rl.close()                   
                    }else{                                
                        //ici le client a insere le montant tout rond. on ne lui rend pas de monnaie 
                
                        rendu = 0
                        console.log(`vous avez inseré le bon montant qui est de ${monnais} €`)
                        console.log(`votre ${boisson[i].marque} est pret`)
                        rl.close()
                        
                    
                    }
            

                
                })
        }else{
            // ici le client insere plus que le prix. on lui rends sa monnaie 
            console.log(`vous avez inseré ${monnaie} €`)
            if (monnaie > boisson[i].prix){
                reste = monnaie-boisson[i].prix
                rendu = Number(reste).toFixed(2)
                console.log(`nous vous rendons ${rendu} €`)
                console.log(`votre ${boisson[i].marque} est pret`)
            
            }           
        
            else{

                rendu = 0
                console.log(`vous avez inseré le bon montant qui est de ${monnaie} €`)
                console.log(`votre ${boisson[i].marque} est pret`)
            
            }
                
            rl.close()
        }
    })

})

//https://www.toptal.com/developers/gitignore

//methode permettant  de convertir en Euro

/*function displayPrice(number) {
    return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(number);
}*/

