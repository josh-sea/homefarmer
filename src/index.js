import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';



const reducer = (state = {
  activeItem: 'Home',
  plantData: [],
  searchValue: '',
}, action) => {
  switch(action.type) {
    case 'NAV_CLICK':
      return {...state, activeItem: action.newNavItem}
    case 'PLANT_DATA':
      return {...state, plantData: action.plants}
    case 'SEARCH_TERM':
      return {...state, searchValue: action.searchValue}
    default:
      return state
  }
}

const store = createStore(reducer)

store.subscribe(() => {
})


ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
