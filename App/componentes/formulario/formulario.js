import {getData, postData, delData, putData} from '/api/db.js'
export class Formulario extends HTMLElement {
    constructor() {
        super()
        this.render()
    }
    render() {
        this.innerHTML = /* HTML */ `
        <style>
        @import url('/App/componentes/formulario/style.css');
        </style>
            <form id="costumer-info">
                <div class="form-body">
                    <fieldset>
                        <legend>¡Para mayor consulta, déjanos tu informacion!</legend>
                    </fieldset>
                    <fieldset>
                        <legend>¿Cúal es tu nombre?</legend>
                        <input type="text" placeholder="Ingresa tu nombre completo" id="costumer-name">
                    </fieldset>
                    <fieldset>
                        <legend>¿Cúal es tu número de contanto?</legend>
                        <input type="number" placeholder="Ingresa tu número de contanto" id="costumer-number">
                    </fieldset>
                    <fieldset>
                        <legend>¿Cúal es tu email?</legend>
                        <input type="email" placeholder="Ingresa tu email " id="costumer-email">
                    </fieldset>
                    <div class="btn"><button type="submit">Terminar!</button></div>
                </div>
            </form>
        `
        this.sendPrice()
    }
    sendPrice() {
        const finishBtn = this.querySelector('.btn')
        const costumerForm = this.querySelector('#costumer-info')
        finishBtn.addEventListener('submit', async (e) => {
            e.preventDefault()
            let data = Object.fromEntries(new FormData(costumerForm))
            data[precioTotal] = precio
            console.log(data);
        })
    }
}

customElements.define("formulario-app", Formulario)