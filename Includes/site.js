class Pregunta {

    constructor(id, idTecnologia, pregunta, respuestaCorrecta = false, opciones = []) {
        this.id = id;
        this.idTecnologia = idTecnologia;
        this.pregunta = pregunta;
        this.opciones = opciones;
    }




    addOpciones(opcion) {
        this.opciones.push(opcion);
    }

    opcionesControl() {
        var div = document.createElement('div');
        div.classList.add("col", "s12");

        this.opciones.forEach(opcion => {
            var p = document.createElement('p');
            var label = document.createElement('label');
            var input = document.createElement('input');
            var span = document.createElement('span');


            input.id = opcion.id;
            input.name = "opciones";
            input.type = "radio";
            input.value = opcion.id;

            span.innerText = opcion.opcion;

            label.appendChild(input);
            label.appendChild(span);
            p.appendChild(label);
            div.appendChild(p);
        });
        return div;
    }
}
//, opciones=[getpreguntas.opciones.opcion[0],getpreguntas.opciones.opcion[1],getpreguntas.opciones.opcion[2]]
let preguntas = [getpreguntas()];
function getpreguntas() {

    const apiUrl = 'http://localhost:9096/api/Preguntas';

    $.ajax({
        url: apiUrl,
        type: 'GET',
        async: true,
        dataType: "json",
        contentType: 'application/json',
        success: function (data) {
            //for(let indice of data){
              //      console.log(indice);
            //}
            preg=[];
            data.forEach(element=>{
                preg.push(data[0]);
            })
            return data;

           /* preg=[]
            $.each(data,function(index,obj){
                 preg.push(obj.idPregunta,obj.idTecnologia,obj.nombrePregunta,opciones=[obj.opciones])
            })
            console.log(preg);
           for (i=0;i<data.length;i++) {
             new Pregunta(data[i]);
            console.log();

        }*/
    

        },
        error: function (result) {
            console.log(result);
            var toastHTML = '<span>Error al consultar.</span><button class="btn-flat toast-action red-text"><i class="material-icons">close</i></button>';
            M.toast({ html: toastHTML });
        }
    });


}



class Opcion {
    constructor(id, opcion, esCorrecta = false) {
        this.id = id;
        this.opcion = opcion;
        this.esCorrecta = esCorrecta;

    }


}
let opciones=[getopciones.opc];
function getopciones() {

    const apiUrl = 'http://localhost:9096/api/Opciones';
    
    $.ajax({
        url: apiUrl,
        type: 'GET',
        async: true,
        dataType: "json",
        contentType: 'application/json',
        success: function (data) {

            console.log(data);
            opc=[]
            $.each(data,function(index,obj){
                 opc.push(obj.idPregunta,obj.opcion,obj.esCorrecta);
            })

           for (i=0;i<opc.length;i++) {
                 opc[i]= new Pregunta(opc[i]);
                 console.log(opc[i]);

             }
         
          

        },
        error: function (result) {
            console.log(result);
            var toastHTML = '<span>Error al consultar.</span><button class="btn-flat toast-action red-text"><i class="material-icons">close</i></button>';
            M.toast({ html: toastHTML });
        }
    });


}

let pregunta1 = new Pregunta(1, 1, '¿Html es en lenguaje?');
var opcion1 = new Opcion(1, 'De programación');
var opcion2 = new Opcion(2, 'De marcado', true);
var opcion3 = new Opcion(3, 'Ambas');

pregunta1.addOpciones(opcion1);
pregunta1.addOpciones(opcion2);
pregunta1.addOpciones(opcion3);

var opcion1 = new Opcion(1, 'HyperText Markup Language', true);
var opcion2 = new Opcion(2, 'HyperLynk Markup Language');
var opcion3 = new Opcion(3, 'Higth Textual Markup Language');
let pregunta2 = new Pregunta(2, 1, '¿Qué significa Html?', false, [opcion1, opcion2, opcion3]);

var opcion1 = new Opcion(1, 'droplist');
var opcion2 = new Opcion(2, 'select', true);
var opcion3 = new Opcion(3, 'optgroup');
var opcion4 = new Opcion(4, 'list');
let pregunta3 = new Pregunta(3, 1, '¿Con qué tag se declara un menú de opciones?', false, [opcion1, opcion2, opcion3, opcion4]);

//CSS
var opcion1 = new Opcion(1, 'Si');
var opcion2 = new Opcion(2, 'No', true);
let pregunta4 = new Pregunta(4, 2, '¿CSS es un lenguaje de programación?', false, [opcion1, opcion2]);

var opcion1 = new Opcion(1, 'Cascading Style Sheets', true);
var opcion2 = new Opcion(2, 'Column Styling Sheets');
var opcion3 = new Opcion(3, 'Cascading Style Shows');
let pregunta5 = new Pregunta(5, 2, '¿Qué significa CSS?', false, [opcion1, opcion2, opcion3]);

var opcion1 = new Opcion(1, '[Estilo]');
var opcion2 = new Opcion(2, '.Estilo', true);
var opcion3 = new Opcion(3, '@Estilo');
let pregunta6 = new Pregunta(6, 2, '¿Cómo podemos aplicar estilo a una clase?', false, [opcion1, opcion2, opcion3]);

//JavaScript
var opcion1 = new Opcion(1, 'Cliente');
var opcion2 = new Opcion(2, 'Servidor');
var opcion3 = new Opcion(3, 'Ambos', true);
let pregunta7 = new Pregunta(7, 3, '¿JS se ejecuta en el lado de?', false, [opcion1, opcion2, opcion3]);

var opcion1 = new Opcion(1, 'var');
var opcion2 = new Opcion(2, 'let');
var opcion3 = new Opcion(3, 'ambas', true);
let pregunta8 = new Pregunta(8, 3, '¿Cómo podemos declarar una variable en JS?', false, [opcion1, opcion2, opcion3]);

var opcion1 = new Opcion(1, 'No');
var opcion2 = new Opcion(2, 'Si', true);
let pregunta9 = new Pregunta(9, 3, '¿JS es un lenguaje de programación?', false, [opcion1, opcion2]);



class PreguntasManager {
    constructor(idTecnologia, posicionActual = 0, preguntas = []) {
        this.posicionActual = posicionActual;
        this.preguntas = preguntas;

        this.filtrarPreguntas(idTecnologia);
    }

    filtrarPreguntas(idTecnologia) {
        this.preguntas = preguntas.filter(pregunta => pregunta.idTecnologia == idTecnologia);
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
        var opcion = this.preguntas[this.posicionActual].opciones.filter(opcion => opcion.id == opcionSeleccionada)[0];
        this.preguntas[this.posicionActual].respuestaCorrecta = opcion.esCorrecta;
        return;
    }


}