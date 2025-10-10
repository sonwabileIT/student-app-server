import express from 'express';

const app = express();
const POST = 8000;

app.listen(8000, () => {
  console.log('Server running at port: ' + POST);
});

