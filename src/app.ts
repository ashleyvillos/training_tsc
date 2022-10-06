import express, { Express, Request, json, Response } from 'express';
import dotenv, { DotenvConfigOutput } from 'dotenv';
import config from './config/config'

const app: Express = express();
const env_config: DotenvConfigOutput = dotenv.config();
const port = process.env.PORT || 3002;

// Routes
import TestRouter from './routes/test.routes';

// Middleware
app.use(json());

// Routing
app.use(TestRouter)

let serve = async () => {
    config.authenticate()
    config.sync({ force: false })
    app.listen(port, () => {
        console.log(`Listening to port ${port}`);
    })
}

serve()