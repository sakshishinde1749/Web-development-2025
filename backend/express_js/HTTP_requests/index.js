// HTTP: hyper text transfer protocol
// HTTP communicate between sercer and client

import express from 'express';

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>hello</h1>");
})

app.get("/about", (req, res) => {
    res.send("About me: My name is sakshi, I like coding.");
})

app.get("/contact", (req, res) => {
    res.send("contact details: 9999999999");
})

app.listen(port, () => {
    console.log(`server is running on ${port} port.`)
})