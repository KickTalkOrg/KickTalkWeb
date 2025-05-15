import express from "express";
import cors from "cors";
import path from "path";
import axios from "axios";
import { userBadges } from "./userBadges.js";
const GITHUB_OWNER = 'KickTalkOrg';
const GITHUB_REPO = 'KickTalk';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const __dirname = path.resolve();

const port = 8000;
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET"],
  }),
);

const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Accept': 'application/vnd.github+json',
    ...(GITHUB_TOKEN && { Authorization: `token ${GITHUB_TOKEN}` })
  }
});

app.get('/releases', async (req, res) => {
  try {
    const response = await githubApi.get(`/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases`);
    console.log(response);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch releases', details: err.message });
  }
});

app.get('/releases/:tag', async (req, res) => {
  const { tag } = req.params;
  try {
    const response = await githubApi.get(`/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases/tags/${tag}`);
    res.json(response.data);
  } catch (err) {
    res.status(404).json({ error: `Release with tag '${tag}' not found`, details: err.message });
  }
});


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
