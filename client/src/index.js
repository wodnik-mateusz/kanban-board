import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
	<Provider store={store}>
		<BrowserRouter>
			<Route path="/" component={App}/>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
