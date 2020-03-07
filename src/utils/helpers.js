export const path = (input, defaultValue) => (source) => {
  const result = input.split('.').reduce((a, c) => Object(a)[c], source)
  return result == null ? defaultValue : result
}

export const getImageDetails = path('file.details.image', {})
export const getFileUrl = path('file.url')
export const getFileContentType = path('file.contentType')

export const getRatio = (input) => {
  const { width, height } = getImageDetails(input)
  return width == null ? null : width / height
}

export const getOptimizedFileUrl = (input, options) => {
  const url = getFileUrl(input)
  const params = new URLSearchParams(
    Object.entries(options).filter(([key, value]) => value != null)
  )

  return `${url}?${params}`
}

export const randomBetween = (min, max, base = 100) =>
  Math.floor((Math.random() * (max - min + 1) + min) * base) / base

export function on(target, ...args) {
  target.addEventListener(...args)
  return () => target.removeEventListener(...args)
}
