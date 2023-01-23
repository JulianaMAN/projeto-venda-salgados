const botaoTabelaPreco = document.querySelector(".botao-pedido");

const modal = document.querySelector(".modal");

const botaoFecharModal = document.querySelector(".fechar-modal");

const video = document.getElementById("video");


const linkDoVideo = video.src;

botaoTabelaPreco.addEventListener("click", () => {
    modal.classList.add("aberto");
    video.setAttribute("src", linkDoVideo);

});



botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto");
    video.setAttribute("src","");
});
