# Starter template based on Vue 3, Bootstrap 5, SASS and Typescript

This template should help get you started developing with Vue 3 in Vite and Bootstrap 5 with SASS.

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

There are two different layouts (Default and Page) — first one for the home page and another for the rest. Layouts are changed based on [Nested Named Routes](https://router.vuejs.org/guide/essentials/nested-routes.html#nested-named-routes) in Vue Router. This way does not use dynamic imports and works faster.

## Directory structure

```
├───public
│       favicon.ico
│
└───src
    │   App.vue
    │   main.ts
    │
    ├───components
    │       Footer.vue
    │       Heads.vue
    │       Nav.vue
    │       Refs.vue
    │
    ├───layouts
    │       Default.vue
    │       Page.vue
    │
    ├───router
    │       index.ts
    │
    └───views
            About.vue
            Contacts.vue
            Home.vue
```