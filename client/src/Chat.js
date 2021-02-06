import { useCallback } from "react";
import styled from "styled-components";

import axios from './axios';

const ChatStyles = styled.div`
    border: 2px solid green;
`;

const Chat = () => {
    const logoutHandler = useCallback(async () => {
        const { data } = await axios.get('/logout');
        if (data.loggedOut) {
            location.replace('/');
        }
    }, []);

    return (
        <ChatStyles>
            <div>Chat</div>
            <button onClick={() => logoutHandler()}>Log out</button>
        </ChatStyles>
    );
};

export default Chat;