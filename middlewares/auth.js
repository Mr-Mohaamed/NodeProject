const jwt = require("jsonwebtoken");
const util = require("util");
const APIError = require("../utils/apiError");

const jwtVerify = util.promisify(jwt.verify);

module.exports = async (req, res, next) => {
  const tokenData = req.headers.authorization;
  if (!tokenData) {
    throw new APIError("Unauthorized", 401);
  }
  const token = tokenData.split(" ")[1];

  const decoded = await jwtVerify(token, process.env.JWT_SECRET_KEY);

  req.user = decoded;

  next();
};
