const express = require("express");
const cors = require("cors");
const { sql } = require("@vercel/postgres");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/education", async (req, res) => {
  try {
    const { rows } = await sql`SELECT * FROM education ORDER BY period DESC;`;
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: "Gagal mengambil data pendidikan" });
  }
});
app.get("/api/skills", async (req, res) => {
  try {
    const { rows } = await sql`SELECT * FROM skills;`;
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: "Gagal mengambil data skill" });
  }
});
app.get("/api/projects", async (req, res) => {
  try {
    const { rows } = await sql`SELECT * FROM projects;`;
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: "Gagal mengambil data proyek" });
  }
});

module.exports = app;
