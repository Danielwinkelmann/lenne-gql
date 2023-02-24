import type { GqlOps, GqlSdkFuncs } from '#gql'

export async function useAuthGql<T extends GqlOps>(operation: T, params?: Parameters<GqlSdkFuncs[T]>['0']) {
  // eslint-disable-next-line no-console
  console.log('check auth state')
  const GqlInstance = useGql()
  return await GqlInstance(operation, params)
}
