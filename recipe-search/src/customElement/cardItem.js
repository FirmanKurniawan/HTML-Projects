class cardItem extends HTMLElement {
    connectedCallback() {
        this.idMeal = this.getAttribute("idMeal") || null;
        this.thumbnail = this.getAttribute("thumbnail") || null;
        this.name = this.getAttribute("name") || null;
        this.country = this.getAttribute("country") || null;
        this.category = this.getAttribute("category") || null;
        this.render();
    }

    render() {
        this.innerHTML = `
        <div
                    class="w-full max-w-sm bg-white rounded-2xl border-2 border-cyan-500"
                    style="box-shadow: 0px 11px 0px 0px rgb(7, 182, 213)" data-id="${this.idMeal}" >
                    <a href="#" class="p-6 flex justify-center">
                        <img
                            class="rounded-xl"
                            src="${this.thumbnail}"
                            alt="product image"
                        />
                    </a>
                    <div class="px-5 pb-5">
                        <a href="#">
                            <h5
                                class="text-xl font-semibold tracking-tight text-gray-900"
                            >
                                ${this.name}
                            </h5>
                        </a>
                        <div class="flex items-center mt-2.5 mb-5">
                            <span
                                class="font-semibold text-sm text-slate-700 mr-3"
                                >From :
                            </span>
                            <span
                                class="bg-cyan-100 text-cyan-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded"
                                >${this.country}</span
                            >
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-base font-bold text-cyan-600"
                                >${this.category}</span
                            >
                            <button
                                class="detail-btn relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200"
                                type="button"
                                id="detail"
                            >
                                <span
                                    class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0"
                                >
                                    Detail resep
                                </span>
                            </button>
                        </div>
                    </div>
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

customElements.define("card-item", cardItem);
