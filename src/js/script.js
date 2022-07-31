const cartoes = document.querySelectorAll('.card');
const proximo = document.querySelector('.proximo');
const voltar = document.querySelector('.voltar');
let posicao = 0;

function verificaPosicao(posicao) {
    if (posicao === cartoes.length) {
        return 0;
    } else if (posicao < 0) {
       return cartoes.length - 1;
    }
    return posicao;
}

function escondeCartao(posicao) {
    cartoes[posicao].classList.remove('ativo');
}

function mostraCartao(posicao) {
    cartoes[posicao].classList.add('ativo');
}

proximo.addEventListener('click', () => {
    escondeCartao(posicao);

    posicao++;
    posicao = verificaPosicao(posicao);

    mostraCartao(posicao);
});

voltar.addEventListener('click', () => {
    escondeCartao(posicao);

    posicao--;

    posicao = verificaPosicao(posicao);

    mostraCartao(posicao);
});

