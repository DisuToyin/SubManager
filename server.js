require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path")
const morgan = require("morgan");
const connectDB = require("./db/db");
connectDB();

const userRoute = require("./routes/users_routes");

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/user", userRoute)


app.listen(process.env.PORT || 5000, () =>
  console.log(`Server is running on 5000`)
);