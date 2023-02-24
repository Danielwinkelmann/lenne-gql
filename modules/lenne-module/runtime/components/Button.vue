<script setup lang="ts">
import { type VariantProps, tv } from 'tailwind-variants'

type ButtonProps = VariantProps<typeof button>

const props = defineProps<{
  size?: ButtonProps['size']
  color?: ButtonProps['color']
}>()

const button = tv({
  base: 'font-medium bg-blue-500 text-white rounded-lg duration-200 active:opacity-80',
  variants: {
    color: {
      primary: 'bg-blue-500 hover:bg-blue-600 text-white',
      secondary: 'bg-purple-500 hover:bg-purple-600 text-white',
      danger: 'bg-red-500 hover:bg-red-600 text-white',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'px-4 py-2 text-lg',
    },
  },
  compoundVariants: [
    {
      size: ['sm', 'md'],
      class: 'px-3 py-1',
    },
  ],
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
})
</script>

<template>
  <button type="button" :class="button({ size: props.size, color: props.color })">
    <slot>
      Button {{ button({ size: props.size, color: props.color }) }}
    </slot>
  </button>
</template>
