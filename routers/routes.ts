import { Router, Request, Response } from 'express';
import path from 'path';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    // res.send('Hello, World!');
    res.sendFile(path.join(__dirname, '../public/home.html'));
});

router.get('/about', (req: Request, res: Response) => {
    // res.send('About Page');
    res.sendFile(path.join(__dirname, '../public/about.html'));
});

export default router;
