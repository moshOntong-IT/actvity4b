const pool = require("../db");

pool.query(
  "UPDATE public.rental SET last_update = $1 WHERE rental_id = 16051 RETURNING *",
  ['2021-10-6 21:23:00'],
  (err, res) => {
    if (err) {
      console.log(err.stack);
    } else {
      console.log(res.rows);
    }
  }
);
pool.end();
