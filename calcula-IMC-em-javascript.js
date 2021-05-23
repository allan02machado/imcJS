/*let valor1 = prompt("Digite seu peso: ");
let valor2 = prompt("Digite a sua altura: ");

let resultado1;
let resultado2;

resultado1 = valor2 * valor2;
console.log(resultado1);

resultado2 = (valor1 / resultado1).toFixed(2);
console.log(resultado2);


alert(`Seu IMC é: ${resultado2}`)*/

function imc (){
    const Peso = document.getElementById('Peso').value;
    const Altura = document.getElementById('Altura').value;
    const resultado = document.getElementById('resultado');

    const valorIMC = (Peso / (Altura * Altura)).toFixed(2);

    let diagnostico = '';

    if (valorIMC < 17){
        diagnostico = 'Muito abaixo do peso'
    }else if (valorIMC < 18.49){
        diagnostico = 'Abaixo do peso'
    }else if (valorIMC < 18.50){
        diagnostico = 'Com peso normal'
    }else if (valorIMC < 25){
        diagnostico = 'Acima do peso'
    }else if (valorIMC < 30){
        diagnostico = 'Com obesidade 1'
    }else if (valorIMC < 35){
        diagnostico = 'Com obesidade 2 (Severa)'
    }else if (valorIMC > 40){
        diagnostico = 'Com obesidade 3 (Mórbida)'
    }

    resultado.textContent = `Seu IMC é: ${valorIMC} e você está ${diagnostico}`;

}

calcular.addEventListener('click', imc);