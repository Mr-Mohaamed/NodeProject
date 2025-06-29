const User = require("../../models/users");
const APIError = require("../../utils/apiError");
const { isValidObjectId } = require("mongoose");

const getUserByIdSrv = async (id) => {
  if (!isValidObjectId(id)) {
    throw new APIError("Invalid Id", 400);
  }

  const user = await User.findOne({ _id: id });

  if (!user) {
    throw new APIError("user not found", 404);
  }

  return user;
};

module.exports = getUserByIdSrv;
