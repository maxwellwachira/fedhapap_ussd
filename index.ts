import express, { Application, Request, Response} from 'express';
import dotenv from 'dotenv';

import Listener from './src/ussd/ussdController';

dotenv.config();

const port = process.env.PORT;

const app : Application = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post('/', Listener);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
});