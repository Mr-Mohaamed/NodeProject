const User = require("../../models/users");
const bcrypt = require("bcrypt");

const createUserSrv = async ({ name, email, password }) => {
  const saltRounds = Number(process.env.SALT_ROUNDS);

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const user = await User.create({ name, email, password: hashedPassword });

  const createdUser = { ...user.toObject() };

  delete createdUser.password;

  return createdUser;
};

module.exports = createUserSrv;
