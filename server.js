const express = require("express");
const app = express();

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
  "Sonia",
  "Alberto"
];

const apellido1 = [
  "Gomez",
  "Sanchez",
  "Perez",
  "Ballesta",
  "Martinez",
  "Rayo",
  "Garcia",
  "Tarifa"
];

const apellido2 = [
   "Gomez",
  "Sanchez",
  "Perez",
  "Ballesta",
  "Martinez",
  "Rayo",
  "Garcia",
  "Tarifa"
];

app.get("/", (req, res) => {
  const randomName =
    names[Math.floor(Math.random() * names.length)];

  const randomApellido1 =
    apellido1[Math.floor(Math.random() * apellidos.length)];

  const randomApellido2 = 
      apellido2[Math.floor(Math.random() * apellidos.length)];

  res.send(`
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Random Name Generator</title>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #ff85c2, #ffb347);
}

.card {
  background: white;
  width: 450px;
  padding: 40px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

h1 {
  color: #333;
  margin-bottom: 20px;
}

.name {
  font-size: 2rem;
  font-weight: bold;
  color: #ff4fa3;
  margin: 30px 0;
}

button {
  background-color: #ff85c2;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
}

button:hover {
  background-color: #ff4fa3;
  transform: translateY(-2px);
}

.footer {
  margin-top: 25px;
  color: #777;
  font-size: 14px;
}
</style>
</head>

<body>
  <div class="card">
    <h1>🎲 Generador de nombres aleatorios </h1>

    <div class="name">
      ${randomName} ${randomApellido1} ${randomApellido2}
    </div>

    <button onclick="window.location.reload()">
      Generar otro nombre
    </button>

    <div class="footer">
      Desplegado en OpenShift 🚀
    </div>
  </div>
</body>
</html>
`);
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
