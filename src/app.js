import express from "express";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/users.routes.js";
import teamRoutes from "./routes/teams.routes.js";
import tournamentRoutes from "./routes/tournaments.routes.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API OK !");
});

// Brancher les routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/teams", teamRoutes);
app.use("/api/tournaments", tournamentRoutes);

export default app;
