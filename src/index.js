 import React from 'react';
import { render }from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers'
import App from './App';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

let store = createStore(rootReducer)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
