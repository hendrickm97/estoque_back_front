import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "MinhaSenhaSQL2023!",
  database: "estoque",
});
