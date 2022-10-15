class RecipeDetail extends HTMLElement {
    connectedCallback() {
        this.name = this.getAttribute("name") || null;
        this.category = this.getAttribute("category") || null;
        this.country = this.getAttribute("country") || null;
        this.instruction = this.getAttribute("instruction") || null;
        this.thumbnail = this.getAttribute("thumbnail") || null;
        this.link = this.getAttribute("link") || null;
        this.nameLink = this.getAttribute("nameLink") || null;
        this.render();
    }
    render() {
        this.innerHTML = `
            <h2 class="text-slate-900 font-bold text-2xl">
   ${this.name}
            </h2>
            <p class="font-semibold text-xs text-white bg-cyan-500 inline-block px-4 py-1 m-2 rounded border">
            ${this.category}
            </p>
            
            <div class="flex justify-center overflow-hidden">
            <img
                class="rounded-3xl border-4 border-white"
                src="${this.thumbnail}"
                alt=""
                srcset=""
                />
            </div>
            <p class='text-slate-900 font-semibold'>From : ${this.country}</p>
            <h3
            class="font-semibold text-xl text-slate-900 my-2"
            >
            Intruction :
            </h3>
            <p class="text-slate-700 font-base py-4">
            ${this.instruction}
            </p>
            
           
            <div class="m-2">
            <a
                class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                href="${this.link}"
                target="_blank"
                >Watch tutorial how to make ${this.nameLink}</a
                >
            </div>
        `;
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
        this.render();
    }

    static get observedAttributes() {
        return ["caption"];
    }
}
customElements.define("recipe-detail", RecipeDetail);
