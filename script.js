let inputCPF = document.querySelector("#cpf")
inputCPF.addEventListener("keypress", ()=>{
    let tamanhoCPF = inputCPF.value.length
    if(tamanhoCPF == 3 || tamanhoCPF == 7 ) {
        inputCPF.value += "."

    } else if (tamanhoCPF == 11) {
        inputCPF.value += "-"
    }
})

    let inputCNPJ = document.querySelector("#cnpj")
    inputCNPJ.addEventListener("keypress", ()=>{
        let tamanhoCNPJ = inputCNPJ.value.length
        if(tamanhoCNPJ == 2 || tamanhoCNPJ == 6) {
            inputCNPJ.value += "."
        } else if (tamanhoCNPJ == 10){
            inputCNPJ.value += "/"
        }else if (tamanhoCNPJ == 15 )
            inputCNPJ.value += "-"
    })