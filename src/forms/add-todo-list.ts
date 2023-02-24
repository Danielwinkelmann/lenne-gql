import type { FormKitSchemaNode } from '@formkit/core'

export interface TodoListFormSchema {
  title: string
  description: string
}

export const todoListFormSchema: Readonly<FormKitSchemaNode[]> = [
  {
    $el: 'h1',
    attrs: {
      class: 'font-bold text-red-300 text-4xl mb-2',
    },
    children: 'Add Todo List',
  },
  {
    $formkit: 'text',
    name: 'title',
    label: 'Title',
    validation: 'required|length:5,16',
  },
  {
    $formkit: 'text',
    name: 'description',
    label: 'Description',
    validation: 'required',
  },
] as const
