import styled from 'styled-components';

import Typography from './styles/Typography';
import GlobalStyles from './styles/GlobalStyles';
import LoginFields from './LoginFields';

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
    font-family: bebasneue;
    h1 {
        font-size: 6rem;
        margin-bottom: 2rem;
    }
    .error {
        color: var(--yellow);
        margin-bottom: 2rem;
    }
    div > form {
        display: flex;
        flex-direction: column;
        height: 30vh;
        align-items: center;
        justify-content: space-between;
        font-size: 4rem;
        font-weight: bold;
        input {
            font-family: pangolin;
            font-size: 2rem;
            height: 4rem;
        }
        button {
            font-size: 4rem;
        }
    }
`;

const Login = () => {
    return (
        <LoginStyles>
            <GlobalStyles />
            <Typography />
            <h1>Please identify yourself Quinn!</h1>
            <LoginFields />
        </LoginStyles>
    );
};

export default Login;
