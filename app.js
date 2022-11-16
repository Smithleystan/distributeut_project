const readline = require('readline')
const {stdin : input, stdout : output}  = require('process')
const rl = readline.createInterface(input, output)

//Création du tableau de boisson//

function Boisson(marque, prix){
    this.marque = marque,
    this.prix = prix
}

let boisson = []

boisson.push(new Boisson ("Coca", 0.80)) 
boisson.push(new Boisson("Fanta", 0.70)) 
boisson.push(new Boisson("IceTea", 0.70)) 
boisson.push( new Boisson("oasis", 0.9)) 
boisson.push( new Boisson("orangina", 0.7)) 
boisson.push( new Boisson("Powerade", 0.8)) 
boisson.push( new Boisson("Lorina", 0.8)) 
boisson.push( new Boisson("Finley", 0.7)) 
boisson.push( new Boisson("sprite", 1)) 
boisson.push( new Boisson("7UP", 1.2)) 
boisson.push( new Boisson("Schweppes", 1.2)) 
boisson.push( new Boisson("Pepsi", 1.5)) 
boisson.push( new Boisson("Gini", 0.8)) 
boisson.push( new Boisson("Champomy", 2)) 
boisson.push( new Boisson("Champomy", 2)) 
boisson.push( new Boisson("Champomy", 2)) 
boisson.push( new Boisson("Champomy", 2)) 
boisson.push( new Boisson("Champomy", 2)) 








//affichage des boissons et leurs prix 
console.log('liste des boissons : ')
for(j=0; j<14; j++){
    console.log(`- ${boisson[j].marque} :   ${boisson[j].prix}€`)
}

let i =0
let reste
let resteAPayer 

// choix de la boisson par le client.
rl.question('Quelle boisson voulez vous ? :  \n', choix=>{
    while(choix != boisson[i].marque){
        i++
    }
//ici on demande au client d'inserer la monnaie en fonction  du prix de la boisson

    rl.question(`inserez le montant de ${boisson[i].marque}  : `, monnaie=>{
        if (monnaie< boisson[i].prix){
            let monnais = parseFloat(monnaie)
            resteAPayer = boisson[i].prix - monnais            
            rl.setPrompt(`Montant insuffisant. inserez le reste de la monnaie ${parseFloat(resteAPayer).toFixed(2)} € : ` )
            rl.prompt()
                rl.on('line', answer =>{
                    monnais = monnais + parseFloat(answer)
                    

                    //ici le client insere une somme inferieur au prix. on lui demande d'inseret le reste
                    if(answer < boisson[i].prix && monnais < boisson[i].prix){
                        resteAPayer = boisson[i].prix - monnais

                        rl.setPrompt(`Montant insuffisant. il manque ${parseFloat(resteAPayer).toFixed(2)} € \n`)
                        rl.prompt()


                    // ici le client insere plus que le prix. on lui rends sa monnaie 

                    }else if (monnais > boisson[i].prix){
                        reste = monnais - boisson[i].prix
                        rendu = parseFloat(reste).toFixed(2)
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
                rendu = parseFloat(reste).toFixed(2)
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