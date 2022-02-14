import { useState } from "react";

const LoginFields = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const submitHandler = (e) => {
        e.preventDefault();
        if (!username || !password) {
            setError('You need to fill out both fields you muppet...');
            return;
        }
        fetch('/login', {
            method: 'POST',
            body: JSON.stringify({ username, password })
        })
            .then(res => res.json())
            .then((data) => {
                console.log('data: ', data);
                if (data.error) {
                    setError(data.error);
                    return;
                }
                location.replace('/');
            })
            .catch(err => setError(err.message));
    };

    return (
        <div>
            {error && (
                <div className="error">{error}</div>
            )}
            <form>
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
                <button onClick={(e) => submitHandler(e)}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginFields;