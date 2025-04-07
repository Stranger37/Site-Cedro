//Define o slide inicial
let indiceSlide = 0;

function mostrarSlide(direcao) {

    // Seleciona todas as imagens do carrossel
    // e armazena na variável slides
    let slides = document.querySelectorAll(".carrossel-slide");

    // Oculta o slide atual ao apertar o botão
    slides[indiceSlide].classList.remove("ativo");

    // Atualiza o índice do slide
    indiceSlide += direcao;

    // Se passar do último slide, volta ao primeiro
    if(indiceSlide >= slides.length) {
        indiceSlide = 0;
    }

    // Se for menor que o primeiro slide, volta ao último
    if(indiceSlide < 0) {
        indiceSlide = slides.length - 1;
    }

    const newTransform = `translateX(-${indiceSlide * 100}%)`;
    document.querySelector('.carrossel-container').style.transform = newTransform;

    slides[indiceSlide].classList.add("ativo");

}

// Passa os slides automaticamente a cada 5 segundos (5000ms)
let intervalo = setInterval(() => mostrarSlide(1), 5000);


function moverSlide(direcao) {
    mostrarSlide(direcao);
}

document.addEventListener("DOMContentLoaded", () => mostrarSlide(0));

