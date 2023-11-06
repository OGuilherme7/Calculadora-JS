let clicksOperadores = Number();
let espacoOperador = false;
const montandoCalculo = evt => {
    const spanCalculo = document.querySelector("#calculo"); 
    const conteudoBotao = evt.target.innerText;
    const valorBotao = verificarTipo(conteudoBotao);

    //verificando se o span está vazio e o valor vindo do botão é um operador
    if (spanCalculo.innerText.length == 0 && typeof valorBotao == 'string') {
        return;
    }


    //Impedindo que se use um operador duas vezes
    if (typeof valorBotao == 'string') {
        clicksOperadores++;
    } else {
        clicksOperadores = 0;
    }
    if (clicksOperadores >= 2) {
        return;
    }

    //Adicionando o valor do botao no span e concatenando de acordo
    if (typeof valorBotao == 'string') {
        spanCalculo.innerHTML += " " + valorBotao;
        espacoOperador = true;
    } else {
        if (!espacoOperador) {
            spanCalculo.innerText += valorBotao;
        } else {
            spanCalculo.innerText += " " + valorBotao;
            espacoOperador = false;
        }
    }
}

const verificarTipo = valor => {
    if(Number(valor) >= 0) {
        return Number(valor);
    } else {
        return valor;
    }
}

const botoes = document.querySelectorAll(".botoes");
for(let i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", montandoCalculo)
}