import io from 'socket.io-client';

import { chatMessage, currentlyOnline, getMessages, newUser, userLoggedOff } from '../store/actions';

export let socket;

export const init = ({ dispatch }) => {
    if (!socket) {
        socket = io.connect();
    }
    socket.on('priorChatMessages', msgs => dispatch(getMessages(msgs)));
    socket.on('newChatMessage', msg => dispatch(chatMessage(msg)));
    socket.on('newUser', userId => dispatch(newUser(userId)));
    socket.on('userLoggedOff', userId => dispatch(userLoggedOff(userId)));
    socket.on('currentlyOnline', onlineUsers => dispatch(currentlyOnline(onlineUsers)));

    socket.on('user-connected', userId => {
        console.log(`User with the id ${userId} just connected`);
    });
};