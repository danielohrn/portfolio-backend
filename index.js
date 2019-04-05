const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const apiRoutes = require("./api");

app.use(cors());
app.use(bodyParser.json());
app.use("/api", apiRoutes);

const PORT = 1234;
app.listen(PORT);
console.log("server running");
