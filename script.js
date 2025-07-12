let idade = Number(prompt("Digite Sua Idade:"))
let status_s = prompt("Digite Seu Status: resgistrado / nao Resgistrado")

let maior_idade = (idade >= 18) ? true : false
console.log(maior_idade ? "Voce é Maior de Idade." : "Voçe é Menor de Idade.")

switch(status_s){
    case "resistrado":
        console.log("Bem Vindo Ao Sistema!")
        break
    case "nao resistrado":
        console.log("Por Favor Complete Seu Resistro.")
        break
    default:
        console.log("Status Desconhecido")
}

if(maior_idade && status_s === "resistrado"){
    console.log("Voçe Tem Acesso Completo Ao Sistema.")
}else{
    console.log("Voçe Tem Acesso Limitado Ao Sistema.")
}
