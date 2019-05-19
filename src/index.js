import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Item } from './stores/Item'
import { Inventory } from '../src/stores/inventory'
import { Provider } from 'mobx-react';

let market = new Inventory ()
let stores = {market}


ReactDOM.render(
    <Provider {...stores}>
        <App />
</ Provider >, document.getElementById('root'));


serviceWorker.unregister();
