import express  from 'express';
import morgan from 'morgan';
import  cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoutes from './routes/auth.routes.js';
import tasksRoutes from './routes/tasks.routes.js';
import ProyectoRoutes from './routes/proyect.routes.js';
import  nivelRoutes  from './routes/nivel.routes.js';
import indicadorRoutes from './routes/indicador.routes.js';

const app = express();
app.use(cors({
	origin :["http://localhost:3000","10.144.41.14","http://10.144.138.23:3000"],
	credentials:true
}));
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());

app.use(authRoutes);
app.use(ProyectoRoutes);
app.use(nivelRoutes);
app.use(tasksRoutes);
app.use(indicadorRoutes);


// Antes o después de tus app.use(…) y rutas:
app.get('/', (req, res) => {
  res.send('GUTY GUEY');  // o lo que quieras mostrar
});
export default app;