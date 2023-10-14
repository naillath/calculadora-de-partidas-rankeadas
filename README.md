# 2️⃣ Calculadora de Partidas Ranqueadas

## Objetivo

O objetivo deste projeto é criar uma função em JavaScript que calcule o nível de um jogador em partidas ranqueadas com base em sua quantidade de vitórias e derrotas. O resultado deve ser armazenado em uma variável que representa o saldo de partidas ranqueadas (vitórias - derrotas).

## Recursos Utilizados

- Variáveis
- Operadores
- Estruturas de Decisão
- Funções

## Como Funciona

A função criada recebe como parâmetro a quantidade de vitórias e derrotas de um jogador e calcula o saldo de partidas ranqueadas com base na fórmula (vitórias - derrotas). Em seguida, determina o nível do jogador de acordo com a seguinte tabela:

- Se o número de vitórias for menor ou igual a 10, o jogador é classificado como "Ferro".
- Se o número de vitórias estiver entre 11 e 20, o jogador é classificado como "Bronze".
- Se o número de vitórias estiver entre 21 e 50, o jogador é classificado como "Prata".
- Se o número de vitórias estiver entre 51 e 80, o jogador é classificado como "Ouro".
- Se o número de vitórias estiver entre 81 e 90, o jogador é classificado como "Diamante".
- Se o número de vitórias estiver entre 91 e 100, o jogador é classificado como "Lendário".
- Se o número de vitórias for maior ou igual a 101, o jogador é classificado como "Imortal".

## Saída

Ao final do cálculo, a função retorna o saldo de vitórias e o nível do jogador. A mensagem de saída é exibida no seguinte formato:

"O Herói {nomeDoJogador} tem um saldo de {saldoVitorias} vitórias e está no RANK de {nivel} na filas ranqueadas!"
