"use strict";

 
let prenoms = ["Patoche", "Franck", "Emilie", "Caroline", "Barnabé"] 
let stats = [[0.2, 0.6, 0.2], [0.3, 0.5, 0.2], [0.1, 0.4, 0.5], [0.4, 0.2, 0.4], [0.3, 0.4, 0.3]] 
let joueurs = [] 
let tueur = ["Jason", 70]  //pdv modifié pour laisser une chance de victoire aux persos 
let morts = [] 
let caractéristiques = ["agile", "maladroit", "nerd", "blonde", "sportif"]  


class Personnage { 

    constructor(nom, caractéristique, probaMort, probaDmg, probaDmgMort) {
        this.nom = nom
        this.caractéristique = caractéristique
        this.probaMort = probaMort
        this.probaDmg = probaDmg
        this.probaDmgMort = probaDmgMort

    }
}

function combat() { 
    let affichageMort = ""

    if (joueurs.length >= 1 && tueur[1] > 0) {
        let chiffreSurvivantAleatoire = Math.floor(Math.random() * joueurs.length)
        let survivantCible = joueurs[chiffreSurvivantAleatoire]
        attaqueTueur(survivantCible, chiffreSurvivantAleatoire)
        

    } else if (joueurs.length >= 1 && tueur[1] <= 0) {

        for (let i = 0; i < morts.length; i++) {
            let test = morts[i]

            if(morts.length!=1){
                if (test == morts[morts.length - 1]) {
                    affichageMort += " et "+test+"..." 
    
                } else if (test == morts[morts.length - 2]) {
                    affichageMort += test  
                } 
                
                else {
                    affichageMort += test+", "
                }
            }else{
                affichageMort += test+"."
            }
        }
        if(!affichageMort) {
            console.log("Jason est mort seul bien joué aux survivants.") 
        } else{
        console.log("Jason est mort, il emporte dans sa tombe ",affichageMort) 
        }
    } else if (joueurs.length == 0 && tueur[1] > 0) {
        console.log("Jason a éléminé tout le monde, il lui reste "+tueur[1]+" points de vie !")

    } else if (joueurs.length == 0 && tueur[1] <= 0) {
        console.log("Tous le monde est mort..."+ affichageMort+" Même Jason")
    }

}

function attaqueTueur(survivantCible, chiffreSurvivantAleatoire) {
    let valeurAleatoire = Math.random()

    if (valeurAleatoire < survivantCible["probaMort"]) {
        console.log("Jason a tué", survivantCible["nom"])
        morts.push(survivantCible["nom"])
        joueurs.splice(chiffreSurvivantAleatoire, 1)

      } else if (valeurAleatoire < survivantCible["probaMort"] + survivantCible["probaDmg"]) {
        console.log(survivantCible["nom"],"esquive et met 10 dégâts à Jason !")
        tueur[1] -= 10

      } else  { 
        console.log(survivantCible["nom"] ,"se sacrifie et met 15 dégâts à Jason !")
        tueur[1] -= 15
        morts.push(survivantCible["nom"])
        joueurs.splice(chiffreSurvivantAleatoire, 1)
      }

    console.log("Survivants morts :", morts)
    
    combat()

};


prenoms.forEach(nom => { 
    let a = Math.floor(Math.random() * caractéristiques.length) 
    let caractéristique = caractéristiques.splice(a, 1) 

    let b = Math.floor(Math.random() * stats.length) 
    let statPerso = stats.splice(b, 1)  

    let joueur = new Personnage(nom, caractéristique, statPerso[0][0], statPerso[0][1], statPerso[0][2]) 
    joueurs.push(joueur) 

})

combat() 
