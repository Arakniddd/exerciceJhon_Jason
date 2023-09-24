"use script";

let playlist
let prenom="Paul" 
let santeMentale=10
let feuRouge=30
let nbrTaxi=1
let changement= nbrTaxi-1
let Musique=["Anissa-Wejdene","Bulle-Josman","Bloody Summer-Ben.C","Free YSL-Hamza","War-Jolagreen23"]//les musiques de la playlist

console.log("la playlist est composé de "+ Musique.length+" musiques")

for (let t=30;t>=0;t--){//t=le nombres de feu rouges, il descend jusqu'à 0 si la santé mentale de Jhon n'est pas tombé à 0
  playlist=Musique[Math.floor(Math.random() * Musique.length)];
  if(playlist=="Anissa-Wejdene"){
    santeMentale--;
    nbrTaxi++;
    console.log("Aïe, aïe, aïe... La playlist est tombée sur Anissa de Wejdene, Paul perd un point de santé mentale et change de taxi. Il reste à Paul "+santeMentale+" points de santé mentale et il reste "+t+" feux rouges.");
  }
  if (santeMentale==0){
    console.log("La santé mentale de Paul est tombée à 0, EXPLOSION")
    break
  }
  if (t==0){
    console.log("Paul est rentré chez lui avec "+nbrTaxi+" taxis, il lui reste au final "+santeMentale+" points de santé mentale.")
    break
  }
  if (playlist=="Bulle-Josman"){
    console.log("Paul apprécie la musique 'Bulle' de Josman, il reste "+t+" feux rouges")
  }
  if (playlist=="Bloody Summer-Ben.C"){
    console.log("Paul apprécie la musique 'Bloody Summer' de Ben.c, il reste "+t+" feux rouges")
  }
  if (playlist=="Free YSL-Hamza"){
    console.log("Paul apprécie la musique 'Free YSL' de Hamza, il reste "+t+" feux rouges")
  }
  if (playlist=="War-Jolagreen23"){
    console.log("Paul apprécie la musique 'War' de Joagreen23, il reste "+t+" feux rouges")
  }
  
}


