import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import * as serviceWorker from './serviceWorker';

import {BrowserRouter} from "react-router-dom";
import {store} from './store'
import {Provider} from "react-redux";

import "./style/header.scss"
import "./style/app.scss"
import "./style/main.scss"
import "./style/profile.scss"
import "./style/person-card.scss"
import "./style/contacts.scss"
import "./style/auth.scss"
import "./style/loader.scss"

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
