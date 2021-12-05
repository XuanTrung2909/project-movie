const bcryptjs = require("bcryptjs");
const { User } = require("../models");
const { tokenGenerate } = require("../utils/token.util");

const signUp = async (req, res) => {
  try {
    const { userName, email, fullName, phone, password } = req.body;

    const salt = bcryptjs.genSaltSync(10);
    const hashPassword = bcryptjs.hashSync(password, salt);
    const newUser = await User.create({
      userName,
      email,
      fullName,
      phone,
      password: hashPassword,
    });
    res.status(201).send({
      message: "Đăng ký Tài Khoản Thành Công",
      newUser,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const signIn = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const userSignIn = await User.findOne({
      where: {
        userName,
      },
    });
    if (userSignIn) {
      const isCheckPassword = bcryptjs.compareSync(
        password,
        userSignIn.password
      );
      if (isCheckPassword) {
        req.userSignIn = userSignIn;
        const token = tokenGenerate(
          userSignIn.id,
          userSignIn.userName,
          userSignIn.email,
          userSignIn.fullName,
          userSignIn.phone,
          userSignIn.role,
          userSignIn.avatar
        );
        res.status(200).send({
          message: "Đăng nhập thành công",
          token,
        });
      } else {
        res.status(400).send({
          message: "Mật khẩu không đúng",
        });
      }
    } else {
      res.status(400).send({
        message: "Tài Khoản không đúng",
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  signIn,
  signUp,
};
