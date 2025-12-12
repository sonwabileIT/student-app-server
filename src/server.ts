import express, { Request, Response, json } from 'express';
import session from 'express-session';
import authRoutes from './routes/authRoute';
import studentRoutes from './routes/studentRoute';
import userRoutes from './routes/userRoute';
//import authRoutes from './routes/authRoute';

const app = express();
//app.use(express.json())
//const POST = 8000;
app.use(session({
  secret: "1235432",
  name: "student",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    //  maxAge: 60000 * 60,
    //  expires: null
  }
}));
app.use(express.json());
app.use('/', authRoutes);
app.use(studentRoutes);
app.use(userRoutes);
//app.use(authRoutes);
const POST = 8000;
app.get("/", (req: Request, res: Response) => {
  res.send('From get. Hello world');
  //console.log(req.session);
  //console.log(req.sessionID);
})

app.listen(8000, () => {
  console.log('Server running at port: ' + POST);
});

