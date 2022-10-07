let pais = prompt('Ingrese el nombre del país')
let figuritas = parseint(prompt('Ingrese la cantidad de figuritas'))



class Equipo {
    constructor(pais, figuritas) {
        this.pais = function () {
            return pais;
        };

        this.figuritas = function () {
            return figuritas;
        };
    }
}

