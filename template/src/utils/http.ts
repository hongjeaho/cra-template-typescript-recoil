import { type BaseApiResponse } from '@/model'
import axios, {
  type AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios'

const AUTHORIZATION = 'authorization'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
})

const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const token = localStorage.getItem(AUTHORIZATION) as string | undefined
  if (token !== undefined) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
}

const onResponse = (response: AxiosResponse<BaseApiResponse>): AxiosResponse<BaseApiResponse> => {
  const { succeeded, message } = response.data
  const { headers } = response

  const isTokenExpired = headers['x-token-expired']
  if (isTokenExpired === 'true') {
    console.log('만료 처리')
    localStorage.removeItem(AUTHORIZATION)
  } else if (succeeded) {
    throw new Error(message)
  }

  if (headers[AUTHORIZATION] !== undefined) {
    localStorage.setItem(AUTHORIZATION, headers[AUTHORIZATION])
  }

  return response
}

axiosInstance.interceptors.request.use(onRequest)
axiosInstance.interceptors.response.use(onResponse)

export const request = <T>(options: AxiosRequestConfig): Promise<T> => {
  const config = {
    ...options,
  }

  const source = axios.CancelToken.source()
  const promise = axiosInstance({ ...config, cancelToken: source.token }).then(({ data }) => data)

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  promise.cancel = () => {
    source.cancel('Query was cancelled by React Query')
  }

  return promise
}

export type ErrorType<Error> = AxiosError<Error>
