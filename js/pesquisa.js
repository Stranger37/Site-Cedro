function pesquisar() {
    let termo = document.getElementById("inputPesquisa").value.trim().toLowerCase();
    let produtos = document.querySelectorAll(".cartao-produto"); // Seleciona os cartões de produto

    produtos.forEach(produto => {
        let nomeProduto = produto.querySelector(".titulo-produto").textContent.toLowerCase();
        
        if (nomeProduto.includes(termo)) {
            produto.style.display = "block";  // Exibe os produtos correspondentes
        } else {
            produto.style.display = "none";   // Oculta os que não correspondem
        }
    });
}

// Aciona a pesquisa ao pressionar Enter
//document.getElementById("inputPesquisa").addEventListener("keypress", function(event) {
    //if (event.key === "Enter") {
        //event.preventDefault(); // Evita o comportamento padrão do formulário
        //pesquisar();
    //}
//});