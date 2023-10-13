
// Crea una función llamada numeroMasGrande(array) que reciba como parámetro un array de números y devuelva el número más grande de ese array. Puedes utilizar un ciclo for...of para recorrer el array y condicionales para encontrar el número más grande.
function numeroMasGrande(array){
    let masGrande = array[0];
    for (numero of array){
        if (numero > masGrande){
            masGrande = numero
        }
    }
    return masGrande;
}
const testArray = [10, -5, 20, -15]
console.log(numeroMasGrande(testArray))