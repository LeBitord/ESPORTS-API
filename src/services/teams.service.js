import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function getTeams() {
  return prisma.team.findMany({
    include: { players: true }
  });
}

export function getTeamById(id) {
  return prisma.team.findUnique({
    where: { id },
    include: { players: true }
  });
}

export function createTeam(data) {
  return prisma.team.create({ data });
}

export function updateTeam(id, data) {
  return prisma.team.update({
    where: { id },
    data
  });
}

export function deleteTeam(id) {
  return prisma.team.delete({
    where: { id }
  });
}
