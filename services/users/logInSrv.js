const User = require("../../models/users");
const APIError = require("../../utils/apiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const util = require("util");
const crypto = require("crypto");

const jwtSign = util.promisify(jwt.sign);

const logInSrv = async (email, password) => {
  // retrive user from the db
  const user = await User.findOne({ email });
  if (!user) {
    throw new APIError("Invalid email or password", 400);
  }
  // compare hashedPassword with incoming password
  const isPasswordMatched = await bcrypt.compare(password, user.password);
  if (!isPasswordMatched) {
    throw new APIError("Invalid email or password", 400);
  }

  // generate jsonWeb token

  const token = await jwtSign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "1h",
    }
  );
  // return token
  return token;
};

module.exports = logInSrv;

// generateRandomText = (length) => {
//   return crypto.randomBytes(length).toString("hex");
// };
