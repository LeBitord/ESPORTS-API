import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Liste tournaments" });
});

export default router;