import './main.css';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import React from 'react';
import ReactDOM from 'react-dom';
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from './modules/reducers';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import Layout from './modules/containers/layout';
import Phones from './modules/containers/phones';
import { PersistGate } from 'redux-persist/lib/integration/react';


const persistConfig = {
  key: 'root',
  storage: storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store= createStore(persistedReducer, composeWithDevTools(
  applyMiddleware(thunk)
  ))

const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Phones />
        </Layout>
      </PersistGate>
    </Provider>,
    document.getElementById('root')
  )


