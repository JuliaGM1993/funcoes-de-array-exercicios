const objetos = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

const capsLock = (objeto) => {
    for (i in objeto) {
        objeto[i] = objeto[i].toUpperCase
    }
    return objeto
}
console.log(capsLock(objetos))

const textoCorrido = (objeto) =>{
    return `${objeto.nome} ${objeto.profissao} ${objeto.username} ${objeto.senha}`
}
console.log(textoCorrido(objetos))

const imprimir = (objeto, callback) =>{
    const novoObjeto = callback(objeto)
    return novoObjeto
}

console.log(imprimir(objetos, capsLock))
console.log(imprimir(objetos, textoCorrido))