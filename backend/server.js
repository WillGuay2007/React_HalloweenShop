const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


//POUR LA REMISE, J'AI JUSTE MIS UNE DATABASE NOMMÉ auth_db ET UNE TABLE Y EST PRÉSENTE.
//LE NOM DE LA TABLE EST users ET PEUT AVOIR UN id, email et password.

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "auth_db"
});

db.connect((err) => {
    if (err) {
      console.log("Erreur MySQL :", err);
    } else {
      console.log("Connecté à MySQL");
    }
});
  

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/test", (req, res) => {
    console.log(req.body);
    res.send("POST reçu");
});

app.post("/signup", (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).send("Champs manquants");
    }
  
    const sql = "INSERT INTO users (email, password) VALUES (?, ?)";
  
    db.query(sql, [email, password], (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Erreur signup");
      }
  
      res.send("Utilisateur créé");
    });
});

app.post("/signin", (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).send("Champs manquants");
    }
  
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  
    db.query(sql, [email, password], (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Erreur serveur");
      }
  
      if (results.length === 0) {
        return res.status(401).send("Email ou mot de passe incorrect");
      }
  
      res.send("Connexion réussie");
    });
});
  
  
  
  

app.listen(8081, () => {
  console.log("Server running on http://localhost:8081");
});
