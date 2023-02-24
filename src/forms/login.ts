import type { FormKitSchemaNode } from '@formkit/core'

export interface LoginFormSchemaOutput {
  email: string
  password: string
}

export const loginFormSchema: Readonly<FormKitSchemaNode[]> = [
  {
    $el: 'h1',
    attrs: {
      class: 'font-bold text-4xl mb-2',
    },
    children: 'Login',
  },
  {
    $formkit: 'text',
    name: 'email',
    label: 'Email',
    help: 'This will be used for your account.',
    validation: 'required|email',
  },
  {
    $formkit: 'password',
    name: 'password',
    label: 'Password',
    help: 'Enter your new password.',
    validation: 'required|length:5,16',
  },
] as const
