import {getData, postData, delData, putData} from '/api/db.js'
import {preciosLocal} from '/js/app.js'
export class NivelCalidad extends HTMLElement {
    constructor() {
        super()
        this.render()
    }
    render() {
        this.innerHTML = /* HTML */ `
        <style>
        @import url('/App/componentes/nivelCalidad/style.css');
        </style>
        <section class="main-content">
            <div class="text-content">
                <h2 id="main-text">¿Qué nivel de calidad estás buscando?</h2>
            </div>
            <div class="content-img">
                <div class="img-group" id="option-1">
                    <img src="storage/RecursosExamen/answer-1-1.png" alt="No disp." id="option-1">
                    <p id="option-1" >Calidad optima</p>
                </div>
                <div class="img-group" id="option-2">
                    <img src="storage/RecursosExamen/answer-1-2.png" alt="No disp." id="option-2">
                    <p id="option-2">Buena relacion calidad/precio</p>
                </div>
                <div class="img-group" id="option-3">
                    <img src="storage/RecursosExamen/answer-1-3.png" alt="No disp." id="option-3">
                    <p id="option-3">No me importa tanto la calidad</p>
                </div>
            </div>
        </section>
        `
        this.sendPrice()
    }
    sendPrice() {
        let precioCalidad;
        const opciones = document.querySelectorAll(".img-group")
        opciones.forEach(option => {
            option.addEventListener('click', async (e) => {
                let targetInput = e.target.id
                targetInput == 'option-1'? precioCalidad = 300000 : targetInput == 'option-2'? precioCalidad = 380000 : targetInput == 'option-3'? precioCalidad = 200000 : console.log("");
                let data = {
                    id : "precio calidad",
                    valor : precioCalidad
                }
                preciosLocal.push(precioCalidad)
                console.log(data);
                // await postData(data)
                const mainView = document.querySelector('.main-view')
                mainView.innerHTML = '<tipo-app></tipo-app>'
            })
        })

    }
}

customElements.define("nivel-calidad", NivelCalidad)