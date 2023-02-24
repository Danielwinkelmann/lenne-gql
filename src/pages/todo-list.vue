<script setup lang="ts">
import type { TodoListFormSchema } from '@/forms/add-todo-list'
import { todoListFormSchema } from '@/forms/add-todo-list'
definePageMeta({
  middleware: 'auth',
  layout: 'application',
})
const open = ref(false)

const { data, refresh } = await useAsyncGql('findTodoLists')

const removeList = async (id: string) => {
  await GqlDeleteTodoList({ listId: id })
  await refresh()
}

const addList = async (dto: TodoListFormSchema) => {
  await GqlCreateTodoList({ input: { title: dto.title, description: dto.description } })
  await refresh()
  open.value = false
}
</script>

<template>
  <div>
    <NuxtPage test="Nuxt PAge" />
    <LenneModal v-model="open">
      <FormKit type="form" @submit="addList($event)">
        <FormKitSchema :schema="todoListFormSchema" />
      </FormKit>
    </LenneModal>
    <LenneTableWrapper :headers="['Title', 'Description', 'Created At', '']" entity="Todo Lists" description="description">
      <template #action>
        <LenneButton @click="open = true">
          Add List
        </LenneButton>
      </template>
      <LenneTableRow v-for="list of data?.findTodoLists" :key="list.id!">
        <LenneTableCell @click="navigateTo(`/todo-list/${list.id!}`)">
          {{ list.title }}
        </LenneTableCell>
        <LenneTableCell>
          {{ list.description }}
        </LenneTableCell>
        <LenneTableCell>
          {{ list.createdAt }}
        </LenneTableCell>
        <LenneTableCell>
          <LenneButton color="danger" @click="removeList(list.id!)">
            Delete
          </LenneButton>
        </LenneTableCell>
      </LenneTableRow>
    </LenneTableWrapper>
  </div>
</template>
