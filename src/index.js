const express = require("express");
const app = express();
const port = process.env.PORT;

info = {
  first: "Ben",
  last: "Carpenter",
  contact: {
    cell: 4138341510,
    email: "bacarpenter04@gmail.com",
  },
  pronouns: ["he", "him", "his"],
};

app.get("/", (req, res) => {
  res.send(info);
});

app.listen(port, () => {
  console.log("ben-api listening at https://benc-api.herokuapp.com/");
});
