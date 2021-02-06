module.exports = (io) => {
    io.on('connection', (socket) => {
        console.log(`socket with the id ${socket.id} is now connected`);
    });
};