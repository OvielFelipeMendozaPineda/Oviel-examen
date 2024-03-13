import {getData, postData, delData, putData} from '/api/db.js'
export class Resumen extends HTMLElement {
    constructor() {
        super()
        this.render()
    }
    render() {
        getData()
        this.innerHTML = /* HTML */ `
        <style>
        @import url('/App/componentes/resumen/style.css');
        </style>
             <section class="main-content">
             <div class="text-content">
                 <p>¡Bien! ¡Hemos terminado!</p>
                 <h2 id="main-text">¡Compartenos si te ha gustasdo!</h2>
                 <div class="social-links">
                     <div class="links">Links</div>
                     <div class="links">Links</div>
                     <div class="links">Links</div>
                     <div class="links">Links</div>
                 </div>
                 <h2>El costo estimado de tu app es</h2>
             </div>
             <div class="total-price">
             </div>
             <div class="text-content">
                 <div class="edit-asnwer">
                     <a href=""> Editar respuestas</a>
                 </div>
                 <div class="footer-text">
                     <p>En GBP contamos con los mejores <b>desarrolladores de apps y webs para tu proyecto. Publica tu proyecto en GBP.</b></p>
                 </div>
             </div>
             </section>
             <formulario-app></formulario-app>
        `
    }
}

customElements.define("resumen-app", Resumen)