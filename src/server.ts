import express from "express";

const app = express();

app.get('/test', (req, res) => {
    return res.send('here!')
});

app.listen(3333);