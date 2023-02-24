/* eslint-disable no-console */
export default defineNuxtPlugin((nuxtApp) => {
  console.info('plugin: ', 'init')
  nuxtApp.hook('page:finish', () => {
    console.info('plugin: ', 'page:finish')
  })
})
