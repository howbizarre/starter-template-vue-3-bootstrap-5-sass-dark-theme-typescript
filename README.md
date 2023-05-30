# Starter template based on Vue 3, Bootstrap 5, SASS with Dark Theme and Typescript

This template was created to help web developers jumpstart their development.
It uses **Vue 3** with **Composition API** and **Typescript** support and added **Bootstrap 5** with support for **SASS** and **Dark Themes**.

Dark theme support in Bootstrap, by default, comes from version 5.3.0, which is currently an Alpha release. Therefore, it should be installed explicitly, and you should test it well before adding it to the production environment.

## Frameworks

- [VueJS](https://vuejs.org/guide/quick-start.html)
- [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

## Supported preprocessors

- [TypeScript](https://www.typescriptlang.org/docs/handbook/intro.html)
- [SASS](https://sass-lang.com/documentation/)

## Additional packages

- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Vue Router](https://router.vuejs.org/guide/)
- [Process Environment](https://vitejs.dev/guide/env-and-mode.html)

## Builder

- [Vite](https://vitejs.dev/guide/)

## Developer notes

There are two different layouts (Default and Page) — the first one for the home page and the second for the rest. Layouts are changed based on [Nested Named Routes](https://router.vuejs.org/guide/essentials/nested-routes.html#nested-named-routes) in Vue Router. This way does not use dynamic imports and works faster.

## Directory structure

```
PROJECT /* Entry point and configurations */
│   .env.development
│   .env.production
│   env.d.ts
│   index.html
│   package-lock.json
│   package.json
│   README.md
│   tsconfig.config.json
│   tsconfig.json
│   vite.config.ts
│
├───public /* All static assets to the server, as robots.txt and more... */
│       favicon.ico
│
└───src /* In The Begining */
    │   App.vue
    │   main.ts
    │
    ├───components /* Components for Views and Layouts */
    │       Footer.vue
    │       Heads.vue
    │       Nav.vue
    │       Refs.vue
    │
    ├───layouts /* You can add your own Layout files */
    │       Default.vue
    │       Page.vue
    │
    ├───router /* Define the routes of your app */
    │       index.ts
    │
    └───views /* Change, Add, Remove, and Update the views to your needs */
            About.vue
            Contacts.vue
            Home.vue
```

# Get Started

Make a new repository from the template and use your favorite package manager to install it. Mine is NPM and the commands are:

## Install

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

Make sure, that reviewed all settings about the build script are in the package.json file and in the .env.[mode] files.

```bash
npm run build
```
