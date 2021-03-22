const express = require("express");
const app = express();
const port = 80;

payload = {
  first: "Ben",
  last: "Carpenter",
  contact: [4138341510, "bacarpenter04@gmail.com"],
  pronouns: ["he", "him", "his"],
};

app.get("/", (req, res) => {
  res.send(payload);
});

app.listen(port, () => {
  console.log("ben-api listening at https://benc-api.herokuapp.com/");
});
