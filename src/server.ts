require('dotenv/config');

import express from "express";
import {errors} from 'celebrate';
import cors from 'cors';
import { routes } from "./routes/routes";
import { Knex } from "./database/connection";

const startServer = () => {
    const app = express();

    app.use(express.json());

    app.use(cors());

    app.use(routes);

    app.use(errors());

    app.listen(process.env.PORT || 3333);

    console.log(`Runnin in port http://localhost:${process.env.PORT || 3333}`);
}

if(process.env.NODE_ENV === 'production'){
    Knex.migrate.latest()
        .then(startServer)
        .catch(console.log);
}
else{
    startServer();
}

