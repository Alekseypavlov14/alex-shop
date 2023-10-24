import { RequestHeaders } from "./types/request-headers"
import axios from 'axios'

export interface HTTPServiceInterface {
  get: <Result>(url: string, headers?: RequestHeaders) => Promise<Result>
  post: <Body, Result>(url: string, body: Body, headers?: RequestHeaders) => Promise<Result>
  put: <Body, Result>(url: string, body: Body, headers?: RequestHeaders) => Promise<Result>
  delete: <Result>(url: string, headers?: RequestHeaders) => Promise<Result>
}

export class HTTPService implements HTTPServiceInterface {
  async get<Result>(url: string, headers?: RequestHeaders): Promise<Result> {
    const response = await axios.get<Result>(url, { headers })
    return response.data
  }

  async post<Body, Result>(url: string, body: Body, headers?: RequestHeaders): Promise<Result> {
    const response = await axios.post<Result>(url, body, { headers })
    return response.data
  }

  async put<Body, Result>(url: string, body: Body, headers?: RequestHeaders): Promise<Result> {
    const response = await axios.put<Result>(url, body, { headers })
    return response.data
  }

  async delete<Result>(url: string, headers?: RequestHeaders): Promise<Result> {
    const response = await axios.delete<Result>(url, { headers })
    return response.data
  }
}