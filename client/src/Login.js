import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Typography from './styles/Typography';
import GlobalStyles from './styles/GlobalStyles';

const LoginStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 100vh;
    width: 100vw;
    background-color: var(--dark);
    color: var(--yellow);
    h1 {
        font-family: bebasneue;
        font-size: 6rem;
        margin-bottom: 2rem;
    }
    div {
        display: flex;
        flex-direction: column;
        height: 30vh;
        align-items: center;
        justify-content: space-between;
        font-family: bebasneue;
        font-size: 4rem;
        font-weight: bold;
    }
`;

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
        <LoginStyles>
            <GlobalStyles />
            <Typography />
            <h1>Please identify yourself Quinn!</h1>
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

        </LoginStyles>
    );
};

export default Login;
