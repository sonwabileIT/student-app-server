import express from 'express';

const app = new express();

app.listen(4000, () => {
    console.log('Server running at port: ' + 4000)
});