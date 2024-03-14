import {getData, postData, delData, putData} from '/api/db.js'
export class tipoApp extends HTMLElement {
    constructor() {
        super()
        this.render()
    }
    render() {
        this.innerHTML = /* HTML */ `
        <style>
        @import url('/App/componentes/tipoApp/style.css');
        </style>
            <section class="main-content">
            <div class="text-content">
                <h2 id="main-text">¿Qué tipo de app necesitas?</h2>
            </div>
            <div class="content-img">
                <div class="img-group" id="option-1">
                    <img src="storage/RecursosExamen/answer-2-1.png" alt="No disp." id="option-1">
                    <p id="option-1" >Aplicacion Android</p>
                </div>
                <div class="img-group" id="option-2">
                    <img src="storage/RecursosExamen/answer-2-2.png" alt="No disp." id="option-2">
                    <p id="option-2">Aplicacion IOS</p>
                </div>
                <div class="img-group" id="option-3">
                    <img src="storage/RecursosExamen/answer-2-3.png" alt="No disp." id="option-3">
                    <p id="option-3">Aplicacion Windos Phone</p>
                </div>
                <div class="img-group" id="option-4">
                    <img src="storage/RecursosExamen/answer-2-4.png" alt="No disp." id="option-4">
                    <p id="option-4">Aplicacion Andriod + IOS</p>
                </div>
            </div>
            </section>
        `
        this.sendPrice()
    }
    sendPrice() {
        console.log();
        let tipoApp;
        const opciones = document.querySelectorAll(".img-group")
        opciones.forEach(option => {
            option.addEventListener('click', async (e) => {
                let targetInput = e.target.id
                targetInput == 'option-1'? tipoApp = 2000 : targetInput == 'option-2'? tipoApp = 3000000 : targetInput == 'option-3'? tipoApp = 800 : targetInput == 'option-4'? tipoApp = 3500 : console.log("");
                let data = {
                    id : "tipo app",
                    valor : tipoApp
                }
                console.log(data);
                // await postData(data)
                const mainView = document.querySelector('.main-view')
                mainView.innerHTML = '<diseño-app></diseño-app>'
            })
        })
    }
}

customElements.define("tipo-app", tipoApp)