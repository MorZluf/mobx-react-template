import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Item } from './stores/Item'
import { Inventory } from '../src/stores/inventory'

let market = new Inventory ()
let shirt = new Item ("Shirt", 20, 3)
market.items.push(shirt)


ReactDOM.render(<App store={market}/>, document.getElementById('root'));


serviceWorker.unregister();
