import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import 'normalize.css';

import { retrieveUserData } from '../store/actions';
import Typography from './styles/Typography';
import GlobalStyles from './styles/GlobalStyles';
import VideoGrid from './VideoGrid';
import Chat from './Chat';

const AppStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    height: 100vh;
    width: 100vw;
    background-color: var(--dark);
    color: var(--yellow);
    div {
        font-family: pangolin;
        font-size: 40px;
        font-weight: bold;
    }
`;

const AppGrid = styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 75vw 25vw;
`;

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveUserData());
    }, []);

    return (
        <AppStyles>
            <GlobalStyles />
            <Typography />
            <AppGrid>
                <VideoGrid />
                <Chat />
            </AppGrid>
        </AppStyles>
    );
}