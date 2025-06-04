import express from "express";
import cors from "cors";
import axios from "axios";
import StreamElement from "./utils/donations/streamelements.js";
import fs from "fs";
import path from "path";

const GITHUB_OWNER = "KickTalkOrg";
const GITHUB_REPO = "KickTalk";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const DONATIONS_FILE = path.resolve("./donations.json");


const port = 8000;
const app = express();



const client = new StreamElement({
  JWT: "",
});


function saveDonation(donation) {
  let donations = [];
  if (fs.existsSync(DONATIONS_FILE)) {
    try {
      donations = JSON.parse(fs.readFileSync(DONATIONS_FILE, "utf-8"));
    } catch (e) {
      donations = [];
    }
  }
  donations.push(donation);
  fs.writeFileSync(DONATIONS_FILE, JSON.stringify(donations, null, 2));
}


client.connect();

client.on("message", (data) => {
  console.log(`Message received: ${data}`);
});

client.on("donation", (data) => {
  console.log(`Donation received: ${data.name} - ${data.message}`);
  saveDonation({
    name: data.name,
    message: data.message,
    amount: data.amount,
    timestamp: new Date().toISOString(),
  });
});


app.use(
  cors({
    origin: ["http://localhost:3000", "https://kicktalk.app", "https://www.kicktalk.app", "http://localhost:5173"],
    methods: ["GET"],
  }),
);

const githubApi = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/vnd.github+json",
    ...(GITHUB_TOKEN && { Authorization: `token ${GITHUB_TOKEN}` }),
  },
});

app.get("/changelog", async (req, res) => {
  const changelogResponse = [];
  try {
    const response = await githubApi.get(`/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases`);
    response.data.forEach((release) => {
      const { name, tag_name, published_at, body } = release;
      changelogResponse.push({
        name,
        tag_name,
        published_at,
        body: body,
      });
    });
    res.json(changelogResponse);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch releases", details: err.message });
  }
});

app.get("/releases", async (req, res) => {
  try {
    const response = await githubApi.get(`/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch releases", details: err.message });
  }
});

app.get("/releases/:tag", async (req, res) => {
  const { tag } = req.params;
  try {
    const response = await githubApi.get(`/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases/tags/${tag}`);
    res.json(response.data);
  } catch (err) {
    res.status(404).json({ error: `Release with tag '${tag}' not found`, details: err.message });
  }
});

app.get("/download", async (req, res) => {
  try {
    const response = await githubApi.get(`/repos/${GITHUB_OWNER}/${GITHUB_REPO}/releases`);
    const latestRelease = response.data[0];
    const exeAsset = latestRelease.assets.find((asset) => asset.name === "KickTalk.exe");
    if (!exeAsset) {
      return res.status(404).json({ error: "KickTalk.exe not found in latest release" });
    }

    const downloadUrl = exeAsset.browser_download_url.replace("http:", "https:");
    return res.redirect(downloadUrl);
  } catch (err) {
    res.status(400).json({ error: "Failed to fetch release", details: err.message });
  }
});

app.get("/downloads/KickTalkBetaTest.exe", (req, res) => {
  res.redirect("https://kicktalk.app/changelogs?version=latest");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
