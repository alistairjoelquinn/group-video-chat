const mongoose = require('mongoose');
const Store = mongoose.model('Store');

let onlineUsers = {};
let chatMessages = [{
    name: 'Alistair',
    message: 'hello there and welcome'
}];

module.exports = (io) => {
    io.on('connection', (socket) => {
        if (!socket.request.session.userId) return socket.disconnect(true);
        const { userId } = socket.request.session;
        onlineUsers[userId] = socket.id;
        console.log('chatMessages: ', chatMessages);
        io.to(socket.id).emit('priorChatMessages', chatMessages);
        console.log('onlineUsers: ', onlineUsers);

        socket.on('chatMessage', async msg => {
            const { name } = await Store.findOne({ _id: userId });
            chatMessages.push({ name, message: msg });
            io.emit('newChatMessage', { name, message: msg });
        });
        socket.on('disconnect', () => {
            delete onlineUsers[userId];
            console.log('onlineUsers: ', onlineUsers);
            if (!Object.keys(onlineUsers).length) {
                onlineUsers = {};
            }
        });
    });
};