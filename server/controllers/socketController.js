const mongoose = require('mongoose');
const Store = mongoose.model('Store');

const onlineUsers = {};
const chatMessages = [{
    name: 'Alistair',
    message: 'hello there'
}];

module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log(`socket ${socket.id} : user ${socket.request.session.userId}`);
        if (!socket.request.session.userId) return socket.disconnect(true);
        const { userId } = socket.request.session;
        onlineUsers[userId] = socket.id;
        io.to(socket.id).emit('priorChatMessages', chatMessages);

        socket.on('chatMessage', async msg => {
            const { name } = await Store.findOne({ _id: userId });
            chatMessages.push();
            io.emit('newChatMessage', { name, message: msg });
        });
    });
};