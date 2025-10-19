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

//Add new user
//works
router.post('/api/users', (req: Request, res: Response) => {
  const newUser = req.body;
  try {
    const addUser = fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "id": newUser.id,
        "firstName": newUser.firstName,
        "lastName": newUser.lastName,
        "email": newUser.email,
        "role": newUser.role
      })
    })
    res.status(201).end();
  }
  catch (error) {
    console.log('Error message: ' + error);
  }

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
  const getUserId = req.params.id;
  try {
    const deleteUser = fetch('http://localhost:3000/users/' + getUserId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    res.status(204).end();

  }
  catch (error) {
    console.log('Error message: ' + error)
    res.end()
  }

});

export default router;
