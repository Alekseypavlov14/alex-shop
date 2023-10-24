import { RequestHeaders } from "./types/request-headers"

export interface HTTPServiceInterface {
  get: <Result>(url: string, headers?: RequestHeaders) => Promise<Result>
  post: <Body, Result>(url: string, body: Body, headers?: RequestHeaders) => Promise<Result>
  put: <Body, Result>(url: string, body: Body, headers?: RequestHeaders) => Promise<Result>
  delete: <Body, Result>(url: string, body: Body, headers?: RequestHeaders) => Promise<Result>
}

export class HTTPService implements HTTPServiceInterface {
  async get<Result>(url: string, headers?: RequestHeaders): Promise<Result> {
    return fetch(url, { headers }).then(res => res.json() as Result)
  }

  async post<Body, Result>(url: string, body: Body, headers?: RequestHeaders): Promise<Result> {
    return fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    })
      .then(res => res.json() as Result)
  }

  async put<Body, Result>(url: string, body: Body, headers?: RequestHeaders): Promise<Result> {
    return fetch(url, {
      method: 'PUT',
      headers,
      body: JSON.stringify(body)
    })
      .then(res => res.json() as Result)
  }

  async delete<Body, Result>(url: string, body: Body, headers?: RequestHeaders): Promise<Result> {
    return fetch(url, {
      method: 'DELETE',
      headers,
      body: JSON.stringify(body)
    })
      .then(res => res.json() as Result)
  }
}