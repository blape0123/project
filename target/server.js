const express = require("express");

const app = express();
const PORT = 3002;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Target server response",
    server: "target",
    time: new Date().toISOString()
  });
});

app.get("/api/data", (req, res) => {
  res.json({
    success: true,
    data: [
      { id: 1, name: "Test Monster", hp: 100 },
      { id: 2, name: "Test Slime", hp: 60 }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Target server: http://localhost:${PORT}`);
});