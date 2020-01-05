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
} from '../components'

import IllustrationsPage from './illustrations'
import GraphicsPage from './graphics'
import ContactsPage from './contacts'

const ROUTE_PALETTES = {
  [ROUTES.ILLUSTRATIONS]: PALETTES.ILLUSTRATIONS,
  [ROUTES.GRAPHICS]: PALETTES.GRAPHICS,
  [ROUTES.CONTACTS]: PALETTES.CONTACTS,
}

function Pages(props) {
  return (
    <Switch>
      <Route
        path={[ROUTES.ILLUSTRATIONS, ROUTES.GRAPHICS, ROUTES.CONTACTS]}
        render={(route) => (
          <Page palette={ROUTE_PALETTES[route.match.path]}>
            <Header>
              <Nav>
                <RouteLink to={ROUTES.CONTACTS}>Контакты</RouteLink>
                <RouteLink to={ROUTES.GRAPHICS}>Графика</RouteLink>
                <RouteLink to={ROUTES.ILLUSTRATIONS}>Вектор</RouteLink>
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
                path={ROUTES.ILLUSTRATIONS}
                as={IllustrationsPage}
                bg='pink00'
              />
            </ScrollSnap>
          </Page>
        )}
        exact
      />
      <Redirect to={ROUTES.GRAPHICS} />
    </Switch>
  )
}

export default hot(Pages)
