const Pool = require("pg").Pool;

const dbConn = new Pool({
  user: "postgres",
  password: "admin",
  host: "localhost",
  port: "5432",
  database: "DVDRental_db",
});

module.exports = dbConn;
