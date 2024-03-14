import '/App/componentes/Home/home.js'
import '/App/componentes/nivelCalidad/nivelCalidad.js'
import '/App/componentes/tipoApp/tipoApp.js'
import '/App/componentes/diseño/diseño.js'
import '/App/componentes/monetizar/monetizar.js'
import '/App/componentes/auth/auth.js'
import '/App/componentes/resumen/resumen.js'
import '/App/componentes/formulario/formulario.js'

let preciosLocal = []
var totales = {valor: 0}

const startButton = document.querySelector('#start')
const mainView = document.querySelector('.main-view')
startButton.addEventListener('click', (e) => {
    mainView.innerHTML = '<nivel-calidad></nivel-calidad>'

})

export {preciosLocal, totales}