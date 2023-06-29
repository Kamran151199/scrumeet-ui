import axios, { AxiosInstance } from 'axios'

const baseURL = import.meta.env.VITE_API_PRODUCTION_HOST as string
const timeout = import.meta.env.VITE_API_TIMEOUT as number

const client: AxiosInstance = axios.create({
  baseURL,
  timeout,
  headers: {
    'Content-Type': 'application/json',
  },
})

const refreshToken = async (data: any) => {
  return await client.post('auth/refresh', data)
}

const setConfiguration = (client: AxiosInstance) => {
  client.interceptors.request.use(config => {
    const access_token = localStorage.getItem('access_token')

    if (access_token != null) {
      config.headers &&
        (config.headers['Authorization'] = `Bearer ${access_token}`)
    }

    return config
  })

  client.interceptors.response.use(
    async response => response,
    async error => {
      const originalRequest = error.config

      if (
        error.response.status === 401 &&
        error.response.statusText === 'Unauthorized' &&
        !originalRequest.url.includes('refresh')
      ) {
        const refresh_token = localStorage.getItem('refresh_token')

        try {
          const response = await refreshToken({ token: refresh_token })
          const access_token = response.data.access_token
          localStorage.setItem('access_token', access_token)
          originalRequest.headers['Authorization'] = `Bearer ${access_token}`
          return client(originalRequest)
        } catch (err) {
          localStorage.removeItem('access_token')
          localStorage.removeItem('refresh_token')
          // redirect to login
          window.location.href = '/login'
        }
      }

      return Promise.reject(error)
    }
  )
}

setConfiguration(client)

export default client
