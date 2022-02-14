const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_DB_SECRET, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('error', (err) => console.error(`Error connecting to mongoDB → ${err.message}`));

require('./models/Store');

const server = require('./app');

server.listen(
    process.env.PORT || 3001, () => console.log(`Server listening`)
);
