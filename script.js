function inserir(num) {
    let numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function calc() {
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = eval(resultado);
}
function limpa() {
    document.getElementById('resultado').innerHTML = "";
}
