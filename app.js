const connectDB = require("./utils/connectDB");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const usersRouter = require("./routes/searchRoutes");
const PORT = process.env.PORT || 5000;
dotenv.config();
//middleware
app.use(express.json());
app.use(cors());

//routes

app.get("/", (req, res) => {
  res.send("Olvy Userlist API");
});
//users router
app.use("/api/search", usersRouter);

const start = async () => {
  try {
    //connectDB
    await connectDB(process.env.MONGO_URI);
    console.log("Connected to database");
    app.listen(PORT, console.log(`The server is listening on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
start();
