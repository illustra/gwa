class Dialog extends HTMLElement {
    constructor() {
        super();
        this.listeners = {};
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        const { shadowRoot } = this;
        const template = document.getElementById('dialog-template');
        const node = document.importNode(template.content, true);
        shadowRoot.appendChild(node);

        // Copy theme
        const root = shadowRoot.querySelector('.dialog-content');
        let accent = state.get("set"),
            theme = document.documentElement.getAttribute('data-theme');
        root.setAttribute('data-theme', theme);
        root.setAttribute('data-accent', accent);
    }

    disconnectedCallback() {
        // Remove all button listeners
        let buttons = this.shadowRoot.querySelectorAll('.dialog-buttons li');
        for (let i = 0; i < buttons.length; i++) {
            let button = buttons[i];
            button.removeEventListener('click', this.listeners[button.innerText]);
        }
    }

    set title(text) {
        const { shadowRoot } = this;
        shadowRoot.querySelector('.dialog-header h2').innerText = text;
    }

    set type(text) {
        const { shadowRoot } = this;
        this.setAttribute('type', text);
        shadowRoot.querySelector('.dialog-content').setAttribute('type', text);
    }

    addButton(text, listener) {
        const { shadowRoot } = this;

        // Create <li>
        let boundListener = listener.bind(this);
        let el = document.createElement('li');
        el.innerText = text;
        el.addEventListener('click', boundListener);

        // Store button & function reference for cleanup on disconnect
        this.listeners[text] = boundListener;

        // Append <li> to DOM
        shadowRoot.querySelector('.dialog-buttons ul').appendChild(el);
    }

    appendToBody(el) {
        const { shadowRoot } = this;
        shadowRoot.querySelector('.dialog-body').appendChild(el);
    }

    show() {
        app.dim();

        // Sometimes the animation does not play due to reflows.
        // Let's use a small delay to allow the browser some breathing time.
        window.setTimeout(function(){
            const { classList } = this;
            requestAnimationFrame(function(){
                classList.add('visible');
            });
        }.bind(this), 10);
    }

    dismiss() {
        app.unDim();
        this.classList.remove('visible');

        // Remove after animation
        window.setTimeout(function() {
            document.body.removeChild(this);
        }.bind(this), 300);
    }
}

customElements.define('gwa-dialog', Dialog);