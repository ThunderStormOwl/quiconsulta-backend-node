import express from "express";
import {errors} from 'celebrate';
import { routes } from "./routes/routes";


const app = express();

app.use(express.json());

app.use(routes);

app.use(errors());

app.listen(3333);

console.log('Runnin in port http://localhost:3333');