/*
## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

*/

// Função para pegar nome do herói

function getHeroName (name) {
    name = "Naillath"
    return name
}

let heroName = getHeroName()

// Função para checar Saldo de vitórias

function getWinBalance (victories, defeats) {
    let winBalance = victories - defeats
    return winBalance
}

let winningBalance = getWinBalance(242, 53)


/*

Se vitórias for menor ou igual que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal
*/

// Função para checar rank, baseado em saldo de vitórias

function getRankingPoints(levelRank) {

    if(winningBalance <= 10) {
        levelRank = "Ferro"
    } 
    else if(winningBalance > 10 && winningBalance < 21) {
        levelRank = "Bronze"
    }
    else if(winningBalance > 20 && winningBalance < 51) {
        levelRank = "Prata"
    }
    else if(winningBalance > 50 && winningBalance < 81) {
        levelRank = "Ouro"
    }
    else if(winningBalance > 80 && winningBalance < 91) {
        levelRank = "Diamante"
    }
    else if(winningBalance > 90 && winningBalance < 101) {
        levelRank = "Lendário"
    }
    else {
        levelRank = "Imortal"
    }
    return levelRank
}


let rank = getRankingPoints()


/*
## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

*/


console.log(`O Herói ${heroName} tem um saldo de ${winningBalance} vitórias e está no RANK de ${rank} na filas ranqueadas!`)
