let boton_1 = document.getElementById('boton1')
let boton_2 = document.getElementById('boton2')
let temp = document.getElementById('temp')
let contenido_c_a = document.getElementById('t_m_a')
let contenido_c_h_m = document.getElementById('t_m')
let contenido_c_h_t = document.getElementById('t_t')
let contenido_c_h_n = document.getElementById('t_n')
let tiempo = Math.floor((Math.random()) * 8000)
console.log(tiempo)

const climas = [
    "Despejado", "Nublado", "Lluvioso"
];

function climaA(climas) {
    return [...climas]
        .sort(() => Math.random() > 0.5 ? 1 : -1)
        .slice(0, 1)
}

function temperatura(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(temperatura(5, 40))

//inicia funciones de clima un dia en el año

boton_1.onclick = function() {
        let fecha_ingresada = document.getElementById('fechaI')
        let fecha_ingresada_valor = fecha_ingresada.value
        let fecha = document.getElementById('fecha')

        if (fecha_ingresada_valor == "") {
            alert("Debe de ingresar una fecha.")
        } else {
            setTimeout(clima, tiempo, climaA(climas))

            function clima(clima_S) {
                contenido_c_a.innerHTML = "Por la mañana sera: " + clima_S
            }



            function fecha_html() {
                fecha.innerHTML = `El Clima del día ${fecha_ingresada_valor}`
            }
            fecha_html()


            temp.innerHTML = "La temperatura sera de " + temperatura(5, 30) + " grados."

        }
    }
    //finaliza funciones de clima un dia en el año


//inicia funciones de clima de hoy
boton_2.onclick = function() {

    setTimeout(clima2, tiempo, climaA(climas))

    function clima2(clima_S) {
        contenido_c_h_m.innerHTML = "Tiempo por la mañana es: " + clima_S
    }

    setTimeout(clima3, tiempo, climaA(climas))

    function clima3(clima_S) {
        contenido_c_h_t.innerHTML = "Tiempo por la tarde es: " + clima_S
    }

    setTimeout(clima4, tiempo, climaA(climas))

    function clima4(clima_S) {
        contenido_c_h_n.innerHTML = "Tiempo por la noche es: " + clima_S
    }


}



console.log(climaA(climas))