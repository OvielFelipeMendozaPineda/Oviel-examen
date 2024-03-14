import {getData, postData, delData, putData} from '/api/db.js'
import {preciosLocal, totales} from '/js/app.js'
export class Resumen extends HTMLElement {
    constructor() {
        
        super()
        this.render()
    }
    async render() {
        
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
                 <h2 id="costo">El costo estimado de tu app es</h2>
                 
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
             <button type="submit" class="btn">Terminar!</button>
             </section>
             
        `
        this.getPrice(totales, preciosLocal)
    }
    async getPrice(totales, preciosLocal) {
        totales.valor = preciosLocal.reduce((a, b) => a + b, 0);

        console.log(totales);
        // const data = await getData()
        // const precios = data.map(item => item.valor)
        const cost = document.querySelector('#costo')
        let totalHTML = document.createElement('h2')
        totalHTML.innerText = totales.valor
        // let datos = {
        //     id: "precioTotal",
        //     valor: total
        // }

        
        // await postData(datos)
        cost.appendChild(totalHTML)
        const mainView = document.querySelector('.main-view')
        const startButton = document.querySelector('.btn')
        startButton.addEventListener('click', (e) => {
        mainView.innerHTML = '<formulario-app></formulario-app>'

})
    }
}

customElements.define("resumen-app", Resumen)