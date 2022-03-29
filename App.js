const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/getList", (req, res) => {
  fs.readFile("sample2.json", "utf8", (err, data) => {
    if (err) {
      console.log(`Error reading file from disk: ${err}`);
    } else {
      // parse JSON string to JSON object
      const databases = JSON.parse(data);
      res.send({ express: databases });
      console.log(databases);
    }
  });
});

app.post("/post", (req, res) => {
  console.log("Connected to React");
  fs.readFile("sample2.json", "utf8", (err, data) => {
    if (err) {
      console.log(`Error reading file from disk: ${err}`);
    } else {
      // parse JSON string to JSON object
      const databases = JSON.parse(data);
      console.log(databases);
    }
  });
  res.redirect("/");
});

app.post("/api/world", (req, res) => {
  console.log(req.body);
  if (req.body.username == "shan.ahmad" && req.body.password == "12345678") {
    res.send(`Login Successfull`);
  } else {
    res.send(`Login Failed`);
  }
});
const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
