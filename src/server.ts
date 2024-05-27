import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { router } from './routes/routes';

export const app = express();

app.use(cors());

app.use(express.json());
app.use(router);

export const server = app.listen(3333, () => console.log("server enable"))
