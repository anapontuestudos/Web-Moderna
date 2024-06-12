function tratarErro(erro){

    throw new Error("Poxa, deu erro...")
}

function imprimirNome(obj){

    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }
    catch(e){

        tratarErro(e)
    }
}

const obj = {nome: 'Ana'}
imprimirNome(obj)