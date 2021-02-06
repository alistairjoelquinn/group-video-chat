const onlineUsers = {};
const chatMessages = [];

module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log(`socket ${socket.id} : user ${socket.request.session.userId}`);
        if (!socket.request.session.userId) return socket.disconnect(true);
        const { userId } = socket.request.session;
        onlineUsers[userId] = socket.id;
        io.to(socket.id).emit('priorChatMessages', chatMessages);


    });
};