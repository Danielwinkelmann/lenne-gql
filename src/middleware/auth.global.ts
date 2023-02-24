/* eslint-disable no-console */
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id === '1')
    return navigateTo('/')
  console.info('from: ', from.fullPath)
  console.info('to: ', to.fullPath)
})
