const inputHeight = document.querySelector('#height')
const inputWeight = document.querySelector('#weight')
const btnCalculate = document.querySelector('#btn-CalculateId')
const textArea = document.querySelector('#textareaId')

//funçao para calcular IMC
function calculateIMC(valueHeight,valueWeight) {
    var imc = valueWeight / (valueHeight*valueHeight)
    return imc;
}

//Eventos

    btnCalculate.addEventListener('click',() => {       
        var valueHeight = parseFloat( inputHeight.value);
        var valueWeight = parseFloat( inputWeight.value);
        
        if (isNaN(valueHeight) || isNaN(valueWeight)) {
            alert("Por favor, insira valores válidos para peso e altura.");
            return;
          }

        var imc = calculateIMC(valueHeight, valueWeight)
        var newPlaceHolder =  `Seu IMC: `+ imc.toFixed(2)
        textArea.placeholder = newPlaceHolder ;

    })


