import { useCallback, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Logout } from 'heroicons-react';
import { v4 } from 'uuid';

import { logUserOut } from "../store/actions";
import axios from './axios';
import { socket } from './socket';

const ChatStyles = styled.div`
    height: 100vh;
    font-size: 2rem;
    padding: 3rem;
    padding-left: 0;
    .button {
        position: absolute;
        top: 0.3rem;
        right: 0.3rem;
        cursor: pointer;
    }
    textarea {
        width: 100%;
        height: 10%;
        margin-bottom: 5%;
        font-size: 2rem;
        color: var(--dark);
    }
`;

const ChatContainerStyles = styled.div`
    height: 90%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
    justify-content: flex-end;
    overflow-y: scroll;
    
`;

const SingleChatMessage = styled.div`
    width: 90%;
    .name {
        color: var(--orange);
    }
`;

const Chat = () => {
    const elemRef = useRef();
    const dispatch = useDispatch();
    const chatMessages = useSelector(state => state.chatMessages);

    useEffect(() => {
        if (elemRef.current) {
            elemRef.current.scrollTop = elemRef.current.scrollHeight - elemRef.current.clientHeight;
        }
    }, [chatMessages]);

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
            <ChatContainerStyles ref={elemRef}>
                {chatMessages.map(message => (
                    <SingleChatMessage key={v4()}>
                        <span className="name">{message.name}: </span>
                        <span>{message.message}</span>
                    </SingleChatMessage>
                ))}
            </ChatContainerStyles>
            <textarea
                placeholder="Enter a chat message here!"
                onKeyDown={keyCheck}
            />
        </ChatStyles>
    );
};

export default Chat;