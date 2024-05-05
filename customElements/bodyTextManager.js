class CrestSymbolDiv extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div id="factsDiv">
            <img src="images/branding/officialCrest.jpg" alt="officialCrest" id="officialCrest">
            <div id="quickFacts">
            <h3>Quick Facts</h3>
            <p>Colors: brown, gold, red, white</p>
            <p>Motto: “La Unidad Para Siempre” </p>
            </div>
            <img src="images/branding/officialSymbol.jpg" alt="officialSymbol" id="officialSymbol">
        </div>
    `;
    }
}

customElements.define('symbol-div', CrestSymbolDiv);