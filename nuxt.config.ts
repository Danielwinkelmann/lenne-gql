// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  'srcDir': './src',
  'modules': ['@nuxtjs/tailwindcss', '@formkit/nuxt', 'nuxt-graphql-client', '@pinia/nuxt', '../modules/lenne-module/module'],
  'lenne-module': {
    secret: true,
    prefix: 'Lenne',
  },
  'imports': {
    dirs: ['./states'],
  },
  'graphql-client': {
    clients: {
      default: {
        host: 'https://api.todo.lenne.tech/graphql',
        token: {
          type: 'Bearer',
          name: 'Authorization',
          value: '<auth_token>',
        }, // 'http://localhost:3000/graphql', //
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      },
    },
  },
})
