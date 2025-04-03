<template>
  <h1>Hello World</h1>
  <div>{{ electron ? 'Built for Electron' : 'Built for web development' }}</div>
</template>

<script setup lang="ts">
const electron = import.meta.env.ELECTRON;
</script>
