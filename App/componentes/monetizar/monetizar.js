import {getData, postData, delData, putData} from '/api/db.js'
export class Monetizar extends HTMLElement {
    constructor() {
        super()
        this.render()
    }
    render() {
        this.innerHTML = /* HTML */ `
        <style>
        @import url('/App/componentes/monetizar/style.css');
        </style>
            <section class="main-content">
            <div class="text-content">
                <h2 id="main-text">¿Cómo monetizar tu app?</h2>
            </div>
            <div class="content-img">
                <div class="img-group" id="option-1">
                    <img src="storage/RecursosExamen/answer-4-1.png" alt="No disp." id="option-1">
                    <p id="option-1" >Aplicacion gratuita con publicidad</p>
                </div>
                <div class="img-group" id="option-2">
                    <img src="storage/RecursosExamen/answer-4-2.png" alt="No disp." id="option-2">
                    <p id="option-2">Aplicacion de pago</p>
                </div>
                <div class="img-group" id="option-3">
                    <img src="storage/RecursosExamen/answer-4-3.png" alt="No disp." id="option-3">
                    <p id="option-3">Compras dentro de la app</p>
                </div>
                <div class="img-group" id="option-4">
                    <img src="storage/RecursosExamen/answer-4-4.png" alt="No disp." id="option-4">
                    <p id="option-4">Otros / No lo sé todavia</p>
                </div>
            </div>
            </section>
        `
        this.sendPrice()
    }
    sendPrice() {
        let monetizar;
        const opciones = document.querySelectorAll(".img-group")
        opciones.forEach(option => {
            option.addEventListener('click', async (e) => {
                let targetInput = e.target.id
                targetInput == 'option-1'? monetizar = 600 : targetInput == 'option-2'? monetizar = 1000 : targetInput == 'option-3'? monetizar = 2000 : targetInput == 'option-4'? monetizar = 3500 : console.log("");
                let data = {
                    id : "Monetizar",
                    valor : monetizar
                }
                console.log(data);
                // await postData(data)
                const mainView = document.querySelector('.main-view')
                mainView.innerHTML = '<diseño-app></diseño-app>'
            })
        })
    }
}

customElements.define("monetizar-app", Monetizar)