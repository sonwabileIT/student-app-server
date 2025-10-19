import express, { Request, Response } from 'express';

const app = express();
const router = express.Router();

//Get all users
//works
router.get('/api/users', async (req: Request, res: Response) => {
  try {
    const data = await fetch('http://localhost:3000/users');
    const response = await data.json();
    res.send(response);
    console.log(response);
  }
  catch (error) {
    console.log('Error Message: ' + error);
  }

});


router.post('/api/users', (req: Request, res: Response) => {

});


//Get single user
//works
router.get('/api/users/:id', async (req: Request, res: Response) => {
  const getUserId = req.params.id;
  try {
    const getUser = await fetch('http://localhost:3000/users/' + getUserId);
    const response = await getUser.json();
    res.send(response);
    console.log(response);
  }
  catch (error) {
    console.log('Error message: ' + error);
  }

});


router.put('/api/users/:id', (req: Request, res: Response) => {

});

router.delete('/api/users/:id', (req: Request, res: Response) => {

});

export default router;
