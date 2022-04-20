import React from 'react'
import {createStore} from 'redux'
import {rootReducer} from "../Rudecer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {composeWithDevTools} from "redux-devtools-extension";

const persistConfig = {
    key: 'user',
    storage,
}


const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = createStore(persistedReducer,composeWithDevTools() )
export let Storage = persistStore(store)