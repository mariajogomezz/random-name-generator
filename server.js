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
  "Alberto",
  "Javier",
  "Carmen",
  "Lucia",
  "David",
  "Paula",
  "Daniel",
  "Sara",
  "Carlos",
  "Marta",
  "Jorge",
  "Cristina",
  "Alejandro",
  "Raquel",
  "Fernando",
  "Patricia",
  "Ivan",
  "Beatriz",
  "Ruben",
  "Angela",
  "Sergio",
  "Andrea",
  "Victor",
  "Noelia",
  "Pablo",
  "Silvia",
  "Marcos",
  "Monica",
  "Alvaro",
  "Nuria",
  "Hector",
  "Eva",
  "Cristian",
  "Rosa",
  "Alicia",
  "Roberto",
  "Veronica",
  "Eduardo",
  "Lidia",
  "Samuel",
  "Teresa",
  "Oscar",
  "Julia",
  "Emilio",
  "Rafael",
  "Pilar",
  "Jaime",
  "Irene",
  "Rocio",
  "Manuel",
  "Gloria",
  "Jose",
  "Mercedes",
  "Enrique",
  "Isabel",
  "Francisco",
  "Miriam",
  "Celia",
  "Marina",
  "Borja",
  "Santiago",
  "Aitana",
  "Carla",
  "Valeria",
  "Bruno",
  "Alba",
  "Martin",
  "Gonzalo",
  "Candela",
  "Leire",
  "Asier",
  "Ainhoa",
  "Joel",
  "Hugo",
  "Mario",
  "Olga",
  "Esther",
  "Diana",
  "Vicente",
  "Tomas",
  "Belen",
  "Jesica",
  "Lorena",
  "Guillermo",
  "Juan",
  "Susana"
];

const apellido1 = [
  "Garcia",
  "Gomez",
  "Sanchez",
  "Perez",
  "Martinez",
  "Lopez",
  "Fernandez",
  "Gonzalez",
  "Ruiz",
  "Diaz",
  "Moreno",
  "Muñoz",
  "Alonso",
  "Romero",
  "Navarro",
  "Torres",
  "Gutierrez",
  "Vazquez",
  "Ramos",
  "Gil",
  "Serrano",
  "Molina",
  "Blanco",
  "Suarez",
  "Castro",
  "Ortega",
  "Delgado",
  "Ortiz",
  "Rubio",
  "Marin",
  "Sanz",
  "Iglesias",
  "Medina",
  "Herrera",
  "Cortes",
  "Calvo",
  "Leon",
  "Peña",
  "Vega",
  "Cabrera",
  "Reyes",
  "Campos",
  "Fuentes",
  "Carrasco",
  "Prieto",
  "Flores",
  "Aguilar",
  "Nieto",
  "Pascual",
  "Ballesta"
];


const apellido2 = [
 "Garcia",
  "Gomez",
  "Sanchez",
  "Perez",
  "Martinez",
  "Lopez",
  "Fernandez",
  "Gonzalez",
  "Ruiz",
  "Diaz",
  "Moreno",
  "Muñoz",
  "Alonso",
  "Romero",
  "Navarro",
  "Torres",
  "Gutierrez",
  "Vazquez",
  "Ramos",
  "Gil",
  "Serrano",
  "Molina",
  "Blanco",
  "Suarez",
  "Castro",
  "Ortega",
  "Delgado",
  "Ortiz",
  "Rubio",
  "Marin",
  "Sanz",
  "Iglesias",
  "Medina",
  "Herrera",
  "Cortes",
  "Calvo",
  "Leon",
  "Peña",
  "Vega",
  "Cabrera",
  "Reyes",
  "Campos",
  "Fuentes",
  "Carrasco",
  "Prieto",
  "Flores",
  "Aguilar",
  "Nieto",
  "Pascual",
  "Ballesta"
];

const profesiones = [
  "Ingeniera DevOps",
  "Desarrollador Full Stack",
  "Médico",
  "Profesor",
  "Piloto",
  "Arquitecto",
  "Diseñador UX",
  "Analista de Datos",
  "Bombero",
  "Policía",
  "Veterinario",
  "Abogado"
    ];

const ciudades = [
  "Madrid",
  "Barcelona",
  "Valencia",
  "Sevilla",
  "Bilbao",
  "Málaga",
  "Zaragoza",
  "Murcia",
  "Valladolid",
  "A Coruña"
];

app.get("/", (req, res) => {
  const randomName =
    names[Math.floor(Math.random() * names.length)];

  const randomApellido1 =
    apellido1[Math.floor(Math.random() * apellido1.length)];

  const randomApellido2 = 
      apellido2[Math.floor(Math.random() * apellido2.length)];
const edad = Math.floor(Math.random() * 48) + 18;
const profesion =
  profesiones[Math.floor(Math.random() * profesiones.length)];
const ciudad =
  ciudades[Math.floor(Math.random() * ciudades.length)];
  
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
    <h1>🎲 Generador de personas ficticias </h1>

    <div class="name">
      ${randomName} ${randomApellido1} ${randomApellido2}
    </div>
<p>🎂 <strong>Edad:</strong> ${edad} años</p>
<br>
<p>💼 <strong>Profesión:</strong> ${profesion} </p>
<br>
<p>📍 <strong>Ciudad:</strong> ${ciudad} </p>
<br>

    <button onclick="window.location.reload()">
      Generar otra persona
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
