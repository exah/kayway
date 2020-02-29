export const path = (input, defaultValue) => (source) => {
  const result = input.split('.').reduce((a, c) => Object(a)[c], source)
  return result == null ? defaultValue : result
}

export const getRatio = (input) => {
  const { width, height } = path('file.details.image', {})(input)
  return width == null ? null : width / height
}

export const getFileUrl = path('file.url')
export const getFileContentType = path('file.contentType')

export const randomBetween = (min, max, base = 100) =>
  Math.floor((Math.random() * (max - min + 1) + min) * base) / base

export function on(target, ...args) {
  target.addEventListener(...args)
  return () => target.removeEventListener(...args)
}
