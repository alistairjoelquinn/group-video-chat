import { useEffect } from 'react';
import styled from 'styled-components';
import 'normalize.css';
import axios from 'axios';

const AppStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 100vh;
    width: 100vw;
    background-color: dodgerblue;
    color: antiquewhite;
    div {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 40px;
        font-weight: bold;
        -webkit-text-stroke: 1px tomato;
    }
`;

export default function App() {
    useEffect(() => {
        (async () => {
            const { data } = await axios.get('/get-user-data');
            console.log('data on page load: ', data.message);
        }
        )();
    }, []);

    return (
        <AppStyles>
            <div>Group Video Chat</div>
        </AppStyles>
    );
}