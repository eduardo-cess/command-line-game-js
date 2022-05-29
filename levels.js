export const levels = [
    {
        id: 0,
        type: "normal",
        text: "** Você está na sala **\nPara onde vc vai seguir?", 
        answers: [
            {text: "cozinha", path: 1},
            {text: "escada", path: 2},
            {text: "banheiro", path: 3},
        ]
    },
    {
        id: 1,
        type: "normal",
        text: "** Você está na cozinha. **\nPara onde vc vai seguir?", 
        answers: [
            {text: "sala", path: 0},
        ]
    },
    {
        id: 2,
        type: "normal",
        text: "** Você está no corredor no segundo andar. **\nPara onde vc vai seguir?", 
        answers: [
            {text: "quarto 1", path: 4},
            {text: "quarto 2", path: 5},
            {text: "quarto 3", path: 6},
            {text: "descer escada", path: 0},
        ]
    },
    {
        id: 3,
        type: "normal",
        text: "** Você entrou no banheiro. **\nPara onde vc vai seguir?", 
        answers: [
            {text: "sala", path: 0},
        ]
    },
    {
        id: 4,
        type: "normal",
        text: "** Você entrou no quarto 1. **\nPara onde vc vai seguir?", 
        answers: [
            {text: "corredor", path: 2},
        ]
    },
    {
        id: 5,
        type: "normal",
        text: "** Você entrou no quarto 2. **\nPara onde vc vai seguir?", 
        answers: [
            {text: "corredor", path: 2},
        ]
    },
    {
        id: 6,
        type: "normal",
        text: "** Você entrou no quarto 3 e percebeu que existe um quadro na parede. **\nPara onde vc vai seguir?", 
        answers: [
            {text: "corredor", path: 2},
            {text: "investigar", path: 7},
        ]
    },
    {
        id: 7,
        type: "normal",
        text: "** Você retirou o quadro e acho um cofre! Acerte a combinação para achar o tesouro. **\n", 
        answers: [
            {text: "tentar", path: 8},
            {text: "voltar", path: 2},
        ]
    },
    {
        id: 8,
        type: "puzzle",
        text: "** Resolva o problema para achar a combinação. **\n", 
        answers: [
            {text: "correct", path: 9},
            {text: "voltar", path: 2},
        ]
    },
    {
        id: 9,
        type: "endgame",
        text: "** Você achou o tesouro, parabéns!. **\n", 
        answers: []
    },
  ];