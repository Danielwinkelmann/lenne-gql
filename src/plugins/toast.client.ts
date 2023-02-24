import { h, render } from 'vue'
import { Notification } from '#components'
/*  */
export default defineNuxtPlugin((_nuxtApp) => {
  function addNotification(msg = 'Anyone with a link can now view this file.', duration = 3000) {
    const mountEl = document.createElement('div')
    document.body.appendChild(mountEl)
    const node = h(Notification, {
      message: msg,
      duration,
      onClose: () => mountEl?.remove(),
    })
    render(node, mountEl)
    setTimeout(() => mountEl?.remove(), duration + 200)
  }

  return {
    provide: {
      toast: (msg: string) => addNotification(msg),
    },
  }
})
