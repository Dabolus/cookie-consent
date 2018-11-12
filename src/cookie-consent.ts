/**
 * `cookie-consent`
 * A great, simple and fully customizable material design cookie consent that automatically
 * shows up only to the users subject to the cookie law (EU users).
 * _[Take a look at the component overview for more info](https://www.webcomponents.org/element/Dabolus/cookie-consent)_
 *
 * @customElement
 * @demo demo/index.html
 */
export class CookieConsent extends HTMLElement {
  public static readonly observedAttributes = [''];

  private readonly _template: HTMLTemplateElement;

  constructor() {
    super();
    this._template = document.createElement('template');
    // TODO
    this._template.innerHTML = `
      <style>
        :host {
          font-family: 'Roboto', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          max-height: 100%;
          z-index: -1;
          will-change: z-index;
          transition: .3s z-index step-end;
          overflow-y: auto;
          display: none;
        }
        :host([opened]) {
          z-index: 9999;
          transition: .3s z-index step-start;
        }
        * {
          box-sizing: border-box;
        }
      </style>
      <div>TODO</div>
    `;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(this._template.content.cloneNode(true));
  }

  /** @private */
  private attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) {
      return;
    }
  }
}

window.customElements.define('cookie-consent', CookieConsent);
