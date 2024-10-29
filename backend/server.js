const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/api/loripsum", async (req, res) => {
  try {
    const response = await axios.get("https://loripsum.net/api/4/short");
    res.send(response.data);
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
