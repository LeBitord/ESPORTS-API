/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `scoreA` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the column `scoreB` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the column `teamAId` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the column `teamBId` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Player` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `Tournament` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Team` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `opponent` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamId` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Made the column `date` on table `Match` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `nickname` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `game` to the `Tournament` table without a default value. This is not possible if the table is not empty.
  - Made the column `startDate` on table `Tournament` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "Team" ADD COLUMN "country" TEXT;
ALTER TABLE "Team" ADD COLUMN "logo" TEXT;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "TournamentTeam" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tournamentId" INTEGER NOT NULL,
    "teamId" INTEGER NOT NULL,
    CONSTRAINT "TournamentTeam_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TournamentTeam_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Match" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tournamentId" INTEGER NOT NULL,
    "teamId" INTEGER NOT NULL,
    "opponent" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "score" TEXT,
    "result" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Match_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Match_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Match" ("date", "id", "tournamentId") SELECT "date", "id", "tournamentId" FROM "Match";
DROP TABLE "Match";
ALTER TABLE "new_Match" RENAME TO "Match";
CREATE TABLE "new_Player" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nickname" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "teamId" INTEGER,
    "role" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Player_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Player" ("id", "role", "teamId") SELECT "id", "role", "teamId" FROM "Player";
DROP TABLE "Player";
ALTER TABLE "new_Player" RENAME TO "Player";
CREATE UNIQUE INDEX "Player_nickname_key" ON "Player"("nickname");
CREATE TABLE "new_Tournament" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "game" TEXT NOT NULL,
    "prizePool" REAL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Tournament" ("endDate", "id", "name", "startDate") SELECT "endDate", "id", "name", "startDate" FROM "Tournament";
DROP TABLE "Tournament";
ALTER TABLE "new_Tournament" RENAME TO "Tournament";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "TournamentTeam_tournamentId_teamId_key" ON "TournamentTeam"("tournamentId", "teamId");

-- CreateIndex
CREATE UNIQUE INDEX "Team_name_key" ON "Team"("name");
