const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const  userRoutes = require("./routes/userRoutes");
const  eventRoutes = require("./routes/eventRoutes");
const  timeslotRoutes = require("./routes/timeslotRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const path=require("path");



const app = express();
dotenv.config();
connectDB();
app.use(express.json());



app.use("/api/users", userRoutes);
app.use('/api/event',eventRoutes)
app.use('/api/timeslot',timeslotRoutes)

app.use(errorHandler)
app.use(notFound)


// --------------------------deployment------------------------------


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("/", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
// --------------------------deployment------------------------------


const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
