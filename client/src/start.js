import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';
import Login from './Login';
import Reducer from '../store/reducer';

const store = createStore(Reducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

let elem;

if (location.pathname === '/login') {
    elem = <Login />;
} else {
    elem = (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

ReactDOM.render(elem, document.querySelector('main'));