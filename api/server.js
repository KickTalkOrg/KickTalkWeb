import express from "express";
import cors from "cors";
import path from "path";
import { userBadges } from "./userBadges.js";
const __dirname = path.resolve();

const port = 3000;
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET"],
  }),
);

app.get("/badges", (_, res) => {
  res.json(userBadges);
});

app.get("/badges/:name", (req, res) => {
  const name = req.params.name;
  const filePath = path.join(__dirname, "badges", `${name}.webp`);

  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).json({ error: "Badge not found" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
