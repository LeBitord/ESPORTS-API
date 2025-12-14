import { Router } from "express";
import {
  getTournaments,
  getTournamentById,
  createTournament,
  updateTournament,
  deleteTournament
} from "../controllers/tournaments.controller.js";

const router = Router();

router.get("/", getTournaments);
router.get("/:id", getTournamentById);
router.post("/", createTournament);
router.put("/:id", updateTournament);
router.delete("/:id", deleteTournament);

export default router;
