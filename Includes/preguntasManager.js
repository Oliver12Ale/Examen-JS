
class PreguntasManager {
    constructor(posicionActual = 0, preguntas = []) {
        this.posicionActual = posicionActual;
        this.preguntas = preguntas;

       
    }



    preguntaActual() {
        return this.preguntas[this.posicionActual];
    }
    siguiente() {
        if (this.preguntas.length == this.posicionActual) {
            return;
        }
        this.posicionActual++;
        return;
    }

    validarpregunta(opcionSeleccionada) {
        var opcion = this.preguntas[this.posicionActual].opciones.filter(opcion => opcion.idOpcion == opcionSeleccionada)[0];
        this.preguntas[this.posicionActual].respuestaCorrecta = opcion.esCorrecta;
        return;
    }

    opcionesControl() {
        var div = document.createElement('div');
        div.classList.add("col", "s12");

        this.preguntas[this.posicionActual].opciones.forEach(opcion => {
            var p = document.createElement('p');
            var label = document.createElement('label');
            var input = document.createElement('input');
            var span = document.createElement('span');


            input.id = opcion.idOpcion;
            input.name = "opciones";
            input.type = "radio";
            input.value = opcion.idOpcion;

            span.innerText = opcion.opcion;

            label.appendChild(input);
            label.appendChild(span);
            p.appendChild(label);
            div.appendChild(p);
        });
        return div;
    }

}