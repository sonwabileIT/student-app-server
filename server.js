import express from 'express';
import 'dotenv/config';
import studentRoute from './routes/studentRoute.js';
import userRoute from './routes/userRoute.js';

const PORT = process.env.PORT;

const app = new express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello from get request")
} )

app.get('/api/', (req, res) => {
    res.send("Hello from get api request");
} )

//students

app.use(studentRoute);

//users

app.use(userRoute);

app.listen(PORT, () => {
    console.log('Server running at port: ' + PORT)
});