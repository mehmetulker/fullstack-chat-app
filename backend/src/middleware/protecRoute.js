import jwt from "jsonwebtoken";
import User from "../models/Users.js";

const protectRouter = async (req, res, next) => {
  const token = req.cookies.jwt;
  //console.log("token", token);

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //console.log("decoded", decoded);
    if (!decoded) {
      return res.status(401).json({ message: "UnauthorizedInvalid token." });
    }
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({ message: "User not found." });
    }
    req.user = user;

    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token." });
  }
};

export default protectRouter;
