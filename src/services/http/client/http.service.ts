import { defaultExceptionCode } from "../constants"
import { RequestHeaders } from "../types/request-headers"
import { HTTPException } from "../http.exception"
import axios, { AxiosRequestConfig } from 'axios'

interface HTTPServiceInterface {
  get: <Result>(url: string, headers?: RequestHeaders) => Promise<Result>
  post: <Body, Result>(url: string, body: Body, headers?: RequestHeaders) => Promise<Result>
  put: <Body, Result>(url: string, body: Body, headers?: RequestHeaders) => Promise<Result>
  delete: <Result>(url: string, headers?: RequestHeaders) => Promise<Result>
}

class HTTPService implements HTTPServiceInterface {
  private readonly requestConfig: AxiosRequestConfig = {
    validateStatus: (status) => status >= 200 && status < 400,
    withCredentials: true
  }

  constructor() {
    axios.interceptors.response.use(null, this.interceptResponseException)
  }

  private interceptResponseException(error: any) {
    const errorCode = error?.response?.status || defaultExceptionCode
    throw new HTTPException(errorCode)
  }

  async get<Result>(url: string, headers?: RequestHeaders): Promise<Result> {
    const response = await axios.get<Result>(url, this.generateRequestConfig(headers))
    return response.data
  }

  async post<Body, Result>(url: string, body: Body, headers?: RequestHeaders): Promise<Result> {
    const response = await axios.post<Result>(url, body, this.generateRequestConfig(headers))
    return response.data
  }

  async put<Body, Result>(url: string, body: Body, headers?: RequestHeaders): Promise<Result> {
    const response = await axios.put<Result>(url, body, this.generateRequestConfig(headers))
    return response.data
  }

  async delete<Result>(url: string, headers?: RequestHeaders): Promise<Result> {
    const response = await axios.delete<Result>(url, this.generateRequestConfig(headers))
    return response.data
  }

  private generateRequestConfig(headers: RequestHeaders | undefined): AxiosRequestConfig {
    return ({ ...this.requestConfig, headers })
  }
}

export const httpService = new HTTPService()