export const useAuthState = () => useState('auth_state', () => false)
export const useAuthToken = () => useCookie('gql:default', { sameSite: true })
