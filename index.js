const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(logger);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.get("/",logger, (req, res) => {}); //multiple middleware functions
app.get("/", (req, res) => {
  console.log("GET /");
  //   res.sendStatus(200);
  //   res.status(200).send("Hello World!");
  //   res.json({ message: "Hello World!" });
  //   res.download("index.js");
  res.render("index", { title: "Express" });
  //   res.redirect("https://www.google.com");
  //   res.status(200).json({ message: "Hello World!" });
  //   res.send("Hello World!");
});
const usersRouter = require("./routes/users");
app.use("/users", usersRouter);
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}
app.listen(3000);
