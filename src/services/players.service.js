import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export function getPlayers() {
  return prisma.player.findMany({
    include: { team: true }
  });
}

export function getPlayerById(id) {
  return prisma.player.findUnique({
    where: { id },
    include: { team: true }
  });
}

export function createPlayer(data) {
  return prisma.player.create({ data });
}

export function updatePlayer(id, data) {
  return prisma.player.update({
    where: { id },
    data
  });
}

export function deletePlayer(id) {
  return prisma.player.delete({
    where: { id }
  });
}
