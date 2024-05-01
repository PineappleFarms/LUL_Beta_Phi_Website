class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav>
            <ul>
                <img src="images/LUL_Logo_Horizontal_Brown.png" alt="logo" id="logo">
                <li id="push"><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="leadership.html">Leadership</a></li>
            </ul>
            </nav>
        </header>
    `;
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <ul>
                <img src="images/instagram.svg" alt="instagram" id="instagram">
                <img src="images/x-twitter.svg" alt="twitter" id="twitter">
                <img src="images/email.svg" alt="email" id ="email">
            </ul>
            <p>Created by Diego Lopez &copy; 2024</p>
        </footer>
    `;
    }
}

customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);