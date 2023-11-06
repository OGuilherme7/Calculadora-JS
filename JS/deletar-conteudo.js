const divDelete = document.querySelector("#delete");
divDelete.addEventListener("click", e => {
    const span = document.querySelector("#calculo");
    const arraySpan = new Array();

    //"Splitando" o conteudo do span em um array
    for (let i = 0; i < span.innerHTML.length; i++) {
            arraySpan.push(span.innerHTML[i]);
    }

    //Eliminando o último elemento deste array
    arraySpan.splice(arraySpan.length-1, 1);

    //Concatenando o conteúdo do array em uma variável e colocando-o de volta no span
    let conteudoSpanConcatenado = "";
    for (let i = 0; i < arraySpan.length; i++) {
        conteudoSpanConcatenado += arraySpan[i];
    }
    span.innerHTML = conteudoSpanConcatenado;
})

const spanCalculo = document.querySelector("#calculo");
spanCalculo.addEventListener("dblclick", event => {
    event.target.innerHTML = "";
})