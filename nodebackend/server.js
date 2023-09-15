const app = require('./app');
const port = 80;
const mongoose = require('mongoose');

process.on('uncaughtException', (err) => {
    console.log('UNCAUGHT EXCEPTION CAUGHT 💥💥💥');
    console.log(err.name, err.message);

    process.exit(1);
});

mongoose.connect('mongodb+srv://nishanpradhan500:management@schoolmanagement.qf2ff27.mongodb.net/?retryWrites=true&w=majority').then(data => {
    console.log('connected to database')
}).catch(err => {
    console.log('FAILED TO CONNECT');
})

const server = app.listen(port, () => {
    console.log('server is running');
})

process.on('unhandledRejection', (err) => {
    console.log(err.name, err.message);
    console.log('unhandled rejection! 💥 💥💥');
    server.close(() => {
        process.exit(1);
    });
});