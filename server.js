import express from 'express';

const app = new express();

app.get('/', (req, res) => {
    res.send("Hello from get request")
})

app.get('/api/', (req, res) => {
    res.send("Hello from get api request");
})

app.get('/api/students/', (req, res) => {
    res.send("Students list");
})

app.get('/api/students/:id', (req, res) => {
    res.send('student number: ' + req.params.id );
})

app.listen(4000, () => {
    console.log('Server running at port: ' + 4000)
});