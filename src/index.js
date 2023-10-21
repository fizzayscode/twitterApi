const express = require("express");
const appRouter = require("./routes/index");

const app = express();

app.use(express.json());

app.use("/", appRouter);

app.listen(8080, () => {
  console.log("running at port 8080");
});
