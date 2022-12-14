const numeros = [1,2,3,4,5,6,7,8,]
let triplos

function numeroMultiplicadoPor3(numeros){
    const triplos = numeros.map((i)=>{
        return i*3
    })
console.log(triplos)
return triplos
}
numeroMultiplicadoPor3(numeros)

let metades

function numerosDivididosPor2(numeros){
    const metades = numeros.map((i)=>{
        return i/2
    })
    console.log(metades)
    return metades
}
numerosDivididosPor2(numeros)