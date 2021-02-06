const mongoose = require('mongoose');
mongoose.connect(require('./env/db-secrets'), {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('error', (err) => console.error(`Error connecting to mongoDB → ${err.message}`));

require('./models/Store');

const app = require('./app');

const server = require('http').Server(app);
const io = require('socket.io')(server, {
    allowRequest: (req, callback) =>
        callback(null, req.headers.referer.startsWith("http://localhost:3000"))
});

server.listen(
    process.env.PORT || 3001, () => console.log(`Server listening`)
);

io.on('connection', function (socket) {
    console.log(`socket with the id ${socket.id} is now connected`);
});