import React, { Component } from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import store from './store.js'
import Grid from '@react-css/grid'
import Header from './addons/nav/header';
import Sidebar from './addons/nav/sidebar';
import Toolbar from './addons/nav/toolbar';
import Action from './addons/rooms/action';
import Charts from './addons/rooms/charts';
import { loadClient } from './actions/clientActs';
import { getItems } from './actions/itemActs';

class App extends Component {

  componentDidMount() {
    store.dispatch(loadClient());
    store.dispatch(getItems());
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <div className="container-fluid">
            <div className="row">
              <Sidebar />
              <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <Toolbar />
                <Charts />
                <Action />
              </main>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}


export default App;