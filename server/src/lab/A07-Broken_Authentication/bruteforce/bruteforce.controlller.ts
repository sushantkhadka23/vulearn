import { Request, Response } from "express";
import { users ,User } from "./bruteforce.schema";
import path from "path";

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
  
      const response = {
        username: user.username,
        password: user.password,
        flag: user.flag ,
      };
      return res.json(response);
    } catch (err) {
      console.error('Error during login:', err);
      return res.status(500).send('Internal Server Error');
    }
  };

  export const getlist = async (req: Request, res: Response): Promise<any> => {
    try {
      const options = {
        root: path.join(__dirname)
    };
 
    const file = req.query.filename;
    const fileName = file + '.txt';
    res.sendFile(fileName, options);
    } catch (err) {
      console.error('Error during login:', err);
      return res.status(500).send('Internal Server Error');
 
  }
  };