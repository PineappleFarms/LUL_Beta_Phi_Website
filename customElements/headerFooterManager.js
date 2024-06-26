class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav>
            <ul>
                <img src="images/branding/LUL_Logo_Horizontal_Brown.png" alt="logo" id="logo">
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

class SocialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="socials">
            <ul>
                <p><a href="https://www.instagram.com/lul_uncc/"><img src="images/socialMediaIcons/instagram.svg" alt="instagram" id="instagram">
                <p><a href="https://www.linkedin.com/company/la-unidad-latina-lambda-upsilon-lambda-fraternity-inc/"><img src="images/socialMediaIcons/linkedin.svg" alt="linkedin" id="linkedin"></a></p>
                <p><a href="https://uncc.campuslabs.com/engage/organization/launidadlatina/contact"><img src="images/socialMediaIcons/email.svg" alt="email" id ="email"></a></p>
            </ul>
        </footer>
    `;
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <ol>
            <img src="images/branding/LUL_Logo_Horizontal_Gold.png" alt="goldLogo" id="goldLogo">
            <p>Designed by <a href="https://www.linkedin.com/in/diego-j-lopez/">Diego Lopez</a> &copy; 2024, All Rights Reserved.</p>
            <p>Site Created for the Beta Phi Chapter of La Unidad Latina, Lambda Upsilon Lambda Fraternity Inc.</p>
            <p><a href="https://www.launidadlatina.org/">LUL National Site</a></p>
            </ol>
        </footer>
    `;
    }
}

customElements.define('special-header', SpecialHeader);
customElements.define('social-footer', SocialFooter);
customElements.define('special-footer', SpecialFooter);