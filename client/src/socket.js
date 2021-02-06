import io from 'socket.io-client';

import { chatMessage, getMessages } from '../store/actions';

export let socket;

export const init = ({ dispatch }) => {
    if (!socket) {
        socket = io.connect();
    }
    socket.on('priorChatMessages', msgs => dispatch(getMessages(msgs)));
    socket.on('newChatMessage', msg => dispatch(chatMessage(msg)));
};