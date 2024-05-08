class CrestSymbolDiv extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      
          <img src="images/branding/officialCrest.jpg" alt="officialCrest" id="officialCrest">
          <div id="quickFacts">
            <h3>Quick Facts</h3>
            <p>Colors: brown, gold, red, white</p>
            <p>Motto: <br>“La Unidad Para Siempre” </p>
          </div>
          <img src="images/branding/officialSymbol.jpg" alt="officialSymbol" id="officialSymbol">
      `;
  }
}


customElements.define('symbol-div', CrestSymbolDiv);