export const levels = [
    {
        id: 0,
        isEndGame: false,
        text: "** Você está na sala **\nPara onde vc vai seguir?", 
        answers: [
            {text: "cozinha", path: 1},
            {text: "escada", path: 2},
            {text: "banheiro", path: 3},
        ]
    },
    {
        id: 1,
        isEndGame: false,
        text: "** Você está na cozinha. **\nPara onde vc vai seguir?", 
        answers: [
            {text: "sala", path: 0},
        ]
    },
    {
        id: 2,
        isEndGame: false,
        text: "** Você subiu a escada e está no corredor. **\nPara onde vc vai seguir?", 
        answers: [
            {text: "quarto 1", path: 4},
            {text: "quarto 2", path: 5},
            {text: "quarto 3", path: 6},
            {text: "descer escada", path: 0},
        ]
    },
    {
        id: 3,
        isEndGame: false,
        text: "** Você entrou no banheiro. **\nPara onde vc vai seguir?", 
        answers: [
            {text: "sala", path: 0},
        ]
    },
    {
        id: 4,
        isEndGame: false,
        text: "** Você entrou no quarto 1. **\nPara onde vc vai seguir?", 
        answers: [
            {text: "corredor", path: 0},
        ]
    },
    {
        id: 5,
        isEndGame: false,
        text: "** Você entrou no quarto 2. **\nPara onde vc vai seguir?", 
        answers: [
            {text: "corredor", path: 0},
        ]
    },
    {
        id: 6,
        isEndGame: true,
        text: "** Você entrou no quarto 3. **\nPara onde vc vai seguir?", 
        answers: [
            {text: "corredor", path: 0},
        ]
    },
  ];