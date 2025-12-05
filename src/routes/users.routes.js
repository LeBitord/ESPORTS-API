import { Router } from "express";

const router = Router();

// Exemple minimal : à compléter plus tard
router.get("/", (req, res) => {
  res.json({ message: "Liste users" });
});

export default router;