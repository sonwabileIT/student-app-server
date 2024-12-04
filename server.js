import express from 'express';
import 'dotenv/config';
import studentRoute from './routes/studentRoute.js'
import { getUsers, getUserById, postUser, deleteAllUsers, deleteUserById } from './controllers/userController.js'

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

app.get('/api/users', getUsers)

app.get('/api/users/:id', getUserById)

app.post('/api/users', postUser)

app.delete('/api/users', deleteAllUsers)

app.delete('/api/users/:id', deleteUserById )

app.listen(PORT, () => {
    console.log('Server running at port: ' + PORT)
});