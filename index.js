import express from 'express';

import bodyParser from 'body-parser';

import port from './helper/port';

import authRoutes from './routes/authRoutes';

import db from './helper/databaseconfig'

const app = express();

// Test Database
db.authenticate()
.then(()=>{console.log('Database connected Successful')})
.catch(err => console.log('Error:' + err));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/',(req,res) => {

    res.send('Welcome to Node Babel');
})

app.use('/auth/v1',authRoutes)

app.listen(port,() => {
     console.log(`app is listening to port ${port}`);
})