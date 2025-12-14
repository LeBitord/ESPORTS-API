import * as matchService from "../services/matches.service.js";

export async function getMatches(req, res) {
  const matches = await matchService.getMatches();
  res.json(matches);
}

export async function getMatchById(req, res) {
  const match = await matchService.getMatchById(Number(req.params.id));
  res.json(match);
}

export async function createMatch(req, res) {
  const match = await matchService.createMatch(req.body);
  res.status(201).json(match);
}

export async function updateMatch(req, res) {
  const match = await matchService.updateMatch(Number(req.params.id), req.body);
  res.json(match);
}

export async function deleteMatch(req, res) {
  await matchService.deleteMatch(Number(req.params.id));
  res.json({ message: "Match deleted" });
}
