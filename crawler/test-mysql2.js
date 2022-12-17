
const mysql2 = require('mysql2/promise');
require('dotenv').config();
// let dotenv = require('dotenv');
// dotenv.config();

(async () => {
  const connection = await mysql2.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    // 密碼不可推上github，且不留紀錄
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
  });

  // simple query
  let [data,fields] = await connection.query('SELECT * FROM `stocks`');
//   let data = result[0];
  // console.log(result);
  console.log(data);

  connection.end();
})();