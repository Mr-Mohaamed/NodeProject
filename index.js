const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const server = express();
const usersRouter = require("./routers/users");
const errorHandler = require("./middlewares/errorHandler");

dotenv.config();

// application level middlewares
server.use(express.json());
server.use(cors());
server.use(morgan("dev"));
// routes
server.use("/users", usersRouter);

// error handling middleware
server.use(errorHandler);

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("✅✅ connected to the database");
    })
    .catch((err) => {
      console.log("❌❌ error connecting to the database", err);
    });
});
