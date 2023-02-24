export default defineNuxtRouteMiddleware((_to, _from) => {
  const authState = useAuthState()
  // if (!authState.value)
  // return navigateTo('/login')
})
