let pais = prompt('Ingrese el nombre del país')
let figuritas = parseInt(prompt('Ingrese la cantidad de figuritas', 0));

/* const paisesmundial = ["Argentina", "Brasil", "Holanda", "Iran", "Korea del sur", "Japón", "Arabia Saudita", "Ecuador", "Uruguay", "Canada", "Senegal", "Ghana", "Tunes", "Camerún", "Marruecos", "Polonia", "Portugal", "México", "Estados Unidos", "Gales", "Australia", "Costa Rica", "Dinamarca", "Alemania", "Bélgica", "Francia", "Croacia", "Serbia", "España", "Inglaterra", "Suiza", "Qatar"] */
const totalfigus = 670
const totalfigusequipo = 19

function verificar(numero) {

    figuritas = numero

    if (!isNaN(figuritas)) {
        if (figuritas <= totalfigusequipo) {
            mensaje = alert("El numero está dentro del rango");
        } else {
            while (figuritas > totalfigusequipo) {
                mensaje = alert("El numero está fuera de rango, el valor ingresado tiene que ser menor o igual que 19")
                figuritas = parseInt(prompt('Ingrese la cantidad de figuritas', 0))
            }
        }

    } else {
        mensaje = alert("Debes ingresar sólo números")
        figuritas = parseInt(prompt('Ingrese la cantidad de figuritas', 0))
        verificar(figuritas)
    }
}
verificar(figuritas)

/* let paisesingresados = []
paisesingresados[paisesingresados.length] = pais
console.log(`Ha ingresado el país: ${pais}`)
console.log(paisesingresados) */

class Equipo {
    constructor(pais, figuritas) {
        this.pais = pais;
        this.figuritas = figuritas;
    };
}
const equipo = new Equipo(pais, figuritas);

let restanfiguritas = totalfigusequipo - figuritas

const paisesingresados = (equipo) => {
    equipo.push(pais);
};
console.log (`Ha ingresado el país: ${pais}`)
console.log (`Le faltan: ${restanfiguritas} para completar el equipo`)

