import { useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { logUserOut } from "../store/actions";
import axios from './axios';

const ChatStyles = styled.div`
    button {
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 2rem;
        height: 3rem;
    }
`;

const Chat = () => {
    const dispatch = useDispatch();

    const logoutHandler = useCallback(async () => {
        const { data } = await axios.get('/logout');
        if (data.loggedOut) {
            dispatch(logUserOut());
            location.replace('/');
        }
    }, []);

    return (
        <ChatStyles>
            <button onClick={() => logoutHandler()}>Log out</button>

        </ChatStyles>
    );
};

export default Chat;