const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:"Como você acha que as escolas poderiam integrar melhor o cuidado com os animais ao currículo, promovendo tanto a educação quanto o envolvimento em esportes?",
        alternativas: [
            {
        texto:"Incluir atividades esportivas que envolvam cuidados com animais, como equitação ou corrida com cães.",
        afirmacao:"A integração de esportes que envolvem animais pode proporcionar aos alunos experiências práticas de responsabilidade e cuidado."
    },
    {
        texto:"Incentivar os alunos a aprender mais sobre os ambientes naturais e suas diferentes espécies de animais.",
       afirmacao:"Projetos educativos sobre animais podem esstimular o interesse dos alunos pela biologia e conservação, complementando seu aprendizado acadễmico."
          
    },
   
]
}
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener('click', ()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);        
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal = afirmacao;
    atual++
    mostraPergunta();
}

mostraPergunta();

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2030...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}