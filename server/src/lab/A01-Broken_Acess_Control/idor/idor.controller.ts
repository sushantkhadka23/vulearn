import { Request, Response } from 'express';
import { users } from './idor.schema';

export const loginUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);

    if (!user) {
      return res.status(404).send('User not found');
    }

    if (user.password !== password) {
      return res.status(403).send('Incorrect password');
    }

    return res.redirect(`/api/v1/idor/user/${user.id}`);
  } catch (err) {
    console.error('Error during login:', err);
    return res.status(500).send('Internal Server Error');
  }
};

export const getUserData = async (req: Request, res: Response): Promise<any> => {
  const requestedUserId: number = parseInt(req.params.id, 10);

  const user = users.find(u => u.id === requestedUserId);

  if (!user) {
    return res.status(404).send('User not found');
  }

  const response = {
    username: user.username,
    password:user.password,
    flag: user.flag || 'No flag available for this user',
  };
  return res.json(response);
};
