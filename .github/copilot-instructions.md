# Copilot Instructions

## Project Overview
This is a **Vue 3 + Bootstrap 5 + TypeScript starter template** designed for quick-start web development. It uses Composition API, SASS preprocessing, Bootstrap's dark/light theme support (v5.3+), Bootstrap Icons, Vue Router, and Vite as the build tool.

## Architecture Patterns

### Layout System
- **Two distinct layouts**: `Default.vue` (home only) and `Page.vue` (all other pages)
- Layouts are applied via **Nested Named Routes** in Vue Router (no dynamic imports for performance)
- Layout structure:
  - `Default.vue`: Nav → Header with Heads component → Main → Footer
  - `Page.vue`: Nav → Main → Footer (no header)
- See [src/router/index.ts](../src/router/index.ts) for route-to-layout mappings

### Routing Convention
- All routes use `VITE_BUILD_ADDRESS` environment variable as base URL prefix
- Routes must specify layout as parent component with view as child
- Example pattern:
  ```typescript
  {
    path: `${baseUrl}/about`,
    component: () => import("@/layouts/Page.vue"),
    children: [
      { path: "", name: "About", component: () => import("@/views/About.vue") }
    ]
  }
  ```

### Component Organization
- **Components** (`src/components/`): Reusable UI pieces (Nav, Footer, Heads, Refs)
- **Layouts** (`src/layouts/`): Page structure templates
- **Views** (`src/views/`): Route-specific content
- Path alias `@/` maps to `src/` directory (configured in [vite.config.ts](../vite.config.ts))

## Bootstrap Integration

### Importing Bootstrap
- Bootstrap SCSS imported globally in [src/main.ts](../src/main.ts): `import "bootstrap/scss/bootstrap.scss"`
- Bootstrap Icons CSS also imported globally: `import "bootstrap-icons/font/bootstrap-icons.css"`
- JavaScript components imported per-component as needed (e.g., `import { Modal, Toast } from "bootstrap"`)

### Bootstrap JavaScript Usage Pattern
Components using Bootstrap JS follow this pattern (see [src/views/Home.vue](../src/views/Home.vue)):
```typescript
import { ref, onMounted, onUnmounted } from "vue";
import { Modal, Toast } from "bootstrap";

const modal = ref();
const infoModal = ref(); // template ref to modal element

onMounted(() => {
  modal.value = new Modal(infoModal.value);
});

onUnmounted(() => {
  modal.value = ""; // cleanup
});
```

### Theme Support
- Uses Bootstrap 5.3+ built-in dark theme support
- CSS custom properties for theming (e.g., `var(--bs-tertiary-bg)`, `var(--bs-body-color)`)
- Example in [src/App.vue](../src/App.vue): `.box { background-color: var(--bs-tertiary-bg); }`

## Development Workflows

### Build Commands
- **Development**: `npm run dev` - Starts Vite dev server
- **Production build**: `npm run build` - Uses `--base=/vue-bootstrap` (see [package.json](../package.json))
- **Preview**: `npm run preview` - Preview production build
- **Type checking**: `npm run type-check` - Run TypeScript compiler checks

### Environment Variables
- Base URL configured via `VITE_BUILD_ADDRESS` environment variable
- Accessed in code: `import.meta.env.VITE_BUILD_ADDRESS`
- Used in router paths and navigation components

### SASS Configuration
- Vite silences Bootstrap SASS deprecation warnings (see [vite.config.ts](../vite.config.ts) css.preprocessorOptions)
- Suppressed warnings: `legacy-js-api`, `color-functions`, `global-builtin`, `import`, `if-function`
- Use `lang="scss"` in Vue component `<style>` blocks

## TypeScript Configuration
- Base config extends `@vue/tsconfig/tsconfig.json`
- Target: `esnext`
- Path alias `@/*` maps to `./src/*`
- `ignoreDeprecations: "5.0"` set for compatibility

## Code Conventions

### Vue Component Structure
1. Template first
2. Script with `<script lang="ts" setup>` (Composition API)
3. Style with `<style lang="scss" scoped>` (or unscoped if needed)

### Reactive State
- Use `reactive()` for object state: `const state = reactive({ count: 0 })`
- Use `ref()` for primitives and template refs
- See [src/components/Refs.vue](../src/components/Refs.vue) for simple reactive array example

### Navigation
- Use `<router-link :to="route.path">` for internal navigation
- Active route detection: `computed(() => router.currentRoute.value.path)`
- Import routes array from router for dynamic navigation (see [src/components/Nav.vue](../src/components/Nav.vue))

## Key Files Reference
- [src/main.ts](../src/main.ts): App initialization, global imports
- [src/App.vue](../src/App.vue): Root component (just RouterView)
- [src/router/index.ts](../src/router/index.ts): Route definitions and layout assignments
- [vite.config.ts](../vite.config.ts): Build config, path aliases, SASS settings
- [package.json](../package.json): Scripts, dependencies, build base path
