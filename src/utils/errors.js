export function CustomError(name, meesage, params) {
  return Object.assign(new Error(meesage), { name, ...params })
}

export function NotFoundError(message = 'Not Found') {
  return new CustomError('NotFoundError', message, { status: 404 })
}
