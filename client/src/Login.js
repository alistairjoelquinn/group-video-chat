import { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const submitHandler = () => {
        axios
            .post('/login', { username, password })
            .then(() => location.replace('/'))
            .catch(err => setError(err.message));
    };

    return (
        <div>
            {error && (
                <div className="error">Oops! You made a mistake.</div>
            )}
            <input
                name="username"
                type="text"
                placeholder="Username..."
                onChange={e => setUsername(e.target.value)}
                required
            />
            <input
                name="password"
                type="password"
                placeholder="Password..."
                onChange={e => setPassword(e.target.value)}
                required
            />
            <button onClick={() => submitHandler()}>
                Login
            </button>
        </div>
    );
};

export default Login;
