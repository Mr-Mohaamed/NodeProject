const APIError = require("../utils/apiError");

const errorHandler = (err, req, res, next) => {
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: err.message,
      status: "failed",
    });
  }

  if (err.code === 11000) {
    const field = Object.keys(err.keyPattern)[0];
    return res.status(400).json({
      message: `this ${field} already exists`,
      status: "failed",
    });
  }

  console.error("❌❌ error", err.stack);
  if (err instanceof APIError) {
    return res.status(err.statusCode).json({
      message: err.message,
      status: "failed",
    });
  }

  res.status(500).json({
    message: "something went wrong",
    status: "failed",
  });
};

module.exports = errorHandler;
