function Aprovacao(){
    let n1 = parseFloat(document.getElementById("nota1").value)
    let n2 = parseFloat(document.getElementById("nota2").value)

    let media = (n1+n2)/2

    if(media>=7){
        document.getElementById("resultado").innerHTML = "Aprovado"
    }
    if(media<7){
        document.getElementById("resultado").innerHTML = "Reprovado"
    }
    if(media>=10){
        document.getElementById("resultado").innerHTML = "Aprovado com Distinção"
    }
}