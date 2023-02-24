import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo_store', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
