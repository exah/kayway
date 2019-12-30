import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Switch, Route, Redirect } from 'react-router'
import { ROUTES, PALETTES } from '../constants'
import { Page, ScrollSnap } from '../components'

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
            <ScrollSnap flex='1 1 auto' width='100wv'>
              <ScrollSnap.Item
                active={route.match.path === ROUTES.CONTACTS}
                bg='white'
              >
                <ContactsPage />
              </ScrollSnap.Item>
              <ScrollSnap.Item
                active={route.match.path === ROUTES.GRAPHICS}
                bg='grey00'
              >
                <GraphicsPage />
              </ScrollSnap.Item>
              <ScrollSnap.Item
                active={route.match.path === ROUTES.ILLUSTRATIONS}
                bg='pink00'
              >
                <IllustrationsPage />
              </ScrollSnap.Item>
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
