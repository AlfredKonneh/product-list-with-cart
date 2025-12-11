# products-list

This is a Vue 3 project built with Vite. It shows a list of products and lets you add them to a cart. Your cart is saved even if you refresh the page, using localStorage.

--

## Features

- Built with **Vue 3 Composition API** for clean and maintainable code
- **Pinia Store** for global state management
- **LocalStorage persistence** for cart data
- Dynamic product listing from JSON
- Add, remove, and update products in the cart
- Responsive design for desktop, tablet, and mobile
- Responsive images
- Reusable **composables** for scalable logic

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

products-list/
├─ public/
├─ src/
│ ├─ assets/
│ ├─ components/
│ ├─ composables/
│ │ └─ useLocalStorage.js
│ ├─ data/
│ │ └─ products.json
│ ├─ store/
│ │ ├─ cartStore.js
│ │ └─ products.js
│ ├─ views/
│ ├─ App.vue
│ └─ main.js
├─ index.html
├─ package.json
├─ vite.config.js
└─ README.md

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
