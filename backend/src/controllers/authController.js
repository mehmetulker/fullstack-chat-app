export const singup = async (reg, res) => {
  console.log(reg.body);
  console.log("singupUser");
  res.send("singupUser");
};
export const login = async (reg, res) => {
  console.log("LoginUser");
  res.send("LoginUser");
};
export const logout = async (reg, res) => {
  console.log("logoutUser");
  res.send("logoutUser");
};
