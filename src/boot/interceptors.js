import { api } from './axios'
import msalInstance from '../auth'

export default function interceptors () {
  api.interceptors.request.use(async (config) => {
    const accessToken = localStorage.getItem('access_token')
    const refreshToken = localStorage.getItem('refresh_token')

    if (accessToken && refreshToken) {
      const expiration = msalInstance.TokenLifetimePolicy(accessToken)

      if (expiration && expiration <= new Date()) {
        try {
          const response = await msalInstance.acquireTokenByRefreshToken({
            scopes: ['user.read'],
            refreshToken
          })

          const newAcessToken = response.accessToken
          localStorage.setItem('access_token', newAcessToken)

          config.headers.Authorization = `Bearer ${newAcessToken}`
        } catch (error) {
          console.log('Erro ao obter novo token de acesso', error)
        }
      } else {
        config.headers.Authorization = `Bearer ${accessToken}`
      }
    }
    return config
  })
}

// export default function interceptors () {
//   api.interceptors.request.use((request) => {
//     console.log(request)
//     return request
//   })
// }
