<script setup lang="ts">
const authState = useAuthState()
const authCookie = useAuthToken()
if (authCookie.value)
  authState.value = true
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
