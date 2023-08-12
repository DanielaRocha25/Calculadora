function inserir(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function calc() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = eval(resultado);
}
function limpa() {
    document.getElementById('resultado').innerHTML = "";
}
