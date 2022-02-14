const mongoose = require('mongoose');
console.log('process.env.MONGO_DB_SECRET: ', process.env.MONGO_DB_SECRET);
console.log('process.env.COOKIE_SECRET: ', process.env.COOKIE_SECRET);
console.log('process.env.COOKIE_MAXAGE: ', process.env.COOKIE_MAXAGE);
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
