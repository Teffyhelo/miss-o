const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:"Em que país surgiu futvôlei?",
        alternativas:[
            {
                texto: "Brasil",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"Argentina",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
     {
        enunciado:"Quantos jogadores há em cada equipe no futvôlei tradicional?",
        alternativas:[
            {
                texto: "2 jogadores",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"4 jogadores",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
     {
        enunciado:"È permitido usar as mãos no futvôlei?",
        alternativas:[
            {
                texto: "Não",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"Sim",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    }, 
     {
        enunciado:"Qual o limite de toques por equipe em uma jogada?",
        alternativas:[
            {
                texto: "3 toques",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"2 toques",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
     {
        enunciado:"O saque no futvôlei deve ser feito:",
        alternativas:[
            {
                texto: "Com os pés ou outra parte do corpo permitida",
                afirmação:"Resposta correta",
                pontos:1
            },
            {
                texto:"Somente com a mão",
                afirmação:"Resposta errada",
                pontos:0
            }
        ]
    },
]

let atual = 0; 
let perguntaAtual; 
let historiaFinal = ""; 
let pontos = 0;  

function mostraPergunta(){ 
    perguntaAtual = perguntas[atual]; 
    caixaPerguntas.textContent = perguntaAtual.enunciado; 
    caixaAlternativas.textContent = ""; 
    mostraAlternativas(); 
}

function mostraAlternativas(){ 
    for(const alternativa of perguntaAtual.alternativas){ 
        const botaoAlternativas = document.createElement("button"); 
        botaoAlternativas.textContent = alternativa.texto; 
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa)); 
        caixaAlternativas.appendChild(botaoAlternativas); 
    }
}

function respostaSelecionada(alternativa) { 
    const afirmacao = alternativa.afirmacao; 
    historiaFinal = afirmacao; 
    pontos += alternativa.pontos;  
    atual++; 

    if (atual < perguntas.length) { 
        mostraPergunta();  
    } else {
        exibeResultado();  
    }
}

function exibeResultado() { 
    caixaPerguntas.textContent = "Fim do Quiz!"; 
    caixaAlternativas.textContent = "";  
    textoResultado.textContent = `Sua pontuação final é: ${pontos} pontos.`; 

    if (pontos === perguntas.length) { 
        textoResultado.textContent += " Parabéns! Você acertou todas as questões!"; 
    } else if (pontos > perguntas.length / 2) { 
        textoResultado.textContent += " Bom trabalho, você teve um desempenho legal!"; 
    } else { 
        textoResultado.textContent += " Você pode melhorar! Tente novamente!"; 
    }
}

mostraPergunta();