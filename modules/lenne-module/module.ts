import {
  addComponentsDir,
  addImportsDir,
  createResolver,
  defineNuxtModule,
} from '@nuxt/kit'
import consola from 'consola'
export interface ModuleOptions {
  secret: boolean
  prefix: string
}

const logger = consola.withScope('lenne-module:')

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'lenne-module',
    configKey: 'lenne-module',
  },
  defaults: _nuxt => ({
    secret: false,
    prefix: 'Lenne',
  }),
  async setup(moduleOptions, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    const runtimeDir = resolve('./runtime')
    nuxt.options.build.transpile.push(runtimeDir)

    addImportsDir(resolve(runtimeDir, 'composables'))

    addComponentsDir({ path: resolve(runtimeDir, 'components'), prefix: moduleOptions.prefix })
    logger.info('Secret Option: ', moduleOptions.secret)
  },
})
