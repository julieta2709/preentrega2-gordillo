let cantidadpaises = prompt('Ingrese mediante un número entero la cantidad de paises que va a ingresar');


const totalfigusequipo = 19
let contador = 0
let listapaises = []

class Equipo {
    constructor(pais, figuritas) {
        this._pais = function () {
            return pais;
        };
        this._figuritas = function () {
            return figuritas;
        };
    }
    getPais() {
        return this._pais();
    }
    setPais(nuevo_pais) {
        this._pais = function () {
            return nuevo_pais;
        };
    }
    getFiguritas() {
        return this._figuritas;
    };
    setFiguritas(nueva_figuritas) {
        this._figuritas = function () {
            return nueva_figuritas;
        };
    }
    getEquipos() {
        this._pais().forEach(element => {
            console.log(`País ingresado: ${element._pais()}`);
            console.log(`Cantidad de figuritas: ${element._figuritas()}`);
        });
    }
    getCantTotalFiguritas() {
        let cantfiguritas = []
        this._pais().forEach(element => {
            cantfiguritas.push(element._figuritas());
        });
        console.log('Cantidad total de figuritas', cantfiguritas.reduce((valorAnterior, valorActual) => valorAnterior + valorActual, 0))
    }

}
while (contador < cantidadpaises) {
    let pais = prompt('Ingrese el nombre del País')
    let figuritas = parseInt(prompt('Ingrese la cantidad de figuritas'))

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


    let equipo = new Equipo(pais, figuritas)
    listapaises.push(equipo)

    contador++
}

const imprimirEquipo = (equipo) => {
    equipo.getEquipos();
    equipo.getCantTotalFiguritas();
}

let equipo = new Equipo(listapaises)

imprimirEquipo(equipo, listapaises)
