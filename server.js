require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3001;
require("./mongoConnection");
const routes = require("./routes/route");
const routes2 = require("./routes/route2");

app.use(express.json());
app.use("/", routes2);
app.use("/api", routes);

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
