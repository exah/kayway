import config from 'config'
import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { Helmet } from 'react-helmet-async'
import { CONTENTFUL, ROUTES, PALETTES } from '../constants'
import {
  App,
  Header,
  ScrollSnap,
  ScrollSnapRoute,
  Page,
  RouteLink,
  ThemeDefaults,
} from '../components'

function Pages() {
  return (
    <App>
      <Switch>
        <Route
          path={[ROUTES.COLOUR, ROUTES.GRAPHICS, ROUTES.CONTACTS]}
          render={(route) => {
            const meta = {
              title: `KayWay`,
              description: `Illustration portfolio by Ekaterina Grishina`,
              icon: `/icon.png`,
              image: `${config.public.siteUrl}/og.png`,
              canonical: config.public.siteUrl + route.match.path,
            }

            return (
              <ThemeDefaults
                palette={
                  route.match.path === ROUTES.COLOUR
                    ? PALETTES.COLOUR
                    : PALETTES.DEFAULT
                }
              >
                <Helmet titleTemplate={`%s — ${meta.title}`}>
                  <link rel='icon' sizes='192x192' href={meta.icon} />
                  <meta property='description' content={meta.description} />
                  <meta property='og:site_name' content={meta.title} />
                  <meta property='og:title' content={meta.title} />
                  <meta property='og:description' content={meta.description} />
                  <meta property='og:image' content={meta.image} />
                  <meta property='og:image:width' content='1200' />
                  <meta property='og:image:height' content='630' />
                  <meta property='og:url' content={meta.canonical} />
                </Helmet>
                <Header>
                  <Header.Logo to={ROUTES.COLOUR} />
                  <Header.Nav>
                    <RouteLink variant='nav' to={ROUTES.CONTACTS}>
                      Contacts
                    </RouteLink>
                    <RouteLink variant='nav' to={ROUTES.COLOUR}>
                      Colour
                    </RouteLink>
                    <RouteLink variant='nav' to={ROUTES.GRAPHICS}>
                      Graphics
                    </RouteLink>
                  </Header.Nav>
                </Header>
                <ScrollSnap flex='1 1 auto' width='100wv'>
                  <ScrollSnapRoute path={ROUTES.CONTACTS} bg='white'>
                    <Page slug={CONTENTFUL.PAGES.CONTACTS} />
                  </ScrollSnapRoute>
                  <ScrollSnapRoute path={ROUTES.COLOUR} bg='pink00'>
                    <Page slug={CONTENTFUL.PAGES.COLOUR} />
                  </ScrollSnapRoute>
                  <ScrollSnapRoute path={ROUTES.GRAPHICS} bg='grey00'>
                    <Page slug={CONTENTFUL.PAGES.GRAPHICS} />
                  </ScrollSnapRoute>
                </ScrollSnap>
              </ThemeDefaults>
            )
          }}
          exact
        />
        <Redirect to={ROUTES.COLOUR} />
      </Switch>
    </App>
  )
}

export default Pages
