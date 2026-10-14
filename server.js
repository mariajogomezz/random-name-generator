const express = require("express");
const app = express ();

const names = [
  "Maria Jose",
  "Antonio",
  "Ana",
  "Laura",
  "Elena",
  "Claudia",
  "Gustavo",
  "Adrian",
  "Miguel",
  "Pepita",
  "Natalia",
  "Diego",
];

app.get("/", (req, res) => {
  const randomName = names[Math.floor(Math.random() * names.length)];

        res.send(`
        <html>
         <body style="font-family: Arial; text-align:center; margin-top:50px;">
          <h1>Random Name Generator</h1>
          <h2>${randomName}</h2>
          <button onclick="window.location.reload()">
          Generate another name 
          </button>
        </body>
      </html>
      `);
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
         
