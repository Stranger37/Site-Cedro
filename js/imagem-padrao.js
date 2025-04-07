// Adiciona um evento de erro para cada imagem
// Se a imagem não carregar, substitui pela imagem padrão
// Mesmo que a imagem não seja do carrossel, o evento de erro é aplicado a todas as imagens da página
function verificaSrcImagens() {

    document.querySelectorAll("img").forEach(img => {
        let imagemPadrao = "/imagens/produtos/padrao-sem-imagem.png";

        // Verificar se o src está vazio ou indefinido antes de qualquer carregamento
        if (!img.src || img.src.trim() === "" || img.src.includes("undefined") || img.src === window.location.origin + window.location.pathname) {
            console.log("Imagem sem src, substituindo por imagem padrão.");
            img.src = imagemPadrao;
        }

        // Verifica falhas no carregamento da imagem
        img.onerror = function() {
            this.onerror = null; // Evita loop infinito caso a imagem padrão também falhe
            this.src = imagemPadrao;
        };
    });
}

document.addEventListener("DOMContentLoaded", verificaSrcImagens);