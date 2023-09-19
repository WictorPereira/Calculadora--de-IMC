//variaveis
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

        if (imc < 18 ) {
            var newPlaceHolder =  `Seu IMC: `+ imc.toFixed(2) + '. Voce esta abaixo do seu peso'
            textArea.placeholder = newPlaceHolder ;
        }else if (imc > 18 && imc <= 25) {
            var newPlaceHolder =  `Seu IMC: `+ imc.toFixed(2) + '. Seu Peso esta normal'
            textArea.placeholder = newPlaceHolder ;
        }else{
            var newPlaceHolder =  `Seu IMC: `+ imc.toFixed(2) + '. Voce esta acima do seu peso'
            textArea.placeholder = newPlaceHolder ;
        }
        

    })


