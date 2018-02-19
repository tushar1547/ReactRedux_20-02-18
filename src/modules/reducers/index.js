import { combineReducers} from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import phones from './phones';
import {routerReducer} from 'react-router-redux';
import phonesPage from './phonesPage';
import basket from './basket';


const rootPersistConfig = {
  key: 'root',
  storage: storage

};

const allReducers = combineReducers({
  routing: routerReducer,
  phones,
  phonesPage,
  basket
});

export default persistReducer(rootPersistConfig, allReducers);
