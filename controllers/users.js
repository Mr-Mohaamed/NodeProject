const usersSrv = require("../services/users");

class UsersController {
  async signUp(req, res) {
    const { name, email, password } = req.body;

    const payload = { name, email, password };

    const user = await usersSrv.createUserSrv(payload);

    res.status(201).json({
      message: "User created successfully",
      status: "success",
      data: user,
    });
  }
  async getAllUsers(req, res) {
    // read users.json
    const users = await usersSrv.getAllUsersSrv();

    res.status(200).json({
      message: "Users fetched successfully",
      status: "success",
      data: users,
    });
  }
  async getUserById(req, res) {
    const id = req.params.id;

    console.log("👉👉 req.user ", req.user);

    const user = await usersSrv.getUserByIdSrv(id);

    res.status(200).json({
      message: "User fetched successfully",
      status: "success",
      data: user,
    });
  }
  async updateUserById(req, res) {
    const id = req.params.id;
    const { name } = req.body;

    const user = await usersSrv.updateUserByIdSrv(id, name);

    res.status(200).json({
      message: "user updated successfully",
      status: "success",
      data: user,
    });
  }
  async deleteUserById(req, res) {
    const id = req.params.id;

    await usersSrv.deleteUserByIdSrv(id);

    res.status(204).json({
      // 204 => no content, no response body
      message: "user deleted successfully",
      status: "success",
    });
  }

  async logIn(req, res) {
    const { email, password } = req.body;

    const token = await usersSrv.logInSrv(email, password);

    res.status(200).json({
      message: "User logged in successfully",
      status: "success",
      data: token,
    });
  }
}

// singleton pattern
module.exports = new UsersController();
