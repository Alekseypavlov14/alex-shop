export abstract class Path {
  static matches(path: string, matchers: string[]) {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`
    const normalizedMatchers = matchers.map(matcher => matcher.startsWith('/') ? matcher : `/${matcher}`)

    return normalizedMatchers.some(matcher => (
      normalizedPath.startsWith(matcher) &&
      (
        normalizedPath === matcher ||
        normalizedPath[matcher.length] === '/' // next symbol after matcher template is "/"
      )
    ))
  }
}
