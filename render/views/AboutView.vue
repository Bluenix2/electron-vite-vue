<template>
  <main>
    <h1>This is an about page</h1>
    <button @click="store.increment()">This button has been pressed {{ store.count }} times.</button>
  </main>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>