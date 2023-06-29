export type ListResponse<T> = {
  count: number
  offset: number
  limit: number
  items: T[]
}

export type CommonPayload = {
  offset?: number
  limit?: number
  sorting?: string[]
  filter?: any
}

export type ErrorResponse = {
  detail: {
    status: string
    message: string
  }
}
