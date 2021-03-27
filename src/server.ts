import express from "express";
import { routes } from "./routes/routes";

const app = express();

app.use(routes);

app.listen(3333);