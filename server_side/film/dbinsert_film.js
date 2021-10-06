const pool = require("../db");

const insertQuery = `INSERT INTO public.film (title,description,release_year,language_id,rental_duration,rental_rate
    ,length,replacement_cost,rating,last_update,special_features,fulltext) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11
        ,$12) RETURNING *`;
const values = [
  "Free Guy",
  "A bank teller discovers that he's actually an NPC inside a brutal, open world video game.",
  "2021",
  "1",
  "6",
  "7.3",
  "85",
  "19.99",
  "PG-13",
  "2021-10-06 10:13:13.129",
  ["Deleted Scenes"],
  "'african':1 'chef':11 'dentist':14 'documentari':7 'egg':2 'fast':5 'fast-pac':4 'forens':19 'gulf':23 'mexico':25 'must':16 'pace':6 'pastri':10 'psychologist':20 'pursu':17",
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
