import '/App/componentes/Home/home.js'
import '/App/componentes/nivelCalidad/nivelCalidad.js'
import '/App/componentes/tipoApp/tipoApp.js'
import '/App/componentes/diseño/diseño.js'



const startButton = document.querySelector('#start')
const mainView = document.querySelector('.main-view')
startButton.addEventListener('click', (e) => {
    mainView.innerHTML = '<nivel-calidad></nivel-calidad>'

})

