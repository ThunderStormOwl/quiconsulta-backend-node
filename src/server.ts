import express from "express";
import { routes } from "./routes/routes";

const app = express();

app.use(routes);

app.listen(3333);

console.log('Runnin in port http://localhost:3333');