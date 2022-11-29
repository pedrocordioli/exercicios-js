function convercao(){
    var valor = document.getElementById("Valor").value
    var litros = parseFloat(valor / 5).toFixed(2)
    var km = parseFloat(litros * 20).toFixed(2)
document.write("Você tem R$" ,(valor) , ", com esse valor é possivel comprar " ,(litros) ,", essa quantidade de litros faz com que o carro rode ",(km),".")
}
