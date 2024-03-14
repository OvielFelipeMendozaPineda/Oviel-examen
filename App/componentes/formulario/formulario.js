import {getData, postData, delData, putData} from '/api/db.js'
import {totales} from '/js/app.js'
export class Formulario extends HTMLElement {
    constructor() {
        super()
        this.render()
    }
    async render() {
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
                        <input type="text" placeholder="Ingresa tu nombre completo" name="costumer-name">
                    </fieldset>
                    <fieldset>
                        <legend>¿Cúal es tu número de contanto?</legend>
                        <input type="number" placeholder="Ingresa tu número de contanto" name="costumer-number">
                    </fieldset>
                    <fieldset>
                        <legend>¿Cúal es tu email?</legend>
                        <input type="email" placeholder="Ingresa tu email " name="costumer-email">
                    </fieldset>
                    <button type="submit" class="btn">Terminar!</button>
                </div>
            </form>
        `
        this.saveInfo(totales)
    }
    saveInfo(totales) {
        const costumerForm = this.querySelector('#costumer-info');
        costumerForm.addEventListener('submit', async (e) => { 
            e.preventDefault();
            let data = Object.fromEntries(new FormData(costumerForm));
            console.log(totales);
            data.precioTotal = totales.valor;
            await postData(data);
            console.log(data);
        });
    }
    
}

customElements.define("formulario-app", Formulario)