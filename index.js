let classe = ""

let vitoria = 599999
let derrota = 10

result()
//fazer parte do código da função

function result() {
    result = vitoria - derrota


    if (result <= 10) {
        classe = "Ferro"
    }
    else if (result <= 20) {
        classe = "Bronze"
    }
    else if (result <= 50) {
        classe = "Prata"
    }
    else if (result <= 80) {
        classe = "Ouro"
    }
    else if (result <= 90) {
        classe = "Diamante"
    }
    else if (result <= 100) {
        classe = "Lendário"
    }
    else {
        classe = "Imortal"
    }

    console.log("o Herói tem saldo de " + result + " vitórias e está no nível " + classe)

}