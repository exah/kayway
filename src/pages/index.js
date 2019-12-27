import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Switch, Route, Redirect } from 'react-router'
import { ROUTES, PALETTES } from '../constants'
import { Header, Page } from '../components'

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
            <Header />
            <Switch>
              <Route
                path={ROUTES.ILLUSTRATIONS}
                render={() => <IllustrationsPage />}
              />
              <Route path={ROUTES.GRAPHICS} render={() => <GraphicsPage />} />
              <Route path={ROUTES.CONTACTS} render={() => <ContactsPage />} />
            </Switch>
          </Page>
        )}
        exact
      />
      <Redirect to={ROUTES.GRAPHICS} />
    </Switch>
  )
}

export default hot(Pages)
