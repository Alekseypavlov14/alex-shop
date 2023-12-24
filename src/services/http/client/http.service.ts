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
    return Promise.reject(new HTTPException(errorCode))
  }

  async get<Result>(url: string, headers?: RequestHeaders): Promise<Result> {
    return await axios.get<Result>(url, this.generateRequestConfig(headers)).then(res => res.data)
  }

  async post<Body, Result>(url: string, body: Body, headers?: RequestHeaders): Promise<Result> {
    return await axios.post<Result>(url, body, this.generateRequestConfig(headers)).then(res => res.data)
  }

  async put<Body, Result>(url: string, body: Body, headers?: RequestHeaders): Promise<Result> {
    return await axios.put<Result>(url, body, this.generateRequestConfig(headers)).then(res => res.data)
  }

  async delete<Result>(url: string, headers?: RequestHeaders): Promise<Result> {
    return await axios.delete<Result>(url, this.generateRequestConfig(headers)).then(res => res.data)
  }

  private generateRequestConfig(headers: RequestHeaders | undefined): AxiosRequestConfig {
    return ({ ...this.requestConfig, headers })
  }
}

export const httpService = new HTTPService()