const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const version = process.env.VERSION || "V1";
  res.send(
    `Welcome to Serverless Meetup @ DELLEMC - from knative build - ${version}!`
  );
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Hello world listening on port", port);
});
