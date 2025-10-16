import express, { Request, Response, json } from 'express';
import studentRoutes from './routes/studentRoute'

const app = express();
app.use(express.json())
const POST = 8000;

app.use(studentRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send('From get. Hello world');
})

app.listen(8000, () => {
  console.log('Server running at port: ' + POST);
});

