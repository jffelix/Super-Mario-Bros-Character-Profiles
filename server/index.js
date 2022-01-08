const express = require("express");
const cors = require("cors");
const routers = require("./routers/index.js");
const path = require("path");
const app = express();
const port = 3001;

app.use(express.json());

app.use("/", routers);

app.listen(() => {
    console.log(`Listening from port ${port}!`);
})