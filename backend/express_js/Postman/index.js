import express from 'express';

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.post("/register", (req, res) => {
    console.log("register");
    res.sendStatus(201);
});

app.put("/user/sakshi", (req, res) => {
    res.sendStatus(200);
});

app.patch("/user/sakshi", (req, res) => {
    res.sendStatus(200);
});

app.delete("user/sakshi", (res, req) => {
    res.sendStatus(200);
})

app.listen(port, () => {
    console.log(`Portal is running on ${port} port.`);
});