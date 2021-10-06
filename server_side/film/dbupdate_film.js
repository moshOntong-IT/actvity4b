const pool = require("../db");

pool.query(
  "UPDATE public.film SET title = $1 WHERE film_id = 1001 RETURNING *",
  ["Libre Guy"],
  (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res.rows);
    }
  }
);
pool.end();
