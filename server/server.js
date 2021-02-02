const mongoose = require('mongoose');
mongoose.connect(require('./env/db-secrets'), {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('error', (err) => console.error(`Error connecting to mongoDB → ${err.message}`));

require('./models/Store');

const app = require('./app');
app.set('port', process.env.PORT || 3001);

const server = app.listen(
    app.get('port'), () => console.log(`Server listening on PORT ${server.address().port}`)
);