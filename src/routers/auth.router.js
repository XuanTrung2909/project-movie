const express = require("express");
const { signIn, signUp } = require("../controllers/auth.controller");
const {
	checkExistForCreatUser,
} = require("../middlewares/validation/check-exist.middleware");

const authRouter = express.Router();

authRouter.post("/sign-in", signIn);

authRouter.post("/sign-up", checkExistForCreatUser, signUp);

module.exports = {
	authRouter,
};
