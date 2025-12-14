import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import Database from "better-sqlite3";

const sqlite = new Database("dev.db");
const adapter = new PrismaBetterSqlite3(sqlite);

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seed OK !");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
