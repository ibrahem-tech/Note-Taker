const htmlRoutes = require("./routes/htmlRoute");
const apiRoutes = require("./routes/apiRoute");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use("/", htmlRoutes);
app.use("/api", apiRoutes);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(PORT,()=> console.log(`Listening on PORT : ${PORT}`));