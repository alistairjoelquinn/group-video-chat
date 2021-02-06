import { useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { logUserOut } from "../store/actions";
import axios from './axios';

const ChatStyles = styled.div`
    border: 2px solid green;
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
            <div>Chat</div>
            <button onClick={() => logoutHandler()}>Log out</button>
        </ChatStyles>
    );
};

export default Chat;