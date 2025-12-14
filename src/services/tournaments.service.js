import prisma from "../config/prisma.js";

export function getTournaments() {
  return prisma.tournament.findMany({
    include: { matches: true }
  });
}

export function getTournamentById(id) {
  return prisma.tournament.findUnique({
    where: { id },
    include: { matches: true }
  });
}

export function createTournament(data) {
  return prisma.tournament.create({ data });
}

export function updateTournament(id, data) {
  return prisma.tournament.update({
    where: { id },
    data
  });
}

export function deleteTournament(id) {
  return prisma.tournament.delete({
    where: { id }
  });
}
