export  class Home extends HTMLElement {
    constructor() {
        super()
        this.render()
    }
    render() {
        this.innerHTML = /* HTML */ `
        <style>
            @import url('/App/componentes/Home/style.css');
        </style>
        <section class="main-content">
            <div class="content-img">
                <img src="storage/RecursosExamen/home-icon.png" alt="No disp.">
            </div>
            <div class="text-content">
                <h2 id="main-text">¿Cuánto cuesta desarrollar mi app GBP?</h2>
                <p id="secondary-text">Calcula de forma rápida el costo para crear tu app contestando estas sencillas preguntas.</p>
            </div>
            <div class="content-button">
                <button type="button" id="start"> Empezar</button>
            </div>
        </section>
        `
       
    }
}

customElements.define("home-page", Home)