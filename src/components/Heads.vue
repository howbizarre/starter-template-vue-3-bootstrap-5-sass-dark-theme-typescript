<template>
    <div class="box p-5 mb-4 rounded-3">
        <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold"><slot></slot></h1>
            <p class="col-md-10 fs-4">This template was created to help web developers jumpstart their development. It uses Vue 3 with Composition API and Typescript support and added Bootstrap 5 with support for SASS and Dark Themes. Dark theme support in Bootstrap, by default, comes from version 5.3.0, which is currently an Alpha release. Therefore, it should be installed explicitly, and you should test it well before adding it to the production environment.</p>
        </div>
    </div>
</template>