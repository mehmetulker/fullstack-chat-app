import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const secretKey = process.env.JWT_SECRET || "defaultSecretKey";
  const expiresIn = "15d"; // Token expiration time

  const token = jwt.sign({ userId }, secretKey, { expiresIn });

  // Set the token as a cookie
  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 3600000,
    sameSite: "Strict",
    secure: process.env.NODE_ENV !== "development", // Use secure cookies in production
  }); // 1 hour

  return token;
};

export default generateTokenAndSetCookie;
