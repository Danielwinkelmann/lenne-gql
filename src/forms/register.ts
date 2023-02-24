import type { FormKitSchemaNode } from '@formkit/core'

export interface RegisterFormSchemaOutput {
  email: string
  password: string
}

export const registerFormSchema: Readonly<FormKitSchemaNode[]> = [
  {
    $el: 'h1',
    attrs: {
      class: 'font-bold text-4xl mb-2',
    },
    children: 'Register',
  },
  {
    $formkit: 'text',
    name: 'first_name',
    label: 'First Name',
    placeholder: 'Enter your name',
    validation: 'required|firstName',
  },
  {
    $formkit: 'text',
    name: 'last_name',
    label: 'Last Name',
    placeholder: 'Enter your name',
    validation: 'required|lastName',
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
  {
    $formkit: 'password',
    name: 'password_confirm',
    label: 'Confirm password',
    help: 'Enter your new password again to confirm it.',
    validation: 'required|confirm',
    validationLabel: 'password confirmation',
  },
] as const
