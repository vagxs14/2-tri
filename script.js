const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como a música trancede fronteiras e linguas conectando pessoas atrações emoções, qual o papel dela na sua vida?", 
        alternativas: [
            {
            texto:"Musica como forma de expresão artistica trancende frontiras e linguas conectando pessoas atraves de emoções universais",
        
            afirmacao:"pessoas gostam de musica e sentem emoções"
            },
            {
           texto: "ela não motiva emoções e interações com outras pessoas",
           afirmacao:"Não gosta de música"
           },
        ]
    },
    {
        enunciado: "",
        alternativas: [
            {
                texto:"de expresão artistica trancende frontiras e linguas conectando pessoas atraves de emoções universaisde expresão artistica trancende frontiras e linguas conectando pessoas atraves de emoções universaisde expresão artistica trancende frontiras e linguas conectando pessoas atraves de emoções universaisde expresão artistica trancende frontiras e linguas conectando pessoas atraves de emoções universais ",
                afirmacao:"a musica trancede tronteiras como uma linguegem universal,comunicando emoções sem e unindo culturas atraves de melodias e ritimos,sendo amplamente difundida por plataforma digitais por plataformas digitais e eventos globais"
                },
                {
               texto: "como a musica pode ser usada para influencias ou melhorar o mental das pessoas ",
               afirmacao:"a musica pode melhorar o estilo mental das pessoas ao reduzir estresse e ansiedade com ritmos suaves , elevar o umor ao estimular a dopamina de condições como depresão atraves da musicoterapia . Alem disso , pode aumentar o foco , a memoria e a produtividade "
               },
        ]
    },
    {
        enunciado: "Como podemos prover o reflorestamento?",
        alternativas: [
            {
            texto:"melhorando a fiscalização ajuda no reflorestamento",
            afirmaçao:"Você é favor da melhoria do reflorestamento"
            },
            {
            texto:"Não sei",
            afirmaçao:"Você não tem conhecimento de como se pode ajudar o meio ambiente"
            }
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Olha só o que podemos afrimar sobre você";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();