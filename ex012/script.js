function MaiorDeIdade(){
    let idade =document.getElementById("idade").value
    if(idade >=18){
        document.getElementById("resposta").innerHTML = "Você é maior de idade"
    }else{
        document.getElementById("resposta").innerHTML = "Volte é menor de idade"
    }
}