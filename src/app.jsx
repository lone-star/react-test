import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import store from './store'
import AppContainer from './app_container.jsx';

const redux = createStore(store);

class Main extends React.Component{
  render() {
    return (
      <Provider store={redux}>
        <AppContainer />
      </Provider>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
