
const nome = document.getElementById('nome');
const data = document.getElementById('data');
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const id = document.getElementById('id');

const botaoCalcular = document.getElementById('btnCalcular'); 
const resultado = document.getElementById('resultado'); 
function calcularIMC() {
    
    const valorPeso = parseFloat(peso.value);
    const valorAltura = parseFloat(altura.value);

    if (!valorPeso || !valorAltura) {
        resultado.textContent = "Por favor, preencha o peso e a altura corretamente.";
        return;
    }

    a
    const imc = valorPeso / (valorAltura * valorAltura);

    
    resultado.textContent = `${nome.value}, seu IMC é ${imc.toFixed(2)}`;
}

botaoCalcular.addEventListener('click', calcularIMC);


       
