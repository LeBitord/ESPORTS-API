import prisma from "../config/prisma.js";

export function getMatches() {
  return prisma.match.findMany({
    include: {
      teamA: true,
      teamB: true,
      tournament: true
    }
  });
}

export function getMatchById(id) {
  return prisma.match.findUnique({
    where: { id },
    include: {
      teamA: true,
      teamB: true,
      tournament: true
    }
  });
}

export function createMatch(data) {
  return prisma.match.create({ data });
}

export function updateMatch(id, data) {
  return prisma.match.update({
    where: { id },
    data
  });
}

export function deleteMatch(id) {
  return prisma.match.delete({
    where: { id }
  });
}
