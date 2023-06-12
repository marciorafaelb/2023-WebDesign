let bts = document.querySelectorAll("div.genius > *:not(.pontuacao)")

function ligar(item) {
    bts[item].classList.add("on")
}

function desligar(item) {
    bts[item].classList.remove("on")
}

function piscar(item) {
    ligar(item)
    setTimeout (function () { desligar(item) }, 1000)
}