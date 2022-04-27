const express = require('express');
const app = express();
const moment = require('moment');

app.get('/', (req, res) => {
    res.send({
        pid: process.pid,
        name: "server",
        hora: moment().format('YYYY-MM-DD HH:mm:ss'),
        cpus: 12
    })
})

app.get("/end", (req, res) => {
    res.send("Proceso terminado")
    process.exit()
})

app.get("/ramdon", (req, res) => {
    console.log("Proceso ramdon")
    res.send("Ramdon")
})

app.all('*', (req, res) => {
    res.sendStatus(404);
})



module.exports = app;