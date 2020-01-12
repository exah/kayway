import config from 'config'
import { CONTENTFUL } from '../constants'
import { createContefulAPI } from '../utils'

if (config.public.spaceId == null || config.public.accessToken == null) {
  throw new Error(`Required configuration not found!
  - get 'SPACE_ID' and 'ACCESS_TOKEN' from 'https://app.contentful.com/spaces/{SPACE_ID}/api/keys'
  - set them in env variables or in './config/default.js'
  - and restart the app
  - 🍻
`)
}

export const api = createContefulAPI({
  spaceId: config.public.spaceId,
  accessToken: config.public.accessToken,
})

export const fetchProjects = () =>
  api.fetchEntries(CONTENTFUL.CONTENT_TYPES.PROJECT)

export const fetchPage = (slug) =>
  api.fetchEntry(CONTENTFUL.CONTENT_TYPES.PAGE, { 'fields.slug': slug })
