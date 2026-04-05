import User from "../models/User.js";

// GET ALL USERS (Admin)
export const getUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

// UPDATE USER ROLE / STATUS
export const updateUser = async (req, res) => {
  const { role, isActive } = req.body;

  const user = await User.findByIdAndUpdate(
    req.params.id,
    { role, isActive },
    { new: true }
  );

  if (!user) {
    return res.status(404).json({ msg: "User not found" });
  }

  res.json(user);
};