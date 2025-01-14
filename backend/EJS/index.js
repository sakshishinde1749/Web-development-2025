import express from 'express';

const app = express();
const port = 3000;

const today = new Date();
const day = today.getDay();

var dayType = "weekday";
var advice = "It's a weekday, get to work!";
if (day === 0 || day === 6) {
    dayType = "weekend";
    advice = "It's the weekend, relax!";
}

app.get("/", (req, res) => {
    res.render("index.ejs", {dayType: dayType, advice: advice});
});

app.listen(port, () => {  
    console.log(`Listening on port ${port}`);
});
