import React from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';

import createAppStore from '../../lib/store';
import { Provider } from 'react-redux';

const store = createAppStore();

import DashboardContainer from '../dashboard-container';

export default class App extends React.Component {
  render(){
    return (
      <section>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={DashboardContainer}/>
              <Route component={() => <h1>Not Found</h1>}/>
            </Switch>
          </BrowserRouter>
        </Provider>
      </section>
    );
  }
}
