import express from 'express';
import 'dotenv/config';
import { getStudents, getStudentById, postStudent, deleteAllStudents, deleteStudentById} from './controllers/studentController.js';
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

app.get('/api/students/', getStudents )

app.get('/api/students/:id', getStudentById )

app.post('/api/students', postStudent )

app.delete('/api/students', deleteAllStudents )

app.delete('/api/students/:id', deleteStudentById )

//users

app.get('/api/users', getUsers)

app.get('/api/users/:id', getUserById)

app.post('/api/users', postUser)

app.delete('/api/users', deleteAllUsers)

app.delete('/api/users/:id', deleteUserById )

app.listen(PORT, () => {
    console.log('Server running at port: ' + PORT)
});