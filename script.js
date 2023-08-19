function inserir(num) {
    let digito = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = digito + num;
}
function calc() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = eval(resultado);
}
function limpa() {
    document.getElementById('resultado').innerHTML = null;
}
