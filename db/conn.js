const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbnew",
});

conn.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

let q = "SET sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''))";
conn.query(q, (err, res) => {});

module.exports = conn;
 