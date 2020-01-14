
import {createStore} from 'redux';
import reducer from './Reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // or whatever storage you are using
import { PersistGate } from 'redux-persist/es/integration/react';

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: [                    
    //   'accountReducer'
    // ],
    blacklist: [
      // 'late'
    ]
  }
  
const persistedReducer = persistReducer(persistConfig, reducer)
 
const store = createStore(persistedReducer)


export default store;