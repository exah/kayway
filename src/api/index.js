import config from 'config'
import { CONTENTFUL } from '../constants'
import { createContefulAPI } from '../utils'

if (config.public.spaceId == null || config.public.accessToken == null) {
  throw new Error(
    `Please add 'spaceId' and 'accessToken' from 'https://app.contentful.com' space settings to 'public' object exported from './config/${process.env.NODE_ENV}.js'`
  )
}

export const api = createContefulAPI({
  spaceId: config.public.spaceId,
  accessToken: config.public.accessToken,
})

export const fetchProjects = () =>
  api.fetchEntries(CONTENTFUL.CONTENT_TYPES.PROJECT)

export const fetchPage = (slug) =>
  api.fetchEntry(CONTENTFUL.CONTENT_TYPES.PAGE, { 'fields.slug': slug })
