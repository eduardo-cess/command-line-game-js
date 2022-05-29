import readline from "readline"
import { levels } from "./levels.js";
import random from 'random'


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let currentLevel = levels[0];
let nextLevel = currentLevel;
let currentPuzzleRandomNumber;
let currentPuzzleResponse;

function verifyAnswer(answer) {
  let errorText = "Escolha uma alternativa válida!";
  if(currentLevel.type === "puzzle") {
    currentLevel.answers[0].text = currentPuzzleResponse.toString();
    errorText = "Resposta errada! A combinação mudou."
  }
  for (const pathAnswer of currentLevel.answers) {
    if(pathAnswer.text === answer) {
      return levels[pathAnswer.path];
    }
  }
  console.log(errorText);
  return currentLevel;
}

function getPossibleAnswers() {
  let answersText = "Digite uma das respostas abaixo: \n";
  for (const answers of currentLevel.answers) {
    answersText += `${answers.text} \n`;
  }
  answersText += "sair\n"
  return answersText;
}

function getPuzzleQuestion() {
  currentPuzzleRandomNumber = random.int(0, 100);
  currentPuzzleResponse = currentPuzzleRandomNumber * 3 - currentPuzzleRandomNumber;
  return `
    ${currentPuzzleRandomNumber} * 3 - ${currentPuzzleRandomNumber}
    Digite a resposta do problema acima ou uma das opções abaixo:
    voltar
    sair
  `;
}

function makeQuestion() {
  console.log(currentLevel.text);
  if(currentLevel.type !== "endgame"){
    rl.question((currentLevel.type === "normal") ? getPossibleAnswers() : getPuzzleQuestion(), 
    (answer) => {
      console.log(`Resposta:  ${answer}\n\n`);
      nextLevel = verifyAnswer(answer);
      if(!nextLevel || answer === "sair") {
        rl.close();
        return;
      } 
      currentLevel = nextLevel;
      makeQuestion();
    });
  } else{ 
    console.log("Fim do jogo. Obrigado por jogar!");
  }
}



makeQuestion();
