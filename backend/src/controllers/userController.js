import User from "../models/Users.js";

const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    //{ _id: { $ne: loggedInUserId } }: Sorgu filtresi. _id alanı, loggedInUserId'ye eşit olmayan ($ne = "not equal") kullanıcıları getirir.
    const users = await User.find({ _id: { $ne: loggedInUserId } }).select(
      "-password -confirmPassword"
    );
    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching users.", error: error.message });
  }
};

export { getUsersForSidebar };
