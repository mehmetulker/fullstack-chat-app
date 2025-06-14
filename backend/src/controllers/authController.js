import User from "../models/Users.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const singup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const boyProfilePicUrl = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePicUrl = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      confirmPassword: hashedPassword,
      gender,
      profilePic: gender === "Male" ? boyProfilePicUrl : girlProfilePicUrl,
    });

    await generateTokenAndSetCookie(newUser._id, res); // ✅ Sadece burada kullanılabilir
    await newUser.save();

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error in signup controller:", error.message); // ✅ Sadece burada kullanılabilir
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
};
export const login = async (req, res) => {
  console.log("LoginUser");

  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    console.log("user:", user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("isPasswordValid:", isPasswordValid);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    await generateTokenAndSetCookie(user._id, res);

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("Error in login controller:", error.message);
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
};
export const logout = async (req, res) => {
  console.log("logoutUser");
  try {
    res.clearCookie("jwt", "", {
      maxAge: 0,
    });
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error("Error in logout controller:", error.message);
    res
      .status(500)
      .json({ message: "Error logging out", error: error.message });
  }
};
