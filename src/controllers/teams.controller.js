import * as teamService from "../services/teams.service.js";

export async function getTeams(req, res) {
  const teams = await teamService.getTeams();
  res.json(teams);
}

export async function getTeamById(req, res) {
  const team = await teamService.getTeamById(Number(req.params.id));
  res.json(team);
}

export async function createTeam(req, res) {
  const team = await teamService.createTeam(req.body);
  res.status(201).json(team);
}

export async function updateTeam(req, res) {
  const team = await teamService.updateTeam(Number(req.params.id), req.body);
  res.json(team);
}

export async function deleteTeam(req, res) {
  await teamService.deleteTeam(Number(req.params.id));
  res.json({ message: "Team deleted" });
}
