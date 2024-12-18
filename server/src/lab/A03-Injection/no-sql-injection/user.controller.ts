import { Request, Response } from 'express';
import User from './user.schema';
import connectDB from './user.db';

export const loginUser = async (req: Request, res: Response):Promise<Response> => {
    await connectDB();
    const { username, password } = req.body;  
    try {
      const query = { username:username ,password :password};
      const users = await User.findOne(query); 
      if (!users){
        return res.status(401).json({ message: 'Invalid Credentails' });
      }
      return res.json(users);
    } catch (err) {
      console.error(err);
      return res.status(500).json({message : 'Server error'});
    }
};
