import { AxiosError } from 'axios'
import { ErrorResponse } from './api-serialization.util'

export const extractErrMsg = (err: AxiosError<ErrorResponse, any>) => {
  return (
    err.response?.data.detail.status ||
    err.response?.data.detail.message ||
    err.message ||
    'Something went wrong'
  )
}
