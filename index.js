import express from 'express';

import bodyParser from 'body-parser';

import authRoutes from './routes/authRoutes';

import messageRoutes from './routes/messageRoute';

import db from './helper/databaseconfig';

import http from 'http';

const app = express();



const server = http.createServer(app);

import { Server } from 'socket.io';

const io = new Server(server);

const port = 8080;

// Test Database
async()=>{
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
// db.authenticate()
// .then(()=>{console.log('Database connected Successful')})
// .catch(err => console.log('Error:' + err));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/',(req,res) => {

  res.sendFile(__dirname + '/index.html');

    // res.status(200).json({
    //     'message':'Welcome to our app'
    // });
})

app.use('/auth/v1',authRoutes)

// messages

app.use('/v1', messageRoutes);

// io.on('connection', (socket) => {

//   console.log('a user connected');

//   socket.on('disconnect', () => {

//     console.log('user disconnected');

//   });
// });

io.on('connection', (socket) => {

  socket.on('chat message', (msg) => {

    io.emit('chat message', msg);

  });
});

server.listen(port,() => {

     console.log(`app is listening to port ${port}`);

})

module.exports = app;