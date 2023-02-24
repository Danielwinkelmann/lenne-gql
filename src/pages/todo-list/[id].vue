<script setup lang="ts">
const props = defineProps<{
  test: string
}>()
</script>

<template>
  <div>Detail {{ props.test }}</div>
</template>
