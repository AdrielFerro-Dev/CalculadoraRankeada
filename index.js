let classe = ""

let vitoria = 30



if(vitoria <= 10){
    classe = "Ferro"
}
else if(vitoria <= 20){
    classe = "Bronze"
}
else if( vitoria <= 50){
    classe = "Prata"

}
else if(vitoria <= 80){
    classe = "Ouro"
}
else if(vitoria <= 90){
    classe = "Diamante"
}
else if(vitoria <= 100){
    classe = "Lendário"
}
else{
    classe = "Imortal"
}

console.log("o Herói tem saldo de "+ saldoVitorias + " está no nível de " + classe)