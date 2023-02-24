<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue: boolean
  color?: 'green' | 'indigo'
}>(), {
  color: 'indigo',
})
const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void
}>()

const backgroundColor: Record<typeof props['color'], string> = {
  green: 'bg-green-600',
  indigo: 'bg-indigo-600',
}
</script>

<template>
  <button :class="props.modelValue ? backgroundColor[props.color] : 'bg-gray-200'" type="button" class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" role="switch" aria-checked="false" @click="emit('update:modelValue', !props.modelValue)">
    <span class="sr-only">Use setting</span>
    <span :class="props.modelValue ? 'translate-x-5' : 'translate-x-0'" aria-hidden="true" class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out" />
  </button>
</template>
