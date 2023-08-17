let bts = document.querySelectorAll("div.genius > *:not(.pontuacao)")
let sequencia = [3, 0, 2, 2, 1, 0, 2, 1, 3]
let velocidade = 1000

function acender(item) {
    bts[item].classList.add("on")
}

function apagar(item) {
    bts[item].classList.remove("on")
}

function piscar(item) {
    acender(item)
    setTimeout (function () { apagar(item) }, velocidade)
}

function apresentarSequencia() {
    let index = 0
    let interval = setInterval(function () {
        if (index>= sequencia.length) {
            clearInterval(interval)
            return
        }
        let atual = sequencia[index++]
        piscar(atual)
    }, velocidade + 300)
}