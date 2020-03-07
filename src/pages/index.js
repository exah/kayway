import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Switch, Route, Redirect } from 'react-router'
import { ROUTES, PALETTES } from '../constants'
import {
  Page,
  Header,
  Nav,
  ScrollSnap,
  ScrollSnapRoute,
  RouteLink,
  ThemeDefaults,
} from '../components'

import VectorsPage from './vectors'
import GraphicsPage from './graphics'
import ContactsPage from './contacts'

function Pages(props) {
  return (
    <Page>
      <Switch>
        <Route
          path={[ROUTES.COLOUR, ROUTES.GRAPHICS, ROUTES.CONTACTS]}
          render={(route) => (
            <ThemeDefaults
              palette={
                route.match.path === ROUTES.COLOUR
                  ? PALETTES.VECTORS
                  : PALETTES.DEFAULT
              }
            >
              <Header>
                <Nav>
                  <RouteLink to={ROUTES.CONTACTS}>Contacts</RouteLink>
                  <RouteLink to={ROUTES.GRAPHICS}>Graphics</RouteLink>
                  <RouteLink to={ROUTES.COLOUR}>Colour</RouteLink>
                </Nav>
              </Header>
              <ScrollSnap flex='1 1 auto' width='100wv'>
                <ScrollSnapRoute
                  path={ROUTES.CONTACTS}
                  as={ContactsPage}
                  bg='white'
                />
                <ScrollSnapRoute
                  path={ROUTES.GRAPHICS}
                  as={GraphicsPage}
                  bg='grey00'
                />
                <ScrollSnapRoute
                  path={ROUTES.COLOUR}
                  as={VectorsPage}
                  bg='pink00'
                />
              </ScrollSnap>
            </ThemeDefaults>
          )}
          exact
        />
        <Redirect to={ROUTES.GRAPHICS} />
      </Switch>
    </Page>
  )
}

export default hot(Pages)
