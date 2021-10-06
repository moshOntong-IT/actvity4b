const pool = require("../db");

const insertQuery = `INSERT INTO public.rental (rental_date,inventory_id,customer_id,return_date,staff_id,last_update 
    ) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`;
const values = [
  "2021-01-2 22:53:30",
  "362",
  "132",
  "2022-06-3 12:05:10",
  "2",
  "2024-01-1 1:1:50",
];
pool.query(insertQuery, values, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
  }
});

// pool.query(
//   "INSERT into public.film (title) VALUES ($1) RETURNING *",
//   ["Mosh"],
//   (err, res) => {
//     if (err) {
//       console.log(err.stack);
//     } else {
//       console.log(res.rows);
//     }
//   }
// );
pool.end();
