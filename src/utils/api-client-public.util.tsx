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

export default client
