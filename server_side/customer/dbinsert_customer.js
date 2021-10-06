const pool = require("../db");

const insertQuery = `INSERT INTO public.customer (store_id,first_name,last_name,email,address_id,activebool 
    ) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`;
const values = [
  "1",
  "Hizon",
  "Caja",
  "hcaja@gmail.com",
  "5",
  "true",
];
pool.query(insertQuery, values, (err, res) => {
  if (err) {
    console.log(err.stack);
  } else {
    console.log(res.rows);
  }
});