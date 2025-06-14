const APIError = require("../utils/apiError");

const restricTo = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new APIError("Forbidden", 403);
    }
    next();
  };
};

module.exports = restricTo;
