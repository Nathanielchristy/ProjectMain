const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const  userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("api is running");
});

app.use("/api/users", userRoutes);

app.use(errorHandler)
app.use(notFound)

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
