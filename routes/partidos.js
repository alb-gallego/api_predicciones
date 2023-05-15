var mysql      = require('mysql');
var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();

// Crea una nueva instancia de la base de datos SQLite
const db = new sqlite3.Database('dbtfg.sqlite');

// Ejecuta una consulta SQL
db.all("SELECT * FROM PARTIDOS", (error, rows) => {
  if (error) {
    throw error;
  }

  // Maneja los resultados de la consulta
  console.log(rows);
});

// Cierra la conexión a la base de datos
db.close();

/* GET home page. */
router.get('/partidos', function(req, res, next) {
    res.send('PARTIDOS');
    console.log("CONECTADO");
  });


module.exports = router;
