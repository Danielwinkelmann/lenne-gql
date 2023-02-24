<script setup lang="ts">
const store = useTodoStore()
const route = useRoute()
</script>

<template>
  <div>
    Test id Vue <pre>{{ store.count }}</pre><button @click="store.increment()">
      ADD
    </button>
  </div>
</template>
