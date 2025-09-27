<script setup>
import AppHeader from './components/AppHeader.vue';
</script>

<template>
  <div id="app-wrapper">
    <AppHeader />
    
    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
body {
  margin: 0;
  background-color: #f4f4f4;
}
.content {
  padding: 20px;
}
</style>