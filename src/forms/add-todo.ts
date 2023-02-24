import type { FormKitSchemaNode } from '@formkit/core'

export interface TodoFormSchema {
  title: string
}

export const todoFormSchema: Readonly<FormKitSchemaNode[]> = [
  {
    $formkit: 'text',
    name: 'title',
    label: 'Title',
    validation: 'required',
  },
] as const
