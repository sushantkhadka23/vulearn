import { Request, Response } from 'express';

export const sendCookie = async (req: Request, res: Response):Promise <any> => {
    try {
        res.cookie('flag', 'vulearn$%7Bxss_injection_alerted%7D', {
            secure: false,   
            maxAge: 3600000  
        });
        res.send("ok");
      
    } catch (err) {
      console.error(err);
      return res.status(500).json({message : 'Server error'});
    }
};
