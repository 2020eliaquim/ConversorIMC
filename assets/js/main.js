//capturar evento de submit do formulario
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (x) {
    x.preventDefault();
    const inputPeso = x.target.querySelector('#peso');
    const inputAltura = x.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // console.log(peso, altura);

    if(!peso) {
        setResult('Peso Invalido', false);
        return;
    }
    if(!altura) {
        setResult('Altura Invalida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC é ${imc} (${nivelImc})`;

    setResult(msg, true);

    // console.log(imc, nivelImc);
    
});

function getImc(peso, altura) {
    const imc = peso / altura ** 2;

    return imc.toFixed(2);
}

function getNivelImc(imc) {
    const nivel = [
        'Abaixo do peso',
        'Peso normal',
        'Sobrepeso',
        'Obesidade grau 1',
        'Obesidade grau 2',
        'Obesidade grau 3',
    ];

    // if(imc >= 39.9) {
    //     return nivel[5];
    // } 
    
    // if(imc >= 34.9) {
    //     return nivel[4];
    // }
    
    // if(imc >= 29.9) {
    //     return nivel[3];
    // }
    
    // if(imc >= 24.9) {
    //     return nivel[2];
    // }
    
    // if(imc >= 18.5) {
    //     return nivel[1];
    // }
    
    // if(imc < 18.5) {
    //     return nivel[0];
    // }

    if(imc >= 39.9) return nivel[5];
    
    if(imc >= 34.9) return nivel[4];
    
    if(imc >= 29.9) return nivel[3];
    
    if(imc >= 24.9) return nivel[2];
    
    if(imc >= 18.5) return nivel[1];
    
    if(imc < 18.5) return nivel[0];
}

function CriaElemento() {
    const p = document.createElement('p'); //cria um elemento
    // p.classList.add('paragrafo-resultado');//criar e adiciona uma classe

    // p.innerHTML = "sss"; //atribui valor ao elemento
    return p;
}

function setResult (msg, isValid) {
    const result = document.querySelector('#result');

    result.innerHTML = "";

    const p = CriaElemento();

    if(isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;

    result.appendChild(p);

    // result.appendChild(p); //chama o elemento como filho de outro
}