import ReactDOM from 'react-dom';
import App from './App';
import Login from './Login';

let elem;

if (location.pathname === '/login') {
    elem = <Login />;
} else {
    elem = <App />;
}

ReactDOM.render(elem, document.querySelector('main'));