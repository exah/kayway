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

import VectorsPage from './vectors'
import GraphicsPage from './graphics'
import ContactsPage from './contacts'

function Pages(props) {
  return (
    <Switch>
      <Route
        path={[ROUTES.VECTORS, ROUTES.GRAPHICS, ROUTES.CONTACTS]}
        render={(route) => (
          <Page
            palette={
              route.match.path === ROUTES.VECTORS
                ? PALETTES.VECTORS
                : PALETTES.DEFAULT
            }
          >
            <Header>
              <Nav>
                <RouteLink to={ROUTES.CONTACTS}>Контакты</RouteLink>
                <RouteLink to={ROUTES.GRAPHICS}>Графика</RouteLink>
                <RouteLink to={ROUTES.VECTORS}>Вектор</RouteLink>
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
                path={ROUTES.VECTORS}
                as={VectorsPage}
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
