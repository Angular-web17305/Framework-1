import UserCheme from "../Models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { CheckvalidateSignIn, CheckvalidateSignUp } from "../Middlewares/User";

export const SignUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const UserExists = await UserCheme.findOne({ email });
    if (UserExists) {
      return res.json({
        message: " Tài khoản đã tồn tại ",
      });
    }
    const { error } = CheckvalidateSignUp.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      return res.json({
        message: error.details[0].message,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 8);
    const user = await UserCheme.create({
      name,
      email,
      password: hashedPassword,
      role: "member",
    });
    user.password = undefined;
    return res.json({
      message: "Tạo tài khoản thành công",
      data: user,
    });
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });

  }


};

export const Signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { error } = CheckvalidateSignIn.validate(req.body);
    if (error) {
      return res.status(500).json({
        error: error.details[0].message,
      });
    }
    const user = await UserCheme.findOne({ email });
    if (!user) {
      return res.json({
        message: "Email không tồn tại",
      });
    }
    const isMach = await bcrypt.compare(password, user.password);
    if (!isMach) {
      return res.json({
        message: "Password không đúng",
      });
    }
    const token = jwt.sign({ _id: user.id }, "1234", { expiresIn: "1h" });
    user.password = undefined;
    // localStorage.setItem("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdmMTZkZjZlN2I3ZWQ4NGZjNWI4ODciLCJpYXQiOjE2ODYwNTEyMTMsImV4cCI6MTY4NjA1NDgxM30.yDuIeGtkDvuAtrXXHOMUvH9uQ60LP_H0R6J9ZLYmRLQ", token);
    return res.json({
      message: "Đăng nhập thành công",
      accessToken: token,
      user,
    });
  } catch (error) {
    return res.status(400).json({
      massage: error.message,
    });

  }

};
// export const SignUp = async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body;
//     const UserExists = await UserCheme.findOne({ email });
//     if (UserExists) {
//       return res.json({
//         message: "Tài khoản đã tồn tại",
//       });
//     }
//     const { error } = CheckvalidateSignUp.validate(req.body, {
//       abortEarly: false,
//     });
//     if (error) {
//       return res.json({
//         message: error.details[0].message,
//       });
//     }
//     const hashedPassword = await bcrypt.hash(password, 8);
//     const user = await UserCheme.create({
//       name,
//       email,
//       password: hashedPassword,
//       role: role || "user", // Sử dụng giá trị role từ req.body, nếu không có, mặc định là "user"
//     });
//     user.password = undefined;
//     return res.json({
//       message: "Tạo tài khoản thành công",
//       data: user,
//     });
//   } catch (error) {
//     return res.status(401).json({
//       message: error.message,
//     });
//   }
// };

