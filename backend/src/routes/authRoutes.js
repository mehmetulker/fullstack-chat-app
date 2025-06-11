import express from "express";
const router = express.Router();

router.post("/signup", (reg, res) => {
  res.send("singup route");
});

router.post("/login", (reg, res) => {
  res.send("login route");
});

router.post("/logout", (reg, res) => {
  res.send("logout route");
});

export default router;
