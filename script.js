const botaoClique = document.querySelector(".comecar");
const infoBox = document.querySelector(".info-box");
const exitBotao = document.querySelector(".sair");
const main = document.querySelector(".inicio");
const continuarBotao = document.querySelector(".continuar");
const quizAnime = document.querySelector(".quiz");
const quizSecao= document.querySelector(".quiz-secao");


const audio = new Audio();
audio.src = "/img/som-jogo.mp3";
audio.loop = true;

botaoClique.onclick = () => {
  infoBox.classList.add("active");
  main.classList.add("active");
};

exitBotao.onclick = () => {
  infoBox.classList.remove("active");
  main.classList.remove("active");
};

continuarBotao.onclick = () => {
  quizAnime.classList.add("active");
  infoBox.classList.remove("active");
  main.classList.remove("active");
  quizSecao.classList.add("active");

  showQuestions(0);

  audio
    .play()
    .catch((error) => console.log("Erro ao tentar reproduzir o áudio:", error));
};

let questionCont = 0;

const proxBotao = document.querySelector('.proximo');

proxBotao.onclick = () => {
  questionCont++;
  showQuestions(questionCont);
}
 

function showQuestions (index){
  const questionTexto = document.querySelector('.perguntas');
  questionTexto.textContent = `${questions[index].numb}. ${questions[index].question}`;
}

