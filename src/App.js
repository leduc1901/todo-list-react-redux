import React from 'react';
import {Provider} from 'react-redux';
import Title from './components/Title';
import Input from './components/Input';
import List from './components/List';
import Button from "./components/Button";
import store from './redux/Store';
import "./App.css"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // or whatever storage you are using
import { PersistGate } from 'redux-persist/es/integration/react';

let persistor = persistStore(store)

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="container" >
            <Title/>
            <Input/>
            <List/>
            <Button/>
        </div>
      </PersistGate>
      
    </Provider>
  )
}

export default App;
