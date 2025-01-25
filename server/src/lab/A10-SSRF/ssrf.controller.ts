import { Request, Response } from 'express';
import axios from 'axios';

export const fetchapi = async (req: Request, res: Response) => {
    const { url } = req.query;

  if (!url || typeof url !== 'string') {
    return res.status(400).send('URL is required');
  }

  try {
    const urlObject = new URL(url); 
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(400).send('Malformed URL or request failed.');
  }
};

export const adminsafeapi = async (req: Request, res: Response) => {
    res.json({flag:"vulearn$%7Bssrf_attack_suceed%7D"});
}