<template>
  <header class="app-header">
    <nav>
      <router-link to="/home" class="nav-link">Inicio</router-link>
      <router-link to="/info" class="nav-link">Información</router-link>
      <a href="#" @click.prevent="connectSockets" class="nav-link">
        Conectar Sockets (Pendiente)
      </a>
    </nav>
  </header>
</template>

<script setup>
const connectSockets = () => {
  console.log('Lógica de conexión a Socket.IO pendiente de implementar.');
};
</script>

<style scoped>
.app-header {
  background-color: #2c3e50;
  padding: 15px 20px;
}
nav {
  display: flex;
  gap: 20px;
}
.nav-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
.nav-link:hover {
  text-decoration: underline;
}
</style>