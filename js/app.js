import '/App/componentes/Home/home.js'
import '/App/componentes/nivelCalidad/nivelCalidad.js'

let precioTotal = []

const startButton = document.querySelector('#start')
const mainView = document.querySelector('.main-view')
startButton.addEventListener('click', (e) => {
    mainView.innerHTML = '<nivel-calidad></nivel-calidad>'

})