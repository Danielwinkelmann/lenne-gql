<script setup lang="ts">
</script>

<template>
  <div class="min-h-screen flex flex-col w-full">
    <LenneHeaderMarketing>
      <div class="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <slot />
      </div>
    </LenneHeaderMarketing>
    <LenneFooterMarketing />
  </div>
</template>
