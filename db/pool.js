const { Pool } = require("pg");
require("dotenv").config();

module.exports = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

/*
Read, re-read, and re-re-read again:
    https://node-postgres.com/features/connecting#connection-uri
*/
