import io from 'socket.io-client';

import { chatMessage, getMessages } from '../store/actions';

export let socket;

export const init = ({ dispatch }) => {
    if (!socket) {
        socket = io.connect();
    }
    socket.on('chatMessages', msgs => dispatch(getMessages(msgs)));
    socket.on('chatMessage', msg => dispatch(chatMessage(msg)));
};