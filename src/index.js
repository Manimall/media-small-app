import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import createStore from './store';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';


const store = createStore();
console.log(store.getState());

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Header />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
