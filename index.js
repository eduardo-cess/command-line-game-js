import readline from "readline"
import { levels } from "./levels.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let currentLevel = levels[0];
let nextLevel = currentLevel;

function verifyAnswer(answer) {
  for (const pathAnswer of currentLevel.answers) {
    if(pathAnswer.text === answer) {
      return levels[pathAnswer.path];
    }
  }
  console.log("Escolha uma alternativa válida!")
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

function makeQuestion() {
  console.log(currentLevel.text);
  if(currentLevel.isEndGame === false){
    rl.question(getPossibleAnswers(), 
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
