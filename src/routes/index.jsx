import React from "react";
import { Route, Switch } from "react-router-dom";

import CatalogRoute from './CatalogRoute';
import ItemRoute from './ItemRoute';

// rotas "principais" (login, autentica, dashboard)
const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={CatalogRoute} />

      <Route exact path='/:name/:id' component={ItemRoute} />
    </Switch>
  );
};

export default Routes;