const divIgual = document.querySelector("#igual");
divIgual.addEventListener("click", e => {
    const spanCalculo = document.querySelector("#calculo");
    const arraySpan = new Array();
    for (let i = 0; i < spanCalculo.innerHTML.length; i++) {
        if (spanCalculo.innerHTML[i] != " ") {
            const conteudoSpan = verificarTipo(spanCalculo.innerHTML[i])
            arraySpan.push(conteudoSpan);
        }
    } 
    const arraySpanCorrigido = corrigindoArray(arraySpan);
    console.log(arraySpanCorrigido);
    const arrayCalculoPrecedencia = calcularVetor(arraySpanCorrigido, ["x", "÷"])
    const vetorCalculado = calcularVetor(arrayCalculoPrecedencia, ["+", "-"]);
    console.log(vetorCalculado)
})



const corrigindoArray = array => {
    array.push(",");
    let contaCasasDecimais = 0;
    const arrayCorrigido = new Array();
    const arrayIndices = new Array();

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] != 'string') {
            arrayIndices.push(i)
            contaCasasDecimais++;
        } else {
            if (contaCasasDecimais >=2) {
                let numConcatenado = "";
                for (let c = arrayIndices[0]; c <= arrayIndices[arrayIndices.length-1]; c++) {
                    numConcatenado += array[c];
                }
                arrayCorrigido.push(Number(numConcatenado));
                arrayCorrigido.push(array[i]);
                contaCasasDecimais = 0;
                arrayIndices.splice(0, arrayIndices.length);
            } else {
                arrayCorrigido.push(array[arrayIndices[0]]);
                arrayCorrigido.push(array[i]);
                contaCasasDecimais = 0;
                arrayIndices.splice(0, 1);
            }
        }
    }
    arrayCorrigido.splice(arrayCorrigido.length-1, 1);
    return arrayCorrigido;
}


const calcularVetor = (array, operadores) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == operadores[0] || array[i] == operadores[1]) {
            let resultado = 0;
            switch (array[i]) {
                case "+":
                    resultado = array[i-1] + array[i+1];
                    break;
                case "-":
                    resultado = array[i-1] - array[i+1];
                    break;
                case "x":
                    resultado = array[i-1] * array[i+1];
                    break;
                case "÷":
                    resultado = array[i-1] / array[i+1];
            }
            array[i+1] = resultado;
            for (let c = i-1; c <= i; c++) {
                array[c] = 'EXC';
            }
        }  
    }
    console.log(array)
    const arrayLimpo = new Array();
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== 'EXC') {
            arrayLimpo.push(array[i]);
        }
    }
    console.log(arrayLimpo)
    return array;
}
