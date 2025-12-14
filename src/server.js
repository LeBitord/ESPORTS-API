import app from "./app.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

import prisma from './config/prisma.js';

app.get("/test-db", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});
