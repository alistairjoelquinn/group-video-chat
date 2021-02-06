import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Logout } from 'heroicons-react';
import { v4 } from 'uuid';

import { logUserOut } from "../store/actions";
import axios from './axios';
import { socket } from './socket';

const ChatStyles = styled.div`
    font-size: 2rem;
    padding: 3rem;
    padding-left: 0;
    .button {
        position: absolute;
        top: 0.3rem;
        right: 0.3rem;
    }
`;

const ChatContainerStyles = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
    justify-content: flex-end;
    textarea {
        width: 90%;
        margin-bottom: 5%;
        font-size: 2rem;
        color: var(--dark);
    }
`;

const SingleChatMessage = styled.div`
    width: 90%;
    .name {
        color: var(--orange);
    }
`;

const Chat = () => {
    const dispatch = useDispatch();
    const chatMessages = useSelector(state => state.chatMessages);

    const logoutHandler = useCallback(async () => {
        const { data } = await axios.get('/logout');
        if (data.loggedOut) {
            dispatch(logUserOut());
            location.replace('/');
        }
    }, []);

    const keyCheck = useCallback(e => {
        if (e.key === 'Enter' && e.target.value) {
            e.preventDefault();
            socket.emit('chatMessage', e.target.value);
            e.target.value = '';
        }
    }, []);

    return (
        <ChatStyles>
            <div className="button" onClick={() => logoutHandler()} >
                <Logout />
            </div>
            <ChatContainerStyles>
                {chatMessages.map(message => (
                    <SingleChatMessage key={v4()}>
                        <span className="name">{message.name}: </span>
                        <span>{message.message}</span>
                    </SingleChatMessage>
                ))}
                <textarea
                    placeholder="Enter a chat message here!"
                    onKeyDown={keyCheck}
                />
            </ChatContainerStyles>
        </ChatStyles>
    );
};

export default Chat;