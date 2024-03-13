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
                <div class="img-group">
                    <img src="storage/RecursosExamen/home-icon.png" alt="No disp.">
                    <p>Calidad optima</p>
                </div>
                <div class="img-group">
                    <img src="storage/RecursosExamen/home-icon.png" alt="No disp.">
                    <p>Buena relacion calidad/precio</p>
                </div>
                <div class="img-group">
                    <img src="storage/RecursosExamen/home-icon.png" alt="No disp.">
                    <p>No me importa tanto la calidad</p>
                </div>
            </div>
        </section>
        `
    }
}

customElements.define("nivel-calidad", NivelCalidad)