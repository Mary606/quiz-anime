const botaoClique = document.querySelector(".comecar");
const infoBox = document.querySelector(".info-box");
const exitBotao = document.querySelector(".sair");
const main = document.querySelector(".inicio");
const continuarBotao = document.querySelector(".continuar");
const quizAnime = document.querySelector(".quiz");


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

  audio
    .play()
    .catch((error) => console.log("Erro ao tentar reproduzir o áudio:", error));
};