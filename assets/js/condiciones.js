
const imagen1 = document.getElementById("imagen1")
const imagen2 = document.getElementById("imagen2")
const imagen3 = document.getElementById("imagen3")


imagen1.addEventListener("click", ()=>{

    imagen1.classList.toggle("border-rojo");



})
imagen2.addEventListener("click", ()=>{

    imagen2.classList.toggle("border-rojo");



})
imagen3.addEventListener("click", ()=>{

    imagen3.classList.toggle("border-rojo");



})

document.getElementById("btn2").addEventListener("click", function() {
    let sticker1 = parseInt(document.getElementById("sticker1").value) || 0;
    let sticker2 = parseInt(document.getElementById("sticker2").value) || 0;
    let sticker3 = parseInt(document.getElementById("sticker3").value) || 0;

    let totalStickers = sticker1 + sticker2 + sticker3;

    if (totalStickers <= 10) {
        document.getElementById("resultado").textContent = `Llevas ${totalStickers} stickers.`;
    } else {
        document.getElementById("resultado").textContent = "Llevas demasiados stickers.";
    }
});

