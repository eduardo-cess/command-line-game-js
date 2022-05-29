const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const levels = [
  { pathOne: 1, pathTwo: 2, text: "Início - nível 0\nPara onde vc vai seguir?", responseOne: "escritório", responseTwo: "cozinha"}, //[ nível sim, nível não, texto]
  { pathOne: 3, pathTwo: 4, text: "nível 1 (caminho 1)"},
  { pathOne: 5, pathTwo: 6, text: "nível 1 (caminho 2)\nVc está na cozinha"},
  { pathOne: null, pathTwo: null, text: "nível 2 (caminho 3)"},
  { pathOne: null, pathTwo: null, text: "nível 2 (caminho 4)"},
  { pathOne: null, pathTwo: null, text: "nível 2 (caminho 5)"},
  { pathOne: null, pathTwo: null, text: "nível 2 (caminho 6)"},
];

let currentLevel = levels[0];
let nextLevel = currentLevel;

function makeQuestion() {
  console.log(currentLevel.text);
  if(levels[currentLevel.pathTwo] && levels[currentLevel.pathOne]){
    readline.question(`
      Digite uma das respostas abaixo: 
        ${currentLevel.responseOne || "sim"}
        ${currentLevel.responseTwo || "não"}
        sair
    `, 
    (answer) => {
      console.log(`Resposta:  ${answer}\n\n`);
      currentLevel.responseOne = currentLevel.responseOne || "sim";
      currentLevel.responseTwo = currentLevel.responseTwo || "não";
      switch (answer) {
        case currentLevel.responseOne:
          nextLevel = levels[currentLevel.pathOne];
          if(!nextLevel) {
            readline.close();
            return;
          } else {
            currentLevel = nextLevel;
            break;
          }
        case currentLevel.responseTwo:
          nextLevel = levels[currentLevel.pathTwo];
          if(!nextLevel) {
            readline.close();
            return;
          } else {
            currentLevel = nextLevel;
            break;
          }
        case "sair":
          readline.close();
          return;
        default:
          console.log('Responda uma das alternativas!"');
          break;
      }
      makeQuestion();
    });
  } else{ 
    console.log("Fim do jogo. Obrigado por jogar!");
  }
  
}


makeQuestion();
