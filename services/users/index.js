const createUserSrv = require("./createUserSrv");
const getAllUsersSrv = require("./getAllUsersSrv");
const getUserByIdSrv = require("./getUserByIdSrv");
const updateUserByIdSrv = require("./updateUserByIdSrv");
const deleteUserByIdSrv = require("./deleteUserByIdSrv");
const logInSrv = require("./logInSrv");

module.exports = {
  createUserSrv,
  getAllUsersSrv,
  getUserByIdSrv,
  updateUserByIdSrv,
  deleteUserByIdSrv,
  logInSrv,
};
