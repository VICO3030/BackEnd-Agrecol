import express  from 'express';
import morgan from 'morgan';
import  cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoutes from './routes/auth.routes.js';
import tasksRoutes from './routes/tasks.routes.js';
import ProyectoRoutes from './routes/proyect.routes.js';
import  nivelRoutes  from './routes/nivel.routes.js';


const app = express();
app.use(cors({
	origin :"http://localhost:3000",
	credentials:true
}));
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());

app.use(authRoutes);
app.use(ProyectoRoutes);
app.use(nivelRoutes);
app.use(tasksRoutes);



export default app;