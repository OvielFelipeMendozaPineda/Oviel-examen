import {getData, postData, delData, putData} from '/api/db.js'
import {preciosLocal} from '/js/app.js'
export class Diseño extends HTMLElement {
    constructor() {
        super()
        this.render()
    }
    render() {
        this.innerHTML = /* HTML */ `
        <style>
        @import url('/App/componentes/diseño/style.css');
        </style>
            <section class="main-content">
            <div class="text-content">
                <h2 id="main-text">¿Qué diseño necesita tu app.?</h2>
            </div>
            <div class="content-img">
                <div class="img-group" id="option-1">
                    <img src="storage/RecursosExamen/answer-3-1.png" alt="No disp." id="option-1">
                    <p id="option-1" >Interfaz sencilla</p>
                </div>
                <div class="img-group" id="option-2">
                    <img src="storage/RecursosExamen/answer-3-2.png" alt="No disp." id="option-2">
                    <p id="option-2">Interfaz personalizada</p>
                </div>
                <div class="img-group" id="option-3">
                    <img src="storage/RecursosExamen/answer-3-3.png" alt="No disp." id="option-3">
                    <p id="option-3">Interfaz replicada de la web</p>
                </div>
                <div class="img-group" id="option-4">
                    <img src="storage/RecursosExamen/answer-3-4.png" alt="No disp." id="option-4">
                    <p id="option-4">No necesito diseño</p>
                </div>
            </div>
            </section>
        `
        this.sendPrice()
    }
    sendPrice() {
        let diseño;
        const opciones = document.querySelectorAll(".img-group")
        opciones.forEach(option => {
            option.addEventListener('click', async (e) => {
                let targetInput = e.target.id
                targetInput == 'option-1'? diseño = 500: targetInput == 'option-2'? diseño = 1000 : targetInput == 'option-3'? diseño = 800 : targetInput == 'option-4'? diseño = 300 : console.log("");
                let data = {
                    id : "Diseño",
                    valor : diseño
                }
                preciosLocal.push(diseño)
                console.log(data);
                // await postData(data)
                const mainView = document.querySelector('.main-view')
                mainView.innerHTML = '<monetizar-app></monetizar-app>'
            })
        })
    }
}

customElements.define("diseño-app", Diseño)