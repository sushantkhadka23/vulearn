import { Request, Response } from 'express';
import { exec } from 'child_process';

export const execCmd = (req: Request, res: Response) => {
    const userInput = req.query.cmd ;
        exec(`echo ${userInput}`, { cwd: './src/lab/A03-Injection/command-injection' }, 
          (err, stdout, stderr) => {
          return res.json(stdout);}
        );
};
