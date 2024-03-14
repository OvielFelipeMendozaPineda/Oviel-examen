import {getData, postData, delData, putData} from '/api/db.js'
import {preciosLocal} from '/js/app.js'
export class Autenticacion extends HTMLElement {
    constructor() {
        super()
        this.render()
    }
    render() {
        this.innerHTML = /* HTML */ `
        <style>
        @import url('/App/componentes/auth/style.css');
        </style>
            <section class="main-content">
            <div class="text-content">
                <h2 id="main-text">¿Tú app necesita sistema de autenticacion?</h2>
            </div>
            <div class="content-img">
                <div class="img-group" id="option-1">
                    <img src="storage/RecursosExamen/answer-5-1.png" alt="No disp." id="option-1">
                    <p id="option-1" >Sí, con redes sociales y email.</p>
                </div>
                <div class="img-group" id="option-2">
                    <img src="storage/RecursosExamen/answer-5-2.png" alt="No disp." id="option-2">
                    <p id="option-2">Sí, con email</p>
                </div>
                <div class="img-group" id="option-3">
                    <img src="storage/RecursosExamen/answer-5-3.png" alt="No disp." id="option-3">
                    <p id="option-3">No</p>
                </div>
                <div class="img-group" id="option-4">
                    <img src="storage/RecursosExamen/answer-5-4.png" alt="No disp." id="option-4">
                    <p id="option-4">No lo sé todavia </p>
                </div>
            </div>
            </section>
        `
        this.sendPrice()
    }
    sendPrice() {
        console.log(preciosLocal);
        let autenticacion;
        const opciones = document.querySelectorAll(".img-group")
        opciones.forEach(option => {
            option.addEventListener('click', async (e) => {
                let targetInput = e.target.id
                targetInput == 'option-1'? autenticacion = 2000.000 : targetInput == 'option-2'? autenticacion = 1500.000 : targetInput == 'option-3'? autenticacion = 0 : targetInput == 'option-4'? autenticacion = 3500.000 : console.log("");
                let data = {
                    id : "autenticacion",
                    valor : autenticacion
                }
                preciosLocal.push(autenticacion)
                console.log(data);
                // await postData(data)
                const mainView = document.querySelector('.main-view')
                mainView.innerHTML = '<resumen-app></resumen-app>'
            })
        })
    }
}

customElements.define("autenticacion-app", Autenticacion)