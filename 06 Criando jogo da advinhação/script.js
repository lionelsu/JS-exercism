/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas
*/

let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10");
const RANDOM_NUMBER = Math.round(Math.random() * 10);

/*
const MACTH = Number(RESULT) == RANDOM_NUMBER;
console.log(RESULT, RANDOM_NUMBER, MACTH);
*/

let xAttempts = 0;

while (Number(result) != RANDOM_NUMBER) {
  result = prompt("Erro, tente novamente: ")
  xAttempts++
}

alert(`Parabéns! Você advinhou o número em ${xAttempts} tentativas!`)