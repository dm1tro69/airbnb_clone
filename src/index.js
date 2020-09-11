import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from "redux";
import rootReducer from "./reducers/rootReducer";
import reduxPromise from 'redux-promise'

import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import {PersistGate} from "redux-persist/integration/react";

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const theStore = applyMiddleware(reduxPromise)(createStore)(persistedReducer)

const persistor = persistStore(theStore)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={theStore}>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>

    </React.StrictMode>,
    document.getElementById('root')
);


