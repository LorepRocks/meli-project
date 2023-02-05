import express from 'express';
import morgan from 'morgan';
import itemsRouter from './src/api/v1/routes';
import apicache from 'apicache';
require('dotenv').config();

const app = express();

let cache = apicache.middleware;
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

//caching all routes for 5 minutes
app.use(cache('5 minutes'));

app.use('/api/v1', itemsRouter);

export default app;
