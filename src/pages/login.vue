<script setup lang="ts">
import type { SignInMutation } from '#gql'
const authState = useAuthState()
const { $toast } = useNuxtApp()
const authCookie = useAuthToken()
const data = ref<SignInMutation | null>(null)
const login = async () => {
  data.value = await GqlSignIn({ input: { email: 'dwinkelmann@outlook.com', password: '12345678' } })
  authState.value = true
  authCookie.value = data.value.signIn.token!
  $toast('Login Erfolgreich')
  await navigateTo('/todo-list')
}
</script>

<template>
  <div>
    <button @click="login()">
      Login
    </button>
    <pre>{{ authState }}</pre>
    <pre>{{ authCookie }}</pre>
  </div>
</template>
