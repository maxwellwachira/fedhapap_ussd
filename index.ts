import express, { Application, Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;

const app : Application = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req: Request, res: Response) => {
    res.json({ping: "pong"});
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
});