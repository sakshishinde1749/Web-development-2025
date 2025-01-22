import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "Sakshi1234",
  port: 5433
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query(
      "SELECT * FROM users WHERE users.email = ($1)",
      [email]
    );
    if (checkResult.rows.length > 0) {
      res.send("Email already exists, try logging in.");
    } else {
      await db.query(
        "INSERT INTO users (email, password) VALUES ($1, $2)",
        [email, password]
      );
      res.render("secrets.ejs");
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const result = await db.query(
      "SELECT * FROM users WHERE users.email = ($1)",
      [email]
    )
    if (result.rows.length > 0) {
      const storedPassword = result.rows[0].password;

      if (storedPassword === password) {
        res.render("secrets.ejs");
      } else {
        res.send("Incorrect Password!");
      }
    } else {
      res.send("User Not Found!");
      res.redirect("/");
    }

  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
