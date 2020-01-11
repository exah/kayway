import 'isomorphic-unfetch'
import YF from 'ya-fetch'
import { NotFoundError } from './errors'
import { path } from './helpers'

const getId = path('sys.id')
const getLinkType = path('sys.linkType')
const getContentType = path('sys.contentType')

export function createContefulAPI({ spaceId, accessToken }) {
  const api = YF.create({
    prefixUrl: `https://cdn.contentful.com/spaces/${spaceId}`,
    headers: { Authorization: `Bearer ${accessToken}` },
  })

  function mapItem(item) {
    if (item) {
      const id = getId(item)
      const contentType = getId(getContentType(item))

      return {
        ...(id && { id }),
        ...(contentType && { contentType }),
        ...item.fields,
      }
    }

    return null
  }

  const findLink = (input, includes) =>
    includes[getLinkType(input)].find((asset) => getId(asset) === getId(input))

  const mapLinks = (result) =>
    result.items.map(mapItem).map(function iterate(fields) {
      for (const [name, value] of Object.entries(Object(fields))) {
        if (value && value.sys && getLinkType(value) != null) {
          fields[name] = iterate(mapItem(findLink(value, result.includes)))
        } else if (Array.isArray(value)) {
          fields[name] = iterate(value)
        }
      }
      return fields
    })

  const fetchEntries = (type, params) =>
    api
      .get('/entries', { params: { content_type: type, ...params } })
      .json()
      .then(mapLinks)

  const fetchEntry = (type, params) =>
    fetchEntries(type, { limit: 1, ...params })
      .then((items) => items[0])
      .then((entry) => {
        if (entry == null) {
          throw new NotFoundError('Entry Not Found')
        }

        return entry
      })

  return {
    api,
    fetchEntries,
    fetchEntry,
  }
}
