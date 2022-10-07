let pais = prompt('Ingrese el nombre del país')
let figuritas = parseInt(prompt('Ingrese la cantidad de figuritas', 0));

const paisesmundial = ["Argentina", "Brasil", "HOlanda", "Iran", "Korea del sur", "Japón", "Arabia Saudita", "Ecuador", "Uruguay", "Canada", "Senegal", "Ghana", "Tunes", "Camerún", "Marruecos", "Polonia", "Portugal", "México", "Estados Unidos", "Gales", "Australia", "Costa Rica", "Dinamarca", "Alemania", "Bélgica", "Francia", "Croacia", "Serbia", "España", "Inglaterra", "Suiza", "Qatar"]
const totalfigus = 670
const totalfigusequipo = 19



function verificar(numero) {

    figuritas = numero

    if (!isNaN(figuritas)) {
        if (figuritas <= totalfigusequipo) {
            mensaje = alert("El numero está dentro del rango");
        } else {
            while (figuritas > totalfigusequipo) {
                mensaje = alert("El numero está fuera de rango, el valor ingresado tiene que ser menor que 19")
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

class Equipo {
    constructor(pais, figuritas) {
        this.pais = function () {
            return pais;
        };

        this.figuritas = function () {
            return figuritas || [];
        };
    }

    getPais() {
        return pais();
    }

    getFiguritas() {
        return figuritas();
    }

    setPais(nuevo_pais) {
        this.pais = function () {
            return nuevo_pais;
        };
    }
    setfiguritas(nuevas_figuritas) {
        this.figuritas = function () {
            return nuevas_figuritas;
        }
    }

    getValorFiguritasFaltantes() {
        let figuritasfaltanes = []
        this.pais().forEach(function (elemento, index) {
            getValorFiguritasFaltantes.push(elemento.figuritas());
        });
        console.log(`Cantidad de figuritas faltantes del país: ${elemento.pais ()}`, valorFiguritasFaltantes.reduce((totalfigusequipo, figuritas) => totalfigusequipo - figuritas, 0))
    }
}