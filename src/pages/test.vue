<script setup lang="ts">
const store = useTodoStore()
</script>

<template>
  <div>
    <p>Test Vue Parent</p>
    <p>Count: {{ store.count }}</p>
    <p>Double: {{ store.doubleCount }}</p>
    <div class="bg-red-400 p-4">
      <NuxtPage />
    </div>
  </div>
</template>
