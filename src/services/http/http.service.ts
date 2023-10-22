export interface HTTPServiceInterface {
  get: <Result>(url: string) => Promise<Result>
  post: <Body, Result>(url: string, body: Body) => Promise<Result>
  put: <Body, Result>(url: string, body: Body) => Promise<Result>
  delete: <Body, Result>(url: string, body: Body) => Promise<Result>
}

export class HTTPService implements HTTPServiceInterface {
  async get<Result>(url: string): Promise<Result> {
    return fetch(url).then(res => res.json() as Result)
  }

  async post<Body, Result>(url: string, body: Body): Promise<Result> {
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(body)
    })
      .then(res => res.json() as Result)
  }

  async put<Body, Result>(url: string, body: Body): Promise<Result> {
    return fetch(url, {
      method: 'PUT',
      body: JSON.stringify(body)
    })
      .then(res => res.json() as Result)
  }

  async delete<Body, Result>(url: string, body: Body): Promise<Result> {
    return fetch(url, {
      method: 'DELETE',
      body: JSON.stringify(body)
    })
      .then(res => res.json() as Result)
  }
}