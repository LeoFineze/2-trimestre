const caixaPrincipal= document.querySelector(".caixa-principal");
const caixaPerguntas= document.querySelector(".caixa-perguntas");
const caixaAlternativas= document.querySelector(".caixa-alternativas");
const caixaResultado= document.querySelector(".caixa-resultado");
const textoResultado= document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado:"quem tem copa?"
      alternativas: [
  {
 texto: "Messi";
afirmaçao: "afirmaçao";
}
{
  texto: "Messi";


            ]
},
{
    enunciado:"Quem tem mais bola de ouro?"
      alternativas: [
        "Messi";
        "C.Ronaldo";
            ]
},
{
    enunciado:"Quem tem mais Champions?"
      alternativas: [
        "C.Ronaldo";
        "Messi";
            ]
},
{
    enunciado:"Qual time tem mais brasileirão"
      alternativas: [
        "Palmeiras";
        "Corinthians";
            ]
},
{
    enunciado:"Qual time tem mais copa do Brasil"
      alternativas: [
        "Cruzeiro";
        "Flamengo";
            ]
},
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
