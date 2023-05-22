<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <nav class="navbar mb-3" style="background-color: #e3f2fd;">
    <div class="container-fluid">
    <a class="navbar-brand">
        <img src="https://cdn-icons-png.flaticon.com/512/1307/1307714.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        USUARIOS FRONTEND
      </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <RouterLink to="/usuario/listar">Usuario</RouterLink>
        <RouterLink to="/usuario/crear">Crear Usuario</RouterLink>
      </div>
    </div>
  </div>
  </nav>
</template>
<style scoped>
nav a {
  color: var(--vt-c-black-soft);
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>