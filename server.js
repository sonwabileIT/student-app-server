import express from 'express';
import 'dotenv/config';
import { getStudents, getStudentById, postStudent} from './controllers/studentController.js'

const PORT = process.env.PORT;

const app = new express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello from get request")
} )

app.get('/api/', (req, res) => {
    res.send("Hello from get api request");
} )

app.get('/api/students/', getStudents )

app.get('/api/students/:id', getStudentById )

app.post('/api/students', postStudent )

app.get('/api/users', (req, res) => {
    res.send("Get all Users")
})

app.get('/api/users/:id', (req, res) => {
    res.send("user: " + req.params.id)
})

app.post('/api/users', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const type = req.body.type;

    const user = {firstName, lastName, email, type}
    res.status(201).send(user)
})

app.listen(PORT, () => {
    console.log('Server running at port: ' + PORT)
});