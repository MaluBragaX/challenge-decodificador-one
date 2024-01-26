
var textInput = document.querySelector('#input__texto');
var outInput = document.querySelector('#output');

function criptografar(){
    var texto = textInput.value;
    var resultCripto = texto.replace(/a/g, "carmesin").replace(/e/g, "mirage").replace(/i/g, "orbe").replace(/o/g, "mont").replace(/u/g, "uranus");
    document.getElementById('output').innerHTML = resultCripto;
}
function descriptografar(){
    var texto = textInput.value;
    var resultDescriptografar = texto.replace(/carmesin/g, "a").replace(/mirage/g, "e").replace(/orbe/g, "i").replace(/mont/g, "mont").replace(/uranus/g, "u");
    document.getElementById('output').innerHTML = resultDescriptografar;
}
function copiar() {
    const textAfterElement = document.getElementById('output');
    const text = textAfterElement.innerText;
    navigator.clipboard.writeText(text);
    alert('Texto copiado para área de transferência')
}



