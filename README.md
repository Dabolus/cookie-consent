# \<cookie-consent\>
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/Dabolus/cookie-consent)
[![Travis build](https://img.shields.io/travis/Dabolus/cookie-consent.svg)](https://travis-ci.org/Dabolus/cookie-consent)
[![GitHub release](https://img.shields.io/github/release/Dabolus/cookie-consent/all.svg)](https://github.com/Dabolus/cookie-consent)

_[Demo and API docs](https://www.webcomponents.org/element/Dabolus/cookie-consent)_

A great, simple and fully customizable material design cookie consent that automatically
shows up only to the users subject to the cookie law (EU users).

## Features
- Ready out of the box. Just include it and insert a `<cookie-consent></cookie-consent>`
  in your web app and you are ready to go!
- Fully customizable. It can be completely styled and it supports a lot of properties that
  allows you to easily change its default behavior.
- Easily detect what the user does. The readonly `cookies-status` property can be binded to
  detect whether the user consent is `pending`, `accepted` or `rejected`. It also fires a
  `cookies-status-changed` event when the user responds, so you can wait for the user to
  accept or reject the cookies before doing something with their data.
- Tested using the [web-component-tester](https://github.com/Polymer/web-component-tester)

## Installation
```
bower install --save cookie-consent
```

## Usage
#### Basic usage
```html
<cookie-consent></cookie-consent>
```
#### Custom text, policy link and consent rejection
```html
<cookie-consent
  text="This website uses yummy cookies"
  policy-link="/policy"
  rejectable>
</cookie-consent>
```

#### Full customization
You can even set an empty text and then use a span with the class `.text` to insert anything
you want (icons, etc.). The same can be done with the policy link. Just use the `.policy-link`
class in an anchor tag inside the `cookie-consent`.
```html
<cookie-consent use-local-storage>
  <span class="text">
    This website uses cookies 
    <iron-icon icon="editor:insert-emoticon"></iron-icon>
  </span>
  <a href="/policy" class="policy-link">Yay!</a>
</cookie-consent>
```

_**Note:** the user response is saved by default in a permanent cookie.
You can change this behavior by adding the `use-local-storage`
or the `use-session-storage` properties._

## Styling

The following custom properties and mixins are available for styling:

| Custom property                      | Description                                                      | Default                 |
| ------------------------------------ | ---------------------------------------------------------------- | ----------------------- |
| `--cookie-consent-background-color`  | The background color of the cookie consent                       | `#323232`               |
| `--cookie-consent-text-color`        | The color of text in the cookie consent                          | `#f1f1f1`               |
| `--cookie-consent-policy-link-color` | The color of the link to the cookie policy                       | `--light-accent-color`  |
| `--cookie-consent-reject-text-color` | The main color of the button to reject the cookie policy         | `--disabled-text-color` |
| `--cookie-consent-reject-background` | The background of the button to reject the cookie policy         | `transparent`           |
| `--cookie-consent-reject-ink-color`  | The color of the ink displayed when the reject button is pressed | `--disabled-text-color` |
| `--cookie-consent-accept-text-color` | The main color of the button to accept the cookie policy         | `--accent-color`        |
| `--cookie-consent-accept-background` | The background of the button to accept the cookie policy         | `transparent`           |
| `--cookie-consent-accept-ink-color`  | The color of the ink displayed when the accept button is pressed | `--accent-color`        |
| `--cookie-consent-accept-button`     | Mixin applied to the accept button                               | `{}`                    |
| `--cookie-consent-reject-button`     | Mixin applied to the reject button                               | `{}`                    |
| `--cookie-consent-buttons`           | Mixin applied to both the accept and reject buttons              | `{}`                    |
| `--cookie-consent-policy-link`       | Mixin applied to the policy link                                 | `{}`                    |
| `--cookie-consent-text`              | Mixin applied to the cookie consent text                         | `{}`                    |
| `--cookie-consent-toast`             | Mixin applied to the cookie consent toast                        | `{}`                    |
| `--cookie-consent`                   | Mixin applied to the cookie consent                              | `{}`                    |

This element uses `paper-toast` to display the consent. `paper-toast` applies the mixin `--paper-font-common-base` but does not import `paper-styles/typography.html`.
In order to apply the `Roboto` font to this element, make sure you've imported `paper-styles/typography.html`.
