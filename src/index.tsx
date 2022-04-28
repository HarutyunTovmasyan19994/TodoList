import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import {Provider} from 'react-redux'
import App from "./App";

import {PersistGate} from 'redux-persist/integration/react'
import {store, Storage} from "./Redux/Store/store";


ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={Storage}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
)

