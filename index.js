import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import logger from 'morgan';
import router from './api/Routes/index.js';
import morgan from 'morgan';
import multer from 'multer';

dotenv.config();
const app = express();

//Middlewares
app.use(logger('dev'));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static('public'));

//Routes
app.use('/', router);

export default app;
