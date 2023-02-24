<script setup lang="ts">
const props = withDefaults(defineProps<{
  entity: string
  description: string
  headers: string[]
  empty?: boolean
}>(), {
  empty: false,
})
</script>

<template>
  <div class="px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-3xl font-semibold text-gray-900">
          {{ props.entity }}
        </h1>
        <p class="mt-2 text-sm text-gray-700">
          {{ props.description }}
        </p>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <slot name="action">
          Action
        </slot>
      </div>
    </div>
    <div class="mt-8 flow-root">
      <div class="-my-2 -mx-6 overflow-x-auto lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300 table-fixed">
            <thead>
              <tr>
                <th v-for="header of props.headers" :key="header" scope="col" class="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                  {{ header }}
                </th>
              </tr>
            </thead>
            <tbody v-if="!props.empty" class="divide-y divide-gray-200 ">
              <slot />
            </tbody>
          </table>
          <div v-if="props.empty" class="text-center w-full ">
            <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            <h3 class="mt-2 text-sm font-medium text-gray-900">
              No Todo List
            </h3>
            <p class="mt-1 text-sm text-gray-500">
              Get started by creating a new Todo List.
            </p>
            <div class="mt-6">
              <slot name="empty" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
