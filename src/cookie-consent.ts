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

  /**
   * Whether the cookie consent is currently opened or not.
   *
   * @return {boolean}
   */
  public get opened(): boolean {
    return this.hasAttribute('opened');
  }

  public set opened(val: boolean) {
    if (val) {
      this.setAttribute('opened', '');
    } else {
      this.removeAttribute('opened');
    }
  }

  /**
   * The url of the API to use to retrieve the user location information.
   *
   * @return {string}
   */
  public get geoIpUrl(): string {
    return this.getAttribute('geo-ip-url');
  }

  public set geoIpUrl(val: string) {
    this.setAttribute('geo-ip-url', val);
  }

  private readonly _template: HTMLTemplateElement;
  private readonly _textRef: HTMLDivElement;
  private readonly _rejectRef: HTMLButtonElement;
  private readonly _acceptRef: HTMLButtonElement;

  constructor() {
    super();
    this._template = document.createElement('template');
    // TODO
    this._template.innerHTML = `
      <style>
        :host {
          font-family: 'Roboto', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
          position: fixed;
          bottom: 0;
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
          z-index: 100;
          transition: .3s z-index step-start;
          display: flex;
        }
        * {
          box-sizing: border-box;
        }
      </style>
      <div id="text">
        This website uses cookies to give you the best possible experience.
      </div>
      <div>
        <button id="reject">No, thanks</button>
        <button id="accept">Got it!</button>
      </div>
    `;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(this._template.content.cloneNode(true));
    this._textRef = this.shadowRoot.querySelector<HTMLDivElement>('#text');
    this._rejectRef = this.shadowRoot.querySelector<HTMLButtonElement>('#reject');
    this._acceptRef = this.shadowRoot.querySelector<HTMLButtonElement>('#accept');
  }

  /** @private */
  private attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue === newValue) {
      return;
    }
  }
}

window.customElements.define('cookie-consent', CookieConsent);
