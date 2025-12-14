import * as tournamentService from "../services/tournaments.service.js";

export async function getTournaments(req, res) {
  const tournaments = await tournamentService.getTournaments();
  res.json(tournaments);
}

export async function getTournamentById(req, res) {
  const tournament = await tournamentService.getTournamentById(Number(req.params.id));
  res.json(tournament);
}

export async function createTournament(req, res) {
  const tournament = await tournamentService.createTournament(req.body);
  res.status(201).json(tournament);
}

export async function updateTournament(req, res) {
  const tournament = await tournamentService.updateTournament(Number(req.params.id), req.body);
  res.json(tournament);
}

export async function deleteTournament(req, res) {
  await tournamentService.deleteTournament(Number(req.params.id));
  res.json({ message: "Tournament deleted" });
}
