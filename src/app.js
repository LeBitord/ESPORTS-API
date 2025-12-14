import express from "express";
import teamsRoutes from "./routes/teams.routes.js";
import playersRoutes from "./routes/players.routes.js";
import tournamentsRoutes from "./routes/tournaments.routes.js";
import matchesRoutes from "./routes/matches.routes.js";

const app = express();

app.use(express.json());

// Routes
app.use("/api/teams", teamsRoutes);
app.use("/api/players", playersRoutes);
app.use("/api/tournaments", tournamentsRoutes);
app.use("/api/matches", matchesRoutes);

export default app;
