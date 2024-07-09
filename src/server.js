import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import intviewengine from "./routes/web";
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: true }));

viewEngine(app);
intviewengine(app);

let PORT = process.env.PORT || 6996;

app.listen(PORT, () => {
  //callback
  console.log("runing port" + PORT);
});
