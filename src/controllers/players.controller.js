import * as playerService from "../services/players.service.js";

export async function getPlayers(req, res) {
  const players = await playerService.getPlayers();
  res.json(players);
}

export async function getPlayerById(req, res) {
  const player = await playerService.getPlayerById(Number(req.params.id));
  res.json(player);
}

export async function createPlayer(req, res) {
  const player = await playerService.createPlayer(req.body);
  res.status(201).json(player);
}

export async function updatePlayer(req, res) {
  const player = await playerService.updatePlayer(Number(req.params.id), req.body);
  res.json(player);
}

export async function deletePlayer(req, res) {
  await playerService.deletePlayer(Number(req.params.id));
  res.json({ message: "Player deleted" });
}
