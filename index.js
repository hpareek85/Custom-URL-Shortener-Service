const express = require("express"); //setup express server
const connectDB = require("./config/db");

const app = express(); //init app with express

//Connect to database
connectDB();

app.use(express.json({ extended: false })); //adding middleware -> it allow accept json data into api

// Define routes
app.use("/", require("./routes/index"));

app.use("/api/url", require("./routes/url"));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
