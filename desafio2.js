const pagina = require('./users.json').users


const cantMujeres = pagina.filter((personas) =>{
    return personas.gender == 'female'
}
)


const cantHombres = pagina.filter((personas) =>{
    return personas.gender == 'male'
}
)

const mujeresJovenes = pagina.filter((personas) => {
    return personas.gender == 'female' && personas.age <= 30

})

const hombresJovenes = pagina.filter((personas) => {
    return personas.gender == 'male' && personas.age <= 30

})

const universidad = pagina.filter((personas) =>{
    return personas.gender == 'male' && personas.university == 'Nanjing University of Traditional Chinese Medicine'


})



console.log("La cantidad total de mujeres es:", cantMujeres.length)
console.log("La cantidad de total hombres es:", cantHombres.length)
console.log("La cantidad de mujeres menores de 30 años es:", mujeresJovenes.length)
console.log("Sus emails son:\n")
const emailJovenes = mujeresJovenes.forEach((mujeresJovenes) => {
    console.log(`${mujeresJovenes.email}`)


})


console.log("Sus nombres son: ")
const listaEdades = mujeresJovenes.map((mujeresJovenes) =>{
    console.log(`${mujeresJovenes.firstName} ${mujeresJovenes.lastName}`)
    return mujeresJovenes.age
})

console.log("La cantidad de hombres menores de 30 años es:", hombresJovenes.length)
console.log("Sus emails son: ")
const emailHombresJovenes = hombresJovenes.forEach((hombresJovenes) => {
    console.log(`${hombresJovenes.email}`)


})

console.log("La cantidad de hombres que van a Nanjing University of Traditional Chinese Medicine son:", universidad.length)
listaEdades.sort()
console.log("Las edades de manor a mayor de mujeres menores de 30 años: ", listaEdades)
