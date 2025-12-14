import { PrismaClient } from '@prisma/client';
import { createClient } from '@libsql/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';

const driver = createClient({
  url: "file:./dev.db",
});

const adapter = new PrismaLibSql(driver);

const prisma = new PrismaClient({
  adapter,
});

export default prisma;
