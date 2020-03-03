import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import Counter from "./counter/Counter";
import ProductList from "./products/ProductList";


const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  );

function App() {
  return (
    <Provider store={store}>
        <div>
          <Counter />
          <ProductList />
      </div>
    </Provider>
  );
}

export default App;
